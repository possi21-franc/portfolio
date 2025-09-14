<template>
  <section class=" py-5 min-h-screen bgs flex items-center md:pt-0" id="contact">
    <div class="container text-white mx-auto px-6 overflow-x-hidden">
      <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center">
        Contactez<span class="span">-Moi</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Card profil -->
        <div class="bg2 text-black rounded-xl shadow-lg overflow-hidden "
                  data-aos="fade-right" data-aos-duration="1500"
>
          <!-- Image en tête -->
          <img
            :src="contrat"
            alt="Profil"
            class="w-full h-48 object-cover"
          />

          <!-- Description -->
          <div class="p-4 text-center md:text-left">
            <p class="text-lg text-white mb-4">
              Je suis disponible pour des missions en freelance ou des opportunités. 
              N'hésitez pas à me contacter via le formulaire ou via les réseaux sociaux.
            </p>

            <!-- Icônes réseaux sociaux -->
            <div class="flex justify-center gap-4 md:justify-start">
              <a
                href="#"
                target="_blank"
                class="bg-green-500 text-white text-2xl p-3 rounded-full hover:bg-green-600 transition w-10 h-10 flex items-center justify-center"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="#"
                target="_blank"
                class="bg-blue-600 text-white text-2xl p-3 rounded-full hover:bg-blue-700 transition w-10 h-10 flex items-center justify-center"
              >
                <i class="fab fa-facebook-f"></i>
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
          </div>
        </div>

        <!-- Formulaire (occupe 2 colonnes sur md+) -->
        <div class="md:col-span-2"
        data-aos="fade-left" data-aos-duration="2000"
        >
          <form @submit.prevent="sendEmail" class="space-y-6">
            <!-- Champs 2 par ligne -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
              v-model="form.nom"
                type="text"
                placeholder="Nom"
                class="w-full px-4 py-3  rounded-lg focus:ring-2 focus:ring-cyan-400 bg2 focus:outline-none placeholder-white text-white"
                required
              />
              <input
              v-model="form.telephone"
                type="tel"
                placeholder="Téléphone"
                class="w-full px-4 py-3  rounded-lg focus:ring-2 focus:ring-cyan-400 bg2 focus:outline-none placeholder-white text-white"
                required
              />
              <input
              v-model="form.email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3  rounded-lg focus:ring-2 focus:ring-cyan-400 bg2 focus:outline-none placeholder-white text-white"
                required
              />
              <input
              v-model="form.sujet"
                type="text"
                placeholder="Sujet"
                class="w-full px-4 py-3  rounded-lg focus:ring-2 focus:ring-cyan-400 bg2 focus:outline-none placeholder-white text-white"
                required
              />
            </div>

            <!-- Message -->
            <textarea
            v-model="form.message"
              rows="6"
              placeholder="Votre message..."
              class="w-full px-4 py-3  rounded-lg focus:ring-2 focus:ring-cyan-400 bg2 focus:outline-none placeholder-white text-white"
              required
            ></textarea>

            <!-- Bouton -->
            <button
              type="submit"
              class="w-full nav text-white py-3 rounded-lg font-semibold hover:bg-cyan-500 transition cursor-pointer"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import contrat from '../assets/images/contrat.jpeg'

import { reactive } from 'vue';
import emailjs from 'emailjs-com';

const form = reactive({
  nom: '',
  telephone: '',
  email: '',
  sujet: '',
  message: ''
});

const resetForm = () => {
  form.nom = '';
  form.telephone = '';
  form.email = '';
  form.sujet = '';
  form.message = '';
};


const sendEmail = () => {
    emailjs.send(
        "service_kdhc2ok",
        "template_pdb2ojf",
        {
            nom:form.nom,
            telephone: form.telephone,
            email:form.email,
            sujet:form.sujet,
            message:form.message
        },
        "KxFyAP1vSxz3tD2ge"
    )
    .then(()=>{
 alert("Message envoyé avec succès ✅") 
 resetForm();
  })
  .catch((error) =>{
     alert("Erreur lors de l'envoi ❌ : " + error.text)
     resetForm();
  } )

}
</script>
