const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.wikipedia.org/');
  console.log('Wikipedia homepage opened');
  await browser.close();
})();
