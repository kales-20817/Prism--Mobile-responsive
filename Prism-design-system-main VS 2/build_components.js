const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'Action-bar.html');
let htmlContent = fs.readFileSync(srcFile, 'utf8');

// 1. Extract the sidebar nav block
const sidebarNavRegex = /<ul class="sidebar-nav">([\s\S]*?)<\/ul>/;
const match = htmlContent.match(sidebarNavRegex);
if (!match) {
    console.error("Could not find sidebar-nav");
    process.exit(1);
}

const listItemsStr = match[1];
const itemRegex = /<li><a[^>]*>(.*?)<\/a><\/li>/g;

let components = [];
let itemMatch;
while ((itemMatch = itemRegex.exec(listItemsStr)) !== null) {
    const name = itemMatch[1].trim();
    const fileName = name.replace(/\s+/g, '-') + '.html'; // e.g., Action-bar.html
    components.push({ name, fileName });
}

console.log(`Found ${components.length} components.`);

// 2. Generate the fully linked sidebar HTML
function generateSidebar(activeIndex) {
    let sidebarHtml = '<ul class="sidebar-nav">\n';
    components.forEach((comp, idx) => {
        const activeClass = (idx === activeIndex) ? ' active' : '';
        sidebarHtml += `        <li><a href="${comp.fileName}" class="sidebar-link${activeClass}">${comp.name}</a></li>\n`;
    });
    sidebarHtml += '      </ul>';
    return sidebarHtml;
}

// 3. For each component, create the file
components.forEach((comp, index) => {
    let newHtml = htmlContent;

    // Replace <title>
    newHtml = newHtml.replace(
        /<title>.*?<\/title>/, 
        `<title>${comp.name} — UEMS Design System<\/title>`
    );

    // Replace the sidebar
    const newSidebar = generateSidebar(index);
    newHtml = newHtml.replace(sidebarNavRegex, newSidebar);

    // Replace the main panel content
    const mainPanelRegex = /<main class="main-panel">([\s\S]*?)<\/main>/;
    
    const newMainPanel = `<main class="main-panel">
      <h1 class="page-title">${comp.name}</h1>
      <nav class="content-tabs">
        <button class="tab-item active">Usage</button>
        <button class="tab-item">Style</button>
        <button class="tab-item">Code</button>
        <button class="tab-item">Accessibility</button>
      </nav>
      <div class="tab-content" id="tab-usage" style="padding-top: 32px;">
        <div style="border: 2px dashed var(--prism-border); border-radius: 16px; padding: 64px 20px; text-align: center; background: rgba(37,99,235,0.02);">
           <svg width="48" height="48" fill="none" stroke="var(--prism-text-muted)" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom: 24px; opacity: 0.5;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
           <h3 style="color: var(--prism-text); font-size: 20px; font-weight: 500; margin-bottom: 8px;">${comp.name} components</h3>
           <p style="color: var(--prism-text-muted); font-size: 15px; max-width: 400px; margin: 0 auto;">Documentation and examples for the ${comp.name} component will go here.</p>
        </div>
      </div>
    </main>`;

    newHtml = newHtml.replace(mainPanelRegex, newMainPanel);

    // Save the file
    fs.writeFileSync(path.join(__dirname, comp.fileName), newHtml, 'utf8');
    console.log(`Created ${comp.fileName}`);
});

console.log("All component pages built successfully!");
