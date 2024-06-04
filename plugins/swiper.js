// plugins/swiper.js
import { defineNuxtPlugin } from '#app'
import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules';
export default defineNuxtPlugin(nuxtApp => {
    Swiper.use([Navigation, Pagination])
    nuxtApp.provide('swiper', Swiper)
})
