#!/bin/bash

# LEXII Deployment Script
echo "🚀 Deploying LEXII to production..."

# Build the application
echo "📦 Building application..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm run test

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

# Update sitemap
echo "🗺️ Updating sitemap..."
curl -X POST "https://lexii.com/api/revalidate-sitemap"

# Notify team
echo "📧 Sending deployment notification..."
curl -X POST "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK" \
  -H 'Content-type: application/json' \
  --data '{"text":"✅ LEXII deployed successfully to production!"}'

echo "✅ Deployment complete!"
