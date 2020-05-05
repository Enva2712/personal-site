const path = require('path')

const CSSInputDir = path.join(__dirname, '../_css')
const CSSOutputDirHREF = '/css'
const CSSOutputDir = path.join(__dirname, '../../public/', CSSOutputDirHREF)

const postcssPlugins = [
	require('postcss-preset-env'),
	require('cssnano')
]

module.exports = async () => {
	const CSSFilePaths = glob(path.join(CSSInputDir, '**/*.css'))
	const compiledCSSFiles = await Promise.all(CSSFilePaths.map(compile))
	return compiledCSSFiles.reduce((obj, file) => {
		obj[file.path] = file
		return obj
	}, {})
}
