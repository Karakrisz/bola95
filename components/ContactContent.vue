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
              <label class="contact-section__label" for="name">Név*</label>
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
              <label class="contact-section__label" for="phone"
                >Telefonszám*</label
              >
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
              <label class="contact-section__label" for="email"
                >E-mail cím*</label
              >
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
              <label class="contact-section__label" for="subject">Tárgy</label>
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
            <label class="contact-section__label" for="message">Üzenet</label>
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
              >📍</span
            >
            <span class="contact-section__info-label">Cím</span>
            <span class="contact-section__info-text"
              >2000 Szentendre, Rózsa utca 14.</span
            >
          </div>
          <div class="contact-section__info-item">
            <span class="contact-section__info-icon" aria-hidden="true"
              >✉️</span
            >
            <span class="contact-section__info-label">E-mail cím</span>
            <a
              href="mailto:bola95kft@t-online.hu"
              class="contact-section__info-text"
            >
              bola95kft@t-online.hu
            </a>
          </div>
          <div class="contact-section__info-item">
            <span class="contact-section__info-icon" aria-hidden="true"
              >📞</span
            >
            <span class="contact-section__info-label">Telefonszám</span>
            <ul class="contact-section__phone-list">
              <li>+36-26-302-586</li>
              <li>+36-20-960-6878</li>
              <li>+36-20-222-2867</li>
              <li>+36-20-411-4011</li>
              <li>+36-30-222-9645</li>
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
.contact-section {
  background: var(--Lighter-Gray, #fafafa);
  padding: 5em 5em 2em 5em;
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
    padding: 2rem;
    flex: 1 1 60%;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
  }

  &__info-area {
    background: #fff;
    padding: 2rem;
    flex: 1 1 40%;
    clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%);
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
    border-radius: 4px;
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
    border-radius: 4px;
  }

  &__note {
    font-size: 0.875rem;
  }

  &__policy-link {
    text-decoration: underline;
    color: inherit;
  }

  &__info-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-style: normal;
    color: #333;
  }

  &__info-item {
    display: flex;
    align-items: flex-start;
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
    flex: 1;
  }

  &__phone-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Mobilon stackelés */
  @media (max-width: 768px) {
    &__wrapper {
      flex-direction: column;
    }
    &__info-area {
      clip-path: none;
      margin-top: 2rem;
    }
  }
}
</style>
