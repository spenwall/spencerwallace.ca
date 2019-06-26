<template>
  <div>
    <div class="flex flex-col w-64 relative">
      <div class="absolute w-12 h-12 top-0 right-0 m-2 bg-plum flex justify-center items-center rounded-full">
        <font-awesome class="text-white" :icon="['fas', 'question']"/>
      </div>
      <g-image src="~/assets/images/spencer.jpg" alt="project"></g-image>
      <div :class="background" class="min-h-4 text-white p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['color', 'image'],
  computed: {
    background: function () {
      return 'bg-' + this.color
    }
  }
}
</script>
