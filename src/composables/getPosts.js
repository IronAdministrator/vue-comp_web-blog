import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const fetchData = async () => {
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 3000)
      })
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("No data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  }
  return {posts, error, fetchData}
}

export default getPosts