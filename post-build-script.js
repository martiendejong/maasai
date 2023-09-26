// post-build-script.js

const fs = require('fs');
const path = require('path');

// Define the path to the index.html file and the dist folder
const indexPath = path.join(__dirname, 'dist/maasai-investments-website', 'index.html');
const distPath = path.join(__dirname, 'dist/maasai-investments-website');

// Get a list of HTML files in the dist folder (excluding index.html)
const htmlFiles = fs.readdirSync(distPath).filter((file) => file.endsWith('.html') && file !== 'index.html');

// Process each HTML file in the dist folder
htmlFiles.forEach((htmlFile) => {
    // Read the content of index.html
    const indexContent = fs.readFileSync(indexPath, 'utf8');

  // Read the content of the current HTML file
  const htmlFilePath = path.join(distPath, htmlFile);
  const htmlFileContent = fs.readFileSync(htmlFilePath, 'utf8');

  // Find the position to insert elements (e.g., before the </head> tag)
  const insertPosition =  indexContent.indexOf('<!-- meta information -->')
  const endPosition = indexContent.indexOf('<style>');

  if (insertPosition !== -1) {
    // Extract the elements from index.html and append them to the current file
    const headElements = htmlFileContent.match(/<head>[\s\S]*?<\/head>/);
    if (headElements) {
      const updatedContent = indexContent.slice(0, insertPosition) + headElements[0].substring(6, headElements[0].length - 10) + indexContent.slice(endPosition);
      fs.writeFileSync(htmlFilePath, updatedContent, 'utf8');
      console.log(`Updated ${htmlFile}`);
    }
  }
});