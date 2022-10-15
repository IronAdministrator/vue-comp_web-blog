import { ref } from 'vue';

const getSinglePost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const fetchData = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts/' + id);
      if (!data.ok) {
        throw Error("Post does not exists ");
      }
      post.value = await data.json();
    } 
    catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  }
  return {post, error, fetchData}
}

export default getSinglePost