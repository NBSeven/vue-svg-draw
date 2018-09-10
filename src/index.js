import vueSvgDraw from './vue-svgDraw.vue'
export default vueSvgDraw
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-svg-draw', vueSvgDraw)
}