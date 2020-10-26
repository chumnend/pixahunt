<template>
  <div id="app">
    <h1>Pixahunt</h1>
    <searchbar @search="makeSearch" />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';

export default {
  name: 'App',

  components: {
    searchbar: SearchBar,
  },

  methods: {
    makeSearch(search) {
      alert(`searching for ${search}`);
    },
  },
};
</script>
