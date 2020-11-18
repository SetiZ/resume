const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://setiz.github.io/resume/', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({path: 'resume.pdf', format: 'A4', margin: { left: '2cm', top: '4cm', right: '1cm', bottom: '3.5cm' } });

  await browser.close();
})();
