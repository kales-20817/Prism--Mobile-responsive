const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let idCounter = 1;

html = html.replace(/<div class="sc-card/g, (match) => {
  return `<div id="sc-card-component-${idCounter++}" class="sc-card`;
});

fs.writeFileSync('index.html', html);
console.log(`Added IDs to ${idCounter - 1} sc-card components.`);
