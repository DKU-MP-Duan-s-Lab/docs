import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Duan's Lab",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'First Time Using the Server', link: '/fitst-time-using-server' }
    ],

    sidebar: [
      {
        text: 'First Time Using the Server',
        link: '/fitst-time-using-server'
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
