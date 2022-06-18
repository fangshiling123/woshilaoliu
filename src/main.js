// 引入vue
import App from './app.vue'


import { tab } from './tab.js'
import { marquee } from './marquee.js'

tab()
marquee()

import './styles/index.css'
import './styles/index.less'

// 以原生js的方式创建并将图片插入到DOM中

// 1. 引入图片
//  - 引入的是图片的src属性值
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

// 2. 创建img节点
const gif = document.createElement('img')
const png = document.createElement('img')

// 3. 设置src属性
gif.src = gifSrc
png.src = pngSrc

// 4. 插入dom
document.body.appendChild(gif)
document.body.appendChild(png)


// 引入字体图标css文件
//  - css文件内部的url函数, 跟main发生了间接的依赖关系
import './assets/fonts/iconfont.css'


// 测试babel有没有降级

const test = () => console.log('hello')
console.log(test) // 这里一定打印函数