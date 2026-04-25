const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const strReplaceAll = (str, search, replacement) => str.split(search).join(replacement);

// 1. Update CSS structure
const cssOld = `  .marquee-content {
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    padding: 20px 0;
    width: max-content;
    animation: scrollMarquee 40s linear infinite;
  }
  
  .marquee-content:hover {
    animation-play-state: paused;
  }

  @keyframes scrollMarquee {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-50% - 15px)); }
  }`;

const cssNew = `  .marquee-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 0;
  }
  
  .marquee-row {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    width: max-content;
  }
  
  .marquee-row.left { animation: scrollLeft 60s linear infinite; }
  .marquee-row.right { animation: scrollRight 55s linear infinite; }
  .marquee-row.left-fast { animation: scrollLeft 45s linear infinite; }
  
  .marquee-wrapper:hover .marquee-row {
    animation-play-state: paused;
  }

  @keyframes scrollLeft {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-50% - 10px)); }
  }

  @keyframes scrollRight {
    from { transform: translateX(calc(-50% - 10px)); }
    to { transform: translateX(0); }
  }`;

const cardCssOld = `  .sc-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 18px;
    padding: 24px;
    backdrop-filter: blur(24px) saturate(1.3);
    -webkit-backdrop-filter: blur(24px) saturate(1.3);
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    width: 340px;
    min-width: 340px;
    max-width: 340px;
    box-sizing: border-box;
    flex: 0 0 340px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }`;

const cardCssNew = `  .sc-card {
    background: rgba(255, 255, 255, 0.05); /* slightly more subtle */
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 18px;
    padding: 24px;
    backdrop-filter: blur(24px) saturate(1.3);
    -webkit-backdrop-filter: blur(24px) saturate(1.3);
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    width: auto;
    min-width: 250px;
    max-width: max-content;
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .sc-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }`;

// Update CSS rules via exact string replacement
content = content.replace(cssOld, cssNew);
content = content.replace(cardCssOld, cardCssNew);

// Define rich bento components to inject!
const patchComp = `
        <div class="sc-card">
          <div class="sc-progress-title">Patch Compliance</div>
          <div class="sc-progress-bar"><div class="sc-progress-fill" style="width: 78%; transition-delay: 0.1s;"></div></div>
          <div class="sc-progress-label"><span>78%</span><span>1,240 devices</span></div>
          <div style="margin-top:14px">
            <div class="sc-progress-bar"><div class="sc-progress-fill" style="width: 92%; background:linear-gradient(90deg,var(--prism-emerald),#34d399); transition-delay: 0.2s;"></div></div>
            <div class="sc-progress-label"><span style="color:var(--prism-emerald)">92%</span><span>Critical Server Patches</span></div>
          </div>
        </div>`;

const activityComp = `
        <div class="sc-card">
          <div class="sc-progress-title" style="margin-bottom:12px">Live Activity</div>
          <div class="sc-notif-item">
            <span class="sc-notif-dot" style="background:var(--prism-emerald);box-shadow:0 0 6px var(--prism-emerald)"></span>
            <span class="sc-notif-text"><strong>Policy Enforced</strong> on 340 endpoints</span>
          </div>
          <div class="sc-notif-item">
            <span class="sc-notif-dot" style="background:var(--prism-orange);box-shadow:0 0 6px var(--prism-orange)"></span>
            <span class="sc-notif-text"><strong>Warning</strong> 12 devices degraded</span>
          </div>
          <div class="sc-notif-item">
            <span class="sc-notif-dot" style="background:var(--prism-violet);box-shadow:0 0 6px var(--prism-violet)"></span>
            <span class="sc-notif-text"><strong>Scan Complete</strong> at 09:30</span>
          </div>
        </div>`;

const calComp = `
        <div class="sc-card sc-calendar">
          <div class="sc-cal-header">
            <button class="sc-cal-nav">‹</button>
            <span class="sc-cal-month">January 2025</span>
            <button class="sc-cal-nav">›</button>
          </div>
          <div class="sc-cal-days">
            <span class="sc-cal-weekday">S</span><span class="sc-cal-weekday">M</span><span class="sc-cal-weekday">T</span><span class="sc-cal-weekday">W</span><span class="sc-cal-weekday">T</span><span class="sc-cal-weekday">F</span><span class="sc-cal-weekday">S</span>
            <span class="sc-cal-day empty"></span><span class="sc-cal-day empty"></span><span class="sc-cal-day empty"></span><span class="sc-cal-day">1</span><span class="sc-cal-day active">2</span><span class="sc-cal-day">3</span><span class="sc-cal-day">4</span>
            <span class="sc-cal-day">5</span><span class="sc-cal-day">6</span><span class="sc-cal-day">7</span><span class="sc-cal-day">8</span><span class="sc-cal-day">9</span><span class="sc-cal-day">10</span><span class="sc-cal-day">11</span>
          </div>
        </div>`;

const radioComp = `
        <div class="sc-card sc-radio-form" style="min-width: 320px;">
          <h4 class="sc-card-title">Network Policy</h4>
          <label class="sc-radio-label">
            <div class="sc-radio-custom active"><div class="sc-radio-dot"></div></div>
            Strict Firewall (Recommended)
          </label>
          <label class="sc-radio-label">
            <div class="sc-radio-custom"></div>
            Standard Cloud Access
          </label>
          <label class="sc-radio-label">
            <div class="sc-radio-custom"></div>
            Open Developer Network
          </label>
        </div>`;

const storageComp = `
        <div class="sc-card" style="min-width: 340px;">
          <div class="sc-progress-title">Storage Architecture</div>
          <div style="display:flex; align-items:center; gap: 20px; margin-top: 10px;">
             <div style="position:relative; width:60px; height:60px; border-radius:50%; background:conic-gradient(var(--prism-fuchsia) 0% 64%, rgba(255,255,255,0.1) 64% 100%); display:flex; justify-content:center; align-items:center;">
               <div style="width:46px; height:46px; border-radius:50%; background:var(--prism-surface); display:flex; justify-content:center; align-items:center; font-size:12px; font-weight:700;">64%</div>
             </div>
             <div>
               <div class="sc-progress-title" style="margin-bottom:4px; font-size:14px;">Allocated Data</div>
               <div class="sc-progress-label"><span>2.4 TB / 3.8 TB used</span></div>
             </div>
          </div>
        </div>
`;

const settingsComp = `
        <div class="sc-card sc-settings" style="min-width: 360px;">
          <h4 class="sc-card-title">System Settings</h4>
          <div class="sc-card-subtitle">Manage environment parameters</div>
          <div class="sc-toggle-row">
            <span>Auto-deploy Updates</span>
            <div class="sc-toggle active"><div class="sc-toggle-knob"></div></div>
          </div>
          <div class="sc-toggle-row">
            <span>Enforce 2FA Protocol</span>
            <div class="sc-toggle active"><div class="sc-toggle-knob"></div></div>
          </div>
          <div class="sc-toggle-row">
            <span>Telemetry Access</span>
            <div class="sc-toggle"><div class="sc-toggle-knob"></div></div>
          </div>
        </div>`;
        
const profileComp = `
        <div class="sc-card sc-profile" style="min-width: 250px;">
          <div class="sc-profile-avatar" style="width: 48px; height: 48px; border-radius: 50%; background: var(--prism-violet); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="sc-profile-info">
            <div class="sc-profile-name" style="font-size: 16px; font-weight: 700; color: #fff;">Admin Node</div>
            <div class="sc-profile-status" style="font-size: 12px; color: var(--prism-text-muted);">Elevated Privilege Active</div>
          </div>
          <div class="sc-profile-badge" style="margin-top: 12px; display: inline-block; padding: 4px 12px; border-radius: 99px; font-size: 11px; background: rgba(124, 58, 237, 0.2); color: var(--prism-violet-light);">Sysadmin Tier 1</div>
        </div>`;

const healthComp = `
        <div class="sc-card" style="min-width: 240px; align-items: center; text-align: center;">
          <div style="width:48px;height:48px;border-radius:12px;background:rgba(16, 185, 129, 0.15);color:var(--prism-emerald);display:flex;justify-content:center;align-items:center;margin-bottom:16px;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h4 class="sc-card-title" style="margin-bottom:4px;">Cluster Active</h4>
          <div class="sc-card-subtitle" style="margin-bottom:0;">All systems operational</div>
          <div style="margin-top:12px; font-size:11px; font-weight:700; color:var(--prism-emerald); border: 1px solid rgba(16,185,129,0.3); border-radius:99px; padding:4px 12px; background:rgba(16,185,129,0.05); display:inline-block;">99.9% Uptime</div>
        </div>
`;

const deviceCountComp = `
        <div class="sc-card" style="min-width: 200px;">
          <div class="sc-progress-title">Enrolled Devices</div>
          <div style="font-size: 32px; font-weight: 800; background: linear-gradient(135deg, var(--prism-violet), var(--prism-cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 4px 0 12px;">14,208</div>
          <div class="sc-progress-label"><span><span style="color:var(--prism-emerald);">▲ 3%</span> vs last month</span></div>
        </div>
`;

// Arrays to perfectly map out bento visual variety across multiple rows
const row1 = patchComp + activityComp + deviceCountComp + storageComp + radioComp;
const row2 = calComp + settingsComp + profileComp + healthComp + patchComp;
const row3 = storageComp + radioComp + activityComp + deviceCountComp + healthComp;

const showcaseHtmlOldRegex = /<div class="hero-showcase">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

let newShowcaseHtml = `<div class="hero-showcase">
      <div class="marquee-wrapper">
        <div class="marquee-row left">
          \${row1} \${row1}
        </div>
        <div class="marquee-row right">
          \${row2} \${row2}
        </div>
        <div class="marquee-row left-fast">
           \${row3} \${row3}
        </div>
      </div>
    </div>
  </section>`;

// We inject it by targeting hero-showcase block.
content = content.replace(showcaseHtmlOldRegex, newShowcaseHtml);
fs.writeFileSync('index.html', content);
console.log("Multi-row bento components applied!");
