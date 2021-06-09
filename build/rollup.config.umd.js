import base from './rollup.config.base'

const config = Object.assign({}, base, {
	output: {
		exports: 'named',
		name: 'vue-image-lazyload',
		file: 'dist/vue-image-lazyload.umd.js',
		format: 'umd',
	},
})

export default config
