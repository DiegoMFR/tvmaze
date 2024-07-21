<template>
    <section>
        <ShowsList :showsList="shows" wrap></ShowsList>
    </section>
</template>
<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import ShowsList from '@/components/showsList.vue';

    const props = defineProps({
        query: {
            type: String,
        }
    });
    const results = ref();

    watchEffect(async () => {
        try {
            const showData = await fetch(`https://api.tvmaze.com/search/shows?${props.query}`);
            results.value = await showData.json();
        } catch (e) {
            console.error(e);
        }
    })

    const shows = computed(() => results.value?.map((result: { show: object; }) => result.show))
</script>
<style scoped>
section {
    margin-top: 4rem;
}
</style>