module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};