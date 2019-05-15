<template>
  <div>
    <div class="bg-green-500 mb-2 h-20">
      <header class="max-w-2xl mx-auto flex justify-between items-center h-full">
        <strong>
          <g-link class="ml-5 text-white hover:text-blue-500" to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="text-white hover:text-blue-500 mr-5" to="/">Home</g-link>
          <g-link class="text-white hover:text-blue-500 mr-5" to="/about">About</g-link>
          <g-link class="text-white hover:text-blue-500 mr-5" to="/blog">Blog</g-link>
        </nav>
      </header>
    </div>
    <div class="max-w-2xl mx-auto py-5 min-h-screen">
      <slot/>
    </div>
    <footer class="bg-blue-500 h-20 flex justify-end items-center">
      <a class="m-2" href="https://twitter.com/spenwall" target="_blank">
        <div class="text-white">
          <twitter />
        </div>
      </a>
      <a class="m-2" href="https://github.com/spenwall" target="_blank">
        <div class="text-white">
          <github />
        </div>  
      </a>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import twitter from '~/assets/images/twitter'
import github from '~/assets/images/github.vue'

export default {
  components: {
    twitter,
    github
  }
}
</script>


<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

a {
  text-decoration: none;
}
</style>
