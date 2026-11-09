/**
 * SettlePal Arbitrage Suite — Webflow embed
 * Source: /Users/toad/Documents/webflow/home/arbitrage-suite.rtf
 *
 * Usage:
 * <script defer src="https://cdn.jsdelivr.net/gh/nickworking/embed@main/arbitrage-suite.js"></script>
 */
(function () {
  "use strict";

  var loaderScript = document.currentScript;
  var STYLE_ID = "sp-arb-suite-styles";
  var ROOT_SELECTOR = "#sp-arb-suite";

  var markup = `<section id="home-hero" class="relative pt-24 sm:pt-28"><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="sp-coming-soon"><span></span>Coming Soon <i>·</i> Exclusively for Platinum Members <i>·</i> 2027</div><h1 class="max-w-4xl text-[2.6rem] sm:text-6xl lg:text-[4.5rem] font-medium tracking-[-0.045em] leading-[1.02] text-text-primary"><span class="block sp-title-accent">Earn the spread,</span><span class="block">not the direction</span></h1>

        <div class="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><p class="max-w-xl text-[17px] leading-relaxed text-text-secondary text-pretty">The complete market-neutral crypto arbitrage suite.</p>
            <div class="flex flex-col items-start gap-3 lg:items-end"><div class="flex flex-wrap gap-2.5"></div>
                <p class="text-[13px] leading-relaxed text-text-tertiary lg:text-right"><span class="block sp-exclusive-highlight"><i></i>Exclusive product access for Platinum members and above.</span></p></div></div>

        <ul class="mt-11 grid gap-6 sm:grid-cols-3 sm:gap-12"><li class="flex gap-3.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-700 text-text-primary" aria-hidden="true"><svg class="h-[17px] w-[17px]" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z"></path><path d="M9 12l2 2 4-4"></path></svg></span>
                    <span class="flex flex-col gap-0.5 pt-px"><span class="text-[15px] font-medium text-text-primary">Non-custodial</span>
                        <span class="text-sm leading-relaxed text-text-secondary text-pretty">Trade-only API keys. Your funds never move.</span></span></li><li class="flex gap-3.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-700 text-text-primary" aria-hidden="true"><svg class="h-[17px] w-[17px]" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="7" rx="1.5"></rect><rect x="4" y="13" width="16" height="7" rx="1.5"></rect><path d="M8 7.5h.01M8 16.5h.01"></path></svg></span>
                    <span class="flex flex-col gap-0.5 pt-px"><span class="text-[15px] font-medium text-text-primary">Your own server</span>
                        <span class="text-sm leading-relaxed text-text-secondary text-pretty">Will be set up and run by SettlePal, never shared.</span></span></li><li class="flex gap-3.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-700 text-text-primary" aria-hidden="true"><svg class="h-[17px] w-[17px]" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"></path><path d="M7 15l3-4 3 2 4-6"></path></svg></span>
                    <span class="flex flex-col gap-0.5 pt-px"><span class="text-[15px] font-medium text-text-primary">No fee in a losing week</span>
                        <span class="text-sm leading-relaxed text-text-secondary text-pretty">Designed exclusively for Platinum members and above.</span></span></li></ul></div>

    <div class="sp-dashboard-cta-wrap"><a class="sp-dashboard-cta" href="https://login.settlepal.com/login">Start Today <svg viewbox="0 0 20 20" aria-hidden="true"><path d="M3 10h14M12.5 5.5 17 10l-4.5 4.5"></path></svg></a></div><div class="mx-auto mt-10 max-w-[85rem] px-2 sm:mt-12 sm:px-3"><div class="site-stage relative overflow-hidden rounded-[4px] px-2 pb-14 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:pb-40">
            <div class="relative mx-auto max-w-[70rem]"><div class="rounded-xl bg-site-win border border-site-line-strong shadow-window overflow-hidden flex text-left" aria-hidden="true" data-tape-root><div class="hidden w-52 shrink-0 flex-col gap-0.5 border-r border-site-line bg-surface-900 px-2.5 py-3.5 text-[13px] text-text-secondary lg:flex"><span class="flex items-center px-2 pb-3.5 text-text-primary"><img src="https://found-oak-10658508.figma.site/settlepal-logo.png" alt="SettlePal" class="sp-dashboard-logo"></span>
        <span class="flex items-center justify-between px-2 pb-1.5 text-[11px] text-text-muted">Overview
            <span class="flex gap-px rounded-md border border-site-line p-px text-[10px]"><span class="rounded bg-surface-700 px-1.5 py-px text-text-primary">Session</span>
                <span class="rounded px-1.5 py-px">Today</span></span></span><span class="flex items-center gap-2 px-2 py-1 text-xs"><span class="h-1.5 w-1.5 shrink-0 rounded-full bg-profit"></span>
                <span class="font-medium text-text-primary">MEW</span>
                <span class="min-w-0 flex-1 truncate text-text-muted">Binance/Bybit</span>
                <span class="font-mono text-profit" data-pnl="0">+$129.95</span></span><span class="flex items-center gap-2 px-2 py-1 text-xs"><span class="h-1.5 w-1.5 shrink-0 rounded-full bg-profit"></span>
                <span class="font-medium text-text-primary">AERO</span>
                <span class="min-w-0 flex-1 truncate text-text-muted">Binance/Hyperliquid</span>
                <span class="font-mono text-profit" data-pnl="1">+$41.30</span></span><span class="px-2 pb-1 pt-4 text-[11px] text-text-muted">Trading</span>
        <span class="flex items-center gap-2.5 rounded-md px-2 py-1 bg-surface-700 font-medium text-text-primary"><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Dashboard</span></span>
        <span class="my-1 flex flex-col overflow-hidden rounded-lg border border-surface-700 bg-surface-900/40"><span class="flex items-center gap-1.5 px-[5px] py-1"><span class="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-surface-700"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M17 20V4M17 4L20 7M17 4L14 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V20M7 20L10 17M7 20L4 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>Spread Scanner</span>
            <span class="ml-[31px] h-px bg-surface-700"></span>
            <span class="flex items-center gap-1.5 px-[5px] py-1"><span class="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-surface-700"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 16C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15C15.2239 15 15 15.2239 15 15.5C15 15.7761 15.2239 16 15.5 16Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>Funding Scanner</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L5 14H11V21L19 10H13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Signals</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z" stroke="currentColor"></path><path d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 7V5.60322C18 4.28916 16.7544 3.33217 15.4847 3.67075L4.48467 6.60409C3.60917 6.83756 3 7.63046 3 8.53656V9" stroke="currentColor"></path></svg><span class="min-w-0 flex-1 truncate">Portfolio</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 6L12 12L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.8883 10.5C21.1645 5.68874 17.013 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16H21.4C21.7314 16 22 16.2686 22 16.6V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">History</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Listings Calendar</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="currentColor" stroke-linecap="round"></path><path d="M13 14V14C13 11.2386 15.2386 9 18 9V9C20.7614 9 23 11.2386 23 14V14.5" stroke="currentColor" stroke-linecap="round"></path><path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Copy trading</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M15 19H9V12.5V8.6C9 8.26863 9.26863 8 9.6 8H14.4C14.7314 8 15 8.26863 15 8.6V14.5V19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 5H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4 19H15V15.1C15 14.7686 15.2686 14.5 15.6 14.5H20.4C20.7314 14.5 21 14.7686 21 15.1V18.4C21 18.7314 20.7314 19 20.4 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 19V13.1C9 12.7686 8.73137 12.5 8.4 12.5H3.6C3.26863 12.5 3 12.7686 3 13.1V18.4C3 18.7314 3.26863 19 3.6 19H9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Leaderboard</span></span><span class="px-2 pb-1 pt-4 text-[11px] text-text-muted">Account</span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Profile</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Settings</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 6L10 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 8.5L3 12L6.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 8.5L21 12L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">AI assistants &amp; API</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12ZM10 12H22V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 12V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">API Keys</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M6 18.01L6.01 17.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6.01L6.01 5.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 9.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V9.4C22 9.73137 21.7314 10 21.4 10H2.6C2.26863 10 2 9.73137 2 9.4Z" stroke="currentColor" stroke-width="1.5"></path><path d="M2 21.4V14.6C2 14.2686 2.26863 14 2.6 14H21.4C21.7314 14 22 14.2686 22 14.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="currentColor" stroke-width="1.5"></path></svg><span class="min-w-0 flex-1 truncate">Server</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V9ZM22 9H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Billing</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 18V17C1 15.3431 2.34315 14 4 14V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 18V17C23 15.3431 21.6569 14 20 14V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Referrals</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M16 13C13.2386 13 11 11.8807 11 10.5C11 9.11929 13.2386 8 16 8C18.7614 8 21 9.11929 21 10.5C21 11.8807 18.7614 13 16 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 14.5C11 15.8807 13.2386 17 16 17C18.7614 17 21 15.8807 21 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 9.5C3 10.8807 5.23858 12 8 12C9.12583 12 10.1647 11.814 11.0005 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 13C3 14.3807 5.23858 15.5 8 15.5C9.12561 15.5 10.1643 15.314 11 15.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 5.5V16.5C3 17.8807 5.23858 19 8 19C9.12563 19 10.1643 18.8139 11 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 8.5V5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 10.5V18.5C11 19.8807 13.2386 21 16 21C18.7614 21 21 19.8807 21 18.5V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8C5.23858 8 3 6.88071 3 5.5C3 4.11929 5.23858 3 8 3C10.7614 3 13 4.11929 13 5.5C13 6.88071 10.7614 8 8 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Fee Rebates</span></span><span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Messages</span><span class="min-w-4 rounded-full bg-text-primary px-1 py-0.5 text-center text-[9px] font-bold leading-none text-surface-900">1</span></span>
        <span class="px-2 pb-1 pt-4 text-[11px] text-text-muted">Learn</span>
        <span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M5 19.5V5C5 3.89543 5.89543 3 7 3H18.4C18.7314 3 19 3.26863 19 3.6V21" stroke="currentColor" stroke-linecap="round"></path><path d="M9 7L15 7" stroke="currentColor" stroke-linecap="round"></path><path d="M6.5 15L19 15" stroke="currentColor" stroke-linecap="round"></path><path d="M6.5 18L19 18" stroke="currentColor" stroke-linecap="round"></path><path d="M6.5 21L19 21" stroke="currentColor" stroke-linecap="round"></path><path d="M6.5 18C5.5 18 5 17.3284 5 16.5C5 15.6716 5.5 15 6.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 21C5.5 21 5 20.3284 5 19.5C5 18.6716 5.5 18 6.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Knowledge Base</span><svg class="h-3.5 w-3.5 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
        <span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10L16 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18L16 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">Pricing</span></span>
        <span class="flex items-center gap-2.5 rounded-md px-2 py-1 "><svg class="h-4 w-4 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L18 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 10H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 14L18 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 18L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 18V14H9V18H6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="min-w-0 flex-1 truncate">News</span></span>
        <span class="mt-auto flex items-center gap-2 border-t border-site-line px-2 pt-3 text-xs"><span class="h-1.5 w-1.5 rounded-full bg-profit"></span>Server · Tokyo · online</span></div>

    <div class="flex min-w-0 flex-1 flex-col bg-surface-900"><div class="flex h-11 items-center gap-3 border-b border-site-line px-4 text-xs text-text-muted"><svg class="hidden h-4 w-4 shrink-0 lg:block" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M19 21L5 21C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.25 10L5.5 12L7.25 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 21V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span class="flex w-full max-w-72 items-center gap-2 rounded-md border border-site-line bg-surface-900/40 px-2.5 py-1.5 lg:mx-auto"><svg class="h-3.5 w-3.5 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M17 17L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                Search<span class="ml-auto rounded border border-site-line px-1 font-mono text-[10px]">/</span></span>
            <span class="ml-auto flex shrink-0 items-center gap-3.5 lg:ml-0"><span class="relative hidden sm:block"><svg class="h-4 w-4" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span class="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-site-cta px-0.5 text-[9px] font-semibold text-site-cta-ink">1</span></span>
                <svg class="hidden h-4 w-4 sm:block" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <svg class="hidden h-4 w-4 sm:block" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-surface-600 text-text-secondary"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></span></div>

        <div class="flex flex-col gap-3.5 p-3 sm:p-5"><span class="text-xl font-medium tracking-[-0.02em] text-text-primary">Dashboard</span>

            <div class="flex flex-wrap gap-2 text-[11px] text-text-muted"><span class="flex items-baseline gap-2 rounded-md border border-site-line px-2.5 py-1.5">Total Balance<span class="font-mono text-sm font-semibold text-text-primary">$22,156.00</span></span>
                <span class="flex items-baseline gap-2 rounded-md border border-site-line px-2.5 py-1.5">Today's PnL<span class="num font-mono text-sm font-semibold text-profit" data-num data-num-key="tape:today" data-num-v="171.25">+$171.25</span></span>
                <span class="flex items-baseline gap-2 rounded-md border border-site-line px-2.5 py-1.5">Active Cards<span class="font-mono text-sm font-semibold text-text-primary">2</span>1 pos</span></div>

            <div class="flex items-center gap-4 border-b border-site-line text-xs"><span class="-mb-px border-b-2 border-text-primary pb-2 font-medium text-text-primary">Active <span class="text-text-muted">2</span></span>
                <span class="pb-2 text-text-muted">Closed 194</span>
                <span class="hidden items-center gap-1 pb-2 text-text-secondary sm:flex"><svg class="h-3 w-3 fill-current" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Stop All</span>
                <span class="mb-1.5 ml-auto hidden w-40 items-center gap-1.5 rounded-md border border-site-line px-2 py-1 text-text-muted md:flex"><svg class="h-3 w-3 shrink-0" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M17 17L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Search cards...</span>
                <span class="mb-1.5 hidden items-center gap-1 text-text-muted md:flex"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M10 14H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 18H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 20V4M19 20L22 17M19 20L16 17M19 4L22 7M19 4L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Sort</span>
                <span class="mb-1.5 hidden gap-px rounded-md border border-site-line p-px text-text-muted md:flex"><span class="rounded bg-surface-700 p-1 text-text-primary"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M14 20.4V14.6C14 14.2686 14.2686 14 14.6 14H20.4C20.7314 14 21 14.2686 21 14.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z" stroke="currentColor" stroke-width="1.5"></path><path d="M3 20.4V14.6C3 14.2686 3.26863 14 3.6 14H9.4C9.73137 14 10 14.2686 10 14.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"></path><path d="M14 9.4V3.6C14 3.26863 14.2686 3 14.6 3H20.4C20.7314 3 21 3.26863 21 3.6V9.4C21 9.73137 20.7314 10 20.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z" stroke="currentColor" stroke-width="1.5"></path><path d="M3 9.4V3.6C3 3.26863 3.26863 3 3.6 3H9.4C9.73137 3 10 3.26863 10 3.6V9.4C10 9.73137 9.73137 10 9.4 10H3.6C3.26863 10 3 9.73137 3 9.4Z" stroke="currentColor" stroke-width="1.5"></path></svg></span>
                    <span class="p-1"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H7.5H12H16.5H21M3 12V16.5M3 12V7.5M21 12V16.5M21 12V7.5M3 16.5V20.4C3 20.7314 3.26863 21 3.6 21H7.5H12H16.5H20.4C20.7314 21 21 20.7314 21 20.4V16.5M3 16.5H7.5H12H16.5H21M21 7.5V3.6C21 3.26863 20.7314 3 20.4 3H16.5H12H7.5H3.6C3.26863 3 3 3.26863 3 3.6V7.5M21 7.5H16.5H12H7.5H3" stroke="currentColor" stroke-width="1.5"></path></svg></span></span>
                <span class="mb-1.5 ml-auto flex items-center gap-1 rounded-full bg-site-cta px-3 py-1 font-medium text-site-cta-ink md:ml-0"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>New Card</span></div>

            <div class="grid gap-3 md:grid-cols-2"><div class="flex relative min-w-0 flex-col rounded-xl border border-surface-600 bg-surface-800 p-3 text-xs" data-tape="7|4623,4623,4623,4623,4623,4624,4623,4623,4619,4621,4621,4621,4621,4621,4621,4621,4621,4622,4622,4621,4622,4622,4622,4622,4623,4623,4623,4623,4624,4624,4624,4624,4624,4624,4624,4624,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4625,4628,4629,4629,4629,4629,4629,4629,4629,4629,4629,4630,4629,4629,4629,4629,4629,4629,4627,4627,4626,4627,4627,4627,4627,4627,4627,4626,4626,4627,4627,4627,4627,4627,4627,4627,4627,4628,4627,4627,4628,4628,4627,4627,4628,4627,4627,4627,4627,4627,4628,4631,4631,4629,4628,4629,4629,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4630,4629,4630,4631,4631,4631,4631,4631,4631,4631,4630,4631,4631,4631,4631,4631,4629,4631,4630,4631,4632,4632,4632,4631,4630,4631,4631,4631,4631,4631,4631,4631,4631,4631,4631,4631,4632,4632,4631,4631,4631,4630,4631,4631,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4631,4631,4631,4632,4632,4633,4633,4633,4632,4632,4632,4634,4633,4633,4633,4633,4633,4633,4634,4634,4634,4634,4634,4632,4632,4632,4632,4632,4631,4631,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4633,4632,4633,4633,4633,4634,4634,4634,4634,4633,4633,4633,4633,4633,4632,4631,4629,4629,4629,4629,4626,4620,4622,4623,4623,4623,4622,4620,4620,4620,4621,4620,4619,4620,4621,4621,4622,4621,4622,4620,4621,4621,4621,4621,4622,4622,4622,4622,4623,4623,4623,4623,4621,4622,4622,4622,4622,4622,4622,4622,4622,4622,4622|4624,4624,4624,4624,4624,4625,4625,4625,4621,4623,4623,4623,4623,4623,4623,4623,4623,4624,4624,4623,4623,4623,4623,4623,4624,4625,4625,4625,4626,4626,4625,4625,4625,4625,4625,4625,4627,4627,4627,4627,4627,4627,4627,4627,4627,4627,4627,4627,4627,4627,4627,4626,4627,4627,4627,4627,4627,4627,4627,4627,4627,4627,4629,4630,4630,4630,4630,4630,4630,4630,4630,4630,4632,4631,4631,4631,4631,4632,4632,4630,4630,4628,4628,4628,4628,4628,4628,4628,4627,4627,4628,4628,4628,4628,4628,4628,4628,4628,4629,4628,4628,4629,4629,4628,4628,4629,4628,4628,4628,4628,4628,4629,4633,4633,4630,4631,4630,4630,4632,4632,4632,4631,4632,4632,4632,4632,4631,4631,4631,4631,4631,4631,4631,4631,4632,4632,4632,4632,4632,4632,4630,4631,4632,4632,4632,4632,4632,4632,4632,4631,4632,4632,4632,4634,4634,4631,4634,4631,4632,4633,4633,4633,4633,4632,4632,4632,4632,4632,4632,4632,4632,4632,4632,4633,4633,4633,4633,4633,4633,4633,4633,4632,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4633,4634,4634,4634,4633,4633,4633,4635,4634,4635,4634,4634,4634,4634,4635,4635,4635,4635,4635,4635,4635,4634,4635,4634,4632,4632,4633,4633,4633,4634,4634,4633,4633,4633,4633,4633,4633,4633,4634,4633,4634,4634,4634,4635,4635,4635,4635,4634,4634,4634,4634,4634,4633,4634,4630,4630,4630,4630,4627,4623,4623,4625,4624,4624,4623,4622,4621,4621,4622,4622,4621,4621,4622,4622,4623,4623,4623,4622,4622,4622,4622,4623,4623,4623,4623,4623,4624,4624,4624,4624,4623,4623,4623,4623,4623,4623,4623,4623,4623,4623,4623|4637,4637,4637,4638,4638,4638,4638,4638,4636,4638,4638,4639,4638,4639,4639,4639,4639,4638,4637,4638,4638,4638,4638,4638,4640,4639,4640,4640,4640,4640,4640,4640,4640,4640,4640,4642,4642,4642,4642,4642,4642,4643,4643,4643,4643,4643,4643,4643,4643,4643,4641,4644,4644,4644,4644,4644,4644,4644,4643,4644,4644,4645,4647,4646,4646,4646,4644,4645,4645,4645,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4645,4645,4643,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4646,4646,4645,4645,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4645,4645,4647,4648,4648,4648,4648,4648,4648,4646,4647,4647,4647,4647,4647,4647,4645,4645,4645,4645,4645,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4644,4644,4645,4645,4645,4645,4645,4644,4644,4644,4644,4644,4644,4644,4646,4646,4646,4646,4646,4646,4646,4645,4645,4645,4645,4645,4645,4645,4646,4646,4646,4646,4646,4646,4646,4646,4646,4646,4647,4648,4648,4648,4648,4648,4648,4647,4647,4647,4646,4646,4646,4646,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4646,4646,4646,4644,4644,4644,4644,4640,4637,4637,4637,4638,4636,4636,4634,4634,4634,4634,4634,4634,4634,4634,4634,4631,4634,4634,4634,4634,4633,4634,4634,4634,4634,4634,4635,4634,4634,4634,4634,4634,4634,4634,4635,4635,4635,4635,4635,4635,4635,4635|4639,4639,4639,4639,4639,4639,4639,4639,4637,4641,4640,4640,4640,4640,4640,4642,4642,4640,4640,4639,4639,4639,4639,4639,4642,4642,4644,4642,4642,4642,4641,4641,4641,4642,4642,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4644,4645,4645,4645,4645,4645,4645,4645,4644,4645,4645,4646,4650,4648,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4646,4646,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4645,4647,4647,4648,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4646,4646,4648,4649,4649,4649,4649,4649,4649,4649,4648,4648,4648,4648,4648,4648,4648,4646,4646,4646,4647,4648,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4647,4646,4646,4646,4646,4646,4646,4646,4645,4645,4645,4645,4645,4645,4645,4647,4647,4647,4647,4647,4647,4647,4646,4647,4646,4646,4646,4646,4647,4648,4648,4647,4647,4647,4647,4647,4647,4647,4647,4649,4649,4649,4649,4649,4649,4649,4648,4648,4648,4647,4647,4647,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4648,4647,4647,4647,4645,4645,4645,4645,4642,4639,4638,4639,4639,4638,4638,4637,4635,4635,4635,4635,4635,4635,4635,4635,4634,4635,4635,4635,4636,4635,4635,4635,4635,4635,4635,4636,4636,4636,4635,4635,4635,4635,4635,4636,4636,4636,4636,4636,4636,4636,4636" data-card="0" data-window="60" data-end="72" data-start="1792608763" data-lo="0.1277152797257935" data-hi="0.5205971607206862" data-qty="5404236" data-ea="0.0004626" data-eb="0.0004644" data-realized="128.6"><div class="mb-1.5 flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-profit shadow-[0_0_8px_var(--color-profit)]"></span>
                <span class="text-sm font-semibold text-text-primary">MEW</span>
                <span class="ml-auto rounded-full bg-profit/15 px-2 py-0.5 text-[11px] text-profit">Running</span>
                <span class="num rounded bg-surface-700 px-1.5 py-0.5 font-mono font-semibold text-profit" data-num data-num-key="tape:0:session" data-num-v="129.95">+$129.95</span>
                <svg class="h-4 w-4 text-text-muted" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20.5C12.2761 20.5 12.5 20.2761 12.5 20C12.5 19.7239 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.7239 11.5 20C11.5 20.2761 11.7239 20.5 12 20.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4.5C12.2761 4.5 12.5 4.27614 12.5 4C12.5 3.72386 12.2761 3.5 12 3.5C11.7239 3.5 11.5 3.72386 11.5 4C11.5 4.27614 11.7239 4.5 12 4.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
            <span class="absolute right-0 top-1/2 flex h-10 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-md border border-site-line-strong bg-surface-700 text-text-muted"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>

            <div class="grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-2 gap-y-1 border-t border-site-line px-1 pb-1.5 pt-1.5"><span></span><span class="flex items-center justify-center gap-1 text-[10px] text-text-tertiary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt width="12" height="12" class="rounded-[3px]">Binance</span><span class="flex items-center justify-center gap-1 text-[10px] text-text-tertiary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt width="12" height="12" class="rounded-[3px]">Bybit</span>
                <span class="text-right text-text-tertiary">Ask</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="askA">0.0004632</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="askB">0.0004647</span>
                <span class="text-right text-text-tertiary">Bid</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="bidA">0.0004630</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="bidB">0.0004646</span>
                <span class="text-right text-text-tertiary">Bid/Ask</span>
                <span class="text-center font-mono text-text-secondary" data-t="baA">0.043%</span>
                <span class="text-center font-mono text-text-secondary" data-t="baB">0.022%</span>
                <span class="col-span-3 border-t border-site-line"></span>
                <span class="text-right text-text-tertiary">Funding</span>
                <span class="text-center font-mono text-loss">-0.4291%</span>
                <span class="text-center font-mono text-loss">-0.1641%</span>
                <span class="text-right text-text-tertiary">Volume 24h</span>
                <span class="text-center font-mono text-text-secondary">$57.0M</span>
                <span class="text-center font-mono text-text-secondary">$16.5M</span></div>

            <div class="mb-1.5 flex items-stretch gap-1.5 border-t border-site-line pt-1.5"><div class="flex-1 px-2 py-1 text-center"><div class="text-[10px] text-text-tertiary">Upper <span class="text-text-muted">(Open)</span></div>
            <div class="font-mono text-lg font-bold text-profit">0.38<span class="text-sm font-medium opacity-60">%</span></div>
            <div class="flex items-baseline justify-center gap-1"><span class="whitespace-nowrap text-[10px] text-text-tertiary">Long A</span><span class="num font-mono text-sm font-bold leading-tight text-profit" data-num data-num-key="tape:0:long" data-num-v="0.3022452504317863" data-t="long">+0.302%</span></div></div>
                <div class="self-center px-0.5 text-center"><div class="leading-none text-site-acc/70">Δ</div>
                    <div class="font-mono text-base font-semibold leading-tight text-site-acc">0.18%</div>
                    <span class="num font-mono text-sm font-bold leading-tight text-loss" data-num data-num-key="tape:0:delta" data-num-v="-0.0647668393782399" data-t="delta">-0.065%</span></div>
                <div class="flex-1 px-2 py-1 text-center"><div class="text-[10px] text-text-tertiary">Lower <span class="text-text-muted">(Close)</span></div>
            <div class="font-mono text-lg font-bold text-loss">-0.2<span class="text-sm font-medium opacity-60">%</span></div>
            <div class="flex items-baseline justify-center gap-1"><span class="whitespace-nowrap text-[10px] text-text-tertiary">Short A</span><span class="num font-mono text-sm font-bold leading-tight text-loss" data-num data-num-key="tape:0:short" data-num-v="-0.3670120898100262" data-t="short">-0.367%</span></div></div></div>

            <div class="grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-2 gap-y-1 border-t border-site-line px-1 pb-1.5 pt-1.5 font-mono"><span></span>
                <span class="text-center font-sans text-[10px] text-text-tertiary">Binance</span>
                <span class="text-center font-sans text-[10px] text-text-tertiary">Bybit</span>
                <span class="text-right font-sans text-text-tertiary">Position</span>
                <span class="col-span-2 grid grid-cols-2 gap-x-2 rounded-md border border-site-line text-center font-semibold"><span class="text-profit">+5,404,236</span>
                    <span class="text-loss">-5,404,236</span></span>
                <span class="text-right font-sans text-text-tertiary">Entry</span>
                <span class="text-center text-text-primary">0.0004626</span>
                <span class="text-center text-text-primary">0.0004644</span>
                <span></span>
                <span class=" col-span-2 flex items-center gap-1.5"><span class="flex-1 border-t border-text-muted/25"></span>
                    <span class="rounded-full bg-surface-700 px-2.5 py-0.5 text-[13px] font-semibold text-text-primary">0.39%</span>
                    <span class="flex-1 border-t border-text-muted/25"></span></span>
                <span class="text-right font-sans text-text-tertiary">uPnL</span>
                <span class="text-center font-bold text-profit" data-t="uA">+$2.70</span>
                <span class="text-center font-bold text-loss" data-t="uB">-$1.35</span>
                <span class="text-right font-sans text-text-tertiary">Balance</span>
                <span class="text-center text-text-primary">$8,445.99</span>
                <span class="text-center text-text-primary">$6,139.82</span>
                <span class="col-span-3 mt-0.5 border-t border-site-line"></span>
                <span class="text-right font-sans text-[10px] text-text-muted">Total uPnL</span>
                <span class="col-span-2 text-center"><span class="num text-[13px] font-bold text-profit" data-num data-num-key="tape:0:upnl" data-num-v="1.35">+$1.35</span></span></div>

            <div class="relative -mx-3 mb-2 mt-1.5 flex items-center border-y border-hair py-1.5 pl-8 pr-10 sm:pr-24"><span class="absolute left-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-text-tertiary"><svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.008.378.137.75.43.991l1.004.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.241.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span>
                <span class="flex min-w-0 flex-1 items-center"><span class="w-2 sm:w-16"></span>
                    <span class="mx-auto flex max-w-full shrink-0 flex-wrap items-center justify-center gap-x-1.5 gap-y-1"><span class="inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">size</span>
                            <span class="font-mono text-1sm font-semibold leading-none text-text-primary">$2,500</span>
                            <span class="font-mono text-2xs leading-none text-text-muted">5,404,236</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">ord</span><span class="font-mono text-1sm font-semibold leading-none text-text-primary">1</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 shrink-0 whitespace-nowrap text-1xs font-semibold leading-none text-profit">Long</span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">liq</span><span class="font-mono text-1sm font-semibold leading-none text-text-primary">3%</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">lev</span><span class="font-mono text-1sm font-semibold leading-none text-text-primary">3×</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">delay</span>
                            <span class="font-mono text-1sm font-semibold leading-none text-text-primary">1000<span class="text-2xs text-text-muted">ms/</span>1000<span class="text-2xs text-text-muted">ms/</span>0<span class="text-2xs text-text-muted">ms</span></span></span></span></span>
                <span class="absolute right-1.5 top-1/2 flex h-6 -translate-y-1/2 items-center gap-1 text-text-tertiary"><span class="hidden text-2xs font-medium leading-none sm:inline">Open</span>
                    <svg class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span></div>

            <div class="flex items-center gap-2 px-1 text-[11px] text-text-tertiary">Live Spread
                <span class="font-mono text-text-secondary">1/1</span>
                <span class="ml-auto flex items-center gap-1 rounded border border-site-line px-1.5 py-0.5"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Inverted</span>
                <span class="flex items-center gap-1 rounded border border-site-line px-1.5 py-0.5"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 14H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Depth</span></div>

            <div class="mt-2 flex gap-1"><div class="relative h-28 min-w-0 flex-1"><svg viewbox="0 0 300 100" preserveaspectratio="none" class="absolute inset-0 h-full w-full overflow-hidden"><line x1="0" x2="300" y1="25" y2="25" class="stroke-text-muted/10" stroke-width="1" vector-effect="non-scaling-stroke"></line><line x1="0" x2="300" y1="50" y2="50" class="stroke-text-muted/10" stroke-width="1" vector-effect="non-scaling-stroke"></line><line x1="0" x2="300" y1="75" y2="75" class="stroke-text-muted/10" stroke-width="1" vector-effect="non-scaling-stroke"></line><line x1="0" x2="300" y1="35.8" y2="35.8" class="stroke-profit/60" stroke-width="1.5" stroke-dasharray="5 4" vector-effect="non-scaling-stroke"></line>
                        <line x1="0" x2="300" y1="81.6" y2="81.6" class="stroke-loss/60" stroke-width="1.5" stroke-dasharray="5 4" vector-effect="non-scaling-stroke"></line>
                        <g data-t="scroll"><path d="M-5 44.4C-2.5 44.4 -2.5 49.9 0 49.9C2.5 49.9 2.5 44.4 5 44.4C7.5 44.4 7.5 44.4 10 44.4C12.5 44.4 12.5 44.4 15 44.4C17.5 44.4 17.5 44.4 20 44.4C22.5 44.4 22.5 55.4 25 55.4C27.5 55.4 27.5 60.9 30 60.9C32.5 60.9 32.5 49.9 35 49.9C37.5 49.9 37.5 49.9 40 49.9C42.5 49.9 42.5 49.9 45 49.9C47.5 49.9 47.5 49.9 50 49.9C52.5 49.9 52.5 49.9 55 49.9C57.5 49.9 57.5 44.4 60 44.4C62.5 44.4 62.5 55.5 65 55.5C67.5 55.5 67.5 50 70 50C72.5 50 72.5 50 75 50C77.5 50 77.5 55.5 80 55.5C82.5 55.5 82.5 55.5 85 55.5C87.5 55.5 87.5 50 90 50C92.5 50 92.5 50 95 50C97.5 50 97.5 50 100 50C102.5 50 102.5 50 105 50C107.5 50 107.5 50 110 50C112.5 50 112.5 39 115 39C117.5 39 117.5 50 120 50C122.5 50 122.5 50 125 50C127.5 50 127.5 50 130 50C132.5 50 132.5 50 135 50C137.5 50 137.5 50 140 50C142.5 50 142.5 44.5 145 44.5C147.5 44.5 147.5 44.5 150 44.5C152.5 44.5 152.5 44.5 155 44.5C157.5 44.5 157.5 44.5 160 44.5C162.5 44.5 162.5 44.5 165 44.5C167.5 44.5 167.5 44.5 170 44.5C172.5 44.5 172.5 44.5 175 44.5C177.5 44.5 177.5 44.5 180 44.5C182.5 44.5 182.5 44.5 185 44.5C187.5 44.5 187.5 55.5 190 55.5C192.5 55.5 192.5 33.5 195 33.5C197.5 33.5 197.5 39 200 39C202.5 39 202.5 39 205 39C207.5 39 207.5 39 210 39C212.5 39 212.5 39 215 39C217.5 39 217.5 39 220 39C222.5 39 222.5 39 225 39C227.5 39 227.5 44.5 230 44.5C232.5 44.5 232.5 39 235 39C237.5 39 237.5 39 240 39C242.5 39 242.5 33.5 245 33.5C247.5 33.5 247.5 33.5 250 33.5C252.5 33.5 252.5 44.5 255 44.5C257.5 44.5 257.5 44.5 260 44.5C262.5 44.5 262.5 44.5 265 44.5C267.5 44.5 267.5 55.5 270 55.5C272.5 55.5 272.5 50 275 50C277.5 50 277.5 50 280 50C282.5 50 282.5 50 285 50C287.5 50 287.5 44.5 290 44.5C292.5 44.5 292.5 44.5 295 44.5C297.5 44.5 297.5 55.6 300 55.6L300 39.1C297.5 39.1 297.5 33.6 295 33.6C292.5 33.6 292.5 33.6 290 33.6C287.5 33.6 287.5 33.6 285 33.6C282.5 33.6 282.5 33.6 280 33.6C277.5 33.6 277.5 33.6 275 33.6C272.5 33.6 272.5 33.6 270 33.6C267.5 33.6 267.5 33.6 265 33.6C262.5 33.6 262.5 33.6 260 33.6C257.5 33.6 257.5 28.1 255 28.1C252.5 28.1 252.5 11.5 250 11.5C247.5 11.5 247.5 17 245 17C242.5 17 242.5 22.5 240 22.5C237.5 22.5 237.5 22.5 235 22.5C232.5 22.5 232.5 28 230 28C227.5 28 227.5 22.5 225 22.5C222.5 22.5 222.5 22.5 220 22.5C217.5 22.5 217.5 22.5 215 22.5C212.5 22.5 212.5 22.5 210 22.5C207.5 22.5 207.5 22.5 205 22.5C202.5 22.5 202.5 22.5 200 22.5C197.5 22.5 197.5 22.5 195 22.5C192.5 22.5 192.5 28 190 28C187.5 28 187.5 28 185 28C182.5 28 182.5 28 180 28C177.5 28 177.5 28 175 28C172.5 28 172.5 28 170 28C167.5 28 167.5 28 165 28C162.5 28 162.5 28 160 28C157.5 28 157.5 28 155 28C152.5 28 152.5 28 150 28C147.5 28 147.5 28 145 28C142.5 28 142.5 28 140 28C137.5 28 137.5 28 135 28C132.5 28 132.5 28 130 28C127.5 28 127.5 28 125 28C122.5 28 122.5 28 120 28C117.5 28 117.5 22.4 115 22.4C112.5 22.4 112.5 33.4 110 33.4C107.5 33.4 107.5 33.4 105 33.4C102.5 33.4 102.5 39 100 39C97.5 39 97.5 39 95 39C92.5 39 92.5 39 90 39C87.5 39 87.5 33.5 85 33.5C82.5 33.5 82.5 33.5 80 33.5C77.5 33.5 77.5 27.9 75 27.9C72.5 27.9 72.5 16.9 70 16.9C67.5 16.9 67.5 27.9 65 27.9C62.5 27.9 62.5 27.9 60 27.9C57.5 27.9 57.5 38.9 55 38.9C52.5 38.9 52.5 38.9 50 38.9C47.5 38.9 47.5 38.9 45 38.9C42.5 38.9 42.5 38.9 40 38.9C37.5 38.9 37.5 33.4 35 33.4C32.5 33.4 32.5 33.4 30 33.4C27.5 33.4 27.5 33.4 25 33.4C22.5 33.4 22.5 16.9 20 16.9C17.5 16.9 17.5 16.9 15 16.9C12.5 16.9 12.5 27.9 10 27.9C7.5 27.9 7.5 27.9 5 27.9C2.5 27.9 2.5 27.9 0 27.9C-2.5 27.9 -2.5 27.9 -5 27.9Z" class="fill-profit/10" data-t="band"></path>
                            <path d="M-5 44.4C-2.5 44.4 -2.5 49.9 0 49.9C2.5 49.9 2.5 44.4 5 44.4C7.5 44.4 7.5 44.4 10 44.4C12.5 44.4 12.5 44.4 15 44.4C17.5 44.4 17.5 44.4 20 44.4C22.5 44.4 22.5 55.4 25 55.4C27.5 55.4 27.5 60.9 30 60.9C32.5 60.9 32.5 49.9 35 49.9C37.5 49.9 37.5 49.9 40 49.9C42.5 49.9 42.5 49.9 45 49.9C47.5 49.9 47.5 49.9 50 49.9C52.5 49.9 52.5 49.9 55 49.9C57.5 49.9 57.5 44.4 60 44.4C62.5 44.4 62.5 55.5 65 55.5C67.5 55.5 67.5 50 70 50C72.5 50 72.5 50 75 50C77.5 50 77.5 55.5 80 55.5C82.5 55.5 82.5 55.5 85 55.5C87.5 55.5 87.5 50 90 50C92.5 50 92.5 50 95 50C97.5 50 97.5 50 100 50C102.5 50 102.5 50 105 50C107.5 50 107.5 50 110 50C112.5 50 112.5 39 115 39C117.5 39 117.5 50 120 50C122.5 50 122.5 50 125 50C127.5 50 127.5 50 130 50C132.5 50 132.5 50 135 50C137.5 50 137.5 50 140 50C142.5 50 142.5 44.5 145 44.5C147.5 44.5 147.5 44.5 150 44.5C152.5 44.5 152.5 44.5 155 44.5C157.5 44.5 157.5 44.5 160 44.5C162.5 44.5 162.5 44.5 165 44.5C167.5 44.5 167.5 44.5 170 44.5C172.5 44.5 172.5 44.5 175 44.5C177.5 44.5 177.5 44.5 180 44.5C182.5 44.5 182.5 44.5 185 44.5C187.5 44.5 187.5 55.5 190 55.5C192.5 55.5 192.5 33.5 195 33.5C197.5 33.5 197.5 39 200 39C202.5 39 202.5 39 205 39C207.5 39 207.5 39 210 39C212.5 39 212.5 39 215 39C217.5 39 217.5 39 220 39C222.5 39 222.5 39 225 39C227.5 39 227.5 44.5 230 44.5C232.5 44.5 232.5 39 235 39C237.5 39 237.5 39 240 39C242.5 39 242.5 33.5 245 33.5C247.5 33.5 247.5 33.5 250 33.5C252.5 33.5 252.5 44.5 255 44.5C257.5 44.5 257.5 44.5 260 44.5C262.5 44.5 262.5 44.5 265 44.5C267.5 44.5 267.5 55.5 270 55.5C272.5 55.5 272.5 50 275 50C277.5 50 277.5 50 280 50C282.5 50 282.5 50 285 50C287.5 50 287.5 44.5 290 44.5C292.5 44.5 292.5 44.5 295 44.5C297.5 44.5 297.5 55.6 300 55.6" fill="none" class="stroke-profit/20" stroke-width="6" vector-effect="non-scaling-stroke" data-t="greenGlow"></path>
                            <path d="M-5 27.9C-2.5 27.9 -2.5 27.9 0 27.9C2.5 27.9 2.5 27.9 5 27.9C7.5 27.9 7.5 27.9 10 27.9C12.5 27.9 12.5 16.9 15 16.9C17.5 16.9 17.5 16.9 20 16.9C22.5 16.9 22.5 33.4 25 33.4C27.5 33.4 27.5 33.4 30 33.4C32.5 33.4 32.5 33.4 35 33.4C37.5 33.4 37.5 38.9 40 38.9C42.5 38.9 42.5 38.9 45 38.9C47.5 38.9 47.5 38.9 50 38.9C52.5 38.9 52.5 38.9 55 38.9C57.5 38.9 57.5 27.9 60 27.9C62.5 27.9 62.5 27.9 65 27.9C67.5 27.9 67.5 16.9 70 16.9C72.5 16.9 72.5 27.9 75 27.9C77.5 27.9 77.5 33.5 80 33.5C82.5 33.5 82.5 33.5 85 33.5C87.5 33.5 87.5 39 90 39C92.5 39 92.5 39 95 39C97.5 39 97.5 39 100 39C102.5 39 102.5 33.4 105 33.4C107.5 33.4 107.5 33.4 110 33.4C112.5 33.4 112.5 22.4 115 22.4C117.5 22.4 117.5 28 120 28C122.5 28 122.5 28 125 28C127.5 28 127.5 28 130 28C132.5 28 132.5 28 135 28C137.5 28 137.5 28 140 28C142.5 28 142.5 28 145 28C147.5 28 147.5 28 150 28C152.5 28 152.5 28 155 28C157.5 28 157.5 28 160 28C162.5 28 162.5 28 165 28C167.5 28 167.5 28 170 28C172.5 28 172.5 28 175 28C177.5 28 177.5 28 180 28C182.5 28 182.5 28 185 28C187.5 28 187.5 28 190 28C192.5 28 192.5 22.5 195 22.5C197.5 22.5 197.5 22.5 200 22.5C202.5 22.5 202.5 22.5 205 22.5C207.5 22.5 207.5 22.5 210 22.5C212.5 22.5 212.5 22.5 215 22.5C217.5 22.5 217.5 22.5 220 22.5C222.5 22.5 222.5 22.5 225 22.5C227.5 22.5 227.5 28 230 28C232.5 28 232.5 22.5 235 22.5C237.5 22.5 237.5 22.5 240 22.5C242.5 22.5 242.5 17 245 17C247.5 17 247.5 11.5 250 11.5C252.5 11.5 252.5 28.1 255 28.1C257.5 28.1 257.5 33.6 260 33.6C262.5 33.6 262.5 33.6 265 33.6C267.5 33.6 267.5 33.6 270 33.6C272.5 33.6 272.5 33.6 275 33.6C277.5 33.6 277.5 33.6 280 33.6C282.5 33.6 282.5 33.6 285 33.6C287.5 33.6 287.5 33.6 290 33.6C292.5 33.6 292.5 33.6 295 33.6C297.5 33.6 297.5 39.1 300 39.1" fill="none" class="stroke-loss/20" stroke-width="6" vector-effect="non-scaling-stroke" data-t="redGlow"></path>
                            <path d="M-5 44.4C-2.5 44.4 -2.5 49.9 0 49.9C2.5 49.9 2.5 44.4 5 44.4C7.5 44.4 7.5 44.4 10 44.4C12.5 44.4 12.5 44.4 15 44.4C17.5 44.4 17.5 44.4 20 44.4C22.5 44.4 22.5 55.4 25 55.4C27.5 55.4 27.5 60.9 30 60.9C32.5 60.9 32.5 49.9 35 49.9C37.5 49.9 37.5 49.9 40 49.9C42.5 49.9 42.5 49.9 45 49.9C47.5 49.9 47.5 49.9 50 49.9C52.5 49.9 52.5 49.9 55 49.9C57.5 49.9 57.5 44.4 60 44.4C62.5 44.4 62.5 55.5 65 55.5C67.5 55.5 67.5 50 70 50C72.5 50 72.5 50 75 50C77.5 50 77.5 55.5 80 55.5C82.5 55.5 82.5 55.5 85 55.5C87.5 55.5 87.5 50 90 50C92.5 50 92.5 50 95 50C97.5 50 97.5 50 100 50C102.5 50 102.5 50 105 50C107.5 50 107.5 50 110 50C112.5 50 112.5 39 115 39C117.5 39 117.5 50 120 50C122.5 50 122.5 50 125 50C127.5 50 127.5 50 130 50C132.5 50 132.5 50 135 50C137.5 50 137.5 50 140 50C142.5 50 142.5 44.5 145 44.5C147.5 44.5 147.5 44.5 150 44.5C152.5 44.5 152.5 44.5 155 44.5C157.5 44.5 157.5 44.5 160 44.5C162.5 44.5 162.5 44.5 165 44.5C167.5 44.5 167.5 44.5 170 44.5C172.5 44.5 172.5 44.5 175 44.5C177.5 44.5 177.5 44.5 180 44.5C182.5 44.5 182.5 44.5 185 44.5C187.5 44.5 187.5 55.5 190 55.5C192.5 55.5 192.5 33.5 195 33.5C197.5 33.5 197.5 39 200 39C202.5 39 202.5 39 205 39C207.5 39 207.5 39 210 39C212.5 39 212.5 39 215 39C217.5 39 217.5 39 220 39C222.5 39 222.5 39 225 39C227.5 39 227.5 44.5 230 44.5C232.5 44.5 232.5 39 235 39C237.5 39 237.5 39 240 39C242.5 39 242.5 33.5 245 33.5C247.5 33.5 247.5 33.5 250 33.5C252.5 33.5 252.5 44.5 255 44.5C257.5 44.5 257.5 44.5 260 44.5C262.5 44.5 262.5 44.5 265 44.5C267.5 44.5 267.5 55.5 270 55.5C272.5 55.5 272.5 50 275 50C277.5 50 277.5 50 280 50C282.5 50 282.5 50 285 50C287.5 50 287.5 44.5 290 44.5C292.5 44.5 292.5 44.5 295 44.5C297.5 44.5 297.5 55.6 300 55.6" fill="none" class="stroke-profit" stroke-width="1.75" vector-effect="non-scaling-stroke" data-t="green"></path>
                            <path d="M-5 27.9C-2.5 27.9 -2.5 27.9 0 27.9C2.5 27.9 2.5 27.9 5 27.9C7.5 27.9 7.5 27.9 10 27.9C12.5 27.9 12.5 16.9 15 16.9C17.5 16.9 17.5 16.9 20 16.9C22.5 16.9 22.5 33.4 25 33.4C27.5 33.4 27.5 33.4 30 33.4C32.5 33.4 32.5 33.4 35 33.4C37.5 33.4 37.5 38.9 40 38.9C42.5 38.9 42.5 38.9 45 38.9C47.5 38.9 47.5 38.9 50 38.9C52.5 38.9 52.5 38.9 55 38.9C57.5 38.9 57.5 27.9 60 27.9C62.5 27.9 62.5 27.9 65 27.9C67.5 27.9 67.5 16.9 70 16.9C72.5 16.9 72.5 27.9 75 27.9C77.5 27.9 77.5 33.5 80 33.5C82.5 33.5 82.5 33.5 85 33.5C87.5 33.5 87.5 39 90 39C92.5 39 92.5 39 95 39C97.5 39 97.5 39 100 39C102.5 39 102.5 33.4 105 33.4C107.5 33.4 107.5 33.4 110 33.4C112.5 33.4 112.5 22.4 115 22.4C117.5 22.4 117.5 28 120 28C122.5 28 122.5 28 125 28C127.5 28 127.5 28 130 28C132.5 28 132.5 28 135 28C137.5 28 137.5 28 140 28C142.5 28 142.5 28 145 28C147.5 28 147.5 28 150 28C152.5 28 152.5 28 155 28C157.5 28 157.5 28 160 28C162.5 28 162.5 28 165 28C167.5 28 167.5 28 170 28C172.5 28 172.5 28 175 28C177.5 28 177.5 28 180 28C182.5 28 182.5 28 185 28C187.5 28 187.5 28 190 28C192.5 28 192.5 22.5 195 22.5C197.5 22.5 197.5 22.5 200 22.5C202.5 22.5 202.5 22.5 205 22.5C207.5 22.5 207.5 22.5 210 22.5C212.5 22.5 212.5 22.5 215 22.5C217.5 22.5 217.5 22.5 220 22.5C222.5 22.5 222.5 22.5 225 22.5C227.5 22.5 227.5 28 230 28C232.5 28 232.5 22.5 235 22.5C237.5 22.5 237.5 22.5 240 22.5C242.5 22.5 242.5 17 245 17C247.5 17 247.5 11.5 250 11.5C252.5 11.5 252.5 28.1 255 28.1C257.5 28.1 257.5 33.6 260 33.6C262.5 33.6 262.5 33.6 265 33.6C267.5 33.6 267.5 33.6 270 33.6C272.5 33.6 272.5 33.6 275 33.6C277.5 33.6 277.5 33.6 280 33.6C282.5 33.6 282.5 33.6 285 33.6C287.5 33.6 287.5 33.6 290 33.6C292.5 33.6 292.5 33.6 295 33.6C297.5 33.6 297.5 39.1 300 39.1" fill="none" class="stroke-loss" stroke-width="1.75" vector-effect="non-scaling-stroke" data-t="red"></path></g></svg><span class="absolute -translate-x-1/2 -translate-y-1/2 transition-[left] duration-1000 ease-linear" data-t="mark" data-entry="51" style="left:65%;top:33.5%"><span class="block h-2.5 w-2.5 rounded-full border-2 border-profit bg-surface-800"></span>
                            <span class="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-surface-700 px-1 py-px font-mono text-[9px] text-text-primary">Entry 0.39%</span></span><span class="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-surface-800 transition-[top] duration-1000 ease-in-out bg-profit shadow-[0_0_10px_var(--color-profit)]" style="top:55.6%" data-t="headG"></span>
                    <span class="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-surface-800 transition-[top] duration-1000 ease-in-out bg-loss shadow-[0_0_10px_var(--color-loss)]" style="top:39.1%" data-t="headR"></span></div>
                <div class="relative w-12 shrink-0 font-mono text-[9px] text-text-muted"><span class="absolute left-1 -translate-y-1/2" style="top:35.8%">0.380%</span>
                    <span class="absolute left-1 -translate-y-1/2" style="top:81.6%">0.200%</span>
                    <span class="absolute left-0 -translate-y-1/2 rounded-sm px-1 font-semibold text-site-cta-ink transition-[top] duration-1000 ease-in-out bg-profit" style="top:55.6%" data-t="tagG">0.302%</span>
                    <span class="absolute left-0 -translate-y-1/2 rounded-sm px-1 font-semibold text-site-cta-ink transition-[top] duration-1000 ease-in-out bg-loss" style="top:39.1%" data-t="tagR">0.367%</span></div></div>
            <div class="relative mr-12 mt-1 h-3 font-mono text-[9px] text-text-muted"><span class="absolute -translate-x-1/2" style="left:16.7%" data-clock="50">18:53:05</span><span class="absolute -translate-x-1/2" style="left:41.7%" data-clock="35">18:53:20</span><span class="absolute -translate-x-1/2" style="left:66.7%" data-clock="20">18:53:35</span><span class="absolute -translate-x-1/2" style="left:91.7%" data-clock="5">18:53:50</span></div>

            <div class="mt-3 flex justify-center gap-2 font-medium"><span class="flex items-center gap-1.5 rounded-full bg-site-cta px-3.5 py-1.5 text-site-cta-ink"><svg class="h-3 w-3 fill-current" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Stop</span>
                <span class="flex items-center gap-1.5 rounded-full border border-site-line-strong px-3.5 py-1.5 text-text-primary"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Close</span></div>
            <div class="mt-3 flex justify-center gap-5 border-t border-site-line pt-2 text-[11px] text-text-tertiary"><span class="flex items-center gap-1"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M10 9H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5C18 9.88071 16.8807 11 15.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18L13.5 15L11 17L6 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"></path></svg>Spread</span>
                <span class="flex items-center gap-1"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 16C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15C15.2239 15 15 15.2239 15 15.5C15 15.7761 15.2239 16 15.5 16Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Funding</span>
                <span class="flex items-center gap-1"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 14H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>My Trades</span></div></div><div class="hidden md:flex relative min-w-0 flex-col rounded-xl border border-surface-600 bg-surface-800 p-3 text-xs" data-tape="5|85840,85840,85840,85840,85820,85820,85820,85820,85820,85820,85820,85820,85820,85820,85820,85830,85830,85830,85830,85830,85830,85830,85830,85870,85870,85860,85860,85860,85870,85860,85880,85880,85880,85890,85890,85900,85900,85900,85900,85900,85900,85910,85910,85920,85920,85880,85870,85850,85860,85850,85860,85850,85860,85860,85870,85870,85870,85870,85850,85850,85840,85840,85830,85800,85800,85820,85820,85800,85800,85800,85810,85810,85810,85820,85820,85830,85830,85870,85870,85860,85870,85840,85830,85820,85820,85820,85820,85820,85820,85830,85830,85830,85840,85840,85840,85840,85840,85840,85840,85820,85830,85880,85880,85880,85900,85880,85910,85910,85910,85910,85910,85910,85910,85910,85910,85920,85930,85930,85930,85920,85920,85920,85920,85930,85930,85930,85930,85930,85950,85950,85910,85910,85910,85910,85910,85910,85910,85890,85890,85880,85890,85890,85880,85870,85880,85880,85860,85860,85850,85850,85830,85830,85820,85800,85800,85800,85800,85800,85800,85800,85790,85790,85740,85730,85720,85720,85720,85720,85720,85720,85720,85720,85720,85720,85720,85720,85720,85720,85720,85710,85710,85710,85680,85680,85680,85690,85710,85750,85750,85750,85750,85760,85760,85760,85760,85760,85760,85760,85760,85740,85740,85740,85720,85720,85720,85720,85720,85720,85720,85700,85690,85700,85700,85700,85700,85710,85700,85700,85700,85700,85700,85700,85700,85690,85690,85690,85690,85690,85690,85690,85670,85680,85680,85680,85680,85670,85650,85650,85650,85650,85650,85660,85660,85660,85650,85650,85630,85630,85630,85630,85630,85660,85620,85620,85620,85620,85620,85610,85620,85620,85630,85630,85630,85630,85630,85620,85620,85620,85610,85610,85610,85610,85620,85620,85620,85620,85620,85620,85620,85630,85630,85630,85640,85660,85660,85660,85660,85660,85660,85660,85660,85640,85650,85660,85660,85650,85640,85640,85640,85640|85850,85850,85850,85850,85840,85830,85830,85830,85830,85830,85830,85830,85830,85830,85830,85840,85840,85840,85850,85840,85840,85840,85840,85880,85880,85890,85890,85890,85890,85890,85890,85890,85890,85910,85910,85910,85910,85910,85910,85910,85910,85920,85920,85930,85930,85900,85890,85880,85880,85880,85880,85880,85880,85870,85880,85880,85880,85880,85860,85860,85850,85860,85850,85810,85810,85830,85830,85830,85830,85830,85820,85820,85830,85840,85840,85840,85840,85880,85880,85880,85880,85850,85850,85840,85840,85840,85840,85840,85840,85850,85850,85850,85850,85850,85850,85850,85850,85850,85850,85830,85840,85890,85890,85890,85910,85890,85920,85920,85920,85920,85920,85920,85920,85920,85920,85940,85940,85940,85940,85940,85940,85940,85940,85940,85940,85940,85940,85940,85960,85960,85930,85930,85930,85930,85930,85930,85930,85910,85910,85900,85900,85900,85890,85880,85890,85890,85880,85880,85870,85870,85850,85840,85830,85810,85810,85810,85810,85810,85810,85810,85810,85800,85760,85740,85730,85730,85730,85730,85730,85730,85730,85730,85730,85730,85730,85730,85730,85730,85730,85720,85720,85720,85690,85690,85690,85700,85720,85760,85760,85760,85760,85770,85770,85770,85770,85770,85770,85770,85770,85750,85750,85750,85730,85730,85730,85730,85730,85730,85730,85710,85710,85710,85710,85710,85710,85720,85710,85710,85710,85710,85710,85710,85710,85700,85700,85700,85700,85700,85700,85700,85680,85690,85690,85690,85690,85680,85660,85660,85660,85660,85660,85670,85670,85670,85660,85660,85640,85640,85640,85640,85640,85670,85640,85630,85630,85630,85630,85620,85630,85630,85640,85640,85640,85640,85640,85640,85630,85630,85620,85620,85620,85630,85630,85640,85630,85630,85630,85630,85630,85640,85640,85640,85660,85670,85670,85670,85670,85670,85670,85670,85670,85660,85670,85670,85670,85660,85660,85660,85650,85650|85980,85987,85987,85987,85987,85977,85977,85968,85968,85968,85968,85969,85968,85969,85970,85981,85981,85982,85982,85982,85982,85982,85982,85983,86017,86017,86010,86011,86011,86032,86032,86032,86032,86042,86052,86054,86055,86054,86054,86054,86068,86063,86063,86073,86073,86043,86043,86033,86013,86013,86013,86013,86013,86013,86023,86023,86023,86023,86023,86013,86003,85993,85984,85993,85963,85973,85973,85973,85954,85954,85954,85954,85968,85975,85975,85988,85988,86017,86005,86005,86005,85990,85979,85965,85964,85964,85964,85964,85965,85971,85972,85972,85973,85973,85973,85973,85973,85973,85964,85964,85964,85971,86020,86020,86034,86049,86049,86049,86049,86049,86049,86049,86077,86070,86073,86073,86062,86062,86066,86066,86066,86063,86063,86063,86063,86055,86070,86071,86087,86088,86083,86035,86038,86039,86041,86042,86044,86044,86039,86015,86020,86022,86022,86019,86019,86019,85996,85996,85998,85995,85995,85970,85951,85951,85937,85938,85938,85938,85937,85937,85937,85937,85899,85881,85854,85855,85855,85855,85855,85855,85855,85855,85855,85855,85854,85854,85855,85855,85855,85843,85844,85844,85823,85811,85813,85814,85823,85851,85872,85883,85884,85884,85894,85894,85894,85894,85894,85894,85894,85885,85885,85885,85861,85862,85862,85863,85863,85864,85865,85832,85839,85840,85840,85840,85840,85840,85841,85842,85846,85842,85842,85842,85842,85842,85828,85829,85829,85829,85829,85829,85813,85813,85813,85813,85813,85795,85793,85793,85793,85793,85785,85786,85788,85789,85790,85791,85785,85785,85785,85785,85785,85785,85785,85785,85785,85785,85785,85785,85757,85758,85758,85763,85765,85767,85768,85768,85768,85768,85757,85758,85759,85751,85765,85766,85767,85768,85769,85760,85760,85764,85765,85774,85785,85799,85800,85800,85809,85814,85810,85799,85799,85800,85786,85787,85796,85797,85772,85783,85783,85783|86001,86001,86001,86001,86001,85987,85994,85994,85994,85994,85994,85994,85991,85990,85984,86001,86001,86001,86001,85990,86001,86001,86001,86001,86046,86046,86039,86039,86039,86046,86046,86040,86040,86074,86083,86083,86083,86083,86083,86083,86097,86090,86090,86097,86081,86068,86065,86041,86028,86028,86028,86028,86028,86028,86051,86045,86045,86045,86024,86024,86004,86004,86004,86004,85978,86003,85999,85999,85974,85974,85981,85969,86004,86004,86004,86004,86004,86040,86048,86035,86034,86013,86004,85995,85995,85993,85986,85986,85995,86000,86000,86000,86000,86000,86000,86000,85995,85988,85972,85972,85972,85995,86049,86049,86060,86078,86078,86078,86078,86078,86078,86078,86095,86095,86095,86095,86081,86081,86088,86095,86088,86081,86081,86081,86081,86071,86095,86095,86117,86116,86110,86059,86060,86060,86060,86060,86059,86059,86045,86040,86045,86036,86023,86023,86020,86030,86020,86020,86013,86006,86003,85992,85978,85978,85960,85959,85953,85953,85953,85953,85953,85945,85920,85899,85877,85883,85883,85877,85877,85877,85877,85877,85867,85877,85870,85870,85870,85870,85870,85863,85863,85863,85845,85836,85836,85836,85852,85863,85908,85908,85908,85908,85924,85924,85924,85923,85923,85923,85916,85902,85901,85900,85884,85877,85877,85877,85877,85877,85882,85882,85869,85854,85868,85862,85862,85862,85868,85868,85868,85868,85868,85864,85864,85864,85857,85850,85850,85850,85850,85850,85830,85830,85844,85844,85844,85828,85814,85808,85808,85808,85808,85807,85817,85811,85811,85811,85786,85799,85799,85799,85793,85793,85793,85786,85786,85786,85786,85786,85786,85785,85785,85793,85793,85793,85793,85790,85790,85783,85783,85776,85776,85767,85795,85793,85793,85789,85789,85789,85786,85786,85789,85800,85812,85822,85824,85824,85831,85831,85825,85825,85825,85825,85811,85811,85822,85822,85805,85801,85798,85798" data-card="1" data-window="60" data-end="72" data-start="1792608763" data-lo="0.020000000000000004" data-hi="0.28" data-qty="0" data-ea="0" data-eb="0" data-realized="41.3"><div class="mb-1.5 flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-profit shadow-[0_0_8px_var(--color-profit)]"></span>
                <span class="text-sm font-semibold text-text-primary">AERO</span>
                <span class="ml-auto rounded-full bg-profit/15 px-2 py-0.5 text-[11px] text-profit">Running</span>
                <span class="num rounded bg-surface-700 px-1.5 py-0.5 font-mono font-semibold text-profit" data-num data-num-key="tape:1:session" data-num-v="41.3">+$41.30</span>
                <svg class="h-4 w-4 text-text-muted" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20.5C12.2761 20.5 12.5 20.2761 12.5 20C12.5 19.7239 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.7239 11.5 20C11.5 20.2761 11.7239 20.5 12 20.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4.5C12.2761 4.5 12.5 4.27614 12.5 4C12.5 3.72386 12.2761 3.5 12 3.5C11.7239 3.5 11.5 3.72386 11.5 4C11.5 4.27614 11.7239 4.5 12 4.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
            <span class="absolute right-0 top-1/2 flex h-10 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-md border border-site-line-strong bg-surface-700 text-text-muted"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>

            <div class="grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-2 gap-y-1 border-t border-site-line px-1 pb-1.5 pt-1.5"><span></span><span class="flex items-center justify-center gap-1 text-[10px] text-text-tertiary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt width="12" height="12" class="rounded-[3px]">Binance</span><span class="flex items-center justify-center gap-1 text-[10px] text-text-tertiary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/8112.png" alt width="12" height="12" class="rounded-[3px]">Hyperliquid</span>
                <span class="text-right text-text-tertiary">Ask</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="askA">0.85830</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="askB">0.86004</span>
                <span class="text-right text-text-tertiary">Bid</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="bidA">0.85810</span>
                <span class="text-center font-mono font-semibold text-text-primary" data-t="bidB">0.85968</span>
                <span class="text-right text-text-tertiary">Bid/Ask</span>
                <span class="text-center font-mono text-text-secondary" data-t="baA">0.023%</span>
                <span class="text-center font-mono text-text-secondary" data-t="baB">0.042%</span>
                <span class="col-span-3 border-t border-site-line"></span>
                <span class="text-right text-text-tertiary">Funding</span>
                <span class="text-center font-mono text-profit">+0.0050%</span>
                <span class="text-center font-mono text-profit">+0.0013%</span>
                <span class="text-right text-text-tertiary">Volume 24h</span>
                <span class="text-center font-mono text-text-secondary">$29.5M</span>
                <span class="text-center font-mono text-text-secondary">$4.4M</span></div>

            <div class="mb-1.5 flex items-stretch gap-1.5 border-t border-site-line pt-1.5"><div class="flex-1 px-2 py-1 text-center"><div class="text-[10px] text-text-tertiary">Upper <span class="text-text-muted">(Open)</span></div>
            <div class="font-mono text-lg font-bold text-profit">0.25<span class="text-sm font-medium opacity-60">%</span></div>
            <div class="flex items-baseline justify-center gap-1"><span class="whitespace-nowrap text-[10px] text-text-tertiary">Long A</span><span class="num font-mono text-sm font-bold leading-tight text-profit" data-num data-num-key="tape:1:long" data-num-v="0.16078294302691926" data-t="long">+0.161%</span></div></div>
                <div class="self-center px-0.5 text-center"><div class="leading-none text-site-acc/70">Δ</div>
                    <div class="font-mono text-base font-semibold leading-tight text-site-acc">0.2%</div>
                    <span class="num font-mono text-sm font-bold leading-tight text-loss" data-num data-num-key="tape:1:delta" data-num-v="-0.06524525224280614" data-t="delta">-0.065%</span></div>
                <div class="flex-1 px-2 py-1 text-center"><div class="text-[10px] text-text-tertiary">Lower <span class="text-text-muted">(Close)</span></div>
            <div class="font-mono text-lg font-bold text-loss">-0.05<span class="text-sm font-medium opacity-60">%</span></div>
            <div class="flex items-baseline justify-center gap-1"><span class="whitespace-nowrap text-[10px] text-text-tertiary">Short A</span><span class="num font-mono text-sm font-bold leading-tight text-loss" data-num data-num-key="tape:1:short" data-num-v="-0.2260281952697254" data-t="short">-0.226%</span></div></div></div>

            <div class="grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-2 gap-y-1 border-t border-site-line px-1 pb-1.5 pt-1.5 font-mono"><span></span>
                <span class="text-center font-sans text-[10px] text-text-tertiary">Binance</span>
                <span class="text-center font-sans text-[10px] text-text-tertiary">Hyperliquid</span>
                <span class="text-right font-sans text-text-tertiary">Position</span>
                <span class="col-span-2 grid grid-cols-2 gap-x-2 rounded-md border border-site-line text-center font-semibold"><span class="text-text-muted">—</span>
                    <span class="text-text-muted">—</span></span>
                <span class="text-right font-sans text-text-tertiary">Entry</span>
                <span class="text-center text-text-primary">—</span>
                <span class="text-center text-text-primary">—</span>
                <span></span>
                <span class="invisible col-span-2 flex items-center gap-1.5"><span class="flex-1 border-t border-text-muted/25"></span>
                    <span class="rounded-full bg-surface-700 px-2.5 py-0.5 text-[13px] font-semibold text-text-primary">0%</span>
                    <span class="flex-1 border-t border-text-muted/25"></span></span>
                <span class="text-right font-sans text-text-tertiary">uPnL</span>
                <span class="text-center font-bold text-profit" data-t="uA">+$0.00</span>
                <span class="text-center font-bold text-profit" data-t="uB">+$0.00</span>
                <span class="text-right font-sans text-text-tertiary">Balance</span>
                <span class="text-center text-text-primary">$8,445.99</span>
                <span class="text-center text-text-primary">$7,570.19</span>
                <span class="col-span-3 mt-0.5 border-t border-site-line"></span>
                <span class="text-right font-sans text-[10px] text-text-muted">Total uPnL</span>
                <span class="col-span-2 text-center"><span class="num text-[13px] font-bold text-profit" data-num data-num-key="tape:1:upnl" data-num-v="0">+$0.00</span></span></div>

            <div class="relative -mx-3 mb-2 mt-1.5 flex items-center border-y border-hair py-1.5 pl-8 pr-10 sm:pr-24"><span class="absolute left-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-text-tertiary"><svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.008.378.137.75.43.991l1.004.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.241.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span>
                <span class="flex min-w-0 flex-1 items-center"><span class="w-2 sm:w-16"></span>
                    <span class="mx-auto flex max-w-full shrink-0 flex-wrap items-center justify-center gap-x-1.5 gap-y-1"><span class="inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">size</span>
                            <span class="font-mono text-1sm font-semibold leading-none text-text-primary">$2,500</span>
                            <span class="font-mono text-2xs leading-none text-text-muted">2,912</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">ord</span><span class="font-mono text-1sm font-semibold leading-none text-text-primary">1</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 shrink-0 whitespace-nowrap text-1xs font-semibold leading-none text-profit">Long</span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">liq</span><span class="font-mono text-1sm font-semibold leading-none text-text-primary">3%</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">lev</span><span class="font-mono text-1sm font-semibold leading-none text-text-primary">3×</span></span>
                        <span class="border-l border-surface-600/70 pl-1.5 inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"><span class="text-2xs capitalize text-text-muted leading-none">delay</span>
                            <span class="font-mono text-1sm font-semibold leading-none text-text-primary">1000<span class="text-2xs text-text-muted">ms/</span>1000<span class="text-2xs text-text-muted">ms/</span>0<span class="text-2xs text-text-muted">ms</span></span></span></span></span>
                <span class="absolute right-1.5 top-1/2 flex h-6 -translate-y-1/2 items-center gap-1 text-text-tertiary"><span class="hidden text-2xs font-medium leading-none sm:inline">Open</span>
                    <svg class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span></div>

            <div class="flex items-center gap-2 px-1 text-[11px] text-text-tertiary">Live Spread
                <span class="font-mono text-text-secondary">0/1</span>
                <span class="ml-auto flex items-center gap-1 rounded border border-site-line px-1.5 py-0.5"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Inverted</span>
                <span class="flex items-center gap-1 rounded border border-site-line px-1.5 py-0.5"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 14H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Depth</span></div>

            <div class="mt-2 flex gap-1"><div class="relative h-28 min-w-0 flex-1"><svg viewbox="0 0 300 100" preserveaspectratio="none" class="absolute inset-0 h-full w-full overflow-hidden"><line x1="0" x2="300" y1="25" y2="25" class="stroke-text-muted/10" stroke-width="1" vector-effect="non-scaling-stroke"></line><line x1="0" x2="300" y1="50" y2="50" class="stroke-text-muted/10" stroke-width="1" vector-effect="non-scaling-stroke"></line><line x1="0" x2="300" y1="75" y2="75" class="stroke-text-muted/10" stroke-width="1" vector-effect="non-scaling-stroke"></line><line x1="0" x2="300" y1="11.5" y2="11.5" class="stroke-profit/60" stroke-width="1.5" stroke-dasharray="5 4" vector-effect="non-scaling-stroke"></line>
                        <line x1="0" x2="300" y1="88.5" y2="88.5" class="stroke-loss/60" stroke-width="1.5" stroke-dasharray="5 4" vector-effect="non-scaling-stroke"></line>
                        <g data-t="scroll"><path d="M-5 45.4C-2.5 45.4 -2.5 45.9 0 45.9C2.5 45.9 2.5 45.4 5 45.4C7.5 45.4 7.5 45 10 45C12.5 45 12.5 44.5 15 44.5C17.5 44.5 17.5 44.5 20 44.5C22.5 44.5 22.5 44.1 25 44.1C27.5 44.1 27.5 48.6 30 48.6C32.5 48.6 32.5 44.1 35 44.1C37.5 44.1 37.5 44.1 40 44.1C42.5 44.1 42.5 44.1 45 44.1C47.5 44.1 47.5 44.1 50 44.1C52.5 44.1 52.5 61.6 55 61.6C57.5 61.6 57.5 46.3 60 46.3C62.5 46.3 62.5 50.8 65 50.8C67.5 50.8 67.5 54 70 54C72.5 54 72.5 53.5 75 53.5C77.5 53.5 77.5 53.5 80 53.5C82.5 53.5 82.5 44.1 85 44.1C87.5 44.1 87.5 44.1 90 44.1C92.5 44.1 92.5 44.1 95 44.1C97.5 44.1 97.5 44.1 100 44.1C102.5 44.1 102.5 48.6 105 48.6C107.5 48.6 107.5 44.1 110 44.1C112.5 44.1 112.5 43.2 115 43.2C117.5 43.2 117.5 42.8 120 42.8C122.5 42.8 122.5 43.2 125 43.2C127.5 43.2 127.5 43.2 130 43.2C132.5 43.2 132.5 43.2 135 43.2C137.5 43.2 137.5 37 140 37C142.5 37 142.5 43.7 145 43.7C147.5 43.7 147.5 43.7 150 43.7C152.5 43.7 152.5 43.7 155 43.7C157.5 43.7 157.5 43.7 160 43.7C162.5 43.7 162.5 43.7 165 43.7C167.5 43.7 167.5 39.2 170 39.2C172.5 39.2 172.5 39.2 175 39.2C177.5 39.2 177.5 48.1 180 48.1C182.5 48.1 182.5 48.1 185 48.1C187.5 48.1 187.5 48.1 190 48.1C192.5 48.1 192.5 48.1 195 48.1C197.5 48.1 197.5 48.1 200 48.1C202.5 48.1 202.5 43.6 205 43.6C207.5 43.6 207.5 43.6 210 43.6C212.5 43.6 212.5 43.6 215 43.6C217.5 43.6 217.5 43.6 220 43.6C222.5 43.6 222.5 43.6 225 43.6C227.5 43.6 227.5 34.7 230 34.7C232.5 34.7 232.5 39.2 235 39.2C237.5 39.2 237.5 39.1 240 39.1C242.5 39.1 242.5 48.1 245 48.1C247.5 48.1 247.5 47.7 250 47.7C252.5 47.7 252.5 25.7 255 25.7C257.5 25.7 257.5 39.1 260 39.1C262.5 39.1 262.5 43.6 265 43.6C267.5 43.6 267.5 43.6 270 43.6C272.5 43.6 272.5 43.6 275 43.6C277.5 43.6 277.5 52.1 280 52.1C282.5 52.1 282.5 52.1 285 52.1C287.5 52.1 287.5 47.6 290 47.6C292.5 47.6 292.5 47.6 295 47.6C297.5 47.6 297.5 45.9 300 45.9L300 20.8C297.5 20.8 297.5 36.4 295 36.4C292.5 36.4 292.5 31.1 290 31.1C287.5 31.1 287.5 29.7 285 29.7C282.5 29.7 282.5 29.7 280 29.7C277.5 29.7 277.5 18.5 275 18.5C272.5 18.5 272.5 27.5 270 27.5C267.5 27.5 267.5 25.7 265 25.7C262.5 25.7 262.5 27.9 260 27.9C257.5 27.9 257.5 16.3 255 16.3C252.5 16.3 252.5 29.7 250 29.7C247.5 29.7 247.5 34.2 245 34.2C242.5 34.2 242.5 34.2 240 34.2C237.5 34.2 237.5 29.7 235 29.7C232.5 29.7 232.5 29.7 230 29.7C227.5 29.7 227.5 29.3 225 29.3C222.5 29.3 222.5 29.3 220 29.3C217.5 29.3 217.5 29.3 215 29.3C212.5 29.3 212.5 26.6 210 26.6C207.5 26.6 207.5 32.4 205 32.4C202.5 32.4 202.5 32.5 200 32.5C197.5 32.5 197.5 28 195 28C192.5 28 192.5 32.5 190 32.5C187.5 32.5 187.5 28 185 28C182.5 28 182.5 32.5 180 32.5C177.5 32.5 177.5 22.2 175 22.2C172.5 22.2 172.5 20.4 170 20.4C167.5 20.4 167.5 23.5 165 23.5C162.5 23.5 162.5 35.6 160 35.6C157.5 35.6 157.5 28.5 155 28.5C152.5 28.5 152.5 27.1 150 27.1C147.5 27.1 147.5 27.1 145 27.1C142.5 27.1 142.5 19.5 140 19.5C137.5 19.5 137.5 25.8 135 25.8C132.5 25.8 132.5 25.8 130 25.8C127.5 25.8 127.5 25.8 125 25.8C122.5 25.8 122.5 25.8 120 25.8C117.5 25.8 117.5 25.8 115 25.8C112.5 25.8 112.5 21.3 110 21.3C107.5 21.3 107.5 25.3 105 25.3C102.5 25.3 102.5 36 100 36C97.5 36 97.5 36 95 36C92.5 36 92.5 33.4 90 33.4C87.5 33.4 87.5 24.4 85 24.4C82.5 24.4 82.5 32 80 32C77.5 32 77.5 27.5 75 27.5C72.5 27.5 72.5 27.5 70 27.5C67.5 27.5 67.5 24.4 65 24.4C62.5 24.4 62.5 28.9 60 28.9C57.5 28.9 57.5 49 55 49C52.5 49 52.5 31.1 50 31.1C47.5 31.1 47.5 31.1 45 31.1C42.5 31.1 42.5 31.1 40 31.1C37.5 31.1 37.5 36 35 36C32.5 36 32.5 31.1 30 31.1C27.5 31.1 27.5 31.1 25 31.1C22.5 31.1 22.5 31.1 20 31.1C17.5 31.1 17.5 31.1 15 31.1C12.5 31.1 12.5 34.2 10 34.2C7.5 34.2 7.5 31.5 5 31.5C2.5 31.5 2.5 31.1 0 31.1C-2.5 31.1 -2.5 29.7 -5 29.7Z" class="fill-profit/10" data-t="band"></path>
                            <path d="M-5 45.4C-2.5 45.4 -2.5 45.9 0 45.9C2.5 45.9 2.5 45.4 5 45.4C7.5 45.4 7.5 45 10 45C12.5 45 12.5 44.5 15 44.5C17.5 44.5 17.5 44.5 20 44.5C22.5 44.5 22.5 44.1 25 44.1C27.5 44.1 27.5 48.6 30 48.6C32.5 48.6 32.5 44.1 35 44.1C37.5 44.1 37.5 44.1 40 44.1C42.5 44.1 42.5 44.1 45 44.1C47.5 44.1 47.5 44.1 50 44.1C52.5 44.1 52.5 61.6 55 61.6C57.5 61.6 57.5 46.3 60 46.3C62.5 46.3 62.5 50.8 65 50.8C67.5 50.8 67.5 54 70 54C72.5 54 72.5 53.5 75 53.5C77.5 53.5 77.5 53.5 80 53.5C82.5 53.5 82.5 44.1 85 44.1C87.5 44.1 87.5 44.1 90 44.1C92.5 44.1 92.5 44.1 95 44.1C97.5 44.1 97.5 44.1 100 44.1C102.5 44.1 102.5 48.6 105 48.6C107.5 48.6 107.5 44.1 110 44.1C112.5 44.1 112.5 43.2 115 43.2C117.5 43.2 117.5 42.8 120 42.8C122.5 42.8 122.5 43.2 125 43.2C127.5 43.2 127.5 43.2 130 43.2C132.5 43.2 132.5 43.2 135 43.2C137.5 43.2 137.5 37 140 37C142.5 37 142.5 43.7 145 43.7C147.5 43.7 147.5 43.7 150 43.7C152.5 43.7 152.5 43.7 155 43.7C157.5 43.7 157.5 43.7 160 43.7C162.5 43.7 162.5 43.7 165 43.7C167.5 43.7 167.5 39.2 170 39.2C172.5 39.2 172.5 39.2 175 39.2C177.5 39.2 177.5 48.1 180 48.1C182.5 48.1 182.5 48.1 185 48.1C187.5 48.1 187.5 48.1 190 48.1C192.5 48.1 192.5 48.1 195 48.1C197.5 48.1 197.5 48.1 200 48.1C202.5 48.1 202.5 43.6 205 43.6C207.5 43.6 207.5 43.6 210 43.6C212.5 43.6 212.5 43.6 215 43.6C217.5 43.6 217.5 43.6 220 43.6C222.5 43.6 222.5 43.6 225 43.6C227.5 43.6 227.5 34.7 230 34.7C232.5 34.7 232.5 39.2 235 39.2C237.5 39.2 237.5 39.1 240 39.1C242.5 39.1 242.5 48.1 245 48.1C247.5 48.1 247.5 47.7 250 47.7C252.5 47.7 252.5 25.7 255 25.7C257.5 25.7 257.5 39.1 260 39.1C262.5 39.1 262.5 43.6 265 43.6C267.5 43.6 267.5 43.6 270 43.6C272.5 43.6 272.5 43.6 275 43.6C277.5 43.6 277.5 52.1 280 52.1C282.5 52.1 282.5 52.1 285 52.1C287.5 52.1 287.5 47.6 290 47.6C292.5 47.6 292.5 47.6 295 47.6C297.5 47.6 297.5 45.9 300 45.9" fill="none" class="stroke-profit/20" stroke-width="6" vector-effect="non-scaling-stroke" data-t="greenGlow"></path>
                            <path d="M-5 29.7C-2.5 29.7 -2.5 31.1 0 31.1C2.5 31.1 2.5 31.5 5 31.5C7.5 31.5 7.5 34.2 10 34.2C12.5 34.2 12.5 31.1 15 31.1C17.5 31.1 17.5 31.1 20 31.1C22.5 31.1 22.5 31.1 25 31.1C27.5 31.1 27.5 31.1 30 31.1C32.5 31.1 32.5 36 35 36C37.5 36 37.5 31.1 40 31.1C42.5 31.1 42.5 31.1 45 31.1C47.5 31.1 47.5 31.1 50 31.1C52.5 31.1 52.5 49 55 49C57.5 49 57.5 28.9 60 28.9C62.5 28.9 62.5 24.4 65 24.4C67.5 24.4 67.5 27.5 70 27.5C72.5 27.5 72.5 27.5 75 27.5C77.5 27.5 77.5 32 80 32C82.5 32 82.5 24.4 85 24.4C87.5 24.4 87.5 33.4 90 33.4C92.5 33.4 92.5 36 95 36C97.5 36 97.5 36 100 36C102.5 36 102.5 25.3 105 25.3C107.5 25.3 107.5 21.3 110 21.3C112.5 21.3 112.5 25.8 115 25.8C117.5 25.8 117.5 25.8 120 25.8C122.5 25.8 122.5 25.8 125 25.8C127.5 25.8 127.5 25.8 130 25.8C132.5 25.8 132.5 25.8 135 25.8C137.5 25.8 137.5 19.5 140 19.5C142.5 19.5 142.5 27.1 145 27.1C147.5 27.1 147.5 27.1 150 27.1C152.5 27.1 152.5 28.5 155 28.5C157.5 28.5 157.5 35.6 160 35.6C162.5 35.6 162.5 23.5 165 23.5C167.5 23.5 167.5 20.4 170 20.4C172.5 20.4 172.5 22.2 175 22.2C177.5 22.2 177.5 32.5 180 32.5C182.5 32.5 182.5 28 185 28C187.5 28 187.5 32.5 190 32.5C192.5 32.5 192.5 28 195 28C197.5 28 197.5 32.5 200 32.5C202.5 32.5 202.5 32.4 205 32.4C207.5 32.4 207.5 26.6 210 26.6C212.5 26.6 212.5 29.3 215 29.3C217.5 29.3 217.5 29.3 220 29.3C222.5 29.3 222.5 29.3 225 29.3C227.5 29.3 227.5 29.7 230 29.7C232.5 29.7 232.5 29.7 235 29.7C237.5 29.7 237.5 34.2 240 34.2C242.5 34.2 242.5 34.2 245 34.2C247.5 34.2 247.5 29.7 250 29.7C252.5 29.7 252.5 16.3 255 16.3C257.5 16.3 257.5 27.9 260 27.9C262.5 27.9 262.5 25.7 265 25.7C267.5 25.7 267.5 27.5 270 27.5C272.5 27.5 272.5 18.5 275 18.5C277.5 18.5 277.5 29.7 280 29.7C282.5 29.7 282.5 29.7 285 29.7C287.5 29.7 287.5 31.1 290 31.1C292.5 31.1 292.5 36.4 295 36.4C297.5 36.4 297.5 20.8 300 20.8" fill="none" class="stroke-loss/20" stroke-width="6" vector-effect="non-scaling-stroke" data-t="redGlow"></path>
                            <path d="M-5 45.4C-2.5 45.4 -2.5 45.9 0 45.9C2.5 45.9 2.5 45.4 5 45.4C7.5 45.4 7.5 45 10 45C12.5 45 12.5 44.5 15 44.5C17.5 44.5 17.5 44.5 20 44.5C22.5 44.5 22.5 44.1 25 44.1C27.5 44.1 27.5 48.6 30 48.6C32.5 48.6 32.5 44.1 35 44.1C37.5 44.1 37.5 44.1 40 44.1C42.5 44.1 42.5 44.1 45 44.1C47.5 44.1 47.5 44.1 50 44.1C52.5 44.1 52.5 61.6 55 61.6C57.5 61.6 57.5 46.3 60 46.3C62.5 46.3 62.5 50.8 65 50.8C67.5 50.8 67.5 54 70 54C72.5 54 72.5 53.5 75 53.5C77.5 53.5 77.5 53.5 80 53.5C82.5 53.5 82.5 44.1 85 44.1C87.5 44.1 87.5 44.1 90 44.1C92.5 44.1 92.5 44.1 95 44.1C97.5 44.1 97.5 44.1 100 44.1C102.5 44.1 102.5 48.6 105 48.6C107.5 48.6 107.5 44.1 110 44.1C112.5 44.1 112.5 43.2 115 43.2C117.5 43.2 117.5 42.8 120 42.8C122.5 42.8 122.5 43.2 125 43.2C127.5 43.2 127.5 43.2 130 43.2C132.5 43.2 132.5 43.2 135 43.2C137.5 43.2 137.5 37 140 37C142.5 37 142.5 43.7 145 43.7C147.5 43.7 147.5 43.7 150 43.7C152.5 43.7 152.5 43.7 155 43.7C157.5 43.7 157.5 43.7 160 43.7C162.5 43.7 162.5 43.7 165 43.7C167.5 43.7 167.5 39.2 170 39.2C172.5 39.2 172.5 39.2 175 39.2C177.5 39.2 177.5 48.1 180 48.1C182.5 48.1 182.5 48.1 185 48.1C187.5 48.1 187.5 48.1 190 48.1C192.5 48.1 192.5 48.1 195 48.1C197.5 48.1 197.5 48.1 200 48.1C202.5 48.1 202.5 43.6 205 43.6C207.5 43.6 207.5 43.6 210 43.6C212.5 43.6 212.5 43.6 215 43.6C217.5 43.6 217.5 43.6 220 43.6C222.5 43.6 222.5 43.6 225 43.6C227.5 43.6 227.5 34.7 230 34.7C232.5 34.7 232.5 39.2 235 39.2C237.5 39.2 237.5 39.1 240 39.1C242.5 39.1 242.5 48.1 245 48.1C247.5 48.1 247.5 47.7 250 47.7C252.5 47.7 252.5 25.7 255 25.7C257.5 25.7 257.5 39.1 260 39.1C262.5 39.1 262.5 43.6 265 43.6C267.5 43.6 267.5 43.6 270 43.6C272.5 43.6 272.5 43.6 275 43.6C277.5 43.6 277.5 52.1 280 52.1C282.5 52.1 282.5 52.1 285 52.1C287.5 52.1 287.5 47.6 290 47.6C292.5 47.6 292.5 47.6 295 47.6C297.5 47.6 297.5 45.9 300 45.9" fill="none" class="stroke-profit" stroke-width="1.75" vector-effect="non-scaling-stroke" data-t="green"></path>
                            <path d="M-5 29.7C-2.5 29.7 -2.5 31.1 0 31.1C2.5 31.1 2.5 31.5 5 31.5C7.5 31.5 7.5 34.2 10 34.2C12.5 34.2 12.5 31.1 15 31.1C17.5 31.1 17.5 31.1 20 31.1C22.5 31.1 22.5 31.1 25 31.1C27.5 31.1 27.5 31.1 30 31.1C32.5 31.1 32.5 36 35 36C37.5 36 37.5 31.1 40 31.1C42.5 31.1 42.5 31.1 45 31.1C47.5 31.1 47.5 31.1 50 31.1C52.5 31.1 52.5 49 55 49C57.5 49 57.5 28.9 60 28.9C62.5 28.9 62.5 24.4 65 24.4C67.5 24.4 67.5 27.5 70 27.5C72.5 27.5 72.5 27.5 75 27.5C77.5 27.5 77.5 32 80 32C82.5 32 82.5 24.4 85 24.4C87.5 24.4 87.5 33.4 90 33.4C92.5 33.4 92.5 36 95 36C97.5 36 97.5 36 100 36C102.5 36 102.5 25.3 105 25.3C107.5 25.3 107.5 21.3 110 21.3C112.5 21.3 112.5 25.8 115 25.8C117.5 25.8 117.5 25.8 120 25.8C122.5 25.8 122.5 25.8 125 25.8C127.5 25.8 127.5 25.8 130 25.8C132.5 25.8 132.5 25.8 135 25.8C137.5 25.8 137.5 19.5 140 19.5C142.5 19.5 142.5 27.1 145 27.1C147.5 27.1 147.5 27.1 150 27.1C152.5 27.1 152.5 28.5 155 28.5C157.5 28.5 157.5 35.6 160 35.6C162.5 35.6 162.5 23.5 165 23.5C167.5 23.5 167.5 20.4 170 20.4C172.5 20.4 172.5 22.2 175 22.2C177.5 22.2 177.5 32.5 180 32.5C182.5 32.5 182.5 28 185 28C187.5 28 187.5 32.5 190 32.5C192.5 32.5 192.5 28 195 28C197.5 28 197.5 32.5 200 32.5C202.5 32.5 202.5 32.4 205 32.4C207.5 32.4 207.5 26.6 210 26.6C212.5 26.6 212.5 29.3 215 29.3C217.5 29.3 217.5 29.3 220 29.3C222.5 29.3 222.5 29.3 225 29.3C227.5 29.3 227.5 29.7 230 29.7C232.5 29.7 232.5 29.7 235 29.7C237.5 29.7 237.5 34.2 240 34.2C242.5 34.2 242.5 34.2 245 34.2C247.5 34.2 247.5 29.7 250 29.7C252.5 29.7 252.5 16.3 255 16.3C257.5 16.3 257.5 27.9 260 27.9C262.5 27.9 262.5 25.7 265 25.7C267.5 25.7 267.5 27.5 270 27.5C272.5 27.5 272.5 18.5 275 18.5C277.5 18.5 277.5 29.7 280 29.7C282.5 29.7 282.5 29.7 285 29.7C287.5 29.7 287.5 31.1 290 31.1C292.5 31.1 292.5 36.4 295 36.4C297.5 36.4 297.5 20.8 300 20.8" fill="none" class="stroke-loss" stroke-width="1.75" vector-effect="non-scaling-stroke" data-t="red"></path></g></svg><span class="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-surface-800 transition-[top] duration-1000 ease-in-out bg-profit shadow-[0_0_10px_var(--color-profit)]" style="top:45.9%" data-t="headG"></span>
                    <span class="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-surface-800 transition-[top] duration-1000 ease-in-out bg-loss shadow-[0_0_10px_var(--color-loss)]" style="top:20.8%" data-t="headR"></span></div>
                <div class="relative w-12 shrink-0 font-mono text-[9px] text-text-muted"><span class="absolute left-1 -translate-y-1/2" style="top:11.5%">0.250%</span>
                    <span class="absolute left-1 -translate-y-1/2" style="top:88.5%">0.050%</span>
                    <span class="absolute left-0 -translate-y-1/2 rounded-sm px-1 font-semibold text-site-cta-ink transition-[top] duration-1000 ease-in-out bg-profit" style="top:45.9%" data-t="tagG">0.161%</span>
                    <span class="absolute left-0 -translate-y-1/2 rounded-sm px-1 font-semibold text-site-cta-ink transition-[top] duration-1000 ease-in-out bg-loss" style="top:20.8%" data-t="tagR">0.226%</span></div></div>
            <div class="relative mr-12 mt-1 h-3 font-mono text-[9px] text-text-muted"><span class="absolute -translate-x-1/2" style="left:16.7%" data-clock="50">18:53:05</span><span class="absolute -translate-x-1/2" style="left:41.7%" data-clock="35">18:53:20</span><span class="absolute -translate-x-1/2" style="left:66.7%" data-clock="20">18:53:35</span><span class="absolute -translate-x-1/2" style="left:91.7%" data-clock="5">18:53:50</span></div>

            <div class="mt-3 flex justify-center gap-2 font-medium"><span class="flex items-center gap-1.5 rounded-full bg-site-cta px-3.5 py-1.5 text-site-cta-ink"><svg class="h-3 w-3 fill-current" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Stop</span>
                <span class="flex items-center gap-1.5 rounded-full border border-site-line-strong px-3.5 py-1.5 text-text-primary"><svg class="h-3 w-3" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Close</span></div>
            <div class="mt-3 flex justify-center gap-5 border-t border-site-line pt-2 text-[11px] text-text-tertiary"><span class="flex items-center gap-1"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M10 9H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5C18 9.88071 16.8807 11 15.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18L13.5 15L11 17L6 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"></path></svg>Spread</span>
                <span class="flex items-center gap-1"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 16C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15C15.2239 15 15 15.2239 15 15.5C15 15.7761 15.2239 16 15.5 16Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>Funding</span>
                <span class="flex items-center gap-1"><svg class="h-3.5 w-3.5" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 14H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>My Trades</span></div></div></div></div></div></div>

<div class="rounded-xl bg-site-win border border-site-line-strong shadow-window-sm overflow-hidden absolute right-8 top-[calc(100%-1.75rem)] hidden w-[20.5rem] lg:block" aria-hidden="true"><div class="flex items-center gap-2.5 border-b border-site-line px-3.5 py-3"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-surface-700 text-text-primary"><img src="https://found-oak-10658508.figma.site/settlepal-mark.png" alt="" class="sp-dashboard-mark"></span>
        <span class="flex flex-col leading-tight"><span class="text-[13px] font-medium text-text-primary">SettlePal</span><span class="text-[11px] text-text-muted">Telegram alerts</span></span></div>
    <div class="p-3.5 text-[12.5px] leading-snug text-text-primary"><div class="flex flex-col gap-1 rounded-[10px] bg-surface-700 px-3 py-2.5"><span>Opened MEW. Long Binance 0.0004626, short Bybit 0.0004644. Spread 0.39%.</span>
            <span class="self-end text-[10.5px] text-text-muted">18:53</span></div></div></div></div></div>
        </div></section>
<section class="sp-benefit-section max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28">
  <div class="sp-section-intro">
    <span class="sp-section-kicker">Built for traders who want more from their exchange accounts.</span>
    <div class="sp-section-heading-grid">
      <h2>Advanced Trading.<br>Made Accessible.</h2>
      <p>For traders who want smarter ways to trade across multiple cryptocurrency exchanges.</p>
    </div>
  </div>
  <div class="sp-pictogram-grid">
    <article class="sp-pictogram-card">
      <span class="sp-pictogram" aria-hidden="true"><svg viewbox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M3.8 9h16.4M3.8 15h16.4M12 3.5c2.2 2.3 3.3 5.2 3.3 8.5S14.2 18.2 12 20.5C9.8 18.2 8.7 15.3 8.7 12S9.8 5.8 12 3.5Z"></path></svg></span>
      <span class="sp-card-number">01</span>
      <h3>Multi-Exchange Traders</h3>
      <p>Connect multiple exchange accounts in one place.</p>
    </article>
    <article class="sp-pictogram-card">
      <span class="sp-pictogram" aria-hidden="true"><svg viewbox="0 0 24 24"><rect x="4" y="7" width="16" height="12" rx="3"></rect><path d="M9 7V5.5a3 3 0 0 1 6 0V7M8.5 12h.01M15.5 12h.01M9 16h6"></path></svg></span>
      <span class="sp-card-number">02</span>
      <h3>Technology-Driven Traders</h3>
      <p>Let intelligent AI technology scan markets and identify opportunities.</p>
    </article>
    <article class="sp-pictogram-card">
      <span class="sp-pictogram" aria-hidden="true"><svg viewbox="0 0 24 24"><path d="m13.2 2.8-8 11.1h6l-.6 7.3 8.2-11.4h-6l.4-7Z"></path></svg></span>
      <span class="sp-card-number">03</span>
      <h3>Hands-Free Trading</h3>
      <p>Automate trade execution without constantly monitoring the markets.</p>
    </article>
  </div>
</section>
<section class="sp-benefit-section max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28">
  <div class="sp-section-intro">
    <span class="sp-section-kicker">Markets move around the clock.</span>
    <div class="sp-section-heading-grid">
      <h2>Opportunities Don’t Wait.<br>Neither Should You.</h2>
      <p>Crypto markets move 24/7. Price differences and funding rates create opportunities across exchanges every day.</p>
    </div>
  </div>
  <div class="sp-pictogram-grid">
    <article class="sp-pictogram-card">
      <span class="sp-pictogram" aria-hidden="true"><svg viewbox="0 0 24 24"><path d="M4 19.5h16M6.5 16V11M11 16V6.5M15.5 16V9M20 16V4"></path></svg></span>
      <span class="sp-card-number">01</span>
      <h3>Capture Market Spreads</h3>
      <p>Identify price differences between supported exchanges.</p>
    </article>
    <article class="sp-pictogram-card">
      <span class="sp-pictogram" aria-hidden="true"><svg viewbox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="4.5"></circle><path d="M12 12 18.5 6"></path><circle class="sp-icon-fill" cx="17" cy="7.5" r="1.4"></circle></svg></span><span class="sp-card-number">02</span>
      <h3>Real-Time Intelligence</h3>
      <p>Continuously scan markets for potential trading opportunities.</p>
    </article>
    <article class="sp-pictogram-card">
      <span class="sp-pictogram" aria-hidden="true"><svg viewbox="0 0 24 24"><path d="M9 8.5 7.2 6.7a3 3 0 0 0-4.2 4.2l3 3a3 3 0 0 0 4.2 0l1.3-1.3M15 15.5l1.8 1.8a3 3 0 0 0 4.2-4.2l-3-3a3 3 0 0 0-4.2 0l-1.3 1.3M8.5 15.5l7-7"></path></svg></span><span class="sp-card-number">03</span>
      <h3>Trade Directly</h3>
      <p>Execute through your own connected exchange accounts.</p>
    </article>
  </div>
  <div class="sp-selling-strip">
    <div>
      <span class="sp-strip-icon" aria-hidden="true"><svg viewbox="0 0 24 24"><path d="M12 2.8 20 6v5.4c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3.2Z"></path><path d="m8.5 12 2.2 2.2 4.8-5"></path></svg></span>
      <span><b>Non-Custodial</b><small>Your funds stay on your exchange.</small></span>
    </div>
    <div>
      <span class="sp-strip-icon" aria-hidden="true"><svg viewbox="0 0 24 24"><circle cx="8.5" cy="12" r="4.5"></circle><path d="M13 12h8M18 12v3M15 12v2"></path></svg></span>
      <span><b>Your Own API Connection</b><small>Trade-only API permissions.</small></span>
    </div>
    <div>
      <span class="sp-strip-icon" aria-hidden="true"><svg viewbox="0 0 24 24"><path d="M9.5 4.2A3.7 3.7 0 0 0 6 8a3.6 3.6 0 0 0 .6 2A4.2 4.2 0 0 0 8 18h2M14.5 4.2A3.7 3.7 0 0 1 18 8a3.6 3.6 0 0 1-.6 2A4.2 4.2 0 0 1 16 18h-2M12 3v18M9 8.5h3M12 14h3"></path></svg></span>
      <span><b>Powered by SettlePal AI</b><small>Advanced market scanning and automated execution.</small></span>
    </div>
  </div>
</section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16" aria-label="SettlePal in numbers"><dl class="grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-x-14 gap-y-9"><div class="flex flex-col gap-2"><dt class="order-2 max-w-64 text-sm leading-relaxed text-text-secondary text-pretty">target time from a price update to a trading decision on your server</dt>
                    <dd class="order-1 text-[2.75rem] font-medium leading-none tracking-[-0.045em] tabular-nums text-text-primary sm:text-[3.25rem]">48 µs</dd></div><div class="flex flex-col gap-2"><dt class="order-2 max-w-64 text-sm leading-relaxed text-text-secondary text-pretty">backtests an hour: every exchange pair replayed over 8 hours of order books, at each order size</dt>
                    <dd class="order-1 text-[2.75rem] font-medium leading-none tracking-[-0.045em] tabular-nums text-text-primary sm:text-[3.25rem]">11M</dd></div><div class="flex flex-col gap-2"><dt class="order-2 max-w-64 text-sm leading-relaxed text-text-secondary text-pretty">perpetual markets the product is designed to track</dt>
                    <dd class="order-1 text-[2.75rem] font-medium leading-none tracking-[-0.045em] tabular-nums text-text-primary sm:text-[3.25rem]">12,828</dd></div><div class="flex flex-col gap-2"><dt class="order-2 max-w-64 text-sm leading-relaxed text-text-secondary text-pretty">two-leg execution paths represented in the engine</dt>
                    <dd class="order-1 text-[2.75rem] font-medium leading-none tracking-[-0.045em] tabular-nums text-text-primary sm:text-[3.25rem]">84,756</dd></div></dl></section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-14"><p class="mb-7 text-center font-mono text-[11px] uppercase tracking-[0.06em] text-text-muted" aria-hidden="true">19+ exchanges</p>
    <div data-loop class="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]"><div class="vb-track flex w-max motion-reduce:w-auto"><ul class="flex motion-reduce:flex-wrap motion-reduce:justify-center shrink-0 items-center gap-x-12 gap-y-6 pr-12" aria-label="19+ exchanges"><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Binance</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Bybit</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">MEXC</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Gate.io</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">BingX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">OKX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Bitget</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">KuCoin</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/102.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">HTX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/927.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Phemex</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6637.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">BloFin</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/8112.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Hyperliquid</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/16.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Poloniex</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/5751.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">WEEX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1452.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Aster</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://arbitron.app/images/exchanges/lighter.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Lighter</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6137.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Toobit</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/522.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Deribit</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Kraken</li></ul><ul class="flex motion-reduce:hidden shrink-0 items-center gap-x-12 gap-y-6 pr-12" aria-hidden="true"><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Binance</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Bybit</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">MEXC</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Gate.io</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">BingX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">OKX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Bitget</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">KuCoin</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/102.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">HTX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/927.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Phemex</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6637.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">BloFin</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/8112.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Hyperliquid</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/16.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Poloniex</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/5751.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">WEEX</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1452.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Aster</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://arbitron.app/images/exchanges/lighter.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Lighter</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6137.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Toobit</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/522.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Deribit</li><li class="group/v flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-[-0.02em] text-text-tertiary transition-colors duration-200 hover:text-text-primary"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png" alt width="22" height="22" loading="lazy" class="rounded-md opacity-70 grayscale transition duration-200 group-hover/v:opacity-100 group-hover/v:grayscale-0">Kraken</li></ul></div></div></section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28"><div class="grid gap-6 md:grid-cols-2 md:gap-16 items-start"><h2 class="text-[2rem] sm:text-[2.75rem] font-medium tracking-[-0.04em] leading-[1.05] text-text-primary text-balance"><span class="block">Scan</span><span class="block">every exchange pair</span></h2>
    <div class="flex flex-col items-start gap-4"><p class="text-[17px] leading-relaxed text-text-primary text-pretty">The scanner will compare cross-exchange spreads on perpetual futures at your order size, with recent backtests and taker fees on both legs already reflected.</p></div></div><div class="site-stage rounded-[4px] px-3 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 mt-16"><div class="rounded-xl bg-site-win border border-site-line-strong shadow-window overflow-hidden" aria-hidden="true"><div class="flex flex-wrap items-center gap-2 border-b border-site-line px-4 py-3 text-xs"><span class="rounded-full bg-surface-700 px-2.5 py-1 text-text-primary">Spread arbitrage</span>
                <span class="px-2.5 py-1 text-text-secondary">Funding arbitrage</span>
                <span class="ml-3 text-text-muted">Size</span>
                <span class="rounded-full border border-site-line-strong px-2.5 py-1 font-mono text-text-primary">$100</span>
                <span class="ml-auto flex items-center gap-1.5 text-text-muted"><span class="h-1.5 w-1.5 rounded-full bg-profit"></span>Found: 213</span></div>
            <div class="flex"><div class="min-w-0 flex-1 overflow-x-auto"><div class="min-w-[40rem]"><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] gap-3 px-4 py-2.5 text-[11px] text-text-muted"><span>Pair</span><span>Exchanges</span>
                            <span class="text-right">Profit per cycle</span>
                            <span class="text-right">Cycles</span><span class="text-right">Confidence</span></div><div class="relative border-t border-site-line"><div class="opacity-50 blur-[5px]" aria-hidden="true"><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] items-center gap-3 border-b border-site-line px-4 py-3.5"><span class="h-2.5 w-4/5 rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-3/5 rounded-sm bg-surface-700"></span>
                                            <span class="h-2.5 w-1/2 justify-self-end rounded-sm bg-profit/60"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span></div><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] items-center gap-3 border-b border-site-line px-4 py-3.5"><span class="h-2.5 w-4/5 rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-3/5 rounded-sm bg-surface-700"></span>
                                            <span class="h-2.5 w-1/2 justify-self-end rounded-sm bg-profit/60"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span></div><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] items-center gap-3 border-b border-site-line px-4 py-3.5"><span class="h-2.5 w-4/5 rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-3/5 rounded-sm bg-surface-700"></span>
                                            <span class="h-2.5 w-1/2 justify-self-end rounded-sm bg-profit/60"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span></div><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] items-center gap-3 border-b border-site-line px-4 py-3.5"><span class="h-2.5 w-4/5 rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-3/5 rounded-sm bg-surface-700"></span>
                                            <span class="h-2.5 w-1/2 justify-self-end rounded-sm bg-profit/60"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span></div><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] items-center gap-3 border-b border-site-line px-4 py-3.5"><span class="h-2.5 w-4/5 rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-3/5 rounded-sm bg-surface-700"></span>
                                            <span class="h-2.5 w-1/2 justify-self-end rounded-sm bg-profit/60"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span>
                                            <span class="h-2.5 w-1/3 justify-self-end rounded-sm bg-surface-600"></span></div></div>
                                <div class="absolute inset-0 flex items-center justify-start p-4 md:justify-center"><div class="sticky left-4 flex max-w-[19rem] flex-wrap items-center gap-4 rounded-xl border border-site-line-strong bg-surface-800 px-5 py-3.5 md:max-w-none md:justify-center"><svg class="h-[18px] w-[18px] shrink-0 text-text-secondary" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>
                                        <span class="flex flex-col gap-0.5"><span class="text-sm font-medium text-text-primary">5 better spreads right now</span>
                                            <span class="text-[12.5px] text-text-tertiary">The Scanner plan shows every row, at every order size.</span></span></div></div></div><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] items-center gap-3 border-t border-site-line px-4 py-2.5 text-[12.5px] bg-surface-700/60"><span class="font-medium text-text-primary">AKE-USDT</span>
                                <span class="flex items-center gap-1.5 text-text-secondary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt width="14" height="14" loading="lazy" class="rounded-[3px]">MEXC</span><span class="text-text-muted">/</span><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt width="14" height="14" loading="lazy" class="rounded-[3px]">BingX</span></span>
                                <span class="text-right font-mono text-profit">0.116%</span>
                                <span class="text-right font-mono text-text-secondary">46</span>
                                <span class="text-right font-mono text-text-secondary">71</span></div><div class="grid grid-cols-[1.1fr_1.8fr_1fr_0.7fr_0.8fr] items-center gap-3 border-t border-site-line px-4 py-2.5 text-[12.5px] "><span class="font-medium text-text-primary">AKE-USDT</span>
                                <span class="flex items-center gap-1.5 text-text-secondary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png" alt width="14" height="14" loading="lazy" class="rounded-[3px]">Gate.io</span><span class="text-text-muted">/</span><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt width="14" height="14" loading="lazy" class="rounded-[3px]">BingX</span></span>
                                <span class="text-right font-mono text-profit">0.116%</span>
                                <span class="text-right font-mono text-text-secondary">44</span>
                                <span class="text-right font-mono text-text-secondary">71</span></div></div></div>

                <div class="hidden w-[19rem] shrink-0 flex-col gap-3 border-l border-site-line p-4 text-[12.5px] lg:flex"><div class="flex items-center justify-between"><span class="text-sm font-medium text-text-primary">AKE-USDT</span>
                        <span class="text-[11px] text-text-muted">MEXC / BingX</span></div>
                    <div class="flex items-baseline gap-2"><span class="font-mono text-[28px] leading-none tracking-[-0.03em] text-profit">0.116%</span>
                        <span class="text-[11px] text-text-muted">per cycle, after fees</span></div>
                    <dl class="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5 text-text-secondary"><dt>Cycles</dt><dd class="font-mono text-text-primary">46</dd>
                        <dt>Fees / cycle</dt><dd class="font-mono text-text-primary">0.26%</dd>
                        <dt>Confidence</dt><dd class="font-mono text-text-primary">71</dd>
                        <dt>Vol A</dt><dd class="font-mono text-text-primary">$61.9M</dd>
                        <dt>Vol B</dt><dd class="font-mono text-text-primary">$21.9M</dd></dl>
                    <span class="border-t border-site-line pt-2.5 text-text-primary">Create a strategy from this row →</span></div></div></div></div>
        <p class="mt-3 text-xs text-text-muted">Preview scanner rows at a $100 order size. This page shows pairs with confidence 70 or more and at least $2M of daily volume on both legs.</p></section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28"><div class="grid gap-6 md:grid-cols-2 md:gap-16 items-start"><h2 class="text-[2rem] sm:text-[2.75rem] font-medium tracking-[-0.04em] leading-[1.05] text-text-primary text-balance"><span class="block">Trade</span><span class="block">both legs at once</span></h2>
    <div class="flex flex-col items-start gap-4"><p class="text-[17px] leading-relaxed text-text-primary text-pretty">SettlePal will go long where the coin is cheap and short where it is expensive, sending both orders together from your server. You will be able to set the opening and closing spreads, or let Auto Mode follow the pair's history.</p></div></div>

    <div class="site-stage rounded-[4px] px-3 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 mt-16 grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-center" aria-hidden="true"><div class="rounded-xl bg-site-win border border-site-line-strong shadow-window overflow-hidden flex flex-col gap-3 p-4 text-[13px] sm:p-5"><span class="text-sm font-medium text-text-primary">New strategy</span>
            <div class="grid grid-cols-2 gap-2.5"><div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Pair</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span>MEW-USDT</span></span></div>
                <div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Mode</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span class="flex w-full justify-between"><span>Auto Mode</span><span class="text-site-acc" aria-hidden="true">●</span></span></span></div>
                <div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Long on</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">OKX</span></span></div>
                <div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Short on</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">Bybit</span></span></div>
                <div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Open at</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span class="font-mono">1.45%</span></span></div>
                <div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Close at</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span class="font-mono">0.85%</span></span></div>
                <div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Size per leg</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span class="font-mono">$500</span></span></div>
                <div class="flex flex-col gap-1.5"><span class="text-[11px] text-text-muted">Leverage</span>
            <span class="flex items-center gap-2 rounded-[7px] border border-site-line-strong px-2.5 py-2 text-text-primary"><span class="font-mono">3×</span></span></div></div>
            <div class="flex items-center justify-between border-t border-site-line pt-3 text-text-secondary"><span>Check depth before each leg</span>
                <span class="relative h-[17px] w-[30px] rounded-full bg-site-acc"><span class="absolute right-0.5 top-0.5 h-[13px] w-[13px] rounded-full bg-site-win"></span></span></div>
            <span class="self-end rounded-full bg-site-cta px-3.5 py-2 font-medium text-site-cta-ink">Start strategy</span></div>

        <div class="rounded-xl bg-site-win border border-site-line-strong shadow-window-sm overflow-hidden p-4 text-[12.5px]"><span class="flex justify-between pb-2 text-[11px] text-text-muted"><span>MEW-USDT, last price</span><span>07:28 UTC</span></span><div class="grid grid-cols-[1fr_auto_3.25rem] items-center gap-2.5 rounded-md px-2 py-1.5 bg-site-band"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">Bybit</span>
                    <span class="font-mono text-text-primary">0.0005150</span>
                    <span class="text-right text-[11px] text-site-acc">short</span></div><div class="grid grid-cols-[1fr_auto_3.25rem] items-center gap-2.5 rounded-md px-2 py-1.5 "><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">MEXC</span>
                    <span class="font-mono text-text-primary">0.0005092</span>
                    <span class="text-right text-[11px] text-site-acc"></span></div><div class="grid grid-cols-[1fr_auto_3.25rem] items-center gap-2.5 rounded-md px-2 py-1.5 "><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">Binance</span>
                    <span class="font-mono text-text-primary">0.0005092</span>
                    <span class="text-right text-[11px] text-site-acc"></span></div><div class="grid grid-cols-[1fr_auto_3.25rem] items-center gap-2.5 rounded-md px-2 py-1.5 "><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">Bitget</span>
                    <span class="font-mono text-text-primary">0.0005091</span>
                    <span class="text-right text-[11px] text-site-acc"></span></div><div class="grid grid-cols-[1fr_auto_3.25rem] items-center gap-2.5 rounded-md px-2 py-1.5 "><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">BingX</span>
                    <span class="font-mono text-text-primary">0.0005089</span>
                    <span class="text-right text-[11px] text-site-acc"></span></div><div class="grid grid-cols-[1fr_auto_3.25rem] items-center gap-2.5 rounded-md px-2 py-1.5 bg-site-band"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">OKX</span>
                    <span class="font-mono text-text-primary">0.0005064</span>
                    <span class="text-right text-[11px] text-site-acc">long</span></div><span class="mt-2 flex justify-between border-t border-site-line pt-2.5"><span class="text-text-secondary">OKX → Bybit</span>
                <span class="font-mono text-site-acc">+1.70%</span></span></div></div></section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28"><div class="grid gap-6 md:grid-cols-2 md:gap-16 items-start"><h2 class="text-[2rem] sm:text-[2.75rem] font-medium tracking-[-0.04em] leading-[1.05] text-text-primary text-balance"><span class="block">Watch</span><span class="block">from anywhere</span></h2>
    <div class="flex flex-col items-start gap-4"><p class="text-[17px] leading-relaxed text-text-primary text-pretty">Every open, close, and funding payment will reach Telegram as it happens. Trade-only keys will never request withdrawal access and can be locked to your server's IP.</p></div></div>

    <div class="site-stage rounded-[4px] px-3 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 mt-16 flex flex-col items-center gap-8 md:flex-row" aria-hidden="true"><div class="w-[18rem] shrink-0 rounded-[2.75rem] border border-site-line-strong bg-surface-900 p-3 shadow-window"><div class="flex h-[26rem] flex-col overflow-hidden rounded-[2.1rem] bg-site-win"><div class="flex items-center gap-2.5 border-b border-site-line px-4 pb-3 pt-8"><span class="flex h-8 w-8 items-center justify-center rounded-full bg-surface-700 text-text-primary"><img src="https://found-oak-10658508.figma.site/settlepal-mark.png" alt="" class="sp-dashboard-mark"></span>
                    <span class="flex flex-col leading-tight"><span class="text-[13.5px] font-medium text-text-primary">SettlePal</span><span class="text-[11px] text-text-muted">bot</span></span></div>
                <div class="flex flex-1 flex-col justify-end gap-2.5 px-3 py-4 text-[12.5px] leading-snug text-text-primary"><div class="flex flex-col gap-1 rounded-xl bg-surface-700 px-3 py-2.5"><span>Server online. Tokyo, 203.0.113.24.</span>
            <span class="self-end text-[10px] text-text-muted">03:12</span></div>
                    <div class="flex flex-col gap-1 rounded-xl bg-surface-700 px-3 py-2.5"><span>Opened MEW-USDT. Long Binance 0.0005065, short Bybit 0.0005141. Spread 1.50%.</span>
            <span class="self-end text-[10px] text-text-muted">05:00</span></div>
                    <div class="flex flex-col gap-1 rounded-xl bg-surface-700 px-3 py-2.5"><span>Closed MEW-USDT at 0.84%. +$3.26 before fees, held 42 min.</span>
            <span class="self-end text-[10px] text-text-muted">05:42</span></div></div></div></div>

        <div class="rounded-xl bg-site-win border border-site-line-strong shadow-window overflow-hidden w-full"><div class="flex items-center gap-2.5 border-b border-site-line px-4 py-3 text-[12.5px]"><span class="font-medium text-text-primary">Server</span>
                <span class="flex items-center gap-1.5 rounded-full bg-profit/15 px-2 py-0.5 text-[11px] text-profit"><span class="h-1.5 w-1.5 rounded-full bg-profit"></span>Online</span></div>
            <div class="grid grid-cols-1 border-b border-site-line sm:grid-cols-3"><div class="flex flex-col gap-1 px-4 py-3.5"><span class="text-[11px] text-text-muted">Region</span><span class="text-sm text-text-primary">Tokyo</span></div>
                <div class="flex flex-col gap-1 border-site-line px-4 py-3.5 sm:border-l"><span class="text-[11px] text-text-muted">Static IP</span><span class="font-mono text-sm text-text-primary">203.0.113.24</span></div>
                <div class="flex flex-col gap-1 border-site-line px-4 py-3.5 sm:border-l"><span class="text-[11px] text-text-muted">Move to</span><span class="text-sm text-text-secondary">Singapore · Frankfurt · London</span></div></div>
            <div class="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-2.5 px-4 py-2.5 text-[11px] text-text-muted"><span>API key</span><span>Read</span><span>Trade</span><span>Withdraw</span></div><div class="grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center gap-2.5 border-t border-site-line px-4 py-2.5 text-[12.5px]"><span class="text-text-primary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">Binance</span></span>
                    <span class="text-profit">Yes</span><span class="text-profit">Yes</span><span class="text-text-muted">Never</span></div><div class="grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center gap-2.5 border-t border-site-line px-4 py-2.5 text-[12.5px]"><span class="text-text-primary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">Bybit</span></span>
                    <span class="text-profit">Yes</span><span class="text-profit">Yes</span><span class="text-text-muted">Never</span></div><div class="grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center gap-2.5 border-t border-site-line px-4 py-2.5 text-[12.5px]"><span class="text-text-primary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">OKX</span></span>
                    <span class="text-profit">Yes</span><span class="text-profit">Yes</span><span class="text-text-muted">Never</span></div><div class="grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center gap-2.5 border-t border-site-line px-4 py-2.5 text-[12.5px]"><span class="text-text-primary"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt width="15" height="15" loading="lazy" class="rounded-[3px]">MEXC</span></span>
                    <span class="text-profit">Yes</span><span class="text-profit">Yes</span><span class="text-text-muted">Never</span></div></div></div>
    <p class="mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary">SettlePal will set up and run a dedicated server for each product account, with its own static IP and regional deployment options. There will be nothing for you to install or maintain.</p></section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28"><h2 class="text-[2rem] sm:text-[2.75rem] font-medium tracking-[-0.04em] leading-[1.05] text-text-primary text-balance"><span class="block">The data the terminal will trade on.</span><span class="block">In public.</span></h2>

    <div class="mt-14 grid gap-3.5 md:grid-cols-3"><div class="rounded-xl bg-surface-800/60 border border-site-line flex flex-col gap-4 p-5 sm:p-6 min-w-0 md:col-span-3"><div class="flex flex-col gap-1"><span class="font-mono text-[10.5px] uppercase tracking-[0.06em] text-text-muted">Funding rates</span>
                    <span class="text-base font-medium text-text-primary">Every venue, every coin, in one view</span>
                    <span class="text-[13.5px] text-text-secondary">Funding per 8 hours. Red means longs pay, green means shorts pay.</span></div>
                <div class="overflow-x-auto" aria-hidden="true"><div class="grid min-w-[38rem] grid-cols-[4.25rem_repeat(8,minmax(3.5rem,1fr))] gap-1 font-mono text-[11.5px]"><span class="py-1.5 text-text-muted">%, 8 h</span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">MEXC</span></span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">Gate.io</span></span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/1064.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">BingX</span></span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">Bitget</span></span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/333.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">LBank</span></span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">Bybit</span></span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/6137.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">Toobit</span></span><span class="flex justify-center py-1.5"><span class="inline-flex items-center gap-1.5"><img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/525.png" alt width="16" height="16" loading="lazy" class="rounded-[3px]">XT.com</span></span><span class="py-1.5 font-sans font-medium text-text-primary">BTC</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.000</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.007</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/10">0.006</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.001</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.000</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/10">0.005</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.000</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.000</span><span class="py-1.5 font-sans font-medium text-text-primary">ETH</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.007</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/10">0.006</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.009</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.007</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.007</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.007</span><span class="py-1.5 font-sans font-medium text-text-primary">PEPE</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/10">0.005</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-profit/25">-0.018</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.015</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.010</span><span class="py-1.5 font-sans font-medium text-text-primary">SOL</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.001</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.007</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/10">0.005</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.002</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.001</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/10">0.005</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.001</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/5">0.001</span><span class="py-1.5 font-sans font-medium text-text-primary">XRP</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/10">0.005</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/15">0.008</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span><span class="rounded py-1.5 text-center text-text-primary bg-loss/25">0.010</span></div></div>
                <span class="text-xs text-text-muted">Preview data from each exchange, 14:09 UTC.</span></div><div class="rounded-xl bg-surface-800/60 border border-site-line flex flex-col gap-4 p-5 sm:p-6 min-w-0"><div class="flex flex-col gap-1"><span class="font-mono text-[10.5px] uppercase tracking-[0.06em] text-text-muted">API</span>
                    <span class="text-base font-medium text-text-primary">The same numbers, as JSON</span></div>
                <pre class="rounded-lg bg-surface-900 m-0 overflow-x-auto p-3 font-mono text-[11px] leading-relaxed text-text-secondary" aria-hidden="true"><span class="text-profit">200 OK</span>  GET /api/v1/funding/BTC

{
  "data": {
    "coin": "BTC",
    "venue_count": 25,
    "spread_pct": <span class="text-site-acc">0.012800</span>,
    "best_short_exchange": "Htx",
    "best_long_exchange": "Grvt"
  }
}</pre></div><div class="rounded-xl bg-surface-800/60 border border-site-line flex flex-col gap-4 p-5 sm:p-6 min-w-0"><div class="flex flex-col gap-1"><span class="font-mono text-[10.5px] uppercase tracking-[0.06em] text-text-muted">MCP</span>
                    <span class="text-base font-medium text-text-primary">Ask your AI assistant</span></div>
                <div class="rounded-lg bg-surface-900 flex flex-col gap-2.5 p-3 text-[12.5px] leading-snug" aria-hidden="true"><span class="max-w-[85%] self-end rounded-[10px] bg-surface-700 px-2.5 py-2 text-text-primary">Where do shorts earn the most funding on BTC right now?</span>
                    <span class="font-mono text-[11px] text-text-muted">settlepal · get_funding</span>
                    <span class="text-text-primary">HTX, at 0.0100% per 8 h. GRVT is lowest at -0.0028%.</span></div></div><div class="rounded-xl bg-surface-800/60 border border-site-line flex flex-col gap-4 p-5 sm:p-6 min-w-0"><div class="flex flex-col gap-1"><span class="font-mono text-[10.5px] uppercase tracking-[0.06em] text-text-muted">API key</span>
                <span class="text-base font-medium text-text-primary">No withdrawal permission</span></div>
            <div class="flex flex-col text-[12.5px] text-text-primary" aria-hidden="true"><span class="flex justify-between border-t border-site-line py-2.5">Read<span class="text-profit">On</span></span>
                <span class="flex justify-between border-t border-site-line py-2.5">Futures trading<span class="text-profit">On</span></span>
                <span class="flex justify-between border-t border-site-line py-2.5">Withdrawals<span class="text-text-muted">Never requested</span></span>
                <span class="flex justify-between border-t border-site-line py-2.5">IP whitelist<span class="font-mono">203.0.113.24</span></span></div></div></div></section>
<div class="sp-dashboard-cta-wrap" style="padding-top:4rem;padding-bottom:4rem"><a class="sp-dashboard-cta" href="https://login.settlepal.com/login">Start Today <svg viewbox="0 0 20 20" aria-hidden="true"><path d="M3 10h14M12.5 5.5 17 10l-4.5 4.5"></path></svg></a></div>`;

  var styles = `:root,:host{--font-sans:"Onest", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-lg:32rem;--container-xl:36rem;--container-2xl:42rem;--container-3xl:48rem;--container-4xl:56rem;--container-5xl:64rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--text-6xl:3.75rem;--text-6xl--line-height:1;--text-7xl:4.5rem;--text-7xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-normal:0em;--tracking-wide:.025em;--tracking-wider:.05em;--tracking-widest:.1em;--leading-tight:1.25;--leading-snug:1.375;--leading-normal:1.5;--leading-relaxed:1.625;--radius-sm:2px;--radius-md:3px;--radius-lg:4px;--radius-xl:6px;--radius-2xl:8px;--ease-in:cubic-bezier(.4, 0, 1, 1);--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-ping:ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--blur-sm:8px;--blur-md:12px;--blur-lg:16px;--blur-xl:24px;--aspect-video:16 / 9;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-surface-900:#0a0a0b;--color-surface-800:#131315;--color-surface-700:#1c1c1f;--color-surface-600:#2e2e33;--color-surface-500:#4a4a51;--color-accent-500:#f5ae73;--color-accent-400:#f8c49b;--color-accent-300:#fbd8ba;--color-series-1:#3987e5;--color-series-2:#d95926;--color-series-3:#199e70;--color-series-4:#c98500;--color-series-5:#d55181;--color-series-6:#008300;--color-series-7:#9085e9;--color-series-8:#e66767;--color-medal-gold:#e9bf55;--color-medal-silver:#c5cedb;--color-medal-bronze:#d08d5e;--color-on-medal:#0a0a0b;--color-streak-hot:#f07a3a;--color-avatar-1:#5b8cff;--color-avatar-1-deep:#2747a8;--color-avatar-2:#35b3a4;--color-avatar-2-deep:#155e63;--color-avatar-3:#8f74ff;--color-avatar-3-deep:#4b2f9e;--color-avatar-4:#d665b0;--color-avatar-4-deep:#7c2d6b;--color-avatar-5:#4fb0e8;--color-avatar-5-deep:#1b5784;--color-avatar-6:#7f86e6;--color-avatar-6-deep:#3d3f8f;--color-avatar-7:#4fb3c8;--color-avatar-7-deep:#1d4f63;--color-avatar-8:#b77ae6;--color-avatar-8-deep:#6a2f8a;--color-avatar-9:#6f9cc9;--color-avatar-9-deep:#2a4a6b;--color-avatar-10:#e07f9a;--color-avatar-10-deep:#7a3b4f;--font-display:"Onest", ui-sans-serif, system-ui, sans-serif;--text-2xs:.625rem;--text-2xs--line-height:1.5;--text-1xs:.6875rem;--text-1xs--line-height:1.5;--text-1sm:.8125rem;--text-1sm--line-height:1.5;--color-profit:#37a471;--color-loss:#f0666f;--color-warn:#d0912a;--color-info:#60a5fa;--color-chart-profit-bright:#5ccc98;--color-chart-loss-bright:#f88c93;--color-chart-long:#4ade80;--color-chart-short:#f87171;--color-chart-gate-open:#22c55e;--color-chart-gate-close:#ef4444;--color-chart-entry:#3b82f6;--color-chart-zero:#94a3b8;--color-chart-long-ink:#4ade80;--color-chart-short-ink:#f87171;--color-text-primary:#ededef;--color-text-secondary:#b4b4bb;--color-text-tertiary:#8e8e97;--color-text-muted:#80808a;--shadow-card:inset 0 0 0 9999px transparent;--shadow-overlay:0 4px 14px -4px var(--elev-k1), 0 14px 40px -12px var(--elev-k2);--color-site-acc:var(--color-accent-500);--color-site-ground:#111113;--color-site-band:#f5ae7324;--color-site-win:#0f0f11;--color-site-line:#ffffff14;--color-site-line-strong:#ffffff24;--color-site-cta:#ededef;--color-site-cta-ink:#0a0a0b;--animate-progress:progress-indeterminate 1.5s ease-in-out infinite;--animate-expand:expand-in .22s cubic-bezier(.2, 0, 0, 1);--animate-ping-3:ping-3 1s cubic-bezier(0, 0, .2, 1) 3;--pub-hair:#2e2e3399;--elev-k1:#0000008c;--elev-k2:#000000a6;--site-shadow:#0000008c}

/* ── Base utilities ── */
.-bottom-\\[12\\%\\]{bottom:-12%}
.-left-\\[8\\%\\]{left:-8%}
.-mb-px{margin-bottom:-1px}
.-mx-3{margin-inline:calc(var(--spacing) * -3)}
.-right-1\\.5{right:calc(var(--spacing) * -1.5)}
.-top-1\\.5{top:calc(var(--spacing) * -1.5)}
.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}
.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}
.absolute{position:absolute}
.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );backdrop-filter:var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, )}
.bg-loss{background-color:var(--color-loss)}
.bg-loss\\/10{background-color:#f0666f1a}
.bg-loss\\/15{background-color:#f0666f26}
.bg-loss\\/25{background-color:#f0666f40}
.bg-loss\\/5{background-color:#f0666f0d}
.bg-profit{background-color:var(--color-profit)}
.bg-profit\\/15{background-color:#37a47126}
.bg-profit\\/25{background-color:#37a47140}
.bg-profit\\/60{background-color:#37a47199}
.bg-site-acc{background-color:var(--color-site-acc)}
.bg-site-band{background-color:var(--color-site-band)}
.bg-site-cta{background-color:var(--color-site-cta)}
.bg-site-win{background-color:var(--color-site-win)}
.bg-surface-600{background-color:var(--color-surface-600)}
.bg-surface-700{background-color:var(--color-surface-700)}
.bg-surface-700\\/60{background-color:#1c1c1f99}
.bg-surface-800{background-color:var(--color-surface-800)}
.bg-surface-800\\/60{background-color:#13131599}
.bg-surface-900{background-color:var(--color-surface-900)}
.bg-surface-900\\/40{background-color:#0a0a0b66}
.bg-surface-900\\/80{background-color:#0a0a0bcc}
.bg-text-muted\\/25{background-color:#80808a40}
.bg-text-primary{background-color:var(--color-text-primary)}
.block{display:block}
.blur-\\[44px\\]{--tw-blur:blur(44px);filter:var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, )}
.blur-\\[5px\\]{--tw-blur:blur(5px);filter:var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, )}
.border{border-style:var(--tw-border-style);border-width:1px}
.border-2{border-style:var(--tw-border-style);border-width:2px}
.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}
.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}
.border-hair{border-color:var(--pub-hair)}
.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}
.border-profit{border-color:var(--color-profit)}
.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}
.border-site-line{border-color:var(--color-site-line)}
.border-site-line-strong{border-color:var(--color-site-line-strong)}
.border-surface-600{border-color:var(--color-surface-600)}
.border-surface-600\\/70{border-color:#2e2e33b3}
.border-surface-700{border-color:var(--color-surface-700)}
.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}
.border-text-muted\\/25{border-color:#80808a40}
.border-text-primary{border-color:var(--color-text-primary)}
.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}
.bottom-full{bottom:100%}
.capitalize{text-transform:capitalize}
.col-span-2{grid-column:span 2/span 2}
.col-span-3{grid-column:span 3/span 3}
.cursor-pointer{cursor:pointer}
.duration-1000{--tw-duration:1s;transition-duration:1s}
.duration-150{--tw-duration:.15s;transition-duration:.15s}
.duration-200{--tw-duration:.2s;transition-duration:.2s}
.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}
.ease-linear{--tw-ease:linear;transition-timing-function:linear}
.fill-current{fill:currentColor}
.fill-profit\\/10{fill:#37a4711a}
.fill-site-acc{fill:var(--color-site-acc)}
.fixed{position:fixed}
.flex{display:flex}
.flex-1{flex:1}
.flex-col{flex-direction:column}
.flex-wrap{flex-wrap:wrap}
.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.focus-visible\\:ring-text-primary\\/50:focus-visible{--tw-ring-color:#ededef80}
.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}
.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}
.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}
.font-mono{font-family:var(--font-mono)}
.font-sans{font-family:var(--font-sans)}
.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}
.gap-0\\.5{gap:calc(var(--spacing) * .5)}
.gap-1{gap:var(--spacing)}
.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}
.gap-2{gap:calc(var(--spacing) * 2)}
.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}
.gap-3{gap:calc(var(--spacing) * 3)}
.gap-3\\.5{gap:calc(var(--spacing) * 3.5)}
.gap-4{gap:calc(var(--spacing) * 4)}
.gap-5{gap:calc(var(--spacing) * 5)}
.gap-6{gap:calc(var(--spacing) * 6)}
.gap-7{gap:calc(var(--spacing) * 7)}
.gap-8{gap:calc(var(--spacing) * 8)}
.gap-px{gap:1px}
.gap-x-1\\.5{column-gap:calc(var(--spacing) * 1.5)}
.gap-x-12{column-gap:calc(var(--spacing) * 12)}
.gap-x-14{column-gap:calc(var(--spacing) * 14)}
.gap-x-2{column-gap:calc(var(--spacing) * 2)}
.gap-x-3{column-gap:calc(var(--spacing) * 3)}
.gap-y-1{row-gap:var(--spacing)}
.gap-y-1\\.5{row-gap:calc(var(--spacing) * 1.5)}
.gap-y-6{row-gap:calc(var(--spacing) * 6)}
.gap-y-9{row-gap:calc(var(--spacing) * 9)}
.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, )}
.grid{display:grid}
.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.grid-cols-\\[1\\.1fr_1\\.8fr_1fr_0\\.7fr_0\\.8fr\\]{grid-template-columns:1.1fr 1.8fr 1fr .7fr .8fr}
.grid-cols-\\[1\\.3fr_1fr_1fr_1fr\\]{grid-template-columns:1.3fr 1fr 1fr 1fr}
.grid-cols-\\[1fr_auto\\]{grid-template-columns:1fr auto}
.grid-cols-\\[1fr_auto_3\\.25rem\\]{grid-template-columns:1fr auto 3.25rem}
.h-1\\.5{height:calc(var(--spacing) * 1.5)}
.h-10{height:calc(var(--spacing) * 10)}
.h-11{height:calc(var(--spacing) * 11)}
.h-14{height:calc(var(--spacing) * 14)}
.h-2{height:calc(var(--spacing) * 2)}
.h-2\\.5{height:calc(var(--spacing) * 2.5)}
.h-28{height:calc(var(--spacing) * 28)}
.h-3{height:calc(var(--spacing) * 3)}
.h-3\\.5{height:calc(var(--spacing) * 3.5)}
.h-4{height:calc(var(--spacing) * 4)}
.h-5{height:calc(var(--spacing) * 5)}
.h-6{height:calc(var(--spacing) * 6)}
.h-7{height:calc(var(--spacing) * 7)}
.h-8{height:calc(var(--spacing) * 8)}
.h-9{height:calc(var(--spacing) * 9)}
.h-\\[13px\\]{height:13px}
.h-\\[17px\\]{height:17px}
.h-\\[18px\\]{height:18px}
.h-\\[26rem\\]{height:26rem}
.h-\\[78\\%\\]{height:78%}
.h-full{height:100%}
.h-px{height:1px}
.hidden{display:none}
.inline-flex{display:inline-flex}
.inset-0{inset:0}
.invisible{visibility:hidden}
.items-baseline{align-items:baseline}
.items-center{align-items:center}
.items-start{align-items:flex-start}
.items-stretch{align-items:stretch}
.justify-between{justify-content:space-between}
.justify-center{justify-content:center}
.justify-end{justify-content:flex-end}
.justify-self-end{justify-self:flex-end}
.justify-start{justify-content:flex-start}
.leading-\\[1\\.02\\]{--tw-leading:1.02;line-height:1.02}
.leading-\\[1\\.05\\]{--tw-leading:1.05;line-height:1.05}
.leading-none{--tw-leading:1;line-height:1}
.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}
.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}
.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}
.left-0{left:0}
.left-1{left:var(--spacing)}
.left-1\\.5{left:calc(var(--spacing) * 1.5)}
.left-1\\/2{left:50%}
.left-4{left:calc(var(--spacing) * 4)}
.m-0{margin:0}
.max-w-3xl{max-width:var(--container-3xl)}
.max-w-4xl{max-width:var(--container-4xl)}
.max-w-64{max-width:calc(var(--spacing) * 64)}
.max-w-6xl{max-width:var(--container-6xl)}
.max-w-72{max-width:calc(var(--spacing) * 72)}
.max-w-\\[19rem\\]{max-width:19rem}
.max-w-\\[70rem\\]{max-width:70rem}
.max-w-\\[85\\%\\]{max-width:85%}
.max-w-\\[85rem\\]{max-width:85rem}
.max-w-full{max-width:100%}
.max-w-xl{max-width:var(--container-xl)}
.mb-1{margin-bottom:var(--spacing)}
.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}
.mb-2{margin-bottom:calc(var(--spacing) * 2)}
.mb-7{margin-bottom:calc(var(--spacing) * 7)}
.min-h-screen{min-height:100vh}
.min-w-0{min-width:0}
.min-w-3\\.5{min-width:calc(var(--spacing) * 3.5)}
.min-w-4{min-width:calc(var(--spacing) * 4)}
.min-w-\\[11rem\\]{min-width:11rem}
.min-w-\\[38rem\\]{min-width:38rem}
.min-w-\\[40rem\\]{min-width:40rem}
.ml-1{margin-left:var(--spacing)}
.ml-3{margin-left:calc(var(--spacing) * 3)}
.ml-\\[31px\\]{margin-left:31px}
.ml-auto{margin-left:auto}
.mr-12{margin-right:calc(var(--spacing) * 12)}
.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}
.mt-1{margin-top:var(--spacing)}
.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}
.mt-10{margin-top:calc(var(--spacing) * 10)}
.mt-11{margin-top:calc(var(--spacing) * 11)}
.mt-14{margin-top:calc(var(--spacing) * 14)}
.mt-16{margin-top:calc(var(--spacing) * 16)}
.mt-2{margin-top:calc(var(--spacing) * 2)}
.mt-3{margin-top:calc(var(--spacing) * 3)}
.mt-4{margin-top:calc(var(--spacing) * 4)}
.mt-7{margin-top:calc(var(--spacing) * 7)}
.mt-auto{margin-top:auto}
.mx-2{margin-inline:calc(var(--spacing) * 2)}
.mx-auto{margin-inline:auto}
.my-1{margin-block:var(--spacing)}
.opacity-15{opacity:.15}
.opacity-50{opacity:.5}
.opacity-60{opacity:.6}
.opacity-70{opacity:.7}
.order-1{order:1}
.order-2{order:2}
.overflow-hidden{overflow:hidden}
.overflow-x-auto{overflow-x:auto}
.p-1{padding:var(--spacing)}
.p-1\\.5{padding:calc(var(--spacing) * 1.5)}
.p-3{padding:calc(var(--spacing) * 3)}
.p-3\\.5{padding:calc(var(--spacing) * 3.5)}
.p-4{padding:calc(var(--spacing) * 4)}
.p-5{padding:calc(var(--spacing) * 5)}
.p-px{padding:1px}
.pb-1{padding-bottom:var(--spacing)}
.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}
.pb-14{padding-bottom:calc(var(--spacing) * 14)}
.pb-2{padding-bottom:calc(var(--spacing) * 2)}
.pb-3{padding-bottom:calc(var(--spacing) * 3)}
.pb-3\\.5{padding-bottom:calc(var(--spacing) * 3.5)}
.pl-1\\.5{padding-left:calc(var(--spacing) * 1.5)}
.pl-8{padding-left:calc(var(--spacing) * 8)}
.place-items-center{place-items:center}
.pointer-events-none{pointer-events:none}
.pr-10{padding-right:calc(var(--spacing) * 10)}
.pr-12{padding-right:calc(var(--spacing) * 12)}
.pt-1{padding-top:var(--spacing)}
.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}
.pt-10{padding-top:calc(var(--spacing) * 10)}
.pt-12{padding-top:calc(var(--spacing) * 12)}
.pt-14{padding-top:calc(var(--spacing) * 14)}
.pt-2{padding-top:calc(var(--spacing) * 2)}
.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}
.pt-24{padding-top:calc(var(--spacing) * 24)}
.pt-3{padding-top:calc(var(--spacing) * 3)}
.pt-4{padding-top:calc(var(--spacing) * 4)}
.pt-8{padding-top:calc(var(--spacing) * 8)}
.pt-px{padding-top:1px}
.px-0\\.5{padding-inline:calc(var(--spacing) * .5)}
.px-1{padding-inline:var(--spacing)}
.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}
.px-2{padding-inline:calc(var(--spacing) * 2)}
.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}
.px-3{padding-inline:calc(var(--spacing) * 3)}
.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}
.px-4{padding-inline:calc(var(--spacing) * 4)}
.px-5{padding-inline:calc(var(--spacing) * 5)}
.px-\\[5px\\]{padding-inline:5px}
.py-0\\.5{padding-block:calc(var(--spacing) * .5)}
.py-1{padding-block:var(--spacing)}
.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}
.py-2{padding-block:calc(var(--spacing) * 2)}
.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}
.py-3{padding-block:calc(var(--spacing) * 3)}
.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}
.py-4{padding-block:calc(var(--spacing) * 4)}
.py-8{padding-block:calc(var(--spacing) * 8)}
.py-px{padding-block:1px}
.relative{position:relative}
.right-0{right:0}
.right-0\\.5{right:calc(var(--spacing) * .5)}
.right-1\\.5{right:calc(var(--spacing) * 1.5)}
.right-8{right:calc(var(--spacing) * 8)}
.ring-1{--tw-ring-shadow:var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.ring-2{--tw-ring-shadow:var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.ring-surface-600{--tw-ring-color:var(--color-surface-600)}
.ring-surface-800{--tw-ring-color:var(--color-surface-800)}
.rounded{border-radius:.25rem}
.rounded-\\[10px\\]{border-radius:10px}
.rounded-\\[1px\\]{border-radius:1px}
.rounded-\\[2\\.1rem\\]{border-radius:2.1rem}
.rounded-\\[2\\.75rem\\]{border-radius:2.75rem}
.rounded-\\[3px\\]{border-radius:3px}
.rounded-\\[4px\\]{border-radius:4px}
.rounded-\\[7px\\]{border-radius:7px}
.rounded-full{border-radius:2147483647px}
.rounded-lg{border-radius:var(--radius-lg)}
.rounded-md{border-radius:var(--radius-md)}
.rounded-sm{border-radius:var(--radius-sm)}
.rounded-xl{border-radius:var(--radius-xl)}
.self-center{align-self:center}
.self-end{align-self:flex-end}
.shadow-\\[0_0_10px_var\\(--color-loss\\)\\]{--tw-shadow:0 0 10px var(--tw-shadow-color,var(--color-loss));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.shadow-\\[0_0_10px_var\\(--color-profit\\)\\]{--tw-shadow:0 0 10px var(--tw-shadow-color,var(--color-profit));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.shadow-\\[0_0_8px_var\\(--color-profit\\)\\]{--tw-shadow:0 0 8px var(--tw-shadow-color,var(--color-profit));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.shadow-overlay{--tw-shadow:0 4px 14px -4px var(--tw-shadow-color,var(--elev-k1)), 0 14px 40px -12px var(--tw-shadow-color,var(--elev-k2));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.shadow-window{--tw-shadow:0 40px 90px -24px var(--tw-shadow-color,var(--site-shadow));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.shadow-window-sm{--tw-shadow:0 24px 60px -18px var(--tw-shadow-color,var(--site-shadow));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}
.shrink-0{flex-shrink:0}
.sticky{position:sticky}
.stroke-loss{stroke:var(--color-loss)}
.stroke-loss\\/20{stroke:#f0666f33}
.stroke-loss\\/60{stroke:#f0666f99}
.stroke-profit{stroke:var(--color-profit)}
.stroke-profit\\/20{stroke:#37a47133}
.stroke-profit\\/60{stroke:#37a47199}
.stroke-text-muted\\/10{stroke:#80808a1a}
.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, )}
.text-1sm{font-size:var(--text-1sm);line-height:var(--tw-leading,var(--text-1sm--line-height))}
.text-1xs{font-size:var(--text-1xs);line-height:var(--tw-leading,var(--text-1xs--line-height))}
.text-2xs{font-size:var(--text-2xs);line-height:var(--tw-leading,var(--text-2xs--line-height))}
.text-\\[10\\.5px\\]{font-size:10.5px}
.text-\\[10px\\]{font-size:10px}
.text-\\[11\\.5px\\]{font-size:11.5px}
.text-\\[11px\\]{font-size:11px}
.text-\\[12\\.5px\\]{font-size:12.5px}
.text-\\[13\\.5px\\]{font-size:13.5px}
.text-\\[13px\\]{font-size:13px}
.text-\\[15px\\]{font-size:15px}
.text-\\[17px\\]{font-size:17px}
.text-\\[2\\.6rem\\]{font-size:2.6rem}
.text-\\[2\\.75rem\\]{font-size:2.75rem}
.text-\\[28px\\]{font-size:28px}
.text-\\[2rem\\]{font-size:2rem}
.text-\\[9px\\]{font-size:9px}
.text-balance{text-wrap:balance}
.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}
.text-center{text-align:center}
.text-left{text-align:left}
.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}
.text-loss{color:var(--color-loss)}
.text-pretty{text-wrap:pretty}
.text-profit{color:var(--color-profit)}
.text-right{text-align:right}
.text-site-acc{color:var(--color-site-acc)}
.text-site-acc\\/70{color:#f5ae73b3}
.text-site-cta-ink{color:var(--color-site-cta-ink)}
.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}
.text-surface-900{color:var(--color-surface-900)}
.text-text-muted{color:var(--color-text-muted)}
.text-text-primary{color:var(--color-text-primary)}
.text-text-secondary{color:var(--color-text-secondary)}
.text-text-tertiary{color:var(--color-text-tertiary)}
.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}
.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}
.top-0{top:0}
.top-0\\.5{top:calc(var(--spacing) * .5)}
.top-1\\/2{top:50%}
.top-\\[calc\\(100\\%-1\\.75rem\\)\\]{top:calc(100% - 1.75rem)}
.top-full{top:100%}
.tracking-\\[-0\\.02em\\]{--tw-tracking:-.02em;letter-spacing:-.02em}
.tracking-\\[-0\\.03em\\]{--tw-tracking:-.03em;letter-spacing:-.03em}
.tracking-\\[-0\\.045em\\]{--tw-tracking:-.045em;letter-spacing:-.045em}
.tracking-\\[-0\\.04em\\]{--tw-tracking:-.04em;letter-spacing:-.04em}
.tracking-\\[0\\.06em\\]{--tw-tracking:.06em;letter-spacing:.06em}
.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}
.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}
.transition-\\[left\\]{transition-property:left;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}
.transition-\\[top\\]{transition-property:top;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}
.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}
.translate-x-1\\/2{--tw-translate-x:calc(1 / 2 * 100%);translate:var(--tw-translate-x) var(--tw-translate-y)}
.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}
.uppercase{text-transform:uppercase}
.w-1\\.5{width:calc(var(--spacing) * 1.5)}
.w-1\\/2{width:50%}
.w-1\\/3{width:33.3333%}
.w-12{width:calc(var(--spacing) * 12)}
.w-2{width:calc(var(--spacing) * 2)}
.w-2\\.5{width:calc(var(--spacing) * 2.5)}
.w-3{width:calc(var(--spacing) * 3)}
.w-3\\.5{width:calc(var(--spacing) * 3.5)}
.w-3\\/5{width:60%}
.w-4{width:calc(var(--spacing) * 4)}
.w-4\\/5{width:80%}
.w-40{width:calc(var(--spacing) * 40)}
.w-5{width:calc(var(--spacing) * 5)}
.w-52{width:calc(var(--spacing) * 52)}
.w-6{width:calc(var(--spacing) * 6)}
.w-7{width:calc(var(--spacing) * 7)}
.w-8{width:calc(var(--spacing) * 8)}
.w-9{width:calc(var(--spacing) * 9)}
.w-\\[116\\%\\]{width:116%}
.w-\\[13px\\]{width:13px}
.w-\\[17px\\]{width:17px}
.w-\\[18px\\]{width:18px}
.w-\\[18rem\\]{width:18rem}
.w-\\[19rem\\]{width:19rem}
.w-\\[20\\.5rem\\]{width:20.5rem}
.w-\\[30px\\]{width:30px}
.w-full{width:100%}
.w-max{width:max-content}
.w-px{width:1px}
.whitespace-nowrap{white-space:nowrap}
.z-10{z-index:10}
.z-dropdown{z-index:60}
.z-popover{z-index:50}

/* ── Responsive utilities ── */
@media (min-width:40rem){
.sm\\:block{display:block}
.sm\\:border-l{border-left-style:var(--tw-border-style);border-left-width:1px}
.sm\\:flex{display:flex}
.sm\\:gap-12{gap:calc(var(--spacing) * 12)}
.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.sm\\:inline{display:inline}
.sm\\:mt-12{margin-top:calc(var(--spacing) * 12)}
.sm\\:p-5{padding:calc(var(--spacing) * 5)}
.sm\\:p-6{padding:calc(var(--spacing) * 6)}
.sm\\:pb-24{padding-bottom:calc(var(--spacing) * 24)}
.sm\\:pr-24{padding-right:calc(var(--spacing) * 24)}
.sm\\:pt-14{padding-top:calc(var(--spacing) * 14)}
.sm\\:pt-16{padding-top:calc(var(--spacing) * 16)}
.sm\\:px-3{padding-inline:calc(var(--spacing) * 3)}
.sm\\:px-6{padding-inline:calc(var(--spacing) * 6)}
.sm\\:px-8{padding-inline:calc(var(--spacing) * 8)}
.sm\\:py-12{padding-block:calc(var(--spacing) * 12)}
.sm\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}
.sm\\:text-\\[2\\.75rem\\]{font-size:2.75rem}
.sm\\:text-\\[3\\.25rem\\]{font-size:3.25rem}
.sm\\:w-16{width:calc(var(--spacing) * 16)}
}
@media (min-width:48rem){
.md\\:col-span-3{grid-column:span 3/span 3}
.md\\:flex{display:flex}
.md\\:flex-row{flex-direction:row}
.md\\:gap-16{gap:calc(var(--spacing) * 16)}
.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.md\\:justify-center{justify-content:center}
.md\\:max-w-none{max-width:none}
.md\\:ml-0{margin-left:0}
}
@media (min-width:64rem){
.lg\\:block{display:block}
.lg\\:flex{display:flex}
.lg\\:flex-row{flex-direction:row}
.lg\\:grid-cols-\\[7fr_5fr\\]{grid-template-columns:7fr 5fr}
.lg\\:hidden{display:none}
.lg\\:items-center{align-items:center}
.lg\\:items-end{align-items:flex-end}
.lg\\:justify-between{justify-content:space-between}
.lg\\:ml-0{margin-left:0}
.lg\\:mx-auto{margin-inline:auto}
.lg\\:pb-40{padding-bottom:calc(var(--spacing) * 40)}
.lg\\:px-12{padding-inline:calc(var(--spacing) * 12)}
.lg\\:py-16{padding-block:calc(var(--spacing) * 16)}
.lg\\:text-\\[4\\.5rem\\]{font-size:4.5rem}
.lg\\:text-right{text-align:right}
}


/* ── SettlePal brand overrides ── */
:root,.dark{
  --color-accent-500:#10cf90;--color-accent-400:#50e3b2;--color-accent-300:#8ffffc;
  --color-site-acc:#10cf90;--color-site-ground:#020605;--color-site-band:#10cf9024;
  --color-site-win:#050b09;--color-site-cta:#10cf90;--color-site-cta-ink:#001e17;
  --color-profit:#10cf90;--color-chart-profit-bright:#50e3b2;
  --color-surface-900:#020605;--color-surface-800:#07100e;
  --color-surface-700:#0d1a17;--color-surface-600:#1d302b;--color-surface-500:#40534e;
}

.sp-brand-logo{display:block;width:136px;height:auto}
.sp-dashboard-logo{display:block;width:82px;height:auto}
.sp-dashboard-mark{display:block;width:72%;height:72%;object-fit:contain}
.sp-coming-soon{width:fit-content;min-height:34px;margin-bottom:20px;padding:0 14px;display:flex;align-items:center;gap:9px;border:1px solid rgba(16,207,144,.36);border-radius:999px;background:linear-gradient(90deg,rgba(16,207,144,.13),rgba(0,229,204,.05));color:#b9f7e2;box-shadow:inset 0 1px rgba(255,255,255,.04),0 0 30px rgba(16,207,144,.08);font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}
.sp-coming-soon>span{width:6px;height:6px;flex:none;border-radius:50%;background:#10cf90;box-shadow:0 0 10px #10cf90;animation:sp-coming-pulse 2s ease-in-out infinite}
.sp-coming-soon>i{color:rgba(185,247,226,.35);font-style:normal}
.sp-title-accent{width:fit-content;color:#10cf90;background:linear-gradient(90deg,#10cf90 0%,#00e5cc 72%,#8ffffc 100%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 24px rgba(16,207,144,.13))}
.sp-exclusive-highlight{width:fit-content;min-height:30px;padding:0 11px;display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(16,207,144,.3);border-radius:999px;background:rgba(16,207,144,.09);color:#baf7e3;box-shadow:inset 0 1px rgba(255,255,255,.035);font-size:10px;font-weight:500;line-height:1.35}
.sp-exclusive-highlight>i{width:5px;height:5px;flex:none;border-radius:50%;background:#10cf90;box-shadow:0 0 9px #10cf90}
.sp-dashboard-cta-wrap{margin-top:24px;display:flex;justify-content:center}
.sp-dashboard-cta{min-height:46px;padding:0 20px;display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:999px;background:#10cf90;color:#001e17;box-shadow:0 14px 34px rgba(16,207,144,.2);font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;text-decoration:none;transition:transform .2s,background-color .2s,box-shadow .2s}
.sp-dashboard-cta:hover{transform:translateY(-2px);background:#2add9f;box-shadow:0 18px 42px rgba(16,207,144,.3)}
.sp-dashboard-cta svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.sp-dashboard-cta:hover svg{transform:translateX(3px)}
.sp-dashboard-cta-wrap+.mt-10{margin-top:1.25rem}
.sp-section-kicker{color:#10cf90;font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase}
.sp-section-heading-grid{margin-top:12px;display:grid;grid-template-columns:1fr .72fr;align-items:end;gap:72px}
.sp-section-heading-grid h2{margin:0;color:var(--color-text-primary);font-size:clamp(2rem,4vw,2.75rem);font-weight:500;letter-spacing:-.04em;line-height:1.05;text-wrap:balance}
.sp-section-heading-grid>p{margin:0 0 3px;color:var(--color-text-secondary);font-size:17px;line-height:1.7;text-wrap:pretty}
.sp-pictogram-grid{margin-top:38px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--color-site-line);border-bottom:1px solid var(--color-site-line)}
.sp-pictogram-card{position:relative;min-height:258px;padding:25px;border-left:1px solid var(--color-site-line);background:linear-gradient(145deg,rgba(16,207,144,.025),transparent 58%);transition:background-color .2s,border-color .2s}
.sp-pictogram-card:last-child{border-right:1px solid var(--color-site-line)}
.sp-pictogram-card:hover{border-color:rgba(16,207,144,.25);background-color:rgba(16,207,144,.025)}
.sp-pictogram{width:48px;height:48px;display:grid;place-items:center;color:#10cf90;border:1px solid rgba(16,207,144,.2);border-radius:10px;background:rgba(16,207,144,.075);box-shadow:inset 0 1px rgba(255,255,255,.035)}
.sp-pictogram svg,.sp-strip-icon svg{width:23px;height:23px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linecap:round;stroke-linejoin:round}
.sp-pictogram svg .sp-icon-fill{fill:currentColor;stroke:none}
.sp-card-number{position:absolute;top:28px;right:25px;color:var(--color-text-muted);font-family:var(--font-mono);font-size:10px}
.sp-pictogram-card h3{margin:44px 0 10px;color:var(--color-text-primary);font-size:19px;font-weight:500;letter-spacing:-.02em}
.sp-pictogram-card p{max-width:285px;margin:0;color:var(--color-text-secondary);font-size:13px;line-height:1.7}
.sp-selling-strip{margin-top:16px;padding:8px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;border:1px solid rgba(16,207,144,.3);border-radius:12px;background:linear-gradient(90deg,rgba(16,207,144,.11),rgba(0,229,204,.045));box-shadow:inset 0 1px rgba(255,255,255,.045),0 18px 45px rgba(0,0,0,.18)}
.sp-selling-strip>div{min-height:88px;padding:16px 19px;display:flex;align-items:center;gap:15px;border-right:1px solid rgba(16,207,144,.16)}
.sp-selling-strip>div:last-child{border-right:0}
.sp-strip-icon{width:42px;height:42px;flex:none;display:grid;place-items:center;color:#baf7e3;border:1px solid rgba(16,207,144,.28);border-radius:50%;background:rgba(3,25,19,.72)}
.sp-selling-strip>div>span:last-child{display:flex;flex-direction:column;gap:5px}
.sp-selling-strip b{color:#e6f3ef;font-size:13px;font-weight:600}
.sp-selling-strip small{color:#91a39e;font-size:11px;line-height:1.45}
.sp-section-intro{margin:18px 0 0;color:var(--color-text-secondary);font-size:17px;line-height:1.7}
#sp-arb-suite,#sp-arb-suite *,#sp-arb-suite ::before,#sp-arb-suite ::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:currentcolor;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-inset-shadow:0 0 #0000;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-offset-shadow:0 0 #0000}
#sp-arb-suite{font-family:"Onest",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
#sp-arb-suite img,#sp-arb-suite svg,#sp-arb-suite video,#sp-arb-suite canvas{display:block;max-width:100%;vertical-align:middle}
#sp-arb-suite h1,#sp-arb-suite h2,#sp-arb-suite h3,#sp-arb-suite h4,#sp-arb-suite h5,#sp-arb-suite h6,#sp-arb-suite p{margin:0}
#sp-arb-suite a{text-decoration:none;color:inherit}
.settlepal-source #home-hero .mt-7{margin-top:1.25rem}
.settlepal-source #home-hero .mt-11{margin-top:2rem}
.settlepal-source #home-hero .mt-16,.settlepal-source section>.site-stage,.settlepal-source section>.mt-14{margin-top:2.5rem}
.settlepal-source .site-stage{padding-top:2.5rem;padding-bottom:2.5rem}

@keyframes sp-coming-pulse{50%{opacity:.45;box-shadow:0 0 4px #10cf90}}
@keyframes venue-band{to{transform:translate(-50%)}}
@keyframes live-flash{0%{opacity:.25}to{opacity:1}}
@keyframes riseIn{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{50%{opacity:.5}}

.rise{animation:.7s riseIn both}
.reveal{opacity:0;transform:translateY(18px);transition:opacity .7s,transform .7s}
.revealed,.reveal.revealed{opacity:1;transform:none}

[data-loop]{display:flex;overflow:hidden}
[data-loop]:not([data-play]){animation-play-state:paused}
.vb-track{display:flex;flex-shrink:0;animation:venue-band 40s linear infinite}
[data-play] .vb-track{animation-play-state:running}
.live-flash{animation:live-flash .5s}

.theme-icon-sun{display:block}
.theme-icon-moon{display:none}
.dark .theme-icon-sun{display:none}
.dark .theme-icon-moon{display:block}

.shadow-window{box-shadow:0 8px 24px -6px rgba(0,0,0,.5),0 24px 60px -16px rgba(0,0,0,.4)}
.shadow-window-sm{box-shadow:0 4px 14px -4px rgba(0,0,0,.3),0 14px 40px -12px rgba(0,0,0,.4)}
.shadow-overlay{box-shadow:0 4px 14px -4px rgba(0,0,0,.3),0 14px 40px -12px rgba(0,0,0,.5)}

/* Missing arbitrary value utilities */
.\\[mask-image\\:linear-gradient\\(to_right\\,transparent\\,black_8\\%\\,black_92\\%\\,transparent\\)\\]{
  -webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);
  mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);
}
.grid-cols-\\[4\\.25rem_repeat\\(8\\,minmax\\(3\\.5rem\\,1fr\\)\\)\\]{grid-template-columns:4.25rem repeat(8,minmax(3.5rem,1fr))}
.grid-cols-\\[auto_minmax\\(0\\,1fr\\)_minmax\\(0\\,1fr\\)\\]{grid-template-columns:auto minmax(0,1fr) minmax(0,1fr)}
.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(11rem\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minmax(11rem,1fr))}

@media(max-width:767px){
  .sp-section-heading-grid{grid-template-columns:1fr;gap:20px}
  .sp-pictogram-grid,.sp-selling-strip{grid-template-columns:1fr}
  .sp-pictogram-card{min-height:225px;border-right:1px solid var(--color-site-line);border-bottom:1px solid var(--color-site-line)}
  .sp-pictogram-card:last-child{border-bottom:0}
  .sp-selling-strip>div{border-right:0;border-bottom:1px solid rgba(16,207,144,.16)}
  .sp-selling-strip>div:last-child{border-bottom:0}
}

@media(max-width:639px){
  .sp-brand-logo{width:112px}
  .sp-coming-soon{min-height:0;padding:7px 10px;flex-wrap:wrap;gap:6px;font-size:8px;line-height:1.5}
  .sp-exclusive-highlight{min-height:0;padding:7px 10px;text-align:left}
  .sp-dashboard-cta-wrap{margin-top:17px;padding:0 16px}
  .sp-dashboard-cta{width:100%;min-height:44px}
  .sp-section-heading-grid{margin-top:7px;gap:10px}
  .sp-section-heading-grid h2{font-size:1.8rem}
  .sp-section-heading-grid>p{font-size:14px;line-height:1.6}
  .sp-pictogram-grid{margin-top:20px}
  .sp-pictogram-card{min-height:170px;padding:17px}
  .sp-pictogram{width:42px;height:42px}
  .sp-card-number{top:20px;right:17px}
  .sp-pictogram-card h3{margin-top:19px;font-size:17px}
  .sp-selling-strip{margin-top:9px}
  .sp-selling-strip>div{min-height:66px;padding:11px 13px}
  .sp-strip-icon{width:36px;height:36px}
  .sp-selling-strip b{font-size:12px}
}`;

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Onest:wght@400..700&display=swap";
    document.head.appendChild(link);
    var s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = styles;
    document.head.appendChild(s);
  }

  function ensureMarkup() {
    var existingRoot = document.querySelector(ROOT_SELECTOR);
    if (existingRoot) {
      if (existingRoot.getAttribute("data-sp-ready") === "true") return existingRoot;
      existingRoot.setAttribute("data-sp-ready", "true");
      existingRoot.classList.add("settlepal-source", "dark");
      existingRoot.innerHTML = markup;
      return existingRoot;
    }

    var mount = document.createElement("div");
    mount.id = "sp-arb-suite";
    mount.setAttribute("data-sp-ready", "true");
    mount.classList.add("settlepal-source", "dark");
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

    return mount;
  }

  function initLiveData() {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('revealed'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('#sp-arb-suite .reveal').forEach(function(el){ io.observe(el); });

    var band = document.querySelector('#sp-arb-suite [data-loop]');
    if(band){
      var bandIO = new IntersectionObserver(function(es){
        es.forEach(function(e){ e.target.toggleAttribute('data-play', e.isIntersecting); });
      });
      bandIO.observe(band);
    }
  }

  function initTapeAnimation() {
    var W = 300, H = 100;
    function pct(v) { return (v >= 0 ? '+' : '') + v.toFixed(3) + '%'; }
    function usd(v) { return (v < 0 ? '-$' : '+$') + Math.abs(v).toFixed(2); }
    function cents(v) { return Math.round(v * 100) / 100; }
    function sign(el, v) { el.classList.toggle('text-profit', v >= 0); el.classList.toggle('text-loss', v < 0); }
    function money(el, v) { el.dataset.numV = v; el.textContent = usd(v); sign(el, v); }

    function curve(p) {
      var d = '';
      for (var k = 1; k < p.length; k++) {
        var xm = ((p[k - 1][0] + p[k][0]) / 2).toFixed(1);
        d += 'C' + xm + ' ' + p[k - 1][1] + ' ' + xm + ' ' + p[k][1] + ' ' + p[k][0].toFixed(1) + ' ' + p[k][1];
      }
      return d;
    }

    function card(el, root) {
      var cols = el.dataset.tape.split('|'), dec = +cols[0], k = Math.pow(10, dec);
      var bidA = cols[1].split(',').map(Number), askA = cols[2].split(',').map(Number);
      var bidB = cols[3].split(',').map(Number), askB = cols[4].split(',').map(Number);
      var n = +el.dataset.window, lo = +el.dataset.lo, hi = +el.dataset.hi, start = +el.dataset.start;
      var qty = +el.dataset.qty, ea = +el.dataset.ea, eb = +el.dataset.eb, step = W / n, end = +el.dataset.end, i = end;
      var t = {};
      el.querySelectorAll('[data-t]').forEach(function (x) { t[x.dataset.t] = x; });
      var clocks = el.querySelectorAll('[data-clock]');
      var realized = +el.dataset.realized, key = 'tape:' + el.dataset.card + ':';
      var upnl = el.querySelector('[data-num-key="' + key + 'upnl"]'), badge = el.querySelector('[data-num-key="' + key + 'session"]');
      var side = root.querySelector('[data-pnl="' + el.dataset.card + '"]');

      function longA(j) { return (bidB[j] - askA[j]) / askA[j] * 100; }
      function shortA(j) { return (bidA[j] - askB[j]) / askA[j] * 100; }
      function y(v) { return +(H - (v - lo) / (hi - lo) * H).toFixed(1); }
      function series(f) {
        var p = [];
        for (var j = i - n - 1; j <= i; j++) p.push([(j - i + n) * step, y(f(j))]);
        return p;
      }

      function draw() {
        t.askA.textContent = (askA[i] / k).toFixed(dec); t.askB.textContent = (askB[i] / k).toFixed(dec);
        t.bidA.textContent = (bidA[i] / k).toFixed(dec); t.bidB.textContent = (bidB[i] / k).toFixed(dec);
        t.baA.textContent = ((askA[i] - bidA[i]) / bidA[i] * 100).toFixed(3) + '%';
        t.baB.textContent = ((askB[i] - bidB[i]) / bidB[i] * 100).toFixed(3) + '%';
        var l = longA(i), s = shortA(i);
        [[t.long, l], [t.short, s], [t.delta, l + s]].forEach(function (c) {
          c[0].dataset.numV = c[1]; c[0].textContent = pct(c[1]); sign(c[0], c[1]);
        });

        var g = series(longA), r = series(function (j) { return -shortA(j); });
        var dg = 'M' + g[0][0].toFixed(1) + ' ' + g[0][1] + curve(g), dr = 'M' + r[0][0].toFixed(1) + ' ' + r[0][1] + curve(r);
        t.green.setAttribute('d', dg); t.greenGlow.setAttribute('d', dg);
        t.red.setAttribute('d', dr); t.redGlow.setAttribute('d', dr);
        t.band.setAttribute('d', dg + 'L' + W + ' ' + r[n + 1][1] + curve(r.reverse()) + 'Z');
        if (t.mark) {
          var x = (+t.mark.dataset.entry - i + n) / n * 100;
          t.mark.style.transition = i === end ? 'none' : '';
          t.mark.style.left = x + '%';
          t.mark.style.visibility = x < 0 ? 'hidden' : '';
        }
        t.scroll.style.transition = 'none';
        t.scroll.style.transform = 'translateX(' + step + 'px)';
        void t.scroll.getBoundingClientRect();
        t.scroll.style.transition = 'transform 1s linear';
        t.scroll.style.transform = 'translateX(0px)';
        [[t.headG, t.tagG, l], [t.headR, t.tagR, -s]].forEach(function (h) {
          h[0].style.top = h[1].style.top = y(h[2]) + '%';
          h[1].textContent = h[2].toFixed(3) + '%';
        });
        clocks.forEach(function (c) {
          c.textContent = new Date((start + i - +c.dataset.clock) * 1000).toISOString().slice(11, 19);
        });

        if (!qty) return realized;
        var ua = cents(qty * ((bidA[i] + askA[i]) / 2 / k - ea)), ub = cents(qty * (eb - (bidB[i] + askB[i]) / 2 / k));
        var session = cents(realized + ua + ub);
        [[t.uA, ua], [t.uB, ub]].forEach(function (c) { c[0].textContent = usd(c[1]); sign(c[0], c[1]); });
        money(upnl, cents(ua + ub)); money(badge, session);
        if (side) { side.textContent = usd(session); sign(side, session); }
        return session;
      }

      return function () { i = i + 1 < bidA.length ? i + 1 : end; return draw(); };
    }

    var root = document.querySelector('#sp-arb-suite [data-tape-root]');
    if (!root || root.dataset.tapeOn || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    root.dataset.tapeOn = '1';
    var steps = [].map.call(root.querySelectorAll('[data-tape]'), function (el) { return card(el, root); });
    var today = root.querySelector('[data-num-key="tape:today"]');
    var seen = false, tapeIO = new IntersectionObserver(function (e) { seen = e[0].isIntersecting; });
    tapeIO.observe(root);
    setInterval(function () {
      if (!root.isConnected) { tapeIO.disconnect(); return; }
      if (seen && !document.hidden) {
        var total = cents(steps.reduce(function (sum, s) { return sum + s(); }, 0));
        if (today) money(today, total);
      }
    }, 1000);
  }

  ensureStyles();
  var root = ensureMarkup();
  if (root) {
    initLiveData();
    initTapeAnimation();
  }
})();
