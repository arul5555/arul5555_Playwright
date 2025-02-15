const { test,chromium,expect } = require('@playwright/test')

test("first Scenario test", async () => {
    const capabilities = {
        'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'Playwright Sample Build',
            'name': 'Playwright first Scenario',
            'user': 'arul5555',
            'accessKey': 'B1zgbRtm4CwJImicxgHjGqGa4CwLxxiERDwXRVph0Gd2zhd9yp',
            'network': true,
            'video': true,
            'console': true
        }
    }

    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })
    const page = await browser.newPage()
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator('//a[text()="Simple Form Demo"]').click();
    let urlContains = await page.url();
    await expect(urlContains).toContain('simple-form-demo')
    await page.locator('//input[@id="user-message"]').fill('Welcome to LambdaTest')
    await page.locator('//button[@id="showInput"]').click();
    await page.waitForTimeout(2000);
    let text = await page.locator('//p[@id="message"]').textContent()

    try {
        await expect(text).toContain('Welcome to LambdaTest')
        // Mark the test as completed or failed
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    } catch {
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
    }

    await browser.close()

})

test.describe('Browse LambdaTest in different search engines 1', () => {
test("Second Scenario test", async () => {
    const capabilities = {
        'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'Playwright Sample Build',
            'name': 'Playwright Second Scenario',
            'user': 'arul5555',
            'accessKey': 'B1zgbRtm4CwJImicxgHjGqGa4CwLxxiERDwXRVph0Gd2zhd9yp',
            // 'network': true,
            'video': true,
            'console': true
        }
    }

    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })
    const page = await browser.newPage()
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator('//a[text()="Drag & Drop Sliders"]').click();
    await page.waitForTimeout(4000)
    await page.locator('//h4[text()=" Default value 15"]/parent::div//input[@class="sp__range"]').hover();
    await page.mouse.down()
    await page.mouse.move(555, 0);
    let percentage = await page.locator('//h4[text()=" Default value 15"]/parent::div//output').textContent();

    try {
        await expect(percentage).toContain('95')
        // Mark the test as completed or failed
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    } catch {
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
    }

    await browser.close()
})
})

test.describe('Browse LambdaTest in different search engines 1', () => {
test("Third Scenario test", async () => {
    const capabilities = {
        'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'Playwright Sample Build',
            'name': 'Playwright Third Scenario',
            'user': 'arul5555',
            'accessKey': 'B1zgbRtm4CwJImicxgHjGqGa4CwLxxiERDwXRVph0Gd2zhd9yp',
            'network': true,
            'video': true,
            'console': true
        }
    }

    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })
    const page = await browser.newPage()
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator('//a[text()="Input Form Submit"]').click();
    await page.locator('//button[text()="Submit"]').click()
    let name = await page.locator('//input[@id="name"]');
    const validationMessage = await name.evaluate((element) => {
        return element.validationMessage
    });
    await expect(validationMessage).toContain('Please fill out this field.')
    await name.fill('ARUL')
    await page.locator('//input[@id="inputEmail4"]').fill('sample@gmail.com')
    await page.locator('//input[@id="inputPassword4"]').fill('Qwerty');
    await page.locator('//input[@id="company"]').fill('lamdatest');
    await page.locator('//input[@id="websitename"]').fill('www.abc.com')
    await page.locator('//select[@name="country"]').selectOption({ label: 'United States' })
    await page.locator('//input[@id="inputCity"]').fill('china');
    await page.locator('//input[@id="inputAddress1"]').fill('vivekananda street')
    await page.locator('//input[@id="inputAddress2"]').fill('dubai Kuruku santhu')
    await page.locator('//input[@id="inputState"]').fill('dubai')
    await page.locator('//input[@id="inputZip"]').fill('2309986')
    await page.locator('//button[text()="Submit"]').click()
    let message = await page.locator('//p[@class="success-msg hidden"]').textContent();
    try {
        await expect(message).toContain('Thanks for contacting us, we will get back to you shortly.')
        // Mark the test as completed or failed
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    } catch {
        await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
    }

    await browser.close()
})
})
