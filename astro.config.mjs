// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        react()
    ],
    vite: {
        server: {
            headers: {
                'Content-Security-Policy': `
                    default-src 'self';
                    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://maps.googleapis.com;
                    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                    img-src 'self' data: https://*.googleapis.com https://*.gstatic.com;
                    font-src 'self' https://fonts.gstatic.com;
                    frame-src 'self' https://www.google.com;
                    connect-src 'self' https://*.googleapis.com;
                    object-src 'none';
                    base-uri 'self';
                    form-action 'self';
                    frame-ancestors 'none';
                    block-all-mixed-content;
                    upgrade-insecure-requests;
                `.replace(/\s+/g, ' ').trim()
            }
        }
    }
});
