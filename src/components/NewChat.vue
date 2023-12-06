<template>
  <button onclick="my_modal_3.showModal()" class="mx-5 btn w-[90%] text-center btn-outline btn-info">Ajouter un nouveau
    groupe</button>

  <dialog id="my_modal_3" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-[#021137d9]">
      <h2 class="font-bold text-lg text-center">Ajouter un groupe</h2>

      <div class="mb-4 flex flex-col gap-4">
        <div>
          <label for="titre" class="block mb-2 text-sm font-medium text-white">Titre</label>
          <input v-model="titre" name="titre" id="titre"
            class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Titre">
        </div>
        <div>
          <label for="description" class="block mb-2 text-sm font-medium text-white">Description</label>
          <input v-model="description" name="description" id="description"
            class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Description">
        </div>
      </div>
      <div class="flex justify-center py-2">
        <img ref="myImage" class="rounded-full w-16 h-16" :src="image" v-if="image !== ''" />
        <input @change="onFileChange" type="file"
        class="file-input file-input-bordered file-input-accent ghost max-w-xs mb-2" />
      </div>
      
      <cropper ref="cropper" v-if="image != '' && changeImg" :src="image" :stencil-props="{ aspectRatio: 1 / 1 }"
        :stencil-component="$options.components.CircleStencil" />

        <p v-if="error != ''"> {{ error }} </p>

      <form v-if="changeImg">
        <button class="btn mt-5 btn-outline btn-error btn-sm btn-block">Annuler</button>
        <button v-if="image != ''" class="btn mt-5 btn-outline btn-success btn-sm btn-block"
          @click="cropImage">Valider</button>
      </form>
      <form v-else method="dialog" class="modal-backdrop">
        <button class="btn mt-5 btn-outline btn-error btn-sm btn-block">Annuler</button>
        <button class="btn mt-5 btn-outline btn-success btn-sm btn-block"
          @click="createGroup">Valider</button>
      </form>
    </div>
  </dialog>
</template>

<script>
import { createGroup } from '../queries/groupQueries.js'

import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
export default {
  emits: ['newGroup'],
  components: {
    Cropper, CircleStencil
  },
  data() {
    return {
      uid: '',
      titre: '',
      description: '',
      image: '',
      changeImg: false,
      fileBytes: null,
      saved: false,
      error: ''
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
    },
    async createGroup() {
      if (!this.titre || !this.description || !this.fileBytes) {
        this.error = 'Un champ est manquant'
        return
      }
      await createGroup(this.$userStore.getUID(), this.titre, this.description, this.fileBytes).then(() => {
        this.$emit('newGroup')
      })
    }
  },
  async mounted() {
  }
}
</script>

<style scoped></style>