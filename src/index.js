import SvgDraw from './vue-svgDraw.vue'
export default SvgDraw
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('svg-draw', SvgDraw)
}