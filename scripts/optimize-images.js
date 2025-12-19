/**
 * Image Optimization Script
 *
 * Converts PNG/JPG images to optimized WebP format.
 *
 * Usage:
 *   node scripts/optimize-images.js           # Convert images, keep originals
 *   node scripts/optimize-images.js --backup  # Convert and move originals to backup
 *   node scripts/optimize-images.js --force   # Re-convert even if WebP exists
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, '../public/image');
const BACKUP_DIR = path.join(__dirname, '../image-backups');
const MAX_WIDTH = 1920;
const QUALITY = 85;

// Parse command line args
const args = process.argv.slice(2);
const BACKUP_MODE = args.includes('--backup');
const FORCE_MODE = args.includes('--force');

let totalOriginalSize = 0;
let totalNewSize = 0;
let processedCount = 0;
let skippedCount = 0;
let backedUpCount = 0;

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

async function optimizeImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Skip placeholder directory
            if (file === 'placeholder') continue;
            await optimizeImages(filePath);
            continue;
        }

        const ext = path.extname(file).toLowerCase();
        if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

        const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const relativePath = path.relative(IMAGE_DIR, filePath);

        // Skip if WebP already exists (unless force mode)
        if (fs.existsSync(outputPath) && !FORCE_MODE) {
            console.log(`  SKIP: ${relativePath} (WebP exists)`);
            skippedCount++;

            // Still backup the original if backup mode
            if (BACKUP_MODE) {
                const backupPath = path.join(BACKUP_DIR, relativePath);
                ensureDir(path.dirname(backupPath));
                fs.renameSync(filePath, backupPath);
                console.log(`    → Backed up to: ${relativePath}`);
                backedUpCount++;
            }
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
            await pipeline
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            const originalSize = stat.size;
            const newSize = fs.statSync(outputPath).size;
            const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

            totalOriginalSize += originalSize;
            totalNewSize += newSize;
            processedCount++;

            console.log(`  CONVERT: ${relativePath}`);
            console.log(`    ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${reduction}%)`);

            // Backup original if requested
            if (BACKUP_MODE) {
                const backupPath = path.join(BACKUP_DIR, relativePath);
                ensureDir(path.dirname(backupPath));
                fs.renameSync(filePath, backupPath);
                console.log(`    → Backed up original`);
                backedUpCount++;
            }
        } catch (err) {
            console.error(`  ERROR: ${relativePath} - ${err.message}`);
        }
    }
}

console.log('\n📷 Image Optimization Script');
console.log('============================\n');

if (BACKUP_MODE) {
    console.log(`📁 Backup mode: originals will be moved to ${BACKUP_DIR}\n`);
    ensureDir(BACKUP_DIR);
}

if (FORCE_MODE) {
    console.log('🔄 Force mode: re-converting all images\n');
}

console.log(`📂 Source: ${IMAGE_DIR}\n`);
console.log('Processing:\n');

optimizeImages(IMAGE_DIR)
    .then(() => {
        console.log('\n' + '='.repeat(50));
        console.log('📊 SUMMARY');
        console.log('='.repeat(50));
        console.log(`Converted:  ${processedCount} images`);
        console.log(`Skipped:    ${skippedCount} images`);
        if (BACKUP_MODE) {
            console.log(`Backed up:  ${backedUpCount} originals`);
        }
        if (processedCount > 0) {
            console.log(`\nOriginal:   ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
            console.log(`Optimized:  ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
            console.log(`Saved:      ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB (${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%)`);
        }
        console.log('='.repeat(50));
        console.log('\n✅ Done!\n');
    })
    .catch(console.error);
