chrome.storage.local.set({ termsDetected: false }, () => {
    console.log('Yo');
  });

// List of terms to detect
const terms = ["Terms of Service", "TOS", "Privacy Policy", "Terms and Conditions", "User Agreements"];

// Function to check if any of the terms appear in the text content of the document
function containsTerms(text, terms) {
  return terms.some(term => text.includes(term));
}

// Function to handle detection and storage
function handleDetection() {
  const textContent = document.body.textContent || document.body.innerText;
  console.log(textContent);

  if (containsTerms(textContent, terms)) {
    chrome.storage.local.set({ termsDetected: true }, () => {
      console.log('Terms detected and stored');
    });
  } else {
    chrome.storage.local.set({ termsDetected: false }, () => {
      console.log('No terms detected and stored');
    });
  }
}

// Initial detection when the script runs
handleDetection();

// Create an observer instance
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('change found');
      // Re-run detection logic on detected changes
      handleDetection();
    }
  });
});

// Configure the observer to watch for changes in the entire body
observer.observe(document.body, { childList: true, subtree: true });

//to disconnect
/*
function disconnectObserver() {
  observer.disconnect();
}
*/


/*

chrome.storage.local.set({ termsDetected: false }, () => {
    console.log('Yo');
  });
//terms array
const terms = ["Terms of Service", "TOS", "Privacy Policy", "Terms and Conditions", "User Agreements"];

// Function to check if any of the terms appear in the text content of the document
function containsTerms(text, terms) {
  return terms.some(term => text.includes(term));
}

// Get the text content of the entire document
const textContent = document.body.textContent || document.body.innerText;
console.log(textContent)

if (containsTerms(textContent, terms)) {
  chrome.storage.local.set({ termsDetected: true }, () => {
    console.log('Terms detected and stored');
  });
} else {
  chrome.storage.local.set({ termsDetected: false }, () => {
    console.log('No terms detected and stored');
  });
}


// create observer
const observer = new MutationObserver((mutations) => {
  // Callback function to handle the detected mutations
  mutations.forEach(mutation => {
    // You can handle different types of mutations here
    if (mutation.type === 'childList') {
      console.log('A child node was added or removed.');
    }
    // Re-run detection logic on detected changes
    containsTerms();
  });
});


// configure observer to watch for changes in the entire body
// formatting --> observer.observe(targetNode, options);
observer.observe(document.body, { childList: true, subtree: true });


if (containsTerms(textContent, terms)) {
  console.log("Terms detected!");
  
  //add acttions here
}


*/
