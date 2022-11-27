<template>
  <div>
  <h1>RealtimeTest</h1>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
  </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import getData from "@/composables/getData";

const { fetchedData: posts, error, loading, fetchRealtimeData } = getData(`posts`);

fetchRealtimeData()
</script>

<style>

</style>