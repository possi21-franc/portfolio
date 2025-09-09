import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)

// Initialise AOS après le montage de l’app
app.mount('#app')

AOS.init({
  duration: 1000,  // durée par défaut (1s)
  once: true,      // animation seulement au premier scroll
})
