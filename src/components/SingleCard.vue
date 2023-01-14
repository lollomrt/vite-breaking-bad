<script>

export default {
  props: {
    card: Object
  }
}
</script>

<template lang="">
    <h1>prova in SingleCards</h1>
  <div>
    <img :src="card.card_images.image_url" alt="">
    <h4>{{ card.name }}</h4>
  </div>
</template>

<style lang="">
  
</style>