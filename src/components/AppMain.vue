<script>
import CardsContainer from './CardsContainer.vue'
import AppSelect from './AppSelect.vue'
import { store } from '../store.js'

export default {
  data() {
    return {
      store
    }
  },
  components: {
    CardsContainer,
    AppSelect
  }
}
</script>

<template lang="">
  <main>
    <div class="container">
      <AppSelect :option="store.archetypeList"></AppSelect>
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