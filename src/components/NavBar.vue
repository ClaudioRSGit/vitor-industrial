<template>
  <nav class="container px-6 mx-auto flex justify-between items-center relative banner-1">
    <!-- Logo -->
    <div class="flex items-center">
      <img
        src="../assets/VitorSilvaLogoSmYellow.png"
        alt="user image"
        class="h-16"
      />
    </div>

    <!-- Icone de Hambúrguer -->
    <button
      @click="toggleMenu"
      class="md:hidden text-gray-700 focus:outline-none"
    >
      <svg
        v-if="!showMenu"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-if="showMenu"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu Links e Language Switcher -->
    <div class="hidden md:flex md:items-center md:space-x-10">
      <ul
        class="md:flex md:flex-row md:items-center md:space-x-10 text-center"
      >
        <li class="menu-button"><a href="#about" v-smooth-scroll>{{ $t('nav.about') }}</a></li>
        <li class="menu-button"><a href="#services" v-smooth-scroll>{{ $t('nav.services') }}</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>{{ $t('nav.publications') }}</a></li>
        <!-- <li class="menu-button"><a href="#testimonial" v-smooth-scroll>{{ $t('nav.testimonial') }}</a></li> -->
        <li class="menu-button"><a href="#contacts" v-smooth-scroll>{{ $t('nav.contact') }}</a></li>
      </ul>
      <!-- Language Switcher (visível em todas as telas) -->
      <div>
        <LanguageSwitcher />
      </div>
    </div>

    <!-- Dropdown Menu (em telas pequenas) -->
    <div
      :class="showMenu ? 'block' : 'hidden'"
      class="absolute top-20 right-0 w-full shadow-md md:hidden z-10 bg-inherit"
    >
      <ul class="flex flex-col items-end space-y-4 py-4 pr-6">
        <li class="menu-button"><a href="#about" v-smooth-scroll>{{ $t('nav.about') }}</a></li>
        <li class="menu-button"><a href="#services" v-smooth-scroll>{{ $t('nav.services') }}</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>{{ $t('nav.publications') }}</a></li>
        <!-- <li class="menu-button"><a href="#testimonial" v-smooth-scroll>{{ $t('nav.testimonial') }}</a></li> -->
        <li class="menu-button"><a href="#contacts" v-smooth-scroll>{{ $t('nav.contact') }}</a></li>
      </ul>
      <!-- Language Switcher no dropdown mobile -->
      <div class="flex justify-end pr-6 pb-4">
        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    LanguageSwitcher,
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.menu-button {
  @apply text-lg font-bold font-work_sans text-gray-700 hover:text-black;
}

/* Responsividade para a lista */
@media (min-width: 768px) {
  .menu-button {
    @apply block;
  }
}
</style>
<style scoped>
.menu-button {
  @apply text-lg font-bold font-work_sans text-gray-700 hover:text-black;
}

/* Transição para o dropdown */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 0.3s ease-out;
}
.dropdown-enter,
.dropdown-leave-to {
  max-height: 0;
  overflow: hidden;
}
.dropdown-enter-to {
  max-height: 500px; /* Ajuste para a altura total esperada do menu */
}
</style>