const puppeteer = require('puppeteer')
const config = require('./config.json')

async function report (log) {
	currentTime = new Date();
	console.log(currentTime.toString().split('G')[0] + ': ' + log)
}
function click_signin(page){
  page.click(".nav-complex-inner");
}
async function main(){
  const browser = await puppeteer.launch({"headless": false, "defaultViewport": null});
  const page = await browser.newPage();

  await page.goto('https://newegg.com');
  click_signin(page);
  //await browser.close();
}

main();