#!/usr/bin/env node

/* ===========================================
   AZ Concrete King — Review Collector
   Add and manage customer reviews

   Usage:
     node tools/review-collector.js list
     node tools/review-collector.js add "Name" "Location" <rating> "Review text"
     node tools/review-collector.js remove <index>
   =========================================== */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'reviews.json');

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  console.log('Reviews data saved successfully.');
}

function listReviews() {
  const data = loadData();
  console.log('\n=== Customer Reviews ===\n');
  data.reviews.forEach((review, index) => {
    const stars = '\u2605'.repeat(review.rating) + '\u2606'.repeat(5 - review.rating);
    console.log(`[${index}] ${review.name} — ${review.location}`);
    console.log(`    ${stars} (${review.rating}/5)`);
    console.log(`    "${review.text}"`);
    console.log(`    Date: ${review.date}`);
    console.log('');
  });
  console.log(`Total: ${data.reviews.length} reviews`);
}

function addReview(name, location, rating, text) {
  const data = loadData();
  const ratingNum = parseInt(rating);
  if (ratingNum < 1 || ratingNum > 5) {
    console.error('Rating must be between 1 and 5.');
    process.exit(1);
  }
  const today = new Date().toISOString().split('T')[0];
  data.reviews.push({
    name,
    location,
    rating: ratingNum,
    text,
    date: today
  });
  saveData(data);
  console.log(`Added review from ${name}.`);
}

function removeReview(index) {
  const data = loadData();
  if (!data.reviews[index]) {
    console.error(`No review at index ${index}`);
    process.exit(1);
  }
  const removed = data.reviews.splice(index, 1);
  saveData(data);
  console.log(`Removed review from: ${removed[0].name}`);
}

// CLI entry point
const [,, command, ...args] = process.argv;

switch (command) {
  case 'list':
    listReviews();
    break;
  case 'add':
    if (args.length < 4) {
      console.error('Usage: add "Name" "Location" <rating 1-5> "Review text"');
      process.exit(1);
    }
    addReview(args[0], args[1], args[2], args[3]);
    break;
  case 'remove':
    if (args.length < 1) {
      console.error('Usage: remove <index>');
      process.exit(1);
    }
    removeReview(parseInt(args[0]));
    break;
  default:
    console.log('Review Collector — AZ Concrete King');
    console.log('Commands: list, add, remove');
}
