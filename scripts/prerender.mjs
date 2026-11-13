import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/resume', file: 'resume/index.html' },
  { path: '/case-studies/fface-gm-modular-decoy-luxury-paid-media-ecommerce', file: 'case-studies/fface-gm-modular-decoy-luxury-paid-media-ecommerce/index.html' },
  { path: '/case-studies/jaffri-creations-ecommerce-ppc-seo', file: 'case-studies/jaffri-creations-ecommerce-ppc-seo/index.html' },
  { path: '/case-studies/mtei-services-meta-ads-lead-generation', file: 'case-studies/mtei-services-meta-ads-lead-generation/index.html' },
  { path: '/case-studies/jaffri-creations-youtube-seo-organic-growth', file: 'case-studies/jaffri-creations-youtube-seo-organic-growth/index.html' },
  { path: '/services/performance-marketing-meta-google-ads', file: 'services/performance-marketing-meta-google-ads/index.html' },
  { path: '/services/ecommerce-growth-shopify-woocommerce-amazon', file: 'services/ecommerce-growth-shopify-woocommerce-amazon/index.html' },
  { path: '/services/seo-local-seo-youtube-growth', file: 'services/seo-local-seo-youtube-growth/index.html' },
  { path: '/services/ga4-gtm-capi-tracking-cro', file: 'services/ga4-gtm-capi-tracking-cro/index.html' },
  { path: '/google-ads-freelancer-india', file: 'google-ads-freelancer-india/index.html' },
  { path: '/meta-ads-freelancer-india', file: 'meta-ads-freelancer-india/index.html' },
  { path: '/digital-marketing-freelancer-in-kolkata', file: 'digital-marketing-freelancer-in-kolkata/index.html' },
  { path: '/faq', file: 'faq/index.html' },
  { path: '/terms', file: 'terms/index.html' },
  { path: '/privacy', file: 'privacy/index.html' },
];

async function prerender() {
  console.log('🚀 Initializing Vite SSR server for pre-rendering...');
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const { App } = await vite.ssrLoadModule('/index.tsx');

    for (const route of routes) {
      const filePath = path.join(rootDir, route.file);
      if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        continue;
      }

      console.log(`Rendering route: ${route.path} -> ${route.file}`);
      const renderedHtml = ReactDOMServer.renderToString(
        React.createElement(App, { initialPath: route.path })
      );

      const htmlContent = fs.readFileSync(filePath, 'utf-8');
      const rootRegex = /<div id="root">[\s\S]*?<\/div>(\s*<script type="module" src="\/index\.tsx"><\/script>)/;

      if (!rootRegex.test(htmlContent)) {
        console.error(`Could not find <div id="root"> in ${route.file}`);
        continue;
      }

      const updatedHtml = htmlContent.replace(rootRegex, `<div id="root">${renderedHtml}</div>$1`);
      fs.writeFileSync(filePath, updatedHtml, 'utf-8');
      console.log(`✓ Successfully injected SSR content (${renderedHtml.length} chars) into ${route.file}`);
    }

    console.log(`🎉 All ${routes.length} routes pre-rendered successfully!`);
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
