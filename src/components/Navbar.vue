<template>
  <nav class="nav shadow-md fixed top-0 left-0 w-full z-50 text-white mb-5 bg-cyan-400 md:bg-transparent">
    <div class="container mx-auto flex justify-between items-center px-4 py-3">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img :src="logo" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
        <h2 class="text-2xl font-bold">Portfolio</h2>
      </div>

      <!-- Bouton hamburger (mobile) -->
      <button 
        class="md:hidden text-2xl focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <span v-if="!isOpen">☰</span> <!-- hamburger -->
        <span v-else>✕</span> <!-- croix -->
      </button>

      <!-- Liens de navigation -->
      <ul
        class="flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto 
          nav px-6 py-4 md:p-0 shadow-md md:shadow-none 
          transition-all duration-500 ease-in-out bg-cyan-400 md:bg-transparent"
        :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'"
      >
        <li><a href="#home" :class="linkClass('home')" @click="isOpen = false">Accueil</a></li>
        <li><a href="#about" :class="linkClass('about')" @click="isOpen = false">A Propos</a></li>
        <li><a href="#services" :class="linkClass('services')" @click="isOpen = false">Services</a></li>
        <li><a href="#skills" :class="linkClass('skills')" @click="isOpen = false">Compétences</a></li>
        <li><a href="#projects" :class="linkClass('projects')" @click="isOpen = false">Projets</a></li>
        <li><a href="#contact" :class="linkClass('contact')" @click="isOpen = false">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logo from '../assets/images/logo.png'

const isOpen = ref(false)
const activeSection = ref("home") // section par défaut

// Fonction pour appliquer la classe active
const linkClass = (section) => {
  return activeSection.value === section
    ? "border-b-2 border-white transition-all pb-2"
    : "hover:transition-all"
}

onMounted(() => {
  const sections = document.querySelectorAll("section") // Assure-toi que chaque partie de ton site a <section id="...">
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.6 } // déclenche quand 60% de la section est visible
  )

  sections.forEach((section) => observer.observe(section))
})
</script>
