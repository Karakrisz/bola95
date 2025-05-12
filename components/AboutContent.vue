<template>
    <section class="about">
      <div class="about__container">
        <div class="about__content">
          <div class="about__content-inner">
            <h2 class="about__title">Rólunk</h2>
            
            <p class="about__paragraph">
              Több mint 30 éve dolgozunk azon, hogy Magyarország útjai, bejárói és 
              udvarai stabil, időtálló és esztétikus burkolatot kapjanak. Cégünk az 
              évtizedek alatt nemcsak a szakmai tapasztalatát, hanem saját gépparkját 
              és megbízható csapatát is folyamatosan fejlesztette, így ma már teljes körű 
              szolgáltatást tudunk nyújtani az útépítés és burkolás minden területén.
            </p>
            
            <p class="about__paragraph">
              Legyen szó ipari léptékű útépítésről, kátyúzásról vagy akár egy családi ház 
              kapubejárójának térkövezéséről, számunkra minden munka ugyanolyan 
              fontos. Magánszemélyek és vállalkozások egyaránt számíthatnak ránk, ha 
              minőségi, tartós és precíz kivitelezésre van szükség.
            </p>
            
            <p class="about__paragraph">
              Szolgáltatásaink között szerepel az aszfaltozás több típusa (pl. hengerelt 
              vagy mart aszfalt), térkövezés, alapozás, szegélyezés, vízelvezetés, valamint 
              különféle betonozási munkálatok. Minden projektünknél nagy hangsúlyt 
              fektetünk az előkészítésre, az anyagminőségre és a határidők pontos 
              betartására.
            </p>
            
            <p class="about__paragraph">
              A célunk egyszerű: hosszú távon megbízható, esztétikus és funkcionális 
              burkolatokat létrehozni, amelyek valóban kiszolgálják megrendelőink 
              igényeit – akár egy belvárosi járdáról, akár egy családi ház előtti beállóról 
              van szó.
            </p>
            
            <div class="about__action">
              <a href="#kapcsolat" class="about__button">KAPCSOLAT</a>
            </div>
          </div>
        </div>
        
        <div class="about__image-container">
          <img src="" alt="Útépítő szakemberek munka közben" class="about__image">
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // A komponens logikája jöhet ide, ha szükséges
  </script>
  
  <style lang="scss">
  .about {
    padding: 4rem 0;
    background-color: #3d4250;
    color: #fff;
    
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    }
    
    &__content {
      position: relative;
      clip-path: polygon(0 0%, 80% 0%, 73% 100%, 0% 100%); // A szöveges rész ferde vágása
      background-color: #3d4250;
      padding-right: 2rem;
      
      @media (max-width: 992px) {
        clip-path: none; // Mobilnézetben ne legyen ferde vágás
        padding-right: 0;
      }
    }
    
    &__content-inner {
      padding-right: 2rem;
      
      @media (max-width: 992px) {
        padding-right: 0;
      }
    }
    
    &__title {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
      color: #fff;
    }
    
    &__paragraph {
      margin-bottom: 1rem;
      line-height: 1.6;
      font-size: 1rem;
      
      &:last-of-type {
        margin-bottom: 2rem;
      }
    }
    
    &__action {
      margin-top: auto;
      padding-top: 1rem;
    }
    
    &__button {
      display: inline-block;
      padding: 0.8rem 2rem;
      background-color: #ff5722;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      
      &:hover {
        background-color: #e64a19; // Előre definiált sötétebb narancs 
      }
    }
    
    &__image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      
      @media (max-width: 992px) {
        margin-top: 2rem;
      }
    }
    
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  </style>