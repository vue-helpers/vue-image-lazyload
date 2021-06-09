import LazyLoad from './directives/lazy-load'

export function install (Vue) {
  Vue.directive('lazy-load', LazyLoad)
}

export {
  LazyLoad
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install
}

export default plugin

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
