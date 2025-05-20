#!/bin/bash

# This script builds the Vite project, packages the resulting assets and Node
# dependencies, and uploads them to a remote server. Set the environment
# variables REMOTE_HOST and REMOTE_PATH to specify the upload destination.

set -euo pipefail

if [ ! -f package.json ]; then
  echo "Error: run this script from the project root" >&2
  exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the project for production
echo "Building project..."
npm run build

# Package node_modules and the build output
ARCHIVE_NAME="vite-deps.tar.gz"

# Include the dist directory if it exists
if [ -d dist ]; then
  tar -czf "$ARCHIVE_NAME" node_modules dist
else
  tar -czf "$ARCHIVE_NAME" node_modules
fi

echo "Created archive $ARCHIVE_NAME"

if [ -z "${REMOTE_HOST:-}" ] || [ -z "${REMOTE_PATH:-}" ]; then
  echo "REMOTE_HOST and REMOTE_PATH environment variables not set. Skipping upload."
  exit 0
fi

# Upload the archive using scp
scp "$ARCHIVE_NAME" "$REMOTE_HOST":"$REMOTE_PATH"

echo "Uploaded $ARCHIVE_NAME to $REMOTE_HOST:$REMOTE_PATH"
