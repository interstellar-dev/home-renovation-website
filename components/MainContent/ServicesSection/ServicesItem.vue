<script lang="ts" setup>
import { IServiceItem } from '@/types/services.js'

const props = defineProps<{ serviceItem:IServiceItem }>()
const {
  serviceItem: {
    value: {
      icon:{ alt, path },
      header,
      description,
    }
  }
} = toRefs(props)

const textIsShowen = ref<boolean>(false)
const toggleSowText = () => textIsShowen.value = !textIsShowen.value
</script>

<template>
  <div
    @mouseover.stop="toggleSowText()"
    @mouseout.stop="toggleSowText()"
    class="services-item grid"
  >
    <header class="services-item-header grid">
      <div class="services-item-header__image">
        <img :src='path' :alt="alt">
      </div>
      <div v-show="textIsShowen" class="services-item-header__text">
        <b>Заказать</b>
      </div>
    </header>

    <h3>{{ header }}</h3>
    <ul v-for="(desc, idx) in description" :key="idx">
      <li>{{ desc }}</li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.services-item {
  min-height: 33vh;
  background-color: var(--dark);
  position: relative;
  padding: calc(var(--gutter)* 2);
  border-radius: 5px;
  align-content: space-between;
  transition: all var(--transition);
}

.services-item:hover {
  box-shadow: 0 0 25px 1px var(--accent);
}

.services-item h3 {
  color: #fff;
  margin: var(--gutter) 0;
}

.services-item ul {
  margin-left: var(--gutter);
}

.services-item:before {
  content: '';
  cursor: pointer;
  position: absolute;
  top: var(--gutter);
  left: var(--gutter);
  right: var(--gutter);
  bottom: var(--gutter);
  border: none;
  opacity: 0;
  transition: all var(--transition);
}

.services-item:hover:before {
  padding: 20px;
  opacity: 1;
  border: 1px solid rgba(var(--white), .2);
}

.services-item-header {
  grid-template-columns: repeat(2, 1fr);
}

.services-item-header__text {
  text-align: right;
  text-transform: uppercase;
  color: var(--accent);
}

@media screen and (max-width: 768px) {
  .services-item {
    padding: var(--gutter);
  }

  .services-item:hover:before {
    border: none;
  }
}
</style>
