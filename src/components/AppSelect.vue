<script>


export default {
    props: {
        option: Object
    }
}
</script>

<template lang="">
    <div class="container-select">
        <select class="select-style" name="alien" id="">
            <option v-for="(element,index) in option" :value="element.archetype_name">{{ element.archetype_name }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.container-select {
    width: 1200px;
    padding: 1rem 0;

    .select-style {
        width: 1000px;
        border: none;
        padding: 1rem;
        width: 100px;
        font-size: 1rem;
    }
}
</style>