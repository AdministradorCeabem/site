/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                church: {
                    green: "#C0D725",
                    gray: "#9A9FA2",
                    white: "#FFFFFF",
                    black: "#000000",
                },
            },
            backgroundImage: {
                'gradient-church': 'linear-gradient(120deg, #C0D725, #FFFFFF)',
            },
        },
    },
    plugins: [],
}; 