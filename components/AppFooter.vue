<template>
  <footer class="site-footer" id="site-footer">
    <div class="site-footer__container">
      <!-- Brand -->
      <div class="site-footer__column site-footer__column--brand">
        <div class="footer-brand">
          <NuxtImg
            src="/img/footer-logo.png"
            alt="BOLA 95 KFT logo"
            class="footer-brand__logo"
          />
        </div>
      </div>

      <!-- Navigation -->
      <div class="site-footer__column">
        <h3 class="site-footer__heading">Navigáció</h3>
        <ul class="site-footer__list">
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Főoldal</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Galéria</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Rólunk</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Referenciák</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Adatvédelmi Nyilatkozat</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Gyakran Ismételt Kérdések</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Partnereink</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/">Kapcsolat</a>
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div class="site-footer__column">
        <h3 class="site-footer__heading">Szolgáltatásaink</h3>
        <ul class="site-footer__list">
          <li class="site-footer__item">Transzpont beton</li>
          <li class="site-footer__item">Hengerelt aszfaltozás</li>
          <li class="site-footer__item">Öntött aszfaltozás</li>
          <li class="site-footer__item">Mart aszfaltos útépítés</li>
          <li class="site-footer__item">Térkövezés</li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="site-footer__column">
        <h3 class="site-footer__heading">Elérhetőségeink</h3>
        <ul class="site-footer__contact-list">
          <li class="site-footer__contact-item">
            <NuxtImg
              src="/img/map.svg"
              alt="Cím ikon"
              class="site-footer__icon"
            />
            <span>2000 Szentendre, Rózsa utca 14.</span>
          </li>
          <li class="site-footer__contact-item">
            <NuxtImg
              src="/img/mail.svg"
              alt="Email ikon"
              class="site-footer__icon"
            />
            <a href="mailto:bola95kft@t-online.hu" class="site-footer__link"
              >bola95kft@t-online.hu</a
            >
          </li>
          <li class="site-footer__contact-item">
            <NuxtImg
              src="/img/phone.svg"
              alt="Telefon ikon"
              class="site-footer__icon"
            />
            <ul class="site-footer__phone-list">
              <li>+36-26-302-586</li>
              <li>+36-20-960-6878</li>
              <li>+36-20-222-2867</li>
              <li>+36-20-411-4011</li>
              <li>+36-30-222-9645</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
// Variables
$dark: #202632;
$light: #ffffff;
$spacing: 1em;
$font-size: 1rem;

.site-footer {
  background: $dark;
  color: $light;
  padding-bottom: 5em;

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 5em;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
  }

  &__column {
    flex: 1 1 200px;

    &--brand {
      flex: 0 0 auto;
    }
    &--credit {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex: 0 0 auto;
    }
  }

  .footer-brand {
    &__logo {
      width: 6em;
    }
  }

  &__heading {
    font-size: 1.7rem;
    margin-bottom: $spacing;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 600;
    padding-top: 2em;
  }

  &__list,
  &__contact-list,
  &__phone-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin-bottom: $spacing;
    font-weight: 400;
  }

  &__link {
    color: $light;
    text-decoration: none;
    font-size: $font-size;

    &:hover {
      text-decoration: underline;
    }
  }

  &__contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: $spacing;
    border-bottom: 1px solid #fafafa;
    padding-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
      border-bottom: 0;
    }
  }

  &__icon {
    width: 1.5rem;
    height: auto;
    margin-right: $spacing;
    flex-shrink: 0;
  }

  &__phone-list {
    display: flex;
    flex-direction: column;
    font-size: $font-size;

    li {
      margin-bottom: $spacing * 0.25;
    }
  }

  &__credit-logo {
    width: 6rem;
    height: auto;
    opacity: 0.5;
  }

  /*--------------------------------*/
  /* Mobil nézet (max-width: 767px) */
  /*--------------------------------*/
  @media (max-width: 767px) {
    &__container {
      flex-direction: column;
      /* eltávolítva: align-items: center; */
      gap: 2em;
      padding: 2em;
    }

    &__column {
      flex: 1 1 100%;
      /* eltávolítva: text-align: center; */

      &--brand {
        margin-bottom: 1.5em;
      }
    }

    .footer-brand {
      &__logo {
        width: 5em;
        /* eltávolítva: margin: 0 auto; */
      }
    }

    &__heading {
      font-size: 1.5rem;
      padding-top: 1em;
    }

    &__item {
      margin-bottom: $spacing * 0.75;
    }

    &__link {
      font-size: 0.95rem;
    }

    &__contact-item {
      flex-direction: column;
      /* eltávolítva: align-items: center; */
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: $spacing * 0.75;

      span,
      a {
        display: block;
        margin-top: 0.5em;
        /* így balra igazítva maradnak */
      }
    }

    &__icon {
      margin-right: 0;
      margin-bottom: 0.5em;
    }

    &__phone-list {
      display: flex;
      flex-direction: column;
      /* eltávolítva: align-items: center; */

      li {
        margin-bottom: $spacing * 0.5;
      }
    }

    &__credit {
      margin-top: 2em;
      /* eltávolítva: justify-content: center; */
    }
  }

  @media (max-width: 992px) {
    &__container {
      flex-direction: column;
      /* eltávolítva: align-items: center; */
      gap: 2em;
      padding: 2em 3em;
    }

    &__column {
      flex: 1 1 100%;
      /* eltávolítva: text-align: center; */

      &--brand {
        margin-bottom: 1.5em;
      }
    }

    .footer-brand {
      &__logo {
        width: 5em;
        /* eltávolítva: margin: 0 auto; */
      }
    }

    &__heading {
      font-size: 1.5rem;
      padding-top: 1em;
    }

    &__item {
      margin-bottom: $spacing * 0.75;
    }

    &__link {
      font-size: 0.95rem;
    }

    &__contact-item {
      flex-direction: column;
      /* eltávolítva: align-items: center; */
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: $spacing * 0.75;

      span,
      a {
        display: block;
        margin-top: 0.5em;
        /* így balra igazítva maradnak */
      }
    }

    &__icon {
      margin-right: 0;
      margin-bottom: 0.5em;
    }

    &__phone-list {
      display: flex;
      flex-direction: column;
      /* eltávolítva: align-items: center; */

      li {
        margin-bottom: $spacing * 0.5;
      }
    }

    &__credit {
      margin-top: 2em;
      /* eltávolítva: justify-content: center; */
    }
  }

  /*---------------------------------------------*/
  /* Tablet nézet (min-width: 992px and max-width: 1199px) */
  /*---------------------------------------------*/
  @media (min-width: 992px) and (max-width: 1199px) {
    &__container {
      flex-direction: column;
      /* eltávolítva: align-items: center; */
      gap: 2em;
      padding: 2em 3em;
    }

    &__column {
      flex: 1 1 100%;
      /* eltávolítva: text-align: center; */

      &--brand {
        margin-bottom: 1.5em;
      }
    }

    .footer-brand {
      &__logo {
        width: 5em;
        /* eltávolítva: margin: 0 auto; */
      }
    }

    &__heading {
      font-size: 1.5rem;
      padding-top: 1em;
    }

    &__item {
      margin-bottom: $spacing * 0.75;
    }

    &__link {
      font-size: 0.95rem;
    }

    &__contact-item {
      flex-direction: column;
      /* eltávolítva: align-items: center; */
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: $spacing * 0.75;

      span,
      a {
        display: block;
        margin-top: 0.5em;
        /* így balra igazítva maradnak */
      }
    }

    &__icon {
      margin-right: 0;
      margin-bottom: 0.5em;
    }

    &__phone-list {
      display: flex;
      flex-direction: column;
      /* eltávolítva: align-items: center; */

      li {
        margin-bottom: $spacing * 0.5;
      }
    }

    &__credit {
      margin-top: 2em;
      /* eltávolítva: justify-content: center; */
    }
  }
}
</style>
