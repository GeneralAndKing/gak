(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),a("p",[t._v("我们选择使用 "),a("code",[t._v("centos")]),t._v(" 作为部署系统，主要有以下几个方面：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("linux")]),t._v(" 系统较之 "),a("code",[t._v("windows")]),t._v(" 小很多，内存占用也少很多")]),t._v(" "),a("li",[t._v("管理较为方便，环境搭建天生具有优势")]),t._v(" "),a("li",[t._v("能与 "),a("code",[t._v("docker")]),t._v("  完美搭配，减少许多运维成本")]),t._v(" "),a("li",[t._v("队员使用 "),a("code",[t._v("linux")]),t._v(" 作为主力开发系统的较多，上手容易")])]),t._v(" "),a("p",[t._v("这部分则是说明我们运维方面的部署和使用")]),t._v(" "),a("h2",{attrs:{id:"端口规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口规划"}},[t._v("#")]),t._v(" 端口规划")]),t._v(" "),a("p",[t._v("服务器开放端口为 "),a("code",[t._v("10000-10050")]),t._v("，")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("应用名称")]),t._v(" "),a("th",[t._v("应用描述")]),t._v(" "),a("th",[t._v("端口号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mysql 8")]),t._v(" "),a("td",[t._v("关系型数据库")]),t._v(" "),a("td",[t._v("10001")])]),t._v(" "),a("tr",[a("td",[t._v("redis 5")]),t._v(" "),a("td",[t._v("非关系型数据库")]),t._v(" "),a("td",[t._v("10002，未对外开放")])]),t._v(" "),a("tr",[a("td",[t._v("nginx")]),t._v(" "),a("td",[t._v("反向代理web服务器（暂未使用）")]),t._v(" "),a("td",[t._v("10003")])]),t._v(" "),a("tr",[a("td",[t._v("后端应用")]),t._v(" "),a("td",[a("code",[t._v("spring-boot")]),t._v(" 项目")]),t._v(" "),a("td",[t._v("10011")])]),t._v(" "),a("tr",[a("td",[t._v("前端应用")]),t._v(" "),a("td",[a("code",[t._v("vue")]),t._v(" 项目，静态 SPA 页面")]),t._v(" "),a("td",[t._v("10012")])])])]),t._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("p",[t._v("我们使用 docker 来进行管理我们的应用容器，用 "),a("strong",[t._v("docker-compose")]),t._v(" 来完成整个编排的工作，如下：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("one-yard-redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 10002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker volumes mapping")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${REDIS_DIR}/conf:/usr/local/etc/redis"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${REDIS_DIR}/data:/data"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("one-yard-mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dev\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 10001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${MYSQL_DIR}/data:/var/lib/mysql"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${MYSQL_DIR}/conf.d:/etc/mysql/conf.d"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# environment variables")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MYSQL_ROOT_PASSWORD=$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MYSQL_ROOT_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("锁定 "),a("code",[t._v("mysql")]),t._v(" 版本为 "),a("code",[t._v("8")]),t._v("，锁定 "),a("code",[t._v("redis")]),t._v(" 的版本为 "),a("code",[t._v("5")]),t._v("，自动化容器编排。")]),t._v(" "),a("h2",{attrs:{id:"nginx-与-caddy-取舍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-与-caddy-取舍"}},[t._v("#")]),t._v(" Nginx 与 caddy 取舍")]),t._v(" "),a("p",[t._v("项目初期打算，直接使用 "),a("code",[t._v("nginx")]),t._v(" 来作为反向代理和应用服务器：")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("nginx")]),t._v(" 作为后台容器的反向代理，可以绕过跨域问题，")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("nginx")]),t._v(" 作为前台应用的 "),a("code",[t._v("web")]),t._v(" 服务器")]),t._v(" "),a("li",[t._v("并发量大时，启动多个后台项目，使用 "),a("code",[t._v("Nginx")]),t._v(" 进行负载均衡")])]),t._v(" "),a("p",[t._v("但是后来经过团队商议决定，杀鸡焉用牛刀。"),a("code",[t._v("Nginx")]),t._v(" 存在配置复杂的，占用内存高的特点，且访问速度有时不尽人意，让人着实难受。")]),t._v(" "),a("p",[a("strong",[t._v("所以最终我们决定，在应用不大，并发不高的的情况下，选择更加方便快捷，小型简单的 Caddy 来作为前端应用的 "),a("code",[t._v("web")]),t._v(" 服务器，后端应用自行处理跨域问题")]),t._v("。事实证明 caddy 带来的速度上提升是非常让人满意的！并且，在以后有需要的时候，完全可以平滑过度到 "),a("code",[t._v("https")]),t._v(" 与 "),a("code",[t._v("http2")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"自动化构建与部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建与部署"}},[t._v("#")]),t._v(" 自动化构建与部署")]),t._v(" "),a("p",[t._v("自动化构建与部署可以说是一个非常实用的功能了，这项功能很大程度上省去了我们运维的成本，对于前后端我们都有不同的自动化构建与部署策略。")]),t._v(" "),a("h3",{attrs:{id:"后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[t._v("#")]),t._v(" 后端")]),t._v(" "),a("p",[t._v("Gradle 非常强大，我们完全可以使用它的插件来完成我们自动化部署的流程，通过建立相应的 "),a("code",[t._v("task")]),t._v("，一步一步的让程序部署到服务器之上。")]),t._v(" "),a("div",{staticClass:"language-gradle extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ssh.settings {\n    // ssh 设置\n}\n\nremotes {\n    // 服务器配置\n}\n\ntask copy(dependsOn: bootJar) {\n    // 打包上传\n}\n\ntask restart(dependsOn: copy) {\n    // 服务重启\n}\n\ntask showLog {\n    // 查看服务器日志\n}\n")])])]),a("h3",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),a("p",[t._v("node 配合 yarn 来完成我们自动化构建，通过打包以后连接上传，也让我们能够快速部署前端应用。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("conn\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ready'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除旧的构建")]),t._v("\n    conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("rm -rf ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/*")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error\n      stdout\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          scpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'STDOUT: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'STDERR: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);