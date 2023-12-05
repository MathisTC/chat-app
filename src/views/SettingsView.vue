<template>
  <div class="hero scroll-possible">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Paramètres</h1>
        <p class="py-6">Vous pouvez ici modifier différents paramètres de votre compte</p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-[#021137d9]">
        <form class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Nom</span>
            </label>
            <input v-model="nom" placeholder="Nom" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Prenom</span>
            </label>
            <input v-model="prenom" placeholder="Prenom" class="input input-bordered" required />
          </div>

          <div class="flex justify-center pt-2">
          <img onclick="my_modal_2.showModal()" class="rounded-full w-16 h-16" :src="image" v-if="image !== ''"/>
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

          <div class="form-control mt-6">
            <button class="btn">Sauvegarder</button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
      uid: '',
      prenom: '',
      nom: '',
      image: '',
      changeImg: false
    }
  },
  methods: {
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
  },

  async mounted() {
    this.uid = this.$userStore.getUID()
    this.prenom = this.$userStore.getUserPrenom()
    this.nom = this.$userStore.getUserNom()
    this.image = this.$userStore.getUserImage()
  }
}
</script>

<style scoped></style>