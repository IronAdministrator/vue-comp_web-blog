import { ref } from 'vue';

const getData = (link) => {
  const fetchedData = ref(null);
  const error = ref(null);

  const fetchData = async () => {
    try {
      // await new Promise(resolve => {
      //   setTimeout(resolve, 1000)
      // })
      let data = await fetch(link);
      if (!data.ok) {
        throw Error("No data available");
      }
      fetchedData.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  }
  return {fetchedData, error, fetchData}
}

export default getData