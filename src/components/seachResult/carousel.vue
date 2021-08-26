<template>
    <div class="flex justify-between bg-cardTitlePmad h-28 mx-5 my-5">
        <div class="nav-indicator prevArrow">
            <icon-left class="w-5 mx-1"></icon-left>
        </div>
        <swiper
            class="parallax-slider"
            parallax
            grabCursor
            :autoplay="swiperOption.autoplay"
            :loop="swiperOption.loop"
            :speed="swiperOption.speed"
            :pagination="swiperOption.pagination"
            :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
            :slides-per-view="3"
            :space-between="12"
        >
            <swiper-slide
                class="parallax-slide"
                v-for="image in images"
                :key="image.id"
            >
                <img :src="image.imageUrl" />
            </swiper-slide>
        </swiper>

        <div class="nav-indicator nextArrow">
            <icon-right class="w-5 mx-1"></icon-right>
        </div>
    </div>
</template>

<script>

import { Swiper, SwiperSlide, } from 'swiper/vue';
import SwiperCore, { Navigation, Parallax, Autoplay } from 'swiper'
import 'swiper/components/navigation/navigation.scss'
// Import Swiper styles
import 'swiper/swiper.scss';
import { reactive } from '@vue/reactivity';
SwiperCore.use([Navigation, Parallax, Autoplay])
import iconLeft from "../svgImage/iconLeft.vue"
import iconRight from "../svgImage/iconRight.vue"
import img1 from "../../assets/image/banner_cps2021.png"
import img2 from "../../assets/image/banner_jpds2020.png"
import img3 from "../../assets/image/banner_kanblo51.png"
import img4 from "../../assets/image/image7.jpeg"

export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        {
          id: 1,
          imageUrl: img1
        }, {
          id: 2,
          imageUrl: img2
        }, {
          id: 3,
          imageUrl: img3
        }, {
          id: 4,
          imageUrl: img4
        }, {
          id: 5,
          imageUrl: img4
        }, {
          id: 6,
          imageUrl: img4
        }, {
          id: 7,
          imageUrl: img4
        }
      ]
    }


  },
  components: {
    Swiper,
    SwiperSlide,
    iconLeft,
    iconRight
  }, setup() {
    const swiperOption = reactive({
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      speed: 1000,
      pagination: {
        clickable: true
      }
    })
    return {
      swiperOption
    }
  }
}
</script>

<style>
.parallax-slider {
    position: relative;
    width: 93%;
    height: 100%;
    margin-top: 14px;
    flex: none;
}
.parallax-slide {
    height: 80px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 33% !important;
    margin-top: 1px;
    margin-bottom: 4px;
    flex: none;
}
.nav-indicator {
    margin-top: 4.5%;
    flex: none;
}
</style>
