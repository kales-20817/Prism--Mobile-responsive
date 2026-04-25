const fs = require('fs');
const path = require('path');

const buttonContent = `
        <!-- Title and Introduction -->
        <div style="margin-bottom: 48px;">
          <h2 id="usage" style="display: none;">Usage</h2>
          <p style="color: var(--prism-text); font-size: 20px; font-weight: 400; line-height: 1.5; max-width: 800px; margin-bottom: 48px; margin-top: 16px;">
            The Button is the primary interactive element for triggering actions. It supports multiple visual variants for semantic meaning, four sizes for layout flexibility, and five interaction states.
          </p>

          <style>
            .jump-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
            .jump-card {
              display: flex; align-items: center; gap: 14px;
              padding: 16px 20px; border-radius: 12px;
              background: var(--prism-surface);
              border: 1px solid var(--prism-border);
              text-decoration: none; color: var(--prism-text);
              transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
              position: relative; overflow: hidden;
            }
            [data-theme="light"] .jump-card {
              background: #fff;
              border: 1px solid rgba(37, 99, 235, 0.07);
              box-shadow: 0 1px 3px rgba(37, 99, 235, 0.04);
            }
            .jump-card::before {
              content: ''; position: absolute; inset: 0;
              background: linear-gradient(135deg, rgba(37,99,235,0.05) 0%, transparent 60%);
              opacity: 0; transition: opacity 0.25s ease;
            }
            .jump-card:hover::before { opacity: 1; }
            .jump-card:hover {
              border-color: rgba(37, 99, 235, 0.4);
              transform: translateY(-2px);
              box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
            }
            [data-theme="light"] .jump-card:hover { border-color: rgba(37, 99, 235, 0.22); box-shadow: 0 8px 28px rgba(37, 99, 235, 0.10); }
            .jump-card-icon {
              width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
              background: rgba(37, 99, 235, 0.08);
              display: flex; align-items: center; justify-content: center;
              transition: all 0.25s ease;
            }
            [data-theme="light"] .jump-card-icon { background: rgba(37, 99, 235, 0.06); }
            .jump-card-icon svg { width: 18px; height: 18px; stroke: var(--prism-violet); fill: none; stroke-width: 1.8; }
            .jump-card:hover .jump-card-icon { background: rgba(37, 99, 235, 0.15); transform: scale(1.05); }
            .jump-card-label { flex: 1; font-size: 14.5px; font-weight: 500; position: relative; z-index: 1; }
            .jump-card-arrow { width: 18px; height: 18px; color: var(--prism-text-muted); transition: all 0.2s ease; flex-shrink: 0; }
            .jump-card:hover .jump-card-arrow { color: var(--prism-violet); transform: translateX(3px); }
          </style>

          <div class="jump-grid">
            <a href="#live-demo" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>
              <span class="jump-card-label">Live demo</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#variants" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div>
              <span class="jump-card-label">Variants & Sizes</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#anatomy" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></div>
              <span class="jump-card-label">Anatomy</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#best-practices" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
              <span class="jump-card-label">Best practices</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <!-- Live demo -->
        <div style="margin-bottom: 64px;">
          <h2 id="live-demo" class="doc-section-title" style="margin-bottom: 8px;">Live demo</h2>
          <p class="doc-section-subtitle" style="margin-bottom: 28px;">Interact with the button variants to explore their hover states and layouts across different sizes.</p>

          <style>
            .demo-container { border: 1px solid var(--prism-border); border-radius: 16px; overflow: hidden; position: relative; }
            .demo-toolbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; background: var(--prism-surface); border-bottom: 1px solid var(--prism-border); }
            [data-theme="light"] .demo-container { border: 1px solid rgba(37, 99, 235, 0.08); box-shadow: 0 2px 12px rgba(37, 99, 235, 0.05); }
            [data-theme="light"] .demo-toolbar { background: rgba(255, 255, 255, 0.7); border-bottom: 1px solid rgba(37, 99, 235, 0.06); }
            .demo-toolbar-left { display: flex; align-items: center; gap: 12px; }
            .demo-theme-pill { display: flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 8px; font-size: 13px; font-weight: 500; background: rgba(37,99,235,0.08); color: var(--prism-violet); border: 1px solid rgba(37,99,235,0.2); cursor: pointer; transition: all 0.2s ease; }
            .demo-theme-pill:hover { background: rgba(37,99,235,0.14); }
            .demo-theme-pill svg { width: 14px; height: 14px; }
            .demo-canvas { padding: 64px; position: relative; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 24px 24px; background-color: #0a0a0c66; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 280px; gap: 32px; transition: background-color 0.5s ease; }
            [data-theme="light"] .demo-canvas { background-color: #f4f6fb; background-image: radial-gradient(circle, rgba(37, 99, 235, 0.08) 1px, transparent 1px); }
            
            /* Button styles applied locally for demo */
            .uems-btn {
              display: inline-flex; align-items: center; justify-content: center; gap: 8px;
              font-family: inherit; font-weight: 500; border: none; cursor: pointer;
              transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 8px;
            }
            .uems-btn:active { transform: scale(0.98); }
            
            /* Variants */
            .btn-primary { background: linear-gradient(135deg, #006AFF, #1E52BB); color: #fff; box-shadow: 0 4px 12px rgba(0, 106, 255, 0.3); }
            .btn-primary:hover { background: linear-gradient(135deg, #1E52BB, #006AFF); box-shadow: 0 6px 16px rgba(0, 106, 255, 0.4); }
            
            .btn-secondary { background: #F0F2F5; color: #15181E; }
            [data-theme="dark"] .btn-secondary { background: rgba(255,255,255,0.1); color: #fff; }
            .btn-secondary:hover { background: #E4E7ED; }
            [data-theme="dark"] .btn-secondary:hover { background: rgba(255,255,255,0.15); }
            
            .btn-outline { background: transparent; border: 1px solid #C3C9D6; color: #15181E; }
            [data-theme="dark"] .btn-outline { border: 1px solid rgba(255,255,255,0.2); color: #fff; }
            .btn-outline:hover { background: rgba(0, 0, 0, 0.03); border-color: #A0A9BC; }
            [data-theme="dark"] .btn-outline:hover { background: rgba(255,255,255,0.05); }

            .btn-destructive { background: #E42527; color: #fff; }
            .btn-destructive:hover { background: #C91A1C; box-shadow: 0 4px 12px rgba(228, 37, 39, 0.3); }

            /* Sizes */
            .btn-l { height: 48px; padding: 0 16px; font-size: 16px; line-height: 24px; }
            .btn-m { height: 40px; padding: 0 16px; font-size: 14px; line-height: 20px; }
            .btn-s { height: 36px; padding: 0 12px; font-size: 14px; line-height: 20px; gap: 4px; }
            
            .demo-btn-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center; }
          </style>

          <div class="demo-container">
            <div class="demo-toolbar">
              <div class="demo-toolbar-left"><div class="demo-theme-pill">Preview</div></div>
            </div>
            <div class="demo-canvas">
              <div class="demo-btn-row">
                <button class="uems-btn btn-primary btn-l">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                  Create new
                </button>
                <button class="uems-btn btn-secondary btn-l">Cancel</button>
                <button class="uems-btn btn-outline btn-l">View details
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button class="uems-btn btn-destructive btn-l">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  Delete
                </button>
              </div>
              <div class="demo-btn-row" style="opacity: 0.85;">
                <button class="uems-btn btn-primary btn-m">Medium size</button>
                <button class="uems-btn btn-secondary btn-m">Medium size</button>
              </div>
              <div class="demo-btn-row" style="opacity: 0.7;">
                <button class="uems-btn btn-primary btn-s">Small size</button>
                <button class="uems-btn btn-secondary btn-s">Small size</button>
              </div>
            </div>
          </div>
        </div>

        <hr style="border: none; border-top: 1px solid var(--prism-border); margin: 40px 0;" />

        <!-- Variants Section -->
        <div class="doc-section">
          <h2 id="variants" class="doc-section-title">Variants</h2>
          <p class="doc-section-subtitle">Buttons convey their hierarchy and semantic meaning through distinct visual styles. A page should typically only feature one primary action.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px; text-align: left; font-size: 14.5px; color: var(--prism-text);">
            <thead>
              <tr style="border-bottom: 1px solid var(--prism-border);">
                <th style="padding: 16px 8px; font-weight: 600; color: var(--prism-text-muted);">Variant</th>
                <th style="padding: 16px 8px; font-weight: 600; color: var(--prism-text-muted);">Usage</th>
                <th style="padding: 16px 8px; font-weight: 600; color: var(--prism-text-muted);">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 16px 8px; font-weight: 600;">Primary</td>
                <td style="padding: 16px 8px; color: var(--prism-text-muted);">The primary call to action. Use only one per view.</td>
                <td style="padding: 16px 8px;"><button class="uems-btn btn-primary btn-m">Primary Action</button></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 16px 8px; font-weight: 600;">Secondary</td>
                <td style="padding: 16px 8px; color: var(--prism-text-muted);">Alternative actions. Often placed next to a primary button.</td>
                <td style="padding: 16px 8px;"><button class="uems-btn btn-secondary btn-m">Cancel</button></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 16px 8px; font-weight: 600;">Outline</td>
                <td style="padding: 16px 8px; color: var(--prism-text-muted);">Secondary actions that need slightly more emphasis than default.</td>
                <td style="padding: 16px 8px;"><button class="uems-btn btn-outline btn-m">View History</button></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 16px 8px; font-weight: 600;">Destructive</td>
                <td style="padding: 16px 8px; color: var(--prism-text-muted);">Dangerous, irreversible actions like Delete or Remove.</td>
                <td style="padding: 16px 8px;"><button class="uems-btn btn-destructive btn-m">Remove Item</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="doc-divider" />

        <!-- Anatomy Section -->
        <h3 id="anatomy" class="doc-h3">Anatomy</h3>
        <style>
          .anatomy-diagram { background: var(--prism-surface); border: 1px solid var(--prism-border); border-radius: 16px; padding: 48px 40px; margin-bottom: 28px; position: relative; overflow: hidden; }
          [data-theme="light"] .anatomy-diagram { background: #fff; border: 1px solid rgba(37, 99, 235, 0.07); box-shadow: 0 2px 12px rgba(37, 99, 235, 0.05); }
          .anatomy-diagram::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #2563eb, #60a5fa, #06b6d4); }
          .anat-marker-inline { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; background: linear-gradient(135deg, #2563eb, #3b82f6); color: #fff; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(37, 99, 235, 0.35); }
          .anat-legend { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .anat-legend-item { display: flex; align-items: flex-start; gap: 14px; padding: 20px; background: var(--prism-surface); border: 1px solid var(--prism-border); border-radius: 14px; transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
          [data-theme="light"] .anat-legend-item { background: #fff; border: 1px solid rgba(37, 99, 235, 0.07); box-shadow: 0 1px 4px rgba(37, 99, 235, 0.04); }
          .anat-legend-item strong { display: block; font-size: 14.5px; font-weight: 600; color: var(--prism-text); margin-bottom: 6px; }
          .anat-legend-item span { font-size: 13px; line-height: 1.55; color: var(--prism-text-muted); }
          .anat-button-container { display: flex; justify-content: center; margin: 40px 0; }
          .anat-button { display: inline-flex; align-items: center; padding: 16px 24px; border-radius: 12px; border: 2px dashed rgba(37,99,235,0.4); font-size: 18px; font-weight: 500; color: var(--prism-text); position: relative; gap: 12px; }
        </style>
        
        <div class="anatomy-diagram">
          <div class="anat-button-container">
            <div class="anat-button">
              <div style="position: absolute; top: -30px; left: 24px; display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <span class="anat-marker-inline">1</span><div style="width: 2px; height: 16px; background: #2563eb;"></div>
              </div>
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
              <span>Label Text</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
              <div style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column-reverse; align-items: center; gap: 4px;">
                <span class="anat-marker-inline">2</span><div style="width: 2px; height: 16px; background: #2563eb;"></div>
              </div>
              <div style="position: absolute; top: -30px; right: 24px; display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <span class="anat-marker-inline">3</span><div style="width: 2px; height: 16px; background: #2563eb;"></div>
              </div>
            </div>
            <div style="position: absolute; left: 40px; top: 50%; display: flex; align-items: center; gap: 8px;">
               <span class="anat-marker-inline">4</span><div style="width: 40px; height: 2px; background: #2563eb;"></div>
            </div>
          </div>
        </div>
        
        <div class="anat-legend">
          <div class="anat-legend-item"><span class="anat-marker-inline">1</span><div><strong>Prefix Icon</strong><span>Optional leading icon. Defaults to true for actions that need visual meaning.</span></div></div>
          <div class="anat-legend-item"><span class="anat-marker-inline">2</span><div><strong>Label Text</strong><span>The display text. Must be concise. (e.g. "Create", "Submit")</span></div></div>
          <div class="anat-legend-item"><span class="anat-marker-inline">3</span><div><strong>Suffix Icon</strong><span>Optional trailing icon. Typically used for dropdowns or external links.</span></div></div>
          <div class="anat-legend-item"><span class="anat-marker-inline">4</span><div><strong>Container</strong><span>Holds background, borders, and interaction transitions.</span></div></div>
        </div>

        <hr class="doc-divider" />

        <div class="doc-section">
          <h3 id="best-practices" class="doc-h3">Best practices<span class="h3-badge" style="background: rgba(37,99,235,0.1); color: var(--prism-violet);">Recommended</span></h3>
          <div class="do-dont-grid">
            <div class="do-card"><span class="card-label">Do</span>
              <ul class="doc-list" style="border: none; background: transparent; padding: 0;">
                <li style="border: none; background: transparent; padding-left: 20px;">Use Primary for the main call-to-action on a page.</li>
                <li style="border: none; background: transparent; padding-left: 20px;">Use Destructive for irreversible actions.</li>
                <li style="border: none; background: transparent; padding-left: 20px;">Keep labels concise (1-3 words).</li>
              </ul>
            </div>
            <div class="dont-card"><span class="card-label">Don't</span>
              <ul class="doc-list" style="border: none; background: transparent; padding: 0;">
                <li style="border: none; background: transparent; padding-left: 20px;">Use more than one Primary button per section.</li>
                <li style="border: none; background: transparent; padding-left: 20px;">Rely solely on color communicating state or meaning.</li>
              </ul>
            </div>
          </div>
        </div>
`;

function buildButton() {
    const targetFile = path.join(__dirname, 'Button.html');
    let html = fs.readFileSync(targetFile, 'utf8');

    // Make sure we correctly fetch the placeholder format inside `<div class="tab-content" id="tab-usage"...>`
    const regex = /<div class="tab-content" id="tab-usage"[\s\S]*?<\/div>\s*<\/div>/;
    
    html = html.replace(regex, '<div class="tab-content" id="tab-usage">\n' + buttonContent + '\n      </div>');
    fs.writeFileSync(targetFile, html, 'utf8');
    console.log("Updated Button HTML successfully.");
}

buildButton();
