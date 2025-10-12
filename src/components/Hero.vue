<template>
  <section class="pt-24 pb-8 min-h-screen bgs flex items-center md:pt-0" id="home">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 justify-center items-center text-center md:text-left"
  >
      <!-- Colonne gauche : texte -->
      <div class="flex flex-col justify-center text-white" data-aos="fade-right" data-aos-duration="1000">
        <p class="text-lg text-white mb-3">Bienvenu dans mon monde ! </p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Possie Franc Loic
        </h1>
        <h3 class="text-2xl md:text-3xl font-bold mb-4">
          Je suis <span class="span">Développeur junior </span>
        </h3>
        <p class="text-lg mb-6">
          Développeur Junior passionné et autodidacte, je transforme les idées en expériences numériques intuitives et performantes.
        </p>


        <div class="flex items-center gap-4 mb-5 justify-center md:justify-start">
  <!-- Icones sociales -->
  <a href="https://wa.me/+237652607242" target="_blank" 
     class="bg-green-500 text-white text-2xl hover:bg-green-600 transition rounded-full flex items-center justify-center h-10 w-10">
    <i class="fab fa-whatsapp"></i>
  </a>
  
  <a href="#home" target="_blank" 
     class="bg-blue-600 text-white text-2xl hover:bg-blue-700 transition rounded-full flex items-center justify-center h-10 w-10">
    <i class="fab fa-facebook"></i>
  </a>
  
  <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=francpossi462@gmail.com" 
               target="_blank" 
               rel="noopener noreferrer"
                class="bg-blue-500 text-white text-2xl p-3 rounded-full hover:bg-blue-600 transition w-10 h-10 flex items-center justify-center"
              >
                <i class="fa-regular fa-envelope"></i>
              </a>
  
  
</div>

<div>
<a href="#contact" 
  >
    <button class="btn1  py-3 text-lg text-white rounded-lg outline-none animate-pulse">
        <i class="fa-solid fa-paper-plane text-xl mr-1"></i>
         Me Contacter
    </button>
  </a></div>


      </div>

      <!-- Colonne droite : image -->
       <div class="flex justify-center items-center mt-10 " data-aos="fade-left" data-aos-duration="1200">
    <!-- Conteneur relatif -->
    <div class="relative w-100 h-100 rounded-full flex justify-center items-center">
      
      <!-- Cercle flou avec dégradé -->
      <div class="absolute w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-400 opacity-100 blur-md"></div>
      
      <!-- Photo nette au-dessus -->
      <img 
        :src="profil" 
        alt="Profil" 
        class="relative w-90 h-90 rounded-full object-cover "
      />
    </div>
  </div>


    </div>
  </section>
</template>


<style>

</style>


<script setup>
import profil from '../assets/images/profil.png'

</script>