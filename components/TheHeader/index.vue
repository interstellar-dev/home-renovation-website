<script lang="ts" setup>
const { onEnter, onBeforeEnter, elIsShowen } = useTheHeader()
</script>

<template>
  <header class="main-header grid">

    <Logo class="header-logo"/>

      <div class="header-content grid">
        <transition-group
            appear
            @before-enter="onBeforeEnter"
            @enter="onEnter"
        >
          <b v-show="elIsShowen" data-index="2" key="b">Качественно, Быстро, Надёжно!</b>
          <h1 v-show="elIsShowen" data-index="1" key="h1">Мы делаем ремонт квартир в Москве</h1>
          <TheButton v-show="elIsShowen" data-index="3" key="button">Заказать звонок</TheButton>
        </transition-group>
      </div>

  </header>
</template>

<style lang="css" scoped>
.main-header {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  align-content: center;
  background-image: url('./assets/images/0-builder.jpg')
}

.main-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--dark);
  opacity: .7;
}

.header-logo {
  position: absolute;
  top: 4vh;
  left: 8vh;
}

.header-content {
  z-index: 1;
  text-align: center;
  padding: 60px var(--gutter);
}

.header-content b {
  color: var(--accent);
  text-transform: uppercase;
  font-weight: 300;
}

.header-content h1 {
  margin-top: 2vh;
  font-size: calc(var(--size-index) * 2);
  line-height: calc(var(--size-index) * 2.7);
}
</style>
