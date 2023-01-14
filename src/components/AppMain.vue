<script>
import CardsContainer from './CardsContainer.vue'
import { store } from '../store.js'

export default {
  data() {
    return {
      store
    }
  },
  components: {
    CardsContainer
  }
}
</script>

<template lang="">
  <main>
    <h1>Prova appMain</h1>
    <div>
      <CardsContainer></CardsContainer>
    </div>   
  </main> 
</template>

<style lang="">
  
</style>