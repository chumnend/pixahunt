<template>
  <div id="images">
    <h3 class="search">
      Showing results for:
      <span class="search-text">{{ search }}</span>
    </h3>

    <loader v-if="loading" />

    <p class="no-image" v-if="!loading && images.length === 0">
      No Results. Try something else!
    </p>

    <ul class="image-container" v-else>
      <li class="image" v-for="image in images" :key="image.id">
        <a :href="image.pageURL" target="_blank">
          <img :src="image.previewURL" :alt="image.type" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Loader from '@/components/Loader';

export default {
  name: 'Images',

  components: {
    loader: Loader,
  },

  props: {
    images: Array,
    search: String,
    loading: Boolean,
  },
};
</script>

<style scoped>
#images {
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
}

.image-container {
  list-style: none;
  width: 100%;
  height: auto;
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

.no-image {
  display: block;
  text-align: center;
  width: 100%;
}

.search {
  text-align: center;
  padding-bottom: 1.5rem;
}

.search-text {
  color: #2659ff;
}

@media all and (min-width: 481px) {
  .image-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (min-width: 769px) {
  .image-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
