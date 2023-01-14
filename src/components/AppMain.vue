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
    <div class="container">
      <div class="container-select">
        <select name="alien" id="">
          <option value="alien">alien</option>
        </select>
      </div>
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

  .container-select {
    width: 1200px;
    padding: 1rem 0;

    select {
      border: none;
      padding: 1rem;
      width: 100px;
      font-size: 1rem;
    }
  }
}
</style>