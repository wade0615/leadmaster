#!/bin/bash

# Build script for Leadmaster Kitchen Next.js project

echo "🚀 Building Leadmaster Kitchen Next.js project..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Type check
echo "🔍 Running type check..."
npm run type-check

# Lint check
echo "🧹 Running lint check..."
npm run lint

# Build project
echo "🏗️ Building project..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Static files are ready in the 'out' directory"
echo "🌐 You can now deploy the 'out' directory to any static hosting service"
