<script lang="ts" setup>
import { IUseServicesSection } from "~/types/index.js";
import ServicesItem from './ServicesItem.vue'

const form = useForm()
const { servicesItems }:IUseServicesSection = useServiceSection()
</script>

<template>
  <section
    data-aos="fade"
    data-aos-duration="1000"
    data-aos-delay="300"
    class="services-section grid"
  >
    <header>
      <h2>Услуги.</h2>
    </header>

    <ServicesItem
      v-for="(item, idx) in servicesItems"
      :key="idx"
      :serviceItem="item"
      data-aos="slide-left"
      :data-aos-duration="`${idx}000`"
      data-aos-delay="400"
      data-aos-easing="ease-out-sine"
      @click="form.openFormBySelectedServices(item.header)"
    />
  </section>
</template>

<style lang="css" scoped>
.services-section {
  min-height: 100vh;
  margin: 0 auto;
  padding: 5vh;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--gutter);
  overflow: hidden;
}

.services-section header {
  grid-column: 1 / 4;
  margin: var(--gutter) 0;
}

.services-section header h2 {
  position: relative;
  display: inline-block;
  margin-left: 6vh;
  font-size: calc(var(--size-index) * 1.3);
}

.services-section header h2:before {
  content: '';
  position: absolute;
  left: -5vh;
  top: 50%;
  background-color: var(--accent);
  height: 3px;
  width: 4vh;
}


@media screen and (max-width: 992px) {
  .services-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-section header {
    grid-column: 1 / 1;
    align-self: center;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .services-section {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
}

@media screen and (max-width: 480px) {
  .services-section {
    padding: 2vh;
  }

  .services-section header h2 {
    font-size: calc(var(--size-index) * 1.8);
  }
}
</style>
