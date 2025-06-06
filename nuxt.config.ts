// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/app.scss'],
  ssr: true,

  app: {
    head: {
      title:
        'Bola 95 Kft. – Aszfaltozás | Útépítés | Betonozás | 25 éves tapasztalat',
      htmlAttrs: {
        lang: 'hu',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Korszerű gépparkunknak és tapasztalt szakembereinknek köszönhetően bármilyen méretű aszfaltozási, útépítési vagy betonozási projektet rövid határidőn belül, költséghatékonyan és tartós megoldással kivitelezünk.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.alkuszom.info' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    [
      'nuxt-mail',
      {
        message: {
          to: 'web@alkuszom.info',
        },
        smtp: {
          host: 's56.tarhely.com',
          port: 587,
          auth: {
            user: 'web@alkuszom.info',
            pass: '#+SpM_HR~QCy',
          },
        },
      },
    ],
  ],

  site: {
    url: 'https://www.alkuszom.info',
    trailingSlash: true,
  },

  compatibilityDate: '2025-01-21',
})
