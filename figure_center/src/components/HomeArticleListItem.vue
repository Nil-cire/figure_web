<template>
    <div @click="onArticleClick()" class="blog-unit">
        <div class="image-container">
            <img :src="article?.image_url" alt="figure image">
        </div>
        <div class="content-container">
            <h3>{{ article?.title }}</h3>
            <p class="timestamp">{{ article?.timestamp }}</p>
        </div>
    </div>
</template>
  
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
    article: Article | undefined
}>()

const emit = defineEmits<{
    onArticleClick: [article: Article | undefined]
}>()

function onArticleClick() {
    emit('onArticleClick', props?.article)
}

</script>
  
<style scoped>
.blog-unit {
    display: flex;
    width: 100%;
    background-color: lightblue;
    /* grid-template-columns: 1fr 2fr; */
}

.blog-unit:hover {
    cursor: pointer;
    color: red;
}

.image-container {
    flex: 1;
    position: relative;
    max-width: 300px;
    /* height: 100%; */
    max-height: 300px;
    min-width: 250px;
    min-height: 250px;
    aspect-ratio: 1/1;
    /* padding-top: calc(100% * (50 / 300)); */
}

.image-container img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-container img:hover {
    opacity: 0.85;
}

.image-container image:hover {
    transform: scale(1.5)
}

.content-container {
    flex: auto;
    margin: auto 2rem auto 0;
    /* background-color: blue; */
    /* padding-top: calc(100% * (100 / 300)); */
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    margin-left: 2rem;
}

.timestamp {
    color: #888;
    /* margin-bottom: 2.5rem; */
    margin-left: 2rem;
}
</style>
  