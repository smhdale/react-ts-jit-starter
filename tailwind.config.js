module.exports = {
	mode: 'jit',
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
	},
	theme: {},
	variants: {},
	plugins: [],
}
