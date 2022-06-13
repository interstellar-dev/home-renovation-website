<script lang="ts" setup>
import 'aos/dist/aos.css'
import AOS from "aos";

const config = useRuntimeConfig()

const TITLE = 'Ремонт квартир в Москве'
const DESCRIPTION = 'Ремонт квартир в Москве. Качественный ремонт по приемлемым ценам'

useHead({
  title: `Homecraft - ${TITLE}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: DESCRIPTION },
    { property: 'og:title', content: `${TITLE}` },
    { property: 'og:description', content: DESCRIPTION },
    { property: 'og:url', content: config.websiteUrl },
    { property: 'og:image', content: `${config.websiteUrl}${config.app.buildAssetsDir}0-builder.jpg` },
    { property: 'og:image:alt', content: DESCRIPTION },
  ],
})

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
