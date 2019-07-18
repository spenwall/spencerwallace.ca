<template>
  <div>
    <div @click="openInfo" class="shadow flex flex-col relative">
      <div
        class="transition absolute z-10 w-12 h-12 top-0 border-4 border-white hover:bg-blue-800 right-0 m-2 flex justify-center items-center rounded-full"
        :class="color"
      >
        <font-awesome class="text-white" :icon="['fas', 'question']" />
      </div>
      <div class="relative flex justify-center items-center flex-col">
        <g-image :src="image" alt="project" />
        <transition name="info-transition">
          <div v-if="info" class="bg-white absolute top-0 pr-12 w-full h-full p-3 overflow-hidden">
            <slot></slot>
          </div>
        </transition>
        <div :class="color" class="min-h-4 w-full text-white p-4 z-10">
          <div v-html="title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: "bg-blue-500"
    },
    image: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      info: false
    };
  },
  methods: {
    openInfo() {
      this.info = !this.info;
    }
  }
};
</script>

<style>
.info-transition-enter-active,
.info-transition-leave-active {
  transition: all 0.5s ease-in-out;
}

.info-transition-enter,
.info-transition-leave-to {
  height: 0px;
}
</style>
