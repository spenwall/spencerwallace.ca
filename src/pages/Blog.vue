<template>
  <Layout>
      <ul>
        <li class="shadow p-6 mb-5" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
          <router-link :to="node.path">
            <h2 v-html="node.title"/>
            <g-image :src="node.image"/>
            <div class="text-grey-200 mb-5" v-html="node.date"/>
            <div class="text-black" v-html="node.description"/>
          </router-link>
        </li>
      </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
          image
        }
      }
    }
  }
</page-query>

<script>
import Layout from '~/layouts/Blog.vue'

export default {
  components: {
    Layout
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
