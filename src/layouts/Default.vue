<template>
  <div class="flex bg-gray-100">
    <transition name="slide-right">
      <slideout v-if="show" class="hidden md:block z-10"/>
    </transition>
    <div v-if="show" @click="close" class="hidden w-full h-full bg-black opacity-25 fixed">
      </div>
      <div class="md:ml-56 w-full">
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
      this.show = true;
    },
    close() {
      this.show = !this.show;
    }
  },
  mounted: function() {
    this.onLoaded();
  },
  data: function() {
    return {
      show: false
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
  transition: transform 1s;
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
