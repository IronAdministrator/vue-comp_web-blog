<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="filteredPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getData from "@/composables/getData";
import PostList from "@/components/PostList";
import Spinner from "@/components/Spinner";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const route = useRoute();
    const { fetchedData: posts, error, fetchData } = getData(`http://localhost:3000/posts`);

    fetchData();

    const filteredPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { posts, error, filteredPosts };
  },
};
</script>

<style scoped></style>
