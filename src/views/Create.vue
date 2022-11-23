<script setup>
  import { ref, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import getData from "@/composables/getData";
  import { timestamp } from '@/firebase/config';


  const router = useRouter();
  const route = useRoute();
  const title = ref("");
  const body = ref("");
  const tag = ref("");
  const tags = ref([]);
  // const error = ref(null);
  const { fetchedData: post, createData, fetchDataWithID, updateData } = getData('posts', route.params.id);

  // first fetch to populate input fields if ID exists
  onMounted(async () => {
    if (route.params.id) {
      await fetchDataWithID()
      title.value = post.value.title
      body.value = post.value.body
      tags.value = post.value.tags
    }
  })

  const handleKeydown = () => {
    if (tag.value.length > 0 && tag.value.trim().length !== 0) {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
    }
    tag.value = "";
  };

  const handleSubmit = async () => {
    // Creating an Object to send to Database on create/update
    let postOnCreate = {
      title: title.value,
      body: body.value,
      tags: tags.value,
      createdAt: timestamp(),
      updatedAt: ''
    };
    let postOnUpdate = {
      title: title.value,
      body: body.value,
      tags: tags.value,
      updatedAt: timestamp()
    };
    // try {
      // await fetch("http://localhost:3000/posts", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(post),
      // });
      // const res = await projectFirestore.collection('posts').add(post)
      // console.log(res);
    // } catch (err) {
    //   console.log(err.message);
    // }

    if (route.params.id) {
      await updateData(postOnUpdate)
    } else {
      // Calling a function from getData Composable and passing an Object created beforehand 
      await createData(postOnCreate)
    }
    router.push({ name: "Home" });
  };
</script>

<template>
  <form class="create" @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input v-model="title" type="text" required />
    <label>Content:</label>
    <textarea v-model="body" required></textarea>
    <label>Tags (hit Enter to add a new tag)</label>
    <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown" />
    <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
    <button>Add post</button>
  </form>
</template>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
