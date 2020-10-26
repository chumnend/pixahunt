<template>
  <div class="searchbar">
    <label for="search">Search</label>
    <input
      v-model="search"
      type="text"
      id="search"
      placeholder="Enter pictures to search for..."
    />
    <button @click="handleClick">Let's Hunt</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      search: '',
    };
  },

  methods: {
    handleClick() {
      this.$emit('search', this.search);
      this.search = '';
    },
  },
};
</script>

<style scoped>
.searchbar label {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
