chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete'&& tab.active) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['scripts/content.js']
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>{
  if (message.termsDetected){
    chrome.action.openPopup();
  }
});
