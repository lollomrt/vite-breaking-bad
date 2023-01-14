<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'
import { store } from './store.js'


export default {
  data() {
    return {
      store
    }
  },
  created() {
    this.getCardsList()
  },
  methods: {
    getCardsList() {
      axios.get(store.url).then((response) => {
        console.log(response.data.data)
        store.cardsList = response.data.data
      })
    }

  },
  components: {
    AppHeader,
    AppMain
  }

}
</script>
  
<template lang="">
  <div>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&display=swap');
</style>
