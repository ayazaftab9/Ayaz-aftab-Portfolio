import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: { host: '0.0.0.0', port: 3000, allowedHosts: 'all' },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          resume: path.resolve(__dirname, 'resume/index.html'),
          fface: path.resolve(__dirname, 'case-studies/fface-gm-modular-decoy-luxury-paid-media-ecommerce/index.html'),
          jaffriEcommerce: path.resolve(__dirname, 'case-studies/jaffri-creations-ecommerce-ppc-seo/index.html'),
          mteiLeads: path.resolve(__dirname, 'case-studies/mtei-services-meta-ads-lead-generation/index.html'),
          jaffriYoutube: path.resolve(__dirname, 'case-studies/jaffri-creations-youtube-seo-organic-growth/index.html'),
          servicePaidMedia: path.resolve(__dirname, 'services/performance-marketing-meta-google-ads/index.html'),
          serviceEcommerce: path.resolve(__dirname, 'services/ecommerce-growth-shopify-woocommerce-amazon/index.html'),
          serviceSeo: path.resolve(__dirname, 'services/seo-local-seo-youtube-growth/index.html'),
          serviceTrackingCro: path.resolve(__dirname, 'services/ga4-gtm-capi-tracking-cro/index.html'),
          notFound: path.resolve(__dirname, '404.html'),
        }
      }
    }
  };
});
