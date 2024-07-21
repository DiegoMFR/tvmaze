<template>
    <header>
        <RouterLink to="/"><H1>TVMAZE</H1></RouterLink>
        <nav class="main-navigation">
            <ul>
                <li> 
                    <NavButton @click="doSearch">
                            <span v-if="showSearchInput">
                                <input ref="searchInput" class="search-input" type="text" @blur="stopSeach" @keypress.enter="doSubmit" placeholder="Type something...">
                            </span>
                            <span v-else>
                                Search
                            </span>
                    </NavButton>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup lang="ts">
import NavButton from './NavButton.vue';
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showSearchInput = ref(false);
const searchInput = ref<HTMLInputElement>();

const doSearch = () => {
    showSearchInput.value = true;
    nextTick(() => {
        searchInput.value?.focus();
      });
}

const stopSeach = () => {
    showSearchInput.value = false;
}

const doSubmit = (e: Event) => {
    router.push(`/search/q=${(e.target as HTMLInputElement).value}`)
}
</script>
<style scoped>
    header {
        display: flex;
        padding: 1em;
        z-index: 1;
        justify-content: flex-start;
        position: fixed;
        top: 0;
        width: 100%;
    }

    header::before {
        content: '';
        display: block;
        background: var(--color-background);
        opacity: 0.9;
        opacity: 0.9;
        width: 100%;
        position: absolute;
        top: 0;
        height: 100%;
        left: 0;
        z-index: -1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    :deep(a) {
        text-decoration: none;
    }
       
    :deep(a) h1 {
        font-weight: bolder;
        color: var(--color-highlight);
        border: 3px solid var(--color-highlight);;
        padding: 0 1rem;
    }

    .main-navigation {
        margin-left: auto;
    }

    .main-navigation ul {
        list-style: none;
    }

    .search-input {
        background-color: transparent;
        border: none;
    }

    .search-input:focus {
        outline: none;
        color: var(--text-color);
    }
    
    .search-input:before {
        content: ":";
    }
</style>