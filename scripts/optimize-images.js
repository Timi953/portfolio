const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, '../public/image');
const MAX_WIDTH = 1920;
const QUALITY_PNG = 80;
const QUALITY_JPG = 85;

let totalOriginalSize = 0;
let totalNewSize = 0;
let processedCount = 0;
let skippedCount = 0;

async function optimizeImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await optimizeImages(filePath);
            continue;
        }

        const ext = path.extname(file).toLowerCase();
        if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

        const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

        // Skip if WebP already exists
        if (fs.existsSync(outputPath)) {
            console.log(`Skipping ${file} - WebP exists`);
            skippedCount++;
            continue;
        }

        try {
            const image = sharp(filePath);
            const metadata = await image.metadata();

            let pipeline = image;

            // Resize if wider than MAX_WIDTH
            if (metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize(MAX_WIDTH, null, {
                    withoutEnlargement: true
                });
            }

            // Convert to WebP
            const quality = ext === '.png' ? QUALITY_PNG : QUALITY_JPG;
            await pipeline
                .webp({ quality })
                .toFile(outputPath);

            const originalSize = stat.size;
            const newSize = fs.statSync(outputPath).size;
            const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

            totalOriginalSize += originalSize;
            totalNewSize += newSize;
            processedCount++;

            console.log(`✓ ${file} → ${path.basename(outputPath)}`);
            console.log(`  ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${reduction}% reduction)`);
        } catch (err) {
            console.error(`✗ Error processing ${file}:`, err.message);
        }
    }
}

console.log('Starting image optimization...\n');
console.log(`Source directory: ${IMAGE_DIR}\n`);

optimizeImages(IMAGE_DIR)
    .then(() => {
        console.log('\n' + '='.repeat(50));
        console.log('SUMMARY');
        console.log('='.repeat(50));
        console.log(`Processed: ${processedCount} images`);
        console.log(`Skipped: ${skippedCount} images (WebP already exists)`);
        console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Total new size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Total reduction: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%`);
        console.log('\nDone!');
    })
    .catch(console.error);
