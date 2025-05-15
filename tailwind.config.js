/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#F7AD33',
                white: '#FFFFFF',
                offWhite: '#FAFAFA',
                black: '#14110E',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                anton: ['Anton', 'sans-serif'],
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2140px',
                '5xl': '2360px',
            },
        },
    },
    plugins: [],
};
