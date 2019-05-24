(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{173:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"冒泡和浏览器默认行为"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#冒泡和浏览器默认行为","aria-hidden":"true"}},[s._v("#")]),s._v(" 冒泡和浏览器默认行为")]),s._v(" "),n("h2",{attrs:{id:"阻止事件冒泡和浏览器默认行为"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阻止事件冒泡和浏览器默认行为","aria-hidden":"true"}},[s._v("#")]),s._v(" 阻止事件冒泡和浏览器默认行为")]),s._v(" "),n("ol",[n("li",[s._v("preventDefault() 阻止浏览器的默认行为")]),s._v(" "),n("li",[s._v("stopPropagation() 阻止事件的冒泡")]),s._v(" "),n("li",[s._v("return false 既能阻止冒泡，又能阻止浏览器的默认行为"),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("https://kenquiet.github.io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-js{} line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$('#link').on('click',function(e) {\n  alert('呵呵');\n  e.preventDefault();//阻止浏览器的默认行为\n  e.stopPropagation();//阻止事件的冒泡\n  return false;//既能阻止冒泡，又能阻止浏览器的默认行为\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"节流阀的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节流阀的应用","aria-hidden":"true"}},[s._v("#")]),s._v(" 节流阀的应用")]),s._v(" "),n("ol",[n("li",[s._v("首先设置一个变量 flag = true , 节流开启")]),s._v(" "),n("li",[s._v("判断变量 flag = true 执行判断里面的程序 ，修改 flag = false，节流关闭")]),s._v(" "),n("li",[s._v("执行程序结束 修改 flag = true"),n("div",{staticClass:"language-js{} line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 定义一个变量 flag\n//节流阀 默认节流阀开启\nlet flag = true;\n$(document).on('keydown',function (e) {\n  if (flag) {\n    // 当按键按下时 节流阀关闭\n    flag = false;\n    let code = e.keyCode;\n    if (code >= 49 && code <= 57) {\n      //触发对应的li 的mouseenter 事件\n      $('.nav li').eq(code - 49).mouseenter()\n    }\n  }\n});\n$(document).on('keyup',function (e) {\n    // 节流阀开启\n    flag = true;\n    let code = e.keyCode;\n    if (code >= 49 && code <= 57) {\n      //触发对应的li 的mouseenter 事件\n      $('.nav li').eq(code - 49).mouseleave()\n    }\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])])])])])}],!1,null,null,null);a.default=e.exports}}]);