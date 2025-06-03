<script setup>
const blocks = [
  {
    title: 'Földmű – az alapok alapja',
    text: 'A teljes rétegrend alatti természetes vagy előkészített talaj, amit megfelelő módon tömöríteni kell. Erre épül minden további szerkezeti réteg.',
  },
  {
    title: 'Geotextília – rétegelválasztás és stabilitás',
    text: 'A geotextília megakadályozza az alépítmény és az útalap keveredését, segít megelőzni a szerkezeti gyengülést, és javítja a rétegek közötti teherelosztást.',
  },
  {
    title: 'Útalap – a teherhordó réteg',
    text: 'Ez biztosítja a díszburkolat alatt a fő teherbírást. Minősége és vastagsága a burkolat várható használatától függ – például gyalogos vagy gépkocsiforgalom esetén eltérő lehet.',
  },
  {
    title: 'Ágyazóréteg – a finom igazítás',
    text: 'A térkövek pontos fektetését és szintbe helyezését teszi lehetővé. Ez egy vékony, finom szemcsés kavics vagy zúzalék réteg, amely a burkolat stabil fekvéséért felel.',
  },
  {
    title: 'Díszburkolat – a végső réteg',
    text: 'A látványos, funkcionális burkolóelemek (pl. térkövek), amelyek az utolsó, járható réteget alkotják. Ezekre nehezedik közvetlenül a forgalom.',
  },
  {
    title: 'Szegély – a szerkezet megtámasztása',
    text: 'A szegélykő megakadályozza a térkövek oldalirányú mozgását, határolja és stabilizálja a burkolatot. Emellett esztétikailag is egységet ad a teljes szerkezetnek.',
  },
]
</script>

<template>
  <section class="nextlayer" id="pavement-structure-reverse">
    <img
      src="/img/layer2.webp"
      alt="Útpályaszerkezet rétegei diagrammon, magyar feliratokkal"
      class="nextlayer__img"
    />
    <div class="nextlayer__container">
      <!-- 1. SZÖVEG (most balra) -->
      <div class="nextlayer__content nextlayer__content--dark">
        <div class="nextlayer__text-block">
          <h2 class="nextlayer__title">A térkőburkolat rétegeinek szerepe</h2>
          <p class="nextlayer__paragraph">
            A díszburkolatok nemcsak esztétikai szempontból fontosak, hanem
            szerkezetileg is jól megtervezett alapokra épülnek, hogy hosszú
            távon is stabilak, időtállók és jól terhelhetők legyenek.
          </p>

          <div class="nextlayer__blocks">
            <div class="nextlayer__block" v-for="(item, i) in blocks" :key="i">
              <h3 class="nextlayer__block-title">{{ item.title }}</h3>
              <p class="nextlayer__block-text">{{ item.text }}</p>
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
$spacing: 2rem;
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
    flex: 0 0 80%;
    background: $color-bg-dark;
    color: $color-text;
    padding: 4em 4em 4em 5%;
    display: flex;
    justify-content: start;
    align-items: center;

    &--dark {
      clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
    }
  }

  /* Diagram – fehér kártya */
  &__image {
    flex: 0 0 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  /* kép */
  &__img {
    width: 43.5%;
    position: absolute;
    z-index: 10;
    top: 10%;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
    height: 80%;
    right: 5em;
  }

  &__text-block {
    width: 60%;
  }

  &__title {
    font-size: 1rem;
    font-weight: 700;
  }

  &__paragraph {
    line-height: 1.6;
  }

  &__blocks {
    display: flex;
    flex-direction: column;
    gap: $spacing;
    margin-top: $spacing;
  }

  &__block-title {
    font-size: 1rem;
    font-weight: 700;
  }

  &__block-text {
    line-height: 1.6;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .nextlayer__img {
    height: 50%;
  }
}

@media (max-width: 992px) {
  .nextlayer__container {
    flex-direction: column-reverse;
    margin-top: -1em;
  }
  .nextlayer__content--dark,
  .nextlayer__image--white .nextlayer__diagram-wrapper {
    clip-path: none;
    margin: 0;
  }
  .nextlayer__img {
    width: 100%;
    position: relative;
    height: 100%;
    right: 0;
  }
  .nextlayer__text-block {
    width: 100%;
  }

  .nextlayer__content {
    padding: 3em;
  }
}

/* Responsive: mobilon column-reverse */
@media (max-width: 768px) {
  .nextlayer__container {
    flex-direction: column-reverse;
    margin-top: -1em;
  }
  .nextlayer__content--dark,
  .nextlayer__image--white .nextlayer__diagram-wrapper {
    clip-path: none;
    margin: 0;
  }
  .nextlayer__img {
    width: 100%;
    position: relative;
    height: 100%;
    right: 0;
  }
  .nextlayer__text-block {
    width: 100%;
  }

  .nextlayer__content {
    padding: 3em;
  }
}
</style>
