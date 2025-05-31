<script setup>
import { NuxtLink } from '#components'

const blocks = [
  {
    text: 'Legyen szó ipari léptékű útépítésről, kátyúzásról vagy akár egy családi ház kapubejárójának térkövezéséről, számunkra minden munka ugyanolyan fontos. Magánszemélyek és vállalkozások egyaránt számíthatnak ránk, ha minőségi, tartós és precíz kivitelezésre van szükség.',
  },
  {
    text: 'Szolgáltatásaink között szerepel az aszfaltozás több típusa (pl. hengerelt vagy mart aszfalt), térkövezés, alapozás, szegélyezés, vízelvezetés, valamint különféle betonozási munkálatok. Minden projektünknél nagy hangsúlyt fektetünk az előkészítésre, az anyagminőségre és a határidők pontos betartására.',
  },
  {
    text: 'A célunk egyszerű: hosszú távon megbízható, esztétikus és funkcionális burkolatokat létrehozni, amelyek valóban kiszolgálják megrendelőink igényeit – akár egy belvárosi járdáról, akár egy családi ház előtti beállóról van szó.',
  },
]
</script>

<template>
  <section class="nextlayer" id="pavement-structure-reverse">
    <img
      src="/img/about.webp"
      alt="Útpályaszerkezet rétegei diagrammon, magyar feliratokkal"
      class="nextlayer__img"
    />
    <div class="nextlayer__container">
      <!-- 1. SZÖVEG (most balra) -->
      <div class="nextlayer__content nextlayer__content--dark">
        <div class="nextlayer__text-block">
          <h2 class="nextlayer__title">Rólunk</h2>
          <p class="nextlayer__paragraph">
            Több mint 30 éve dolgozunk azon, hogy Magyarország útjai, bejárói és
            udvarai stabil, időtálló és esztétikus burkolatot kapjanak. Cégünk
            az évtizedek alatt nemcsak a szakmai tapasztalatát, hanem saját
            gépparkját és megbízható csapatát is folyamatosan fejlesztette, így
            ma már teljes körű szolgáltatást tudunk nyújtani az útépítés és
            burkolás minden területén.
          </p>

          <div class="nextlayer__blocks">
            <div class="nextlayer__block" v-for="(item, i) in blocks" :key="i">
              <p class="nextlayer__block-text">{{ item.text }}</p>
            </div>
            <div>
              <NuxtLink to="/" class="nextlayer__blocks__link"
                >KAPCSOLAT</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 2. DIAGRAM (most jobbra) -->
      <div class="nextlayer__image nextlayer__image--white">
        <div class="nextlayer__diagram-wrapper"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use 'sass:math';

// változók
$color-bg-dark: #49505c;
$color-text: #ffffff;
$spacing: 1.7em;
$shadow: rgba(0, 0, 0, 0.1);

.nextlayer {
  position: relative;
  &__container {
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }

  /* Szöveges blokk – sötét hátterű */
  &__content {
    flex: 0 0 60%;
    background: $color-bg-dark;
    color: $color-text;
    padding: 4rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &--dark {
      clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    }
  }

  &__blocks {
    &__link {
      display: flex;
      height: 40px;
      padding: 11px 20px;
      align-items: center;
      background: var(--Primary, #fd5d14);
      width: max-content;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: 600;
      transition: all 0.5s;

      &:hover {
        background: transparent;
        border: 2px solid #fd5d14;
      }
    }
  }

  /* Diagram – fehér kártya */
  &__image {
    flex: 0 0 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; // a diagram-wrapper kezeli a paddinget
    background-size: cover;
  }

  /* kép */
  &__img {
    height: 100%;
    bottom: 0;
    position: absolute;
    right: 0;
    width: 50%;
    object-fit: cover;
  }

  &__text-block {
    max-width: 32rem;
    margin: 0 auto;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: math.div($spacing, 1.9);
    font-family: 'Barlow Condensed', sans-serif;
  }

  &__paragraph {
    line-height: 1.6;
    margin-bottom: math.div($spacing, 1.3);
  }

  &__blocks {
    display: flex;
    flex-direction: column;
    gap: $spacing;
  }

  &__block-title {
    font-weight: bold;
    margin-bottom: math.div($spacing, 2);
  }

  &__block-text {
    line-height: 1.6;
  }
}

/* Responsive: mobilon column-reverse */
@media (max-width: 768px) {
  .nextlayer__container {
    flex-direction: column-reverse;
  }
  .nextlayer__content--dark,
  .nextlayer__image--white .nextlayer__diagram-wrapper {
    clip-path: none;
    margin: 0;
  }
}
</style>
