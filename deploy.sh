#!/bin/bash

# Build the Hugo site
echo "Building Hugo site..."
hugo --minify

# Copy .nojekyll to public folder
cp .nojekyll public/

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d public

echo "Deployment complete!"
