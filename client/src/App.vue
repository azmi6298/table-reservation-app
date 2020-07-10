<template>
  <div id="app" class="bg-gray-200 text-gray-100 w-full h-screen">
    <Navbar />
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

