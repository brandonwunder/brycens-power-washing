#!/usr/bin/env node

/* ===========================================
   AZ Concrete King — Image Optimizer
   Reports image file sizes and identifies
   files that may need compression.

   Note: For actual compression, use an external
   tool like Squoosh, TinyPNG, or ImageMagick.
   This script identifies which files need attention.

   Usage:
     node tools/image-optimizer.js
     node tools/image-optimizer.js --threshold 500
   =========================================== */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'assets', 'images');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

function scanImages(thresholdKB) {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.log('No images directory found at assets/images/');
    console.log('Create the directory and add images to optimize.');
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('No image files found in assets/images/');
    console.log('Supported formats: ' + IMAGE_EXTENSIONS.join(', '));
    return;
  }

  console.log('\n=== Image File Report ===\n');

  let totalSize = 0;
  let needsOptimization = 0;

  imageFiles.forEach(file => {
    const filePath = path.join(IMAGES_DIR, file);
    const sizeKB = getFileSizeKB(filePath);
    totalSize += sizeKB;

    const status = sizeKB > thresholdKB ? ' [LARGE - consider compressing]' : ' [OK]';
    if (sizeKB > thresholdKB) needsOptimization++;

    console.log(`  ${file} — ${sizeKB} KB${status}`);
  });

  console.log(`\nTotal: ${imageFiles.length} images, ${totalSize} KB`);
  console.log(`Threshold: ${thresholdKB} KB`);

  if (needsOptimization > 0) {
    console.log(`\n${needsOptimization} file(s) exceed the threshold.`);
    console.log('Recommended tools for compression:');
    console.log('  - Squoosh: https://squoosh.app');
    console.log('  - TinyPNG: https://tinypng.com');
    console.log('  - ImageMagick: magick convert input.jpg -quality 80 output.jpg');
  } else {
    console.log('\nAll images are within the size threshold.');
  }
}

// CLI entry point
const args = process.argv.slice(2);
let threshold = 200; // Default 200 KB

const thresholdIndex = args.indexOf('--threshold');
if (thresholdIndex !== -1 && args[thresholdIndex + 1]) {
  threshold = parseInt(args[thresholdIndex + 1]);
}

scanImages(threshold);
