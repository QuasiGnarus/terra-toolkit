# Changelog

## Unreleased

## 2.1.0 - (July 26, 2021)

* Fixed
  * Run tests in all browsers provided by the `BROWSERS` env variable.

## 2.0.0 - (July 16, 2021)

* Breaking
  * Upgraded to wdio v7
  * Increased large viewport size to `1020`

## 1.10.0 - (July 16, 2021)

* Added
  * Added a status check to provided `gridUrl`s, allowing for better logging when a grid fails.

## 1.9.0 - (June 18, 2021)

* Fixed
  * Updated screenshot cleaning to match nested snapshot directories
  * Updated to size the test page to the viewport size instead of the browser's window size to correctly match the corresponding breakpoint. This change may affect the size of existing screenshots, particularly in IE and firefox. The affected screenshots may need to be regenerated.

* Added
  * Added screenshot paths for each test result to the spec reporter

## 1.8.0 - (June 8, 2021)

* Added
  * Added FileOutputReporter reporter that logs wdio test output to separate files based on locale, theme, and form-factor

## 1.7.0 - (June 1, 2021)

* Added
  * `cloudRegion` namespace to screenshot directories - this is useful for full stack testing contexts that define a cloudRegion per test run.

* Fixed
  * Updated waitForSeleniumHubReady to accommodate Windows users.

## 1.6.0 - (May 25, 2021)

* Added
  * Added `ignoreScreenshotMismatch` flag to disable test failure on snapshot mismatch.
  * Added configuration to retrieve and unzip screenshots from registry.

## 1.5.0 - (May 19, 2021)

* Removed
  * Removed lodash is array dependency in favor of Array.isArray.

## 1.4.0 - (May 7, 2021)

* Added
  * Added useSeleniumStandaloneService option for using the standalone-chrome host instead of the selenium docker service when building in Jenkins.
  * Added express-server CLI command. This is moved from @cerner/terra-open-source-scripts.

* Fixed
  * Update node-resemble-js version to fix `Stream not writable` error.

## 1.3.0 - (May 4, 2021)

* Fixed
  * Update specPath in BaseCompare to replace `node_modules` with `tests/wdio`.

## 1.2.0 - (April 23, 2021)

* Added
  * The `diff`, `error`, and `latest` folders in the `__snapshots__` directory will be deleted before each test run.

## 1.1.0 - (April 13, 2021)

* Added
  * Error screenshot functionality.

* Changed
  * Honor terra-theme.config.js file when no theme is specified in the test runner.

## 1.0.5 - (March 31, 2021)

* Fixed
  * Fixed an issue in the spec reporter where the package name from scoped mono repos could result in an improper file path.

## 1.0.4 - (March 29, 2021)

* Fixed
  * Fixed packageName in terra-functional-testing for output files

* Added
  * Added a main index file to export the wdio.conf.js configuration file

* Removed
  * Removed log message for out of range elements in screenshot because there are valid cases to have out of range elements.

## 1.0.3 - (March 23, 2021)

* Added
  * Added describeTests helper to filter tests by form factors, locales, or themes

* Changed
  * Throw error with a more meaningful message when an invalid selector is used to capture screenshot.

* Fixed
  * Fix endY/endX out of range error when selector element is larger than document size.

## 1.0.2 - (March 9, 2021)

* Fixed
  * Fix seleniumVersion service option to be read from serviceOptions instead of launcherOptions

## 1.0.1 - (March 1, 2021)

* Fixed
  * Correctly pass theme as `defaultTheme` to webpack-config-terra to run tests in the correct theme.

## 1.0.0 - (February 25, 2021)

* Initial stable release
