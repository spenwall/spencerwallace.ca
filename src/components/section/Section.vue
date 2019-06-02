<template>
  <div>
    <div class="h-16 bg-vue-blue flex items-center pl-4 text-white">{{ title }}</div>
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
