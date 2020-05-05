const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const postcss = require('postcss')
const glob = require('glob').sync

module.exports = class CSSCompiler {
	constructor(inputPath) {
		// Default to use caller's dir as input
		this.input(inputPath)
	}

	input(newPath) {
		// TODO: handle glob paths or directories (change inputPath: string to inputPaths: array)
		this.#inputPath = path.resolve(module.parent.path, newPath || '.')
		return this
	}

	output(newPath) {
		this.#outputPath = newPath
		return this
	}

	plugin(...postcssPlugins) {
		this.#plugins = this.#plugins || []
		this.#plugins.push(postcssPlugins)
	}

	async run() {
		// TODO: this

		return null
	}
}

/*
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
*/
