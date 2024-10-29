<template>
  <!-- 
    TO-DO
    - Testimonials
    - Versao mobile
    -->
    <NavBar />
    <div class="banner-1">
      <Banner />
    </div>
    <div class="place-items-center about">
      <h3 class="heading3 pb-8"  id="about">{{ $t('about') }}</h3>
      <About />
    </div>
    
    <Services />
    
    <div class="place-items-center banner-2">
      <h3 class="heading4 text-center" id="work">{{ $t('publications') }}</h3>
  </div>
    <Card
      title="Tomada de decisão"
      description="A tomada de decisão assume um papel central..."
      pdfName="Apresentação Tomada decisão na manuteção industrial.pdf"
      imageUrl="/src/assets/tomadadecisao.png"
      imagePosition="left"
    />
    <Card
        title="Gestão da Manutenção Industrial"
        description="A manutenção industrial consiste na manutenção corretiva..."
        pdfName="00_Gestão da Manutenção Industrial.pdf"
        imageUrl="/src/assets/gestaoManutencao.png"
        imagePosition="right"
    />
    <transition name="fade">
      <div class="grid-container" v-if="showMore">
        <Card
          title="Tomada de decisão"
          description="A tomada de decisão assume um papel central..."
          pdfName="Apresentação Tomada decisão na manuteção industrial.pdf"
          imageUrl="/src/assets/tomadadecisao.png"
          imagePosition="left"
        />

        <Card
            title="Gestão da Manutenção Industrial"
            description="A manutenção industrial consiste na manutenção corretiva..."
            pdfName="00_Gestão da Manutenção Industrial.pdf"
            imageUrl="/src/assets/gestaoManutencao.png"
            imagePosition="right"
        />
      </div>
    </transition>
    <div class="text-center readMore">
      <a @click="toggleShowMore" class="">
        {{ showMore ? 'Ver menos' : 'Ver mais' }}
      </a>
    </div>


  <!-- <Testimonial /> -->
  <Footer />
  
</template>
<script>

import NavBar from './components/NavBar.vue';
import Banner from './components/Banner.vue';
import Card from './components/Card.vue';
import Testimonial from './components/Testimonial.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';

export default {
  data() {
    return {
      showMenu: false,
      showMore: false,
    }
  },
  components: {
    NavBar,
    Banner,
    Card,
    Testimonial,
    Footer,
    About,
    Services,
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}</style>