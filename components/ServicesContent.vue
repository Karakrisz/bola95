<script setup></script>

<template>
  <section class="services">
    <div class="services__container">
      <h2 class="services__title">Szolgáltatásaink</h2>

      <div class="services__grid">
        <div class="services__item">
          <div class="services__icon-wrapper">
            <!-- Hengerelt aszfaltozás ikon (úthengerhez hasonló) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="services__icon"
            >
              <path
                d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 32a160 160 0 1 0 0 320 160 160 0 1 0 0-320zm0 40a120 120 0 1 1 0 240 120 120 0 1 1 0-240zm0 32a88 88 0 1 0 0 176 88 88 0 1 0 0-176z"
                fill="#333"
              />
              <rect x="224" y="32" width="64" height="120" rx="8" fill="#333" />
            </svg>
          </div>
          <h3 class="services__item-title">Hengerelt aszfaltozás</h3>
        </div>

        <div class="services__item services__item--active">
          <div class="services__icon-wrapper">
            <!-- Öntött aszfaltozás ikon (talicska) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="services__icon"
            >
              <path
                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192C2.8 212.5 0 233.9 0 256s2.8 43.5 8.1 64H131.2c-2.1-20.6-3.2-42-3.2-64s1.1-43.4 3.2-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                fill="#e53935"
              />
            </svg>
          </div>
          <h3 class="services__item-title services__item-title--active">
            Öntött aszfaltozás
          </h3>
        </div>

        <div class="services__item">
          <div class="services__icon-wrapper">
            <!-- Transzport beton ikon (betonkeverő) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="services__icon"
            >
              <path
                d="M224 96c0-35.3 28.7-64 64-64s64 28.7 64 64v10.8c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l10.9-7.2c30.6-20.4 72.1-12.1 92.6 18.5s12.1 72.1-18.5 92.6l-10.9 7.2c-4.9 3.3-7.9 8.8-7.9 14.7s3 11.4 7.9 14.7l10.9 7.2c30.6 20.4 38.9 61.9 18.5 92.6s-61.9 38.9-92.6 18.5l-10.9-7.2c-4.9-3.3-11.2-3.6-16.4-.8s-8.5 8.2-8.5 14.1V416c0 35.3-28.7 64-64 64s-64-28.7-64-64v-10.8c0-5.9-3.2-11.3-8.5-14.1s-11.5-2.5-16.4 .8l-10.9 7.2c-30.6 20.4-72.1 12.1-92.6-18.5s-12.1-72.1 18.5-92.6l10.9-7.2c4.9-3.3 7.9-8.8 7.9-14.7s-3-11.4-7.9-14.7l-10.9-7.2c-30.6-20.4-38.9-61.9-18.5-92.6s61.9-38.9 92.6-18.5l10.9 7.2c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1V96zm64-32c-17.7 0-32 14.3-32 32V116.2c0 23.7-12.9 45.3-33.8 56.6s-45.9 10-65.5-3.3l-10.9-7.2c-15.3-10.2-36.1-6.1-46.3 9.2s-6.1 36.1 9.2 46.3l10.9 7.2c20.7 13.8 33.3 37 33.3 62c0 25-12.5 48.2-33.3 62l-10.9 7.2c-15.3 10.2-19.4 31-9.2 46.3s31 19.4 46.3 9.2l10.9-7.2c19.6-13.1 44.5-15.5 65.5-3.3s33.8 32.9 33.8 56.6V416c0 17.7 14.3 32 32 32s32-14.3 32-32V395.8c0-23.7 12.9-45.3 33.8-56.6s45.9-10 65.5 3.3l10.9 7.2c15.3 10.2 36.1 6.1 46.3-9.2s6.1-36.1-9.2-46.3l-10.9-7.2c-20.7-13.8-33.3-37-33.3-62c0-25 12.5-48.2 33.3-62l10.9-7.2c15.3-10.2 19.4-31 9.2-46.3s-31-19.4-46.3-9.2l-10.9 7.2c-19.6 13.1-44.5 15.5-65.5 3.3s-33.8-32.9-33.8-56.6V96c0-17.7-14.3-32-32-32z"
                fill="#ffc107"
              />
            </svg>
          </div>
          <h3 class="services__item-title">Transzport beton</h3>
        </div>

        <div class="services__item">
          <div class="services__icon-wrapper">
            <!-- Mart aszfaltos útépítés ikon (útépítő gép) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="services__icon"
            >
              <path
                d="M352 96c0-53-43-96-96-96s-96 43-96 96s43 96 96 96s96-43 96-96zm88 176H72C32.4 272 0 304.4 0 344l0 56c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24l0-56c0-8.8 7.2-16 16-16h32l0 144c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40l0-144h32c8.8 0 16 7.2 16 16v56c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-56c0-39.6-32.4-72-72-72z"
                fill="#333"
              />
            </svg>
          </div>
          <h3 class="services__item-title">Mart aszfaltos útépítés</h3>
        </div>

        <div class="services__item">
          <div class="services__icon-wrapper">
            <!-- Térkövezés ikon (térkövek) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="services__icon"
            >
              <path
                d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C489 80.5 501.1 98 501 117.5l-.7 131.3c-.5 96.8-44.8 188.2-122 250.5L268 555.8c-11.1 8.9-25 13.8-39.5 13.8s-28.3-4.9-39.5-13.8L78.7 499.3c-77.2-62.3-121.5-153.7-122-250.5L56 117.5c-.1-19.5 12-37 31.4-43.4l147.1-68.4zM256 66L91.2 128l.5 118.9c.4 75.8 34.7 147.5 94.6 196.9L256 499.2l69.7-55.4c59.9-49.4 94.1-121.1 94.6-196.9l.5-118.9L256 66z"
                fill="#333"
              />
            </svg>
          </div>
          <h3 class="services__item-title">Térkövezés</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.services {
  padding: 4rem 0;
  background-color: #f8f8f8;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 600;
    color: #333;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    @media (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 1.5rem 1rem;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    &--active {
      background-color: #ffc107;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  &__icon-wrapper {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  &__icon {
    max-width: 100%;
    height: auto;
  }

  &__item-title {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: #333;

    &--active {
      color: #e53935;
    }
  }
}
</style>
