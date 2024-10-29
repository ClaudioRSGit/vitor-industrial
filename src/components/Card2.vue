<template>
  <article class="rounded-2xl border-font-color p-4 shadow-md flex flex-col h-full">
    <div class="flex items-center gap-4">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        class="w-14 h-14 object-cover"
      />
      <div>
        <h3 class="text-lg font-medium text-white">{{ title }}</h3>
      </div>
    </div>

    <ul class="mt-4 space-y-10">
      <p class="mt-4 text-white tracking-wide text-lg font-Eczar">
        {{ description }}
      </p>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title',
    },
    description: {
      type: String,
      required: true,
      default: 'Description',
    },
    imageUrl: {
      type: String,
      required: true,
      default: '/src/assets/trainingIco.png',
    },
  },
};
</script>

<style scoped>
</style>
