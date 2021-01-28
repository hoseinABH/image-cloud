<template>
  <div id="app" class="min-h-screen h-full bg-gray-900 text-gray-100">
    <Navbar></Navbar>
    <div class="mx-auto container px-2 sm:px-4 py-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
