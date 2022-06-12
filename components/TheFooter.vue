<script lang="ts" setup>
import { IUseFooter } from "~/composables/useFooter.js";

const { phone, date }:IUseFooter = useFooter()
</script>

<template>
  <footer data-aos="fade-up" data-aos-delay="600">
    <div class="contacts">
      <Logo/>
      <QrCode/>
      <div class="phone">
        <a :href="`tel:${phone}`" >
          {{ phone }}
        </a>
      </div>
    </div>
    <p>Homecraft &copy; {{ date }}</p>
  </footer>
</template>

<style lang="css" scoped>
footer {
  min-height: 100vh;
  padding: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.contacts {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.phone a {
  text-decoration: none;
  color: var(--white);
  font-family: ubuntu_mono, sans-serif;
  font-size: calc(var(--size-index) * 1.7);
  font-weight: 400;
  transition: color var(--transition);
}

.phone a:hover, .phone a:active {
  color: var(--accent);
}

footer p {
  font-weight: 300;
}
</style>
