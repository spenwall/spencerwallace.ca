<template>
  <div>
    <div class="bg-green-500 mb-2 h-20">
      <header class="max-w-3xl mx-auto flex justify-between items-center h-full">
        <div class="flex items-center ml-2">
          <g-image
            class="rounded-full"
            src="~/assets/images/spencer.jpg"
            alt="Spencer"
            width="40"
            height="40"
          ></g-image>
          <strong>
            <g-link
              class="ml-2 text-white hover:text-blue-500"
              to="/"
            >{{ $static.metaData.siteName }}</g-link>
          </strong>
        </div>
        <nav class="nav">
          <g-link class="text-white hover:text-blue-500 mr-5" to="/">Home</g-link>
          <g-link class="text-white hover:text-blue-500 mr-5" to="/about">About</g-link>
        </nav>
      </header>
    </div>
    <transition name="fade" appear>
      <div class="max-w-3xl mx-auto p-5 min-h-screen">
        <slot/>
      </div>
    </transition>
    <footer class="bg-blue-500 h-20 flex justify-end items-center">
      <a class="m-2" href="https://twitter.com/spenwall" target="_blank">
        <div class="text-white">
          <twitter/>
        </div>
      </a>
      <a class="m-2" href="https://github.com/spenwall" target="_blank">
        <div class="text-white">
          <github/>
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
import twitter from "~/assets/images/twitter";
import github from "~/assets/images/github.vue";

export default {
  components: {
    twitter,
    github
  }
};
</script>


<style>
.fade-enter-active {
  transition: opacity .5s;
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
