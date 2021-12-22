<template>
  <div
    class="flex justify-between flex-none overflow-hidden mx-2.5 h-30 relative"
  >
    <swiper
      class="parallax-slider"
      id="sc"
      parallax
      :slidesPerView="swiperOption.slidesPerView"
      :space-between="swiperOption.spaceBetween"
      @resize="onResize"
      @afterInit="onResize"
      @update="onResize"
      :scrollbar="{
        container: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <!-- <a :href="image.url" target="_blank" rel="noopener noreferrer"> -->
        <img
          class="rounded-md"
          :src="image.imgUrl"
          alt="失敗時の表示文言"
          onerror="this.onerror = null; this.src='https://i.pinimg.com/originals/95/9d/5d/959d5d8322cae221666af63c1c816f1b.jpg';"
        />
        <!-- </a> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Parallax, Autoplay, Scrollbar } from 'swiper'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/swiper.scss'
import { reactive } from '@vue/reactivity'
SwiperCore.use([Navigation, Parallax, Autoplay, Scrollbar])

export default {
  props: {
    images: [],
  },
  data() {
    return {
      parallaxSwiperWidth: 0,
      // images: [],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperOption = reactive({
      slidesPerView: 3,
      spaceBetween: 5,
    })
    const onResize = (handler) => {
      const IMG_WIDTH = 235
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
      this.images = []
      for (
        let i = 0;
        i <
        this.$store.getters.topScientifiSocietyInfo.imageLists.length;
        i++
      ) {
        this.images.push({
          id: i,
          src: this.$store.getters.topScientifiSocietyInfo.imageLists[
            i
          ].imageUrl,
          url: this.$store.getters.topScientifiSocietyInfo.imageLists[
            i
          ].linkUrl,
        })
      }
    },
  },
  mounted() { },
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
  width: 235px;
  margin-left: 10px;
  margin-top: 4px;
  height: 100px;
  object-fit: cover;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
}
</style>
