<template>
  <section class="pt-24 pb-5 min-h-screen bg2 flex items-center md:pt-0" id="projects">
    <div class="container text-center text-white mx-auto px-6">
      <h1 class="text-3xl md:text-5xl font-bold mb-12 sm:text-3xl">
        <span class="span">Mes</span> Différents Projets
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Boucle sur les projets -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="relative group h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
          data-aos="zoom-in"
          data-aos-duration="1500"
          @click="toggleActive(index)"
        >
          <!-- Image de fond -->
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />

          <!-- Overlay dégradé -->
          <div
            :class="[
              'absolute inset-0 bg-gradient-to-t from-cyan-400 via-black/90 to-transparent transition duration-500 flex flex-col justify-end p-4 items-center text-center',
              activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            ]"
          >
            <h2 class="text-xl font-bold mb-3">{{ project.title }}</h2>
            <p class="text-sm mb-3">{{ project.description }}</p>

            <!-- Icône lien -->
            <a
              :href="project.link"
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

<script setup>
import { ref } from "vue"
import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'


// Liste des projets
const projects = ref([
  {
    title: "Site e-commerce statique",
    description: "Création d'un site e-commerce statique dans le but d'approfondir mes compétences en développement front-end",
    image:project1,
    link: "https://e-commerce-two-sand-44.vercel.app/"
  },
  {
    title: "Weather App",
    description: "Création d'une application qui fournit la météo en temps réel d'une ville recherchée",
    image: project2,
    link: "https://weather-app-b4pz.vercel.app/"
  },
  {
    title: "Pokedex App",
    description: "Création d'une application qui fournit tous les pokémons existants grâce à une API avec recherche.",
    image: project3,
    link: "https://mpokedex.vercel.app/"
  }
])

// Gestion de la carte active (mobile)
const activeCard = ref(null)

const toggleActive = (index) => {
  activeCard.value = activeCard.value === index ? null : index
}
</script>



<style>

</style>

