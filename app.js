const puppeteer = require('puppeteer')
const config = require('./config.json')

async function report (log) {
	currentTime = new Date();
	console.log(currentTime.toString().split('G')[0] + ': ' + log)
}
function click_button(x,y,page){
  page.mouse.click(x,y);
}
async function main(){
  const browser = await puppeteer.launch({"headless": false, "defaultViewport": null});
  const page = await browser.newPage();

  await page.goto('https://newegg.com');
  click_button(500,500,page);
  //await browser.close();
}

main();