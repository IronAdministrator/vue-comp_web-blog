<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
      <!-- <h3>{{ post.title }}</h3> -->
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import Tag from "@/views/Tag.vue";
import { onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["posts"],
  components: { SinglePost, Tag },
  setup(props) {
    console.log(props.posts);
    onMounted(() => {
      console.log("onMounted fired");
    });
    onUnmounted(() => {
      console.log("onUnmounted fired");
    });
    onUpdated(() => {
      console.log("onUpdated fired");
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
