<template>
    <section class="h-screen my-auto">
        <div class="flex flex-col items-center justify-center px-3 py-8 mx-auto md:h-screen lg:py-0">
            <a class="flex items-center mb-6 text-2xl font-semibold text-white">
                Connexion
            </a>
            <div
                class="w-full mt-32 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Connectez vous à votre compte
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="login">
                        <div>
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-white">Email</label>
                            <input v-model="email" type="email" name="email" id="email"
                                class="bordersm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Email" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-white">Mot
                                de passe</label>
                            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                                class="border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                required="">
                        </div>

                        <button class="w-full text-center btn btn-outline btn-accent">Se connecter</button>
                        <p class="text-sm font-light text-gray-400">
                            Vous n'avez pas de compte ? <router-link :to="{ path: '/register' }"
                                class="font-bold hover:underline text-primary-500">Enregistrez
                                vous</router-link>
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
            password: ''
        };
    },
    methods: {
        async login() {
            await this.$userStore.login(this.email, this.password).then(() => {
                this.$router.push('/')
            }).catch((err) => {
                console.log(err)
            })
        },
}
};
</script>

<style scoped>
</style>