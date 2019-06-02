<template>
  <Layout>
    <div>
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Resume />
    </div>
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
import { Pager } from "gridsome"
import About from "~/components/section/About.vue"
import Projects from "~/components/section/Projects.vue"
import Experience from "~/components/section/Experience.vue"
import Skills from "~/components/section/Skills.vue"
import Education from "~/components/section/Education.vue"
import Contact from "~/components/section/Contact.vue"
import Resume from "~/components/section/Resume.vue"

export default {
  components: {
    Pager,
    About,
    Projects,
    Experience,
    Skills,
    Education,
    Contact,
    Resume,
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
