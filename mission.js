/**
 * SettlePal Mission — Webflow embed
 * Source: /Users/toad/Documents/webflow/home/mission.rtf
 *
 * Usage:
 * <script defer src="https://cdn.jsdelivr.net/gh/nickworking/embed@VERSION/mission.js"></script>
 */
(function () {
  "use strict";

  var loaderScript = document.currentScript;
  var STYLE_ID = "sp-original-mission-embed-styles";
  var ROOT_SELECTOR = "[data-sp-original-mission]";
  var markup = `<div class="sp-original-mission" data-sp-original-mission>
<section class="roadmap-section">
  <div class="roadmap-container">
    <section class="roadmap-hero" aria-labelledby="roadmap-title">
      <div class="roadmap-badge">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>Our Mission</span>
      </div>

      <h2 id="roadmap-title" class="roadmap-title">Building The Future Of <span>Digital Transactions</span></h2>
      <p class="roadmap-subtitle">SettlePal combines modern financial infrastructure, AI-driven systems, and blockchain innovation to create a faster, smarter, and more accessible platform for digital transactions.</p>
      <p class="roadmap-subtitle roadmap-subtitle-secondary">As we continue to grow, our focus remains clear: build technology that empowers users, removes unnecessary barriers, and creates long-term trust through performance and transparency.</p>
    </section>

    <section class="roadmap-block roadmap-looking-ahead" aria-labelledby="roadmap-looking-title">
      <div class="roadmap-section-heading">
        <div class="roadmap-badge roadmap-small-badge">
          <span>Looking Ahead</span>
        </div>
        <h3 id="roadmap-looking-title">Next-Generation Infrastructure</h3>
        <p>SettlePal is actively investing in the next generation of digital financial infrastructure. Our long-term roadmap spans seven major development tracks.</p>
      </div>

      <div class="roadmap-card-grid">
        <article class="roadmap-card">
          <div class="roadmap-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#10CF90" stroke-width="2"></circle>
              <path d="M12 6V12L16 14" stroke="#10CF90" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </div>
          <div>
            <h4>Tokenization Infrastructure</h4>
            <p>Building foundational tokenization rails that enable seamless conversion and representation of value across digital environments.</p>
          </div>
        </article>

        <article class="roadmap-card">
          <div class="roadmap-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
              <rect x="14" y="3" width="7" height="7" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
              <rect x="14" y="14" width="7" height="7" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
              <rect x="3" y="14" width="7" height="7" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
            </svg>
          </div>
          <div>
            <h4>Real-World Asset (RWA) Integration</h4>
            <p>Connecting real-world assets to digital infrastructure, enabling broader access and liquidity for traditionally illiquid assets.</p>
          </div>
        </article>

        <article class="roadmap-card">
          <div class="roadmap-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M10 13C10.43 13.57 10.98 14.05 11.61 14.39C12.24 14.74 12.93 14.94 13.65 14.99C14.36 15.04 15.08 14.94 15.75 14.69C16.42 14.44 17.03 14.05 17.54 13.54L20.54 10.54C21.45 9.60 21.95 8.33 21.94 7.02C21.93 5.71 21.41 4.46 20.48 3.53C19.55 2.60 18.30 2.08 16.99 2.07C15.68 2.06 14.41 2.56 13.47 3.47L11.75 5.18" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14 11C13.57 10.43 13.02 9.95 12.39 9.61C11.76 9.26 11.07 9.06 10.35 9.01C9.64 8.96 8.92 9.06 8.25 9.31C7.58 9.56 6.97 9.95 6.46 10.46L3.46 13.46C2.55 14.40 2.05 15.67 2.06 16.98C2.07 18.29 2.59 19.54 3.52 20.47C4.45 21.40 5.70 21.92 7.01 21.93C8.32 21.94 9.59 21.44 10.53 20.53L12.24 18.82" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div>
            <h4>Blockchain-Enabled Transaction Systems</h4>
            <p>Deeper integration of blockchain infrastructure for faster, more transparent, and more reliable transaction processing at scale.</p>
          </div>
        </article>

        <article class="roadmap-card">
          <div class="roadmap-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div>
            <h4>AI-Powered Financial Automation</h4>
            <p>Next-generation AI models that continuously improve execution quality, opportunity detection, and risk management across the platform.</p>
          </div>
        </article>

        <article class="roadmap-card">
          <div class="roadmap-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div>
            <h4>Smart Digital Asset Infrastructure</h4>
            <p>Building programmable, composable infrastructure that enables intelligent automation of complex digital asset operations.</p>
          </div>
        </article>

        <article class="roadmap-card">
          <div class="roadmap-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M8 18L3 12L8 6M16 6L21 12L16 18" stroke="#10CF90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div>
            <h4>Open-Source Technology Initiatives</h4>
            <p>Contributing to the open-source ecosystem, building trust through transparency and enabling broader ecosystem participation.</p>
          </div>
        </article>

        <article class="roadmap-card roadmap-card-wide">
          <div class="roadmap-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8" stroke="#10CF90" stroke-width="2"></circle>
              <path d="M9.5 9C9.5 9 9.5 7.5 12 7.5C14.5 7.5 14.5 9.5 14.5 9.5C14.5 11 12 11.5 12 13.5" stroke="#10CF90" stroke-width="2" stroke-linecap="round"></path>
              <circle cx="12" cy="16" r="0.75" fill="#10CF90"></circle>
            </svg>
          </div>
          <div>
            <h4>Utility-Driven Token Ecosystems</h4>
            <p>Developing token systems with genuine utility that create sustainable value for users, operators, and the broader SettlePal ecosystem.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="roadmap-block roadmap-vision" aria-labelledby="roadmap-vision-title">
      <div class="roadmap-vision-panel">
        <div class="roadmap-badge roadmap-small-badge">
          <span>The Big Picture</span>
        </div>
        <h3 id="roadmap-vision-title">The Convergence of AI, Blockchain, and Decentralized Infrastructure</h3>
        <p>We believe the convergence of AI, blockchain technology, and decentralized infrastructure will fundamentally reshape how value moves globally. SettlePal aims to help build that future responsibly, transparently, and at scale.</p>

        <div class="roadmap-tags">
          <span>AI Systems</span>
          <span>Blockchain Infrastructure</span>
          <span>Decentralized Finance</span>
        </div>

        <div class="roadmap-actions">
          <a href="https://login.settlepal.com/register?referralCode=GS68" class="roadmap-button roadmap-button-primary">Create Account</a>
        </div>
      </div>
    </section>

    <section class="roadmap-block roadmap-principles" aria-labelledby="roadmap-principles-title">
      <div class="roadmap-section-heading">
        <div class="roadmap-badge roadmap-small-badge">
          <span>Our Principles</span>
        </div>
        <h3 id="roadmap-principles-title">What We Stand For</h3>
      </div>

      <div class="roadmap-principles-grid">
        <article class="roadmap-principle-card">
          <h4>Intelligent Technology</h4>
          <p>We believe financial platforms should evolve beyond static systems. SettlePal invests heavily in AI-driven infrastructure, automation, and scalable technologies.</p>
        </article>

        <article class="roadmap-principle-card">
          <h4>Accessibility</h4>
          <p>Access to powerful financial tools should not depend on institutional relationships or large amounts of capital.</p>
        </article>

        <article class="roadmap-principle-card">
          <h4>Transparency &amp; Fairness</h4>
          <p>Trust is built through consistency, accountability, and honest operations - not marketing promises.</p>
        </article>

        <article class="roadmap-principle-card">
          <h4>Security &amp; Reliability</h4>
          <p>Our systems are designed around performance, scalability, monitoring, and continuous improvement.</p>
        </article>

        <article class="roadmap-principle-card roadmap-principle-wide">
          <h4>User-Centric Innovation</h4>
          <p>Every platform improvement and operational decision is designed to make SettlePal simpler, faster, safer, and more effective.</p>
        </article>
      </div>
    </section>

    <section class="roadmap-block roadmap-team" aria-labelledby="roadmap-team-title">
      <h3 id="roadmap-team-title">Be Part of Our Growing Team</h3>
      <p>Launch the SettlePal app to explore the platform, access digital transaction tools, and take the next step into smarter financial infrastructure.</p>
      <a href="https://login.settlepal.com/register?referralCode=GS68" class="roadmap-button roadmap-button-primary">Launch App</a>
    </section>
  </div>
</section>
</div>`;
  var styles = `  .sp-original-mission .roadmap-section {
    position: relative;
    overflow: hidden;
    padding: 0 16px 64px;
    background: transparent;
    color: #ffffff;
    font-family: inherit;
  }

  .sp-original-mission .roadmap-section * {
    box-sizing: border-box;
  }

  .sp-original-mission .roadmap-section a {
    text-decoration: none;
  }

  .sp-original-mission .roadmap-container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 0;
  }

  .sp-original-mission .roadmap-hero {
    position: relative;
    max-width: 880px;
    margin: 0 auto 48px;
    padding-top: 0;
    text-align: center;
  }

  .sp-original-mission .roadmap-hero::before,
  .sp-original-mission .roadmap-vision::before {
    content: "";
    position: absolute;
    pointer-events: none;
    border-radius: 999px;
    background: rgba(16, 207, 144, 0.05);
    filter: blur(80px);
  }

  .sp-original-mission .roadmap-hero::before {
    top: -40px;
    right: -140px;
    width: 360px;
    height: 360px;
  }

  .sp-original-mission .roadmap-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 0;
    margin-bottom: 24px;
    padding: 8px 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    color: #10CF90;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .sp-original-mission .roadmap-small-badge {
    margin-bottom: 20px;
    padding: 7px 14px;
    font-size: 11px;
    letter-spacing: 0.12em;
  }

  .sp-original-mission .roadmap-title {
    margin: 0 0 16px;
    color: #ffffff;
    font-size: clamp(32px, 6vw, 56px);
    font-weight: 600;
    line-height: 1.12;
  }

  .sp-original-mission .roadmap-title span {
    color: #10CF90;
  }

  .sp-original-mission .roadmap-subtitle {
    max-width: 760px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.60);
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 300;
    line-height: 1.6;
  }

  .sp-original-mission .roadmap-subtitle-secondary {
    max-width: 660px;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.50);
    font-size: 15px;
  }

  .sp-original-mission .roadmap-block {
    position: relative;
    margin-bottom: 48px;
  }

  .sp-original-mission .roadmap-section-heading {
    max-width: 720px;
    margin: 0 auto 40px;
    text-align: center;
  }

  .sp-original-mission .roadmap-section-heading h3,
  .sp-original-mission .roadmap-vision-panel h3,
  .sp-original-mission .roadmap-team h3 {
    margin: 0;
    color: #ffffff;
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 600;
    line-height: 1.15;
  }

  .sp-original-mission .roadmap-section-heading p,
  .sp-original-mission .roadmap-vision-panel p,
  .sp-original-mission .roadmap-team p {
    max-width: 700px;
    margin: 14px auto 0;
    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
  }

  .sp-original-mission .roadmap-card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .sp-original-mission .roadmap-card,
  .sp-original-mission .roadmap-vision-panel,
  .sp-original-mission .roadmap-principle-card,
  .sp-original-mission .roadmap-team {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .sp-original-mission .roadmap-card {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    min-height: 158px;
    padding: 22px;
    border-radius: 16px;
    transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease, background-color 200ms ease;
  }

  .sp-original-mission .roadmap-card:hover,
  .sp-original-mission .roadmap-principle-card:hover {
    border-color: rgba(16, 207, 144, 0.38);
    background: rgba(16, 207, 144, 0.05);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35), 0 0 32px rgba(16, 207, 144, 0.08);
    transform: translateY(-2px);
  }

  .sp-original-mission .roadmap-card-icon {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    border: 1px solid rgba(16, 207, 144, 0.30);
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.30);
  }

  .sp-original-mission .roadmap-card h4,
  .sp-original-mission .roadmap-principle-card h4 {
    margin: 0 0 8px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.25;
  }

  .sp-original-mission .roadmap-card p,
  .sp-original-mission .roadmap-principle-card p {
    margin: 0;
    color: rgba(255, 255, 255, 0.60);
    font-size: 13px;
    font-weight: 300;
    line-height: 1.6;
  }

  .sp-original-mission .roadmap-vision {
    overflow: hidden;
  }

  .sp-original-mission .roadmap-vision::before {
    inset: 10% 8%;
  }

  .sp-original-mission .roadmap-vision-panel {
    position: relative;
    z-index: 1;
    max-width: 980px;
    margin: 0 auto;
    padding: 40px 28px;
    border-radius: 24px;
    text-align: center;
  }

  .sp-original-mission .roadmap-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px 24px;
    margin: 32px 0;
  }

  .sp-original-mission .roadmap-tags span {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.60);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.35;
  }

  .sp-original-mission .roadmap-tags span::before,
  .sp-original-mission .roadmap-principle-card h4::before {
    content: "";
    flex: 0 0 auto;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #10CF90;
  }

  .sp-original-mission .roadmap-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .sp-original-mission .roadmap-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    transition: border-color 200ms ease, background-color 200ms ease, color 200ms ease, transform 200ms ease;
  }

  .sp-original-mission .roadmap-button-primary {
    border: 1px solid rgba(16, 207, 144, 0.60);
    background: rgba(16, 207, 144, 0.05);
    color: #ffffff;
  }

  .sp-original-mission .roadmap-button-secondary {
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: rgba(0, 0, 0, 0.30);
    color: rgba(255, 255, 255, 0.60);
  }

  .sp-original-mission .roadmap-button:hover {
    border-color: rgba(16, 207, 144, 0.60);
    background: rgba(16, 207, 144, 0.05);
    color: #ffffff;
    transform: translateY(-1px);
  }

  .sp-original-mission .roadmap-principles-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .sp-original-mission .roadmap-principle-card {
    min-height: 150px;
    padding: 22px;
    border-radius: 16px;
    transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease, background-color 200ms ease;
  }

  .sp-original-mission .roadmap-principle-card h4 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sp-original-mission .roadmap-principle-card h4::before {
    display: inline-block;
  }

  .sp-original-mission .roadmap-team {
    max-width: 920px;
    margin: 0 auto 32px;
    padding: 36px 28px;
    border-radius: 24px;
    text-align: center;
  }

  .sp-original-mission .roadmap-team p {
    margin-bottom: 28px;
  }

  @media (min-width: 640px) {
    .sp-original-mission .roadmap-card-grid,
    .sp-original-mission .roadmap-principles-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 992px) {
    .sp-original-mission .roadmap-section {
      padding: 0 24px 96px;
    }

    .sp-original-mission .roadmap-hero {
      margin-bottom: 64px;
    }

    .sp-original-mission .roadmap-block {
      margin-bottom: 64px;
    }

    .sp-original-mission .roadmap-card-grid {
      gap: 24px;
    }

    .sp-original-mission .roadmap-card {
      padding: 28px;
    }

    .sp-original-mission .roadmap-card-wide {
      grid-column: span 2;
      max-width: calc(50% - 12px);
      margin: 0 auto;
    }

    .sp-original-mission .roadmap-vision-panel {
      padding: 56px 48px;
    }

    .sp-original-mission .roadmap-principles-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .sp-original-mission .roadmap-principle-wide {
      grid-column: span 2;
    }

    .sp-original-mission .roadmap-team {
      padding: 44px 48px;
    }
  }

  @media (max-width: 560px) {
    .sp-original-mission .roadmap-section {
      padding: 0 16px 56px;
    }

    .sp-original-mission .roadmap-badge {
      max-width: 100%;
      justify-content: center;
      letter-spacing: 0.08em;
    }

    .sp-original-mission .roadmap-card,
    .sp-original-mission .roadmap-vision-panel,
    .sp-original-mission .roadmap-principle-card,
    .sp-original-mission .roadmap-team {
      border-radius: 20px;
    }

    .sp-original-mission .roadmap-card {
      gap: 12px;
      padding: 20px;
    }

    .sp-original-mission .roadmap-card-icon {
      width: 44px;
      height: 44px;
    }

    .sp-original-mission .roadmap-actions {
      display: grid;
      grid-template-columns: 1fr;
    }

    .sp-original-mission .roadmap-button {
      width: 100%;
    }
  }`;

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;

    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.setAttribute("data-sp-original-mission-style", "");
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function ensureMarkup() {
    var existingRoot = document.querySelector(ROOT_SELECTOR);
    if (existingRoot) return existingRoot;

    var mount = document.createElement("div");
    mount.setAttribute("data-sp-original-mission-mount", "");
    mount.innerHTML = markup;

    var canInsertBeforeScript =
      loaderScript &&
      loaderScript.parentNode &&
      loaderScript.parentNode.nodeType === 1 &&
      loaderScript.parentNode.tagName !== "HEAD";

    if (canInsertBeforeScript) {
      loaderScript.parentNode.insertBefore(mount, loaderScript);
    } else {
      document.body.appendChild(mount);
    }

    return mount.querySelector(ROOT_SELECTOR);
  }

  function initialize() {
    ensureStyles();
    var root = ensureMarkup();
    if (!root || root.getAttribute("data-sp-initialized") === "true") return;
    root.setAttribute("data-sp-initialized", "true");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();

