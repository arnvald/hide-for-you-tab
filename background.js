chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'executeHideFirstTab') {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ['hide_for_you_tab.js']
    });
  }
});
