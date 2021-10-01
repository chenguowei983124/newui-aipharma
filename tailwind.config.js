const { callWithErrorHandling } = require("vue");
const svgToDataUri = require('mini-svg-data-uri');
const path = require('path');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'multiselect-caret': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`,
        )}")`,
        'multiselect-spinner': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="${theme('colors.green.500')}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`,
        )}")`,
        'multiselect-remove': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`,
        )}")`,
      }),
      spacing: {

        // 5px
        '1.25': '0.3125rem',
        '1.5': '0.375rem',
        '1.75': '0.4375rem',
        // 7.5px
        '1.875': '0.5625rem',

        '2.5': '0.625rem',
        // 13px
        '3.25': '0.8125rem',
        // 15px
        '3.75': '0.9375rem',
        // 30px
        '7.5': '1.875rem',
        // 34px
        '8.5': '2.125rem',
        // 38px
        '9.5': '2.375rem',
        // 50px
        '12.5': '3.125rem',
        '13': '3.25rem',
        // 55px
        '13.75': '3.4375rem',
        '15': '3.75rem',
        '16.25': '4.0625rem',
        '16.5': '4.125rem',
        '16.75': '4.1875rem',
        '17': '4.25rem',
        '17.25': '4.3125rem',
        '17.5': '4.375rem',
        '17.75': '4.4375rem',
        '18': '4.5rem',
        '18.25': '4.5625rem',
        '18.5': '4.625rem',
        '18.75': '4.6875rem',
        '19': '4.75rem',
        '19.25': '4.8125rem',
        // 84px
        '21': '5.25rem',
        // 90px
        '22.5': '5.625rem',
        // 100px
        '25': '6.25rem',
        '27.5': '6.875rem',
        '30': '7.5rem',
        // 124px
        '31': '7.75rem',
        // 134px
        '33.5': '8.375rem',
        // 150px
        '37.5': '9.375rem',
        // 170px
        '42.5': '10.625rem',
        '43.75': '10.9375rem',
        '45': '11.25rem',
        '45.75': '11.1875rem',
        '46': '11.5rem',
        '46.25': '11.5625rem',
        // 190px
        '47.5': '11.875rem',
        // 200px
        '50': '12.5rem',
        // 210px
        '52.5': '13.125rem',
        '54': '13.25rem',
        '56.25': '14.0625rem',
        '63': '15.75rem',
        '64': '16rem',
        '65': '16.25rem',
        '66': '16.5rem',
        // 280px
        '70': '17.5rem',
        // 330px
        '82.5': '20.625rem',
        // 355px
        '88.75': '22.1875rem',
        // 375px
        '93.75': '23.4375rem',
        // 484px
        '121': '30.25rem',
        '191.25': '47.8125rem',
        '245': '61.25rem',
        '270': '67.5rem',

      },
      maxHeight: {
        'screen-menu': 'calc(100vh - 3.5rem)',
        modal: 'calc(100vh - 160px)'
      },
      maxHeight: {
        'full-18': 'calc(100% + 18px)',
        modal: 'calc(100% + 18px)'
      }, backgroundColor: theme => ({
        ...theme('colors'),
        'organization': '#326EB5',
        'whole': '#8cc85a',
        'group': '#fa82a0',
        'society': '#8cc85a',
        'notlooked': '#fdf4e5',
        'browse': '#d4145a',
        'safety': '#fdd5df',
        'recruitment': '#bbe1f3',
        'examination': '#bbe1f3',
        'eventType': '#fadcaa',
        'international': '#d8c8e6',
        'rescue': '#d9edc8',
        'toTop': '#f09600',
        'carousel': 'rgb(46, 38, 35)',
        // 右カラム
        // 背景 
        'backgroundMain': '#d6edf8',
        // アバター
        'backgroundMainSearch': '#32a5dc',
        // マイデータ 背景
        'personGroupInformation': '#fdf4e5',
        // お知らせ・掲示板ボタン
        'personInformationButton': '#f15a24',
        // 組織内DI・症例 登録ボタン
        'personOrganizationButton': '#f09600',
        'searchBar': '#cce8f6',


        'backgroundMain': 'rgb(214, 237, 248)',
        'backgroundMainSearch': 'rgb(50, 165, 220)',
        'searchResultTitle': 'rgb(101, 187, 229)',
        // 'personInfo': 'rgb(204, 204, 204)',
        'personDataInfo': 'rgb(230, 230, 230)',
        'personGroupInformation': 'rgb(253, 244, 229)',
        'personInformationButton': 'rgb(241, 90, 36)',
        'personOrganizationButton': 'rgb(240, 150, 0)',
        'searchBunnon': 'rgb(240, 150, 0)',
        'cardTitle': 'rgb(101, 187, 229)',
        'cardTitlePmad': 'rgb(153, 153, 153)',
        'cardGroup1': 'rgb(105, 125, 200)',
        'cardGroup2': 'rgb(140, 200, 90)',
        'cardGroup3': 'rgb(250, 130, 160)',
        'cardTypePmad1': 'rgb(236, 198, 206)',
        'cardTypePmad2': 'rgb(252, 207, 161)',
        'cardTypePmad3': 'rgb(187, 232, 221)',
        'cardLooked': 'rgb(253, 245, 230)',
        'cardBrowseRequired': 'rgb(212, 20, 90)',
        'cardViewCount': 'rgb(204, 233, 246)',
        'lock': 'rgba(0,0,0,0.2)',

      }), textColor: theme => theme('colors'),
      textColor: {
        'notlooked': '#f09600',
        'view': '#32a5dc',
        'notice': '#666666',
        'CCE8F6': '#CCE8F6',


        'searchDropdown': 'rgb(58, 175, 226)',
        'cardPmadNew': 'rgb(212, 20, 90)',
        'cardPmadUpadte': 'rgb(241, 90, 36)',
        'dropdownListItem': 'rgb(102, 102, 102)',
        'googleTitle': 'rgb(50, 165,220)',
      }, colors: {
        'notice': '#666666',
        'notlooked': '#f09600',
        'browse': '#d4145a',
        'organization': '#326EB5',
        'whole': '#8cc85a',
        'group': '#fa82a0',
        'society': '#8cc85a',
        'safety': '#fdd5df',
        'recruitment': '#bbe1f3',
        'examination': '#bbe1f3',
        'eventType': '#fadcaa',
        'international': '#d8c8e6',
        'rescue': '#d9edc8',
        'blueline': '#65bbe5',
        'grayline': '#999999',
        '326EB5Lins': '#326EB5',
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        orange: colors.orange,
        'light-blue': colors.lightBlue,
        'litepie-primary': colors.emerald,
        'litepie-secondary': colors.coolGray,
        'test-Range-From': 'rgb(239,150,1)',
        'test-Range-Mid': 'rgb(250,220,170)',
      },
      fontSize: theme => theme('Size'),
      fontSize: {
        // 10px
        xxss: ['0.625rem', { lineHeight: '0.75rem' }],
        // 11px
        xxs: ['0.6875rem', { lineHeight: '0.875rem' }],
        // 13px
        mxs: ['0.8125rem', { lineHeight: '1rem' }],
        // 15px
        mxxs: ['0.9375rem', { lineHeight: '1rem' }],
        // 28px
        xxl: ['1.75rem', { lineHeight: '1.875rem' }],
        // 32px
        xll: ['1.75rem', { lineHeight: '1.875rem' }]
      }, fontFamily: {
        'Lato': 'Lato',
        'NotoSansJp': 'Noto Sans JP',
        sans: ['Inter', ...fontFamily.sans]
      }, zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '25': 25,
        '50': 50,
        '75': 75,
        '99': 99,
        'auto': 'auto',
      }, borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.200', 'currentColor'),
        // 組織内DI・症例 登録ボタン、マイデータ 帯・境界線
        'personOrganizationButton': '#f09600',
      }), screens: {
        'mid': '980px',
        'lm': '1080px',
        // => @media (min-width: 640px) { ... }

      },
      opacity: {
        85: '0.85'
      }
    },
    placeholderColor: {
      '32a5dcPlaceholderColor': '#32a5dc',
    }
  },
  variants: {
    extend: {
      opacity: ['active'],
      backgroundColor: ['active'],
      padding: ['hover'],
      maxHeight: ['focus'],
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled'],
      display: ["group-hover", 'group-focus']
    },
  },
  plugins: [],
}
