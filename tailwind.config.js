/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#0147ff',
        primary_hover: '#0036ee',
        primary_text_color: '#282828',
        primary_button_text_color: '#F7F7F7',
        header_H2_color: '#1D1D1B',
        primary_background: '#F7F7F7',
        primary_background_hover: '#E6E6E6',
        dot_non_active: '#EDEDED',
        footer_color: '#282828',
        seo_color: '#282828',
      },
      fontFamily: {
        roboto_flex: ['Roboto Flex', 'sans-serif'],
        bebas_neue: ['Bebas Neue', 'sans-serif'],
        roboto_condensed: ['Roboto Condensed', 'sans-serif'],
      },
      fontSize: {
        button: ['15px', '22.5px'],
        header_H1: ['76.29px', '83.92px'],
        xxsm_H1: ['45px', '1'],
        tag: ['21.5px', '32.25px'],
        header_H2: ['40px', '48px'],
        header_H3: ['25px', '37.5px'],
        seo_p: ['14px', '21px'],
        xsm_H3: '22px',
        xxsm_H3: '20px',
        xsm_seo_p: '13px',
      },
      maxWidth: {
        container: '1200px',
        gallery: '1264px',
      },
      minWidth: {
        seo_button: '57px',
      },
      width: {
        default: '85%',
        seo_button: '57px',
        container: '1200px',
        header_wrapper: '300px',
        gallery: '1264px',
        seo: '576px',
        gallery_scroll: '1400px',
      },
      height: {
        hero: '825px',
        hero_lg: '750px',
        hero_md: '650px',
        hero_xsm: '550px',
        hero_xxsm: '450px',
      },
      maxHeight: {
        xxsm_photo: '280px',
        xsm_photo: '330px',
        sm_photo: '380px',
      },
      screens: {
        xsm: '500px',
        xxsm: '350px',
      },
      padding: {
        hero_lg: '120px',
        hero_sm: '90px',
        hero_xsm: '80px',
        seo: '88px',
        seo_button: '6px',
      },
      letterSpacing: {
        header_H1: '-0.04em',
        header_H3: '-0.03em',
      },
      inset: {
        hero_top: '328px',
        element_top: '-79px',
      },
      gap: {
        dot: '18px',
        footer_gap: '253px',
        seo_article_xsm: '6px',
      },
      borderWidth: {
        seo_button: '1.5px',
      },
      transitionDuration: {
        450: '450ms',
      },
      translate: {
        '1px': '-1px',
        '1.5px': '-1.5px',
        '0.5px': '0.5px',
      },
      gridTemplateRows: {
        '0fr': '0fr',
        '1fr': '1fr',
      },
    },
  },
  plugins: [],
};
