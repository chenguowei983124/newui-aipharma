<template>
    <div
        class="
            flex
            justify-between
            cs:bg-cardTitlePmad
            cs:mx-5
            my-5
            h-48
            cs:h-21
            relative
        "
    >
        <div
            class="
                nav-indicator
                prevArrow
                cs:w-7.5
                h-12
                bg-cardTitlePmad
                invisible
                cs:visible
            "
        >
            <icon-left class="w-4 mx-1 z-99 absolute"></icon-left>
        </div>
        <div
            class="
                flex
                pl-7
                pr-7.5
                pt-3
                absolute
                h-18
                z-75
                invisible
                cs:visible
            "
        >
            <div
                class="w-12.5 z-9 bg-gradient-to-r from-gray-900 bg-opacity-75"
            ></div>
        </div>

        <swiper
            class="parallax-slider"
            id="sc"
            parallax
            grabCursor
            :autoplay="swiperOption.autoplay"
            :loop="swiperOption.loop"
            :speed="swiperOption.speed"
            :pagination="swiperOption.pagination"
            :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
            :slidesPerView="swiperOption.slidesPerView"
            :space-between="swiperOption.spaceBetween"
            :centeredSlides="true"
            :watchOverflow="true"
            :observer="true"
            :observeParents="true"
            :breakpoints="{
                1: {
                    direction: 'vertical',
                },
                460: {
                    direction: 'horizontal',
                },
            }"
            @resize="onResize"
            @afterInit="onResize"
            @update="onResize"
        >
            <swiper-slide
                class="parallax-slide"
                :id="'ss' + image.id"
                v-for="image in images"
                :key="image.id"
            >
                <a :href="image.url" target="_blank" rel="noopener noreferrer">
                    <img
                        :id="'si' + image.id"
                        :src="image.src"
                        alt="失敗時の表示文言"
                        onerror="this.onerror = null; this.src='https://i.pinimg.com/originals/95/9d/5d/959d5d8322cae221666af63c1c816f1b.jpg';"
                    />
                </a>
            </swiper-slide>
        </swiper>

        <div
            class="
                nav-indicator
                nextArrow
                cs:w-7.5
                h-12
                bg-cardTitlePmad
                invisible
                cs:visible
            "
        >
            <icon-right class="w-4 ml-2 mx-1 z-99 absolute"></icon-right>
        </div>
        <div class="flex right-7 pt-3 absolute h-18 z-75 invisible cs:visible">
            <div
                class="w-12.5 z-75 bg-gradient-to-l from-gray-900 bg-opacity-75"
            ></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Parallax, Autoplay } from 'swiper'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/swiper.scss'
import { reactive } from '@vue/reactivity'
SwiperCore.use([Navigation, Parallax, Autoplay])
import iconLeft from '../svgImage/iconLeft.vue'
import iconRight from '../svgImage/iconRight.vue'

export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    iconLeft,
    iconRight,
  },
  setup() {
    const swiperOption = reactive({
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1000,
      pagination: {
        clickable: true,
      },
      slidesPerView: 2,
      spaceBetween: 5,
    })
    const onResize = (handler) => {
      const IMG_WIDTH = 234
      if (handler.isHorizontal()) {
        swiperOption.slidesPerView = (
          handler.el.children[1].offsetWidth /
          (IMG_WIDTH + swiperOption.spaceBetween)
        ).toFixed(2)
      } else {
        const sp = 3
        if (swiperOption.slidesPerView != sp) {
          swiperOption.slidesPerView = sp
        }
      }
    }
    return {
      swiperOption,
      onResize,
    }
  },
  methods: {
    sleep(msec) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve()
        }, msec)
        console.log('request API for images ')
      })
    },
    loadImages() {
      //   console.log("this.$store.getters.topScientifiSocietyInfo", this.$store.getters.topScientifiSocietyInfo.data.imageLists[0])
      this.images = [
        {
          id: 1,
          src: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[0].imageUrl,
          url: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[0].imageUrl,
        },
        {
          id: 2,
          src: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[1].imageUrl,
          url: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[1].imageUrl,
        },
        {
          id: 3,
          src: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[2].imageUrl,
          url: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[2].imageUrl,
        },
        {
          id: 4,
          src: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[3].imageUrl,
          url: this.$store.getters.topScientifiSocietyInfo.data
            .imageLists[3].imageUrl,
        },
      ]
    },
  },
  created() {
    this.loadImages()
  },
}
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
    z-index: 1;
}
.parallax-slide {
    z-index: 1;
    /* left: 40px; */
    text-align: center;
    font-size: 18px;
    background-color: rgb(153, 153, 153);

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    /* -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;*/
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    z-index: 0;
}
.swiper-slide img {
    display: block;
    width: 234px;
    height: 60px;
    z-index: 1;
}
.nav-indicator {
    margin-top: 29px;
    flex: none;
}
</style>
