echo "Removing previous build files..."
rm -rf ./functions/__compiled__
rm -rf ./functions/__zip__

echo "Building typescript..."

for function in $(ls functions/typescript); do
  esbuild functions/typescript/$function/index.ts --platform=node --bundle --minify --outfile=functions/__compiled__/$function/index.js
done

echo "Done building"
