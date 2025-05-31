<script setup>
const links = [
  { name: 'Főoldal', path: '/', icon: 'home' },
  { name: 'Galéria', path: '/', icon: 'image' },
  { name: 'Rólunk', path: '/', icon: 'users' },
  { name: 'Referenciák', path: '/', icon: 'star' },
  { name: 'Partnerek', path: '/', icon: 'handshake' },
  { name: 'Kapcsolat', path: '/', icon: 'mail' },
]

const isMenuOpen = ref(false)
const isMobile = ref(false)

// Mobilnézet ellenőrzése
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1200
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleClickOutside)
})

const menuRef = ref(null)

function handleKeydown(e) {
  if (e.key === 'Escape' && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

function handleClickOutside(e) {
  if (
    isMobile.value &&
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(e.target) &&
    !e.target.closest('.hamburger')
  ) {
    isMenuOpen.value = false
  }
}

// Menü bezárása navigáció után
const router = useRouter()
watch(
  () => router.currentRoute.value.path,
  () => {
    if (isMenuOpen.value) {
      isMenuOpen.value = false
    }
  }
)

// Ha nyitva van a menü, akkor akadályozza meg a görgetést
watch(isMenuOpen, (newVal) => {
  if (isMobile.value && newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header class="header">
    <div class="header-content d-flex">
      <div class="logo-box header-content__logo-box">
        <a href="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/logo.webp"
            alt="NapiTop Kft"
            class="header-content__logo-box__link__img"
            height="100%"
          />
        </a>
      </div>
      <div class="nav-box header-content__nav-box d-flex">
        <!-- Hamburger gomb - csak mobilon jelenik meg -->
        <button
          v-if="isMobile"
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger"
          :class="{ open: isMenuOpen }"
          aria-label="Menü megnyitása"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>

        <!-- Overlay a menü mögé - csak mobilon -->
        <Transition name="fade">
          <div
            v-if="isMobile && isMenuOpen"
            class="menu-overlay"
            @click="isMenuOpen = false"
          ></div>
        </Transition>

        <!-- Mobil menü - csak mobilon -->
        <Transition name="slide">
          <nav v-if="isMobile && isMenuOpen" ref="menuRef" class="mobile-menu">
            <div class="mobile-menu-header">
              <span class="mobile-menu-title">Menü</span>
              <button @click="isMenuOpen = false" class="close-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <ul class="mobile-menu-list">
              <li
                v-for="(link, index) in links"
                :key="link.path"
                class="mobile-menu-item"
                :style="`animation-delay: ${index * 0.05}s`"
              >
                <NuxtLink
                  :to="link.path"
                  class="mobile-menu-link"
                  @click="isMenuOpen = false"
                >
                  <span class="mobile-menu-icon">
                    <svg
                      v-if="link.icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <!-- Főoldal ikon -->
                      <template v-if="link.icon === 'home'">
                        <path
                          d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        ></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </template>

                      <!-- Galéria ikon -->
                      <template v-else-if="link.icon === 'image'">
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </template>

                      <!-- Rólunk ikon -->
                      <template v-else-if="link.icon === 'users'">
                        <path
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        ></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </template>

                      <!-- Szolgáltatások ikon -->
                      <template v-else-if="link.icon === 'briefcase'">
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path
                          d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                        ></path>
                      </template>

                      <!-- Kapcsolat ikon -->
                      <template v-else-if="link.icon === 'mail'">
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        ></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </template>

                      <!-- Referenciák ikon -->
                      <template v-else-if="link.icon === 'star'">
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                      </template>

                      <!-- Partnerek ikon -->
                      <template v-else-if="link.icon === 'handshake'">
                        <path d="M11 17.5V17.5"></path>
                        <path
                          d="M5 19.5H2V13.5C2 13.5 7 11.5 9 12.5C11 13.5 13 15.5 15.5 15.5C18 15.5 20 13 22 13.5"
                        ></path>
                        <path
                          d="M2 6.5C2 6.5 7 4.5 9 5.5C11 6.5 13 8.5 15.5 8.5C18 8.5 22 6.5 22 6.5"
                        ></path>
                      </template>

                      <!-- Árajánlatkérés ikon -->
                      <template v-else-if="link.icon === 'file-text'">
                        <path
                          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        ></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </template>
                    </svg>
                  </span>
                  <span class="mobile-menu-text">{{ link.name }}</span>
                  <span class="mobile-menu-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </Transition>

        <!-- Eredeti desktop menü -->
        <nav :class="{ menu: true }" id="menu">
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink
                :to="link.path"
                :class="['menu__item text-color animated-link']"
              >
                <template v-if="link.imagePath">
                  <NuxtImg
                    class="menu__list__li__img"
                    height="100%"
                    :src="link.imagePath"
                    :alt="link.name"
                  />
                </template>
                <template v-else>
                  {{ link.name }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Alap stílusok */
.header {
  position: relative;
  width: 100%;
  z-index: 1000;
}

/* Hamburger gomb - csak 1200px alatt jelenik meg */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
  position: relative;
  bottom: 0;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: #333;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger.open .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Menü overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(3px);
}

/* Mobil menü */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 350px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-menu-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 5px;
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-item {
  border-bottom: 1px solid #f0f0f0;
  animation: slideIn 0.3s forwards;
  opacity: 0;
  transform: translateX(20px);
}

.mobile-menu-link {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.mobile-menu-link:active,
.mobile-menu-link:hover {
  background-color: #f8f8f8;
  transform: translateX(5px);
}

.mobile-menu-icon {
  margin-right: 1rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
}

.mobile-menu-text {
  flex-grow: 1;
}

.mobile-menu-arrow {
  color: #ccc;
}

/* Animációk */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Csak az animált link stílust adjuk hozzá */
.animated-link {
  position: relative;
}

.animated-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 100%;
  background: #000;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease, transform-origin 0s 0.3s;
}

.animated-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.animated-link:not(:hover)::after {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

/* 1200px alatti nézet */
@media (max-width: 1199px) {
  .header-content__nav-box {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .hamburger {
    display: block;
  }

  /* Az eredeti desktop menüd elrejtése mobilon */
  #menu.menu {
    display: none;
  }
}
</style>
