<template>
  <div>
    <div class="bg-green-500 mb-2 h-20">
      <header class="max-w-2xl mx-auto flex justify-between items-center h-full">
        <strong>
          <g-link class="text-white hover:text-blue-500" to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="text-white hover:text-blue-500 mr-5" to="/">Home</g-link>
          <g-link class="text-white hover:text-blue-500 mr-5" to="/about">About</g-link>
        </nav>
      </header>
    </div>
    <div class="max-w-2xl mx-auto py-5 min-h-screen">
      <slot/>
    </div>
    <footer class="bg-blue-500 h-20">

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
