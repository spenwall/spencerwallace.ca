<template>
  <div>
    <div class="flex flex-col w-64 relative">
      <div class="transition absolute w-12 h-12 top-0 border-4 border-white hover:bg-blue-800
       right-0 m-2 flex justify-center items-center rounded-full"
       :class="color">
        <font-awesome class="text-white" :icon="['fas', 'question']"/>
      </div>
      <g-image src="~/assets/images/spencer.jpg" alt="project"></g-image>
      <div :class="color" class="min-h-4 text-white p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: 'bg-blue-500',
    }, 
    image: {}
  },
}
</script>