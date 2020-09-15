(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{353:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),a("h2",{attrs:{id:"环境初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境初始化"}},[t._v("#")]),t._v(" 环境初始化")]),t._v(" "),a("p",[t._v("Twikoo 使用云开发作为评论后台，每个云开发用户均长期享受1个免费的标准型基础版1资源套餐。如果您已经拥有了一个免费版云开发环境，在环境配置符合要求的情况下，Twikoo 理论可以与其他项目共用一个环境。")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://curl.qcloud.com/KnnJtUom",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册云开发CloudBase"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("进入"),a("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发控制台"),a("OutboundLink")],1),t._v("，新建环境，请按个人需要配置环境"),a("br")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("推荐选择计费方式"),a("code",[t._v("包年包月")]),t._v("，套餐版本"),a("code",[t._v("基础班 1")])]),t._v(" "),a("li",[t._v("如果提示“选择部署应用”，请选择“不创建环境”")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("进入"),a("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境-登录授权"),a("OutboundLink")],1),t._v("，启用“匿名登录”")]),t._v(" "),a("li",[t._v("进入"),a("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/safety",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境-安全配置"),a("OutboundLink")],1),t._v("，将网站域名添加到“WEB安全域名”")]),t._v(" "),a("li",[t._v("复制环境Id备用")])]),t._v(" "),a("h2",{attrs:{id:"环境部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境部署"}},[t._v("#")]),t._v(" 环境部署")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("请确保您已经安装了 "),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("请将命令、代码中“您的环境id”替换为您自己的环境id")]),t._v(" "),a("li",[t._v("请不要使用 Windows 自带的记事本编辑 envId.txt，否则会部署失败，后续会修复该问题")])])]),t._v(" "),a("ol",[a("li",[t._v("克隆本仓库")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/imaegoo/twikoo.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" twikoo\n")])])]),a("blockquote",[a("p",[t._v("如果您没有安装 Git，也可以从 "),a("a",{attrs:{href:"https://github.com/imaegoo/twikoo/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Release"),a("OutboundLink")],1),t._v(" 页面下载最新的 Source code")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("安装依赖项")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 yarn install")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("设置环境id")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" 您的环境id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" envId.txt\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("授权云开发环境")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run login "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 yarn run login")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("自动部署")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run deploy "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 yarn deploy")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("更新 Twikoo 版本时，请再次执行此命令更新现有的云函数")])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"通过-cdn-引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-cdn-引入"}},[t._v("#")]),t._v(" 通过 CDN 引入")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("twikoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/twikoo/dist/twikoo.all.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("twikoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" envId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'您的环境id'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"通过-npm-引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-npm-引入"}},[t._v("#")]),t._v(" 通过 NPM 引入")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" twikoo "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 yarn add twikoo")]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("twikoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" twikoo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'twikoo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或 const twikoo = require('twikoo')")]),t._v("\ntwikoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" envId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'您的环境id'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);