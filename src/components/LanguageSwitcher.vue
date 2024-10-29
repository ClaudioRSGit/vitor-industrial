<template>
  <div class="language-switcher flex gap-2 pl-8">
    <img
      v-if="locale === 'en'"
            src="/src/assets/pt-flag.png"
      alt="US Flag"
      @click="changeLanguage('pt')"
      class="w-10 h-6 rounded"
    />
    <img
      v-if="locale === 'pt'"
      src="/src/assets/us-flag.png"
      alt="Portuguese Flag"
      @click="changeLanguage('en')"
      class="w-10 h-6 rounded"
    />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();

    locale.value = 'pt';

    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    return { changeLanguage, locale };
  },
};
</script>

<style>
.language-switcher img {
  cursor: pointer;
}
</style>
