(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1027:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(17),r=n.n(a),i=n(39),l=n.n(i),s=(n(0),n(391)),o=n(1058),c=n(1059),d=["components"],m={};function p(e){var t=e.components,n=l()(e,d);return Object(s.mdx)("wrapper",r()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)(c.a,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"terra-functional-testing"},"Terra Functional Testing"),Object(s.mdx)("p",null,"The terra-functional-testing library is a utility for developing automation tests. The library extends ",Object(s.mdx)("a",{parentName:"p",href:"https://v6.webdriver.io/"},"WebdriverIO")," to facilitate automating accessibility and functional testing for Terra projects."),Object(s.mdx)("h2",{id:"system-requirements"},"System Requirements"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"http://nodejs.org/"},"Node.js")," Install at least v10.24.0. Due to requirements of fibers used within the project install no greater than lts/erbium (v12)."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," Install docker. Docker is used to setup and run tests in a containerized environment.")),Object(s.mdx)("p",null,"We strongly recommend using ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," for installing node versions."),Object(s.mdx)("h2",{id:"installation"},"Installation"),Object(s.mdx)("p",null,"Install @cerner/terra-functional-testing and @cerner/terra-cli as development dependencies with npm:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre"},"npm install --save-dev @cerner/terra-functional-testing @cerner/terra-cli\n")),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("p",null,"A test runner is provided for local development. The test runner is invoked via the ",Object(s.mdx)("a",{parentName:"p",href:"/terra-toolkit/dev_tools/cerner-terra-toolkit-docs/terra-cli/about"},"terra-cli"),"."),Object(s.mdx)("p",null,"package.json"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test:wdio": "terra wdio"\n}\n')),Object(s.mdx)("h3",{id:"options"},"Options"),Object(s.mdx)("table",null,Object(s.mdx)("thead",{parentName:"table"},Object(s.mdx)("tr",{parentName:"thead"},Object(s.mdx)("th",{parentName:"tr",align:null},"Option"),Object(s.mdx)("th",{parentName:"tr",align:null},"Type"),Object(s.mdx)("th",{parentName:"tr",align:null},"Default"),Object(s.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(s.mdx)("tbody",{parentName:"table"},Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--assetServerPort"),Object(s.mdx)("td",{parentName:"tr",align:null},"number"),Object(s.mdx)("td",{parentName:"tr",align:null},"8080"),Object(s.mdx)("td",{parentName:"tr",align:null},"The port to run the webpack and express asset services on.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--browsers"),Object(s.mdx)("td",{parentName:"tr",align:null},"array"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"A list of browsers for the test run.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--config, -c"),Object(s.mdx)("td",{parentName:"tr",align:null},"string"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"A file path to the test runner configuration.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--disableSeleniumService"),Object(s.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(s.mdx)("td",{parentName:"tr",align:null},"false"),Object(s.mdx)("td",{parentName:"tr",align:null},"A flag to disable the selenium docker service.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--ignoreScreenshotMismatch"),Object(s.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(s.mdx)("td",{parentName:"tr",align:null},"false"),Object(s.mdx)("td",{parentName:"tr",align:null},"A flag to ignore screenshot mismatch.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--externalHost"),Object(s.mdx)("td",{parentName:"tr",align:null},"string"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"The host address the testing environment is connected to.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--externalPort"),Object(s.mdx)("td",{parentName:"tr",align:null},"number"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"The port mapping from the host to the container.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--formFactors"),Object(s.mdx)("td",{parentName:"tr",align:null},"array"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"A list of form factors for the test run. One of tiny, small, medium, large, huge, or enormous")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--gridUrl"),Object(s.mdx)("td",{parentName:"tr",align:null},"string"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"The remote selenium grid address.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--locales"),Object(s.mdx)("td",{parentName:"tr",align:null},"array"),Object(s.mdx)("td",{parentName:"tr",align:null},"en"),Object(s.mdx)("td",{parentName:"tr",align:null},"A list of language locales for the test run.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--site"),Object(s.mdx)("td",{parentName:"tr",align:null},"string"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"A file path to a static directory of assets. When defined, an express server will launch to serve the assets and disable running webpack.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--spec"),Object(s.mdx)("td",{parentName:"tr",align:null},"array"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"A list of spec file paths.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--suite"),Object(s.mdx)("td",{parentName:"tr",align:null},"array"),Object(s.mdx)("td",{parentName:"tr",align:null}),Object(s.mdx)("td",{parentName:"tr",align:null},"Overrides specs and runs only the defined suites.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--themes"),Object(s.mdx)("td",{parentName:"tr",align:null},"array"),Object(s.mdx)("td",{parentName:"tr",align:null},"theme specified in terra-theme.config.js file"),Object(s.mdx)("td",{parentName:"tr",align:null},"A list of themes for the test run.")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"--updateScreenshots, -u"),Object(s.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(s.mdx)("td",{parentName:"tr",align:null},"false"),Object(s.mdx)("td",{parentName:"tr",align:null},"Updates all reference screenshots with the latest screenshots.")))),Object(s.mdx)("p",null,"The following example will run the test suite a total of four times. Once for each permutation of the specified locales and form factors."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test:wdio": "terra wdio --locales en fr --formFactors tiny huge"\n}\n')),Object(s.mdx)("h2",{id:"browser-capabilities"},"Browser Capabilities"),Object(s.mdx)("p",null,"The following browsers are supported:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Chrome"),Object(s.mdx)("li",{parentName:"ul"},"Firefox"),Object(s.mdx)("li",{parentName:"ul"},"Internet Explorer")),Object(s.mdx)("p",null,"Chrome is enabled by default when running locally against the docker container."),Object(s.mdx)("p",null,"To target a list of browsers that are different than the default use the ",Object(s.mdx)("inlineCode",{parentName:"p"},"browsers")," cli option:"),Object(s.mdx)(o.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},Object(s.mdx)("p",null,"  Internet Explorer can only be enabled when running against a remote selenium grid. Internet Explorer is not available within the docker container.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test:wdio": "terra wdio --browsers firefox"\n}\n')),Object(s.mdx)("p",null,"To run against a remote selenium grid:"),Object(s.mdx)(o.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},Object(s.mdx)("p",null,"  Chrome, Firefox, and Internet Explorer are all enabled by default when running against a remote selenium grid.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test:wdio": "terra wdio --gridUrl grid.test.example.com"\n}\n')),Object(s.mdx)("h2",{id:"form-factors"},"Form Factors"),Object(s.mdx)("p",null,"Tests can be executed in the following form factors:"),Object(s.mdx)("table",null,Object(s.mdx)("thead",{parentName:"table"},Object(s.mdx)("tr",{parentName:"thead"},Object(s.mdx)("th",{parentName:"tr",align:null},"Size"),Object(s.mdx)("th",{parentName:"tr",align:null},"Width"),Object(s.mdx)("th",{parentName:"tr",align:null},"Height"))),Object(s.mdx)("tbody",{parentName:"table"},Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"tiny"),Object(s.mdx)("td",{parentName:"tr",align:null},"470"),Object(s.mdx)("td",{parentName:"tr",align:null},"768")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"small"),Object(s.mdx)("td",{parentName:"tr",align:null},"622"),Object(s.mdx)("td",{parentName:"tr",align:null},"768")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"medium"),Object(s.mdx)("td",{parentName:"tr",align:null},"838"),Object(s.mdx)("td",{parentName:"tr",align:null},"768")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"large"),Object(s.mdx)("td",{parentName:"tr",align:null},"1020"),Object(s.mdx)("td",{parentName:"tr",align:null},"768")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"huge"),Object(s.mdx)("td",{parentName:"tr",align:null},"1300"),Object(s.mdx)("td",{parentName:"tr",align:null},"768")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"enormous"),Object(s.mdx)("td",{parentName:"tr",align:null},"1500"),Object(s.mdx)("td",{parentName:"tr",align:null},"768")))),Object(s.mdx)("p",null,"To specify a list of form factors use the cli option:"),Object(s.mdx)(o.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},Object(s.mdx)("p",null,"  If no form factor is specified all tests will be run against the huge form factor.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test:wdio": "terra wdio --formFactors tiny small enormous"\n}\n')),Object(s.mdx)("h2",{id:"configuration"},"Configuration"),Object(s.mdx)("p",null,"The test runner ships with a default ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit/blob/main/packages/terra-functional-testing/src/config/wdio.conf.js"},"wdio.conf.js"),". Options can be configured by extending the default configuration file."),Object(s.mdx)("p",null,"To extend the default configuration create a ",Object(s.mdx)("inlineCode",{parentName:"p"},"wdio.conf.js")," file at the root of your project and apply the desired options."),Object(s.mdx)("p",null,"wdio.conf.js"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const { config } = require('@cerner/terra-functional-testing');\n\n// Stop the test run if there is a test failure.\nconfig.bail = 1;\n\nexports.config = config;\n")),Object(s.mdx)("h2",{id:"service-options"},"Service Options"),Object(s.mdx)("p",null,"Service options are configurable by extending the wdio.conf.js file. These options are applied for every test run."),Object(s.mdx)("h3",{id:"selector"},"selector"),Object(s.mdx)("p",null,"Specifies the default element to be captured when taking a screenshot."),Object(s.mdx)("p",null,"Type: ",Object(s.mdx)("inlineCode",{parentName:"p"},"string")),Object(s.mdx)("p",null,"Required: ",Object(s.mdx)("inlineCode",{parentName:"p"},"false")),Object(s.mdx)("p",null,"Default: ",Object(s.mdx)("inlineCode",{parentName:"p"},"[data-terra-test-content] *:first-child")),Object(s.mdx)(o.Notice,{variant:"important",ariaLevel:"4",mdxType:"Notice"},Object(s.mdx)("p",null,"  This selector is used as the default screenshot selector for Terra.validates.element and Terra.validates.screenshot.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const { config } = require('@cerner/terra-functional-testing');\n\nconfig.serviceOptions = {\n  selector: '#root',\n};\n\nexports.config = config;\n")),Object(s.mdx)("h3",{id:"seleniumversion"},"seleniumVersion"),Object(s.mdx)("p",null,"Specifies the ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/docker-selenium/tree/selenium-3"},"docker selenium")," version used within the docker container."),Object(s.mdx)("p",null,"Type: ",Object(s.mdx)("inlineCode",{parentName:"p"},"string")),Object(s.mdx)("p",null,"Required: ",Object(s.mdx)("inlineCode",{parentName:"p"},"false")),Object(s.mdx)("p",null,"Default: ",Object(s.mdx)("inlineCode",{parentName:"p"},"3.14.0-helium")),Object(s.mdx)(o.Notice,{variant:"caution",ariaLevel:"4",mdxType:"Notice"},Object(s.mdx)("p",null,"  The selenium version is only applied when running tests against a docker container. This option does not change the version on a remote selenium grid. Keep this in mind if your tests run against a remote selenium grid on a CI system.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const { config } = require('@cerner/terra-functional-testing');\n\nconfig.serviceOptions = {\n  seleniumVersion: '3.141.59-20210311',\n};\n\nexports.config = config;\n")),Object(s.mdx)("h2",{id:"test-utilities"},"Test Utilities"),Object(s.mdx)("p",null,"Test utilities are available to help write tests. These utilities are accessed using the ",Object(s.mdx)("inlineCode",{parentName:"p"},"Terra")," global object."),Object(s.mdx)("h3",{id:"describe-helpers"},"Describe Helpers"),Object(s.mdx)("p",null,"The describe helpers are an alias for the top level ",Object(s.mdx)("inlineCode",{parentName:"p"},"describe")," block used within spec files. The describe helpers provide useful features for limiting a set of tests to specific form factors, locales, and themes."),Object(s.mdx)("h4",{id:"terradescribeviewports"},"Terra.describeViewports"),Object(s.mdx)(o.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},Object(s.mdx)("p",null,"  We recommended using Terra.describeTests instead of Terra.describeViewports. The same features in Terra.describeViewports can be achieved with Terra.describeTests.")),Object(s.mdx)("p",null,"The ",Object(s.mdx)("inlineCode",{parentName:"p"},"Terra.describeViewports")," utility defines a list of form factors the tests are enabled for. By default, all tests will be run against each provided viewport. If a form factor is specified via the cli the describe viewpoint helper works as a filter and only allows the tests to execute if they match the current form factor."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Executes all tests for each defined viewport.\n * @param {string} title - The describe block title.\n * @param {string[]} viewports - A list of viewports. [tiny, small, medium, large, huge, enormous]\n * @param {function} fn - The block of tests to execute against each viewport.\n */\nTerra.describeViewports(title, [viewports], fn);\n")),Object(s.mdx)(o.Notice,{variant:"caution",ariaLevel:"5",mdxType:"Notice"},Object(s.mdx)("p",null,"  Describe helpers should not be nested within other describe helpers.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"// The following example will scope the tests to run only for the `tiny` and `huge` form factors. The tests will not run for any other form factor.\n\nTerra.describeViewports('Describe viewports title', ['tiny', 'huge'], () => {\n  it('should test tiny and huge screens', () => {\n    browser.url('/testing/route/');\n\n    Terra.validates.screenshot('describe viewports');\n  });\n});\n\n// Multiple describe helpers can be used sequentially in the same spec file as long as they are not nested.\n\nTerra.describeViewports('Describe viewports title', ['small'], () => {\n  it('should test small screens', () => {\n    browser.url('/testing/route/small/');\n\n    Terra.validates.screenshot('describe viewports');\n  });\n});\n")),Object(s.mdx)("h4",{id:"terradescribetests"},"Terra.describeTests"),Object(s.mdx)("p",null,"The ",Object(s.mdx)("inlineCode",{parentName:"p"},"Terra.describeTests")," helper extends the ",Object(s.mdx)("inlineCode",{parentName:"p"},"Terra.describeViewports")," helper by additionally filtering tests by locale and theme. Tests within this helper will only be executed if each of the form factors, locales, and themes listed in the options match those defined in the configurations for the current test run. If no form factors, locales, or themes are provided as options, then all tests under this helper will qualify to run in any form factor, locale, or theme."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Executes all tests for each defined set of form factors, locales, and themes.\n * @param {string} title - The describe block title.\n * @param {Object} options - An object containing arrays of formFactors, locales, and themes that the block of tests will only qualify to execute in.\n * @param {string} options.formFactors - The form factors that the block of tests only execute in.\n * @param {string} options.locales -  The language locales that the block of tests only execute in.\n * @param {string} options.themes - The themes that the block of tests only execute in.\n * @param {function} fn - The block of tests to execute based on the defined form factor, locale, and theme.\n */\nTerra.describeTests(title, options, fn);\n")),Object(s.mdx)("p",null,"The following tests will only be ran for the locales, themes, and form factors provided:"),Object(s.mdx)(o.Notice,{variant:"caution",ariaLevel:"5",mdxType:"Notice"},Object(s.mdx)("p",null,"  The describe helper should not be nested inside of another describe helper.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const testOptions = {\n  formFactors: ['tiny', 'huge'],\n  locales: ['en', 'fr'],\n  themes: ['terra-default-theme', 'orion-fusion-theme']\n}\n\nTerra.describeTests('Describe tests', testOptions, () => {\n  it('should execute only if form factor is tiny or huge, locale is en or fr, and theme is terra-default-theme or orion-fusion-theme', () => {\n    browser.url('/testing/route/');\n    Terra.validates.element('describe tests');\n  });\n});\n")),Object(s.mdx)("h3",{id:"accessibility-testing"},"Accessibility Testing"),Object(s.mdx)("p",null,"The testing library integrates ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core"},"axe-core")," into the testing framework to help automate accessibility testing along side functional testing."),Object(s.mdx)("p",null,"Axe will analyze the entire document when run and report accessibility violations. The following ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#axe-core-tags"},"tags")," are enabled: ",Object(s.mdx)("inlineCode",{parentName:"p"},"wcag2a"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"wcag2aa"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"wcag21aa"),", and ",Object(s.mdx)("inlineCode",{parentName:"p"},"section508"),". Each tag has an associated list of ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md"},"rules")," that will be checked against the document when axe is run."),Object(s.mdx)(o.Notice,{variant:"important",ariaLevel:"4",mdxType:"Notice"},Object(s.mdx)("p",null,"  Please note that not all accessibility testing can be automated. Axe provides a lightweight static analysis of the entire document to catch common accessibility violations, but it is the responsibility of each team and application to do thorough accessibility and functional testing manually when necessary.")),Object(s.mdx)("h4",{id:"terravalidatesaccessibility"},"Terra.validates.accessibility"),Object(s.mdx)("p",null,"The validates accessibility command will run accessibility checks on the entire document. If accessibility violations are found the test step will fail. It is recommended to run accessibility checks at various steps in a functional workflow to check for violations at different stages of the application."),Object(s.mdx)(o.Notice,{variant:"caution",ariaLevel:"4",mdxType:"Notice"},Object(s.mdx)("p",null,"  The accessibility assertion must be used within an ",Object(s.mdx)("inlineCode",{parentName:"p"},"it")," block.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should report no accessibility violations', () => {\n  browser.url('/testing/route/');\n\n  Terra.validates.accessibility(); // Fails if accessibility violations are found anywhere on the document.\n});\n")),Object(s.mdx)("p",null,"The accessibility assertion accepts ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter"},"options")," that will be passed to axe for the document analysis."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should override a rule configuration', () => {\n  browser.url('/testing/route/');\n\n  // Rule override for this specific test.\n  const options = { rules: { 'color-contrast': { enabled: false } } };\n\n  Terra.validates.accessibility(options);\n});\n")),Object(s.mdx)("h3",{id:"screenshot-testing"},"Screenshot Testing"),Object(s.mdx)("p",null,"A screenshot can be captured at any given point inside an ",Object(s.mdx)("inlineCode",{parentName:"p"},"it")," block in a test. The element(s) being captured in the screenshot is determined by the provided selector option or the default ",Object(s.mdx)("inlineCode",{parentName:"p"},"[data-terra-test-content]")," selector if one is not provided. If part or all of the selector or any of its children are rendered outside the bounds of the current viewport, only what is within the viewport will be captured and what is outside the viewport will be clipped. The captured screenshot will be used as a reference artifact. Element validation is done by comparing the reference screenshot against the screenshot captured in future test runs at the same point in the test."),Object(s.mdx)("h4",{id:"terravalidatesscreenshot"},"Terra.validates.screenshot"),Object(s.mdx)("p",null,"Invoking the assertion will capture a screenshot at the time it is invoked. If no reference screenshot exists, one will be created in the ",Object(s.mdx)("inlineCode",{parentName:"p"},"reference")," folder with the given screenshot name. If such reference screenshot already exists, the new screenshot will be compared with the reference screenshot to validate visually that they are within the mismatch tolerance. If the mismatch exceeds the tolerance, the test step will fail and a screenshot showing the difference will be generated."),Object(s.mdx)(o.Notice,{variant:"caution",ariaLevel:"5",mdxType:"Notice"},Object(s.mdx)("p",null,"  The screenshot assertion must be used within an ",Object(s.mdx)("inlineCode",{parentName:"p"},"it")," block and a screenshot name must be provided.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should validate the screenshot', () => {\n  browser.url('/testing/route/');\n\n  Terra.validates.screenshot('screenshot-name'); // Fails if the new screenshot doesn't visually match the reference screenshot.\n});\n")),Object(s.mdx)("p",null,"The screenshot naming pattern is as follows:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"base_directory/test_spec_directory/test_spec_name/__snapshots__/(reference|latest|diff)/theme/locale/browserName_terraViewportName/screenshot-name.png\n")),Object(s.mdx)("p",null,"The screenshot assertion accepts an optional second argument with the following keys."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"selector")," - The element selector to use to capture the element for screenshot comparison. The default selector is ",Object(s.mdx)("inlineCode",{parentName:"li"},"data-terra-test-content"),"."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"mismatchTolerance")," - The number between 0 and 100 that defines the degree of mismatch to consider two images as identical. Increasing this value will decrease level of test coverage. The default mismatch tolerance is 0.01.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should validate the screenshot with options', () => {\n  browser.url('/testing/route/');\n\n  const options = {\n    selector: '#element-id',\n    mismatchTolerance: 10,\n  };\n\n  Terra.validates.screenshot('screenshot-name', options);\n});\n")),Object(s.mdx)("h4",{id:"terravalidateselement"},"Terra.validates.element"),Object(s.mdx)("p",null,"The validates element assertion performs both accessibility and screenshot assertions."),Object(s.mdx)(o.Notice,{variant:"caution",ariaLevel:"5",mdxType:"Notice"},Object(s.mdx)("p",null,"  The validates element assertion must be used within an ",Object(s.mdx)("inlineCode",{parentName:"p"},"it")," block and a screenshot name must be provided.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should validate the element', () => {\n  browser.url('/testing/route/');\n\n  Terra.validates.element('screenshot-name'); // Fails if the new screenshot doesn't visually match the reference screenshot.\n});\n")),Object(s.mdx)("p",null,"The element assertion accepts an optional second argument with the following keys."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"rules")," - The accessibility ",Object(s.mdx)("a",{parentName:"li",href:"https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md"},"rules")," to use as overrides if necessary."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"selector")," - The element selector to use to capture the element for screenshot comparison. The default selector is ",Object(s.mdx)("inlineCode",{parentName:"li"},"data-terra-test-content"),"."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"mismatchTolerance")," - The number between 0 and 100 that defines the degree of mismatch to consider two images as identical. Increasing this value will decrease level of test coverage. The default mismatch tolerance is 0.01.")),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should validate the element with options', () => {\n  browser.url('/testing/route/');\n\n  const options = {\n    rules: { 'color-contrast': { enabled: false } },\n    selector: '#element-id',\n    mismatchTolerance: 10,\n  };\n\n  Terra.validates.element('screenshot-name', options);\n});\n")),Object(s.mdx)("h3",{id:"additional-utilities"},"Additional Utilities"),Object(s.mdx)("h4",{id:"terrahideinputcaret"},"Terra.hideInputCaret"),Object(s.mdx)("p",null,"An editable text field in focus will have a blinking caret. Often times this blinking caret causes inconsistent test failures due to the blinking of the caret during screenshot capture. This situation can be avoided by using ",Object(s.mdx)("inlineCode",{parentName:"p"},"Terra.hideInputCaret")," to set the CSS caret color to of the element to be transparent. This method must be placed in a ",Object(s.mdx)("inlineCode",{parentName:"p"},"before"),", ",Object(s.mdx)("inlineCode",{parentName:"p"},"beforeEach"),", or ",Object(s.mdx)("inlineCode",{parentName:"p"},"it")," block or it will not be ran. This method accepts a selector string as an argument and will only apply to the first selector if multiple are found. The caret will automatically be hidden for body every time the page loads or refreshes."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should hide the caret', () => {\n  Terra.hideInputCaret('#inputID');\n  const element = browser.element('#inputID');\n\n  expect(element.getCSSProperty('caretColor').value).toEqual('rgba(0,0,0,0)');\n});\n")),Object(s.mdx)("h4",{id:"terrasetapplicationlocale"},"Terra.setApplicationLocale"),Object(s.mdx)("p",null,"Use ",Object(s.mdx)("inlineCode",{parentName:"p"},"Terra.setApplicationLocale")," to update a terra application's locale on a case by case basis; particularly useful for testing locale changes on a deployed application. This method accepts a string containing the ",Object(s.mdx)("inlineCode",{parentName:"p"},"locale")," to update to."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"it('should update an application's locale, () => {\n  Terra.setApplicationLocale('en');\n});\n")))}p.isMDXComponent=!0},1052:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(2)),l=a(n(4)),s=a(n(1053)),o=l.default.bind(s.default),c={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,l=r.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(i))),s=t?r.default.createElement("a",{className:o("badge"),href:t},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},l,s)};d.propTypes=c;var m=d;t.default=m},1053:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___3TKkX","badge-container":"Badges-module__badge-container___3rSlA","badge-name":"Badges-module__badge-name___2TY0-","badge-version":"Badges-module__badge-version___1uonX"}},1059:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),i=n(1052),l=n.n(i),s=function(e){var t=e.url;return r.a.createElement(l.a,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/terra-functional-testing",name:"@cerner/terra-functional-testing",version:"2.1.0",url:t})}}}]);