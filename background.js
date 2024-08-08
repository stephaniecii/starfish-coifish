// List of terms to detect
const terms = ["Terms of Service", "TOS", "Privacy Policy", "Terms and Conditions", "User Agreements"];

// Function to check if any of the terms appear in the text content of the document
function containsTerms(text, terms) {
  return terms.some(term => text.includes(term));
}

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.textContent) {
    const textContent = message.textContent;

    // Check if any of the terms are present
    if (containsTerms(textContent, terms)) {
      // Terms detected, take appropriate action
      chrome.storage.local.set({ termsDetected: true }, () => {
        console.log('Terms detected and stored');
        chrome.action.openPopup(); // Automatically open the popup
      });
    } else {
      chrome.storage.local.set({ termsDetected: false }, () => {
        console.log('No terms detected');
      });
    }
  }
});
