(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1022:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(17),r=n.n(a),s=n(39),i=n.n(s),o=(n(0),n(391)),c=n(1057),d=["components"],l={};function m(e){var t=e.components,n=i()(e,d);return Object(o.mdx)("wrapper",r()({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"jest-config-terra"},"Jest Config Terra"),Object(o.mdx)("p",null,"This package provides Terra's recommended jest configuration."),Object(o.mdx)("p",null,"Features:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"An extended Jsdom test environment that:",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},"provides a mock implementation for ",Object(o.mdx)("inlineCode",{parentName:"li"},"matchMedia"),"."),Object(o.mdx)("li",{parentName:"ul"},"provides a mock implementation for ",Object(o.mdx)("inlineCode",{parentName:"li"},"scrollIntoView"),"."),Object(o.mdx)("li",{parentName:"ul"},"Sets the dir tag on the html element."))),Object(o.mdx)("li",{parentName:"ul"},"Clears mocks after every test by default."),Object(o.mdx)("li",{parentName:"ul"},"Sets up code coverage."),Object(o.mdx)("li",{parentName:"ul"},"Specifies test matchers to not match on terra-dev-site files."),Object(o.mdx)("li",{parentName:"ul"},"Supports mono repos using a 'packages' directory."),Object(o.mdx)("li",{parentName:"ul"},"Maps png, css, scss, and svg files to the ",Object(o.mdx)("a",{parentName:"li",href:"https://github.com/keyz/identity-obj-proxy"},"identity-obj-proxy"),"."),Object(o.mdx)("li",{parentName:"ul"},"Maps terra-aggregate-translations locale files to a mock implementation. This removes the need to run terra-aggregate-translations prior to jest testing.")),Object(o.mdx)("h2",{id:"what-is-jest"},"What is Jest"),Object(o.mdx)("p",null,'"Jest is a delightful JavaScript Testing Framework with a focus on simplicity" - ',Object(o.mdx)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")),Object(o.mdx)("h2",{id:"installation"},"Installation"),Object(o.mdx)("p",null,"To install the module:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install jest --save-dev\nnpm install @cerner/jest-config-terra --save-dev\n")),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("p",null,"To extend ",Object(o.mdx)("inlineCode",{parentName:"p"},"jest-config-terra")," add a ",Object(o.mdx)("inlineCode",{parentName:"p"},"jest.config.js")," file to the root of your project, require ",Object(o.mdx)("inlineCode",{parentName:"p"},"@cerner/jest-config-terra")," and export the config. ",Object(o.mdx)("inlineCode",{parentName:"p"},"jest-config-terra")," does not support extending configuration in the package.json file."),Object(o.mdx)("h3",{id:"jestconfigjs"},"jest.config.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"const jestConfig = require('@cerner/jest-config-terra');\n\nmodule.exports = jestConfig;\n\n")),Object(o.mdx)("h2",{id:"adding-configuration"},"Adding configuration"),Object(o.mdx)("p",null,"Sometimes it is necessary to add additional configuration. In those instances we've found the cleanest option is to spread the config on a new object and subsequently add overrides where appropriate. For instance this example will import regenerator runtime when setting up test files."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"const jestConfig = require('@cerner/jest-config-terra');\n\nmodule.exports = {\n  ...jestConfig,\n  setupFiles: [\n    'regenerator-runtime',\n  ],\n};\n\n")),Object(o.mdx)("h2",{id:"enzyme-and-testing-library-react"},"Enzyme and Testing Library: React"),Object(o.mdx)("p",null,Object(o.mdx)("a",{parentName:"p",href:"https://enzymejs.github.io/enzyme/"},"Enzyme")," and ",Object(o.mdx)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"Testing Library: React")," are two popular packages intended to help test react components. ",Object(o.mdx)("inlineCode",{parentName:"p"},"jest-config-terra")," can support either and the choice of which package to use is left up to consumers. Testing Library: React requires no additional setup. An example of how to setup Enzyme can be seen below."),Object(o.mdx)("h3",{id:"jestconfigjs-1"},"jest.config.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"const jestConfig = require('@cerner/jest-config-terra');\n\nmodule.exports = {\n  ...jestConfig,\n  setupFiles: [\n    './jest.enzymeSetup.js',\n  ],\n  snapshotSerializers: [\n    'enzyme-to-json/serializer',\n  ],\n};\n")),Object(o.mdx)("h3",{id:"jestenzymesetupjs"},"jest.enzymeSetup.js"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"// Make Enzyme functions available in all test files without importing\n/* eslint-disable import/no-extraneous-dependencies */\nimport Enzyme, { mount, render, shallow } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\n\nEnzyme.configure({ adapter: new Adapter() });\n\nglobal.shallow = shallow;\nglobal.render = render;\nglobal.mount = mount;\n")))}m.isMDXComponent=!0},1052:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),s=a(n(2)),i=a(n(4)),o=a(n(1053)),c=i.default.bind(o.default),d={name:s.default.string.isRequired,src:s.default.string,url:s.default.string,version:s.default.string.isRequired},l=function(e){var t=e.src,n=e.name,a=e.url,s=e.version,i=r.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(s)},r.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(s))),o=t?r.default.createElement("a",{className:c("badge"),href:t},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},i,o)};l.propTypes=d;var m=l;t.default=m},1053:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___3TKkX","badge-container":"Badges-module__badge-container___3rSlA","badge-name":"Badges-module__badge-name___2TY0-","badge-version":"Badges-module__badge-version___1uonX"}},1057:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),s=n(1052),i=n.n(s),o=function(e){var t=e.url;return r.a.createElement(i.a,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/jest-config-terra",name:"@cerner/jest-config-terra",version:"1.2.0",url:t})}}}]);