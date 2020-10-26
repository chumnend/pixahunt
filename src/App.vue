<template>
  <div id="app">
    <div class="container">
      <div class="headline">
        <h1 class="brand">Pixahunt</h1>
        <h3>Find Stock Photos.</h3>
      </div>
      <searchbar @search="makeSearch" />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';

export default {
  name: 'App',

  components: {
    searchbar: SearchBar,
  },

  data() {
    return {
      images: [],
      totalImages: 0,
    };
  },

  methods: {
    makeSearch(search) {
      const baseURI = 'https://pixabay.com/api/';
      const apiKey = process.env.VUE_APP_API_KEY;

      const url = `${baseURI}?key=${apiKey}&q=${search}`;
      this.$http
        .get(url)
        .then(({ data }) => {
          this.images = data.hits;
          this.totalImages = data.total;
        })
        .catch(err => {
          console.error(err.message);
        });
    },
  },
};
</script>

<style scoped>
#app {
  padding: 2rem 1rem;
}

.container {
  background: #fff;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
}

.headline {
  text-align: center;
  padding: 2rem 0;
}

.brand {
  font-family: 'Comfortaa', cursive;
  font-size: 3rem;
}

@media all and (min-width: 1023px) {
  .container {
    max-width: 800px;
  }
}
</style>
