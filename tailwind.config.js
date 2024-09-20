/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'font-Jura':['Jura', 'sans-serif'],
        'font-Inter':['Inter', 'sans-serif'],
      },
      colors:{
        'bgColor':'#191E35',
        'primaryColor':'#332FD0',
        'secondaryColor':'#F52AF5',
        'thirdColor':'#15BFFD',
        'redColor':'#FF0000',
        'greenColor':'#00FF57',
      },
      backgroundImage:{
        'primary-gradient':'linear-gradient(93deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%)',
<<<<<<< HEAD
        'footer-texture': "url('./public/footer-bg.png')",
        'custom-gradient': 'linear-gradient(to right, #782EFD 0%, #A61FFB 48%, #DE0CF8 100%)',
        'bg-header': 'linear-gradient(180deg, rgba(30, 30, 30, 0.00) 0%, rgba(30, 30, 30, 0.00) 0%, rgba(30, 30, 30, 0.06) 0%, rgba(30, 30, 30, 0.12) 24.92%, rgba(30, 30, 30, 0.17) 61.77%, rgba(30, 30, 30, 0.22) 100%)',
      },
      gap: {
        '60': '60px', // Thêm khoảng cách 60px
=======
>>>>>>> eeec9f863e801b93a1f85ccd1803c2b02c10b5d7
      },
    },
  },
  plugins: [],
}