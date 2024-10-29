<template>
  <div class="banner-2 place-items-center pb-5" id="work">
    <!-- Card com imagem à esquerda em desktop e redondo no mobile -->
    <div class="card flex flex-col md:flex-row" v-if="imagePosition == 'left'">
      <!-- <div :class="['card-image', 'w-full', isMobile ? 'rounded-2xl' : 'md:rounded-l-2xl md:w-1/2']" v-if="imageUrl"> -->
      <div :class="['card-image', 'w-full', isMobile ? 'text-justify rounded-2xl' : imagePosition === 'left' ? 'rounded-l-2xl' : 'rounded-r-2xl']" v-if="imageUrl">
        <img class="object-cover w-full h-full rounded-2xl" :src="imageUrl" />
        <!-- <img class="object-cover w-full h-full" :src="imageUrl" /> -->
      </div>
      <div :class="['px-6', 'space-y-5', isMobile ? 'text-justify' : 'px-8 md:px-20 md:w-1/2']">
        <h4 class="project-title">{{ title }}</h4>
        <p class="font-work_sans pr-12">{{ description }}</p>
        <button
          @click="downloadPdf"
          class="text-sky-800 font-bold text-2xl tracking-wider"
        >
          Download PDF
        </button>
      </div>
    </div>

    <!-- Card com imagem à direita em desktop e redondo no mobile -->
    <div class="card flex flex-col md:flex-row" v-if="imagePosition == 'right'">
      <div :class="['px-6', 'space-y-5', isMobile ? 'text-justify' : 'px-8 md:px-20 md:w-1/2']">
        <h4 class="project-title">{{ title }}</h4>
        <p class="font-work_sans pr-12">{{ description }}</p>
        <button
          @click="downloadPdf"
          class="text-sky-800 font-bold text-2xl tracking-wider"
        >
          Download PDF
        </button>
      </div>
      <div :class="['card-image', 'w-full', isMobile ? 'rounded-2xl' : 'md:rounded-r-2xl md:w-1/2']" v-if="imageUrl">
        <img class="object-cover w-full h-full rounded-2xl" :src="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pdfName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imagePosition: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMobile: window.innerWidth < 760,
    };
  },
  methods: {
    downloadPdf() {
      const pdfUrl = `../media/${this.pdfName}`;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = this.pdfName;
      link.click();
    },
    handleResize() {
      this.isMobile = window.innerWidth < 760;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
/* Mantém o estilo de desktop */
.card {
  @apply bg-white shadow-md my-6 p-4 md:flex rounded-2xl;
}
.card-image img {
  object-fit: cover;
}
.project-title {
  @apply text-gray-700 text-3xl md:text-4xl font-work_sans tracking-wide font-bold;
}
</style>
