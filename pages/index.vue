<script setup lang="ts">
onMounted(async () => {
  await nextTick()
  const bgElement = document.getElementById('chaos-bg')
  if (bgElement) {
    bgElement.style.position = 'fixed'
    bgElement.style.top = '0'
    bgElement.style.left = '0'
    bgElement.style.width = '100%'
    bgElement.style.height = '100%'
    bgElement.style.zIndex = '-10'

    const { ChaosWavesBg } = await import('/jsm/ChaosWavesBg.module.js')
    new ChaosWavesBg({
      dom: 'chaos-bg',
      colors: [
        '#000000',
        '#01130e',
        '#1ac78d',
        '#012d1e',
        '#01130e',
        '#030303',
      ],
      loop: true,
    })
  }
})
</script>

<template>
  <div class="hero-bg" id="chaos-bg"></div>
  <div class="hero-container position-absolute text-center">
    <div class="hero-container__content">
      <h1
        class="hero-container__content__title text-transform-uppercase text-color-w"
      >
        HAMAROSAN
      </h1>
      <NuxtImg
        src="/img/logo.svg"
        alt="digital seed"
        class="hero-container__content__logo"
        height="100%"
      />
      <a href="tel:+36709423007" class="hero-container__content__button page-link">
        <NuxtImg
          src="/img/Phone.svg"
          alt="phone"
          class="hero-container__content__button__icon"
          height="100%"
        />
        +36 70 942 3007
      </a>
    </div>
  </div>
</template>
