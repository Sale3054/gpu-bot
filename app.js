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
	constructor(page, browser)
	{
		this.page = page;
		this.browser = browser;
		this.logger = new Logger();
		this.logger.log("Creating new Clicker instance");
	}

	async click_sign_in()
	{
		this.page.click(".nav-complex-inner");
		this.page.waitForNavigation();
	}

	async click_email_form()
	{
		this.logger.log("Navigated to email page");
		this.page.once('load', () => this.page.type('input', "asdfasgijasogasoidghjsda"));
		this.logger.log("Filled email form, submitting...");
		// this.page.click("#signInSubmit");
		//TODO: Figure out why this is crashing ^
		//this causes errors...for next time
	}
}

async function main(){
  const browser = await puppeteer.launch({"headless": false, "defaultViewport": null});
  const page = await browser.newPage();
	const clicker = new Clicker(page, browser);
  await page.goto('https://newegg.com');

  clicker.click_sign_in();
	clicker.click_email_form();
  //await browser.close();
}

main();
