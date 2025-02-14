const { Before, After, setWorldConstructor } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  console.log("Launching browser...");
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  console.log("Closing browser...");
  await this.browser.close();
});

