<template>
    <div v-if="!show">Loading...</div>
    <section v-else>
        <article class="hero-image">
            <div>
                <h2>{{ show?.name }}</h2>
                <ul class="genres-list">
                    <li v-for="genre in show?.genres" :key="genre">{{ genre }}</li>
                </ul>
                <span v-html="show?.summary"></span>
            </div>
        </article>
        <aside class="footer">
            <dl class="additional-data">
                <span>
                    <dt>
                    Language
                    </dt>
                    <dd>
                        {{ show?.language || 'N/A' }}
                    </dd>
                </span>
                <span>
                    <dt>
                        Status
                    </dt>
                    <dd>
                        {{ show?.status || 'N/A'}}
                    </dd>
                </span>
                <span>
                    <dt>
                        Rating
                    </dt>
                    <dd>
                        {{ show?.rating.average || 'N/A'}}
                    </dd>
                </span>
            </dl>
            <a :href="show.url"><NavButton>Watch now</NavButton></a>
        </aside>
    </section>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NavButton from '@/components/NavButton.vue';

const props = defineProps({
    id: {
        type: String,
    }
})

const show = ref();
const bgImage = ref();

onMounted(async () => {
    if (props.id) {
        try {
            const showPromise = fetch(`https://api.tvmaze.com/shows/${props.id}`);
            const imagePromise = fetch(`https://api.tvmaze.com/shows/${props.id}/images`);
            const showData = await showPromise;
            const imagesList = await imagePromise;
            show.value = await showData.json();
            bgImage.value = (await imagesList.json()).find((image: { type: string; }) => image?.type === "background")?.resolutions?.original;
        } catch (e) {
            console.error(e);
        }
    }
})
</script>
<style scoped>
section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.hero-image {
    flex-grow: 1;
    display: flex;
    background-image: v-bind("`url('${bgImage?.url}')`");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 30%;
    text-shadow: 0 0 5px var(--color-background);
}

.hero-image h2 {
    font-size: 3rem;
    font-weight: bolder;
}

.hero-image div {
    background: linear-gradient(to top, var(--color-background), rgba(0, 0, 0, 0));
    flex-direction: column;
    align-self: flex-end;
    padding: 1rem 2rem;
    width: 100%;
}

.footer {
    display: flex;
    background-color: var(--color-background);
    padding: 1rem 2rem 2rem;
    align-items: end;
}

.footer a {
    margin-left: auto;
}

.genres-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 6px 0;
}

.genres-list li {
    border: 1px solid var(--color-border);
    border-radius: 3px;
    margin-right: 6px;
    padding: 0 3px;
    font-size: smaller;
}

.additional-data {
    display: flex;
    font-size: smaller;
    flex-wrap: wrap;
    justify-content: left;
}

.additional-data span {
    display: flex;
    margin-bottom: 5px;
}

.additional-data dt {
    padding: 3px 6px;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 3px 0 0 3px;
    margin: 0 0 0 3px;
    background-color: rgba(255, 255, 255, 0.2);
}

.additional-data dd {
    padding: 3px 6px;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 0 3px 3px 0;
    margin: 0 3px 0 0;
}
</style>