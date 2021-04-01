<template>
    <div>
        <input
            v-model='query'
            @keyup='getResult(query)'
            type="text"
            placeholder="Rechercher"
            class="rounded-lg p-1"
        >
        <button class="bg-green-400 text-white p-1 rounded-lg">Logo</button>
        <div
            class="flex justify-center flex-col items-center"
            v-for='result in results'
            :key='result.id'
        >
            <a href="#">{{result.title}}</a>
            <img v-bind:src="`http://image.tmdb.org/t/p/w500/${result.poster_path}`">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      query: '',
      results: '',
    };
  },
  methods: {
    getResult(query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0a442968d0cb234f9fad47887baca878&language=fr-FR&query=${query}`)
        .then((response) => {
          this.results = response.data.results;
        });
      console.log(this.results);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
    width: 100px;
}
</style>
