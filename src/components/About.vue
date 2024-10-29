<template>
  <div class="flex flex-col md:flex-row items-center pb-20 px-5">
    <!-- Texto sobre -->
    <div class="md:w-7/12 w-full pb-8 md:pb-20">
      <h1
        class="text-2xl font-Eczar font-bold leading-loose tracking-wide text-gray-700 text-justify md:mr-10 about-text"
      >
        <p> {{ $t('about_text') }}</p>
      </h1>
    </div>

    <!-- Imagem sobre -->
    <div class="md:w-5/12 w-full flex justify-center md:justify-end mb-10 md:mb-20">
      <img src="../assets/vitorPic.png" alt="About Image" class="w-8/12 md:w-full">
    </div>
  </div>

  <!-- Seção de Carreira -->
  <div class="flex flex-col items-center pb-20">
    <h1 class="text-2xl font-Eczar font-bold leading-loose tracking-wide text-gray-700 text-center pb-10">
      <p>{{ $t('career_text') }}</p>
    </h1>
    <img src="/src/assets/careerPathHorizontal.png" alt="Career Path" class="w-full md:w-max mt-4 px-2 md:px-10">
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
