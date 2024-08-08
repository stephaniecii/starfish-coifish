// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.textContent) {
    const textContent = message.textContent;

    if (containsTerms(textContent, terms)) {
      chrome.storage.local.set({ termsDetected: true }, () => {
        console.log('Terms detected and stored');
        // Set a badge to alert the user
        chrome.action.setBadgeText({ text: '!' });
        chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
      });
    } else {
      chrome.storage.local.set({ termsDetected: false }, () => {
        console.log('No terms detected');
        chrome.action.setBadgeText({ text: '' }); // Clear the badge
      });
    }
  }
});
