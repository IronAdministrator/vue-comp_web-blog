<template>
  <div class="home">
    <h1>HomeVue</h1>
    <p ref="p" @click="handleClick">This is a {{name}} {{age}}. Composition API!</p>
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
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive, computed } from 'vue'

export default {
  name: "HomeView",
  setup() {
    // const p = ref(null)

    const name = ref('Vue')
    const age = ref(3)

    const personOne = ref({profession: 'mobile developer', age: 20})
    const personTwo = reactive({profession: 'Web Developer', age: 30})

    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const matchingNames = computed( () => {
      return names.value.filter((name) => name.includes(search.value))
    })
    
    const updatePersonOne = () => {
      personOne.value.profession = 'Swift IOS Developer'
      personOne.value.age = 21
    }
    const updatePersonTwo = () => {
      personTwo.profession = 'Front end Developer'
      personTwo.age = 25
    }
    
    const handleClick = () => {
      name.value = 'React'
      age.value = 15
    }

    return {name, age, handleClick, personOne, personTwo, updatePersonOne, updatePersonTwo, names, search, matchingNames}
  },
};
</script>
