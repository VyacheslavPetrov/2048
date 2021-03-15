const puppeteer = require('puppeteer')

const isDebugging = () => {
    const debugging_mode = {
        headless: false,
        slowMo: 500,
        devtools: true,
    }
    return debugging_mode
}



describe.skip('on page load', () => {
    test('button loads correctly', async() => {
        let browser = await puppeteer.launch(isDebugging())
        let page = await browser.newPage()

         await page.emulate({
            viewport: {
                width: 500,
                height: 800,
            },
            userAgent: ''
        })
        await page.goto('http://localhost:3000/');
        const html = await page.$eval('#start2048', e => e.innerHTML);
        expect(html).toBe('Start Game');
        await browser.disconnect();
        await browser.close();

    }, 16000)

})

describe('initial data has been load', ()=> {
    test('matrix load correctly', async()=>{
        let browser = await puppeteer.launch(isDebugging())
        let page = await browser.newPage()

        await page.emulate({
            viewport: {
                width: 500,
                height: 800,
            },
            userAgent: ''
        })
        await page.goto('http://localhost:3000/', { waitUntil: 'load'});
        await page.evaluate(() => {
            window.localStorage.setItem('gameArray', JSON.stringify([
                [0,2,0,0],
                [0,0,0,0],
                [8,8,0,0],
                [0,8,4,0]
            ]));
        });
        await page.reload()
        const html = await page.$eval('#start2048', e => e.innerHTML);
        expect(html).toBe('Start Game');
        await page.evaluate(()=> {
            console.log(window.localStorage.getItem('gameArray'))
        })
        /*await browser.disconnect();
        await browser.close();*/
    }, 20000)
})