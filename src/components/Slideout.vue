<template>
  <div class="bg-white shadow-lg fixed w-56 h-screen">
    <div
      class="h-24 mb-4 text-xl flex justify-center items-center text-vue-blue border-b-2 border-vue-grey"
    >Spencer Wallace</div>
    <ul>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'user']"/>
        </div>
        <a href="#About" v-smooth-scroll>About</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'folder-open']"/>
        </div>
        <a href="#Projects" v-smooth-scroll>Projects</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-yellow text-xl" :icon="['fas', 'briefcase']"/>
        </div>
        <a href="#Experience" v-smooth-scroll>Experience</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-plum text-xl" :icon="['fas', 'pencil-ruler']"/>
        </div>
        <a href="#Skills" v-smooth-scroll>Skills</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-red text-xl" :icon="['fas', 'graduation-cap']"/>
        </div>
        <a href="#Education" v-smooth-scroll>Education</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'address-card']"/>
        </div>
        <a href="#Contact" v-smooth-scroll>Contact</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'file-alt']"/>
        </div>
        <a href="#Resume" v-smooth-scroll>Resume</a>
      </li>
    </ul>
  </div>
</template>


