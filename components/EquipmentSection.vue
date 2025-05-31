<script setup lang="ts">
// Ha dinamikusan jönnének az adatok, akár fetchelheted is.
// Most local propsként definiálok egy tömböt.
interface Machine {
  src: string
  alt: string
}

// Példa statikus képlistára; a src-ok a public/images mappából hivatkoznak.
const machines: Machine[] = [
  {
    src: '/img/gep.webp',
    alt: 'Mercedes teherautó előröl',
  },
  {
    src: '/img/gep2.webp',
    alt: 'Vörös platós teherautó egy építkezésen',
  },
  {
    src: '/img/gep3.webp',
    alt: 'Sárga markológép oldalnézetből',
  },
]
</script>

<template>
  <section class="equipment-section" aria-labelledby="equipment-title">
    <!-- Szakaszcím -->
    <h2 id="equipment-title" class="equipment-section__title">Gépparkunk</h2>

    <!-- Képek rugalmas rácsban -->
    <div class="equipment-section__grid">
      <div
        v-for="(item, idx) in machines"
        :key="idx"
        class="equipment-section__item"
      >
        <!-- SEO: mindig adjunk alt-at a képeknek -->
        <img
          :src="item.src"
          :alt="item.alt"
          class="equipment-section__image"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Gomb alul, középre igazítva -->
    <div class="equipment-section__footer">
      <!-- Ha NuxtLink-et használsz és van /machines oldalad, cseréld <a> helyett <NuxtLink>–re -->
      <NuxtLink to="/" class="equipment-section__button">
        ÖSSZES GÉPÜNK
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/*───────────────────────────────────────────────────────────────
    1. BLOCK: .equipment-section
  ───────────────────────────────────────────────────────────────*/
.equipment-section {
  width: 100%;
  padding: 4rem 1rem; /* felül és alul 4rem, oldalt 1rem */
  background-color: #ffffff; /* fehér háttér, de igény szerint változtatható */

  display: flex;
  flex-direction: column;
  align-items: center; /* középre igazítjuk a tartalmat */
  box-sizing: border-box;
}

/*───────────────────────────────────────────────────────────────
    2. TITLE: .equipment-section__title
  ───────────────────────────────────────────────────────────────*/
.equipment-section__title {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 1.5em; /* alul 2rem margó, a rács és a cím között */
  text-align: center;
  color: #181818;
  font-family: 'Barlow Condensed', sans-serif;
}

/*───────────────────────────────────────────────────────────────
    3. GRID: .equipment-section__grid
  ───────────────────────────────────────────────────────────────*/
.equipment-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Ha 3 elem fér el, 3; ha kevesebb a hely, egy vagy kettő lesz. */
  gap: 1.5rem; /* a képek közötti vízszintes és függőleges távolság */
  width: 100%;
  max-width: 1200px; /* legfeljebb 1200px széles a rács */
  margin-bottom: 3rem; /* a rács és a gomb között */
}

/*───────────────────────────────────────────────────────────────
    4. ITEM: .equipment-section__item
  ───────────────────────────────────────────────────────────────*/
.equipment-section__item {
  width: 100%;
  aspect-ratio: 1 / 1; /* négyzetes arány megőrzése */
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5; /* szürkés háttér töltőként, amíg a kép töltődik */
}

/*───────────────────────────────────────────────────────────────
    5. IMAGE: .equipment-section__image
  ───────────────────────────────────────────────────────────────*/
.equipment-section__image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* a kép kitölti, vágott részekkel megtartva az arányokat */
  transition: transform 0.3s ease;
}

/* Egér fölött enyhe zoom-animáció (opcionális) */
.equipment-section__item:hover .equipment-section__image,
.equipment-section__item:focus-within .equipment-section__image {
  transform: scale(1.05);
}

/*───────────────────────────────────────────────────────────────
    6. FOOTER (gomb): .equipment-section__footer
  ───────────────────────────────────────────────────────────────*/
.equipment-section__footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Call-to-action gomb */
.equipment-section__button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #ff6600; /* narancssárga gomb */
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.equipment-section__button:hover,
.equipment-section__button:focus {
  background-color: #e65c00; /* sötétebb árnyalat hoverkor */
  outline: none;
}

/*───────────────────────────────────────────────────────────────
    7. RESPONSIVE FINOMHANGOLÁSOK
  ───────────────────────────────────────────────────────────────*/
@media (max-width: 768px) {
  .equipment-section__title {
    font-size: 1.75rem;
  }

  .equipment-section__grid {
    gap: 1rem;
  }

  .equipment-section__item {
    aspect-ratio: unset; /* ha nem szeretnéd a négyzetarányt mobilon, töröld vagy kommenteld ki */
    height: 30vh;
  }
}
</style>
