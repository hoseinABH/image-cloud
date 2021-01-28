<template>
  <div>
    <div
      v-if="isAuth"
      class="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6"
    >
      <img
        v-for="image in allImages"
        :key="image.link"
        :src="image.link"
        class="lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0"
      />
    </div>
    <h1 v-else class="text-2xl text-center">Please Signin to Get Started🎉</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isAuth']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  },
};
</script>
