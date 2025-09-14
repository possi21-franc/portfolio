<template>
  <nav class="fixed top-0 left-0 w-full z-50  md: bg-transparent backdrop-blur-md shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img :src="logo" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
        <span class="text-xl font-bold text-white">Portfolio</span>
      </div>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8 text-white">
        <li><a href="#home" :class="linkClass('home')">Accueil</a></li>
        <li><a href="#about" :class="linkClass('about')">À propos</a></li>
        <li><a href="#services" :class="linkClass('services')">Services</a></li>
        <li><a href="#skills" :class="linkClass('skills')">Compétences</a></li>
        <li><a href="#projects" :class="linkClass('projects')">Projets</a></li>
        <li><a href="#contact" :class="linkClass('contact')">Contact</a></li>
      </ul>

      <!-- Mobile hamburger -->
      <button class="md:hidden text-3xl text-white" @click="toggleMenu">
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <ul
        v-if="isOpen"
        class="flex flex-col px-4 text-start gap-6 py-6 bg-cyan-500 text-white md:hidden"
      >
        <li><a href="#home" @click="closeMenu">Accueil</a></li>
        <li><a href="#about" @click="closeMenu">À propos</a></li>
        <li><a href="#services" @click="closeMenu">Services</a></li>
        <li><a href="#skills" @click="closeMenu">Compétences</a></li>
        <li><a href="#projects" @click="closeMenu">Projets</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/images/logo.png'

const isOpen = ref(false)
const activeSection = ref("home")

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

// Fermer le menu automatiquement si on scroll
const handleScroll = () => {
  if (isOpen.value) {
    closeMenu()
  }
}

// Observer la section active (scrollspy)
const linkClass = (section) => {
  return activeSection.value === section
    ? "border-b-2 border-white pb-2"
    : "hover:opacity-80"
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)

  // ScrollSpy
  const sections = document.querySelectorAll("section[id]")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.6 }
  )
  sections.forEach((s) => observer.observe(s))

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
    sections.forEach((s) => observer.unobserve(s))
  })
})
</script>

<style>
/* Transition menu mobile */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Scroll fluide entre sections */
html {
  scroll-behavior: smooth;
}
</style>
