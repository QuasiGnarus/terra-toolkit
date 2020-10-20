const Logger = require('../logger/logger');

const logger = new Logger({ prefix: 'wdio-terra-service' });

/**
 * Hides the blinking input caret that appears within editable text areas to prevent inconsistent test failures.
 *
 * @param {string} selector The selector for the element to hide the caret of
 */
const hideInputCaret = (selector) => {
  try {
    global.browser.execute(`document.querySelector("${selector.replace(/"/g, '\\"')}").style.caretColor = "transparent";`);
  } catch (error) {
    let elem = $(selector);
    if (!elem.isExisting()) {
      logger.error(`No element could be found with the selector '${selector}'.`);
    } else {
      throw error;
    }
  }
};

module.exports = hideInputCaret;