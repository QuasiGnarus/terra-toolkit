(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1031:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(17),s=n.n(r),a=n(39),i=n.n(a),d=(n(0),n(391)),p=["components"],o={};function l(e){var t=e.components,n=i()(e,p);return Object(d.mdx)("wrapper",s()({},o,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"asset-server-service"},"Asset Server Service"),Object(d.mdx)("p",null,"The asset server service initializes an asset server to serve compiled assets to the testing environment. An express server will be launched for static sites. For all non-static sites a webpack-dev-server will be launched."),Object(d.mdx)("h2",{id:"options"},"Options"),Object(d.mdx)("p",null,"The assert server options are configured via the ",Object(d.mdx)("a",{parentName:"p",href:"../about#options"},"test runner CLI options"),". The webpack-dev-server will be provided the locale and theme options via the test runner and will pass those through to webpack."),Object(d.mdx)("h3",{id:"assetserverport"},"assetServerPort"),Object(d.mdx)("p",null,"The port the service will be hosted on."),Object(d.mdx)("p",null,"Type: ",Object(d.mdx)("inlineCode",{parentName:"p"},"number")),Object(d.mdx)("p",null,"Required: ",Object(d.mdx)("inlineCode",{parentName:"p"},"false")),Object(d.mdx)("p",null,"Default: ",Object(d.mdx)("inlineCode",{parentName:"p"},"8080")),Object(d.mdx)("p",null,"Example:"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "test:wdio": "terra wdio --assetServerPort 8081"\n}\n')),Object(d.mdx)("h3",{id:"site"},"site"),Object(d.mdx)("p",null,"A relative path to a directory of static assets. If provided, an express server will be launched to serve the directory assets."),Object(d.mdx)("p",null,"Note: The ",Object(d.mdx)("inlineCode",{parentName:"p"},"site")," configuration option will take precedence over ",Object(d.mdx)("inlineCode",{parentName:"p"},"webpackConfig")," if both are provided."),Object(d.mdx)("p",null,"Type: ",Object(d.mdx)("inlineCode",{parentName:"p"},"string")),Object(d.mdx)("p",null,"Required: ",Object(d.mdx)("inlineCode",{parentName:"p"},"false")),Object(d.mdx)("p",null,"Default: ",Object(d.mdx)("inlineCode",{parentName:"p"},"undefined")),Object(d.mdx)("p",null,"Example:"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "test:wdio": "terra wdio --site ./build"\n}\n')))}l.isMDXComponent=!0}}]);