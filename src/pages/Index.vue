<template>
  <Layout>
    <ul>
      <li class="shadow-lg mb-5" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 class="p-6" v-html="node.title"/>
          <g-image :src="node.image"/>
          <div class="p-6">
            <div class="text-grey-200 mb-5" v-html="node.date"/>
            <div class="text-black" v-html="node.description"/>
          </div>
        </router-link>
      </li>
    </ul>
    <Pager
      class="flex justify-between"
      :info="$page.allBlogPost.pageInfo"
      prevLabel="< Newer Posts"
      nextLabel="Older Posts >"
      firstLabel=""
      lastLabel=""
      range=" "
    />
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (perPage: 4, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
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
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style <style scoped>
img {
  width: 100%;
}

.home-links a {
  margin-right: 1rem;
}
</style>
