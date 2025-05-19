<template>
  <section class="nextlayer" id="pavement-structure-reverse">
    <div class="nextlayer__container">
            <!-- 2. DIAGRAM (most jobbra) -->
            <div class="nextlayer__image nextlayer__image--white">
          <div class="nextlayer__diagram-wrapper">
            <img
              alt="Útpályaszerkezet rétegei diagrammon, magyar feliratokkal"
              class="nextlayer__img"
            />
          </div>
        </div>
      <!-- 1. SZÖVEG (most balra) -->
      <div class="nextlayer__content nextlayer__content--dark">
        <div class="nextlayer__text-block">
          <h2 class="nextlayer__title">Miért fontos az útpályaszerkezet?</h2>
          <p class="nextlayer__paragraph">
            A tartós és jól terhelhető burkolat alapja a gondosan megtervezett
            és kivitelezett rétegrend. Nem mindegy, mi kerül a burkolat alá – a
            szerkezeti stabilitás itt dől el.
          </p>

          <div class="nextlayer__blocks">
            <div class="nextlayer__block" v-for="(item, i) in blocks" :key="i">
              <h3 class="nextlayer__block-title">{{ item.title }}</h3>
              <p class="nextlayer__block-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blocks = [
  {
    title: 'Az alaprétég szerepe',
    text: 'Az alaprétég teherelosztó funkciót lát el, ez viseli a forgalom és az időjárás jelentős részét. Típusát a talaj minősége, a burkolat várható terhelése és a vízelvezetési környezet határozza meg. Hibás vagy gyenge alap gyors burkolatkárosodáshoz vezethet.',
  },
  {
    title: 'Fagyvédelem alulról',
    text: 'A fagyvédő réteg megakadályozza, hogy a téli fagyás károkat okozzon az útpályában. Ez különösen fontos olyan helyeken, ahol a víz panghat, vagy ahol a burkolat alatt nem megfelelő a természetes vízelvezetés.',
  },
  {
    title: 'Tömörített tükör – a biztos kiindulás',
    text: 'Ez a legalsó, mechanikusan tömörített réteg biztosítja a stabil alépítményt. Enélkül a felette lévő rétegek elmozdulhatnak, repedések és süllyedések alakulhatnak ki.',
  },
  {
    title: 'A kopóréteg és az aszfalt alaprétég',
    text: 'A kopóréteg biztosítja a sima, kényelmes és biztonságos közlekedést, míg az alatta lévő aszfalt alapréteg a szerkezeti szilárdságot. Egyik sem működik megfelelően a másik nélkül.',
  },
  {
    title: 'Szegély – nem csak dísz',
    text: 'A szegélykő és a szegélybeton statikai szerepet is betölt. Megtámasztja a burkolatot, megakadályozza az oldalsó szétcsúszást, és hozzájárul az élettartam jelentős meghosszabbításához.',
  },
]
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use 'sass:math';

// változók
$color-bg-dark: #49505c;
$color-text: #ffffff;
$spacing: 2rem;
$shadow: rgba(0, 0, 0, 0.1);

.nextlayer {
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
        clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  /* Diagram – fehér kártya */
  &__image {
    flex: 0 0 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; // a diagram-wrapper kezeli a paddinget

    &--white {
      .nextlayer__diagram-wrapper {
        background: #fff;
        padding: $spacing;
        box-shadow: 0 1rem 2rem $shadow;
        margin: -4rem 0;
      }
    }
  }

  /* kép */
  &__img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  &__text-block {
    max-width: 32rem;
    margin: 0 auto;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: math.div($spacing, 2);
  }

  &__paragraph {
    line-height: 1.6;
    margin-bottom: math.div($spacing, 2);
  }

  &__blocks {
    display: flex;
    flex-direction: column;
    gap: $spacing;
    margin-top: $spacing;
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
