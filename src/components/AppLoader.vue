<script>
export default {

}
</script>

<template lang="">
    <div class="container-loader">
        <img class="loader-logo" src="../../public/logo-ygo-2.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.container-loader {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 20%;
        animation-name: scale-in-out;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes scale-in-out {
        0% {
            width: 20%
        }

        50% {
            width: 25%
        }

        100% {
            width: 20%;
        }
    }
}
</style>