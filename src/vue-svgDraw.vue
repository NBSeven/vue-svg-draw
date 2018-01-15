<template>
  <div ref='vuesvg'>
  </div>
</template>

<script>
import Vivus from 'vivus'
export default {
  name: 'app',
  data () {
    return {
      svg: null
    }
  },
  props:{
    file:{
      type:String,
      default: '' // 文件路径 绝对路径
    },
    type:{
      type:String,
      default:'delayed' // 动画类型
    },
    duration:{
      type:Number ,
      default:200  // 过渡时间
    },
    start:{
      type:String,
      default:'inViewport' // 定义如何开始
    },
    onReady:{
      type:Function,
      default:function(){
        console.log("onReady")
      }
    },
    pathTimingFunction:{
      type:Function,
      default:Vivus.EASE
    },
    animTimingFunction:{
      type:Function,
      default:Vivus.EASE
    },
    dashGap:{
      type:Number,
      default:2
    },
    forceRender:{
      type:Boolean,
      default:true
    },
    reverseStack:{
      type:Boolean,
      default:false
    }
  },
  mounted:function(){
    this.initVueSvg()
  },
  methods:{
    initVueSvg(obj) {
      this.svg = new Vivus(this.$refs.vuesvg,
      {
      type: this.type,
      duration: this.duration,
      animTimingFunction: Vivus.EASE,
      file:this.file,
      onReady:this.onReady,
      pathTimingFunction:this.pathTimingFunction,
      animTimingFunction:this.animTimingFunction,
      dashGap:this.dashGap,
      forceRender:this.forceRender,
      reverseStack:this.reverseStack
      })
    },
    stop(){
      this.svg.stop()
    }, // 停止
    reset(){
      this.svg.reset()
    }, // 重绘
    play(speed,fun){
      this.svg.play(speed,fun) 
    },// 播放
    finish(){
      this.svg.finish()
    }, // 完成
    setFrameProgress(progress){
      this.svg.setFrameProgress(progress) // 0~1
    }, //设置进度
    getStatus(){
      this.svg.getStatus()
    }, // 获取状态
    destroy(){
      this.svg.destroy()
    }
  }
}
</script>

<style>

</style>
