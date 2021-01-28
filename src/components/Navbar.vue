<template>
  <nav class="bg-gray-900 border-b border-gray-700 dark:bg-green-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center w-full justify-between h-20">
        <div class="">
          <img
            class="h-10 w-16 cursor-pointer"
            src="../assets/mastery.png"
            alt="vue gallery"
          />
        </div>
        <div class="flex space-x-2">
          <div v-if="isAuth" class="ml-10 flex items-baseline space-x-4">
            <a
              href="#"
              class=" text-white duration-300  hover:text-green-500 text-sm font-medium"
              >Gallery</a
            >
            <a
              href="#"
              class=" text-white duration-300 hover:text-green-500 text-sm font-medium"
              >Upload</a
            >
            <button
              class="px-4 py-1 font-bold text-gray-100 duration-300  focus:outline-none rounded shadow hover:bg-red-500"
            >
              Signout
            </button>
          </div>
          <button
            v-else
            class="px-4 py-1 font-bold text-gray-100 duration-300  bg-green-600 focus:outline-none rounded shadow hover:bg-green-500"
            @click="login"
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Navbar',
  computed: mapGetters(['isAuth']),
  methods: mapActions(['login']),
};
</script>
