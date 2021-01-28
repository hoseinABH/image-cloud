<template>
  <div>
    <div
      class="border-dashed border-2 w-full h-52 rounded duration-300 relative  hover:border-green-500"
    >
      <input
        @change="uploadImages($event.target.files)"
        type="file"
        multiple
        accept="image/*"
        class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
      />
      <div
        class="text-center p-10 absolute top-0 right-0 left-0 m-auto flex flex-col justify-center items-center"
      >
        <img src="../assets/drop.svg" alt="drop" class="w-16 h-16" />
        <h1 class="text-xl mb-8">
          Drop Your Image Here Our Browse from local files
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages']),
};
</script>
