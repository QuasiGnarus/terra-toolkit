/**
 * Utility to send a custom event containing metadata.
 * @param {string} options.name - name of event
 * @param {object} options.metaData - metadata pertaining to event
 */
const dispatchCustomEvent = (options) => {
  const { name, metaData } = options;
  console.log(`dispatchCustomEvent. name: ${name} metaData: ${JSON.stringify(metaData)}`);
  try {
    // eslint-disable-next-line prefer-arrow-callback
    global.browser.execute(function dispatchEvent(eventName, eventMetaData) {
      /* If IE support is removed, convert below to use event constructors. */
      const event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
      event.metaData = eventMetaData;
      window.dispatchEvent(event);
    }, name, metaData);
  } catch (error) {
    throw new Error(`dispatchCustomEvent failed: ${error}`);
  }
};

module.exports = dispatchCustomEvent;