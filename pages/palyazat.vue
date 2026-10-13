<script setup>
useHead({
  title: 'Pályázat',
})

// TODO: a hiányzó adatokat az ügyféltől kapott értékekkel kitölteni
const project = {
  beneficiary: 'Bola 95 Kft.',
  title: '',
  id: '',
  amount: '',
  rate: '',
  endDate: '',
  description: [],
}

const pending = 'Feltöltés alatt'

const rows = [
  { label: 'A kedvezményezett neve', value: project.beneficiary },
  { label: 'A projekt címe', value: project.title },
  { label: 'A projekt azonosító száma', value: project.id },
  { label: 'A szerződött támogatás összege', value: project.amount },
  { label: 'A támogatás mértéke', value: project.rate },
  { label: 'A projekt befejezési dátuma', value: project.endDate },
]
</script>

<template>
  <section>
    <div class="subpage-content project-page">
      <h1 class="project-page__title">
        {{ project.title || 'Európai uniós támogatásból megvalósuló projektünk' }}
      </h1>

      <dl class="project-page__list">
        <div v-for="row in rows" :key="row.label" class="project-page__row">
          <dt class="project-page__label">{{ row.label }}</dt>
          <dd class="project-page__value">{{ row.value || pending }}</dd>
        </div>
      </dl>

      <h2 class="project-page__subtitle">A projekt tartalmának bemutatása</h2>
      <p v-if="!project.description.length" class="project-page__text">
        {{ pending }}
      </p>
      <p
        v-for="(paragraph, index) in project.description"
        :key="index"
        class="project-page__text"
      >
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 9em 1.25rem 14em;
  color: #202632;

  &__title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  &__subtitle {
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 2rem 0 1rem;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1.5rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e5e5;
  }

  &__label {
    flex: 0 0 280px;
    font-weight: 600;
  }

  &__value {
    flex: 1 1 280px;
    margin: 0;
  }

  &__text {
    line-height: 1.7;
    margin-bottom: 1rem;
  }
}
</style>
