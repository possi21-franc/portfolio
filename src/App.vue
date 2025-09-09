<template>

  <Navbar></Navbar>

  <Hero></Hero>
  <About></About>
  <Services></Services>
  <Skils></Skils>


</template>


<script setup>

import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Skils from './components/Skils.vue';
import Project from './components/Project.vue';
import Footer from './components/Footer.vue';
import ContactForm from './components/ContactForm.vue';


import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";


onMounted(() => {
  AOS.init({
    duration: 1000, // durée par défaut en ms
    once: false, // animation déclenchée une seule fois
    mirror:true,
    easing: "ease-in-out", // easing par défaut
  });
});
</script>