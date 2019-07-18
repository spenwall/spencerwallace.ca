<template>
  <a class="cursor-pointer" :href="href" @click.prevent="scroll">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['href'],

  methods: {
    scroll() {
      console.log('scroll')
      document.querySelector(this.href)
      .scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>
