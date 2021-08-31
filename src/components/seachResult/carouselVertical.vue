<template>
    <div class="flex h-82.5">
        <swiper
            parallax
            grabCursor
            :direction="'vertical'"
            :autoplay="swiperOption.autoplay"
            :loop="swiperOption.loop"
            :speed="swiperOption.speed"
            :pagination="swiperOption.pagination"
            :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
            :slidesPerView="3"
            :spaceBetween="20"
        >
            <swiper-slide v-for="image in images" :key="image.id">
                <img :src="image.imageUrl" />
            </swiper-slide>
        </swiper>
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
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 330px;
    height: 100px;
}
</style>
