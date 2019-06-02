<template>
  <div class="flex">
    <slideout v-if="show"/>
    <div class="ml-48 w-full">
      <slot/>
    </div>
  </div>
</template>

<script>
import slideout from "~/components/Slideout.vue";

export default {
  components: {
    slideout
  },
  data: function() {
    return {
      show: true
    }
  }
}
</script>



<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height: 1.7;
}

p,
h1,
h2,
h3 {
  opacity: 0.75;
}

a {
  text-decoration: none;
}
</style>
