<template>
    <button class="nav-button">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
</script>
<style scoped>
.nav-button {
    background-color: transparent;
    text-decoration: none;
    padding: 1em 2em;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 3px;
    margin: 3px;
    cursor: pointer;
    color: var(--color-text);
}
</style>