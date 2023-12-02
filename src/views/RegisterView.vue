<template>
  <section class="h-screen my-auto bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-3 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Enregistrement
      </a>
      <div
        class="w-full mt-28 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Créez un compte
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="register">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input v-model="email" type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email" required="">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de
                passe</label>
              <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="">
            </div>
            <div>
              <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmation du
                mot de
                passe</label>
              <input v-model="password2" type="password" name="password2" id="password2" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="">
            </div>
            <p v-if="error != ''"> {{ error }} </p>
            <button class="w-full text-center btn btn-outline btn-accent">S'enregistrer</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Vous avez déjà un compte ? <router-link :to="{ path: '/login' }"
                class="font-bold text-primary-600 hover:underline dark:text-primary-500">Connectez vous</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      password2: '',
      error: ''
    };
  },
  methods: {
    async register() {
      if(this.password != this.password2) {
        this.error = "Les mots de passe ne sont pas identiques"
        return;
      }
      await this.$userStore.register(this.email, this.password).then(() => {
        this.$router.push('/')
      }).catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>
  
<style scoped></style>