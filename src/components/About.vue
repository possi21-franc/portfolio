<template>
  <section class="pt-24 pb-5 min-h-screen bg2 flex items-center" id="about">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pr-20 justify-center items-center text-center md:text-left"
    >
      <!-- Colonne droite : image -->
      <div
        class="flex justify-center items-center mt-10 order-2 md:order-1"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <!-- Conteneur relatif -->
        <div class="relative w-90 h-80 flex justify-center items-center">
          <!-- Glow (halo flou autour du cercle) -->
          <div
            class="absolute inset-0 rounded-full p-[15px] bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500 blur-xs opacity-100"
          >
            <div class="w-full h-full rounded-full bg2"></div>
          </div>

          <!-- Photo qui dépasse du cercle -->
          <img
            :src="profil"
            alt="Profil"
            class="absolute -top-18 -right-0 w-90 h-95 rounded-full object-cover"
          />
        </div>
      </div>

      <!-- Colonne gauche : texte -->
      <div
        class="flex flex-col justify-center text-white order-1 md:order-2 p-4"
        data-aos="fade-up-left"
        data-aos-duration="1200"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          A Propos <span class="span">de Moi</span>
        </h1>

        <p class="text-lg mb-6 text-justify">
          Développeur web curieux et proactif, j'explore constamment de
          nouvelles pistes pour perfectionner mes compétences. Toujours avide
          d'apprendre les dernières technologies, je mets ma créativité et ma
          rigueur au service de projets innovants. Mon objectif : allier
          esthétique, performance et accessibilité pour chaque projet.
        </p>

        <div>
          <a href="/LoicDev.pdf " target="_blank" rel="noopener noreferrer">
            <button class="btn px-6 py-3 text-white rounded-lg outline-none">
              <i class="fa-solid fa-download text-xl mr-1"></i>
              Mon CV
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>

<script setup>
import profil from "../assets/images/profil.png";
</script>
