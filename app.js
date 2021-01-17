const puppeteer = require('puppeteer')
const config = require('./config.json')

class Logger
{
	constructor()
	{
		console.log("Creating new Logger instance");
	}

	log(message) {
		this.currentTime = new Date();
		console.log(this.currentTime.toString().split('G')[0] + ': ' + message);
	}
}

class Clicker
{
	constructor()
	{
		this.logger = new Logger();
		this.logger.log("Creating new Clicker instance");
	}

	click_sign_in(page)
	{
		page.click(".nav-complex-inner");
		page.waitForNavigation();
	}

	click_email_form(page)
	{
		page.click("#email");
	}
}

async function main(){
  const browser = await puppeteer.launch({"headless": false, "defaultViewport": null});
  const page = await browser.newPage();
	const clicker = new Clicker();
  await page.goto('https://newegg.com');

  clicker.click_sign_in(page);
	clicker.click_email_form(page);
  //await browser.close();
}

main();
