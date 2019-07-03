const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind('./tailwind.config.js'),
]

module.exports = {
  siteName: 'Spencer Wallace',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug',
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-140380361-1'
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{ removeViewBox: false }]
        }
      })
    }
}
