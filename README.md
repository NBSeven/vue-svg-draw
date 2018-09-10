# vue-svg-draw ![vue](https://img.shields.io/badge/vue-2.*-brightgreen.svg)  [![vivus](https://img.shields.io/badge/dependencies-vivus-yellowgreen.svg)](http://maxwellito.github.io/vivus/)
 这是一个封装了vivus功能的vue组件。  
 vivus是一款展示svg路径动画的js插件，不需要其它依赖库。

## Build Setup

### install dependencies
npm install vue-svg-draw --save

### 使用方法 
` import vueSvgDraw from 'vue-svg-draw' `

注册组件

```
  components:{
    vueSvgDraw
  }

```
` <vue-svg-draw file='/svg/2.svg' type="oneByOne" ref="vuesvg" :onReady="ready" pathTiming="EASE_OUT"></vue-svg-draw> `
` this.$refs.vuesvg.stop()` 

### options 
| Property | Type | Default | Description | Value |
| --------------------| :----------------: | :-------------:| ----------------------------------------------------- | :------------------------------------------------------: |
| vivusId | string | 'vivusId' | 元素id | 任意字符串 |
| file | string | 无(必填) | svg文件路径 | 绝对路径 |
| type | string | delayed | 定义使用哪一种动画类型 | delayed, async, oneByOne 或 script |
| duration | integer | 200 | 动画的持续时间 |  |
| start | string | inViewport | 定义如何触发SVG动画 | inViewport,manual,autostart |
| dashGap | integer | 2 |  dashes之间的空白间距  | 默认值为2 |
| forceRender | boolean | true | 强制浏览器重新绘制所有的路径 | 默认值为true，只在IE中有效 |
| onReady | function | function(){} | 当实例在准备开始动画时调用 | |
| pathTiming| string | 'EASE' | Timing animation function for each path element of the SVG | 'EASE' 'EASE_IN' 'EASE_OUT' 'EASE_OUT_BOUNCE' |
| animTiming | string | 'EASE' | Timing animation function for the complete SVG | 'EASE' 'EASE_IN' 'EASE_OUT' 'EASE_OUT_BOUNCE' |
| callBack | function | function(){}  | 绘制后的回调 | function(){} |




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

### 相关链接
[vivus](http://maxwellito.github.io/vivus/) 

[vivus 中文](http://www.jq22.com/jquery-info9266)

[svg在线制作](http://editor.method.ac/)
