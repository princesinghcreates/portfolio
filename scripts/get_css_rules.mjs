import fs from 'fs';

async function getCSSRules() {
  const res = await fetch('https://harronsdigital.com/assets/index-BSjRYGU5.css');
  const css = await res.text();

  // Let's search for top-available-tab, navbar, hero, practice, showcase, corkboard
  const classesToFind = [
    'top-available-tab', 'tab-wing', 'navbar', 'hero-headline', 'hero-pill',
    'hero-role-rotator', 'hero-kpi', 'practice', 'corkboard', 'user-cursor',
    'marquee-strip', 'connect-modal'
  ];

  for (const cls of classesToFind) {
    const idx = css.indexOf(cls);
    if (idx !== -1) {
      console.log(`\n=== .${cls} CSS ===`);
      console.log(css.slice(Math.max(0, idx - 20), Math.min(css.length, idx + 400)));
    }
  }
}

getCSSRules().catch(console.error);
