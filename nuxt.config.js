export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ibook',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The ibook' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'text/plain', href: 'https://unpkg.com/swiper/swiper-bundle.css'},
      { rel: 'text/plain', href: 'https://unpkg.com/swiper/swiper-bundle.min.css'}
    ],
    script: [
      { src: 'https://unpkg.com/swiper/swiper-bundle.js', defer: true },
      { src: 'https://unpkg.com/swiper/swiper-bundle.min.js', defer: true },
    ],
  },


  css: [
    'normalize.css/normalize.css', 
    '@/assets/scss/base.scss', 
    'swiper/swiper-bundle.css',
  ],
  
 
  plugins: [
    '@/plugins/accessor', 
    '@/plugins/swiper',
  ],


  components: [{ path: '@/components', pathPrefix: false}],

  buildModules: [
    '@nuxt/typescript-build',    
  ],


  modules: [
    '@nuxtjs/style-resources',  
    '@nuxtjs/axios',
    
    
  ],
  
  styleResources: {
    scss: ['@/components/bosons/*.scss'],
  },

  axios: {
    baseURL: 'https://ibook-api.herokuapp.com'
  },

  build: {
    extractCSS: true
  },
}
