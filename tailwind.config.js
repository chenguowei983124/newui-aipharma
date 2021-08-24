const { callWithErrorHandling } = require("vue");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        // 15px
        '3.75': '0.9375rem',
        // 30px
        '7.5': '1.875rem',
        // 50px
        '12.5': '3.125rem',
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
        // 90px
        '22.5': '5.625rem',
        // 100px
        '25': '6.25rem',
        // 124px
        '31': '7.75rem',
        // 134px
        '33.5': '8.375rem',
        // 170px
        '42.5': '10.625rem',
        // 190px
        '47.5': '11.875rem',
        // 200px
        '50': '12.5rem',
        // 484px
        '121': '30.25rem',

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
        'notlooked': '#f09600',
        'browse': '#d4145a',
        'safety': '#fdd5df',
        'recruitment': '#bbe1f3',
        'examination': '#bbe1f3',
        'eventType': '#fadcaa',
        'international': '#d8c8e6',
        'rescue': '#d9edc8',




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
        'notlooked': '#fdf4e5',
        'view': '#32a5dc',
        'notice': '#666666',


        'searchDropdown': 'rgb(58, 175, 226)',
        'cardPmadNew': 'rgb(212, 20, 90)',
        'cardPmadUpadte': 'rgb(241, 90, 36)',
        'dropdownListItem': 'rgb(102, 102, 102)',
        'googleTitle': 'rgb(50, 165,220)',
      }, colors: {
        'notice': '#666666',

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
