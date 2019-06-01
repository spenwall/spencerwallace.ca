<template>
  <div class="bg-white shadow-lg fixed w-48 h-screen">
    <div class="
      h-24 
      text-xl 
      flex 
      justify-center 
      items-center 
      text-vue-blue"
    >
      Spencer Wallace
    </div>
    <ul>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'user']"/>
        </div>
        <a href="#">About</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'folder-open']"/>
        </div>
        <a href="#">Projects</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-yellow text-xl" :icon="['fas', 'briefcase']"/>
        </div>
        <a href="#">Experience</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-plum text-xl" :icon="['fas', 'pencil-ruler']"/>
        </div>
        <a href="#">Skills</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-red text-xl" :icon="['fas', 'graduation-cap']"/>
        </div>
        <a href="#">Education</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-green text-xl" :icon="['fas', 'address-card']"/>
        </div>
        <a href="#">Contact</a>
      </li>
      <li class="ml-10 mb-8 flex items-center">
        <div class="w-8">
          <font-awesome class="text-vue-blue text-xl" :icon="['fas', 'file-alt']"/>
        </div>
        <a href="#">Resume</a>
      </li>
    </ul>
  </div>
</template>


