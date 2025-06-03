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
            <NuxtLink class="site-footer__link" href="/">Főoldal</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Galéria</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Rólunk</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Referenciák</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/"
              >Adatvédelmi Nyilatkozat</NuxtLink
            >
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/"
              >Gyakran Ismételt Kérdések</NuxtLink
            >
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Partnereink</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Kapcsolat</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div class="site-footer__column">
        <h3 class="site-footer__heading">Szolgáltatásaink</h3>
        <ul class="site-footer__list">
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Transzpont beton</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Hengerelt aszfaltozás</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Öntött aszfaltozás</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Mart aszfaltos útépítés</NuxtLink>
          </li>
          <li class="site-footer__item">
            <NuxtLink class="site-footer__link" href="/">Térkövezés</NuxtLink>
          </li>
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
            <svg
              class="site-footer__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.7388 16.4136C21.5716 17.6839 20.9477 18.85 19.9837 19.6939C19.0196 20.5379 17.7813 21.0021 16.5 20.9998C9.05626 20.9998 3.00001 14.9436 3.00001 7.49981C2.99771 6.21852 3.4619 4.98021 4.30588 4.01615C5.14986 3.05209 6.31592 2.42822 7.58626 2.26106C7.9075 2.22184 8.2328 2.28756 8.51362 2.44841C8.79444 2.60926 9.0157 2.85662 9.14438 3.15356L11.1244 7.57387V7.58512C11.2229 7.81242 11.2636 8.06058 11.2428 8.30744C11.222 8.5543 11.1404 8.79217 11.0053 8.99981C10.9884 9.02512 10.9706 9.04856 10.9519 9.072L9.00001 11.3857C9.7022 12.8126 11.1947 14.292 12.6403 14.9961L14.9222 13.0545C14.9446 13.0357 14.9681 13.0181 14.9925 13.002C15.2 12.8636 15.4387 12.7792 15.687 12.7562C15.9353 12.7333 16.1854 12.7727 16.4147 12.8707L16.4269 12.8764L20.8434 14.8554C21.1409 14.9837 21.3889 15.2047 21.5503 15.4856C21.7116 15.7664 21.7778 16.092 21.7388 16.4136Z"
                fill="#FD5D14"
              />
            </svg>
            <ul class="site-footer__phone-list">
              <li>
                <a class="site-footer__link" href="tel:+3626302586">+36-26-302-586</a>
              </li>
              <li>
                <a class="site-footer__link" href="tel:+36209606878">+36-20-960-6878</a>
              </li>
              <li>
                <a class="site-footer__link" href="tel:+36202222867">+36-20-222-2867</a>
              </li>
              <li>
                <a class="site-footer__link" href="tel:+36204114011">+36-20-411-4011</a>
              </li>
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
