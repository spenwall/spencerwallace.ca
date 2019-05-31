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
      use: 'gridsome-plugin-tailwindcss'
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
  }
}
