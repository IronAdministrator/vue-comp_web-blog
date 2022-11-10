<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getData from "@/composables/getData";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
export default {
  props: ["id"],
  components: {
    Spinner,
  },
  setup(props) {
    const route = useRoute();
    const { fetchedData: post, error, fetchData } = getData(`http://localhost:3000/posts/${route.params.id}`);

    fetchData();
    return { post, error };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
