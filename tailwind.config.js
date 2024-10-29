/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                plum: 'plum 0.7s ease-out 1',
            },
        },
    },
    plugins: [],
}
