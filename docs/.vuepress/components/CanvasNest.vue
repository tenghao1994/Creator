<template>
    
</template>

<script>
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  export default {
    props: {
        count: {// 线条数量
            type: String,
            default: '150'
        },
        opacity: {// 线条透明度
            type: String,
            default: '0.7'
        },
        color: {// 线条颜色
            type: String,
            default: ''
        },
        zIndex: {// 画面层级
            type: String,
            default: ''
        },
        global: {// 是否全局引入
          type: Boolean,
          default: false
        }
    },
    data() {
      return {
        a_idx: 0
      }
    },
    mounted() {
      this.showCanvas();
    },
    created() {
      //  console.log(app, '----')
      //  document.body.addEventListener('click', (event)=>{
      //    debugger
      //    let labelList = ['❤️','😍','⛽️','😍','😄','💔','😊','😭','☕️','🌞','🌛']
      //    let arr = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"]
      //     var x = document.createElement("span");  
      //     this.a_idx = (this.a_idx + 1) % arr.length;                      // 创建 <p> 元素
      //     var t = document.createTextNode(arr[this.a_idx]);    // 创建文本节点
      //     x.appendChild(t);   
      //     x.style['position'] = "absolute"
      //     x.style['top'] =  (event.y-20) + 'px'
      //     x.style['left'] = event.x + 'px'
      //     x.style['z-index'] = 1000000
      //     x.style['font-weight'] = "bold"
      //     x.style["user-select"] = "none"
      //     x.style["cursor"] = "default"
      //     x.style["color"] = `rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`
      //     document.body.appendChild(x);

      //     setTimeout(()=>{
      //       x.style['top'] =  (event.y-180) + 'px';
      //       x.style['left'] = event.x + 'px';
      //       x.style['opacity'] = 0
      //       x.style['animation'] = 'none 5s infinite'
      //       document.body.appendChild(x);
      //     },1500)
         
      //  })
    },
    methods: {
      check() {
        let flag = navigator.userAgent.match(/(phone|pod|iPhone|iPad|iPod|ios|Android|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return !flag;
      },
      showCanvas() {
        if(!this.check()){return}
        var element = document.createElement("script");
        element.setAttribute("count",this.count);
        element.setAttribute("color",this.color);
        element.setAttribute("name","canvas-nest-name");
        element.setAttribute("opacity",this.opacity);
        element.setAttribute("zIndex",this.zIndex);
        element.src = "https://cdn.bootcss.com/canvas-nest.js/2.0.4/canvas-nest.js";
        document.body.appendChild(element);
      }
    },
    beforeDestroy() {
      if(!this.global) {
        var canvas = document.getElementsByTagName("canvas");
        for(let i=0; i<canvas.length; i++) {
            canvas[i].style.display='none';
            canvas[i].remove();
        }
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i] && scripts[i].getAttribute("name")=="canvas-nest-name") {
                scripts[i].parentNode.removeChild(scripts[i]);
            }
        }
      }
    },
  }
</script>