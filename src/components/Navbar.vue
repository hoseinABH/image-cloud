<template>
  <nav class="bg-gray-900 border-b border-gray-700 dark:bg-green-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center w-full justify-between h-20">
        <div class="">
          <router-link to="/">
            <img
              class="h-10 w-16 cursor-pointer"
              src="../assets/mastery.png"
              alt="vue gallery"
            />
          </router-link>
        </div>
        <div class="flex">
          <div
            v-if="isAuth"
            class="ml-10 flex items-baseline space-x-6 sm:space-x-8"
          >
            <router-link
              to="/"
              class="text-white duration-300  hover:text-green-500 text-sm font-medium"
              >Gallery</router-link
            >
            <router-link
              to="/upload"
              class=" text-white duration-300 hover:text-green-500 text-sm font-medium"
              >Upload</router-link
            >
            <button
              @click="logout"
              class="px-4 py-2 border-b-4 border-red-500 font-bold text-gray-100 duration-300  focus:outline-none rounded shadow hover:bg-red-500"
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
  methods: mapActions(['login', 'logout']),
};
</script>
