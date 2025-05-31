<template>
  <section class="contact-section" aria-labelledby="contact-heading">
    <div class="contact-section__wrapper">
      <!-- Contact Form -->
      <div class="contact-section__form-area">
        <h2 id="contact-heading" class="contact-section__heading">Kapcsolat</h2>
        <p class="contact-section__description">
          Kérdése van, árajánlatot szeretne, vagy csak érdeklődne? Írjon nekünk
          e-mailt vagy hívjon telefonon – gyorsan és készséggel válaszolunk
          minden megkeresésre!
        </p>
        <form
          class="contact-section__form"
          action="/api/contact"
          method="post"
          novalidate
        >
          <div class="contact-section__fields">
            <div class="contact-section__field-group">
              <input
                class="contact-section__input"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Név*"
              />
            </div>
            <div class="contact-section__field-group">
              <input
                class="contact-section__input"
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Telefonszám*"
              />
            </div>
            <div class="contact-section__field-group">
              <input
                class="contact-section__input"
                type="email"
                id="email"
                name="email"
                required
                placeholder="E-mail cím*"
              />
            </div>
            <div class="contact-section__field-group">
              <input
                class="contact-section__input"
                type="text"
                id="subject"
                name="subject"
                placeholder="Tárgy"
              />
            </div>
          </div>
          <div class="contact-section__field-group">
            <textarea
              class="contact-section__textarea"
              id="message"
              name="message"
              rows="6"
              placeholder="Üzenet"
            ></textarea>
          </div>
          <div class="contact-section__actions">
            <button type="submit" class="contact-section__submit">
              KÜLDÉS
            </button>
            <p class="contact-section__note">
              A küldés gombra kattintva automatikusan elfogadja az
              <a href="/privacy-policy" class="contact-section__policy-link"
                >Adatkezelési Nyilatkozatot</a
              >.
            </p>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <aside class="contact-section__info-area" aria-labelledby="info-heading">
        <h2 id="info-heading" class="contact-section__heading">
          Elérhetőségeink
        </h2>
        <address class="contact-section__info-list">
          <div class="contact-section__info-item">
            <span class="contact-section__info-icon" aria-hidden="true"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z"
                  fill="#49505F"
                />
              </svg>
            </span>
            <span class="contact-section__info-label">Cím</span>
          </div>
          <div class="contact-section__info__last-box">
            <a
              href="https://www.google.com/maps/place/Szentendre,+R%C3%B3zsa+u.+14,+2000/@47.657006,19.061276,17z/data=!3m1!4b1!4m6!3m5!1s0x4741d65c2eb5c2f5:0x7b1e19a94a899ce0!8m2!3d47.657006!4d19.0638509!16s%2Fg%2F11c28nk1mx?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              class="contact-section__info-text"
            >
              2000 Szentendre, Rózsa utca 14.
            </a>
          </div>
          <div class="contact-section__info-item">
            <span class="contact-section__info-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM9.25406 12L3.75 17.0447V6.95531L9.25406 12ZM10.3641 13.0172L11.4891 14.0531C11.6274 14.1801 11.8084 14.2506 11.9963 14.2506C12.1841 14.2506 12.3651 14.1801 12.5034 14.0531L13.6284 13.0172L19.0659 18H4.92844L10.3641 13.0172ZM14.7459 12L20.25 6.95438V17.0456L14.7459 12Z"
                  fill="#49505F"
                />
              </svg>
            </span>
            <span class="contact-section__info-label">E-mail cím</span>
          </div>
          <div class="contact-section__info__last-box">
            <a
              href="mailto:bola95kft@t-online.hu"
              class="contact-section__info-text"
            >
              bola95kft@t-online.hu
            </a>
          </div>
          <div class="contact-section__info-item">
            <span class="contact-section__info-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.7388 16.4136C21.5716 17.6839 20.9477 18.85 19.9837 19.6939C19.0196 20.5379 17.7813 21.0021 16.5 20.9998C9.05626 20.9998 3.00001 14.9436 3.00001 7.49981C2.99771 6.21852 3.4619 4.98021 4.30588 4.01615C5.14986 3.05209 6.31592 2.42822 7.58626 2.26106C7.9075 2.22184 8.2328 2.28756 8.51362 2.44841C8.79444 2.60926 9.0157 2.85662 9.14438 3.15356L11.1244 7.57387V7.58512C11.2229 7.81242 11.2636 8.06058 11.2428 8.30744C11.222 8.5543 11.1404 8.79217 11.0053 8.99981C10.9884 9.02512 10.9706 9.04856 10.9519 9.072L9.00001 11.3857C9.7022 12.8126 11.1947 14.292 12.6403 14.9961L14.9222 13.0545C14.9446 13.0357 14.9681 13.0181 14.9925 13.002C15.2 12.8636 15.4387 12.7792 15.687 12.7562C15.9353 12.7333 16.1854 12.7727 16.4147 12.8707L16.4269 12.8764L20.8434 14.8554C21.1409 14.9837 21.3889 15.2047 21.5503 15.4856C21.7116 15.7664 21.7778 16.092 21.7388 16.4136Z"
                  fill="#49505F"
                />
              </svg>
            </span>
            <span class="contact-section__info-label">Telefonszám</span>
          </div>
          <div class="contact-section__info__last-box">
            <ul class="contact-section__phone-list">
              <li>
                <a class="contact-section__info-text" href="tel:+3626302586">
                  +36-26-302-586
                </a>
              </li>
              <li>
                <a class="contact-section__info-text" href="tel:+36209606878"
                  >+36-20-960-6878</a
                >
              </li>
              <li>
                <a class="contact-section__info-text" href="tel:+36202222867"
                  >+36-20-222-2867</a
                >
              </li>
              <li>
                <a class="contact-section__info-text" href="tel:+36204114011"
                  >+36-20-411-4011</a
                >
              </li>
              <li>
                <a class="contact-section__info-text" href="tel:+36302229645"
                  >+36-30-222-9645</a
                >
              </li>
            </ul>
          </div>
        </address>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
// Nincs külön logika jelenleg
</script>

<style lang="scss" scoped>
.contact-section__input::-webkit-input-placeholder,
.contact-section__textarea::-webkit-input-placeholder {
  color: #b4b4b5;
  font-weight: 400;
}
.contact-section {
  background: var(--Lighter-Gray, #fafafa);
  padding: 0;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto;
    max-width: 1200px;
    background: #f16522;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  &__form-area {
    color: #fff;
    padding: 3em 4em 3em 3em;
    flex: 1 1 60%;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
  }

  &__info-area {
    background: #fff;
    padding: 4% 2em 2em 7em;
    flex: 1 1 40%;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  }

  &__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: 'Barlow Condensed', sans-serif;
  }

  &__description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  &__field-group {
    display: flex;
    flex-direction: column;
  }

  &__label {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  &__input,
  &__textarea {
    padding: 0.75rem;
    border: none;
    font-size: 1rem;
  }

  &__textarea {
    resize: vertical;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  &__submit {
    background-color: #000;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    margin-top: 1.5em;
  }

  &__note {
    font-size: 0.875rem;
    text-align: end;
    width: 50%;
    font-weight: 300;
    margin-top: 1.5em;
  }

  &__policy-link {
    text-decoration: underline;
    color: inherit;
  }

  &__info-list {
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    font-style: normal;
    color: #333;
  }

  &__info-item {
    display: flex;
    align-items: flex-start;
    margin-top: 1em;
  }

  &__info-icon {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }

  &__info-label {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  &__info-text {
    font-weight: 400;
    color: #181818;
    line-height: 2em;
  }

  &__phone-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /*-----------------------*/
  /* Mobil nézet (max-width: 767px) */
  /*-----------------------*/
  @media (max-width: 767px) {
    /* A wrapperben egymás alá rendezzük a részeket */
    &__wrapper {
      flex-direction: column;
      padding: 1.5rem; // kisebb belső margó mobilon
      margin: 0;
    }

    /* A form és info területek teljes szélességűre nyúlnak */
    &__form-area,
    &__info-area {
      flex: 1 1 100%;
      clip-path: none; // ne legyen vágás mobilon
      padding: 2rem 1.5rem; // kisebb padding mobilon
    }

    /* A form mezők legyenek egymás alattiak mobilon */
    &__fields {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    /* A submit gomb igazítása középre */
    &__actions {
      flex-direction: column;
      align-items: stretch;
    }
    &__submit {
      width: max-content;
      margin-top: 1rem;
    }

    /* A note teljes szélességű, alá igazítva */
    &__note {
      width: 100%;
      text-align: left;
      margin-top: 1rem;
    }

    /* Info területen belüli padding csökkentése */
    &__info-area {
      padding: 1.5rem 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .nextlayer__text-block{
      max-width: 100%;
    }
    .contact-section__info-area {
      padding: 4% 2em 2em 3em;
      clip-path: polygon(0% 0, 100% 0, 100% 100%, 0 100%);
    }
    .contact-section__wrapper {
      margin: 0;
    }
  }

  /*-----------------------*/
  /* Tablet nézet (992px–1199px) */
  /*-----------------------*/
  @media (min-width: 992px) and (max-width: 1199px) {
    /* A wrapper maradjon flex sorban, de egy kicsit keskenyebbre szabjuk */
    &__wrapper {
      flex-direction: row;
      max-width: 100%;
      margin: 1.5rem auto;
      padding: 2rem;
    }

    /* Form-area és info-area arány módosítása tablet nézetre */
    &__form-area {
      flex: 1 1 65%; // kicsit nagyobb arány a formnak
      padding: 2.5rem 3rem 2.5rem 2rem;
      clip-path: polygon(0 0, 100% 0, 97% 100%, 0 100%);
    }

    &__info-area {
      flex: 1 1 35%; // kicsit kisebb arány az infónak
      padding: 3% 1.5rem 1.5rem 5rem;
      clip-path: polygon(7% 0, 100% 0, 100% 100%, 0 100%);
    }

    /* Kitöltőbetű és méretek kicsit kisebbek tabletre */
    &__heading {
      font-size: 1.75rem;
    }
    &__description {
      font-size: 0.95rem;
    }
    &__input,
    &__textarea {
      font-size: 0.95rem;
      padding: 0.65rem;
    }
    &__submit {
      font-size: 0.95rem;
      padding: 0.65rem 1.25rem;
    }

    /* Mezők 2 oszlopos grid marad, de kicsit szűkebb margókkal */
    &__fields {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.85rem;
    }

    /* Info-list elemeken belüli térköz kicsit csökkentve */
    &__info-list {
      gap: 0.6em;
    }
    &__info-item {
      margin-top: 0.85em;
    }
    &__info-text {
      line-height: 1.8em;
    }
  }
}
</style>
