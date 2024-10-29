<template>
  <div class="flex flex-col md:flex-row items-center pb-20 space-y-8 md:space-y-0">
    
    <div class="w-full md:w-7/12 md:space-y-10 flex flex-col items-center md:items-start text-center md:text-left px-4">
      <h1 class="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-Eczar font-bold leading-tight text-gray-100">
        <h2>{{ $t('greeting') }}</h2>
        <br />
        <span class="heading3">
          <h2 id="developerRole"><span class="inputClaudio">Serviços de {{ currentText }}</span></h2>
        </span>
      </h1>

      <div class="hidden md:flex flex-col md:flex-row gap-4">
        <button class="heading5 bg-gray-800 submit-button md:block">
          <a href="#about">
            {{ $t('about') }}
            &nbsp;
            <i class="fa-solid fa-user"></i>
          </a>
        </button>
        <a href="https://www.linkedin.com/in/v%C3%ADtor-silva" target="_blank">
          <button class="heading5 border-4 border-gray-800 submit-button mb-5 md:mb-0 text-base">
            {{ $t('contact') }}
            &nbsp; <i class="fa-brands fa-linkedin h-5"></i>
          </button>
        </a>
      </div>

    </div>

    <div class="w-full md:w-5/12 flex justify-center md:justify-end">
      <img
        class="imgShadow w-8/12 md:w-auto" 
        src="../assets/hi.png"
        alt="user image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: ["Consultoria", "Formação", "Desenvolvimento Técnico"],
      names: ["Olá! Sou o ", "Hey! I'm "],
      currentText: "",
      currentTextName: "",
      roleIndex: 0,
      nameIndex: 0,
      charIndex: 0,
      typingSpeed: 100,
      pauseBetweenRoles: 2000,
    };
  },
  mounted() {
    this.typeRole();
  },
  methods: {
    typeRole() {
      const role = this.roles[this.roleIndex];
      const name = this.names[this.nameIndex];

      if (this.charIndex < role.length || this.charIndex < name.length) {
        if (this.charIndex < role.length) {
          this.currentText += role.charAt(this.charIndex);
        }
        if (this.charIndex < name.length) {
          this.currentTextName += name.charAt(this.charIndex);
        }
        this.charIndex++;
        setTimeout(this.typeRole, this.typingSpeed);
      } else {
        setTimeout(this.clearText, this.pauseBetweenRoles);
      }
    },
    clearText() {
      if (this.charIndex > 0) {
        this.currentText = this.currentText.slice(0, -1);
        this.currentTextName = this.currentTextName.slice(0, -1);
        this.charIndex--;
        setTimeout(this.clearText, this.typingSpeed / 2);
      } else {
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.nameIndex = (this.nameIndex + 1) % this.names.length;
        setTimeout(this.typeRole, this.typingSpeed);
      }
    },
  },
};
</script>

<style scoped>
</style>
