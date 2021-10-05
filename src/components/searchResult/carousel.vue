<template>
    <div
        class="
            flex
            justify-between
            bg-cardTitlePmad
            mx-5
            my-5
            h-0
            invisible
            cs:visible
            cs:h-21
            relative
        "
    >
        <div class="nav-indicator prevArrow w-7.5 h-12 bg-cardTitlePmad">
            <icon-left class="w-4 mx-1 z-99 absolute"></icon-left>
        </div>
        <div class="flex pl-7 pr-7.5 pt-1.75 absolute h-19.25 z-75">
            <div
                class="w-12.5 z-9 bg-gradient-to-r from-gray-900 bg-opacity-75"
            ></div>
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
            :slidesPerView="swiperOption.slidesPerView"
            :space-between="swiperOption.spaceBetween"
            :centeredSlides="true"
            :preloadImages="true"
            :updateOnImagesReady="true"
            :updateOnWindowResize="true"
            :watchOverflow="true"
            :observer="true"
            :observeParents="true"
            @resize="onResize"
            @afterInit="onResize"
        >
            <!-- :breakpoints="breakpoints" -->
            <swiper-slide
                class="parallax-slide"
                v-for="image in images"
                :key="image.id"
            >
                <img :src="image.imageUrl" />
            </swiper-slide>
        </swiper>

        <div class="nav-indicator nextArrow w-7.5 h-12 bg-cardTitlePmad">
            <icon-right class="w-4 ml-2 mx-1 z-99 absolute"></icon-right>
        </div>
        <div class="flex right-7 pt-1.75 absolute h-19.25 z-75">
            <div
                class="w-12.5 z-75 bg-gradient-to-l from-gray-900 bg-opacity-75"
            ></div>
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
      },
      slidesPerView: 2,
      spaceBetween: 5
    });
    const onResize = (handler) => {
      const IMG_WIDTH = 234
      swiperOption.slidesPerView = (handler.width / IMG_WIDTH).toFixed(2)
    };
    return {
      swiperOption,
      onResize,
    }
  }
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

    /* object-fit: cover; */
}
/* .parallax-slide {
    height: 80px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 30% !important;
    margin-top: 1px;
    margin-bottom: 4px;
    flex: none;
} */
.nav-indicator {
    margin-top: 4%;
    flex: none;
}
</style>
