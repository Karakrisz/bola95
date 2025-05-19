<template>
  <footer class="site-footer" id="site-footer">
    <div class="site-footer__container">
      <!-- Brand -->
      <div class="site-footer__column site-footer__column--brand">
        <div class="footer-brand">
          <img src="/" alt="BOLA 95 KFT logo" class="footer-brand__logo" />
          <span class="footer-brand__text">BOLA 95 KFT</span>
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
            <a class="site-footer__link" href="/gallery">Galéria</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/about">Rólunk</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/references">Referenciák</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/privacy-policy"
              >Adatvédelmi Nyilatkozat</a
            >
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/faq"
              >Gyakran Ismételt Kérdések</a
            >
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/partners">Partnereink</a>
          </li>
          <li class="site-footer__item">
            <a class="site-footer__link" href="/contact">Kapcsolat</a>
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
            <img
              src="/"
              alt="Cím ikon"
              class="site-footer__icon"
            />
            <span>2000 Szentendre, Rózsa utca 14.</span>
          </li>
          <li class="site-footer__contact-item">
            <img src="/" alt="Email ikon" class="site-footer__icon" />
            <a href="mailto:bola95kft@t-online.hu" class="site-footer__link"
              >bola95kft@t-online.hu</a
            >
          </li>
          <li class="site-footer__contact-item">
            <img src="/" alt="Telefon ikon" class="site-footer__icon" />
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

      <!-- Partner credit -->
      <div class="site-footer__column site-footer__column--credit">
        <img
          src="/"
          alt="Digital Seed Studio logo"
          class="site-footer__credit-logo"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// Variables
$dark: #1e2430;
$light: #ffffff;
$spacing: 1rem;
$font-size: 1rem;

.site-footer {
  background: $dark;
  color: $light;
  padding: 4rem $spacing;

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
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
      display: block;
      width: 4rem;
      height: auto;
      margin-bottom: $spacing;
    }
    &__text {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  &__heading {
    font-size: 1.25rem;
    margin-bottom: $spacing;
  }

  &__list,
  &__contact-list,
  &__phone-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin-bottom: $spacing * 0.5;
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

    &:last-child {
      margin-bottom: 0;
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

  // Responsive
  @media (max-width: 768px) {
    &__container {
      flex-direction: column;
      align-items: center;
    }
    &__column--credit {
      margin-top: 2rem;
    }
  }
}
</style>
