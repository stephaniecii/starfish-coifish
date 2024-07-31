document.addEventListener('DOMContentLoaded', () => {
  // retrieves and checks the termsDetected from local chrome storage
  chrome.storage.local.get(['termsDetected'], (result) => {
    const messageElement = document.getElementById('message');
    if (result.termsDetected) {
      messageElement.textContent = 'Terms detected!';
    } else {
      messageElement.textContent = 'No terms detected.';
    }
  });
});
