<template>
  <div id="searchbar">
    <div class="search-wrapper">
      <span class="material-icons search-icon">search</span>
      <input
        v-model="search"
        @keyup.enter="handleSearch"
        type="text"
        class="search"
        placeholder="Search"
      />
      <span
        v-show="showClearIcon"
        class="material-icons clear-icon"
        @click="clearSearch"
      >
        close
      </span>
    </div>
    <button class="button" @click="handleSearch" :disabled="loading">Go</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  props: {
    loading: Boolean,
  },

  data() {
    return {
      search: '',
    };
  },

  computed: {
    showClearIcon() {
      return this.search.length > 0;
    },
  },

  methods: {
    handleSearch() {
      if (this.search.length > 0) {
        this.$emit('search', this.search);
        this.search = '';
      } else {
        alert('Please input a value to search for!');
      }
    },

    clearSearch() {
      this.search = '';
    },

    onEnter() {
      alert('enter key pressed');
    },
  },
};
</script>

<style scoped>
#searchbar {
  width: 100%;
  height: 45px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.search-wrapper {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  position: relative;
}

.search {
  padding: 0 21px 0 30px;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  outline: 0;
  background: #f5f5f5;
}

.search:hover,
.search:focus {
  border: 1px solid #009688;
  background: #fff;
}

.search-icon {
  position: absolute;
  top: 10.5px;
  left: 3px;
}

.clear-icon {
  position: absolute;
  top: 10.5px;
  right: 3px;
  cursor: pointer;
}

.button {
  width: 60px;
  height: 100%;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  background: #2659ff;
  outline: none;
  color: #fff;
  cursor: pointer;
}

.button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

@media all and (min-width: 481px) {
  .search,
  .button {
    font-size: 1.2rem;
  }
}
</style>
