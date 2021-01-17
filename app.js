const puppeteer = require('puppeteer')
const config = require('./config.json')

async function report (log) {
	currentTime = new Date();
	console.log(currentTime.toString().split('G')[0] + ': ' + log)
}


(async () => {
  const browser = await puppeteer.launch({"headless": false, "defaultViewport": null});
  const page = await browser.newPage();

  await page.goto('https://newegg.com');

  //await browser.close();
})();
