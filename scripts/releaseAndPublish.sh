#!/bin/bash


VERSION=$(jq -r .version ${BASH_SOURCE%/*}/../package.json)

echo "Version: $VERSION"

# TYPES
cd ${BASH_SOURCE%/*}/../src/aer-types

echo "Building types..."
yarn run tsc
echo "Done."

echo "Publishing types..."
yarn publish --new-version $VERSION
echo "Done."

# DATA
echo "Building types for data...";
rm -rf dist;
tsc;
echo "Done.";

cd ../aer-data

echo "Building data..."
yarn run tsc
echo "Done."

echo "Publishing data..."
yarn publish --new-version $VERSION
echo "Done."

# App
cd ../../

echo "Building app..."
yarn build
echo "Done."

echo "Publishing app..."
netlify deploy --dir ./build --prod
echo "Done."
