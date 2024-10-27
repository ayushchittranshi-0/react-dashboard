/** @type {import('tailwindcss').Config} */
export default {
    darkMode:"class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryBgColor: 'var(--primary-bg-color)',
                secondaryBgColor: 'var(--secondary-bg-color)',
            }
        },
    },
    plugins: [],
}

