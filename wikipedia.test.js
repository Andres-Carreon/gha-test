const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.wikipedia.org/');

  // Validate the text "The Free Encyclopedia" is displayed
  const text = await page.textContent('strong');
  if (text.includes('Andres was here')) {
    console.log('Validation passed: "The Free Encyclopedia" is displayed');
  } else {
    console.error('Validation failed: "The Free Encyclopedia" is not displayed');
    process.exit(1); // Exit with a non-zero status code to indicate failure
  }

  await browser.close();
})();
