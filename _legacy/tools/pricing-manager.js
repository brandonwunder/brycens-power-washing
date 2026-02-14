#!/usr/bin/env node

/* ===========================================
   AZ Concrete King — Pricing Manager
   Add, update, or remove pricing tiers

   Usage:
     node tools/pricing-manager.js list
     node tools/pricing-manager.js add "Name" "Description" "Sq ft range" "Price range" "feature1,feature2,feature3"
     node tools/pricing-manager.js update <index> <field> <value>
     node tools/pricing-manager.js remove <index>
   =========================================== */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'pricing.json');

function loadData() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  console.log('Pricing data saved successfully.');
}

function listTiers() {
  const data = loadData();
  console.log('\n=== Pricing Tiers ===\n');
  data.tiers.forEach((tier, index) => {
    console.log(`[${index}] ${tier.name}`);
    console.log(`    Description: ${tier.description}`);
    console.log(`    Sq Ft: ${tier.sqft_range}`);
    console.log(`    Price: ${tier.price_range}`);
    console.log(`    Features: ${tier.features.join(', ')}`);
    console.log('');
  });
}

function addTier(name, description, sqftRange, priceRange, featuresStr) {
  const data = loadData();
  const features = featuresStr.split(',').map(f => f.trim());
  data.tiers.push({
    name,
    description,
    sqft_range: sqftRange,
    price_range: priceRange,
    features
  });
  saveData(data);
  console.log(`Added tier: ${name}`);
}

function updateTier(index, field, value) {
  const data = loadData();
  if (!data.tiers[index]) {
    console.error(`No tier at index ${index}`);
    process.exit(1);
  }
  const fieldMap = {
    name: 'name',
    description: 'description',
    sqft: 'sqft_range',
    price: 'price_range',
    features: 'features'
  };
  const key = fieldMap[field];
  if (!key) {
    console.error(`Unknown field: ${field}. Use: name, description, sqft, price, features`);
    process.exit(1);
  }
  if (field === 'features') {
    data.tiers[index][key] = value.split(',').map(f => f.trim());
  } else {
    data.tiers[index][key] = value;
  }
  saveData(data);
  console.log(`Updated tier [${index}] field "${field}"`);
}

function removeTier(index) {
  const data = loadData();
  if (!data.tiers[index]) {
    console.error(`No tier at index ${index}`);
    process.exit(1);
  }
  const removed = data.tiers.splice(index, 1);
  saveData(data);
  console.log(`Removed tier: ${removed[0].name}`);
}

// CLI entry point
const [,, command, ...args] = process.argv;

switch (command) {
  case 'list':
    listTiers();
    break;
  case 'add':
    if (args.length < 5) {
      console.error('Usage: add "Name" "Description" "Sq ft range" "Price range" "feature1,feature2"');
      process.exit(1);
    }
    addTier(args[0], args[1], args[2], args[3], args[4]);
    break;
  case 'update':
    if (args.length < 3) {
      console.error('Usage: update <index> <field> <value>');
      process.exit(1);
    }
    updateTier(parseInt(args[0]), args[1], args[2]);
    break;
  case 'remove':
    if (args.length < 1) {
      console.error('Usage: remove <index>');
      process.exit(1);
    }
    removeTier(parseInt(args[0]));
    break;
  default:
    console.log('Pricing Manager — AZ Concrete King');
    console.log('Commands: list, add, update, remove');
    console.log('Run with --help after any command for usage details.');
}
