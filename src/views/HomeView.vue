<script setup>
// @ is an alias to /src
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
import getData from "@/composables/getData";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";
    const { fetchedData: posts, error, loading, fetchData } = getData(`posts`);

    fetchData();

    const showPosts = ref(true);

    // const deletePost = (posts) => {
    //   return posts.pop();
    // };
    // const name = ref('Vue')
    // const age = ref(3)
    // const personOne = ref({profession: 'mobile developer', age: 20})
    // const personTwo = reactive({profession: 'Web Developer', age: 30})
    // const search = ref('')
    // const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    // const watchUpdate = watch(search, () => {
    //   console.log('watch fired')
    // })
    // const watchEffectUpdate =  watchEffect(() => {
    //   console.log('watchEffect fired', search.value);
    // })
    // const handleWatchAndEffect = () => {
    //   watchUpdate() //stop watch
    //   watchEffectUpdate() //stop watchEffect
    // }
    // const matchingNames = computed( () => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })
    // const updatePersonOne = () => {
    //   personOne.value.profession = 'Swift IOS Developer'
    //   personOne.value.age = 21
    // }
    // const updatePersonTwo = () => {
    //   personTwo.profession = 'Front end Developer'
    //   personTwo.age = 25
    // }
    // const handleClick = () => {
    //   name.value = 'React'
    //   age.value = 15
    // }
    // return {name, age, handleClick, personOne, personTwo, updatePersonOne, updatePersonTwo, names, search, matchingNames, handleWatchAndEffect}
</script>

<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts" class="layout">
      <PostList v-if="showPosts" :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-if="loading"><Spinner /></div>
    <!-- <button @click="showPosts = !showPosts">
      <span v-if="showPosts">hide posts</span>
      <span v-else>show posts</span>
    </button>
    <button @click="deletePost(posts)">delete post</button> -->
    <!-- <p ref="p" @click="handleClick">This is a {{name}} {{age}}. Composition API!</p>
    <input v-model="name" type="text" />
    <button @click="age++">age +</button>
    <h2>Ref</h2>
    <p @click="updatePersonOne">Hi! I am a {{personOne.profession}} and I'm {{personOne.age}} years old</p>
    <h2>Reactive</h2>
    <p @click="updatePersonTwo">Hi! I am a {{personTwo.profession}} and I'm {{personTwo.age}} years old</p>
    <h2>Computed</h2>
    <input v-model="search" type="text" />
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleWatchAndEffect">Stop Watching</button> -->
  </div>
</template>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media only screen and (min-width: 600px) {
  .layout {
    grid-template-columns: 3fr 1fr;
  }
}
</style>
