const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateCV() {
    console.log('Starting CV PDF generation...');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Read the HTML template
        const templatePath = path.join(__dirname, 'cv-template.html');
        let htmlContent = fs.readFileSync(templatePath, 'utf8');

        // Convert image to base64 and embed it
        const imagePath = path.join(__dirname, '..', 'public', 'image', 'me.webp');
        const imageBuffer = fs.readFileSync(imagePath);
        const base64Image = imageBuffer.toString('base64');
        const dataUrl = `data:image/webp;base64,${base64Image}`;
        htmlContent = htmlContent.replace('../public/image/me.webp', dataUrl);

        // Set the HTML content
        await page.setContent(htmlContent, {
            waitUntil: 'networkidle0'
        });

        // Generate PDF
        const outputPath = path.join(__dirname, '..', 'public', 'Timi-Olumcev-CV.pdf');
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0',
                right: '0',
                bottom: '0',
                left: '0'
            }
        });

        console.log(`CV PDF generated successfully: ${outputPath}`);
    } catch (error) {
        console.error('Error generating CV:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

generateCV();
