const puppeter = require('puppeteer');
const config = require('config');

async function getOneDraw (req, res) {
  console.log('Entrou no getOneDraw');
  try {
    const index = req.params.index;

    const browser = await puppeter.launch();
    const page = await browser.newPage();
    await page.goto(config.get('url_megasena'));
    
    const pageContent = await page.evaluate((index) => {
      
      if (parseInt(index) > 2451) {
        return 'Non-existent draw';
      }

      const table = document.getElementsByTagName('tbody')[1];

      for (i = 1; i < 5616; i++) {
        const row = table.getElementsByTagName('tr')[i];
        let indexRow = row.getElementsByTagName('td')[0];
          
        if (indexRow != undefined) {
          if (indexRow.innerHTML == String(index)){
            const data = {
              index: row.getElementsByTagName('td')[0].innerHTML,
              place: row.getElementsByTagName('td')[1].innerHTML,
              dozens: {
                01: row.getElementsByTagName('td')[3].innerHTML,
                02: row.getElementsByTagName('td')[4].innerHTML,
                03: row.getElementsByTagName('td')[5].innerHTML,
                04: row.getElementsByTagName('td')[6].innerHTML,
                05: row.getElementsByTagName('td')[7].innerHTML,
                06: row.getElementsByTagName('td')[8].innerHTML
              },
              winners: {
                track1: row.getElementsByTagName('td')[9].innerHTML,
                track2: row.getElementsByTagName('td')[10].innerHTML,
                track3: row.getElementsByTagName('td')[11].innerHTML
              },
              date: row.getElementsByTagName('td')[2].innerHTML
            };
            return data;
          }
        } else {
          continue;
        }

      }
       
    }, index);

    await browser.close();
    console.log('Saiu do getOneDraw sem erros.')
    res.send({
      result: pageContent
    });
      
  } catch (error) {
    console.log('Error no testPuppeter');
    console.log(error.message);
    res.sendStatus(400);
  }
  
}

module.exports = getOneDraw;