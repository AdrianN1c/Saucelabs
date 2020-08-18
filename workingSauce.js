const {Builder, By, Key, until} = require('selenium-webdriver')
const SauceLabs = require('saucelabs').default;
const assert = require('assert');
const utils = require('./utils');
const { Options } = require('selenium-webdriver/chrome');

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;

/**
* Task I: Update the test code so when it runs, the test clicks the "I am a link" link.
*
* Task II - Comment out the code from Task I. Update the test code so when it runs, 
* the test is able to write "Sauce" in the text box that currently says "I has no focus".
*
* Task III - Update the test code so when it runs, it adds an email to the email field, 
* adds text to the comments field, and clicks the "Send" button.
* Note that email will not actually be sent!
*
* Task IV - Add a capability that adds a tag to each test that is run.
* See this page for instructions: https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
* 
* Bonus: Set the status of the test so it shows as "passed" instead of "complete".
* We've included the node-saucelabs package already. For more info see:
* https://github.com/saucelabs/node-saucelabs
*/


describe('Working Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.workingCapabilities)
                    .usingServer(ONDEMAND_URL).build();


    /**
     * Goes to Sauce Lab's guinea-pig page and verifies the title
     */

    await driver.get("https://saucelabs.com/test/guinea-pig");
    await assert.strictEqual("I am a page title - Sauce Labs", await driver.getTitle());

    // Task I
    //await driver.findElement(By.id("i am a link")).click();

    // Task II
    const name = "Sauce";
    await driver.findElement(By.name('i_am_a_textbox')).clear();
    await driver.findElement(By.name('i_am_a_textbox')).sendKeys(name);
    
    // Task III
    const email = "A@B.com";
    const comment = "This is a comment";
    await driver.findElement(By.name('fbemail')).clear();
    await driver.findElement(By.name('fbemail')).sendKeys(email);
    await driver.findElement(By.name('comments')).clear();
    await driver.findElement(By.name('comments')).sendKeys(comment); 
    await driver.findElement(By.id("submit")).click();

    // Task IV
    // I was unable to do this with code, I did see the cURL way to it and read about the Selenium 
    // JavaScript Executor and looked at the https://github.com/saucelabs-training/demo-js but in 
    // the end I simply modified the utils.js file to complete Task IV and the bonus in the end.
    
    await driver.quit();
    });
});
