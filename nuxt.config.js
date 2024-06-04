// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/style.css',
    // '~/assets/css/fullpage.min.css',
    // '~/assets/css/swiper-bundle.min.css',
  ],
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  plugins: [
    // { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/vue-toast.js', mode: 'client' },
  ],
  buildModules: [
    "@nuxtjs/svg-sprite",
  ],
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      common: {
        // 'Authorization': `Bearer your_access_token` 
        Accept: 'application/json',
        retry: { retries: 3 },
      }
    }
  },
  router: {
    middleware: 'auth'
  },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
})
