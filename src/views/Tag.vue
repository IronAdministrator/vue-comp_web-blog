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
import getPosts from "@/composables/getPosts";
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const route = useRoute();
    const { posts, error, fetchData } = getPosts();

    fetchData();

    const filteredPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { posts, error, route, filteredPosts };
  },
};
</script>

<style scoped></style>
