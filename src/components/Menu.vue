<template>
  <div class="bg-white shadow-lg fixed w-56 h-screen">
    <div
      class="h-32 mb-4 text-2xl flex flex-col justify-center items-center text-vue-blue border-b-2 border-vue-grey"
    >
      <div>Spencer Wallace</div>
      <div class="text-sm">A Guy Who Codes</div>
    </div>
    <ul>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green" :icon="['fas', 'user']"/>
        </div>
        <scroll-to href="#About" @click.native="close">About</scroll-to>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'folder-open']"/>
        </div>
        <scroll-to href="#Projects" @click.native="close">Projects</scroll-to>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-yellow text-xl" :icon="['fas', 'briefcase']"/>
        </div>
        <scroll-to href="#Experience" @click.native="close">Experience</scroll-to>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-plum text-xl" :icon="['fas', 'pencil-ruler']"/>
        </div>
        <scroll-to href="#Tech" @click.native="close" >Tech</scroll-to>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-red text-xl" :icon="['fas', 'graduation-cap']"/>
        </div>
        <scroll-to href="#Education" @click.native="close">Education</scroll-to>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'address-card']"/>
        </div>
        <scroll-to href="#Contact" @click.native="close">Contact</scroll-to>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'file-alt']"/>
        </div>
        <scroll-to href="#Resume" @click.native="close">Resume</scroll-to>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-plum text-xl" :icon="['fas', 'blog']" />
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
      default: function() {}
    },
  },
};
</script>