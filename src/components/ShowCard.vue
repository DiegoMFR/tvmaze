<template>
    <article class="show-card">
        <RouterLink :to="`/shows/${show.id}`">
        <img class="image" :alt="show.name" :src="show.image?.medium">
        </RouterLink>
    </article>
</template>
<script setup lang="ts">
defineProps(['show']);

</script>
<style scoped>
.show-card {
    margin: 5px;
}

.show-card .image{
    width: 160px;
}

@media (max-width: 1024px) {
    .show-card .image{
        width: 140px;
    }
}
</style>