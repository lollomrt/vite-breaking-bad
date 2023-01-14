<script>
import SingleCard from './SingleCard.vue'
import { store } from '../store.js'

export default {
    components: {
        SingleCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template lang="">
    <h1>prova in CardsContainer</h1>
    <SingleCard v-for="(element, index) in store.cardsList" :key="index" :card="element"></SingleCard> 

  
</template>

<style lang="">
  
</style>