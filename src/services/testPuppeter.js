const puppeter = require('puppeteer');

async function testPuppeter (req, res) {
  console.log('Entrou no testPuppeter');
  try {
    const browser = await puppeter.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com/');
    await page.screenshot({ path: 'example.png' });
    await browser.close();

    res.sendStatus(200);
      
  } catch (error) {
    console.log('Error no testPuppeter');
    res.sendStatus(400);
  }
  
}

module.exports = testPuppeter;