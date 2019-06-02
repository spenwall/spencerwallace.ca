<template>
  <div :id="title">
    <div class="h-20 bg-vue-blue flex items-center pl-4 text-2xl text-white">{{ title }}</div>
    <div class="p-8">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>
