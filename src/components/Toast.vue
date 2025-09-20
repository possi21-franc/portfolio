<template>
  <transition name="fade">
    <div 
      v-if="visible" 
      class="fixed top-5 right-5 bg-black/60 text-white px-4 py-3 rounded-lg shadow-lg z-50"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue"

const visible = ref(false)
const message = ref("")

// Fonction globale pour afficher le toast
const showToast = (msg) => {
  message.value = msg
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, 3000) // le toast disparait après 3s
}

defineExpose({ showToast })
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
