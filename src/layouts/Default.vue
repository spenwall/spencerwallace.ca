<template>
  <div class="flex bg-gray-100">
    <div @click="openMobileMenu" class="w-full h-10 flex items-center bg-white fixed md:hidden">
      <font-awesome class="ml-8 text-gray-500 text-xl" :icon="['fas', 'bars']"/>
    </div>
    <transition name="slide-right">
      <slideout v-if="show" class="hidden md:block z-10"/>
    </transition>
    <transition name="slide-right">
      <slideout v-if="mobileMenu" :close="closeMobileMenu" mobile="true" class="md:hidden z-10"/>
    </transition>
    <div v-if="mobileMenu" @click="closeMobileMenu" class="md:hidden w-full h-full bg-black opacity-25 fixed">
      </div>
      <div class="mt-10 md:ml-56 w-full">
        <slot/>
    </div>
  </div>
</template>

<script>
import slideout from "~/components/Slideout.vue";

export default {
  components: {
    slideout
  },
  methods: {
    onLoaded() {
      this.show = true
    },
    closeMobileMenu() {
      this.mobileMenu = false
    },
    openMobileMenu() {
      this.mobileMenu = true
    }
  },
  mounted: function() {
    this.onLoaded();
  },
  data: function() {
    return {
      show: false,
      mobileMenu: false,
    };
  }
};
</script> 



<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform .6s;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-225px);
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height: 1.7;
}

p,
h1,
h2,
h3 {
  opacity: 0.75;
}

a {
  text-decoration: none;
}
</style>
