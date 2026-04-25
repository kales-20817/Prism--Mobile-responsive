const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

// 1. Replace Hero Showcase CSS
const cssSearch = `  /* ═══ HERO SHOWCASE ═══ */
  .hero-showcase {
    width: 100%; max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 40px;
    animation: fadeUp 1s ease 0.5s both;
    position: relative;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr 1fr 0.9fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "cal  policy  policy  sched"
      "cal  config  config  sched"
      "date config  config  prof";
    gap: 14px;
  }

  /* Bento area assignments */
  .bento-tall-left  { grid-area: cal; }
  .bento-wide       { grid-area: policy; }
  .bento-tall-right { grid-area: sched; }
  .bento-settings   { grid-area: config; }
  .bento-date       { grid-area: date; }
  .bento-profile    { grid-area: prof; }

  /* Parallax float animation */
  .sc-card[data-parallax] {
    will-change: transform;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, box-shadow 0.4s ease;
  }

  /* ── Floating Side Components ── */
  .sc-float {
    position: absolute;
    z-index: 2;
    animation: floatBounce 4s ease-in-out infinite;
  }

  .sc-float-left {
    left: -170px; top: 30px;
  }

  .sc-float-right {
    right: -170px; bottom: 20px;
  }

  @keyframes floatBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .sc-float-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 16px; padding: 18px 20px;
    backdrop-filter: blur(24px) saturate(1.3);
    -webkit-backdrop-filter: blur(24px) saturate(1.3);
    width: 200px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease;
  }

  .sc-float-card:hover {
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px) !important;
  }

  [data-theme="light"] .sc-float-card {
    background: rgba(255, 255, 255, 0.90);
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  }

  [data-theme="light"] .sc-float-card:hover {
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }`;

const cssReplace = `  /* ═══ HERO SHOWCASE ═══ */
  .hero-showcase {
    width: 100vw; max-width: 100vw;
    margin: 0 auto;
    position: relative;
    left: 50%; right: 50%;
    margin-left: -50vw; margin-right: -50vw;
    padding: 60px 0 40px;
    overflow: hidden;
    animation: fadeUp 1s ease 0.5s both;
  }

  .marquee-content {
    display: flex;
    gap: 20px;
    width: max-content;
    animation: scrollMarquee 40s linear infinite;
  }
  
  .marquee-content:hover {
    animation-play-state: paused;
  }

  @keyframes scrollMarquee {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-50% - 10px)); }
  }`;

content = content.replace(cssSearch, cssReplace);

// 2. Replace sc-card Width
const cardSearch = `  .sc-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 18px;
    padding: 24px;
    backdrop-filter: blur(24px) saturate(1.3);
    -webkit-backdrop-filter: blur(24px) saturate(1.3);
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
  }`;

const cardReplace = `  .sc-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 18px;
    padding: 24px;
    backdrop-filter: blur(24px) saturate(1.3);
    -webkit-backdrop-filter: blur(24px) saturate(1.3);
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    width: 320px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }`;

content = content.replace(cardSearch, cardReplace);

// 3. Replace HTML Block
const htmlRegex = /<!-- ═══ HERO COMPONENT SHOWCASE ═══ -->[\s\S]*?<!-- Bento Grid -->[\s\S]*?<div class="bento-grid">([\s\S]*?)<\/div>\s*<\/div>/;

const cardsHtml = `      <div class="marquee-content">
        <!-- GROUP 1 -->
        <div class="sc-card">
          <div class="sc-progress-title">Patch Compliance</div>
          <div class="sc-progress-bar"><div class="sc-progress-fill" data-w="78"></div></div>
          <div class="sc-progress-label"><span>78%</span><span>1,240 devices</span></div>
          <div style="margin-top:10px">
            <div class="sc-progress-bar"><div class="sc-progress-fill" style="width: 92%; background:linear-gradient(90deg,#10b981,#34d399)"></div></div>
            <div class="sc-progress-label"><span style="color:var(--prism-emerald)">92%</span><span>Critical</span></div>
          </div>
        </div>

        <div class="sc-card">
          <div class="sc-progress-title" style="margin-bottom:6px">Activity</div>
          <div class="sc-notif-item">
            <span class="sc-notif-dot" style="background:var(--prism-emerald);box-shadow:0 0 6px var(--prism-emerald)"></span>
            <span class="sc-notif-text"><strong>Deploy</strong> pushed to 340 endpoints</span>
          </div>
          <div class="sc-notif-item">
            <span class="sc-notif-dot" style="background:var(--prism-orange);box-shadow:0 0 6px var(--prism-orange)"></span>
            <span class="sc-notif-text"><strong>Alert</strong> 12 devices non-compliant</span>
          </div>
          <div class="sc-notif-item">
            <span class="sc-notif-dot" style="background:var(--prism-violet);box-shadow:0 0 6px var(--prism-violet)"></span>
            <span class="sc-notif-text"><strong>Scan</strong> completed at 09:30</span>
          </div>
        </div>

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
            <span class="sc-cal-day">12</span><span class="sc-cal-day">13</span><span class="sc-cal-day">14</span><span class="sc-cal-day">15</span><span class="sc-cal-day">16</span><span class="sc-cal-day">17</span><span class="sc-cal-day">18</span>
            <span class="sc-cal-day">19</span><span class="sc-cal-day">20</span><span class="sc-cal-day">21</span><span class="sc-cal-day">22</span><span class="sc-cal-day">23</span><span class="sc-cal-day">24</span><span class="sc-cal-day">25</span>
            <span class="sc-cal-day">26</span><span class="sc-cal-day">27</span><span class="sc-cal-day">28</span><span class="sc-cal-day">29</span><span class="sc-cal-day">30</span><span class="sc-cal-day">31</span><span class="sc-cal-day empty"></span>
          </div>
        </div>

        <div class="sc-card sc-radio-form">
          <h4 class="sc-card-title">Device Policy</h4>
          <label class="sc-radio-option selected">
            <span class="sc-radio-circle checked"></span>
            <div>
              <div class="sc-radio-label">Managed device</div>
              <div class="sc-radio-desc">Full control with remote wipe, app management.</div>
            </div>
          </label>
          <label class="sc-radio-option">
            <span class="sc-radio-circle"></span>
            <div>
              <div class="sc-radio-label">BYOD profile</div>
              <div class="sc-radio-desc">Work container isolation with privacy boundaries.</div>
            </div>
          </label>
        </div>

        <div class="sc-card sc-time-picker">
          <h4 class="sc-card-title">Schedule Scan</h4>
          <div class="sc-toggle-row">
            <span class="sc-toggle-label">Auto-run daily</span>
            <span class="sc-toggle active">
              <span class="sc-toggle-knob"></span>
            </span>
          </div>
          <div class="sc-time-slot active">09:30</div>
          <div class="sc-time-slot">10:30</div>
          <div class="sc-time-slot">11:30</div>
          <div class="sc-time-slot">12:30</div>
        </div>

        <div class="sc-card sc-settings">
          <h4 class="sc-card-title">Theme Config</h4>
          <div class="sc-card-subtitle">Customize appearance</div>
          <div class="sc-settings-row">
            <span class="sc-settings-label">Primary</span>
            <div class="sc-color-swatch" style="--swatch:#2563eb">
              <span class="sc-swatch-dot"></span>
              <span class="sc-hex">#2563EB</span>
            </div>
          </div>
          <div class="sc-settings-row">
            <span class="sc-settings-label">Surface</span>
            <div class="sc-color-swatch" style="--swatch:#e2e8f0">
              <span class="sc-swatch-dot"></span>
              <span class="sc-hex">#E2E8F0</span>
            </div>
          </div>
        </div>

        <div class="sc-card sc-date-chip">
          <div class="sc-date-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <span class="sc-date-text">28 April, 2024</span>
          <div class="sc-time-chips">
            <span class="sc-chip active">12:30</span>
            <span class="sc-chip">02:30</span>
            <span class="sc-chip">03:30</span>
          </div>
        </div>

        <div class="sc-card sc-profile">
          <div class="sc-avatar">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
          </div>
          <div class="sc-profile-info">
            <div class="sc-profile-name">Shane Watson</div>
            <div class="sc-profile-role">Mon – Fri, 09am – 06pm</div>
          </div>
          <span class="sc-badge">Admin</span>
        </div>`;

const replaceHtml = `<!-- ═══ HERO COMPONENT SHOWCASE ═══ -->
    <div class="hero-showcase">
${cardsHtml}
        <!-- GROUP 2 (DUPLICATE FOR MARQUEE) -->
${cardsHtml}
      </div>
    </div>`;

content = content.replace(htmlRegex, replaceHtml);

fs.writeFileSync('index.html', content);
console.log('Update completed');
