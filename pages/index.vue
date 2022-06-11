<script lang="ts" setup>
import 'aos/dist/aos.css'
import AOS from "aos";

onMounted(() => {
  AOS.init();
})
</script>

<template>
  <Script type="text/javascript" src="plugins/whatsapp-widget.client.ts" />
  <TheForm/>
  <TheHeader/>
  <MainContent/>
  <TheFooter/>
</template>
