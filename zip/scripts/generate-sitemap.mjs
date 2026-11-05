import { writeFile, rm } from 'node:fs/promises';
const base = (process.env.SITE_URL || process.env.VITE_SITE_URL || '').trim().replace(/\/$/, '');
if (!base) {
  await rm(new URL('../public/sitemap.xml', import.meta.url), { force: true });
  console.warn('SITE_URL is not set; skipping sitemap generation. Set SITE_URL to your real deployed domain to generate sitemap.xml.');
  process.exit(0);
}
let parsed;
try { parsed = new URL(base); } catch { throw new Error('SITE_URL must be a valid absolute URL, e.g. https://your-real-domain.in'); }
if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error('SITE_URL must use http or https.');
const paths = ['/', '/about', '/programs', '/trainers', '/membership', '/gallery', '/contact', '/privacy', '/terms', '/faq'];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `  <url><loc>${base}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml, 'utf8');
console.log(`Generated sitemap.xml for ${base}`);
