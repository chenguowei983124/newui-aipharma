const { callWithErrorHandling } = require('vue')
const svgToDataUri = require('mini-svg-data-uri')
const path = require('path')
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'multiselect-caret': `url("${svgToDataUri(
                    `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`
                )}")`,
                'multiselect-spinner': `url("${svgToDataUri(
                    `<svg viewBox="0 0 512 512" fill="${theme(
                        'colors.green.500'
                    )}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`
                )}")`,
                'multiselect-remove': `url("${svgToDataUri(
                    `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`
                )}")`,
            }),
            spacing: {
                // 5px
                1.25: '0.3125rem',
                // 6px
                1.5: '0.375rem',
                // 7px
                1.75: '0.4375rem',
                // 7.5px
                1.875: '0.5625rem',
                // 10px
                2.5: '0.625rem',
                // 13px
                3.25: '0.8125rem',
                // 15px
                3.75: '0.9375rem',
                // 22px
                5.5: '1.375rem',
                // 30px
                7.5: '1.875rem',
                // 34px
                8.5: '2.125rem',

                // 38px
                9.5: '2.375rem',
                // 45px
                11.25: '2.8125rem',
                // 50px
                12.5: '3.125rem',
                // 52px
                13: '3.25rem',
                // 55px
                13.75: '3.4375rem',
                // 60px
                15: '3.75rem',
                // 65px
                16.25: '4.0625rem',
                // 66px
                16.5: '4.125rem',
                // 67px
                16.75: '4.1875rem',
                // 68px
                17: '4.25rem',
                // 69
                17.25: '4.3125rem',
                // 70px
                17.5: '4.375rem',
                // 71px
                17.75: '4.4375rem',
                // 72px
                18: '4.5rem',
                // 73px
                18.25: '4.5625rem',
                // 74px
                18.5: '4.625rem',
                // 75px
                18.75: '4.6875rem',
                // 76px
                19: '4.75rem',
                // 77px
                19.25: '4.8125rem',
                // 78px
                19.5: '4.875rem',
                // 84px
                21: '5.25rem',
                // 90px
                22.5: '5.625rem',
                // 100px
                25: '6.25rem',
                // 110px
                27.5: '6.875rem',
                // 118px
                29.5: '7.375rem',
                // 120px
                30: '7.5rem',
                // 124px
                31: '7.75rem',
                // 134px
                33.5: '8.375rem',
                // 150px
                35: '8.75rem',
                // 150px
                37.5: '9.375rem',
                // 164px
                40.5: '10.125rem',
                // 164px
                41: '10.25rem',
                // 168px
                42: '10.5rem',
                // 170px
                42.5: '10.625rem',
                // 175px
                43.75: '10.9375rem',
                // 180px
                45: '11.25rem',
                // 183px
                45.75: '11.1875rem',
                // 184px
                46: '11.5rem',
                // 185px
                46.25: '11.5625rem',
                // 190px
                47.5: '11.875rem',
                // 200px
                50: '12.5rem',
                // 210px
                52.5: '13.125rem',
                // 216px
                54: '13.25rem',
                // 225px
                56.25: '14.0625rem',
                // 252px
                63: '15.75rem',
                // 256px
                64: '16rem',
                // 260px
                65: '16.25rem',
                // 264px
                66: '16.5rem',
                // 280px
                70: '17.5rem',
                // 330px
                82.5: '20.625rem',
                // 345px
                86.25: '21.5625rem',
                // 350px
                87.5: '21.875rem',
                // 355px
                88.75: '22.1875rem',
                // 375px
                93.75: '23.4375rem',
                // 484px
                121: '30.25rem',
                // 530px
                132.5: '33.0625rem',
                // 720px
                180: '45rem',
                // 765px
                191.25: '47.8125rem',
                // 770px
                192.5: '48.125rem',
                // 980px
                245: '61.25rem',

                // 1080px
                270: '67.5rem',
                // 1170px
                292.5: '73.125rem',
                // 1250px
                312.5: '78.125rem',
            },
            maxHeight: {
                'screen-menu': 'calc(100vh - 3.5rem)',
                modal: 'calc(100vh - 160px)',
            },
            maxHeight: {
                'full-18': 'calc(100% + 18px)',
                'full-70': 'calc(70% )',
                'full-80': 'calc(80% )',
                modal: 'calc(100% + 18px)',
            },
            height: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                'screen-60': '60vh',
                'screen-61': '61vh',
                'screen-62': '62vh',
                'screen-63': '63vh',
                'screen-64': '64vh',
                'screen-65': '65vh',
                'screen-66': '66vh',
                'screen-67': '67vh',
                'screen-68': '68vh',
                'screen-69': '69vh',
                'screen-70': '70vh',
                'screen-71': '71vh',
                'screen-72': '72vh',
                'screen-73': '73vh',
                'screen-74': '74vh',
                'screen-75': '75vh',
                'screen-80': '80vh',
                'screen-90': '90vh',
                'screen-91': '91vh',
                'screen-92': '92vh',
                'screen-93': '93vh',
                'screen-94': '94vh',
                'screen-95': '95vh',
                'screen-96': '96vh',
                'screen-97': '97vh',
                'screen-98': '98vh',
                'screen-99': '99vh',
            },
            backgroundColor: (theme) => ({
                ...theme('colors'),
                aiSwitchBg: '#fceacc',
                blueline: '#65bbe5',
                downloadIcon: '#8CC85A',
                organization: '#326EB5',
                whole: '#8cc85a',
                group: '#fa82a0',
                society: '#8cc85a',
                notlooked: '#fdf4e5',
                browse: '#d4145a',
                safety: '#fdd5df',
                recruitment: '#bbe1f3',
                examination: '#bbe1f3',
                eventType: '#fadcaa',
                international: '#d8c8e6',
                rescue: '#d9edc8',
                toTop: '#f09600',
                carousel: 'rgb(46, 38, 35)',
                // 右カラム
                // 背景
                backgroundMain: '#d6edf8',
                // アバター
                backgroundMainSearch: '#32a5dc',
                // マイデータ 背景
                personGroupInformation: '#fdf4e5',
                // お知らせ・掲示板ボタン
                personInformationButton: '#f15a24',
                // 組織内DI・症例 登録ボタン
                personOrganizationButton: '#f09600',
                searchBar: '#cce8f6',
                backgroundMain: 'rgb(214, 237, 248)',
                backgroundMainSearch: 'rgb(50, 165, 220)',
                searchResultTitle: 'rgb(101, 187, 229)',
                personDataInfo: 'rgb(230, 230, 230)',
                personGroupInformation: 'rgb(253, 244, 229)',
                personInformationButton: 'rgb(241, 90, 36)',
                searchBunnon: 'rgb(240, 150, 0)',
                cardTitle: 'rgb(101, 187, 229)',
                cardTitlePmad: 'rgb(153, 153, 153)',
                cardGroup1: 'rgb(105, 125, 200)',
                cardGroup2: 'rgb(140, 200, 90)',
                cardGroup3: 'rgb(250, 130, 160)',
                cardTypePmad1: 'rgb(236, 198, 206)',
                cardTypePmad2: 'rgb(252, 207, 161)',
                cardTypePmad3: 'rgb(187, 232, 221)',
                cardLooked: 'rgb(253, 245, 230)',
                cardBrowseRequired: 'rgb(212, 20, 90)',
                cardViewCount: 'rgb(204, 233, 246)',
                lock: 'rgba(0,0,0,0.2)',
            }),
            textColor: (theme) => theme('colors'),
            textColor: {
                downloadIcon: '#88BF5A',
                notlooked: '#f09600',
                view: '#32a5dc',
                notice: '#666666',
                CCE8F6: '#CCE8F6',
                G8CC85A: '#8CC85A',
                searchDropdown: 'rgb(58, 175, 226)',
                cardPmadNew: 'rgb(212, 20, 90)',
                cardPmadUpadte: 'rgb(241, 90, 36)',
                dropdownListItem: 'rgb(102, 102, 102)',
                googleTitle: 'rgb(50, 165,220)',
            },
            colors: {
                tags: 'rgb(51,51,51)',
                aiSwitch: '#f09600',
                notice: '#666666',
                notlooked: '#f09600',
                browse: '#d4145a',
                organization: '#326EB5',
                whole: '#8cc85a',
                group: '#fa82a0',
                society: '#8cc85a',
                safety: '#fdd5df',
                recruitment: '#bbe1f3',
                examination: '#bbe1f3',
                eventType: '#fadcaa',
                international: '#d8c8e6',
                rescue: '#d9edc8',
                blueline: '#65bbe5',
                grayline: '#999999',
                gray_e6e6e6: '#e6e6e6',
                gray_ececec: '#ececec',
                '326EB5Lins': '#326EB5',
                garyTitle: '#cccccc',
                commentBgColor: '#f2f2f2',
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
            fontSize: (theme) => theme('Size'),
            fontSize: {
                // 10px
                xxss: ['0.625rem', { lineHeight: '0.75rem' }],
                // 11px
                xxs: ['0.6875rem', { lineHeight: '0.875rem' }],
                // 13px
                mxs: ['0.8125rem', { lineHeight: '1rem' }],
                // 14px
                mxss: ['0.875rem', { lineHeight: '1rem' }],
                // 15px
                mxxs: ['0.9375rem', { lineHeight: '1rem' }],
                // 22px
                sxl: ['1.375rem', { lineHeight: '1.5rem' }],
                // 28px
                xxl: ['1.75rem', { lineHeight: '1.875rem' }],
                // 32px
                xll: ['1.75rem', { lineHeight: '1.875rem' }],
            },
            fontFamily: {
                Lato: 'Lato',
                NotoSansJp: 'Noto Sans JP',
                sans: ['Inter', ...fontFamily.sans],
            },
            zIndex: {
                0: 0,
                10: 10,
                20: 20,
                30: 30,
                40: 40,
                50: 50,
                25: 25,
                50: 50,
                75: 75,
                99: 99,
                auto: 'auto',
            },
            borderColor: (theme) => ({
                DEFAULT: theme('colors.gray.200', 'currentColor'),
                // 組織内DI・症例 登録ボタン、マイデータ 帯・境界線
                personOrganizationButton: '#f09600',
                personInformationButton: '#f15a24',
                downloadIcon: '#8CC85A',
                bluelineB: '#65B2D9',
            }),
            screens: {
                mid: '980px',
                lm: '1080px',
                cs: '460px',
                // => @media (min-width: 640px) { ... }
            },
            opacity: {
                85: '0.85',
            },
        },
        placeholderColor: {
            '32a5dcPlaceholderColor': '#32a5dc',
        },

        customForms: (theme) => ({
            default: {
                select: {
                    iconColor: theme('colors.balck'),
                },
                checkbox: {
                    iconColor: theme('colors.balck'),
                    icon: '<svg fill="none" stroke="rgb(0, 0, 0)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
                },
                radio: {
                    iconColor: theme('colors.balck'),
                },
            },
        }),
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
            display: ['group-hover', 'group-focus'],
            borderRadius: ['group-hover', 'group-focus'],
            padding: ['group-hover', 'group-focus'],
        },
    },
    plugins: [require('@tailwindcss/custom-forms')],
}
