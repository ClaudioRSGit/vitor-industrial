<template>
  <!-- Título da seção -->
  <div class="place-items-center banner-1" id="services">
    <h3 class="heading3">{{ $t('Services') }}</h3>
  </div>

  <!-- Cards de Serviços -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 banner-1 pb-20 px-4">
    <Card2 
      :title="$t('services.training')" 
      :description="$t('services.training_text')" 
      imageUrl="/src/assets/trainingIco.png" 
    />
    <Card2 
      :title="$t('services.audit')" 
      :description="$t('services.audit_text')" 
      imageUrl="/vitor-industrial/src/assets/auditIco.png"
    />
    <Card2 
      :title="$t('services.development')" 
      :description="$t('services.development_text')" 
      imageUrl="/src/assets/learningIco.png" 
    />
  </div>
</template>

<script>
import Card2 from './Card2.vue';

export default {
  components: {
    Card2,
  },
};
</script>

<style scoped>
/* Garantir que o layout esteja limpo e responsivo */
</style>
