import { projectFirestore, timestamp } from '@/firebase/config';
import { ref } from 'vue';

const getData = (url, docID) => {
  const fetchedData = ref(null);
  const error = ref(null);
  const loading = ref(true);

  // const fetchedDataWithID = ref(null);
  // const errorWithID = ref(null);


  const fetchData = async () => {
    try {
      // let data = await fetch(url);
      // if (!data.ok) {
      //   throw Error("No data available");
      // }
      // fetchedData.value = await data.json();
      let res = await projectFirestore.collection(url).orderBy('updatedAt', 'desc').get()
      // console.log(res.docs);
      fetchedData.value = res.docs.map((doc) => {
        // doc = [...doc]
        // console.log(doc.data());
        return {...doc.data(), id: doc.id}
      })
      loading.value = false
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
      loading.value = false
    }
  }

  const fetchDataWithID = async () => {
    try {
      // let data = await fetch(url);
      // if (!data.ok) {
      //   throw Error("No data available");
      // }
      // fetchedData.value = await data.json();
      let res = await projectFirestore.collection(url).doc(docID).get()
      if (!res.exists) {
        throw Error('Post does not exist')
      }
      fetchedData.value = {...res.data(), id: res.id}
      // console.log(fetchedData.value);
      loading.value = false
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
      loading.value = false
    }
  }

  const createData = async (post) => {
    // post = {
    //   title: title.value,
    //   body: body.value,
    //   tags: tags.value,
    // };
    try {
      // await fetch("http://localhost:3000/posts", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(post),
      // });
      const res = await projectFirestore.collection(url).add(post)
      console.log(res);
      console.log(url);
    } catch (err) {
      console.log(error.message);
      error.value = err.message;
    }
  };

  const deleteData = async () => {
    await projectFirestore.collection(url).doc(docID).delete()
    console.log(docID);
  }

  const updateData = async (useData) => {
    await projectFirestore.collection(url).doc(docID).update(useData)
  }
  return {fetchedData, error, loading, fetchData, fetchDataWithID, createData, deleteData, updateData}
}

export default getData