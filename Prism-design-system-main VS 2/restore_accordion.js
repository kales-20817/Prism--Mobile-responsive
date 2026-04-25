const fs = require('fs');
const path = require('path');

const targetHtml = `        <!-- Title and Introduction -->
        <div style="margin-bottom: 48px;">
          <h2 id="usage" style="display: none;">Usage</h2>
          <p style="color: var(--prism-text); font-size: 20px; font-weight: 400; line-height: 1.5; max-width: 800px; margin-bottom: 48px; margin-top: 16px;">
            An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
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
            <a href="#best-practices" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
              <span class="jump-card-label">Best practices</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#when-to-use" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
              <span class="jump-card-label">When to use</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#related" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
              <span class="jump-card-label">Related</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#formatting" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></div>
              <span class="jump-card-label">Formatting</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#references" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
              <span class="jump-card-label">References</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#content-guidelines" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div>
              <span class="jump-card-label">Content</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
            <a href="#feedback" class="jump-card">
              <div class="jump-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
              <span class="jump-card-label">Feedback</span>
              <svg class="jump-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <!-- Live demo -->
        <div style="margin-bottom: 64px;">
          <h2 id="live-demo" class="doc-section-title" style="margin-bottom: 8px;">Live demo</h2>
          <p class="doc-section-subtitle" style="margin-bottom: 28px;">Interact with the accordion component below to explore expand and collapse behavior.</p>

          <style>
            .demo-container { border: 1px solid var(--prism-border); border-radius: 16px; overflow: hidden; position: relative; }
            .demo-toolbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; background: var(--prism-surface); border-bottom: 1px solid var(--prism-border); }
            .demo-toolbar-left { display: flex; align-items: center; gap: 12px; }
            .demo-theme-pill { display: flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 8px; font-size: 13px; font-weight: 500; background: rgba(37,99,235,0.08); color: var(--prism-violet); border: 1px solid rgba(37,99,235,0.2); cursor: pointer; transition: all 0.2s ease; }
            .demo-theme-pill:hover { background: rgba(37,99,235,0.14); }
            .demo-theme-pill svg { width: 14px; height: 14px; }
            .demo-toolbar-right { display: flex; align-items: center; gap: 4px; }
            .demo-tool-btn { width: 32px; height: 32px; border-radius: 8px; border: none; background: transparent; color: var(--prism-text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease; font-family: inherit; }
            .demo-tool-btn:hover { background: var(--prism-surface-hover); color: var(--prism-text); }
            .demo-tool-btn svg { width: 16px; height: 16px; }
            .demo-canvas { padding: 48px 40px; position: relative; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 24px 24px; background-color: #0a0a0c66; display: flex; align-items: center; justify-content: center; min-height: 280px; transition: background-color 0.5s ease; }
            .demo-canvas .accordion-wrapper { margin: 0; width: 100%; max-width: 600px; position: relative; z-index: 1; }
            .demo-canvas .accordion-item { border-radius: 12px; background: #1a1a1f; border: 1px solid rgba(255,255,255,0.12); }
            [data-theme="light"] .demo-canvas .accordion-item { background: #ffffff; border: 1px solid rgba(37, 99, 235, 0.10); box-shadow: 0 2px 8px rgba(37, 99, 235, 0.06), 0 1px 2px rgba(0,0,0,0.03); }
            [data-theme="light"] .demo-canvas .accordion-item:hover { border-color: rgba(37, 99, 235, 0.22); box-shadow: 0 4px 16px rgba(37, 99, 235, 0.10); }
            [data-theme="light"] .demo-canvas { background-color: #f4f6fb; background-image: radial-gradient(circle, rgba(37, 99, 235, 0.08) 1px, transparent 1px); }
            [data-theme="light"] .demo-container { border: 1px solid rgba(37, 99, 235, 0.08); box-shadow: 0 2px 12px rgba(37, 99, 235, 0.05); }
            [data-theme="light"] .demo-toolbar { background: rgba(255, 255, 255, 0.7); border-bottom: 1px solid rgba(37, 99, 235, 0.06); }
            [data-theme="light"] .demo-storybook { background: rgba(255, 255, 255, 0.6); border-top: 1px solid rgba(37, 99, 235, 0.06); }
            .demo-storybook { display: flex; align-items: center; gap: 16px; padding: 14px 20px; border-top: 1px solid var(--prism-border); background: var(--prism-surface); font-size: 13.5px; color: var(--prism-text-muted); line-height: 1.5; }
            .demo-storybook-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; background: rgba(37,99,235,0.08); color: var(--prism-violet); text-decoration: none; white-space: nowrap; border: 1px solid rgba(37,99,235,0.15); transition: all 0.2s ease; }
            .demo-storybook-badge:hover { background: rgba(37,99,235,0.15); transform: translateY(-1px); }
          </style>

          <div class="demo-container">
            <div class="demo-toolbar">
              <div class="demo-toolbar-left">
                <div class="demo-theme-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
                  White
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </div>
                <span style="font-size: 12px; color: var(--prism-text-muted); opacity: 0.5;">|</span>
                <span style="font-size: 12px; color: var(--prism-text-muted); font-weight: 500;">Preview</span>
              </div>
              <div class="demo-toolbar-right">
                <button class="demo-tool-btn" title="View code"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></button>
                <button class="demo-tool-btn" title="Copy code"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
                <button class="demo-tool-btn" title="Fullscreen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></button>
              </div>
            </div>
            <div class="demo-canvas">
              <div class="accordion-wrapper">
                <div class="accordion-item">
                  <button class="accordion-header" onclick="toggleAccordion(this)" style="font-weight: 400; font-size: 15px;">
                    <span>Choose your plan</span>
                    <svg class="accordion-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-text">Select a pricing plan matching your business requirements.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button class="accordion-header" onclick="toggleAccordion(this)" style="font-weight: 400; font-size: 15px;">
                    <span>Add team members</span>
                    <svg class="accordion-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-text">Invite users to collaborate on this project securely.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button class="accordion-header" onclick="toggleAccordion(this)" style="font-weight: 400; font-size: 15px;">
                    <span>Set payment details</span>
                    <svg class="accordion-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-text">Provide credit card information or link a corporate bank account.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button class="accordion-header" onclick="toggleAccordion(this)" style="font-weight: 400; font-size: 15px;">
                    <span>Review and confirm <span style="font-style: italic; color: var(--prism-text-muted); font-weight: 300;">(title can be a node)</span></span>
                    <svg class="accordion-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-text">Finalize the setup and deploy your environment.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="demo-storybook">
              <span>This live demo contains only a preview of functionality and styles available for this component.</span>
              <a href="#" class="demo-storybook-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View on Storybook
              </a>
            </div>
          </div>
        </div>

        <hr style="border: none; border-top: 1px solid var(--prism-border); margin: 40px 0;" />

        <!-- Accessibility testing status -->
        <div class="doc-section">
          <h2 id="accessibility-testing" class="doc-section-title" style="display: flex; align-items: center; gap: 10px;">
            Accessibility testing status
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--prism-text-muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="cursor: help;"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </h2>
          <p class="doc-section-subtitle" style="margin-bottom: 24px;">Current testing coverage across interaction modes and assistive technologies.</p>
          <style>
            .a11y-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
            .a11y-card { display: flex; align-items: flex-start; gap: 16px; padding: 22px 24px; border-radius: 14px; text-decoration: none; background: var(--prism-surface); border: 1px solid var(--prism-border); transition: all 0.25s cubic-bezier(0.4,0,0.2,1); cursor: pointer; position: relative; overflow: hidden; }
            .a11y-card::before { content: ''; position: absolute; inset: 0; opacity: 0; transition: opacity 0.25s ease; }
            .a11y-card:nth-child(1)::before { background: linear-gradient(135deg, rgba(34,197,94,0.05), transparent 60%); }
            .a11y-card:nth-child(2)::before { background: linear-gradient(135deg, rgba(34,197,94,0.05), transparent 60%); }
            .a11y-card:nth-child(3)::before { background: linear-gradient(135deg, rgba(6,182,212,0.05), transparent 60%); }
            .a11y-card:nth-child(4)::before { background: linear-gradient(135deg, rgba(34,197,94,0.05), transparent 60%); }
            .a11y-card:hover::before { opacity: 1; }
            .a11y-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); border-color: rgba(37,99,235,0.2); }
            [data-theme="light"] .a11y-card { background: #fff; border: 1px solid rgba(37, 99, 235, 0.07); box-shadow: 0 1px 4px rgba(37, 99, 235, 0.04); }
            [data-theme="light"] .a11y-card:hover { box-shadow: 0 8px 28px rgba(37, 99, 235, 0.10); border-color: rgba(37, 99, 235, 0.18); }
            .a11y-card-icon { width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--prism-surface-hover); }
            [data-theme="light"] .a11y-card-icon { background: rgba(37, 99, 235, 0.06); }
            .a11y-card-icon svg { width: 20px; height: 20px; stroke: var(--prism-text-muted); fill: none; stroke-width: 1.5; }
            .a11y-card-body { flex: 1; position: relative; z-index: 1; }
            .a11y-card-title { font-size: 15px; font-weight: 600; color: var(--prism-text); margin-bottom: 10px; }
            .a11y-card-footer { display: flex; align-items: center; justify-content: space-between; }
            .a11y-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; padding: 5px 14px; border-radius: 999px; }
            .a11y-badge::before { content: ''; width: 7px; height: 7px; border-radius: 50%; }
            .a11y-badge.green { background: rgba(34,197,94,0.12); color: #22c55e; }
            .a11y-badge.green::before { background: #22c55e; }
            .a11y-badge.cyan { background: rgba(6,182,212,0.12); color: #06b6d4; }
            .a11y-badge.cyan::before { background: #06b6d4; }
            [data-theme="light"] .a11y-badge.green { background: rgba(22, 163, 74, 0.08); color: #16a34a; }
            [data-theme="light"] .a11y-badge.green::before { background: #16a34a; }
            [data-theme="light"] .a11y-badge.cyan { background: rgba(8, 145, 178, 0.08); color: #0891b2; }
            [data-theme="light"] .a11y-badge.cyan::before { background: #0891b2; }
            .a11y-card-arrow { width: 18px; height: 18px; color: var(--prism-text-muted); transition: all 0.2s ease; }
            .a11y-card:hover .a11y-card-arrow { color: var(--prism-violet); transform: translateX(3px); }
          </style>

          <div class="a11y-grid">
            <a href="#" class="a11y-card">
              <div class="a11y-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg></div>
              <div class="a11y-card-body"><div class="a11y-card-title">Default state</div><div class="a11y-card-footer"><span class="a11y-badge green">Tested</span><svg class="a11y-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></div></div>
            </a>
            <a href="#" class="a11y-card">
              <div class="a11y-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <div class="a11y-card-body"><div class="a11y-card-title">Advanced states</div><div class="a11y-card-footer"><span class="a11y-badge green">Tested</span><svg class="a11y-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></div></div>
            </a>
            <a href="#" class="a11y-card">
              <div class="a11y-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
              <div class="a11y-card-body"><div class="a11y-card-title">Screen reader</div><div class="a11y-card-footer"><span class="a11y-badge cyan">Manually tested</span><svg class="a11y-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></div></div>
            </a>
            <a href="#" class="a11y-card">
              <div class="a11y-card-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="6" y1="8" x2="6.01" y2="8"></line><line x1="10" y1="8" x2="10.01" y2="8"></line><line x1="14" y1="8" x2="14.01" y2="8"></line><line x1="18" y1="8" x2="18.01" y2="8"></line><line x1="6" y1="16" x2="18" y2="16"></line></svg></div>
              <div class="a11y-card-body"><div class="a11y-card-title">Keyboard navigation</div><div class="a11y-card-footer"><span class="a11y-badge green">Tested</span><svg class="a11y-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></div></div>
            </a>
          </div>
        </div>

        <!-- When to use -->
        <div style="margin-bottom: 48px;">
          <h3 id="when-to-use" style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: var(--prism-text);">When to use</h3>
          <ul style="color: var(--prism-text); font-size: 15.5px; line-height: 1.7; padding-left: 20px; margin-bottom: 0; list-style: '–  ';">
            <li style="margin-bottom: 10px; padding-left: 4px;">To organize related information.</li>
            <li style="margin-bottom: 10px; padding-left: 4px;">To shorten pages and reduce scrolling when content is not crucial to read in full.</li>
            <li style="margin-bottom: 10px; padding-left: 4px;">When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel.</li>
          </ul>
        </div>

        <!-- When not to use -->
        <div style="margin-bottom: 64px;">
          <h3 id="when-not-to-use" style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: var(--prism-text);">When not to use</h3>
          <ul style="color: var(--prism-text); font-size: 15.5px; line-height: 1.7; padding-left: 20px; margin-bottom: 0; list-style: '–  ';">
            <li style="margin-bottom: 10px; padding-left: 4px;">When organizing large amounts of information that can be nested, consider using <a href="#" style="color: var(--prism-violet); text-decoration: none;">tree view</a> instead.</li>
            <li style="margin-bottom: 10px; padding-left: 4px;">If a user is likely to read all of the content, then don't use an accordion as it adds the burden of an extra click; instead use a full scrolling page with normal headers.</li>
          </ul>
        </div>

        <!-- Formatting -->
        <div style="margin-bottom: 64px;">
          <h2 id="formatting" style="font-size: 32px; font-weight: 400; margin-bottom: 40px; color: var(--prism-text);">Formatting</h2>

          <!-- Anatomy -->
          <h3 id="anatomy" class="doc-h3">Anatomy</h3>
          <style>
            .anatomy-diagram { background: var(--prism-surface); border: 1px solid var(--prism-border); border-radius: 16px; padding: 48px 40px; margin-bottom: 28px; position: relative; overflow: hidden; }
            [data-theme="light"] .anatomy-diagram { background: #fff; border: 1px solid rgba(37, 99, 235, 0.07); box-shadow: 0 2px 12px rgba(37, 99, 235, 0.05); }
            .anatomy-diagram::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #2563eb, #60a5fa, #06b6d4); }
            .anatomy-diagram::after { content: ''; position: absolute; top: 0; right: 0; width: 300px; height: 300px; background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%); pointer-events: none; }
            .anat-accordion { max-width: 580px; margin: 0 auto; }
            .anat-row { display: flex; align-items: stretch; border-top: 1px solid var(--prism-border); transition: background 0.15s ease; }
            .anat-row:hover { background: rgba(37, 99, 235, 0.03); }
            .anat-row:last-child { border-bottom: 1px solid var(--prism-border); }
            [data-theme="light"] .anat-row { border-top: 1px solid rgba(37, 99, 235, 0.06); }
            [data-theme="light"] .anat-row:last-child { border-bottom: 1px solid rgba(37, 99, 235, 0.06); }
            .anat-header-cell { flex: 1; display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; font-size: 14.5px; color: var(--prism-text); font-family: inherit; position: relative; }
            .anat-panel { padding: 16px 24px; font-size: 14px; line-height: 1.65; color: var(--prism-text-muted); border-top: 1px solid var(--prism-border); border-left: 3px solid #2563eb; margin-left: 20px; margin-right: 20px; margin-bottom: 4px; background: rgba(37, 99, 235, 0.03); border-radius: 0 0 8px 8px; }
            [data-theme="light"] .anat-panel { background: rgba(37, 99, 235, 0.025); border-top: 1px solid rgba(37, 99, 235, 0.06); }
            .anat-marker { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; background: linear-gradient(135deg, #2563eb, #3b82f6); color: #fff; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; margin-right: 14px; box-shadow: 0 2px 10px rgba(37, 99, 235, 0.35); }
            .anat-marker-inline { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; background: linear-gradient(135deg, #2563eb, #3b82f6); color: #fff; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(37, 99, 235, 0.35); }
            .anat-legend { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
            .anat-legend-item { display: flex; align-items: flex-start; gap: 14px; padding: 20px; background: var(--prism-surface); border: 1px solid var(--prism-border); border-radius: 14px; transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
            [data-theme="light"] .anat-legend-item { background: #fff; border: 1px solid rgba(37, 99, 235, 0.07); box-shadow: 0 1px 4px rgba(37, 99, 235, 0.04); }
            .anat-legend-item:hover { border-color: rgba(37, 99, 235, 0.35); background: rgba(37, 99, 235, 0.04); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1); }
            [data-theme="light"] .anat-legend-item:hover { background: rgba(37, 99, 235, 0.025); box-shadow: 0 8px 28px rgba(37, 99, 235, 0.10); }
            .anat-legend-item strong { display: block; font-size: 14.5px; font-weight: 600; color: var(--prism-text); margin-bottom: 6px; }
            .anat-legend-item span { font-size: 13px; line-height: 1.55; color: var(--prism-text-muted); }
          </style>

          <div class="anatomy-diagram">
            <div class="anat-accordion">
              <div class="anat-row">
                <div class="anat-header-cell"><div style="display: flex; align-items: center;"><span class="anat-marker">1</span><span>International Time Recording Company (1888)</span></div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></div>
              </div>
              <div class="anat-row" style="flex-direction: column;">
                <div class="anat-header-cell"><div style="display: flex; align-items: center;"><span style="width: 24px; margin-right: 14px;"></span><span>Computing Scale Company (1891)</span></div><div style="display: flex; align-items: center; gap: 10px;"><span class="anat-marker-inline">2</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l6-6 6 6"/></svg></div></div>
                <div class="anat-panel"><div style="display: flex; align-items: flex-start; gap: 10px;"><span class="anat-marker-inline" style="margin-top: 2px;">3</span><span>In 1891, Edward Canby and Orange O. Ozias, two businessmen from Dayton, Ohio, purchased the patents for the newly invented computing scale and incorporated the Computing Scale Company for the production of commercial scales.</span></div></div>
              </div>
              <div class="anat-row"><div class="anat-header-cell"><div style="display: flex; align-items: center;"><span style="width: 24px; margin-right: 14px;"></span><span>Computing-Tabulating-Record Company (1911)</span></div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></div></div>
              <div class="anat-row"><div class="anat-header-cell"><div style="display: flex; align-items: center;"><span style="width: 24px; margin-right: 14px;"></span><span>International Business Machines (1924)</span></div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></div></div>
            </div>
          </div>

          <div class="anat-legend">
            <div class="anat-legend-item"><span class="anat-marker-inline">1</span><div><strong>Header</strong><span>Contains the section title and is the control for revealing the panel.</span></div></div>
            <div class="anat-legend-item"><span class="anat-marker-inline">2</span><div><strong>Icon</strong><span>Indicates whether the panel is currently open or closed.</span></div></div>
            <div class="anat-legend-item"><span class="anat-marker-inline">3</span><div><strong>Panel</strong><span>The section of content associated with an accordion header.</span></div></div>
          </div>
        </div>

        <hr style="border: none; border-top: 1px solid var(--prism-border); margin: 40px 0;" />

        <div class="doc-section">
          <h2 id="content-guidelines" class="doc-section-title">Content</h2>
          <p class="doc-section-subtitle">Guidelines for writing effective accordion content that improves scannability and comprehension.</p>
          <ul class="doc-list">
            <li>Use clear, descriptive section titles that accurately represent the content within each panel.</li>
            <li>Keep content concise — avoid lengthy paragraphs. Use structured lists or short descriptions for rapid scanning.</li>
            <li>Maintain a consistent tone and level of detail across all accordion items on the same page.</li>
            <li>Avoid placing critical, time-sensitive information inside collapsed panels where users may not discover it.</li>
          </ul>
        </div>

        <hr class="doc-divider" />

        <div class="doc-section">
          <h3 id="best-practices" class="doc-h3">Best practices<span class="h3-badge" style="background: rgba(37,99,235,0.1); color: var(--prism-violet);">Recommended</span></h3>
          <div class="do-dont-grid">
            <div class="do-card"><span class="card-label">Do</span><ul><li>Keep accordion panel content concise.</li><li>Ensure a clear title for each accordion item.</li><li>Support keyboard interactions.</li></ul></div>
            <div class="dont-card"><span class="card-label">Don't</span><ul><li>Place critical information inside accordions.</li><li>Nest accordions endlessly.</li></ul></div>
          </div>
        </div>
`;

// Helper to replace the empty tab-usage with targetHtml
function restoreAccordion(filePath) {
    let html = fs.readFileSync(filePath, 'utf8');
    const regex = /<div class="tab-content" id="tab-usage"[\s\S]*?<\/div>[\s]*<\/div>/;
    
    // We replace the entire tab-content div because the targetHtml starts from INSIDE the tab-content id="tab-usage",
    // wait! My target targetHtml does NOT have the <div class="tab-content" id="tab-usage"> wrapper, but I should add it.
    
    html = html.replace(regex, '<div class="tab-content" id="tab-usage">\n' + targetHtml + '\n      </div>');
    fs.writeFileSync(filePath, html, 'utf8');
    console.log("Restored " + filePath);
}

restoreAccordion(path.join(__dirname, 'Accordion.html'));
restoreAccordion(path.join(__dirname, 'Components.html'));
