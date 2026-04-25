const fs = require('fs');

// COMPONENT DEFINITIONS

// ROW 1
const comp1 = `
<div class="sc-card sc-hover-anim" style="min-width: 250px;">
  <div class="sc-progress-title">Patch Compliance</div>
  <div class="sc-progress-bar"><div class="sc-progress-fill" style="width: 78%; transition-delay: 0.1s;"></div></div>
  <div class="sc-progress-label"><span>78%</span><span>1,240 devices</span></div>
  <div style="margin-top:14px">
    <div class="sc-progress-bar"><div class="sc-progress-fill" style="width: 92%; background:linear-gradient(90deg,var(--prism-emerald),#34d399); transition-delay: 0.2s;"></div></div>
    <div class="sc-progress-label"><span style="color:var(--prism-emerald)">92%</span><span>Critical Server Patches</span></div>
  </div>
</div>`;

const comp2 = `
<div class="sc-card sc-calendar sc-hover-anim" style="min-width: 220px;">
  <div class="sc-cal-header">
    <button class="sc-cal-nav">‹</button>
    <span class="sc-cal-month">January 2025</span>
    <button class="sc-cal-nav">›</button>
  </div>
  <div class="sc-cal-days">
    <span class="sc-cal-weekday">S</span><span class="sc-cal-weekday">M</span><span class="sc-cal-weekday">T</span><span class="sc-cal-weekday">W</span><span class="sc-cal-weekday">T</span><span class="sc-cal-weekday">F</span><span class="sc-cal-weekday">S</span>
    <span class="sc-cal-day empty"></span><span class="sc-cal-day empty"></span><span class="sc-cal-day empty"></span><span class="sc-cal-day">1</span><span class="sc-cal-day active">2</span><span class="sc-cal-day">3</span><span class="sc-cal-day">4</span>
    <span class="sc-cal-day">5</span><span class="sc-cal-day hover-target">6</span><span class="sc-cal-day hover-target">7</span><span class="sc-cal-day">8</span><span class="sc-cal-day">9</span><span class="sc-cal-day">10</span><span class="sc-cal-day">11</span>
  </div>
</div>`;

const comp3 = `
<div class="sc-card sc-profile sc-hover-anim" style="min-width: 200px;">
  <div class="sc-profile-avatar" style="width: 48px; height: 48px; border-radius: 50%; background: var(--prism-violet); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
    <svg width="24" height="24" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  </div>
  <div class="sc-profile-info">
    <div class="sc-profile-name" style="font-size: 16px; font-weight: 700; color: var(--prism-text);">Admin Node</div>
    <div class="sc-profile-status" style="font-size: 12px; color: var(--prism-text-muted);">Elevated Privilege</div>
  </div>
  <div class="sc-profile-badge" style="margin-top: 12px; display: inline-block; padding: 4px 12px; border-radius: 99px; font-size: 11px; background: rgba(124, 58, 237, 0.2); color: var(--prism-violet-light); transition: all 0.3s ease;">Sysadmin Tier 1</div>
</div>`;

const comp4 = `
<div class="sc-card sc-hover-anim" style="min-width: 280px;">
  <div class="sc-progress-title" style="margin-bottom:12px">Live Activity</div>
  <div class="sc-notif-item">
    <span class="sc-notif-dot" style="background:var(--prism-emerald);box-shadow:0 0 6px var(--prism-emerald)"></span>
    <span class="sc-notif-text"><strong>Policy Enforced</strong> on 340 endpoints</span>
  </div>
  <div class="sc-notif-item">
    <span class="sc-notif-dot" style="background:var(--prism-orange);box-shadow:0 0 6px var(--prism-orange)"></span>
    <span class="sc-notif-text"><strong>Warning</strong> 12 devices degraded</span>
  </div>
  <div class="sc-notif-item notif-target">
    <span class="sc-notif-dot" style="background:var(--prism-violet);box-shadow:0 0 6px var(--prism-violet)"></span>
    <span class="sc-notif-text"><strong>Scan Complete</strong> at 09:30</span>
  </div>
</div>`;

const comp5 = `
<div class="sc-card sc-hover-anim" style="min-width: 220px; align-items: center; text-align: center;">
  <div class="icon-pulse" style="width:48px;height:48px;border-radius:12px;background:rgba(16, 185, 129, 0.15);color:var(--prism-emerald);display:flex;justify-content:center;align-items:center;margin-bottom:16px; transition: transform 0.3s ease;">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  </div>
  <h4 class="sc-card-title" style="margin-bottom:4px;">Cluster Active</h4>
  <div class="sc-card-subtitle" style="margin-bottom:0;">All systems operational</div>
  <div style="margin-top:12px; font-size:11px; font-weight:700; color:var(--prism-emerald); border: 1px solid rgba(16,185,129,0.3); border-radius:99px; padding:4px 12px; background:rgba(16,185,129,0.05); display:inline-block;">99.9% Uptime</div>
</div>`;


// ROW 2
const comp6 = `
<div class="sc-card sc-radio-form sc-hover-anim" style="min-width: 300px;">
  <h4 class="sc-card-title">Network Policy</h4>
  <label class="sc-radio-label">
    <div class="sc-radio-custom active"><div class="sc-radio-dot"></div></div>
    Strict Firewall (Recommended)
  </label>
  <label class="sc-radio-label">
    <div class="sc-radio-custom radio-target"></div>
    Standard Cloud Access
  </label>
  <label class="sc-radio-label">
    <div class="sc-radio-custom"></div>
    Open Developer Network
  </label>
</div>`;

const comp7 = `
<div class="sc-card sc-hover-anim" style="min-width: 320px;">
  <div class="sc-progress-title">Storage Architecture</div>
  <div style="display:flex; align-items:center; gap: 20px; margin-top: 10px;">
     <div class="storage-chart" style="position:relative; width:60px; height:60px; border-radius:50%; background:conic-gradient(var(--prism-fuchsia) 0% 64%, rgba(255,255,255,0.1) 64% 100%); display:flex; justify-content:center; align-items:center;">
       <div style="width:46px; height:46px; border-radius:50%; background:var(--card-bg); display:flex; justify-content:center; align-items:center; font-size:12px; font-weight:700;">64%</div>
     </div>
     <div>
       <div class="sc-progress-title" style="margin-bottom:4px; font-size:14px;">Allocated Data</div>
       <div class="sc-progress-label"><span>2.4 TB / 3.8 TB used</span></div>
     </div>
  </div>
</div>`;

const comp8 = `
<div class="sc-card sc-settings sc-hover-anim" style="min-width: 320px;">
  <h4 class="sc-card-title">System Settings</h4>
  <div class="sc-card-subtitle">Manage environment parameters</div>
  <div class="sc-toggle-row">
    <span>Auto-deploy Updates</span>
    <div class="sc-toggle active"><div class="sc-toggle-knob"></div></div>
  </div>
  <div class="sc-toggle-row">
    <span>Enforce 2FA Protocol</span>
    <div class="sc-toggle toggle-target"><div class="sc-toggle-knob"></div></div>
  </div>
</div>`;
        
const comp9 = `
<div class="sc-card sc-hover-anim" style="min-width: 180px;">
  <div class="sc-progress-title">Enrolled Devices</div>
  <div style="font-size: 32px; font-weight: 800; background: linear-gradient(135deg, var(--prism-violet), var(--prism-cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 4px 0 12px; transition: transform 0.3s ease;" class="num-bump">14,208</div>
  <div class="sc-progress-label"><span><span style="color:var(--prism-emerald);">▲ 3%</span> vs last month</span></div>
</div>`;

const comp10 = `
<div class="sc-card sc-hover-anim" style="min-width: 250px;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
    <div style="display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" fill="none" stroke="var(--prism-cyan)" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      <span class="sc-progress-title" style="margin:0;">Firmware v2.4.1</span>
    </div>
    <span class="sc-progress-label">Downloading</span>
  </div>
  <div class="sc-progress-bar" style="height: 4px;"><div class="sc-progress-fill file-fill" style="width: 42%; background: var(--prism-cyan);"></div></div>
</div>`;


// ROW 3
const comp11 = `
<div class="sc-card sc-hover-anim" style="min-width: 220px; align-items:center; justify-content:center;">
    <div style="text-align:center;">
      <h4 class="sc-card-title">Enterprise Tier</h4>
      <div style="font-size:24px; font-weight:800; color:var(--prism-text); margin:8px 0;">$499<span style="font-size:14px; font-weight:500; color:var(--prism-text-muted);">/mo</span></div>
      <button class="upgrade-btn" style="background:var(--prism-surface-hover); color:var(--prism-text); border:1px solid var(--prism-border); border-radius:99px; padding:6px 16px; font-size:13px; font-weight:600; cursor:pointer; transition:all 0.3s ease; margin-top:8px;">Upgrade Plan</button>
    </div>
</div>`;

const comp12 = `
<div class="sc-card sc-hover-anim" style="min-width: 200px;">
  <div class="sc-progress-title">Network Latency</div>
  <div style="display:flex; align-items:flex-end; gap:6px; height: 50px; margin-top:10px;">
    <div class="bar-anim" style="width:20px; height:30%; background:var(--prism-surface-hover); border-radius:4px; transition: all 0.3s ease;"></div>
    <div class="bar-anim" style="width:20px; height:50%; background:var(--prism-surface-hover); border-radius:4px; transition: all 0.3s ease;"></div>
    <div class="bar-anim" style="width:20px; height:80%; background:var(--prism-violet-light); border-radius:4px; transition: all 0.3s ease;"></div>
    <div class="bar-anim" style="width:20px; height:40%; background:var(--prism-surface-hover); border-radius:4px; transition: all 0.3s ease;"></div>
    <div class="bar-anim" style="width:20px; height:60%; background:var(--prism-surface-hover); border-radius:4px; transition: all 0.3s ease;"></div>
  </div>
</div>`;

const comp13 = `
<div class="sc-card sc-hover-anim" style="min-width: 260px;">
  <div class="sc-progress-title">Threat Intelligence</div>
  <div style="display:flex; align-items:center; gap:12px; margin-top:8px;">
     <div class="shield-icon" style="width:40px; height:40px; background:rgba(239,68,68,0.15); border-radius:12px; display:flex; align-items:center; justify-content:center; color:var(--prism-red); transition:all 0.3s ease;">
       <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
     </div>
     <div>
       <div style="font-size:14px; font-weight:700; color:var(--prism-text);">2 High-Risk Alerts</div>
       <div style="font-size:12px; color:var(--prism-red);">Requires immediate action</div>
     </div>
  </div>
</div>`;

const comp14 = `
<div class="sc-card sc-hover-anim" style="min-width: 220px;">
  <div class="sc-progress-title" style="margin-bottom:12px;">Active Modules</div>
  <div style="display:flex; flex-wrap:wrap; gap:8px;">
    <span class="badge-anim" style="padding:4px 10px; background:var(--prism-surface-hover); border:1px solid var(--prism-border); border-radius:6px; font-size:11px; font-weight:600; transition:all 0.3s;">Firewall</span>
    <span class="badge-anim" style="padding:4px 10px; background:rgba(16,185,129,0.1); color:var(--prism-emerald); border:1px solid rgba(16,185,129,0.3); border-radius:6px; font-size:11px; font-weight:600; transition:all 0.3s;">VPN Active</span>
    <span class="badge-anim" style="padding:4px 10px; background:var(--prism-surface-hover); border:1px solid var(--prism-border); border-radius:6px; font-size:11px; font-weight:600; transition:all 0.3s;">MDM Core</span>
  </div>
</div>`;

const comp15 = `
<div class="sc-card sc-hover-anim" style="min-width: 180px;">
  <div style="text-align: center;">
     <div class="ring-anim" style="width:50px; height:50px; border-radius:50%; border:3px solid var(--prism-surface-hover); border-top-color:var(--prism-fuchsia); margin:0 auto 12px; animation: spin 4s linear infinite;"></div>
     <div class="sc-progress-title" style="margin:0;">Syncing Nodes...</div>
  </div>
</div>`;


// CSS Inject for functional hovers
const hoverCSS = `
  /* Component Functional Hovers */
  .sc-card { cursor: pointer; }
  .sc-hover-anim:hover {
    border-color: rgba(255,255,255,0.25);
    background: var(--prism-surface-hover);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }
  
  [data-theme="light"] .sc-hover-anim:hover {
    box-shadow: 0 12px 30px rgba(37,99,235,0.08);
  }

  /* Progress Bars */
  .sc-hover-anim:hover .sc-progress-fill { width: 100% !important; background: var(--prism-violet-light) !important; }
  .sc-hover-anim:hover .file-fill { width: 100% !important; background: var(--prism-emerald) !important; }
  
  /* Calendar */
  .sc-hover-anim:hover .hover-target { background: var(--prism-violet); color: #fff; transform: scale(1.1); font-weight: 700; border-radius: 6px; }

  /* Radio */
  .sc-hover-anim:hover .radio-target { border-color: var(--prism-violet); }
  .sc-hover-anim:hover .radio-target::after { transform: translate(-50%, -50%) scale(1); opacity: 0.5; background: var(--prism-violet); }

  /* Toggle */
  .sc-hover-anim:hover .toggle-target { background: var(--prism-emerald) !important; }
  .sc-hover-anim:hover .toggle-target .sc-toggle-knob { transform: translateX(20px); }
  
  /* Profile Badge */
  .sc-hover-anim:hover .sc-profile-badge { background: var(--prism-violet) !important; color: #fff !important; }
  
  /* Icon Pulse */
  .sc-hover-anim:hover .icon-pulse { transform: scale(1.1) rotate(5deg); background: rgba(16,185,129,0.3) !important; }

  /* Notification list */
  .sc-hover-anim:hover .notif-target .sc-notif-dot { transform: scale(1.5); box-shadow: 0 0 12px var(--prism-violet); }
  
  /* Storage Chart */
  .sc-hover-anim:hover .storage-chart { background: conic-gradient(var(--prism-emerald) 0% 100%, transparent 100%) !important; }
  
  /* Numbers */
  .sc-hover-anim:hover .num-bump { transform: scale(1.05) translateY(-4px); }

  /* Button Upgrade */
  .sc-hover-anim:hover .upgrade-btn { background: var(--prism-violet) !important; color:#fff !important; border-color:var(--prism-violet) !important; transform: scale(1.05); }

  /* Bar Charts */
  .sc-hover-anim:hover .bar-anim { height: 90% !important; background: var(--prism-violet-light) !important; }
  
  /* Shield Threat */
  .sc-hover-anim:hover .shield-icon { background: var(--prism-red) !important; color: #fff !important; transform: scale(1.1); }
  
  /* Badges */
  .sc-hover-anim:hover .badge-anim { background: var(--prism-violet) !important; color: #fff !important; border-color:var(--prism-violet) !important; }
  
  @keyframes spin { 100% { transform: rotate(360deg); } }
  .sc-hover-anim:hover .ring-anim { border-top-color: var(--prism-cyan) !important; animation-duration: 1s !important; }
`;


const row1 = [comp1, comp2, comp3, comp4, comp5].join('\n');
const row2 = [comp6, comp7, comp8, comp9, comp10].join('\n');
const row3 = [comp11, comp12, comp13, comp14, comp15].join('\n');

let html = fs.readFileSync('index.html', 'utf8');

const newHTML = `        <div class="marquee-row left">
          ${row1} ${row1}
        </div>
        <div class="marquee-row right">
          ${row2} ${row2}
        </div>
        <div class="marquee-row left-fast">
          ${row3} ${row3}
        </div>`;

// Replace cleanly inside index.html
html = html.replace(/<div class="marquee-row left">[\s\S]*?<div class="marquee-row left-fast">[\s\S]*?<\/div>/, newHTML);


// Identify where to embed CSS
if (!html.includes('/* Component Functional Hovers */')) {
  html = html.replace('</style>\n<style>', hoverCSS + '\n</style>\n<style>');
}

fs.writeFileSync('index.html', html);
console.log('Components array successfully built and customized dynamically across multiple rows!');
