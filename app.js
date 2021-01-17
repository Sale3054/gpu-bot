const puppeteer = require('puppeteer')
const config = require('./config.json')
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


async function report (log) {
	currentTime = new Date();
	console.log(currentTime.toString().split('G')[0] + ': ' + log)
}


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://newegg.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
