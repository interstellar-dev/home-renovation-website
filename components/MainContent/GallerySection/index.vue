<script lang="ts" setup>
import { ISwiperSection } from "~/composables/useSwiperSection.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';

const {
  modules,
  slideElements,
  controlledSwiper,
  descriprionIsHidden,
  setControlledSwiper,
  toggleSlideView,
  slideChangeHandler,
}:ISwiperSection = useSwiperSection()

</script>

<template>
  <section class="gallery-section">

    <div
      class="description"
      :class="{'hidden': descriprionIsHidden}"
    >
      <h2>Наши работы</h2>
      <p>Бережно работаем с любым материалом</p>
    </div>

    <swiper
      class="slider"
      :modules="modules"
      :slides-per-view="3.5"
      :space-between="50"
      :mousewheel="true"
      :centered-slides="true"
      :parallax="true"
      :controller="{ control: controlledSwiper }"
      :breakpoints="{
        0: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        680: {
          slidesPerView: 3.5,
          spaceBetween: 40
        }
      }"
      @slideChange="slideChangeHandler"
    >
      <swiper-slide
        v-for="n in 6"
        :key="`${n}-slider`"
        class="slider__item"
        @click="toggleSlideView(n )"
        ref="slideElements"
      >
        <div
          class="slider__img"
          :data-swiper-parallax="n % 2 === 0 ? '20%' : '30%'"
          :style="`background-image: url('./assets/images/gallery/${n}.jpg');`"
        />
      </swiper-slide>
    </swiper>

    <swiper
        class="slider__bg"
        :modules="modules"
        :slides-per-view="3.5"
        :space-between="50"
        :centered-slides="true"
        :parallax="true"
        @swiper="setControlledSwiper"
        :breakpoints="{
        0: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        680: {
          slidesPerView: 3.5,
          spaceBetween: 40
        }
      }"
    >
      <swiper-slide
        v-for="n in 5"
        :key="`${n}-slider__bg`"
        class="slider__item"
      >
        <div
          class="slider__img"
          :data-swiper-parallax="n % 2 === 0 ? '20%' : '30%'"
          :style="`background-image: url('./assets/images/gallery/${n}.jpg')`"
        />
      </swiper-slide>
    </swiper>

  </section>

</template>

<style lang="css" scoped>
.gallery-section {
  height: 100vh;
  width: 100%;
  background-color: var(--dark);
  overflow: hidden;
  line-height: 1.8;
  position: relative;
}

.slider {
  height: 100%;
  transform: rotate(15deg);
  overflow: visible;
  top: 20vh;
}

.slider :deep(.slider__wrapper)  {
  transition: var(--transition)!important;
  will-change: transform;
}

.swiper :deep(.slider__item)  {
  height: 75vh!important;
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition), z-index var(--transition);
}

.swiper :deep(.slider__img)  {
  height: 100%;
  width: 300%;
  background-size: cover;
  position: absolute;
  left: -100%;
  transition: var(--transition)!important;
  will-change: transform;
}

.slider__bg {
  z-index: 0;
  transform: rotate(-20deg);
  top: -60vh;
  left: -15vh;
  opacity: .15;
  filter: blur(110px) saturate(10);
}

.slider__bg .slider__item {
  height: 75vh;
}

.open {
  z-index: 2;
  transform: rotate(-15deg) scale(1.4);
  box-shadow: rgb(0 0 0 / .75) 0 0 0 10000px;
}

.description {
  position: absolute;
  top: 20vh;
  left: 8vw;
  max-width: 25vw;
  transition: opacity var(--transition), transform var(--transition);
}

.description h2 {
  font-size: calc(var(--size-index) * 2);
  line-height: calc(var(--size-index) * 2.5);
  color: var(--accent);
}

.description p {
  opacity: .9;
  transition: transform var(--transition);
  transition-duration: 3s;
  line-height: calc(var(--size-index) * 1.3);
  font-weight: 300;
}

.description.hidden {
  opacity: 0;
  z-index: 0;
  transform: translateY(5vh);
}

.description.hidden p {
  transform: translateY(2vh);
}
</style>
