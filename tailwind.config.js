/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        navclr:'#ffffff',
        mText:'#192239',
        btnclr:'#FF7628',
        pText:'#6C7D93',
        cardBg1:'#EBF7E9',
        cardText:'#202427',
        cardTextB:'#D8EAFF',
        cardTextC:'#FBF1EC',
        abutBG:'#FCF8F8',
        boxBG:'#C4C4C4',
      },
      backgroundImage:{
        banBg: "url('./assets/BannerBg.png')",
        cardBg: "url('./assets/CardBG.png')",
      },
    },
  },
  plugins: [],
}

