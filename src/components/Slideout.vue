<template>
  <div class="bg-white shadow-lg fixed w-56 h-screen">
    <font-awesome
      v-if="mobile"
      @click="close"
      class="m-4 ml-8 text-xl fixed text-gray-500"
      :icon="['fas', 'times']"
    />
    <div
      class="h-32 mb-4 text-2xl font-bold flex flex-col justify-center items-center text-vue-blue border-b-2 border-vue-grey"
    >
      <div>Spencer Wallace</div>
      <div class="text-sm">A Guy Who Codes</div>
    </div>
    <ul>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'user']"/>
        </div>
        <a @click="close" href="#" v-scroll-to="'#About'">About</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'folder-open']"/>
        </div>
        <a @click="close" href="#" v-scroll-to="'#Projects'">Projects</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-yellow text-xl" :icon="['fas', 'briefcase']"/>
        </div>
        <a @click="close" href="#" v-scroll-to="'#Experience'">Experience</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-plum text-xl" :icon="['fas', 'pencil-ruler']"/>
        </div>
        <a @click="close" href="#" v-scroll-to="'#Tech'">Tech</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-red text-xl" :icon="['fas', 'graduation-cap']"/>
        </div>
        <a @click="close" href="#" v-scroll-to="'#Education'">Education</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'address-card']"/>
        </div>
        <a @click="close" href="#" v-scroll-to="'#Contact'">Contact</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'file-alt']"/>
        </div>
        <a @click="close" href="#" v-scroll-to="'#Resume'">Resume</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-plum text-xl" :icon="['fas', 'file-alt']" />
        </div>
        <g-link to="/blog">Blog</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      default: () => {}
    },
    mobile: {
      default: false
    }
  }
};
</script>