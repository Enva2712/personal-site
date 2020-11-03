module.exports = config => {
	config.addPassthroughCopy('photos/**/*.{jpg,jp2,webp}')
	return {
		markdownTemplateEngine: 'njk'
	}
}
