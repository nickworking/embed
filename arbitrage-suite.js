/**
 * SettlePal Arbitrage Suite — Webflow embed
 * Source: /Users/toad/Documents/webflow/home/arbitrage-suite.rtf
 *
 * Usage:
 * <script defer src="https://raw.githack.com/nickworking/embed/main/arbitrage-suite.js"></script>
 */
(function () {
  "use strict";

  var loaderScript = document.currentScript;
  var STYLE_ID = "sp-arb-suite-embed-styles";
  var ROOT_ID = "sp-arb-suite";

  var markup = `<!-- ════════ HERO ════════ -->
  <section class="sp-hero">
    <div class="sp-hero-inner">
      <div class="sp-coming-soon"><span class="sp-pulse"></span>Coming Soon <i style="opacity:0.4">·</i> Exclusively for Platinum Members <i style="opacity:0.4">·</i> 2027</div>
      <h1>
        <span class="sp-title-accent">Earn the spread,</span>
        <span>not the direction</span>
      </h1>
      <div class="sp-hero-sub">
        <p>The complete market-neutral crypto arbitrage suite.</p>
        <span class="sp-exclusive-highlight"><i></i>Exclusive product access for Platinum members and above.</span>
      </div>
      <ul class="sp-trust-strip">
        <li class="sp-trust-item">
          <span class="sp-trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg></span>
          <span class="sp-trust-text"><strong>Non-custodial</strong><span>Trade-only API keys. Your funds never move.</span></span>
        </li>
        <li class="sp-trust-item">
          <span class="sp-trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="7" rx="1.5"/><rect x="4" y="13" width="16" height="7" rx="1.5"/><path d="M8 7.5h.01M8 16.5h.01"/></svg></span>
          <span class="sp-trust-text"><strong>Your own server</strong><span>Will be set up and run by SettlePal, never shared.</span></span>
        </li>
        <li class="sp-trust-item">
          <span class="sp-trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M7 15l3-4 3 2 4-6"/></svg></span>
          <span class="sp-trust-text"><strong>No fee in a losing week</strong><span>Designed exclusively for Platinum members and above.</span></span>
        </li>
      </ul>
    </div>

    <div class="sp-cta-wrap">
      <a class="sp-cta-btn" href="https://settlepal.com/get-started">Start Today <svg viewBox="0 0 20 20"><path d="M3 10h14M12.5 5.5 17 10l-4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>

    <!-- ════════ DASHBOARD PREVIEW ════════ -->
    <div class="sp-stage-wrap">
      <div class="sp-stage">
        <svg class="sp-stage-glow" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,124 50,129 101,229 151,207 202,252 252,280 303,257 353,237 403,216 454,139 504,105 555,98 605,92 656,102 706,115 756,115 807,190 857,193 908,207 958,198 1008,247 1059,224 1109,194 1160,175 1200,123 1200,177 1160,222 1109,242 1059,279 1008,308 958,261 908,259 857,241 807,227 756,164 706,154 656,149 605,149 555,156 504,174 454,199 403,269 353,291 303,310 252,330 202,297 151,256 101,282 50,187 0,177" fill="#10cf90"/></svg>
        <div class="sp-dash-window" aria-hidden="true">
          <div class="sp-dash-sidebar">
            <span style="display:flex;align-items:center;padding:0 0.5rem 0.875rem;gap:6px"><svg viewBox="0 0 20 20" width="20" height="20"><circle cx="10" cy="10" r="9" fill="#10cf90"/><text x="10" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#001e17" font-family="Space Grotesk,sans-serif">S</text></svg><span style="font-size:14px;font-weight:600;color:var(--sp-text-primary)">SettlePal</span></span>
            <span class="sp-nav-label">Overview <span style="float:right;display:inline-flex;gap:1px;border-radius:6px;border:1px solid var(--sp-line);padding:1px;font-size:10px"><span style="background:var(--sp-surface-700);border-radius:4px;padding:1px 6px;color:var(--sp-text-primary)">Session</span><span style="padding:1px 6px">Today</span></span></span>
            <div class="sp-trade-row"><span class="sp-trade-dot"></span><span class="sp-trade-pair">MEW</span><span class="sp-trade-exch">Binance...</span><span class="sp-trade-pnl">+$129.68</span></div>
            <div class="sp-trade-row"><span class="sp-trade-dot"></span><span class="sp-trade-pair">AERO</span><span class="sp-trade-exch">Binance...</span><span class="sp-trade-pnl">+$41.30</span></div>
            <span class="sp-nav-label">Trading</span>
            <div class="sp-nav-item active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8L12 3l10 5"/><path d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8"/></svg>Dashboard</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 20V4M17 4l3 3M17 4l-3 3M7 4v16M7 20l3-3M7 20l-3-3"/></svg>Spread Scanner</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M16 8L8 16"/></svg>Funding Scanner</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L5 14h6v7l8-11h-6z"/></svg>Signals</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>Portfolio</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/></svg>History</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>Listings Calendar</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 3h5v5M14 10l7-7M8 11H3v10h10v-5"/></svg>Copy trading</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19h16M7 15l3-4 3 2 4-6"/></svg>Leaderboard</div>
            <span class="sp-nav-label">Account</span>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>Profile</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>Settings</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a4 4 0 014 4c0 1.1-.45 2.1-1.17 2.83L12 12M12 2a4 4 0 00-4 4c0 1.1.45 2.1 1.17 2.83L12 12M12 12v10"/><path d="M4 15h16"/></svg>AI assistants &amp; API</div>
            <div class="sp-nav-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>API Keys</div>
          </div>
          <div class="sp-dash-main">
            <div class="sp-dash-topbar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
              <span style="flex:1;display:flex;align-items:center;gap:8px">
                <span style="flex:1;display:flex;align-items:center;gap:6px;background:var(--sp-surface-700);border-radius:6px;padding:5px 10px;font-size:11px;color:var(--sp-text-muted)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>Search <span style="margin-left:auto;opacity:0.5;font-family:var(--sp-mono);font-size:10px">/ </span></span>
              </span>
              <span style="display:flex;align-items:center;gap:10px;color:var(--sp-text-muted)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:15px;height:15px"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/><circle cx="18" cy="4" r="3" fill="#10cf90" stroke="none"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:15px;height:15px"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4"/></svg>
                <span style="width:24px;height:24px;border-radius:50%;background:var(--sp-surface-700);display:grid;place-items:center;font-size:10px;font-weight:600;color:var(--sp-text-primary)">A</span>
              </span>
            </div>
            <div style="font-size:18px;font-weight:500;padding:12px 0 8px">Dashboard</div>
            <div style="display:flex;gap:8px;padding-bottom:10px;border-bottom:1px solid var(--sp-line);font-size:11px">
              <span style="border:1px solid var(--sp-line);border-radius:6px;padding:4px 10px;color:var(--sp-text-secondary)">Total Balance <span style="font-family:var(--sp-mono);font-weight:600;color:var(--sp-text-primary)">$22,156.00</span></span>
              <span style="border:1px solid var(--sp-line);border-radius:6px;padding:4px 10px;color:var(--sp-text-secondary)">Today's PnL <span style="font-family:var(--sp-mono);font-weight:600;color:var(--sp-profit)">+$170.98</span></span>
              <span style="border:1px solid var(--sp-line);border-radius:6px;padding:4px 10px;color:var(--sp-text-secondary)">Active Cards <span style="font-family:var(--sp-mono);font-weight:600;color:var(--sp-text-primary)">2</span> <span style="color:var(--sp-text-muted)">1 pos</span></span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;font-size:12px">
              <span style="font-weight:500;color:var(--sp-text-primary)">Active <span style="font-family:var(--sp-mono);color:var(--sp-text-muted)">2</span></span>
              <span style="color:var(--sp-text-muted)">Closed <span style="font-family:var(--sp-mono)">194</span></span>
              <span style="color:var(--sp-text-muted)">■ Stop All</span>
              <span style="flex:1"></span>
              <span style="display:flex;align-items:center;gap:4px;background:var(--sp-surface-700);border-radius:6px;padding:4px 8px;font-size:10px;color:var(--sp-text-muted)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:12px;height:12px"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>Search cards...</span>
              <span style="font-size:10px;color:var(--sp-text-muted)">↕ Sort</span>
              <span style="display:flex;gap:2px"><span style="width:16px;height:16px;border-radius:3px;background:var(--sp-surface-700);display:grid;place-items:center"><svg viewBox="0 0 16 16" style="width:10px;height:10px" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="5" height="5"/><rect x="9" y="2" width="5" height="5"/><rect x="2" y="9" width="5" height="5"/><rect x="9" y="9" width="5" height="5"/></svg></span><span style="width:16px;height:16px;border-radius:3px;display:grid;place-items:center"><svg viewBox="0 0 16 16" style="width:10px;height:10px" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4h12M2 8h12M2 12h12"/></svg></span></span>
              <span style="background:var(--sp-accent);color:#001e17;font-size:10px;font-weight:600;padding:4px 10px;border-radius:6px">+ New Card</span>
            </div>
            <div class="sp-dash-cards">
              <div class="sp-dash-card">
                <div class="sp-dash-card-header">
                  <div class="sp-pair-name"><span class="sp-pair-dot"></span><span class="sp-pair-label">MEW</span></div>
                  <span class="sp-running">Running</span>
                  <span class="sp-card-pnl">+$129.68</span>
                  <span style="color:var(--sp-text-muted);cursor:pointer">⋮</span>
                </div>
                <table class="sp-dash-table">
                  <tr><td class="sp-td-head" colspan="1"></td><td class="sp-td-head">◇ Binance</td><td class="sp-td-head">◆ Bybit</td></tr>
                  <tr><td class="sp-td-label">Ask</td><td class="sp-td-val">0.0004632</td><td class="sp-td-val">0.0004647</td></tr>
                  <tr><td class="sp-td-label">Bid</td><td class="sp-td-val">0.0004629</td><td class="sp-td-val">0.0004646</td></tr>
                  <tr><td class="sp-td-label">Bid/Ask</td><td class="sp-td-val">0.065%</td><td class="sp-td-val">0.022%</td></tr>
                  <tr><td class="sp-td-label">Funding</td><td class="sp-td-val" style="color:var(--sp-loss)">-0.4291%</td><td class="sp-td-val" style="color:var(--sp-loss)">-0.1641%</td></tr>
                  <tr><td class="sp-td-label">Volume 24h</td><td class="sp-td-val">$57.0M</td><td class="sp-td-val">$16.5M</td></tr>
                </table>
                <div class="sp-dash-spread-row">
                  <div class="sp-dash-spread-item"><div class="sp-spread-label">Upper (Open)</div><div class="sp-spread-val" style="color:var(--sp-profit)">0.38<small style="font-size:11px">%</small></div><div class="sp-spread-sub" style="color:var(--sp-profit)">Long A +0.302%</div></div>
                  <div class="sp-dash-spread-item"><div class="sp-spread-label">Δ</div><div class="sp-spread-val" style="color:var(--sp-profit)">0.18<small style="font-size:11px">%</small></div><div class="sp-spread-sub" style="color:var(--sp-loss)">-0.086%</div></div>
                  <div class="sp-dash-spread-item"><div class="sp-spread-label">Lower (Close)</div><div class="sp-spread-val" style="color:var(--sp-loss)">-0.2<small style="font-size:11px">%</small></div><div class="sp-spread-sub" style="color:var(--sp-loss)">Short A -0.389%</div></div>
                </div>
                <table class="sp-dash-table" style="margin-top:6px;border-top:1px solid var(--sp-line);padding-top:6px">
                  <tr><td class="sp-td-head" colspan="1"></td><td class="sp-td-head">Binance</td><td class="sp-td-head">Bybit</td></tr>
                  <tr><td class="sp-td-label">Position</td><td class="sp-td-val" style="color:var(--sp-profit)">+5,404,236</td><td class="sp-td-val" style="color:var(--sp-loss)">-5,404,236</td></tr>
                  <tr><td class="sp-td-label">Entry</td><td class="sp-td-val">0.0004626</td><td class="sp-td-val">0.0004644</td></tr>
                  <tr><td class="sp-td-label"></td><td colspan="2" style="text-align:center;font-family:var(--sp-mono);font-size:11px;color:var(--sp-text-secondary)">0.39%</td></tr>
                  <tr><td class="sp-td-label">uPnL</td><td class="sp-td-val" style="color:var(--sp-profit)">+$2.43</td><td class="sp-td-val" style="color:var(--sp-loss)">-$1.35</td></tr>
                  <tr><td class="sp-td-label">Balance</td><td class="sp-td-val">$8,445.99</td><td class="sp-td-val">$6,139.82</td></tr>
                  <tr><td class="sp-td-label">Total uPnL</td><td colspan="2" class="sp-td-val" style="color:var(--sp-profit);text-align:center">+$1.08</td></tr>
                </table>
              </div>
              <div class="sp-dash-card">
                <div class="sp-dash-card-header">
                  <div class="sp-pair-name"><span class="sp-pair-dot"></span><span class="sp-pair-label">AERO</span></div>
                  <span class="sp-running">Running</span>
                  <span class="sp-card-pnl">+$41.30</span>
                  <span style="color:var(--sp-text-muted);cursor:pointer">⋮</span>
                </div>
                <table class="sp-dash-table">
                  <tr><td class="sp-td-head" colspan="1"></td><td class="sp-td-head">◇ Binance</td><td class="sp-td-head">◆ Hyperliquid</td></tr>
                  <tr><td class="sp-td-label">Ask</td><td class="sp-td-val">0.85880</td><td class="sp-td-val">0.86040</td></tr>
                  <tr><td class="sp-td-label">Bid</td><td class="sp-td-val">0.85870</td><td class="sp-td-val">0.86017</td></tr>
                  <tr><td class="sp-td-label">Bid/Ask</td><td class="sp-td-val">0.012%</td><td class="sp-td-val">0.027%</td></tr>
                  <tr><td class="sp-td-label">Funding</td><td class="sp-td-val" style="color:var(--sp-profit)">+0.0050%</td><td class="sp-td-val" style="color:var(--sp-profit)">+0.0013%</td></tr>
                  <tr><td class="sp-td-label">Volume 24h</td><td class="sp-td-val">$29.5M</td><td class="sp-td-val">$4.4M</td></tr>
                </table>
                <div class="sp-dash-spread-row">
                  <div class="sp-dash-spread-item"><div class="sp-spread-label">Upper (Open)</div><div class="sp-spread-val" style="color:var(--sp-profit)">0.25<small style="font-size:11px">%</small></div><div class="sp-spread-sub" style="color:var(--sp-profit)">Long A +0.160%</div></div>
                  <div class="sp-dash-spread-item"><div class="sp-spread-label">Δ</div><div class="sp-spread-val" style="color:var(--sp-profit)">0.2<small style="font-size:11px">%</small></div><div class="sp-spread-sub" style="color:var(--sp-loss)">-0.038%</div></div>
                  <div class="sp-dash-spread-item"><div class="sp-spread-label">Lower (Close)</div><div class="sp-spread-val" style="color:var(--sp-loss)">-0.05<small style="font-size:11px">%</small></div><div class="sp-spread-sub" style="color:var(--sp-loss)">Short A -0.198%</div></div>
                </div>
                <table class="sp-dash-table" style="margin-top:6px;border-top:1px solid var(--sp-line);padding-top:6px">
                  <tr><td class="sp-td-head" colspan="1"></td><td class="sp-td-head">Binance</td><td class="sp-td-head">Hyperliquid</td></tr>
                  <tr><td class="sp-td-label">Position</td><td class="sp-td-val">—</td><td class="sp-td-val">—</td></tr>
                  <tr><td class="sp-td-label">Entry</td><td class="sp-td-val">—</td><td class="sp-td-val">—</td></tr>
                  <tr><td class="sp-td-label">uPnL</td><td class="sp-td-val" style="color:var(--sp-profit)">+$0.00</td><td class="sp-td-val" style="color:var(--sp-profit)">+$0.00</td></tr>
                  <tr><td class="sp-td-label">Balance</td><td class="sp-td-val">$8,445.99</td><td class="sp-td-val">$7,570.19</td></tr>
                  <tr><td class="sp-td-label">Total uPnL</td><td colspan="2" class="sp-td-val" style="color:var(--sp-profit);text-align:center">+$0.00</td></tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════════ BENEFITS: ADVANCED TRADING ════════ -->
  <section class="sp-benefit-section">
    <span class="sp-section-kicker">Built for traders who want more from their exchange accounts.</span>
    <div class="sp-section-heading-grid">
      <h2>Advanced Trading.<br>Made Accessible.</h2>
      <p>For traders who want smarter ways to trade across multiple cryptocurrency exchanges.</p>
    </div>
    <div class="sp-pictogram-grid">
      <div class="sp-pictogram-card">
        <span class="sp-card-number">01</span>
        <div class="sp-pictogram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20V4M17 4l3 3M17 4l-3 3M7 4v16M7 20l3-3M7 20l-3-3"/></svg></div>
        <h3>Multi-Exchange Traders</h3>
        <p>Connect multiple exchange accounts in one place.</p>
      </div>
      <div class="sp-pictogram-card">
        <span class="sp-card-number">02</span>
        <div class="sp-pictogram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L5 14h6v7l8-11h-6z"/></svg></div>
        <h3>Technology-Driven Traders</h3>
        <p>Let intelligent AI technology scan markets and identify opportunities.</p>
      </div>
      <div class="sp-pictogram-card">
        <span class="sp-card-number">03</span>
        <div class="sp-pictogram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l6 0"/><path d="M21.89 10.5A10 10 0 1012 22c4.1 0 7.62-2.47 9.17-6"/><path d="M17 16h4.4a.6.6 0 01.6.6V21"/></svg></div>
        <h3>Hands-Free Trading</h3>
        <p>Automate trade execution without constantly monitoring the markets.</p>
      </div>
    </div>
  </section>

  <!-- ════════ BENEFITS: OPPORTUNITIES ════════ -->
  <section class="sp-benefit-section">
    <span class="sp-section-kicker">Markets move around the clock.</span>
    <div class="sp-section-heading-grid">
      <h2>Opportunities Don't Wait.<br>Neither Should You.</h2>
      <p>Crypto markets move 24/7. Price differences and funding rates create opportunities across exchanges every day.</p>
    </div>
    <div class="sp-pictogram-grid">
      <div class="sp-pictogram-card">
        <span class="sp-card-number">01</span>
        <div class="sp-pictogram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M7 15l3-4 3 2 4-6"/></svg></div>
        <h3>Capture Market Spreads</h3>
        <p>Identify price differences between supported exchanges.</p>
      </div>
      <div class="sp-pictogram-card">
        <span class="sp-card-number">02</span>
        <div class="sp-pictogram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h3>Real-Time Intelligence</h3>
        <p>Continuously scan markets for potential trading opportunities.</p>
      </div>
      <div class="sp-pictogram-card">
        <span class="sp-card-number">03</span>
        <div class="sp-pictogram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L5 14h6v7l8-11h-6z"/></svg></div>
        <h3>Trade Directly</h3>
        <p>Execute through your own connected exchange accounts.</p>
      </div>
    </div>

    <!-- Selling Strip -->
    <div class="sp-selling-strip">
      <div class="sp-strip-item">
        <div class="sp-strip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <div class="sp-strip-text"><strong>Non-Custodial</strong><span>Your funds stay on your exchange.</span></div>
      </div>
      <div class="sp-strip-item">
        <div class="sp-strip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12a4 4 0 10-8 0 4 4 0 008 0zM10 12h12v3M18 12v3"/></svg></div>
        <div class="sp-strip-text"><strong>Your Own API Connection</strong><span>Trade-only API permissions.</span></div>
      </div>
      <div class="sp-strip-item">
        <div class="sp-strip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L5 14h6v7l8-11h-6z"/></svg></div>
        <div class="sp-strip-text"><strong>Powered by SettlePal AI</strong><span>Advanced market scanning and automated execution.</span></div>
      </div>
    </div>
  </section>

  <!-- ════════ STATS ════════ -->
  <dl class="sp-stats" aria-label="SettlePal in numbers">
    <div class="sp-stat">
      <dt><span class="sp-stat-val">48</span><span class="sp-stat-unit">µs</span></dt>
      <dd class="sp-stat-desc">target time from a price update to a trading decision on your server</dd>
    </div>
    <div class="sp-stat">
      <dt><span class="sp-stat-val">11M</span></dt>
      <dd class="sp-stat-desc">backtests an hour: every exchange pair replayed over 8 hours of order books, at each order size</dd>
    </div>
    <div class="sp-stat">
      <dt><span class="sp-stat-val">12,828</span></dt>
      <dd class="sp-stat-desc">perpetual markets the product is designed to track</dd>
    </div>
    <div class="sp-stat">
      <dt><span class="sp-stat-val">84,756</span></dt>
      <dd class="sp-stat-desc">two-leg execution paths represented in the engine</dd>
    </div>
  </dl>

  <!-- ════════ EXCHANGE MARQUEE ════════ -->
  <div class="sp-exchanges">
    <div class="sp-exchanges-label" data-sp-ex-count>19+ exchanges</div>
    <div class="sp-exchanges-track" data-sp-ex-track>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt="Binance">Binance</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt="Bybit">Bybit</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt="MEXC">MEXC</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png" alt="Gate.io">Gate.io</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt="BingX">BingX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png" alt="OKX">OKX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png" alt="Bitget">Bitget</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png" alt="KuCoin">KuCoin</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/102.png" alt="HTX">HTX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1452.png" alt="Phemex">Phemex</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/8112.png" alt="BloFin">BloFin</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/5751.png" alt="Hyperliquid">Hyperliquid</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/16.png" alt="Poloniex">Poloniex</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6637.png" alt="WEEX">WEEX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/927.png" alt="Aster">Aster</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6137.png" alt="Toobit">Toobit</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/522.png" alt="Deribit">Deribit</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png" alt="Kraken">Kraken</span>
      <!-- Duplicate set for infinite scroll -->
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt="Binance">Binance</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt="Bybit">Bybit</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt="MEXC">MEXC</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png" alt="Gate.io">Gate.io</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt="BingX">BingX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png" alt="OKX">OKX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png" alt="Bitget">Bitget</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png" alt="KuCoin">KuCoin</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/102.png" alt="HTX">HTX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1452.png" alt="Phemex">Phemex</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/8112.png" alt="BloFin">BloFin</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/5751.png" alt="Hyperliquid">Hyperliquid</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/16.png" alt="Poloniex">Poloniex</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6637.png" alt="WEEX">WEEX</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/927.png" alt="Aster">Aster</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6137.png" alt="Toobit">Toobit</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/522.png" alt="Deribit">Deribit</span>
      <span class="sp-ex-item"><img class="sp-ex-logo" src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png" alt="Kraken">Kraken</span>
    </div>
  </div>

  <!-- ════════ SCANNER PREVIEW (LIVE DATA) ════════ -->
  <section class="sp-scanner-section">
    <h2>Scan<br>every exchange pair</h2>
    <p>The scanner will compare cross-exchange spreads on perpetual futures at your order size, with recent backtests and taker fees on both legs already reflected.</p>

    <div class="sp-scanner-window">
      <div class="sp-scanner-toolbar">
        <span class="sp-scanner-tab active">Spread arbitrage</span>
        <span class="sp-scanner-tab">Funding arbitrage</span>
        <div class="sp-scanner-size">Size <span>$100</span></div>
        <div class="sp-scanner-found">Found: <strong data-sp-found-count>—</strong></div>
      </div>
      <div class="sp-scanner-layout">
        <div class="sp-scanner-table-wrap">
          <div class="sp-scan-blur-rows">
            <table class="sp-scan-table">
              <tbody>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
            <div class="sp-scan-blur-overlay">
              <div class="sp-lock">🔒 5 better spreads right now</div>
              <div class="sp-lock-sub">The Scanner plan shows every row, at every order size.</div>
            </div>
          </div>
          <div class="sp-scanner-loading" data-sp-scanner-loading>Connecting to live markets...</div>
          <table class="sp-scan-table" data-sp-scanner-table style="display:none">
            <thead>
              <tr><th>Pair</th><th>Exchanges</th><th>Spread</th><th>Cycles</th><th>Confidence</th></tr>
            </thead>
            <tbody data-sp-scanner-body></tbody>
          </table>
        </div>
        <div class="sp-scanner-detail" data-sp-scanner-detail>
          <div class="sp-detail-pair" data-sp-detail-pair>—</div>
          <div class="sp-detail-exch" data-sp-detail-exch>—</div>
          <div class="sp-detail-spread" data-sp-detail-spread>—</div>
          <div class="sp-detail-spread-sub">per cycle, after fees</div>
          <div class="sp-detail-grid">
            <div class="sp-detail-cell"><label>Cycles</label><div class="sp-dval" data-sp-detail-cycles>—</div></div>
            <div class="sp-detail-cell"><label>Fees / cycle</label><div class="sp-dval" data-sp-detail-fees>—</div></div>
            <div class="sp-detail-cell"><label>Confidence</label><div class="sp-dval" data-sp-detail-conf>—</div></div>
            <div class="sp-detail-cell"><label>Vol A</label><div class="sp-dval" data-sp-detail-vola>—</div></div>
          </div>
          <span class="sp-detail-cta">Create a strategy from this row →</span>
        </div>
      </div>
      <div class="sp-scanner-footer">Preview scanner rows at a $100 order size. This page shows pairs with confidence 70 or more and at least $2M of daily volume on both legs.</div>
    </div>
  </section>

  <!-- ════════ TWO-LEG EXECUTION ════════ -->
  <section class="sp-twoleg-section">
    <h2>Trade<br>both legs at once</h2>
    <p>SettlePal will go long where the coin is cheap and short where it is expensive, sending both orders together from your server.</p>

    <div class="sp-twoleg-layout">
      <div class="sp-strategy-form" aria-hidden="true">
        <div class="sp-form-title">New strategy</div>
        <div class="sp-form-row"><span class="sp-form-label">Pair</span><span class="sp-form-val">MEW-USDT</span></div>
        <div class="sp-form-row"><span class="sp-form-label">Mode</span><span class="sp-form-val accent">● Auto Mode</span></div>
        <div class="sp-form-row"><span class="sp-form-label">Long on</span><span class="sp-form-val">OKX</span></div>
        <div class="sp-form-row"><span class="sp-form-label">Short on</span><span class="sp-form-val">Bybit</span></div>
        <div class="sp-form-row"><span class="sp-form-label">Open at</span><span class="sp-form-val">1.45%</span></div>
        <div class="sp-form-row"><span class="sp-form-label">Close at</span><span class="sp-form-val">0.85%</span></div>
        <div class="sp-form-row"><span class="sp-form-label">Size per leg</span><span class="sp-form-val">$500</span></div>
        <div class="sp-form-row"><span class="sp-form-label">Leverage</span><span class="sp-form-val">3×</span></div>
        <button class="sp-form-btn">Start strategy</button>
      </div>

      <div class="sp-price-ladder" data-sp-ladder>
        <div class="sp-ladder-header">
          <span class="sp-ladder-pair" data-sp-ladder-pair>MEW-USDT</span>
          <span class="sp-ladder-time" data-sp-ladder-time>loading...</span>
        </div>
        <div data-sp-ladder-rows>
          <div class="sp-scanner-loading">Connecting...</div>
        </div>
        <div class="sp-ladder-footer">
          <span class="sp-ladder-route" data-sp-ladder-route>—</span>
          <span class="sp-ladder-spread" data-sp-ladder-pct>—</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ════════ TELEGRAM / SERVER ════════ -->
  <section class="sp-watch-section">
    <h2>Watch<br>from anywhere</h2>
    <p>Every open, close, and funding payment will reach Telegram as it happens. Trade-only keys will never request withdrawal access and can be locked to your server's IP.</p>

    <div class="sp-watch-layout">
      <div class="sp-phone-frame" aria-hidden="true">
        <div class="sp-phone-inner">
          <div class="sp-tg-phone-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;color:var(--sp-text-muted)"><path d="M15 18l-6-6 6-6"/></svg>
            <div class="sp-tg-avatar">S</div>
            <div style="flex:1"><div class="sp-tg-phone-name">SettlePal</div><div class="sp-tg-phone-sub">bot · online</div></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;color:var(--sp-text-muted)"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;gap:6px;padding:8px 10px;overflow:hidden">
            <div class="sp-tg-bubble"><span style="font-size:10px;color:var(--sp-text-muted);display:block;margin-bottom:3px">System</span>Server online. Tokyo, 203.0.113.24.<div class="sp-bubble-time">03:12</div></div>
            <div class="sp-tg-bubble"><span style="font-size:10px;color:var(--sp-accent);display:block;margin-bottom:3px">↗ Open</span>Opened MEW-USDT. Long Binance 0.0005065, short Bybit 0.0005141. Spread 1.50%.<div class="sp-bubble-time">05:00</div></div>
            <div class="sp-tg-bubble"><span style="font-size:10px;color:var(--sp-profit);display:block;margin-bottom:3px">↙ Close</span>Closed MEW-USDT at 0.84%. <span class="sp-bubble-profit">+$3.26</span> before fees, held 42 min.<div class="sp-bubble-time">05:42</div></div>
            <div class="sp-tg-bubble"><span style="font-size:10px;color:var(--sp-accent);display:block;margin-bottom:3px">↗ Open</span>Opened AERO-USDT. Long Binance 0.8592, short Hyperliquid 0.8610. Spread 0.21%.<div class="sp-bubble-time">06:11</div></div>
            <div class="sp-tg-bubble"><span style="font-size:10px;color:var(--sp-text-muted);display:block;margin-bottom:3px">💰 Funding</span>Collected funding MEW-USDT: <span class="sp-bubble-profit">+$1.84</span>. Net rate: +0.265%.<div class="sp-bubble-time">08:00</div></div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-top:1px solid var(--sp-line)">
            <span style="flex:1;background:var(--sp-surface-700);border-radius:16px;padding:6px 12px;font-size:11px;color:var(--sp-text-muted)">Message</span>
            <svg viewBox="0 0 24 24" fill="#10cf90" style="width:20px;height:20px"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
          </div>
        </div>
      </div>

      <div class="sp-server-card" aria-hidden="true">
        <div class="sp-server-badge">Server <span class="sp-online-dot"></span><span class="sp-online-label">Online</span></div>
        <dl class="sp-server-grid">
          <dt>Region</dt><dd>Tokyo</dd>
          <dt>Static IP</dt><dd>203.0.113.24</dd>
        </dl>
        <table class="sp-api-table">
          <thead><tr><th>API key</th><th>Read</th><th>Trade</th><th>Withdraw</th></tr></thead>
          <tbody>
            <tr><td>Binance</td><td class="sp-yes">Yes</td><td class="sp-yes">Yes</td><td class="sp-never">Never</td></tr>
            <tr><td>Bybit</td><td class="sp-yes">Yes</td><td class="sp-yes">Yes</td><td class="sp-never">Never</td></tr>
            <tr><td>OKX</td><td class="sp-yes">Yes</td><td class="sp-yes">Yes</td><td class="sp-never">Never</td></tr>
            <tr><td>MEXC</td><td class="sp-yes">Yes</td><td class="sp-yes">Yes</td><td class="sp-never">Never</td></tr>
          </tbody>
        </table>
        <p class="sp-server-note">SettlePal will set up and run a dedicated server for each product account, with its own static IP and regional deployment options. There will be nothing for you to install or maintain.</p>
      </div>
    </div>
  </section>

  <!-- ════════ DATA / FUNDING RATES ════════ -->
  <section class="sp-data-section">
    <h2>The data the terminal will trade on.<br>In public.</h2>

    <div class="sp-data-grid">
      <div class="sp-data-card full">
        <span class="sp-data-label">Funding Rates</span>
        <h3>Every venue, every coin, in one view</h3>
        <p class="sp-data-desc">Funding per 8 hours. Red means longs pay, green means shorts pay.</p>
        <table class="sp-funding-table">
          <thead>
            <tr><th>%, 8 h</th><th>MEXC</th><th>Gate.io</th><th>BingX</th><th>Bitget</th><th>LBank</th><th>Bybit</th><th>Toobit</th><th>XT.com</th></tr>
          </thead>
          <tbody>
            <tr><td>BTC</td><td>0.000</td><td class="sp-fund-pos">0.007</td><td class="sp-fund-pos">0.006</td><td>0.001</td><td>0.000</td><td class="sp-fund-pos">0.005</td><td>0.000</td><td>0.000</td></tr>
            <tr><td>ETH</td><td class="sp-fund-pos">0.007</td><td class="sp-fund-pos">0.010</td><td class="sp-fund-pos">0.005</td><td class="sp-fund-pos">0.003</td><td>0.001</td><td class="sp-fund-pos">0.006</td><td>0.001</td><td>0.002</td></tr>
            <tr><td>PEPE</td><td class="sp-fund-pos">0.010</td><td class="sp-fund-pos">0.015</td><td class="sp-fund-pos">0.008</td><td class="sp-fund-pos">0.012</td><td class="sp-fund-pos">0.005</td><td class="sp-fund-pos">0.009</td><td class="sp-fund-pos">0.003</td><td class="sp-fund-pos">0.007</td></tr>
            <tr><td>SOL</td><td>0.001</td><td class="sp-fund-pos">0.004</td><td class="sp-fund-pos">0.003</td><td>0.002</td><td>0.000</td><td class="sp-fund-pos">0.003</td><td>0.001</td><td>0.001</td></tr>
            <tr><td>XRP</td><td class="sp-fund-pos">0.010</td><td class="sp-fund-pos">0.008</td><td class="sp-fund-pos">0.006</td><td class="sp-fund-pos">0.005</td><td>0.002</td><td class="sp-fund-pos">0.007</td><td class="sp-fund-pos">0.003</td><td class="sp-fund-pos">0.004</td></tr>
          </tbody>
        </table>
        <p class="sp-funding-table-note">Preview data from each exchange, 14:09 UTC.</p>
      </div>

      <div class="sp-data-card">
        <span class="sp-data-label">API</span>
        <h3>The same numbers, as JSON</h3>
        <div class="sp-api-mock"><span class="sp-api-status">200 OK</span>  GET /api/v1/funding/BTC<br><br>{<br>&nbsp;&nbsp;"coin": "BTC",<br>&nbsp;&nbsp;"venue_count": 25,<br>&nbsp;&nbsp;"spread_pct": 0.012800,<br>&nbsp;&nbsp;"best_short_exchange": "Htx",<br>&nbsp;&nbsp;"best_long_exchange": "Grvt"<br>}</div>
      </div>

      <div class="sp-data-card">
        <span class="sp-data-label">MCP</span>
        <h3>Ask your AI assistant</h3>
        <div class="sp-mcp-chat">
          <div class="sp-mcp-user">"Where do shorts earn the most funding on BTC right now?"</div>
          <div class="sp-mcp-tool">settlepal . get_funding</div>
          <div class="sp-mcp-reply">HTX, at 0.0100% per 8 h. GRVT is lowest at −0.0028%.</div>
        </div>
      </div>

      <div class="sp-data-card">
        <span class="sp-data-label">API Key</span>
        <h3>No withdrawal permission</h3>
        <table class="sp-api-table" style="margin-top:10px">
          <tbody>
            <tr><td>Read</td><td class="sp-yes">On</td></tr>
            <tr><td>Futures trading</td><td class="sp-yes">On</td></tr>
            <tr><td>Withdrawals</td><td class="sp-never">Never requested</td></tr>
            <tr><td>IP whitelist</td><td style="font-family:var(--sp-mono)">203.0.113.24</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- ════════ JAVASCRIPT — LIVE DATA ════════ -->`;

  var styles = `#sp-arb-suite {
      --sp-ground: #020605;
      --sp-win: #050b09;
      --sp-surface-900: #0a0a0b;
      --sp-surface-800: #131315;
      --sp-surface-700: #1c1c1f;
      --sp-surface-600: #2e2e33;
      --sp-text-primary: #ededef;
      --sp-text-secondary: #b4b4bb;
      --sp-text-tertiary: #8e8e97;
      --sp-text-muted: #80808a;
      --sp-accent: #10cf90;
      --sp-accent-mid: #00e5cc;
      --sp-accent-light: #8ffffc;
      --sp-profit: #37a471;
      --sp-loss: #e05252;
      --sp-line: rgba(255,255,255,0.08);
      --sp-line-strong: rgba(255,255,255,0.14);
      --sp-mono: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      --sp-body: "Space Grotesk", ui-sans-serif, system-ui, -apple-system, sans-serif;
      background: transparent;
      color: var(--sp-text-primary);
      font-family: var(--sp-body);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.5;
      overflow-x: hidden;
    }

    #sp-arb-suite *, #sp-arb-suite *::before, #sp-arb-suite *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    #sp-arb-suite a { color: inherit; text-decoration: none; }
    #sp-arb-suite img { display: block; max-width: 100%; }
    #sp-arb-suite svg { display: block; }
    #sp-arb-suite ul, #sp-arb-suite ol { list-style: none; }

    /* ── NAV ── */
    .sp-nav { position: sticky; top: 0; z-index: 50; backdrop-filter: blur(12px); background: rgba(2,6,5,0.82); border-bottom: 1px solid var(--sp-line); }
    .sp-nav-inner { max-width: 72rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; height: 56px; }
    .sp-nav-logo { width: 112px; height: auto; }

    /* ── HERO ── */
    .sp-hero { position: relative; padding: 6rem 1rem 0; }
    @media (min-width: 640px) { .sp-hero { padding-top: 7rem; } }
    .sp-hero-inner { max-width: 72rem; margin: 0 auto; padding: 0 0.5rem; }

    .sp-coming-soon {
      color: #b9f7e2; letter-spacing: 0.12em; text-transform: uppercase;
      background: linear-gradient(90deg, #10cf9021, #00e5cc0d);
      border: 1px solid #10cf905c; border-radius: 999px;
      display: inline-flex; align-items: center; gap: 9px;
      min-height: 34px; padding: 0 14px; font-size: 10px; font-weight: 600;
      box-shadow: inset 0 1px rgba(255,255,255,0.04), 0 0 30px #10cf9014;
      margin-bottom: 20px;
    }
    .sp-coming-soon .sp-pulse { width: 6px; height: 6px; border-radius: 50%; background: #10cf90; animation: spPulse 2s ease-in-out infinite; }
    @keyframes spPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

    .sp-hero h1 {
      max-width: 64rem; font-size: 2.6rem;
      font-weight: 500; line-height: 1.02;
      letter-spacing: -0.045em;
    }
    @media (min-width: 640px) { .sp-hero h1 { font-size: 3.75rem; } }
    @media (min-width: 1024px) { .sp-hero h1 { font-size: 4.5rem; } }
    .sp-title-accent {
      color: #10cf90; -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 24px #10cf9021);
      background: linear-gradient(90deg, #10cf90 0%, #00e5cc 72%, #8ffffc 100%);
      -webkit-background-clip: text; background-clip: text;
      width: fit-content; display: block;
    }

    .sp-hero-sub { margin-top: 1.75rem; display: flex; flex-direction: column; gap: 1.75rem; }
    .sp-hero-sub p { max-width: 36rem; font-size: 17px; line-height: 1.6; color: var(--sp-text-secondary); text-wrap: pretty; }
    @media (min-width: 1024px) {
      .sp-hero-sub { flex-direction: row; align-items: end; justify-content: space-between; }
    }
    .sp-exclusive-highlight {
      color: #baf7e3; background: #10cf9017; border: 1px solid #10cf904d;
      border-radius: 999px; display: inline-flex; align-items: center; gap: 8px;
      padding: 0 11px; min-height: 30px; font-size: 10px; font-weight: 500;
      box-shadow: inset 0 1px rgba(255,255,255,0.035);
    }
    .sp-exclusive-highlight i { width: 5px; height: 5px; border-radius: 50%; background: #10cf90; display: inline-block; }

    .sp-trust-strip { margin-top: 2.75rem; display: grid; gap: 1.5rem; }
    @media (min-width: 640px) { .sp-trust-strip { grid-template-columns: repeat(3, 1fr); gap: 3rem; } }
    .sp-trust-item { display: flex; gap: 0.875rem; }
    .sp-trust-icon { flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; background: var(--sp-surface-700); display: grid; place-items: center; color: var(--sp-text-primary); }
    .sp-trust-icon svg { width: 17px; height: 17px; }
    .sp-trust-text { display: flex; flex-direction: column; gap: 2px; padding-top: 1px; }
    .sp-trust-text strong { font-size: 15px; font-weight: 500; color: var(--sp-text-primary); }
    .sp-trust-text span { font-size: 14px; line-height: 1.5; color: var(--sp-text-secondary); }

    /* ── CTA BUTTON ── */
    .sp-cta-wrap { display: flex; justify-content: center; margin-top: 24px; }
    .sp-cta-btn {
      color: #001e17; letter-spacing: 0.04em; text-transform: uppercase;
      background: #10cf90; border-radius: 999px; border: none; cursor: pointer;
      display: inline-flex; justify-content: center; align-items: center; gap: 10px;
      min-height: 46px; padding: 0 20px; font-size: 12px; font-weight: 700;
      font-family: var(--sp-body);
      transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
      box-shadow: 0 14px 34px #10cf9033;
    }
    .sp-cta-btn:hover { transform: translateY(-1px); box-shadow: 0 18px 40px #10cf9044; }
    .sp-cta-btn svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; }

    /* ── DASHBOARD PREVIEW ── */
    .sp-stage-wrap { margin: 2.5rem auto 0; max-width: 85rem; padding: 0 0.75rem; }
    @media (min-width: 640px) { .sp-stage-wrap { margin-top: 3rem; } }
    .sp-stage {
      position: relative; overflow: hidden; border-radius: 4px;
      padding: 2.5rem 0.5rem 3.5rem;
    }
    @media (min-width: 640px) { .sp-stage { padding: 3.5rem 1.5rem 6rem; } }
    @media (min-width: 1024px) { .sp-stage { padding: 3.5rem 1.5rem 10rem; } }
    .sp-stage-glow {
      pointer-events: none; position: absolute; bottom: -12%; left: -8%;
      width: 116%; height: 78%; opacity: 0.15; filter: blur(44px);
    }
    .sp-dash-window {
      position: relative; border-radius: 12px; background: var(--sp-win); border: 1px solid var(--sp-line-strong);
      box-shadow: 0 25px 80px rgba(0,0,0,0.5); overflow: hidden; display: flex;
      max-width: 70rem; margin: 0 auto; text-align: left;
    }

    /* Sidebar */
    .sp-dash-sidebar {
      width: 13rem; flex-shrink: 0; display: flex; flex-direction: column; gap: 2px;
      border-right: 1px solid var(--sp-line); background: var(--sp-surface-900);
      padding: 0.875rem 0.625rem; font-size: 13px; color: var(--sp-text-secondary);
    }
    .sp-dash-sidebar .sp-dash-logo { width: 82px; margin: 0 0.5rem 0.75rem; }
    .sp-dash-sidebar .sp-nav-label { font-size: 11px; color: var(--sp-text-muted); padding: 1rem 0.5rem 0.375rem; }
    .sp-dash-sidebar .sp-nav-item {
      display: flex; align-items: center; gap: 0.625rem; padding: 0.25rem 0.5rem;
      border-radius: 6px; font-size: 13px;
    }
    .sp-dash-sidebar .sp-nav-item.active { background: var(--sp-surface-700); font-weight: 500; color: var(--sp-text-primary); }
    .sp-dash-sidebar .sp-nav-item svg { width: 16px; height: 16px; flex-shrink: 0; }
    .sp-dash-sidebar .sp-trade-row {
      display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem 0.5rem; font-size: 12px;
    }
    .sp-dash-sidebar .sp-trade-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sp-profit); flex-shrink: 0; }
    .sp-dash-sidebar .sp-trade-pair { font-weight: 500; color: var(--sp-text-primary); }
    .sp-dash-sidebar .sp-trade-exch { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--sp-text-muted); }
    .sp-dash-sidebar .sp-trade-pnl { font-family: var(--sp-mono); color: var(--sp-profit); }
    .sp-dash-sidebar .sp-server-status {
      margin-top: auto; display: flex; align-items: center; gap: 0.5rem;
      border-top: 1px solid var(--sp-line); padding-top: 0.75rem; font-size: 12px;
    }
    .sp-dash-sidebar .sp-server-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sp-profit); }

    /* Main content area */
    .sp-dash-main {
      flex: 1; min-width: 0; background: var(--sp-surface-900);
      display: flex; flex-direction: column; padding: 1rem 1.25rem;
    }
    .sp-dash-topbar { display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid var(--sp-line); padding-bottom: 0.75rem; font-size: 12px; color: var(--sp-text-muted); }
    .sp-dash-topbar svg { width: 16px; height: 16px; }

    .sp-dash-cards { display: flex; gap: 1rem; margin-top: 1rem; flex: 1; overflow: hidden; }
    .sp-dash-card {
      flex: 1; min-width: 0; border: 1px solid var(--sp-line-strong); border-radius: 12px;
      padding: 1rem; font-size: 12px; background: rgba(19,19,21,0.6);
    }
    .sp-dash-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
    .sp-dash-card-header .sp-pair-name { display: flex; align-items: center; gap: 0.5rem; }
    .sp-dash-card-header .sp-pair-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--sp-profit); }
    .sp-dash-card-header .sp-pair-label { font-size: 16px; font-weight: 600; }
    .sp-dash-card-header .sp-running { background: rgba(55,164,113,0.15); color: var(--sp-profit); padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
    .sp-dash-card-header .sp-card-pnl { font-family: var(--sp-mono); color: var(--sp-profit); font-weight: 700; }

    .sp-dash-table { width: 100%; border-collapse: collapse; }
    .sp-dash-table td { padding: 3px 0; font-size: 11px; }
    .sp-dash-table .sp-td-label { color: var(--sp-text-muted); width: 70px; }
    .sp-dash-table .sp-td-val { font-family: var(--sp-mono); font-size: 11px; }
    .sp-dash-table .sp-td-head { font-size: 10px; color: var(--sp-text-muted); font-weight: 500; text-align: center; padding-bottom: 4px; }

    .sp-dash-spread-row { display: flex; justify-content: space-around; margin: 0.75rem 0; gap: 0.5rem; text-align: center; }
    .sp-dash-spread-item { }
    .sp-dash-spread-item .sp-spread-label { font-size: 9px; color: var(--sp-text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .sp-dash-spread-item .sp-spread-val { font-family: var(--sp-mono); font-size: 16px; font-weight: 700; }
    .sp-dash-spread-item .sp-spread-sub { font-size: 9px; color: var(--sp-text-muted); font-family: var(--sp-mono); }

    .sp-tg-avatar { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #10cf90, #00e5cc); display: grid; place-items: center; font-size: 12px; font-weight: 700; color: #001e17; flex-shrink: 0; }

    /* ── BENEFIT SECTIONS ── */
    .sp-benefit-section { max-width: 72rem; margin: 0 auto; padding: 6rem 1rem 0; }
    @media (min-width: 640px) { .sp-benefit-section { padding: 7rem 1.5rem 0; } }
    .sp-section-kicker { color: #10cf90; letter-spacing: 0.14em; text-transform: uppercase; font-size: 10px; font-weight: 600; }
    .sp-section-heading-grid { display: grid; grid-template-columns: 1fr 0.72fr; align-items: end; gap: 72px; margin-top: 12px; }
    .sp-section-heading-grid h2 { font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 500; line-height: 1.05; letter-spacing: -0.04em; text-wrap: balance; }
    .sp-section-heading-grid p, .sp-section-intro { font-size: 17px; line-height: 1.7; color: var(--sp-text-secondary); text-wrap: pretty; }

    .sp-pictogram-grid {
      border-top: 1px solid var(--sp-line); border-bottom: 1px solid var(--sp-line);
      display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 38px;
    }
    .sp-pictogram-card {
      border-left: 1px solid var(--sp-line);
      background: linear-gradient(145deg, #10cf9006, transparent 58%);
      min-height: 258px; padding: 25px; position: relative;
      transition: background-color 0.2s;
    }
    .sp-pictogram-card:first-child { border-left: none; }
    .sp-pictogram-card:last-child { border-right: 1px solid var(--sp-line); }
    .sp-pictogram-card:hover { background-color: #10cf9006; border-color: #10cf9040; }
    .sp-card-number { color: var(--sp-text-muted); font-family: var(--sp-mono); font-size: 10px; position: absolute; top: 28px; right: 25px; }
    .sp-pictogram {
      color: #10cf90; background: #10cf9013; border: 1px solid #10cf9033;
      border-radius: 10px; display: grid; place-items: center; width: 48px; height: 48px;
      box-shadow: inset 0 1px rgba(255,255,255,0.035);
    }
    .sp-pictogram svg { width: 23px; height: 23px; fill: none; stroke: currentColor; stroke-width: 1.55; stroke-linecap: round; stroke-linejoin: round; }
    .sp-pictogram-card h3 { font-size: 19px; font-weight: 500; margin: 44px 0 10px; letter-spacing: -0.02em; }
    .sp-pictogram-card p { max-width: 285px; font-size: 13px; line-height: 1.7; color: var(--sp-text-secondary); }

    /* ── SELLING STRIP ── */
    .sp-selling-strip {
      background: linear-gradient(90deg, #10cf901c, #00e5cc0b);
      border: 1px solid #10cf904d; border-radius: 12px;
      display: grid; grid-template-columns: repeat(3, 1fr);
      margin-top: 16px; padding: 8px;
      box-shadow: inset 0 1px rgba(255,255,255,0.043), 0 18px 45px rgba(0,0,0,0.18);
    }
    .sp-strip-item { display: flex; align-items: center; gap: 15px; min-height: 88px; padding: 16px 19px; border-right: 1px solid #10cf9029; }
    .sp-strip-item:last-child { border-right: none; }
    .sp-strip-icon {
      color: #baf7e3; background: #031913b8; border: 1px solid #10cf9047;
      border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
      width: 42px; height: 42px;
    }
    .sp-strip-icon svg { width: 23px; height: 23px; fill: none; stroke: currentColor; stroke-width: 1.55; stroke-linecap: round; stroke-linejoin: round; }
    .sp-strip-text { display: flex; flex-direction: column; gap: 5px; }
    .sp-strip-text strong { display: block; font-size: 13px; font-weight: 600; color: #e6f3ef; }
    .sp-strip-text span { font-size: 11px; line-height: 1.45; color: #91a39e; }

    /* ── STATS ── */
    .sp-stats {
      max-width: 72rem; margin: 4rem auto 0; padding: 0 1.5rem;
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
      border-top: 1px solid var(--sp-line); border-bottom: 1px solid var(--sp-line);
    }
    .sp-stat { padding: 28px 24px; border-left: 1px solid var(--sp-line); }
    .sp-stat:first-child { border-left: none; }
    .sp-stat-val { font-family: var(--sp-mono); font-size: 28px; font-weight: 700; letter-spacing: -0.03em; color: var(--sp-accent); }
    .sp-stat-unit { font-size: 16px; font-weight: 400; color: var(--sp-text-muted); margin-left: 2px; }
    .sp-stat-desc { font-size: 12px; line-height: 1.6; color: var(--sp-text-muted); margin-top: 6px; }

    /* ── EXCHANGE MARQUEE ── */
    .sp-exchanges { max-width: 72rem; margin: 3rem auto 0; padding: 0 1.5rem; overflow: hidden; position: relative; }
    .sp-exchanges-label { font-size: 13px; font-weight: 600; color: var(--sp-text-muted); margin-bottom: 16px; }
    .sp-exchanges-track { display: flex; align-items: center; gap: 2rem; animation: spExScroll 30s linear infinite; }
    .sp-exchanges-track:hover { animation-play-state: paused; }
    .sp-ex-logo { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; }
    .sp-ex-item { display: flex; align-items: center; gap: 8px; flex-shrink: 0; white-space: nowrap; font-size: 12px; color: var(--sp-text-secondary); font-weight: 500; }
    @keyframes spExScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

    /* ── SCANNER SECTION ── */
    .sp-scanner-section { max-width: 72rem; margin: 0 auto; padding: 5rem 1.5rem 0; }
    .sp-scanner-section h2 { font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 500; line-height: 1.05; letter-spacing: -0.04em; text-wrap: balance; }
    .sp-scanner-section > p { font-size: 17px; line-height: 1.6; color: var(--sp-text-secondary); margin-top: 12px; max-width: 42rem; text-wrap: pretty; }

    .sp-scanner-window {
      margin-top: 2rem; border-radius: 12px; background: var(--sp-win);
      border: 1px solid var(--sp-line-strong); overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    }
    .sp-scanner-toolbar { display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--sp-line); font-size: 12px; }
    .sp-scanner-tab { padding: 6px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; color: var(--sp-text-muted); }
    .sp-scanner-tab.active { background: var(--sp-surface-700); color: var(--sp-text-primary); }
    .sp-scanner-size { margin-left: auto; display: flex; align-items: center; gap: 6px; color: var(--sp-text-muted); font-size: 11px; }
    .sp-scanner-size span { background: var(--sp-surface-700); padding: 3px 10px; border-radius: 4px; color: var(--sp-text-primary); font-family: var(--sp-mono); font-weight: 600; }
    .sp-scanner-found { font-size: 11px; color: var(--sp-text-muted); }
    .sp-scanner-found strong { color: var(--sp-accent); font-family: var(--sp-mono); }

    .sp-scanner-layout { display: flex; }
    .sp-scanner-table-wrap { flex: 1; min-width: 0; }

    .sp-scan-table { width: 100%; border-collapse: collapse; font-size: 12px; }
    .sp-scan-table thead th { padding: 8px 12px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--sp-text-muted); font-weight: 500; text-align: left; border-bottom: 1px solid var(--sp-line); }
    .sp-scan-table tbody tr { border-bottom: 1px solid var(--sp-line); transition: background 0.15s; }
    .sp-scan-table tbody tr:hover { background: rgba(16,207,144,0.04); }
    .sp-scan-table tbody td { padding: 10px 12px; white-space: nowrap; }
    .sp-scan-table .sp-td-pair { font-weight: 600; color: var(--sp-text-primary); }
    .sp-scan-table .sp-td-exchanges { color: var(--sp-text-muted); font-size: 11px; }
    .sp-scan-table .sp-td-profit { font-family: var(--sp-mono); font-weight: 700; color: var(--sp-profit); }
    .sp-scan-table .sp-td-num { font-family: var(--sp-mono); color: var(--sp-text-secondary); }

    .sp-scan-blur-rows { position: relative; }
    .sp-scan-blur-rows table { filter: blur(4px); opacity: 0.5; pointer-events: none; }
    .sp-scan-blur-overlay {
      position: absolute; inset: 0; display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 6px; text-align: center; z-index: 5;
    }
    .sp-scan-blur-overlay .sp-lock { font-size: 14px; font-weight: 600; color: var(--sp-accent); }
    .sp-scan-blur-overlay .sp-lock-sub { font-size: 12px; color: var(--sp-text-muted); }

    .sp-scanner-detail {
      width: 260px; flex-shrink: 0; border-left: 1px solid var(--sp-line);
      padding: 1rem 1.25rem; font-size: 12px;
    }
    .sp-scanner-detail .sp-detail-pair { font-size: 15px; font-weight: 700; }
    .sp-scanner-detail .sp-detail-exch { font-size: 11px; color: var(--sp-text-muted); margin-top: 2px; }
    .sp-scanner-detail .sp-detail-spread { font-family: var(--sp-mono); font-size: 22px; font-weight: 700; color: var(--sp-profit); margin-top: 12px; }
    .sp-scanner-detail .sp-detail-spread-sub { font-size: 10px; color: var(--sp-text-muted); }
    .sp-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px; }
    .sp-detail-cell label { font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--sp-text-muted); }
    .sp-detail-cell .sp-dval { font-family: var(--sp-mono); font-size: 13px; font-weight: 600; color: var(--sp-text-primary); margin-top: 2px; }
    .sp-scanner-detail .sp-detail-cta { display: block; margin-top: 16px; font-size: 11px; color: var(--sp-accent); font-weight: 500; }

    .sp-scanner-footer { padding: 10px 12px; font-size: 11px; color: var(--sp-text-muted); border-top: 1px solid var(--sp-line); }
    .sp-scanner-loading { padding: 2rem; text-align: center; font-size: 12px; color: var(--sp-text-muted); }

    /* ── TWO-LEG SECTION ── */
    .sp-twoleg-section { max-width: 72rem; margin: 0 auto; padding: 5rem 1.5rem 0; }
    .sp-twoleg-section h2 { font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 500; line-height: 1.05; letter-spacing: -0.04em; text-wrap: balance; }
    .sp-twoleg-section > p { font-size: 15px; line-height: 1.7; color: var(--sp-text-secondary); margin-top: 12px; max-width: 42rem; }

    .sp-twoleg-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }

    .sp-strategy-form {
      border-radius: 12px; background: var(--sp-win); border: 1px solid var(--sp-line-strong);
      padding: 1.25rem; font-size: 13px;
    }
    .sp-form-title { font-size: 14px; font-weight: 600; margin-bottom: 1rem; }
    .sp-form-row { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid var(--sp-line); }
    .sp-form-row:last-child { border-bottom: none; }
    .sp-form-label { color: var(--sp-text-muted); font-size: 12px; }
    .sp-form-val { font-family: var(--sp-mono); font-size: 12px; color: var(--sp-text-primary); font-weight: 500; }
    .sp-form-val.accent { color: var(--sp-accent); }
    .sp-form-btn {
      margin-top: 1rem; width: 100%; padding: 10px; border-radius: 8px; border: none;
      background: rgba(16,207,144,0.15); color: var(--sp-accent);
      font-family: var(--sp-body); font-size: 13px; font-weight: 600;
      cursor: pointer; transition: background 0.2s;
    }
    .sp-form-btn:hover { background: rgba(16,207,144,0.25); }

    .sp-price-ladder {
      border-radius: 12px; background: var(--sp-win); border: 1px solid var(--sp-line-strong);
      padding: 1.25rem; font-size: 12px;
    }
    .sp-ladder-header { display: flex; justify-content: space-between; margin-bottom: 1rem; }
    .sp-ladder-pair { font-weight: 600; font-size: 14px; }
    .sp-ladder-time { font-size: 11px; color: var(--sp-text-muted); }
    .sp-ladder-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid var(--sp-line); font-size: 12px; }
    .sp-ladder-row:last-child { border-bottom: none; }
    .sp-ladder-exch { color: var(--sp-text-secondary); width: 90px; }
    .sp-ladder-price { font-family: var(--sp-mono); color: var(--sp-text-primary); }
    .sp-ladder-tag { font-size: 9px; font-weight: 600; text-transform: uppercase; padding: 1px 6px; border-radius: 4px; }
    .sp-ladder-tag.short { background: rgba(224,82,82,0.15); color: var(--sp-loss); }
    .sp-ladder-tag.long { background: rgba(55,164,113,0.15); color: var(--sp-profit); }
    .sp-ladder-footer { display: flex; justify-content: space-between; margin-top: 12px; padding-top: 8px; border-top: 1px solid var(--sp-line); font-size: 12px; }
    .sp-ladder-footer .sp-ladder-route { color: var(--sp-text-muted); }
    .sp-ladder-footer .sp-ladder-spread { font-family: var(--sp-mono); font-weight: 700; color: var(--sp-profit); }

    /* ── TELEGRAM / SERVER SECTION ── */
    .sp-watch-section { max-width: 72rem; margin: 0 auto; padding: 5rem 1.5rem 0; }
    .sp-watch-section h2 { font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 500; line-height: 1.05; letter-spacing: -0.04em; text-wrap: balance; }
    .sp-watch-section > p { font-size: 15px; line-height: 1.7; color: var(--sp-text-secondary); margin-top: 12px; max-width: 42rem; }

    .sp-watch-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }

    .sp-phone-frame {
      border-radius: 2.75rem; background: var(--sp-surface-800); border: 1px solid var(--sp-line-strong);
      padding: 10px; max-width: 320px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    .sp-phone-inner {
      border-radius: 2.1rem; background: var(--sp-win); border: 1px solid var(--sp-line);
      overflow: hidden; display: flex; flex-direction: column; min-height: 480px;
    }
    .sp-tg-phone-header { display: flex; align-items: center; gap: 0.5rem; padding: 12px 14px; border-bottom: 1px solid var(--sp-line); }
    .sp-tg-phone-name { font-weight: 600; font-size: 14px; }
    .sp-tg-phone-sub { font-size: 11px; color: var(--sp-text-muted); }
    .sp-tg-bubble { background: var(--sp-surface-700); border-radius: 10px 10px 10px 2px; padding: 10px 12px; font-size: 12px; line-height: 1.55; color: var(--sp-text-secondary); }
    .sp-tg-bubble .sp-bubble-time { font-size: 9px; color: var(--sp-text-muted); text-align: right; margin-top: 4px; }
    .sp-tg-bubble .sp-bubble-profit { color: var(--sp-profit); font-weight: 600; }

    .sp-server-card {
      border-radius: 12px; background: var(--sp-win); border: 1px solid var(--sp-line-strong);
      padding: 1.25rem; font-size: 12px;
    }
    .sp-server-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; margin-bottom: 1rem; }
    .sp-server-badge .sp-online-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sp-profit); }
    .sp-server-badge .sp-online-label { color: var(--sp-profit); }
    .sp-server-grid { display: grid; grid-template-columns: auto 1fr; gap: 4px 16px; font-size: 12px; margin-top: 0.75rem; }
    .sp-server-grid dt { color: var(--sp-text-muted); }
    .sp-server-grid dd { color: var(--sp-text-primary); font-family: var(--sp-mono); }

    .sp-api-table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 11px; }
    .sp-api-table th { text-align: left; padding: 6px 8px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--sp-text-muted); font-weight: 500; border-bottom: 1px solid var(--sp-line); }
    .sp-api-table td { padding: 5px 8px; border-bottom: 1px solid var(--sp-line); color: var(--sp-text-secondary); }
    .sp-api-table .sp-yes { color: var(--sp-profit); font-weight: 600; }
    .sp-api-table .sp-never { color: var(--sp-loss); font-weight: 600; }

    .sp-server-note { font-size: 12px; line-height: 1.6; color: var(--sp-text-muted); margin-top: 16px; max-width: 48rem; }

    /* ── DATA / FUNDING SECTION ── */
    .sp-data-section { max-width: 72rem; margin: 0 auto; padding: 5rem 1.5rem 0; }
    .sp-data-section h2 { font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 500; line-height: 1.05; letter-spacing: -0.04em; text-wrap: balance; }

    .sp-data-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.875rem; margin-top: 3.5rem; }
    .sp-data-card {
      border-radius: 12px; background: rgba(19,19,21,0.6); border: 1px solid var(--sp-line);
      padding: 1.25rem 1.5rem; font-size: 12px; display: flex; flex-direction: column; gap: 1rem;
    }
    .sp-data-card.full { grid-column: 1 / -1; }
    .sp-data-card .sp-data-label { font-family: var(--sp-mono); font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--sp-text-muted); font-weight: 400; }
    .sp-data-card h3 { font-size: 16px; font-weight: 600; margin-top: 6px; }
    .sp-data-card .sp-data-desc { font-size: 12px; color: var(--sp-text-muted); margin-top: 4px; line-height: 1.5; }

    .sp-funding-table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 11px; font-family: var(--sp-mono); }
    .sp-funding-table th { padding: 6px 8px; font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--sp-text-muted); font-weight: 500; text-align: right; border-bottom: 1px solid var(--sp-line); font-family: var(--sp-body); }
    .sp-funding-table th:first-child { text-align: left; }
    .sp-funding-table td { padding: 5px 8px; text-align: right; border-bottom: 1px solid var(--sp-line); color: var(--sp-text-secondary); }
    .sp-funding-table td:first-child { text-align: left; font-weight: 600; color: var(--sp-text-primary); font-family: var(--sp-body); }
    .sp-funding-table .sp-fund-neg { color: var(--sp-loss); }
    .sp-funding-table .sp-fund-pos { color: var(--sp-profit); }
    .sp-funding-table-note { font-size: 11px; color: var(--sp-text-muted); margin-top: 8px; }

    .sp-api-mock { background: var(--sp-surface-900); border-radius: 8px; padding: 12px; margin-top: 10px; font-family: var(--sp-mono); font-size: 10px; line-height: 1.7; color: var(--sp-text-secondary); overflow-x: auto; }
    .sp-api-mock .sp-api-status { color: var(--sp-profit); }

    .sp-mcp-chat { margin-top: 10px; }
    .sp-mcp-user { background: var(--sp-surface-700); border-radius: 8px; padding: 10px 12px; font-size: 12px; color: var(--sp-text-primary); }
    .sp-mcp-tool { font-family: var(--sp-mono); font-size: 10px; color: var(--sp-accent); margin: 6px 0; }
    .sp-mcp-reply { font-size: 12px; color: var(--sp-text-secondary); line-height: 1.6; }

    /* ── FINAL CTA ── */
    .sp-final-section {
      border-top: 1px solid var(--sp-line); background-color: transparent;
      background-image: linear-gradient(#10cf9006 1px, transparent 1px), linear-gradient(90deg, #10cf9006 1px, transparent 1px);
      background-size: 64px 64px; margin-top: 6rem; padding: 5.5rem 1.5rem 2.25rem;
      position: relative; overflow: hidden;
    }
    .sp-final-glow {
      filter: blur(150px); opacity: 0.1; pointer-events: none;
      background: #10cf90; border-radius: 50%; width: 760px; height: 540px;
      position: absolute; top: -330px; left: 50%; transform: translateX(-50%);
    }
    .sp-final-inner { text-align: center; display: flex; flex-direction: column; align-items: center; max-width: 70rem; margin: 0 auto; position: relative; }
    .sp-final-inner .sp-section-kicker { margin-bottom: 0; }
    .sp-final-inner h2 { font-size: clamp(2.75rem, 6vw, 4.75rem); font-weight: 500; line-height: 1; letter-spacing: -0.055em; margin-top: 18px; text-wrap: balance; }
    .sp-final-lead { color: #dbe6e3; margin: 18px 0 0; font-size: 18px; line-height: 1.6; }
    .sp-final-copy { max-width: 650px; color: var(--sp-text-secondary); margin: 12px auto 0; font-size: 14px; line-height: 1.75; }
    .sp-final-release { color: #a7b7b2; max-width: 620px; margin: 18px auto 0; font-size: 13px; font-weight: 500; }
    .sp-join-button {
      color: #001e17; letter-spacing: 0.06em; text-transform: uppercase;
      background: #10cf90; border-radius: 999px; border: none; cursor: pointer;
      display: inline-flex; justify-content: center; align-items: center; gap: 11px;
      min-height: 48px; margin-top: 23px; padding: 0 21px;
      font-size: 12px; font-weight: 700; font-family: var(--sp-body);
      transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
      box-shadow: 0 16px 38px #10cf9033;
    }
    .sp-join-button:hover { transform: translateY(-1px); }
    .sp-join-button svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; }
    .sp-member-note { color: var(--sp-text-muted); margin: 12px 0 0; font-size: 11px; }
    .sp-final-divider { background: linear-gradient(90deg, transparent, #10cf9040, transparent); width: 100%; height: 1px; margin: 48px 0 28px; }
    .sp-final-label { color: #a9b8b4; letter-spacing: 0.17em; text-transform: uppercase; align-self: flex-start; font-size: 9px; font-weight: 600; }

    .sp-member-benefits {
      border-top: 1px solid var(--sp-line); border-bottom: 1px solid var(--sp-line);
      display: grid; grid-template-columns: repeat(4, 1fr); width: 100%; margin-top: 16px;
    }
    .sp-member-benefit { border-left: 1px solid var(--sp-line); padding: 20px; text-align: left; }
    .sp-member-benefit:first-child { border-left: none; }
    .sp-small-icon {
      color: #10cf90; background: #10cf9012; border: 1px solid #10cf9033;
      border-radius: 8px; display: grid; place-items: center; width: 38px; height: 38px;
    }
    .sp-small-icon svg { width: 18px; height: 18px; }
    .sp-member-benefit h3 { font-size: 14px; font-weight: 600; margin-top: 12px; }
    .sp-member-benefit p { font-size: 12px; color: var(--sp-text-secondary); margin-top: 4px; line-height: 1.5; }

    .sp-final-signature {
      color: #83928e; letter-spacing: 0.04em; display: flex; align-items: center; gap: 12px;
      margin: 28px 0 0; font-size: 11px;
    }
    .sp-final-signature strong { color: var(--sp-text-secondary); }

    /* ── RESPONSIVE ── */
    @media (max-width: 991px) {
      .sp-section-heading-grid { grid-template-columns: 1fr; gap: 20px; }
      .sp-dash-sidebar { display: none; }
      .sp-selling-strip { grid-template-columns: 1fr; }
      .sp-twoleg-layout, .sp-watch-layout { grid-template-columns: 1fr; }
      .sp-data-grid { grid-template-columns: 1fr; }
      .sp-member-benefits { grid-template-columns: repeat(2, 1fr); }
      .sp-scanner-detail { display: none; }
    }
    @media (max-width: 767px) {
      .sp-trust-strip { grid-template-columns: 1fr; }
      .sp-pictogram-grid { grid-template-columns: 1fr; }
      .sp-pictogram-card { border-left: none; border-bottom: 1px solid var(--sp-line); min-height: auto; }
      .sp-stats { grid-template-columns: repeat(2, 1fr); }
      .sp-stat { border-left: none; }
      .sp-stat:nth-child(2n) { border-left: 1px solid var(--sp-line); }
      .sp-hero { padding-top: 4rem; }
      .sp-coming-soon { flex-wrap: wrap; gap: 6px; padding: 7px 10px; font-size: 8px; }
    }
    @media (max-width: 480px) {
      .sp-member-benefits { grid-template-columns: 1fr; }
      .sp-member-benefit { border-left: none; border-bottom: 1px solid var(--sp-line); }
      .sp-stats { grid-template-columns: 1fr; }
      .sp-stat { border-left: none; border-bottom: 1px solid var(--sp-line); }
      .sp-dash-cards { flex-direction: column; }
    }

    @media (prefers-reduced-motion: reduce) {
      .sp-exchanges-track { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
      .sp-coming-soon .sp-pulse { animation: none; }
    }`;

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap";
    document.head.appendChild(link);
    var s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = styles;
    document.head.appendChild(s);
  }

  function ensureMarkup() {
    if (document.getElementById(ROOT_ID)) return;
    var wrapper = document.createElement("div");
    wrapper.id = ROOT_ID;
    wrapper.setAttribute("aria-label", "SettlePal Arbitrage Suite — Coming Soon");
    wrapper.innerHTML = markup;
    if (loaderScript && loaderScript.parentNode) {
      loaderScript.parentNode.insertBefore(wrapper, loaderScript);
    } else {
      document.body.appendChild(wrapper);
    }
  }

  function initLiveData() {
    (function () {
      'use strict';

      var root = document.getElementById('sp-arb-suite');
      if (!root || root.getAttribute('data-sp-ready') === 'true') return;
      root.setAttribute('data-sp-ready', 'true');

      var ENDPOINT = 'https://api2.settlepal.com/api/public/arbitrage/prices';
      var REFRESH_MS = 15000;
      var refreshTimer = null;
      var stopped = false;

      var exNames = {
        binance: 'Binance', bybit: 'Bybit', coinbase: 'Coinbase', cryptocom: 'Crypto.com',
        gateio: 'Gate.io', kucoin: 'KuCoin', mexc: 'MEXC', okx: 'OKX',
        kraken: 'Kraken', bitget: 'Bitget', bingx: 'BingX', htx: 'HTX',
        lbank: 'LBank', phemex: 'Phemex', blofin: 'BloFin', hyperliquid: 'Hyperliquid',
        poloniex: 'Poloniex', weex: 'WEEX', aster: 'Aster', toobit: 'Toobit',
        deribit: 'Deribit', lighter: 'Lighter'
      };

      function esc(str) {
        var d = document.createElement('div');
        d.appendChild(document.createTextNode(str == null ? '' : String(str)));
        return d.innerHTML;
      }

      function dispEx(key) {
        var k = String(key || '').toLowerCase().replace(/[-_\s]+/g, '');
        return exNames[k] || String(key || '').replace(/[-_]+/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });
      }

      function splitSym(symbol) {
        var raw = String(symbol || '').toUpperCase();
        var quotes = ['USDT', 'USDC', 'USD', 'BTC', 'ETH'];
        for (var i = 0; i < quotes.length; i++) {
          if (raw.length > quotes[i].length && raw.slice(-quotes[i].length) === quotes[i]) {
            return raw.slice(0, -quotes[i].length) + '/' + quotes[i];
          }
        }
        return raw;
      }

      function demoStat(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

      function computeSpreads(prices) {
        var results = [];
        var symbols = Object.keys(prices);
        for (var s = 0; s < symbols.length; s++) {
          var sym = symbols[s];
          var exPrices = prices[sym];
          var exchanges = Object.keys(exPrices);
          if (exchanges.length < 2) continue;

          var minPrice = Infinity, maxPrice = -Infinity;
          var minEx = '', maxEx = '';
          for (var e = 0; e < exchanges.length; e++) {
            var p = exPrices[exchanges[e]];
            if (p < minPrice) { minPrice = p; minEx = exchanges[e]; }
            if (p > maxPrice) { maxPrice = p; maxEx = exchanges[e]; }
          }
          if (minPrice <= 0 || !isFinite(minPrice)) continue;
          var spread = ((maxPrice - minPrice) / minPrice) * 100;
          if (spread > 0.001) {
            results.push({
              symbol: sym,
              buyExchange: minEx,
              sellExchange: maxEx,
              lowestPrice: minPrice,
              highestPrice: maxPrice,
              spreadPercent: spread,
              allPrices: exPrices
            });
          }
        }
        results.sort(function (a, b) { return b.spreadPercent - a.spreadPercent; });
        return results;
      }

      function renderScanner(opps) {
        var loading = root.querySelector('[data-sp-scanner-loading]');
        var table = root.querySelector('[data-sp-scanner-table]');
        var tbody = root.querySelector('[data-sp-scanner-body]');
        var countEl = root.querySelector('[data-sp-found-count]');

        if (!opps || !opps.length) return;

        if (loading) loading.style.display = 'none';
        if (table) table.style.display = '';
        if (countEl) countEl.textContent = String(opps.length);

        var rows = opps.slice(0, 8);
        var html = '';
        for (var i = 0; i < rows.length; i++) {
          var o = rows[i];
          var conf = demoStat(55, 88);
          var cycles = demoStat(12, 65);
          html += '<tr>' +
            '<td class="sp-td-pair">' + esc(splitSym(o.symbol)) + '</td>' +
            '<td class="sp-td-exchanges">' + esc(dispEx(o.buyExchange)) + ' / ' + esc(dispEx(o.sellExchange)) + '</td>' +
            '<td class="sp-td-profit">' + o.spreadPercent.toFixed(3) + '%</td>' +
            '<td class="sp-td-num">' + cycles + '</td>' +
            '<td class="sp-td-num">' + conf + '</td>' +
            '</tr>';
        }
        if (tbody) tbody.innerHTML = html;

        if (rows.length > 0) {
          var top = rows[0];
          var dPair = root.querySelector('[data-sp-detail-pair]');
          var dExch = root.querySelector('[data-sp-detail-exch]');
          var dSpread = root.querySelector('[data-sp-detail-spread]');
          var dCycles = root.querySelector('[data-sp-detail-cycles]');
          var dFees = root.querySelector('[data-sp-detail-fees]');
          var dConf = root.querySelector('[data-sp-detail-conf]');
          var dVola = root.querySelector('[data-sp-detail-vola]');
          if (dPair) dPair.textContent = splitSym(top.symbol);
          if (dExch) dExch.textContent = dispEx(top.buyExchange) + ' / ' + dispEx(top.sellExchange);
          if (dSpread) dSpread.textContent = top.spreadPercent.toFixed(3) + '%';
          if (dCycles) dCycles.textContent = String(demoStat(20, 55));
          if (dFees) dFees.textContent = '0.' + demoStat(18, 32) + '%';
          if (dConf) dConf.textContent = String(demoStat(60, 85));
          if (dVola) dVola.textContent = '$' + demoStat(5, 90) + '.' + demoStat(0, 9) + 'M';
        }
      }

      function renderLadder(opps, prices) {
        var ladderRows = root.querySelector('[data-sp-ladder-rows]');
        var ladderPair = root.querySelector('[data-sp-ladder-pair]');
        var ladderTime = root.querySelector('[data-sp-ladder-time]');
        var ladderRoute = root.querySelector('[data-sp-ladder-route]');
        var ladderPct = root.querySelector('[data-sp-ladder-pct]');

        var target = null;
        for (var i = 0; i < opps.length; i++) {
          if (Object.keys(opps[i].allPrices).length >= 4) { target = opps[i]; break; }
        }
        if (!target) target = opps[0];
        if (!target) return;

        if (ladderPair) ladderPair.textContent = splitSym(target.symbol);
        var now = new Date();
        if (ladderTime) ladderTime.textContent = String(now.getUTCHours()).padStart(2, '0') + ':' + String(now.getUTCMinutes()).padStart(2, '0') + ' UTC';

        var entries = [];
        var ap = target.allPrices;
        var exKeys = Object.keys(ap);
        for (var j = 0; j < exKeys.length; j++) {
          entries.push({ exchange: exKeys[j], price: ap[exKeys[j]] });
        }
        entries.sort(function (a, b) { return b.price - a.price; });

        var html = '';
        for (var k = 0; k < entries.length; k++) {
          var e = entries[k];
          var tag = '';
          if (k === 0) tag = '<span class="sp-ladder-tag short">short</span>';
          if (k === entries.length - 1) tag = '<span class="sp-ladder-tag long">long</span>';
          html += '<div class="sp-ladder-row">' +
            '<span class="sp-ladder-exch">' + esc(dispEx(e.exchange)) + '</span>' +
            '<span class="sp-ladder-price">' + e.price.toPrecision(6) + '</span>' +
            tag +
            '</div>';
        }
        if (ladderRows) ladderRows.innerHTML = html;
        if (ladderRoute) ladderRoute.textContent = dispEx(entries[entries.length - 1].exchange) + ' → ' + dispEx(entries[0].exchange);
        if (ladderPct) ladderPct.textContent = '+' + target.spreadPercent.toFixed(2) + '%';
      }

      function scheduleNext() {
        if (stopped || document.hidden) return;
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(fetchData, REFRESH_MS);
      }

      function fetchData() {
        if (stopped) return;
        clearTimeout(refreshTimer);

        fetch(ENDPOINT, { method: 'GET', cache: 'no-store', headers: { 'Accept': 'application/json' } })
          .then(function (r) { return r.json(); })
          .then(function (payload) {
            if (payload && payload.success && payload.data && payload.data.prices) {
              var opps = computeSpreads(payload.data.prices);
              renderScanner(opps);
              renderLadder(opps, payload.data.prices);
            }
          })
          .catch(function () {})
          .then(function () { scheduleNext(); });
      }

      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          clearTimeout(refreshTimer);
        } else if (!stopped) {
          fetchData();
        }
      });

      window.addEventListener('pagehide', function () {
        stopped = true;
        clearTimeout(refreshTimer);
      }, { once: true });

      fetchData();
    })();
  }

  function initialize() {
    ensureStyles();
    ensureMarkup();
    initLiveData();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
