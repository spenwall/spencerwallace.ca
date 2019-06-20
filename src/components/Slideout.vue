<template>
  <div class="bg-white shadow-lg fixed w-56 h-screen">
    <font-awesome @click="close" class="m-4 fixed" :icon="['fas', 'times']" />
    <div
      class="h-32 mb-4 text-xl flex justify-center items-center text-vue-blue border-b-2 border-vue-grey"
    >Spencer Wallace</div>
    <ul>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'user']"/>
        </div>
        <a href="#About" v-smooth-scroll="{offset: -30}">About</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'folder-open']"/>
        </div>
        <a href="#Projects" v-smooth-scroll="{offset: -30}">Projects</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-yellow text-xl" :icon="['fas', 'briefcase']"/>
        </div>
        <a href="#Experience" v-smooth-scroll="{offset: -30}">Experience</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-plum text-xl" :icon="['fas', 'pencil-ruler']"/>
        </div>
        <a href="#Tech" v-smooth-scroll="{offset: -30}">Tech</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-red text-xl" :icon="['fas', 'graduation-cap']"/>
        </div>
        <a href="#Education" v-smooth-scroll="{offset: -30}">Education</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'address-card']"/>
        </div>
        <a href="#Contact" v-smooth-scroll="{offset: -30}">Contact</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'file-alt']"/>
        </div>
        <a href="#Resume" v-smooth-scroll="{offset: -30}">Resume</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["close"]
}
</script>
