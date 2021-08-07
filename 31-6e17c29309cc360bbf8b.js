(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1030:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(17),r=n.n(a),s=n(39),p=n.n(s),o=(n(0),n(391)),l=["components"],c={};function i(e){var t=e.components,n=p()(e,l);return Object(o.mdx)("wrapper",r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"spec-reporter"},"Spec Reporter"),Object(o.mdx)("p",null,"The spec reporter is a custom reporter plugin that aggregates test data and writes the results to file. The generated results file will contain all relevant metadata for the test run in JSON format."),Object(o.mdx)("p",null,"Example Output:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "packageName": "terra-example-project",\n  "theme": "terra-default-theme",\n  "locale": "en",\n  "formFactor": "large",\n  "capabilities": {\n    "browserName": "chrome",\n    "platform": "Linux",\n    "version": "69.0.3497.100"\n  },\n  "specs": [\n    {\n      "spec": "terra-example-project/tests/wdio/terra-example-spec.js",\n      "start": "2021-03-25T15:35:27.650Z",\n      "end": "2021-03-25T15:35:27.723Z",\n      "suites": [\n        {\n          "title": "Example Describe",\n          "fullTitle": "Example Describe",\n          "duration": 3,\n          "start": "2021-03-25T15:35:27.653Z",\n          "end": "2021-03-25T15:35:27.656Z",\n          "tests": [\n            {\n              "title": "should pass the assertion",\n              "fullTitle": "Example Describe should pass the assertion",\n              "duration": 3,\n              "start": "2021-03-25T15:35:27.653Z",\n              "end": "2021-03-25T15:35:27.656Z",\n              "state": "passed"\n            }\n          ],\n          "suites": []\n        }\n      ],\n      "tests": []\n    }\n  ]\n}\n')))}i.isMDXComponent=!0}}]);