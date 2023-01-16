<script>
import { store } from '../store.js'

export default {
    props: {
        option: Object
    },
    data() {
        return {
            arch: '',
            store
        }
    }
}
</script>

<template lang="">
    <div class="container-select">
        <select class="select-style" name="alien" id="" v-model="arch" @change="$emit('selectArchName', arch)">
            <option value="" disabled selected>Seleziona un Archetipo</option>
            <option v-for="(element,index) in option" :key="index" :value="element.archetype_name">{{ element.archetype_name }}</option>
        </select>
        <div class="container-text">
            <h4>{{ store.cardsList.length }} carte trovate</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-select {
    width: 1200px;
    height: 100px;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #fff;

    .container-text {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        background-color: #000;
        color: #fff;
        height: 100%;
        flex-grow: 1;
    }

    .select-style {
        background-color: #000;
        width: 300px !Important;
        height: 100%;
        color: #fff;
        width: 1000px;
        border: none;
        padding: 1rem;
        font-size: 1rem;
    }


}
</style>