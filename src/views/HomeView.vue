<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ShowsList from '@/components/showsList.vue';

const allShows = ref();
const allGenres = ref();

const fetchShows = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    const list = await response.json();
    allShows.value = list;
    allGenres.value = new Set(list.reduce((acc: [], curr: {genres: []}) => [...acc, ...curr.genres], []));
  } catch (error) {
    console.error(error);
  }
}

const getFilteredShowsByGenre = (genre: string) => {
  return allShows.value
    .filter((show: { genres: string[]; }) => show.genres.includes(genre))
    .sort((a: { rating: { average: number; }; }, b: { rating: { average: number; }; }) => b.rating.average - a.rating.average);;

}

onMounted(() => fetchShows())

</script>

<template>
  <main>
    <section class="genre-container" v-for="genre in allGenres" :key="genre">
      <h2>{{ genre }}</h2>
      <ShowsList :showsList="getFilteredShowsByGenre(genre)"></ShowsList>
    </section>
  </main>
</template>
<style scoped>
main {
  margin-top: 7rem;
}
h2 {
  margin-left: 1em;
  color: var(--color-highlight);;
}
</style>