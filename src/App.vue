<template>
  <div id="app" class="min-h-screen h-full bg-gray-900">
    <Navbar></Navbar>
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
