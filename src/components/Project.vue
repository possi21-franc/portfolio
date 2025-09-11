<template>
  <section class="pt-24 min-h-screen bg2 flex items-center md:pt-0" id="projects">
    <div class="container text-center text-white mx-auto px-6">
      <h1 class="text-3xl md:text-5xl font-bold mb-12 sm:text-3xl">
        <span class="span">Mes</span> Différents Projets
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Project Card -->
        <div
          class="relative group h-80 rounded-xl overflow-hidden shadow-lg"
          data-aos="zoom-in" data-aos-duration="1500"
        >
          <!-- Image de fond -->
          <img
            :src="project1"
            alt="Projet"
            class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />

          <!-- Overlay dégradé -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-cyan-400 via-black/90 to-transparent 
                   opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col 
                   justify-end p-4 text-center items-center "
          >
            <h2 class="text-xl font-bold mb-3">Site e-commerce statique</h2>
            <p class="text-sm mb-3">Création d'un site e-commerce statique dans le but d'approfondir mes compétences en développement front-end</p>

            <!-- Icône lien -->
            <a
              href="https://e-commerce-two-sand-44.vercel.app/"
              target="_blank"
              class="inline-block bg-white text-black rounded-full p-2 hover:bg-cyan-400 hover:text-white transition w-10 h-10  items-center justify-center"
            >
              <i class="fas fa-link"></i>
            </a>
          </div>
        </div>
        <div
          class="relative group h-80 rounded-xl overflow-hidden shadow-lg"
          data-aos="zoom-in-up" data-aos-duration="2000"
        >
          <!-- Image de fond -->
          <img
            :src="project2"
            alt="Projet"
            class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />

          <!-- Overlay dégradé -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-cyan-400 via-black/90 to-transparent 
                   opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col 
                   justify-end p-4 items-center"
          >
            <h2 class="text-xl font-bold mb-3">Weather App</h2>
            <p class="text-sm mb-3">Création d'un application qui nous fourni la metéo en temps reèl d'une ville recherchée</p>

            <!-- Icône lien -->
            <a
              href="https://weather-app-b4pz.vercel.app/"
              target="_blank"
              class="inline-block bg-white text-black rounded-full p-2 hover:bg-cyan-400 hover:text-white transition h-10 w-10"
            >
              <i class="fas fa-link"></i>
            </a>
          </div>
        </div>
        <div
          class="relative group h-80 rounded-xl overflow-hidden shadow-lg"
          data-aos="zoom-in-down" data-aos-duration="2500"
        >
          <!-- Image de fond -->
          <img
            :src="project3"
            alt="Projet"
            class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />

          <!-- Overlay dégradé -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-cyan-400 via-black/90 to-transparent 
                   opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col 
                   justify-end p-4 items-center"
          >
            <h2 class="text-xl font-bold mb-3">Pokedex App</h2>
            <p class="text-sm mb-3">Création d'une application qui nous fournis tous les pokémons existant grâce à une API avec la possibilité de rechercher un pokémon.</p>

            <!-- Icône lien -->
            <a
              href="https://mpokedex.vercel.app/"
              target="_blank"
              class="inline-block bg-white text-black rounded-full p-2 hover:bg-cyan-400 hover:text-white transition h-10 w-10"
            >
              <i class="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style>

</style>


<script setup>
import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'
</script>