const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
    // OG image dimensions (standard)
    const width = 1200;
    const height = 630;

    // Create canvas
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background - light gray/white like the original
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, width, height);

    // Load and draw Timi's photo on the left
    const photoPath = path.join(__dirname, '..', 'public', 'image', 'me.jpg');
    const photo = await loadImage(photoPath);

    // Calculate photo dimensions to fit left side (keeping aspect ratio)
    const photoHeight = height;
    const photoWidth = (photo.width / photo.height) * photoHeight;
    const photoX = 0;
    const photoY = 0;

    // Draw photo (already grayscale)
    ctx.drawImage(photo, photoX, photoY, photoWidth, photoHeight);

    // Add a subtle gradient overlay on photo right edge for smooth transition
    const gradient = ctx.createLinearGradient(photoWidth - 100, 0, photoWidth + 50, 0);
    gradient.addColorStop(0, 'rgba(248, 248, 248, 0)');
    gradient.addColorStop(1, 'rgba(248, 248, 248, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(photoWidth - 100, 0, 200, height);

    // Right side content area
    const textX = photoWidth + 40;
    const rightWidth = width - textX - 40;

    // Draw header text "Timi Olumcev | Portfolio"
    ctx.fillStyle = '#333333';
    ctx.font = '600 24px "Segoe UI", Arial, sans-serif';
    ctx.fillText('Timi Olumcev | Portfolio', textX, 120);

    // Draw small decorative dots near header
    ctx.fillStyle = '#666666';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            ctx.beginPath();
            ctx.arc(textX + rightWidth - 80 + i * 12, 80 + j * 12, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Draw main title "Timi Olumcev"
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 72px "Segoe UI", Arial, sans-serif';
    ctx.fillText('Timi Olumcev', textX, 240);

    // Draw subtitle "Portfolio"
    ctx.font = 'bold 72px "Segoe UI", Arial, sans-serif';
    ctx.fillText('Portfolio', textX, 330);

    // Draw website URL
    ctx.fillStyle = '#555555';
    ctx.font = '400 20px "Segoe UI", Arial, sans-serif';
    ctx.fillText('olumchev.com', textX, 550);

    // Draw geometric line art (right side decorations)
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 1.5;

    // Geometric shape 1 - triangle/diamond pattern (top right area)
    const geo1X = textX + rightWidth - 120;
    const geo1Y = 180;
    drawGeometricShape(ctx, geo1X, geo1Y, 80);

    // Geometric shape 2 - smaller one below
    drawGeometricShape(ctx, geo1X + 30, geo1Y + 140, 60);

    // Geometric shape 3 - even smaller
    drawGeometricShape(ctx, geo1X - 20, geo1Y + 260, 100);

    // Save the image
    const outputPath = path.join(__dirname, '..', 'public', 'og-image-rev.png');
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);

    console.log('OG image generated successfully at:', outputPath);
}

function drawGeometricShape(ctx, x, y, size) {
    // Draw a geometric line art shape (connected triangles/polygon)
    ctx.beginPath();

    // Create an irregular polygon shape
    const points = [
        [x, y],
        [x + size * 0.8, y + size * 0.3],
        [x + size, y + size * 0.9],
        [x + size * 0.5, y + size * 1.2],
        [x - size * 0.2, y + size * 0.8],
        [x - size * 0.1, y + size * 0.2],
    ];

    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.closePath();
    ctx.stroke();

    // Draw internal lines for a more complex geometric look
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    ctx.lineTo(points[3][0], points[3][1]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[1][0], points[1][1]);
    ctx.lineTo(points[4][0], points[4][1]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(points[2][0], points[2][1]);
    ctx.lineTo(points[5][0], points[5][1]);
    ctx.stroke();
}

generateOGImage().catch(console.error);
