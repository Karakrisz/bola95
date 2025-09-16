<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const slides = ref([
  {
    title: 'PROFESSZIONÁLIS ÚTFELÜLETEK',
    subtitle: 'tartós alapok és felületek szakszerű kivitelezéssel',
    description:
      'Több mint 30 év szakmai tapasztalattal végzünk útépítést, aszfaltozást, kátyúzást, térkövezést, valamint különféle betonozási és alapozási munkálatokat cégek és magánszemélyek megbízásából egyaránt. Szolgáltatásaink a teljes körű útépítéstől egészen a kisebb kapubeállók, kocsifelhajtók, belső udvarok vagy járdák precíz kivitelezéséig terjednek, legyen szó mart aszfaltról, hengerelt burkolatról vagy térköves megoldásról, szükség esetén szegélyezéssel és vízelvezetéssel kiegészítve.',
    ctaButtonText: 'ÁRAJÁNLATKÉRÉS',
    ctaLink: '#booking',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Bola 95 Kft',
    ctaText: '',
  },
  {
    title: 'PROFESSZIONÁLIS BETONOZÁS',
    subtitle: 'akár a házadnál is',
    description:
      'Számítógéppel vezérelt, soradagolós betonkeverő üzemünkkel garantáljuk a megfelelő minőséget és tartós, betonbiztos alapot. Megoldást nyújtunk a földnedves CKT-tól a mixerrel szállított extra erős szilárdságú betonig, melyet igény szerint – az anyagtól függően – billenccsel és/vagy mixerrel a helyszínre is szállítjuk. Saját modern technológiával felszerelt, automata betonkeverő üzemünknek köszönhetően az általunk előállított beton esetén a megfelelő minőséget, és tartósságot, a pontos alapanyag adagolásnak köszönhetően minden keverésnél garantálni tudjuk, elkerülve például azt, hogy a födém leszakadjon NÁLUNK NEM CSÚSZIK EL A KEVERÉSI ARÁNY! Betontechnológus által alkotott receptúrával dolgozunk, cégünket a CEMKUT Kft. tanusítja, hogy mindig a legjobb minőséget tudjuk előállítani.',
    ctaButtonText: 'LEGJOBBAT A LEGJOBBTÓL!',
    ctaLink: '#concrete-services',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Bola 95 Kft - Professzionális betonozás',
    ctaText: '',
  },
  {
    title: 'TÉRBURKOLAT RENDSZEREK',
    subtitle: 'Mérnöki precizitás minden négyzetméteren',
    description:
      'A térburkolat esztétikus és tartós megoldás lehet akár magánházaknál, akár közterületeken, például sétáló utcák, illetve parkolók esetében. A tartósság eléréséhez kiemelten fontos a jó alapozás, az alaprétegek pontos, a felületnek és a terepviszonyoknak megfelelő rétegrend kiépítése.  Az erre ráépített térburkolat tartós, nem süllyed, a felülete nem lesz hullámos idővel. Partnereinken keresztül versenyképes árakat tudunk biztosítani. Cégünk az alap készítésétől egészen a besöprésig minden részfeladatot elkészít.',
    ctaButtonText: 'Térburkolati ajánlat',
    ctaLink: '#paving-solutions',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Bola 95 Kft - Térburkolat rendszerek',
    ctaText: '',
  },
  {
    title: 'PROFESSZIONÁLIS ASZFALT',
    subtitle: 'Korszerű eljárások a tartós útfelületekért',
    description:
      'Jelenlegi gépállományunk, gépparkunk lehetővé teszi a tartós, szép aszfaltos felületek kivitelezését. Melegentartóval (thermokonténer) felszerelt tehergépjárműveink segítségével az aszfalt nem hül le ameddig a munkaterületre érünk vele és így elérhetjük, hogy az anyag a munka befejezéséig a megfelelő hőmérsékleten maradjon, a minősége olyan legyen, mint ha éppen abban a pillanatban jött volna ki az aszfaltkeverőből. Járdák, kocsibeállók esetén, öntött aszfalt újrahasznosító berendezésünk és tehergépkocsira felszerelt főző-szállító gépeink (reiser) segítségével jó minőségű anyagból tudunk szép, tartós felületet kialakítani. Az aszfalt újrahasznosító berendezéseink lehetővé teszik azt is, hogy a téli időszakban is tudjuk teljesíteni megrendelőink igényeit, még akkor is, ha az aszfaltkeverő üzemek zárva vannak.',
    ctaButtonText: 'Útépítési ajánlat',
    ctaLink: '#road-construction',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Bola 95 Kft - Útépítési technológia',
    ctaText: '',
  },
  {
    title: 'VÍZELVEZETŐ RENDSZEREK',
    subtitle: 'Mérnöki vízelvezetés a tartós eredményért',
    description:
      'Hosszú távú megoldások a vizes problémákra. A folyó szöveg túl tudományos, egyszerűbben és az erősségeink hangsúlyozásával a következő legyen: A víz nem csak zavaró, de pusztító is lehet, károkat okozva, ha nem megfelelően van elvezetve. A burkolat megfelelő vízelvezetése – lejtetés – mellett fontos, hogy az onnan lefolyó víz is megfelelő mederben, koordináltan legyen elvezetve. Az ilyen igényekre is tudunk profi megoldásokat útszéli árkokkal, csatornákkal, szikkasztó építéssel.',
    ctaButtonText: 'Vízelvezetési rendszerek',
    ctaLink: '#drainage-systems',
    imageUrl: '/img/hero.webp',
    imageAlt: 'Bola 95 Kft - Vízelvezető rendszerek',
    ctaText: '',
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
  // Átváltunk a kívánt diára, és újraindítjuk az autoplay-t
  currentSlide.value = index

  if (sliderTrack.value) {
    sliderTrack.value.style.transform = `translateX(-${index * 20}%)`
  }

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

/* Kiegészítő metódus a navigációs pontokhoz,
   hogy egy helyen kezeljük a preventDefault() és stopPropagation() hívást. */
function onNavDotClick(index, event) {
  goToSlide(index)
  event.preventDefault()
  event.stopPropagation()
}

/* Drag/touch események kezelése */
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

  // Késleltetett preload az összes képre (második diától kezdve)
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
              <a :href="slide.ctaLink" class="hero__button">
                {{ slide.ctaButtonText }}
              </a>
            </div>
          </div>
          <div class="hero__image-container">
            <NuxtImg
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
          @click="onNavDotClick(index, $event)"
          type="button"
        ></button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use 'sass:math';

$primary-color: #fff;
$tertiary-color: #fd5d14;
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
  height: 110vh;
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
      z-index: 1;
    }
  }

  &__slide-content {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    max-width: 60%;
    color: $primary-color;
    z-index: 2;
    padding: 2rem;
  }

  &__title {
    font-weight: 700;
    margin-bottom: 0;
    line-height: 1.2;
    text-shadow: $text-shadow;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 4rem;
  }

  &__subtitle {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 0.3em;
    text-shadow: $text-shadow;
    font-family: 'Barlow Condensed', sans-serif;
  }

  &__description {
    font-size: 1rem;
    line-height: 1.6;
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
    transition: background-color $transition-speed, transform $transition-speed;
    text-transform: uppercase;

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
    border-radius: 20%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: background-color $transition-speed;
    padding: 0;
    margin: 0;
    appearance: none;

    &--active {
      background-color: #fd5d14 !important;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }

    &:focus {
      outline: none;
    }
  }
}

/* ------------------------------
   Mobil nézet (<768px)
   ------------------------------ */
@media (max-width: 767px) {
  .hero {
    height: 130vh;
    min-height: auto;
    margin-top: -3.5em;

    &__slide-content {
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
      max-width: 80%;
      padding: 1.5rem;
    }

    &__title {
      font-size: 2.5rem;
      line-height: 1.2;
      margin-top: 3em;
    }

    &__subtitle {
      font-size: 1.2rem;
      margin-bottom: 0.5em;
    }

    &__description {
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 1rem;
    }

    &__cta-text {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }

    &__button {
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
    }

    &__navigation {
      bottom: 1rem;
      gap: 0.75rem;
    }

    &__nav-dot {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hero {
    height: 140vh;
  }
}

/* ------------------------------
   Tablet nézet (992px–1199px)
   ------------------------------ */
@media (min-width: 992px) and (max-width: 1199px) {
  .hero {
    height: 90vh;
    min-height: 550px;
    margin-top: -4em;

    &__slide-content {
      left: 7%;
      top: 50%;
      transform: translateY(-50%);
      max-width: 55%;
      padding: 1.8rem;
    }

    &__title {
      font-size: 3.2rem;
    }

    &__subtitle {
      font-size: 1.6rem;
    }

    &__description {
      font-size: 0.95rem;
      line-height: 1.5;
    }

    &__cta-text {
      font-size: 1.05rem;
      margin-bottom: 0.9rem;
    }

    &__button {
      padding: 0.7rem 1.8rem;
      font-size: 1rem;
    }

    &__navigation {
      bottom: 1.5rem;
      gap: 0.85rem;
    }

    &__nav-dot {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
}
</style>
