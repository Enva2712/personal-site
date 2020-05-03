/*
 * REFACTOR IN PROGRESS
 * splitting css compiler class into seperate file
 */

const path = require('path')
const fs = require('fs')

const CSSInputDir = path.join(__dirname, '../_css')
const CSSOutputDirHREF = '/css'
const CSSOutputDir = path.join(__dirname, '../../public/', CSSOutputDirHREF)

module.exports = async () => {
	const CSSFilePaths = glob(path.join(CSSInputDir, '**/*.css'))
	const compiledCSSFiles = await Promise.all(CSSFilePaths.map(compile))
	return compiledCSSFiles.reduce((obj, file) => {
		obj[file.path] = file
		return obj
	}, {})
}


const postcssPlugins = [
	require('postcss-preset-env'),
	require('cssnano')
]

const path = require('path')
const crypto = require('crypto')
const fs = require('fs')
const glob = require('glob').sync
const postcss = require('postcss')(postcssPlugins)

class CSSCompiler {
	constructor(inputDir, outputDir) {
		this.inputDir = inputDir
		this.outputDir = outputDir
	}

	async run() {
		fs.mkdirSync(this.outputDir, { recursive: true })
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
