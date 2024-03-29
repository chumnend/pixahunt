<template>
  <div id="app">
    <div class="container">
      <div class="headline">
        <h1 class="brand">Pixahunt</h1>
        <h3>Find Stock Photos.</h3>
      </div>
      <searchbar @search="makeSearch" :loading="loading" />

      <h3 class="instructions" v-if="!search">
        Search for something in the search bar and let's get hunting!
      </h3>
      <images
        v-else
        :images="images"
        :totalImages="totalImages"
        :search="search"
        :loading="loading"
      />
      <div class="nav-buttons">
        <button
          v-if="search && this.page !== 1"
          class="button"
          @click="loadLess"
        >
          Less
        </button>
        <button
          v-if="search && this.page !== this.totalPages"
          class="button"
          @click="loadMore"
        >
          More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import Images from '@/components/Images';

export default {
  name: 'App',

  components: {
    searchbar: SearchBar,
    images: Images,
  },

  data() {
    return {
      loading: false,
      images: [],
      totalImages: 0,
      page: 1,
      totalPages: 1,
      search: '',
      perPage: 15,
    };
  },

  methods: {
    makeSearch(search) {
      const baseURI = 'https://pixabay.com/api/';
      const apiKey = process.env.VUE_APP_API_KEY;

      this.loading = true;
      this.search = search;
      this.page = 1;

      const url = `${baseURI}?key=${apiKey}&q=${search}&per_page=${this.perPage}`;
      this.$http
        .get(url)
        .then(({ data }) => {
          this.images = data.hits;
          this.totalImages = data.total;
          this.totalPages = Math.ceil(this.totalImages / this.perPage);
          this.loading = false;
        })
        .catch(() => {
          alert('Something went wrong!');
          this.loading = false;
        });
    },

    loadLess() {
      const baseURI = 'https://pixabay.com/api/';
      const apiKey = process.env.VUE_APP_API_KEY;

      this.loading = true;

      const url = `${baseURI}?key=${apiKey}&q=${this.search}
        &per_page=${this.perPage}&page=${this.page - 1}`;
      this.$http
        .get(url)
        .then(({ data }) => {
          this.images = data.hits;
          this.page = this.page - 1;
          this.loading = false;
        })
        .catch(() => {
          alert('Something went wrong!');
          this.loading = false;
        });
    },

    loadMore() {
      const baseURI = 'https://pixabay.com/api/';
      const apiKey = process.env.VUE_APP_API_KEY;

      this.loading = true;

      const url = `${baseURI}?key=${apiKey}&q=${this.search}
        &per_page=${this.perPage}&page=${this.page + 1}`;
      this.$http
        .get(url)
        .then(({ data }) => {
          this.images = data.hits;
          this.page = this.page + 1;
          this.loading = false;
        })
        .catch(() => {
          alert('Something went wrong!');
          this.loading = false;
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
  height: auto;
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

.instructions {
  text-align: center;
  padding: 4rem 2rem;
}

.nav-buttons {
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}

.button {
  width: 100px;
  height: 100%;
  margin: 0 auto;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  background: #2659ff;
  outline: none;
  color: #fff;
  cursor: pointer;
  display: block;
}

@media all and (min-width: 1023px) {
  .container {
    max-width: 800px;
  }
}
</style>
