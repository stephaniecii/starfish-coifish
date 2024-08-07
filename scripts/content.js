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


/*
if (containsTerms(textContent, terms)) {
  console.log("Terms detected!");
  
  //add acttions here
}
*/
