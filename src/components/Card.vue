<template>
  <div class="m-4 shadow px-6 pb-6 pt-4 rounded-lg">
    <div class="border-b-2 text-3xl">{{ title }}</div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
