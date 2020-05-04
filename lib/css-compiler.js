const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const postcss = require('postcss')
const glob = require('glob').sync

module.exports = class CSSCompiler {
	constructor(inputPath) {
		// Default to use caller's dir as input
		this.#inputPath = inputPath || module.parent.path
	}

	input(newPath) {
		this.#inputPath = newPath
		return this
	}

	async run() {
		let CSSFilePaths
		if(fs.statSync(this.#inputPath).isDirectory()) {
			CSSFilePaths = glob.sync(path.join(this.#inputPath, '**/*.css'))
		} else {
			CSSFilePaths = [ this.#inputPath ]
		}

		return this
	}
}

async function compile(filePath) {
	const inputPath = path.parse(filePath)
	const inputContent = fs.readFileSync(filePath)
	const outputContent = (await postcss.process(inputContent, { from: filePath.base, to: undefined })).css
	const hash = crypto
		.createHash('sha256')
		.update(outputContent)
		.digest('hex')
	const outputFileHREF = path.join(CSSOutputDirHREF, `${hash}.css`)

	return { file: path.relative(CSSInputDir, filePath), href: outputFileHREF }
}
