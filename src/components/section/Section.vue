<template>
  <div :id="title">
    <div :class="bgColor" class="h-20 flex items-center pl-4 text-2xl text-white">{{ title }}</div>
    <div class="p-8">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'vue-blue'
    }
  },
  data: function() {
    return {
      bgColor: 'bg-' + this.color
    }
  }
};
</script>
