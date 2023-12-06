<template>
  <section class="h-screen my-auto overflow-scroll">
    <div class="flex flex-col items-center justify-center px-3 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-2xl font-semibold text-white">
        Création d'un compte
      </a>
      <div
        class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-[#021137d9] border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Créez un compte
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="register">
            <div class="flex justify-center items-center gap-6">
              <a class="btn" onclick="my_modal_2.showModal()">Choisir une image</a>
              <img class="rounded-full w-16 h-16" :src="image" v-if="image !== '' && fileBytes !== null" />
            </div>

            <dialog id="my_modal_2" class="modal">
              <div class="modal-box bg-[#021137d9]">
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Veuillez choisir une image puis la rogner</p>
                <input @change="onFileChange" type="file"
                  class="file-input file-input-bordered file-input-accent ghost w-full max-w-xs mb-2" />
                <cropper ref="cropper" v-if="image != '' && changeImg" :src="image" :stencil-props="{ aspectRatio: 1 / 1 }"
                  :stencil-component="$options.components.CircleStencil" />
                <form method="dialog" class="modal-backdrop">
                  <button class="btn mt-5 btn-outline btn-error btn-sm btn-block">Annuler</button>
                  <button v-if="image != ''" class="btn mt-5 btn-outline btn-success btn-sm btn-block"
                    @click="cropImage">Valider l'image</button>
                </form>
              </div>
            </dialog>

            <div>
              <label for="nom" class="block mb-2 text-sm font-medium text-white">Nom</label>
              <input v-model="nom" name="nom" id="nom"
                class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nom">
            </div>
            <div>
              <label for="prenom" class="block mb-2 text-sm font-medium text-white">Prenom</label>
              <input v-model="prenom" name="prenom" id="prenom"
                class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email">
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Email</label>
              <input v-model="email" type="email" name="email" id="email"
                class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Mot de
                passe</label>
              <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
              class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
              </div>
            <div>
              <label for="password2" class="block mb-2 text-sm font-medium text-white">Confirmation du
                mot de passe</label>
              <input v-model="password2" type="password" name="password2" id="password2" placeholder="••••••••"
              class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
            </div>
            <p v-if="error != ''"> {{ error }} </p>
            <button class="w-full text-center btn btn-outline btn-accent">S'enregistrer</button>
            <p class="text-sm font-light text-gray-400">
              Vous avez déjà un compte ? <router-link :to="{ path: '/login' }"
                class="font-bold hover:underline text-primary-500">Connectez vous</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { uploadImage } from '../queries/uploadImages.js'
import { createUserData } from '../queries/userQueries.js'

import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
export default {
  components: {
    Cropper, CircleStencil
  },
  data() {
    return {
      fileBytes: null,
      nom: '',
      prenom: '',
      image: '',
      email: '',
      password: '',
      password2: '',
      error: '',
      changeImg: true
    };
  },
  methods: {
    async register() {
      if (this.password != this.password2) {
        this.error = "Les mots de passe ne sont pas identiques"
        return;
      }
      if (!this.fileBytes || this.fileBytes == null) {
        this.error = "Veuillez selectionner une image"
        return;
      }
      await this.$userStore.register(this.email, this.password).then(() => {
        uploadImage(this.fileBytes, this.$userStore.getUID()).then(() => {
          createUserData(this.$userStore.getUID(), this.nom, this.prenom, this.$userStore.getUID()).then(() => {
            this.$userStore.updateData()
            this.$router.push('/')
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
      }).catch((err) => {
        console.log(err)
      })
    },

    cropImage() {
      const result = this.$refs.cropper.getResult();
      const canvas = result.canvas;
      canvas.toBlob((blob) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const fileBytes = new Uint8Array(event.target.result);
          // Sauvegarde de l'image croppée sous forme de fileBytes
          this.fileBytes = fileBytes;
          // Affichage de l'image croppée dans la partie du template où vous affichez l'image
          this.image = URL.createObjectURL(new Blob([fileBytes], { type: this.image.type }));
        };
        reader.readAsArrayBuffer(blob);
      }, this.image.type);
      this.changeImg = false
    },

    async onFileChange(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
      this.changeImg = true
    }
  }
};
</script>
  
<style scoped></style>