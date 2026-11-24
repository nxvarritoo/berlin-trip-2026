/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { night:'#071426', ink:'#10223d', gold:'#d6ad60', snow:'#f4f7fb' }, fontFamily: { sans:['Inter','ui-sans-serif','system-ui'], display:['Georgia','serif'] }, boxShadow: { card:'0 18px 50px rgba(7,20,38,.10)' } } }, plugins: []
}
