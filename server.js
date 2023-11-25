/*const puppeteer = require('puppeteer');
const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

  
// Middleware to parse JSON body
app.use(bodyParser.json());

app.use(cors());


(async () => {
  try {
    await puppeteer.defaultArgs({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: 'new',
    });
  } catch (error) {
    console.error('Error setting default args for Puppeteer:', error);
  }
})();

app.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'new.html');
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending file:', error);
    res.status(500).send('Error sending the file');
  }
});

app.post('/convert', async (req, res) => {
  try {
    const { html, cssStyles } = req.body;

    if (!html || !cssStyles) {
      return res.status(400).send('HTML code and CSS styles are required.');
    }

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Set content to the page
    await page.setContent(`<style>${cssStyles}</style>${html}`);

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'Letter',
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    });

    await browser.close();

    // Send PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
    res.send(pdfBuffer);
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


 */





require("dotenv/config")
const puppeteer = require('puppeteer');
const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

  
// Middleware to parse JSON body
app.use(bodyParser.json());

app.use(cors());


(async () => {
  try {

    await puppeteer.defaultArgs({
      
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: 'new',
    });
  } catch (error) {
    console.error('Error setting default args for Puppeteer:', error);
  }
})();

app.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'new.html');
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending file:', error);
    res.status(500).send('Error sending the file');
  }
});

app.post('/convert', async (req, res) => {

  try {
    const { html, cssStyles } = req.body;

    if (!html || !cssStyles) {
      return res.status(400).send('HTML code and CSS styles are required.');
    }

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Set content to the page
    await page.setContent(`<style>${cssStyles}</style>${html}`);

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'Letter',
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    });

    await browser.close();

    // Send PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
    res.send(pdfBuffer);
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






/////////// Docker config

/* 
require('dotenv/config');
const puppeteer = require('puppeteer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors());

let executablePath = 'google-chrome'; // Default for Unix systems

if (process.platform === 'win32') {
  // Modify this path for Windows systems
  executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
} else if (process.platform === 'darwin') {
  // Modify this path for MacOS
  executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
} else {
  // Modify this path for Linux
  executablePath = '/usr/bin/google-chrome';
}

app.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'new.html');
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending file:', error);
    res.status(500).send('Error sending the file');
  }
});

app.post('/convert', async (req, res) => {
  try {
    const { html, cssStyles } = req.body;

    if (!html || !cssStyles) {
      return res.status(400).send('HTML code and CSS styles are required.');
    }

    const browser = await puppeteer.launch({
      headless: 'new', // Opting in early for the new Headless mode
      executablePath,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--single-process',
      ],
    });
    const page = await browser.newPage();

    // Set content to the page
    await page.setContent(`<style>${cssStyles}</style>${html}`);

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'Letter',
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    });

    await browser.close();

    // Send PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
    res.send(pdfBuffer);
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



 */




















/* 



const puppeteer = require('puppeteer-core');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'neww.html');
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending file:', error);
    res.status(500).send('Error sending the file');
  }
});


app.post('/convert', async (req, res) => {
  try {
    const { html, cssStyles } = req.body;

    if (!html || !cssStyles) {
      return res.status(400).send('HTML code and CSS styles are required.');
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    
    // Set content to the page
    await page.setContent(`<style>${cssStyles}</style>${html}`);

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'Letter',
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    });

    await browser.close();

    // Send PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
    res.send(pdfBuffer);
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 */


/* 
const express = require('express');
const pdf = require('html-pdf');
const cors = require('cors');
const app = express();

// const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(cors());
// app.use(fileUpload());

app.get("/", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "new.html");
    res.sendFile(filePath);
  } catch (error) {
    console.error("Error sending file:", error);
    res.status(500).send("Error sending the file");
  }
});

app.post('/convert', async (req, res) => {
  try {
    const { html, cssStyles } = req.body;

    if (!html || !cssStyles) {
      return res.status(400).send('HTML code and CSS styles are required.');
    }

    const options = {
      format: 'Letter',
      border: '10mm',
    };

    const finalHtml = `<style>${cssStyles}</style>${html}`;

    pdf.create(finalHtml, options).toStream((err, pdfStream) => {
      if (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
        return;
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');

      pdfStream.pipe(res);

      pdfStream.on('end', () => {
        console.log('PDF created and sent successfully');
        res.end();
      });
    });
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




 */


