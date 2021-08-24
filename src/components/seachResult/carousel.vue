<template>
    <div class="flex justify-between bg-cardTitlePmad h-28 mx-3">
        <div class="nav-indicator prevArrow w-5 mx-1">
            <img src="../../assets/image/iconmonstr-left.svg" alt="" />
        </div>
        <swiper
            class="parallax-slider"
            parallax
            grabCursor
            :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
            :slides-per-view="3"
            :space-between="12"
        >
            <swiper-slide
                class="parallax-slide"
                v-for="image in images"
                :key="image.id"
            >
                <div class="parallx-slide-image">
                    <img src="../../assets/image/image7.jpeg" />
                </div>
            </swiper-slide>
        </swiper>

        <div class="nav-indicator nextArrow w-5 mx-1">
            <img src="../../assets/image/iconmonstr-right.svg" alt="" />
        </div>
    </div>
</template>

<script>
// import { FontAwesomeIcon } from 'font-awesome-icon'
import { Swiper, SwiperSlide, } from 'swiper/vue';
import SwiperCore, { Navigation, Parallax, Autoplay } from 'swiper'
import 'swiper/components/navigation/navigation.scss'
// Import Swiper styles
import 'swiper/swiper.scss';
SwiperCore.use([Navigation, Parallax, Autoplay])
export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        {
          id: 1,
          imageUrl: "../../assets/image/image/image1.jpeg"
        }, {
          id: 2,
          imageUrl: "../../assets/image/image/image1.jpeg"
        }, {
          id: 3,
          imageUrl: "../../assets/image/image/image1.jpeg"
        }, {
          id: 4,
          imageUrl: "../../assets/image/image/image1.jpeg"
        }, {
          id: 5,
          imageUrl: "../../assets/image/image/image1.jpeg"
        }, {
          id: 6,
          imageUrl: "../../assets/image/image/image1.jpeg"
        }, {
          id: 7,
          imageUrl: "../../assets/image/image/image1.jpeg"
        }
      ]
    }


  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style>
.parallax-slider {
    position: relative;
    width: 93%;
    margin-top: 14px;
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
}
.nav-indicator {
    margin-top: 4.5%;
}
</style>
