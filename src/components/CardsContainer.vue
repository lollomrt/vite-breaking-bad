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
    <div class="container-cards">
        <SingleCard v-for="(element, index) in store.cardsList" :key="index" :card="element"></SingleCard>
    </div> 
</template>

<style lang="scss" scoped>
.container-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1rem;
    width: 1200px;
    background-color: #fff;
    padding: 3rem;
}
</style>