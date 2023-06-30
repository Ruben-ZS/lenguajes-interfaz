module.exports = {

  title: 'Lenguaje de Interfaz',

  description: 'Contenido Digital de la Asignatura Lenguajes de Interfaz',

  themeConfig: {

    nav: [
      /*
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
      */
    ],
    sidebar: [
      '/',
      '/tema01/',
      '/tema02/',
      '/tema03/',
      '/tema04/',
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
