<template>
  <Layout>
    <div class="article">
      <h1 class="text-green">{{ $page.blogPost.title }}</h1>
      <span>{{ $page.blogPost.date }}</span>
      <g-image :src="$page.blogPost.image"/>
      <div v-if="$page.blogPost.credit" class="credit text-gray-500">{{ $page.blogPost.credit }}</div>
      <div class="content" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Blog.vue'

export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
      credit
    }
  }
</page-query>

<style>
  /* .header {
    margin-bottom: 70px;
  } */

  .article {
    margin-top: 15px;
  }

  .article h1 {
    font-size: 40px;
  }

  .article a {
    color: #4dba87;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ol {
    list-style-type: decimal;
    padding-left: 20px;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.7;
  }
</style>
