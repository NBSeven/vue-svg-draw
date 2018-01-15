# vue-svg-draw ![vue](https://img.shields.io/badge/vue-2.*-brightgreen.svg)  [![vivus](https://img.shields.io/badge/dependencies-vivus-yellowgreen.svg)](http://maxwellito.github.io/vivus/)
 这是一个封装了vivus功能的vue组件。  
 vivus是一款展示svg路径动画的js插件，不需要其它依赖库。

## Build Setup

### install dependencies
npm install vue-svg-draw --save

### 使用方法 
` import svgDraw from 'vue-svg-draw' `

注册组件

```
  components:{
    svgDraw
  }

```
` <svg-draw file='/src/assets/test.svg' ></svg-draw> ` 

### 相关链接
[vivus](http://maxwellito.github.io/vivus/) 

[vivus 中文](http://www.jq22.com/jquery-info9266)

### options 
| Property | Type | Default | Description | Value |
| --------------------| :----------------: | :-------------:| ----------------------------------------------------- | :------------------------------------------------------: |
| file | string | 无(必填) | svg文件路径 | 绝对路径 |
| type | string | delayed | 定义使用哪一种动画类型 | delayed, async, oneByOne 或 script |
| duration | integer | 200 | 动画的持续时间 |  |
| start | string | inViewport | 定义如何触发SVG动画 | inViewport,manual,autostart |
| dashGap | integer | 2 |  dashes之间的空白间距  | 默认值为2 |
| forceRender | boolean | true | 强制浏览器重新绘制所有的路径 | 默认值为true，只在IE中有效 |
| selfDestroy | boolean | false | 移除SVG图形上的所有样式，保留它的原始状态 | 暂未使用 |
| onReady | function | function(){} | 当实例在准备开始动画时调用 | |
| pathTimingFunction | function | Vivus.EASE | Timing animation function for each path element of the SVG| 暂未使用 |
| animTimingFunction | function | Vivus.EASE | Timing animation function for the complete SVG | 暂未使用 |



### methods
- stop()  
- reset()  
- play(speed,fun) 
- finish()  
- setFrameProgress(progress) 
- getStatus() 
- destroy() 

### demo
![demo](https://github.com/NBSeven/vue-svg-draw/blob/master/svg-draw.gif)