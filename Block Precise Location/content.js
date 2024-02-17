function clickNotNowButton() {
    // Find the 'Not now' button by its unique characteristics
    const buttons = Array.from(document.querySelectorAll('g-raised-button, .Hg3NO, .VDgVie, .swJ5ic, .f2HKGc, .ttBXeb'));
    const notNowButton = buttons.find(button => button.innerText.includes('Not now'));
  
    // If the button is found, simulate a click on it
    if (notNowButton) {
      notNowButton.click();
      console.log('Clicked "Not now" button.');
    } else {
      console.log('"Not now" button not found.');
    }
  }
  
  // Run the function to click the 'Not now' button
  clickNotNowButton();
  
  // Since the dialog might load after some interactions or AJAX calls,
  // observe the body for changes and attempt to click the button again if necessary.
  const observer = new MutationObserver(mutations => {
    clickNotNowButton();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  