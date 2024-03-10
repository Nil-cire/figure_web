<script setup lang="ts">

interface Article {
    "id": string,
    "title": string,
    "timestamp": string,
    "main_topic": string,
    "sub_topic": string,
    "content": string[],
    "tags": string[],
    "release": string,
    "image_url": string,
    "twitter": string,
    "link": string
}

const props = defineProps<{
    article: Article
}>()

const emit = defineEmits<{
    articleClick: [id: string]
}>()

function onClick() {
    emit('articleClick', props.article.id)
}

</script>

<template>
    <div class="holder" @click="onClick()">
        <img :src="article.image_url" alt="Image of anime merchandise">
        <div class="cover"></div>
        <div class="title">{{ article.title }}</div>
    </div>
</template>

<style scoped>
.holder {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: calc(100% * (100 / 300));
    /* aspect-ratio: 1/3; */
    /* background-size: contain;
    background-position: center;
    background-repeat: no-repeat; */
}

.holder:hover {
    cursor: pointer;
    opacity: 0.7;
    color: red;
}

.holder img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

/* .cover {
    width: 100%;
    position: absolute;
    top: 0;
    background: rgb(0, 0, 0, 0.4);
} */

.title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 0.75rem;
    /* max-lines: 2; */
    line-height: 1.5em;
    height: 3.2em;
    overflow: hidden;
    background-color: rgb(0, 0, 0, 0.8);
    color: white;
}
</style>