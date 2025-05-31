<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

// Képek URL-jei tömbben
const imageUrls = [
  '/img/partners/gyomro.webp',
  '/img/partners/pomaz.webp',
  '/img/partners/ddc.webp',
  '/img/partners/b.webp',
  '/img/partners/msz.webp',
  '/img/partners/gts.webp',
  '/img/partners/maxeron.webp'
]

const partners = [
  { name: 'Gyömrő Város', image: imageUrls[0] },
  { name: 'Pomáz Város', image: imageUrls[1] },
  { name: 'Duna-Dráva Cement Kft.', image: imageUrls[2] },
  { name: 'Észak-Budai Zrt.', image: imageUrls[3] },
  { name: 'MSZ Mérőhelyi Szolgáltatások Kft.', image: imageUrls[4] },
  { name: 'GTS Investment Kft.', image: imageUrls[5] },
  { name: 'Maxeron Kft.', image: imageUrls[6] },
]

const track = ref<HTMLElement | null>(null)
const currentPage = ref(0)
const visibleSlides = ref(6) // Alapértelmezett, majd igazítjuk a képernyőmérethez
const autoplayInterval = ref<number | null>(null)
const autoplayDelay = 4000
const dragThreshold = 50 // Minimális húzási távolság a slide váltásához
const isInfinite = ref(true) // Végtelen görgetés bekapcsolása
const isTransitioning = ref(false) // Átmenet követése

// Touch és mouse események kezeléséhez változók
let touchStartX = 0
let touchEndX = 0
let mouseStartX = 0
let mouseEndX = 0
let isDragging = false

// Kiszámoljuk a teljes oldalak számát
const totalPages = computed(() => {
  return Math.ceil(partners.length / visibleSlides.value)
})

// Végtelen görgető segédváltozók
const firstVisibleItems = computed(() => {
  // Az első visibleSlides.value számú elem a partners tömbből
  return partners.slice(0, visibleSlides.value)
})

const lastVisibleItems = computed(() => {
  // Az utolsó visibleSlides.value számú elem a partners tömbből
  return partners.slice(-visibleSlides.value)
})

// Slider stílus számítása a transform értékkel
const sliderStyle = computed(() => {
  // Alap transzformáció - a klónozott elemek miatt el kell tolni az eredeti pozíciótól
  const basePercentage = (visibleSlides.value * 100) / partners.length
  const transformPercentage = isInfinite.value
    ? basePercentage + currentPage.value * (100 / totalPages.value)
    : currentPage.value * (100 / totalPages.value)

  return {
    transform: `translateX(-${transformPercentage}%)`,
    transition: isTransitioning.value ? 'transform 0.4s ease-in-out' : 'none',
    cursor: 'grab',
  }
})

// Slide-ok számának frissítése képernyőméret szerint
function updateVisibleSlides() {
  const width = window.innerWidth
  if (width <= 480) {
    visibleSlides.value = 2
  } else if (width <= 768) {
    visibleSlides.value = 3
  } else if (width <= 1024) {
    visibleSlides.value = 4
  } else {
    visibleSlides.value = 6
  }
}

// Következő oldalra lépés
function nextPage() {
  isTransitioning.value = true
  currentPage.value++

  // Ha végtelen görgetés van bekapcsolva és elértük a végét
  if (isInfinite.value && currentPage.value >= totalPages.value * 2) {
    // Átmenet végének figyelése, majd ugrás az eredeti helyzetbe
    setTimeout(() => {
      isTransitioning.value = false
      currentPage.value = currentPage.value % totalPages.value
    }, 400)
  }

  resetAutoplay()
}

// Előző oldalra lépés
function prevPage() {
  isTransitioning.value = true
  currentPage.value--

  // Ha végtelen görgetés van bekapcsolva és elértük az elejét
  if (isInfinite.value && currentPage.value < 0) {
    // Átmenet végének figyelése, majd ugrás a végére
    setTimeout(() => {
      isTransitioning.value = false
      currentPage.value = totalPages.value - 1
    }, 400)
  }

  resetAutoplay()
}

// Konkrét oldalra ugrás
function goToPage(index: number) {
  isTransitioning.value = true
  currentPage.value = index
  resetAutoplay()
}

// Autoplay újraindítása
function resetAutoplay() {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
  autoplayInterval.value = window.setInterval(nextPage, autoplayDelay)
}

// Touch esemény kezelése - kezdés
function handleTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
  isTransitioning.value = false
}

// Touch esemény kezelése - mozgatás
function handleTouchMove(e: TouchEvent) {
  if (touchStartX && track.value) {
    const currentX = e.changedTouches[0].screenX
    const diff = touchStartX - currentX

    if (Math.abs(diff) > dragThreshold / 3) {
      // Kiszámoljuk az aktuális oldal százalékos helyzetét
      const pageWidth = 100 / totalPages.value
      const basePercentage = isInfinite.value
        ? (visibleSlides.value * 100) / partners.length
        : 0
      const movePercent = (diff / window.innerWidth) * 30 // Csökkentett érzékenység

      const currentTransform = basePercentage + currentPage.value * pageWidth
      const newPosition = currentTransform + movePercent

      track.value.style.transform = `translateX(-${newPosition}%)`
    }
  }
}

// Touch esemény kezelése - befejezés
function handleTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe('touch')
  isTransitioning.value = true
}

// Egér esemény kezelése - kezdés
function handleMouseDown(e: MouseEvent) {
  e.preventDefault()
  isDragging = true
  mouseStartX = e.clientX
  isTransitioning.value = false

  if (track.value) {
    track.value.style.cursor = 'grabbing'
  }
}

// Egér esemény kezelése - mozgatás
function handleMouseMove(e: MouseEvent) {
  if (isDragging && mouseStartX && track.value) {
    const currentX = e.clientX
    const diff = mouseStartX - currentX

    if (Math.abs(diff) > dragThreshold / 3) {
      // Kiszámoljuk az aktuális oldal százalékos helyzetét
      const pageWidth = 100 / totalPages.value
      const basePercentage = isInfinite.value
        ? (visibleSlides.value * 100) / partners.length
        : 0
      const movePercent = (diff / window.innerWidth) * 30 // Csökkentett érzékenység

      const currentTransform = basePercentage + currentPage.value * pageWidth
      const newPosition = currentTransform + movePercent

      track.value.style.transform = `translateX(-${newPosition}%)`
    }
  }
}

// Egér esemény kezelése - befejezés
function handleMouseUp(e: MouseEvent) {
  if (isDragging) {
    mouseEndX = e.clientX
    handleSwipe('mouse')
    isDragging = false
    isTransitioning.value = true

    if (track.value) {
      track.value.style.cursor = 'grab'
    }
  }
}

// Egér kilép az elemből
function handleMouseLeave(e: MouseEvent) {
  if (isDragging) {
    mouseEndX = e.clientX
    handleSwipe('mouse')
    isDragging = false
    isTransitioning.value = true

    if (track.value) {
      track.value.style.cursor = 'grab'
    }
  }
}

// Swipe kezelése (közös touch és mouse eseményekhez)
function handleSwipe(type = 'touch') {
  const startX = type === 'touch' ? touchStartX : mouseStartX
  const endX = type === 'touch' ? touchEndX : mouseEndX
  const minSwipeDistance = dragThreshold

  if (endX < startX - minSwipeDistance) {
    nextPage()
  } else if (endX > startX + minSwipeDistance) {
    prevPage()
  } else {
    // Visszaugrik az eredeti pozícióra, ha nem volt elég nagy a swipe
    if (track.value) {
      const pageWidth = 100 / totalPages.value
      const basePercentage = isInfinite.value
        ? (visibleSlides.value * 100) / partners.length
        : 0
      track.value.style.transform = `translateX(-${
        basePercentage + currentPage.value * pageWidth
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

// Kép betöltés megakadályozása
function preventImageDrag() {
  const images = document.querySelectorAll('.partners__logo')
  images.forEach((img) => {
    img.addEventListener('dragstart', (e) => e.preventDefault())
  })
}

onMounted(() => {
  updateVisibleSlides()

  // Ha végtelen görgető van bekapcsolva, kezdetben a klónozott elemek után állunk
  if (isInfinite.value) {
    currentPage.value = 0
  }

  autoplayInterval.value = window.setInterval(nextPage, autoplayDelay)
  window.addEventListener('resize', updateVisibleSlides)

  if (track.value) {
    // Touch események
    track.value.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })
    track.value.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    })
    track.value.addEventListener('touchend', handleTouchEnd, { passive: true })

    // Egér események
    track.value.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    track.value.addEventListener('mouseleave', handleMouseLeave)

    // Alap stílus beállítása
    track.value.style.cursor = 'grab'
  }

  preventImageDrag()
})

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }

  window.removeEventListener('resize', updateVisibleSlides)

  if (track.value) {
    // Touch események eltávolítása
    track.value.removeEventListener('touchstart', handleTouchStart)
    track.value.removeEventListener('touchmove', handleTouchMove)
    track.value.removeEventListener('touchend', handleTouchEnd)

    // Egér események eltávolítása
    track.value.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    track.value.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<template>
  <section class="partners" id="partners">
    <h2 class="partners__title">Partnereink</h2>
    <div class="partners__slider">
      <div class="partners__track" ref="track" :style="sliderStyle">
        <!-- Másolt elemek a végtelenítéshez (balra) -->
        <div
          class="partners__slide"
          v-for="(partner, index) in lastVisibleItems"
          :key="`clone-start-${index}`"
        >
          <img :src="partner.image" :alt="partner.name" class="partners__logo" />
          <span class="partners__name">{{ partner.name }}</span>
        </div>

        <!-- Eredeti elemek -->
        <div
          class="partners__slide"
          v-for="(partner, index) in partners"
          :key="`original-${index}`"
        >
          <img :src="partner.image" :alt="partner.name" class="partners__logo" />
          <span class="partners__name">{{ partner.name }}</span>
        </div>

        <!-- Másolt elemek a végtelenítéshez (jobbra) -->
        <div
          class="partners__slide"
          v-for="(partner, index) in firstVisibleItems"
          :key="`clone-end-${index}`"
        >
          <img :src="partner.image" :alt="partner.name" class="partners__logo" />
          <span class="partners__name">{{ partner.name }}</span>
        </div>
      </div>
      <div class="partners__indicators">
        <button
          v-for="(_, index) in Math.ceil(partners.length / visibleSlides)"
          :key="index"
          class="partners__indicator"
          :class="{
            'partners__indicator--active': currentPage % totalPages === index,
          }"
          @click="goToPage(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';

.partners {
  padding: 4.5em 0;
  &__title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2em;
    color: #181818;
    font-family: 'Barlow Condensed', sans-serif;
  }

  &__slider {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  &__track {
    display: flex;
    position: relative;
    touch-action: pan-y;
    will-change: transform;
    width: 100%;
  }

  &__slide {
    flex: 0 0 auto;
    width: math.div(100%, 6);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Lighter-Gray, #fafafa);
    border-radius: 0.5rem;
    margin-right: 1rem;
    user-select: none; /* Megakadályozza a szöveg kijelölését húzás közben */

    &:last-child {
      margin-right: 0;
    }
  }

  &__logo {
    max-width: 70%;
    height: auto;
    margin-bottom: 0.5rem;
    pointer-events: none; /* Megakadályozza a képek önálló húzását */
  }

  &__name {
    font-size: 0.875rem;
    text-align: center;
    color: #181818;
    font-weight: 600;
  }

  &__indicators {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.5rem;
  }

  &__indicator {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 20%;
    margin-top: 1em;
    background-color: #ddd;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &--active {
      background-color: #fd5d14;
    }
  }
}

@media (max-width: 1024px) {
  .partners__slide {
    width: math.div(100%, 4);
  }
}

@media (max-width: 768px) {
  .partners__slide {
    width: math.div(100%, 3);
  }
}

@media (max-width: 480px) {
  .partners__slide {
    width: math.div(100%, 2);
  }
}

/* Érintésre optimalizálás */
@media (hover: none) {
  .partners__track {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }
}
</style>