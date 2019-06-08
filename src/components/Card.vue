<template>
  <div class="m-4 shadow px-6 pb-6 bg-white pt-4 rounded-lg">
    <div class="border-b-2 text-3xl">{{ title }}</div>
    <div class="mt-2">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>
