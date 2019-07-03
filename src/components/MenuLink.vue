<template>
  <li class="ml-10 mb-8 flex items-center">
    <div class="w-8">
      <font-awesome :class="iconColor" :icon="icon" />
    </div>
    <a @click="close" href="#" v-scroll-to="location">{{ linkName }}</a>
  </li>
</template>

<script>
export default {
  props: {
    close: Function,
    icon: Array,
    iconColor: String,
    linkName: String,
  },
  computed: {
    location: function() {
      return "'#" + this.linkName + "'";
    }
  }
}
</script>
