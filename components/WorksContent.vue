<script setup>
import { ref } from 'vue'

const projects = [
  {
    image: '/img/work.webp',
    alt: 'Budapest, Március 15. tér felújított tér képe',
    location: 'Budapest, Március 15. tér',
    label: 'TELJES TÉRKÖVEZÉS',
    description1:
      'A Március 15. tér térkövezésének felújítása során korszerű és esztétikus burkolatot alakítottunk ki, amely harmonikusan illeszkedik a belvárosi környezethez. A munkálatok során a korábban egyenetlen és elhasználódott felületeket teljesen eltávolítottuk, majd gondosan előkészített alaprétegre új térköveket fektettünk le.',
    description2:
      'Kiemelt figyelmet fordítottunk a vízelvezetésre és a gyalogosforgalom zavartalanságára, így a megújult tér nemcsak szebb, hanem funkcionálisan is sokkal biztonságosabb és időtállóbb lett.',
  },
  {
    image: '/img/work.webp',
    alt: 'Egy másik projekt látványterve',
    location: 'Szeged, Dóm tér',
    label: 'TÉRKŐ CSERE',
    description1:
      'A Dóm tér burkolatának korszerűsítésével egy letisztultabb és időjárásállóbb felületet alakítottunk ki, amely illeszkedik a történelmi környezethez.',
    description2:
      'A kivitelezés során figyeltünk arra, hogy a tér a felújítás alatt is látogatható maradjon.',
  },
]

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + projects.length) % projects.length
}
</script>

<template>
  <section class="work-showcase" aria-labelledby="work-showcase__title">
    <div class="work-showcase__container">
      <h2 id="work-showcase__title" class="work-showcase__heading">Munkáink</h2>

      <div class="work-showcase__content">
        <Transition name="fade-slide" mode="out-in">
          <div :key="currentIndex" class="work-showcase__slide">
            <img
              :src="projects[currentIndex].image"
              :alt="projects[currentIndex].alt"
              class="work-showcase__image"
            />

            <div class="work-showcase__description">
              <h3 class="work-showcase__location">
                {{ projects[currentIndex].location }}
              </h3>
              <p class="work-showcase__label">
                {{ projects[currentIndex].label }}
              </p>
              <p class="work-showcase__text">
                {{ projects[currentIndex].description1 }}
              </p>
              <p class="work-showcase__text">
                {{ projects[currentIndex].description2 }}
              </p>
            </div>
          </div>
        </Transition>
      </div>

      <div class="work-showcase__nav">
        <button
          class="work-showcase__arrow"
          @click="prevSlide"
          aria-label="Előző munka"
        >
          ←
        </button>
        <button
          class="work-showcase__arrow"
          @click="nextSlide"
          aria-label="Következő munka"
        >
          →
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work-showcase {
  background-color: #fff;
  padding: 4em 0 15em 0;

  &__heading {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5em;
    color: #181818;
    font-family: 'Barlow Condensed', sans-serif;
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__content {
    position: relative;
    min-height: 600px;
  }

  &__slide {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  &__image {
    width: 100%;
    border-radius: 0.5rem;
    display: block;
    max-height: 600px;
    object-fit: cover;
  }

  &__description {
    position: absolute;
    bottom: -12em;
    left: 2rem;
    background-color: #fff;
    padding: 1.5rem;
    background: var(--Lighter-Gray, #fafafa);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
    max-width: 730px;
  }

  &__location {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: .7em;
    color: #181818;
  }

  &__label {
    color: #f25c05;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  &__text {
    font-size: 0.95rem;
    color: #333;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  &__nav {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  &__arrow {
    font-size: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: color 0.2s ease;

    &:hover {
      color: #f25c05;
    }
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
