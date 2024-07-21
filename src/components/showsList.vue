<template>
    <section>
        <ul class="flex-list" :class="wrap && 'wrap'">
            <li v-for="show in showsList" :key="show.id">
                <ShowCard :show="show"></ShowCard>
            </li>
        </ul>
    </section>
</template>
<script setup lang="ts">
import ShowCard from './ShowCard.vue';

defineProps({
    showsList: {
        type: Array<{id: string}>,
        default: () => [],
    },
    wrap: {
        type: Boolean,
        default: false,
    }
})
</script>
<style scoped>
section {
    overflow-x: auto;
}
.flex-list {
    display: flex;
    flex-direction: row;
    padding: 0;
}

.flex-list.wrap {
    flex-wrap: wrap; 
}

:deep(li) {
    list-style: none;
}
</style>