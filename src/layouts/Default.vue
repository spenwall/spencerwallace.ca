<template>
  <div class="flex bg-gray-100">
    <div
      @click="toggleMobileMenu"
      class="z-30 w-full h-10 flex items-center bg-white fixed md:hidden"
    >
      <font-awesome class="ml-8 text-gray-500 text-xl" :icon="['fas', 'bars']" />
    </div>
    <transition name="slide-right">
      <Menu v-if="show" class="hidden md:block z-30" />
    </transition>
    <transition name="slide-right">
      <Menu v-if="mobileMenu" :close="closeMobileMenu" mobile="true" class="mt-10 md:hidden z-30" />
    </transition>
    <transition name="fade" appear>
      <div
        v-if="mobileMenu"
        @click="closeMobileMenu"
        class="sw-screen md:hidden w-full h-full bg-black fixed z-20"
      ></div>
    </transition>
    <div class="mt-10 md:ml-56 w-full">
      <slot />
    </div>
  </div>
</template>

<script>
import Menu from "~/components/Menu.vue";

export default {
  components: {
    Menu
  },
  methods: {
    onLoaded() {
      this.show = true;
    },
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
    closeMobileMenu() {
      this.mobileMenu = false;
    },
    openMobileMenu() {
      this.mobileMenu = true;
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
.sw-screen {
  opacity: .25;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.6s;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-225px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-to {
  opacity: .25;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
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
