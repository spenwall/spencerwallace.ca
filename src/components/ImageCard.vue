<template>
  <div>
    <div @click="openInfo" class="flex flex-col w-64 relative">
      <div
        class="transition absolute z-10 w-12 h-12 top-0 border-4 border-white hover:bg-blue-800 right-0 m-2 flex justify-center items-center rounded-full"
        :class="color"
      >
        <font-awesome class="text-white" :icon="['fas', 'question']" />
      </div>
      <div class="relative">
        <g-image src="~/assets/images/spencer.jpg" alt="project"/>
        <transition name="info-transition">
          <div v-if="info" class="bg-white absolute top-0 w-full h-full p-3 overflow-hidden">
            This app scrapes the redflagdeals.com website and sends notifications of new deals matching keywords
          </div>
        </transition>
      </div>
      <div :class="color" class="min-h-4 text-white p-4">
        <div v-html="title"></div>
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
      info: false,
    }
  },
  methods: {
    openInfo() {
      this.info = !this.info
    }
  }
};
</script>

<style>
.info-transition-enter-active,
.info-transition-leave-active {
  transition: all .5s ease-in-out;
}

.info-transition-enter,
.info-transition-leave-to {
  height: 0px;
}
</style>
