<script>

export default {
  props: {
    card: Object
  }
}
</script>

<template lang="">
  <div class="card">
    <img :src="card.card_images[0].image_url" alt="">
    <h4>{{ card.name }}</h4>
    <span class="archetype">{{ card.archetype }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(1200px / 5 - 2rem);
  background-color: #d48f38;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;

  img {
    width: 100%;
  }

  h4 {
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
  }

  .archetype {
    color: #000;
  }
}
</style>