const puppeteer = require('puppeteer')

const debugging_mode = {
  headless: false,
  slowMo: 250,
  devtools: true,
}

describe('smoke test', () => {

  test('main page is load correctly', async () => {
    let browser = await puppeteer.launch(debugging_mode)
    let page = await browser.newPage()

    await page.emulate({
      viewport: {
        width: 1600,
        height: 1200,
      },
      userAgent: ''
    })

    await page.goto('http://localhost:3000')
    const html = await page.$eval('#game_2048 > p', e => e.innerHTML)
    expect(html).toBe('*2048*')

    await browser.disconnect()
    await browser.close()
  }, 5000)
})