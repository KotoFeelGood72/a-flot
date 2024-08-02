// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/fullpage.min.css',
    //'~/assets/css/style.css',
    '~/assets/css/style_demo.css',
    '~/assets/css/ed_style.css',
    // '~/assets/css/swiper-bundle.min.css',
  ],
  script: [
    {
      src: '~/assets/js/mobile-menu.js'
    },
    {
      src: '~/assets/js/main.js'
    },
    {
      src: 'https://unpkg.com/vue-fullpage.js/dist/vue-fullpage.es.js',
      type: 'module',
      body: true
    },
  ],
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@pinia-plugin-persistedstate/nuxt',
    '@fullpage/nuxt-fullpage'
  ],
  plugins: [
    // { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/vue-toast.js', mode: 'client' },
    //{ src: '~/plugins/fullpage.min.js', mode: 'client' },
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
  render: { csp: false }
})
