const path = require('path')
const CSSCompiler = require('../../lib/css-compiler')

const CSSInputDir = path.join(__dirname, '../_css')
const CSSOutputDirHREF = '/css'
const CSSOutputDir = path.join(__dirname, '../../public/', CSSOutputDirHREF)

const compiler = new CSSCompiler()
	.input(CSSInputDir)
	.plugin(require('postcss-preset-env'), require('cssnano'))
	.output(CSSOutputDir)

module.exports = async () => {
	return await compiler.run();
}
