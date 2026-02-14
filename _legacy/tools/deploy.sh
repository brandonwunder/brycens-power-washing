#!/bin/bash

# ===========================================
# AZ Concrete King — Deploy Script
# Pre-deploy checks and push to Vercel
# ===========================================

echo "=== AZ Concrete King — Deploy ==="
echo ""

# Check that required files exist
echo "Checking required files..."
REQUIRED_FILES=(
  "index.html"
  "services.html"
  "reviews.html"
  "about.html"
  "contact.html"
  "css/styles.css"
  "css/variables.css"
  "js/main.js"
  "js/pricing.js"
  "js/reviews.js"
  "data/pricing.json"
  "data/reviews.json"
)

MISSING=0
for file in "${REQUIRED_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "  MISSING: $file"
    MISSING=$((MISSING + 1))
  fi
done

if [ $MISSING -gt 0 ]; then
  echo ""
  echo "ERROR: $MISSING required file(s) missing. Fix before deploying."
  exit 1
fi

echo "  All required files present."
echo ""

# Validate JSON files
echo "Validating JSON data files..."
node -e "JSON.parse(require('fs').readFileSync('data/pricing.json', 'utf-8'))" 2>/dev/null
if [ $? -ne 0 ]; then
  echo "  ERROR: data/pricing.json is invalid JSON."
  exit 1
fi

node -e "JSON.parse(require('fs').readFileSync('data/reviews.json', 'utf-8'))" 2>/dev/null
if [ $? -ne 0 ]; then
  echo "  ERROR: data/reviews.json is invalid JSON."
  exit 1
fi

echo "  JSON files valid."
echo ""

# Check for uncommitted changes
echo "Checking git status..."
if [ -d ".git" ]; then
  CHANGES=$(git status --porcelain)
  if [ -n "$CHANGES" ]; then
    echo "  WARNING: You have uncommitted changes."
    echo "  Consider committing before deploying."
    echo ""
  else
    echo "  Working directory clean."
    echo ""
  fi
else
  echo "  Not a git repository. Skipping git check."
  echo ""
fi

# Deploy
echo "Ready to deploy!"
echo "Run 'vercel' or 'git push' to deploy to Vercel."
echo ""
echo "=== Pre-deploy checks passed ==="
