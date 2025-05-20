<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const slides = ref([
  {
    title: 'PARTI BIRTOK RENDEZVÉNYHÁZ',
    subtitle: 'Egy hely, ahol bármikor és bárhmeddig bulizhatsz',
    description:
      'Modern, klimatizált rendezvényházunk Makó és Rákos között, csendes környezetben várja vendégeit. 75 fős befogadóképesség, hangtechnika, catering, szállás és még sok más – minden adott egy emlékezetes eseményhez.',
    ctaText: 'Foglalj időpontot még ma!',
    ctaButtonText: 'Időpontfoglalás',
    ctaLink: '#booking',
    imageUrl: '/img/hero.webp',
    imageAlt:
      'Parti Birtok Rendezvényház - Elegáns rendezvényterem terített asztalokkal',
  },
  {
    title: 'ESKÜVŐK & CSALÁDI RENDEZVÉNYEK',
    subtitle: 'Tökéletes helyszín az élet fontos pillanataihoz',
    description:
      'Különleges környezetben teremtünk feledhetetlen élményt a nagy napra. Egyedi dekorációs lehetőségek, professzionális hangosítás és letisztult elegancia várja az ifjú párt és a vendégeket a Parti Birtok Rendezvényházban.',
    ctaText: 'Lásd az esküvői csomagajánlatainkat!',
    ctaButtonText: 'Ajánlatkérés',
    ctaLink: '#wedding-packages',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Parti Birtok Rendezvényház - Esküvői helyszín',
  },
  {
    title: 'CÉGES ESEMÉNYEK & TRÉNINGEK',
    subtitle: 'Inspiráló környezet a sikeres üzleti találkozókhoz',
    description:
      'Tárgyalók, nagy előadótér és nyugodt, zöld környezet segít a produktív munkában. A modern technikai felszereltség és rugalmas térrendezés minden üzleti igényt kielégít. Fedezze fel üzleti csomagjainkat!',
    ctaText: 'Tökéletes helyszín az üzleti sikereinek!',
    ctaButtonText: 'Céges ajánlatok',
    ctaLink: '#business-events',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Parti Birtok Rendezvényház - Céges esemény helyszín',
  },
  {
    title: 'GASZTRONÓMIAI ÉLMÉNYEK',
    subtitle: 'Ízek és kényeztetés minden alkalomra',
    description:
      'Egyedi, minőségi alapanyagokból készült catering kínálatunk mindenki számára tartogat különlegességeket. A tradicionális magyar ízektől a nemzetközi fogásokig, minden igényt kielégítünk. Diétás és vegetáriánus opciók is elérhetőek.',
    ctaText: 'Kóstold meg különleges menüsorainkat!',
    ctaButtonText: 'Catering ajánlatok',
    ctaLink: '#catering',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Parti Birtok Rendezvényház - Gasztronómiai kínálat',
  },
  {
    title: 'SZÁLLÁS & PIHENÉS',
    subtitle: 'Kényelmes szálláslehetőségek a helyszínen',
    description:
      'Rendezvénye után nem kell sietnie! Elegáns, légkondicionált szobáink tökéletes pihenést biztosítanak a helyszínen. A rendezvény résztvevői kedvezményes áron vehetik igénybe szálláskínálatunkat.',
    ctaText: 'Biztosítsa a tökéletes pihenést is!',
    ctaButtonText: 'Szállásajánlatok',
    ctaLink: '#accommodation',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Parti Birtok Rendezvényház - Szállás lehetőségek',
  },
])

const currentSlide = ref(0)
const autoplayInterval = ref(null)
const autoplayDelay = 7000
const sliderTrack = ref(null)

const sliderStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * 20}%)`,
    cursor: 'grab',
  }
})

function goToSlide(index) {
  currentSlide.value = index
  resetAutoplay()
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

function resetAutoplay() {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }

  autoplayInterval.value = setInterval(nextSlide, autoplayDelay)
}

let touchStartX = 0
let touchEndX = 0
let mouseStartX = 0
let mouseEndX = 0
let isDragging = false
let dragThreshold = 50

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX
}

function handleTouchMove(e) {
  if (touchStartX) {
    const currentX = e.changedTouches[0].screenX
    const diff = touchStartX - currentX

    if (Math.abs(diff) > dragThreshold / 3) {
      const movePercent = (diff / window.innerWidth) * 100
      const currentPosition = currentSlide.value * 20
      const newPosition = Math.max(
        0,
        Math.min(80, currentPosition + movePercent)
      )

      sliderTrack.value.style.transform = `translateX(-${newPosition}%)`
      sliderTrack.value.style.transition = 'transform 0.1s ease-out'
    }
  }
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe('touch')

  if (sliderTrack.value) {
    sliderTrack.value.style.transition = 'transform 0.4s ease-in-out'
  }
}

function handleMouseDown(e) {
  e.preventDefault()
  isDragging = true
  mouseStartX = e.clientX

  if (sliderTrack.value) {
    sliderTrack.value.style.cursor = 'grabbing'
  }
}

function handleMouseMove(e) {
  if (isDragging && mouseStartX) {
    const currentX = e.clientX
    const diff = mouseStartX - currentX

    if (Math.abs(diff) > dragThreshold / 3) {
      const movePercent = (diff / window.innerWidth) * 100
      const currentPosition = currentSlide.value * 20
      const newPosition = Math.max(
        0,
        Math.min(80, currentPosition + movePercent)
      )

      sliderTrack.value.style.transform = `translateX(-${newPosition}%)`
      sliderTrack.value.style.transition = 'transform 0.1s ease-out'
    }
  }
}

function handleMouseUp(e) {
  if (isDragging) {
    mouseEndX = e.clientX
    handleSwipe('mouse')
    isDragging = false

    if (sliderTrack.value) {
      sliderTrack.value.style.cursor = 'grab'
      sliderTrack.value.style.transition = 'transform 0.4s ease-in-out'
    }
  }
}

function handleMouseLeave(e) {
  if (isDragging) {
    mouseEndX = e.clientX
    handleSwipe('mouse')
    isDragging = false

    if (sliderTrack.value) {
      sliderTrack.value.style.cursor = 'grab'
      sliderTrack.value.style.transition = 'transform 0.4s ease-in-out'
    }
  }
}

function handleSwipe(type = 'touch') {
  const startX = type === 'touch' ? touchStartX : mouseStartX
  const endX = type === 'touch' ? touchEndX : mouseEndX
  const minSwipeDistance = dragThreshold

  if (endX < startX - minSwipeDistance) {
    nextSlide()
    resetAutoplay()
  } else if (endX > startX + minSwipeDistance) {
    currentSlide.value =
      (currentSlide.value - 1 + slides.value.length) % slides.value.length
    resetAutoplay()
  } else {
    if (sliderTrack.value) {
      sliderTrack.value.style.transform = `translateX(-${
        currentSlide.value * 20
      }%)`
    }
  }

  if (type === 'touch') {
    touchStartX = 0
    touchEndX = 0
  } else {
    mouseStartX = 0
    mouseEndX = 0
  }
}

onMounted(() => {
  autoplayInterval.value = setInterval(nextSlide, autoplayDelay)

  if (sliderTrack.value) {
    sliderTrack.value.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })
    sliderTrack.value.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    })
    sliderTrack.value.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    })

    sliderTrack.value.addEventListener('mousedown', handleMouseDown)
    sliderTrack.value.addEventListener('mousemove', handleMouseMove)
    sliderTrack.value.addEventListener('mouseup', handleMouseUp)
    sliderTrack.value.addEventListener('mouseleave', handleMouseLeave)

    sliderTrack.value.style.cursor = 'grab'

    sliderTrack.value.style.transition = 'transform 0.4s ease-in-out'
  }

  for (let i = 1; i < slides.value.length; i++) {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = slides.value[i].imageUrl
    document.head.appendChild(link)
  }

  const images = document.querySelectorAll('.hero__image')
  images.forEach((img) => {
    img.addEventListener('dragstart', (e) => e.preventDefault())
  })
})

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }

  if (sliderTrack.value) {
    sliderTrack.value.removeEventListener('touchstart', handleTouchStart)
    sliderTrack.value.removeEventListener('touchmove', handleTouchMove)
    sliderTrack.value.removeEventListener('touchend', handleTouchEnd)

    sliderTrack.value.removeEventListener('mousedown', handleMouseDown)
    sliderTrack.value.removeEventListener('mousemove', handleMouseMove)
    sliderTrack.value.removeEventListener('mouseup', handleMouseUp)
    sliderTrack.value.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<template>
  <section class="hero">
    <div class="hero__slider">
      <div class="hero__slider-track" ref="sliderTrack" :style="sliderStyle">
        <div v-for="(slide, index) in slides" :key="index" class="hero__slide">
          <div class="hero__slide-content">
            <h1 class="hero__title">{{ slide.title }}</h1>
            <p class="hero__subtitle">{{ slide.subtitle }}</p>
            <div class="hero__description">
              <p>{{ slide.description }}</p>
            </div>
            <div class="hero__cta">
              <p class="hero__cta-text">{{ slide.ctaText }}</p>
              <a :href="slide.ctaLink" class="hero__button">{{
                slide.ctaButtonText
              }}</a>
            </div>
          </div>
          <div class="hero__image-container">
            <img
              :src="slide.imageUrl"
              :alt="slide.imageAlt"
              class="hero__image"
            />
          </div>
        </div>
      </div>

      <div class="hero__navigation">
        <button
          v-for="(_, index) in slides"
          :key="index"
          :aria-label="`Slide ${index + 1}`"
          class="hero__nav-dot"
          :class="{ 'hero__nav-dot--active': currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use 'sass:color';
@use 'sass:math';

$primary-color: #fff;
$tertiary-color: #cca132;
$dark-color: #181818;
$text-color: #001647;
$dark-text: #181818;
$white: #fff;
$black: #000;
$error-color: #e74c3c;
$success-color: #2ecc71;
$dark-bg: #111;
$border-color: #ddd;
$border-radius: 5px;
$transition-speed: 0.3s;
$box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
$text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  margin-top: -4.5em;

  &__slider {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__slider-track {
    display: flex;
    width: 500%;
    height: 100%;
    transition: transform $transition-speed ease-in-out;
  }

  &__slide {
    position: relative;
    width: 20%;
    height: 100%;
    flex-shrink: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.62;
      background: linear-gradient(
        90deg,
        #000 0.63%,
        rgba(0, 0, 0, 0.81) 34.1%,
        rgba(0, 0, 0, 0) 100.56%
      );
      z-index: 1;
    }
  }

  &__slide-content {
    position: absolute;
    top: 50%;
    left: 3em;
    transform: translateY(-50%);
    max-width: 600px;
    color: $primary-color;
    z-index: 2;
    padding: 2rem;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
    text-shadow: $text-shadow;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-shadow: $text-shadow;
    border-bottom: 1px solid $primary-color;
    padding-bottom: 1rem;
  }

  &__description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-shadow: $text-shadow;
  }

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__cta-text {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-shadow: $text-shadow;
    font-weight: 600;
  }

  &__button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background-color: $tertiary-color;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    border-radius: 5px;
    transition: background-color $transition-speed, transform $transition-speed;

    &:hover,
    &:focus {
      background-color: color.adjust($tertiary-color, $lightness: -10%);
      transform: translateY(-2px);
    }
  }

  &__image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__navigation {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    z-index: 3;
  }

  &__nav-dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: background-color $transition-speed;

    &--active {
      background-color: $primary-color;
    }

    &:hover,
    &:focus {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>

