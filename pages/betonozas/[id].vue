<script setup>
import { computed } from 'vue'
import { useRoute, useFetch, useHead } from '#imports'

const route = useRoute()

const {
  data: betonProjektek,
  pending,
  error,
} = await useFetch('/api/beton_service')

const projektData = computed(() => {
  if (!betonProjektek.value || !Array.isArray(betonProjektek.value)) {
    return null
  }

  const searchId = route.params.id
  return betonProjektek.value.find((item) => item.id === searchId) || null
})

const relatedPosts = computed(() => {
  if (!projektData.value || !betonProjektek.value) return []

  const allItems = betonProjektek.value || []
  const currentIndex = allItems.findIndex(
    (item) => item.id === projektData.value?.id
  )

  if (currentIndex === -1) return []

  const nextItems = []
  for (let i = 1; i <= 6; i++) {
    const nextIndex = (currentIndex + i) % allItems.length
    nextItems.push(allItems[nextIndex])
  }

  return nextItems
})

useHead({
  title: projektData.value?.title || 'Betonozás szolgáltatás',
  meta: [
    {
      name: 'description',
      content:
        projektData.value?.meta_description ||
        'Professzionális betonozás és alapozási szolgáltatások hosszú élettartamra tervezve.',
    },
  ],
})
</script>

<template>
  <div class="beton-page">
    <!-- Loading state -->
    <div v-if="pending" class="loading-state">
      <div class="loading-spinner"></div>
      <p>Projekt adatok betöltése...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="error-state">
      <div class="error-container">
        <h2>❌ Valami hiba történt</h2>
        <p>{{ error }}</p>
      </div>
    </div>

    <!-- Not found state -->
    <div v-else-if="!projektData" class="not-found-state">
      <div class="error-container">
        <h2>🏗️ A projekt nem található</h2>
        <p>Sajnáljuk, de a keresett betonozás projekt nem érhető el.</p>
        <NuxtLink to="/" class="btn btn-primary">Vissza a főoldalra</NuxtLink>
      </div>
    </div>

    <!-- Success state -->
    <template v-else>
      <!-- Hero section -->
      <section class="hero" :style="{ backgroundImage: `url(/img/hero.webp)` }">
        <div class="hero__overlay"></div>
        <div class="container">
          <div class="hero__content">
            <h1 class="hero__title">{{ projektData.h1 }}</h1>
            <p class="hero__subtitle">{{ projektData.meta_description }}</p>
            <NuxtLink to="/kapcsolat" class="btn btn-primary hero__cta"
              >Ingyenes felmérés kérése</NuxtLink
            >
          </div>
        </div>
      </section>

      <!-- Breadcrumbs -->
      <div class="container">
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__list">
            <li><NuxtLink to="/">Főoldal</NuxtLink></li>
            <li><span class="separator">/</span></li>
            <li><span class="current">{{ projektData.h1 }}</span></li>
          </ul>
        </nav>

        <!-- Main content area -->
        <div class="content-grid">
          <!-- Main column -->
          <main class="content-main">

            <!-- Main content section -->
            <section class="content-section">
              <h2 class="section-title">A betonozás technikai alapjai</h2>
              <div class="content-body">
                <p>{{ projektData.body }}</p>
              </div>
            </section>

            <!-- Benefits section -->
            <section class="content-section">
              <h2 class="section-title">A minőségi betonozás előnyei</h2>
              
              <div class="benefits-list">
                <div class="benefit-item">
                  <h3>30+ év élettartam</h3>
                  <p>A megfelelően készített beton 30-40 évig, sőt még tovább is megbízhatóan működik anélkül, hogy jelentős javítások szükségesek lennének. Az élettartam az alapozás minőségétől, a megfelelő vízszigetelésétől és a rendszeres karbantartástól függ.</p>
                </div>

                <div class="benefit-item">
                  <h3>Alacsony karbantartás</h3>
                  <p>A beton minimális karbantartást igényel. Csak rendszeres takarítás és időnkénti lezárás szükséges az optimális állapot megőrzéséhez. Ez jelentősen csökkenti a hosszú távú költségeket, ellentétben más felületkezelési módokkal.</p>
                </div>

                <div class="benefit-item">
                  <h3>Rugalmas tervezés</h3>
                  <p>A betonnak szinte korlátlan tervezési lehetőségei vannak. Megfesthető, dekoratív utcakővel díszíthető vagy egyedi mintázattal készíthető. Így az esztétikai igények és a praktikus szükségletek egyaránt teljesíthetők.</p>
                </div>

                <div class="benefit-item">
                  <h3>Fizikai szilárdság</h3>
                  <p>A beton kiváló terhelhetőséggel rendelkezik. Szállítóeszközöket, gépeket, és szélsőséges időjárási viszonyokat képes elviselni. Ez teszi ideális választássá garázspályákra, parkolóhelyekre és egyéb nagy terhelésnek kitett felületekre.</p>
                </div>
              </div>
            </section>

            <!-- Process section -->
            <section class="content-section">
              <h2 class="section-title">A munkafolyamat</h2>

              <div class="process-list">
                <div class="process-item">
                  <div class="process-step">1</div>
                  <div>
                    <h3>Helyszín felmérés</h3>
                    <p>Részletes analízis az altalaj, domborzat és környezeti körülmények alapján. Minták vételezése és szükséges laboratóriumi vizsgálatok elvégzése.</p>
                  </div>
                </div>

                <div class="process-item">
                  <div class="process-step">2</div>
                  <div>
                    <h3>Alapozás & előkészítés</h3>
                    <p>Megfelelő tömörítés, drénrendszer kialakítása, alapréteg lerakása. Az altalaj előkészítése kritikus fontosságú az egyenletes terhelésmegosztáshoz.</p>
                  </div>
                </div>

                <div class="process-item">
                  <div class="process-step">3</div>
                  <div>
                    <h3>Beton öntés & simítás</h3>
                    <p>Precíz betonöntés, szintezés, és professzionális simítási technika. A megfelelő konzisztencia és egyenletes eloszlás garantálja a minőséget.</p>
                  </div>
                </div>

                <div class="process-item">
                  <div class="process-step">4</div>
                  <div>
                    <h3>Száradás & kezelés</h3>
                    <p>Kontrollált száradási folyamat, védelem az időjárási hatásoktól. A megfelelő kezelés az első napok során meghatározó a végső szilárdság szempontjából.</p>
                  </div>
                </div>

                <div class="process-item">
                  <div class="process-step">5</div>
                  <div>
                    <h3>Befejezés & garancia</h3>
                    <p>Minőség ellenőrzés, takarítás, és teljes garanciavállalás. Végleges üzembe helyezés és hosszú távú karbantartási tanácsadás.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Guarantee section - CTA -->
            <section class="cta-section">
              <div class="cta-card">
                <div class="cta-card__content">
                  <h3>Teljes körű garancia</h3>
                  <p>{{ projektData.szoveg_garancia }}</p>
                  <NuxtLink to="/kapcsolat" class="btn btn-primary btn-pulse"
                    >Ingyenes felmérés kérése</NuxtLink
                  >
                </div>
              </div>
            </section>

            <!-- FAQ Section -->
            <section class="content-section faq-section">
              <h2 class="section-title">Gyakori kérdések</h2>

              <div class="accordion">
                <details class="accordion-item">
                  <summary class="accordion-header">
                    Meddig tart a beton száradása?
                  </summary>
                  <div class="accordion-content">
                    <p>
                      A beton kezdeti szilárdítása 3-7 nap alatt történik meg, azonban a teljes megkötés 28-35 napot vesz igénybe. Ez alatt ideális körülmények között (megfelelő hőmérséklet és páratartalom) kell tárolni az anyagot. A teljes terhelhetőség körülbelül 5-6 hét után érhető el.
                    </p>
                  </div>
                </details>

                <details class="accordion-item">
                  <summary class="accordion-header">
                    Mit tehetünk, ha esik az eső a betonozás után?
                  </summary>
                  <div class="accordion-content">
                    <p>
                      Védelemmel ellátott betonok elviselnek kisebb esőt is, de az első 24 órában kerülni kell az intenzív csapadékot. Takaróval vagy sátorral védve tartjuk az újonnan készült betonfelületet, amíg az kellőképpen meg nem szilárdult. Ezt az időszakot az aktuális időjárási viszonyok alapján módosítjuk.
                    </p>
                  </div>
                </details>

                <details class="accordion-item">
                  <summary class="accordion-header">
                    Elvisel-e a beton a téli időjárást?
                  </summary>
                  <div class="accordion-content">
                    <p>
                      Igen, az értékesen előkészített beton kiváló fagyállósággal rendelkezik. A megfelelő beton kompozíció és légbuborékos szerkezet biztosítja, hogy a fagynak kitett felületek is évtizedeket kibírnak. Azonban az első tél alatt fokozott figyelmet fordítunk a felület védelmére.
                    </p>
                  </div>
                </details>

                <details class="accordion-item">
                  <summary class="accordion-header">
                    Mennyibe kerül a betonozás?
                  </summary>
                  <div class="accordion-content">
                    <p>
                      Az ár függ a projekt típusától, méretétől és a helyi körülményektől. Átlagosan 4.000-8.000 Ft/m² között mozog, de egyedi projektek esetén eltérhet. Ingyenes helyszín felmérésünk után pontos árajánlatot adunk, amely tartalmazza az anyagköltségeket és a munka díját is.
                    </p>
                  </div>
                </details>
              </div>
            </section>
          </main>

          <!-- Sidebar -->
          <aside class="content-sidebar">
            <!-- CTA Widget -->
            <div class="sidebar-widget">
              <h3 class="sidebar-widget__title">Szeretnél felvilágosítást?</h3>
              <p style="margin-bottom: 1.5rem; color: var(--text-light); font-size: 0.95rem;">
                Kérj ingyenes helyszín felmérést. Szakértőink részletesen megvizsgálják az adottságokat és pontos ajánlatot adnak.
              </p>
              <NuxtLink to="/kapcsolat" class="btn btn-primary" style="width: 100%; text-align: center;">
                Kapcsolatfelvétel
              </NuxtLink>
            </div>
          </aside>
        </div>
      </div>

      <!-- Related posts -->
      <section class="related-posts" v-if="relatedPosts.length > 0">
        <div class="container">
          <h2 class="section-title">Hasonló projektek</h2>
          <div class="post-grid">
            <NuxtLink 
              v-for="post in relatedPosts" 
              :key="post.id"
              :to="`/betonozas/${post.id}`"
              class="post-card"
            >
              <div class="post-card__content">
                <h3>{{ post.h1 }}</h3>
                <p>{{ post.meta_description }}</p>
                <span class="post-card__link">Projekt megtekintése</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
/* ============= ROOT ============= */
:root {
  --primary-color: #fb9d2f;
  --secondary-color: #2d3e50;
  --text-dark: #1a1a1a;
  --text-light: #666;
  --light-bg: #f8f9fa;
  --border-color: #e0e0e0;
  --radius: 6px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  color: var(--text-dark);
}

a {
  color: inherit;
  text-decoration: none;
}

/* ============= LAYOUT ============= */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============= HERO ============= */
.hero {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 3rem;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero .container {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero__content {
  max-width: 700px;
}

.hero__title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero__subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero__cta {
  font-size: 1.1rem;
  background-color: #fd5d14;
}

/* ============= BREADCRUMBS ============= */
.breadcrumbs {
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.breadcrumbs__list {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.breadcrumbs__list a {
  color: var(--primary-color);
  font-weight: 500;
  transition: var(--transition);
}

.breadcrumbs__list a:hover {
  text-decoration: underline;
}

.separator {
  color: var(--text-light);
}

.current {
  color: var(--text-dark);
  font-weight: 600;
}

/* ============= CONTENT GRID ============= */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 3rem;
}

.content-main {
  grid-column: 1;
}

.content-sidebar {
  grid-column: 2;
  align-self: start;
}

/* ============= INFO CARDS ============= */
.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary-color);
}

.info-card h3 {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-card p {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin: 0;
}

/* ============= SECTIONS ============= */
.content-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--primary-color);
}

.content-body {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-dark);
}

.content-body p {
  margin-bottom: 1rem;
}

/* ============= GALLERY ============= */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.gallery-caption {
  padding: 1rem;
  background: var(--light-bg);
  text-align: center;
  font-weight: 600;
  color: var(--text-light);
  margin: 0;
}

/* ============= BENEFITS ============= */
.benefits-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-item {
  padding: 1.5rem;
  background: var(--light-bg);
  border-radius: var(--radius);
}

.benefit-item h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--secondary-color);
}

.benefit-item p {
  color: var(--text-light);
  line-height: 1.8;
}

/* ============= PROCESS ============= */
.process-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.process-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.process-step {
  min-width: 50px;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.process-item h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.process-item p {
  color: var(--text-light);
  line-height: 1.7;
}

/* ============= CTA SECTION ============= */
.cta-section {
  margin-bottom: 3rem;
  background: #49505c;
  padding: 2em;
}

.cta-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #f5a623 100%);
  color: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.cta-card__content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cta-card__content p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  opacity: 0.95;
}

.btn-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
}

/* ============= BUTTONS ============= */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  background: #fd5d14;
}

.btn-primary:hover {
  background: #f08420;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(251, 157, 47, 0.3);
}

/* ============= FAQ ============= */
.faq-section {
  margin-top: 7em;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accordion-item {
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.accordion-header {
  padding: 1.5rem;
  background: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: var(--secondary-color);
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: var(--transition);
  border-left: 4px solid transparent;
}

.accordion-header:hover {
  background: var(--light-bg);
}

.accordion-item[open] .accordion-header {
  background: var(--light-bg);
  border-left-color: var(--primary-color);
}

.accordion-content {
  padding: 0 1.5rem 1.5rem;
  color: var(--text-light);
  line-height: 1.8;
}

/* ============= SIDEBAR WIDGETS ============= */
.sidebar-widget {
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.sidebar-widget__title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--primary-color);
  color: var(--secondary-color);
  font-weight: 700;
}

.service-details__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-details__list li {
  display: flex;
  align-items: flex-start;
}

.service-details__content {
  flex: 1;
}

.service-details__label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-light);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.service-details__value {
  font-weight: 600;
  color: var(--secondary-color);
}

/* ============= RELATED POSTS ============= */
.related-posts {
  background: var(--light-bg);
  padding: 4rem 0;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.post-card {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  display: block;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.post-card__image {
  height: 180px;
  overflow: hidden;
}

.post-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.post-card:hover .post-card__image img {
  transform: scale(1.05);
}

.post-card__content {
  padding: 1.25rem;
}

.post-card__content h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.post-card__content p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.post-card__link {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
}

/* ============= LOADING/ERROR STATES ============= */
.loading-state,
.error-state,
.not-found-state {
  text-align: center;
  padding: 5rem 1.5rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--light-bg);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-state,
.not-found-state {
  background: #ffe8e0;
  border-radius: var(--radius);
  margin: 3rem 1.5rem;
}

.error-container h2 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.error-container p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

/* ============= RESPONSIVE ============= */
@media (max-width: 768px) {
  .hero__title {
    font-size: 2rem;
  }

  .hero {
    height: 100vh;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .content-sidebar {
    grid-column: 1;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .benefits-list,
  .info-cards,
  .post-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    padding: 1.5rem;
  }

  .process-item {
    flex-direction: column;
    gap: 1rem;
  }

  .process-step {
    align-self: center;
  }

  .breadcrumbs__list {
    flex-wrap: wrap;
  }
}
</style>