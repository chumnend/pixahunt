<template>
  <ul id="images">
    <li class="image" v-for="image in images" :key="image.id">
      <a :href="image.pageURL" target="_blank">
        <img :src="image.previewURL" :alt="image.type" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Images',

  props: {
    images: Array,
  },
};
</script>

<style scoped>
#images {
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 5px;
  align-items: center;
  justify-content: center;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media all and (min-width: 481px) {
  #images {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (min-width: 769px) {
  #images {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
