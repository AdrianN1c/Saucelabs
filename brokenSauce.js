const {Builder, By, Key, until} = require('selenium-webdriver')
const utils = require('./utils')

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;


/**
* Run this test before working on the problem.
* When you view the results on your dashboard, you'll see that the test "Failed".
* Your job is to figure out why the test failed and make the changes necessary to make the test pass.
*
* Bonus: Once you get the test working, update the code so that when the test runs, it 
* can reach the Sauce Labs homepage 
* and then open the Docs page
*/

describe('Broken Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.brokenCapabilities)
                    .usingServer(ONDEMAND_URL).build();

        await driver.get("https://www.google.com");

        let search = await driver.findElement(By.name("q")); // Element named q not Search
        await search.sendKeys("Sauce Labs");
        
        let button =  await driver.findElement(By.name("btnK")); // Removed unecessary await and brackets. Added Click() and ;
        await button.click(); // Added ;
        
        let page = await driver.findElement(By.partialLinkText("sauce")); //Removed ()
        
        // Bonus click on first partial match of sauce
        await page.click();
        
        //Bonus open the doc page
        await driver.findElement(By.linkText("Resources")).click();
        await driver.findElement(By.linkText("Documentation")).click();
        
        await driver.quit();
    });
});
