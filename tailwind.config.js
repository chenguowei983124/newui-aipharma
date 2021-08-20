const { callWithErrorHandling } = require("vue");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        'screen-menu': 'calc(100vh - 3.5rem)',
        modal: 'calc(100vh - 160px)'
      },
      maxHeight: {
        'full-18': 'calc(100% + 18px)',
        modal: 'calc(100% + 18px)'
      }, backgroundColor: theme => ({
        ...theme('colors'),
        'backgroundMain': 'rgb(214, 237, 248)',
        'backgroundMainSearch': 'rgb(50, 165, 220)',
        'searchResultTitle': 'rgb(101, 187, 229)',
        'personInfo': 'rgb(204, 204, 204)',
        'personDataInfo': 'rgb(230, 230, 230)',
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
        'searchDropdown': 'rgb(58, 175, 226)',
        'cardPmadNew': 'rgb(237, 28, 36)',
        'cardPmadUpadte': 'rgb(240, 152, 7)',
        'dropdownListItem': 'rgb(102, 102, 102)',
        'googleTitle': 'rgb(50, 165,220)',
      },
      fontSize: theme => theme('Size'),
      fontSize: {
        // 13px
        mxs: ['0.8125rem', { lineHeight: '1rem' }],
        // 11px
        xxs: ['0.6875rem', { lineHeight: '0.875rem' }],
        // 10px
        xxss: ['0.625rem', { lineHeight: '0.75rem' }],
        // 28px
        xxl: ['1.75rem', { lineHeight: '1.875rem' }],
        // 32px
        xll: ['1.75rem', { lineHeight: '1.875rem' }]
      }, fontFamily: {
        'Lato': 'Lato',
        'NotoSansJp': 'Noto Sans JP',
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
