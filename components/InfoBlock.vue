<template>
  <NuxtLink
    to="/palyazat"
    class="info-block"
    aria-label="Európai uniós támogatásból megvalósuló projektünk bemutatása"
  >
    <img
      src="/img/infoblokk.jpg"
      alt="Széchenyi 2020 – Európai Unió, Európai Regionális Fejlesztési Alap – Befektetés a jövőbe"
      class="info-block__img"
      width="431"
      height="298"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.info-block {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 900;
  display: block;
  width: 300px;
  max-width: 45vw;
  line-height: 0;

  &__img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
