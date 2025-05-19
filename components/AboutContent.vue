<template>
    <section class="about-us" id="about-us">
      <div class="about-us__container">
        <div class="about-us__content">
          <h2 class="about-us__title">Rólunk</h2>
  
          <div class="about-us__text-block">
            <p class="about-us__paragraph">
              Több mint 30 éve dolgozunk azon, hogy Magyarország útjai, bejárói és udvarai stabil, időtálló és esztétikus burkolatot kapjanak. Cégünk az évtizedek alatt nemcsak a szakmai tapasztalatát, hanem saját gépparkját és megbízható csapatát is folyamatosan fejlesztette, így ma már teljes körű szolgáltatást tudunk nyújtani az útépítés és burkolás minden területén.
            </p>
            <p class="about-us__paragraph">
              Legyen szó ipari léptékű útépítésről, kátyúzásról vagy akár egy családi ház kapubejárójának térkövezéséről, számunkra minden munka ugyanolyan fontos. Magánszemélyek és vállalkozások egyaránt számíthatnak ránk, ha minőségi, tartós és precíz kivitelezésre van szükség.
            </p>
            <p class="about-us__paragraph">
              Szolgáltatásaink között szerepel az aszfaltozás több típusa (pl. hengerelt vagy mart aszfalt), térkövezés, alapozás, szegélyezés, vízelvezetés, valamint különféle betonozási munkálatok. Minden projektünknél nagy hangsúlyt fektetünk az előkészítésre, az anyagminőségre és a határidők pontos betartására.
            </p>
            <p class="about-us__paragraph">
              A célunk egyszerű: hosszú távon megbízható, esztétikus és funkcionális burkolatokat létrehozni, amelyek valóban kiszolgálják megrendelőink igényeit – akár egy belvárosi járdáról, akár egy családi ház előtti beállóról van szó.
            </p>
          </div>
  
          <a href="/contact" class="about-us__button">Kapcsolat</a>
        </div>
  
        <div class="about-us__image">
          <img
   
            alt="Construction workers working on a site"
            class="about-us__img"
          />
        </div>
      </div>
    </section>
  </template>
  

  
  <style lang="scss" scoped>
  @use "sass:color";
  
  // variables
  $color-bg-dark:     #49505c;
  $color-text:        #ffffff;
  $color-button:      #ff6300;
  $color-button-text: #ffffff;
  $transition-speed:  0.3s;
  
  .about-us {
    &__container {
      display: flex;
      align-items: stretch;
      overflow: hidden;
    }
  
    &__content {
      flex: 0 0 60%;
      background-color: $color-bg-dark;
      color: $color-text;
      padding: 4rem 3rem;
      clip-path: polygon(0 0, 70% 0, 60% 100%, 0 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  
    &__title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
  
    &__text-block {
      margin-bottom: 2.5rem;
    }
  
    &__paragraph {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
  
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  
    &__button {
      display: inline-block;
      background-color: $color-button;
      color: $color-button-text;
      text-decoration: none;
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      transition: background-color $transition-speed;
  
      &:hover,
      &:focus {
        // 10%-kal sötétítjük a gombot
        background-color: color.scale($color-button, $lightness: -10%);
      }
    }
  
    &__image {
      flex: 0 0 40%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    // Az img-t ne nested namespace-ként, hanem simán referáljuk
    .about-us__img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  
  // Responsive: kisebb képernyőn oszlopba rendezzük
  @media (max-width: 768px) {
    .about-us__container {
      flex-direction: column;
    }
    .about-us__content,
    .about-us__image {
      clip-path: none;
      flex: 1 1 auto;
    }
  }
  </style>
  