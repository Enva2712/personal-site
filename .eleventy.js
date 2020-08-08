module.exports = config => {
	config.addPassthroughCopy('photos/**/*.jpg')
	return {
		markdownTemplateEngine: 'njk'
	}
}
