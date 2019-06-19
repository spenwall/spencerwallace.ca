<template>
  <Layout>
    <div
      class="h-screen flex md:justify-start items-start justify-center bg-center bg-auto bg-75% lg:bg-50% bg-no-repeat"
      style="background-image: url(/svg/undraw_laravel_and_vue.svg)"
    >
      <div class="md:mt-8 md:ml-8 flex justify-center flex-col items-center">
        <transition name="fade">
          <div
            v-if="loaded"
            class="text-4xl md:text-5xl lg:text-6xl text-vue-blue leading-tight"
          >Spencer Wallace</div>
        </transition>
        <transition name="up">
          <div
            v-if="loaded"
            class="text-3xl md:text-4xl lg:text-5xl text-vue-green flex justify-center leading-tight"
          >Full Stack Developer</div>
        </transition>
      </div>
    </div>
    <div>
      <About/>
      <Projects/>
      <Experience/>
      <Tech/>
      <Education/>
      <Contact/>
      <Resume/>
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
import { Pager } from "gridsome";
import About from "~/components/section/About.vue";
import Projects from "~/components/section/Projects.vue";
import Experience from "~/components/section/Experience.vue";
import Tech from "~/components/section/Tech.vue";
import Education from "~/components/section/Education.vue";
import Contact from "~/components/section/Contact.vue";
import Resume from "~/components/section/Resume.vue";

export default {
  components: {
    Pager,
    About,
    Projects,
    Experience,
    Tech,
    Education,
    Contact,
    Resume
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  },
  mounted: function() {
    this.onLoaded();
  },
  data: function() {
    return {
      loaded: false
    };
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>



<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100px);
}

.up-enter-active {
  transition: 1.2s;
}

.up-enter {
  opacity: 0;
  transform: translateY(100px);
}
</style>
