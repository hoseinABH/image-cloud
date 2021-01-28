<template>
  <div id="app" class="min-h-screen h-full bg-gray-900 text-gray-100">
    <Navbar></Navbar>
    <router-view></router-view>
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
