<script>
import CardsContainer from './CardsContainer.vue'
import AppSelect from './AppSelect.vue'
import { store } from '../store.js'
import axios from 'axios'

export default {
  data() {
    return {
      store
    }
  },
  components: {
    CardsContainer,
    AppSelect
  },
  methods: {
    selectArch(archetipo) {
      let apiUrl = store.urlCompleto + 'archetype=' + archetipo
      axios.get(apiUrl).then((response) => {
        store.cardsList = response.data.data
      })
      console.log('ciao!')
    }
  }
}
</script>

<template lang="">
  <main>
    <div class="container">
      <AppSelect @selectArchName="selectArch" :option="store.archetypeList"></AppSelect>
      <CardsContainer></CardsContainer>
    </div>   
  </main> 
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d48f38;
}
</style>