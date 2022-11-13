<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
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
import TagCloud from "@/components/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    PostList,
    Spinner,
    TagCloud
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

<style scoped>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1.5rem;
}
</style>
