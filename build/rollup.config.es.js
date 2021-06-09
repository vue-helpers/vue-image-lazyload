import base from './rollup.config.base'

const config = Object.assign({}, base, {
	output: {
		name: 'vue-image-lazyload',
		file: 'dist/vue-image-lazyload.esm.js',
		format: 'es',
	},
})

export default config
