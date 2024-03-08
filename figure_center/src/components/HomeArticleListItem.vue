<template>
    <div @click="onArticleClick()" class="blog-unit">
        <div class="image-container">
            <img :src="article?.image_url" alt="figure image">
        </div>
        <div class="content-container">
            <h3 class="title">{{ article?.title }}</h3>
            <div class="content"> {{ contentString() }} </div>
            <p class="timestamp">{{ toDateTime(article?.timestamp) }}</p>
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

function contentString() {
    let str = ''
    props.article?.content.forEach((content) => {
        if (!content.includes('http')) {
            str += `${content}, `
        }
    })
    return str
}

function toDateTime(timestamp: string | undefined) {
    if (timestamp == undefined) {
        return ""
    } else {
        var date_ob = new Date(parseInt(timestamp) * 1000);
        const year = date_ob.getFullYear();
        const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        const date = ("0" + date_ob.getDate()).slice(-2);
        return `${year}-${month}-${date}`
    }
}

</script>
  
<style scoped>
.blog-unit {
    display: flex;
    width: 100%;
    background-color: rgb(247, 247, 232);
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
    margin: auto 2rem auto 2rem;
    /* background-color: blue; */
    /* padding-top: calc(100% * (100 / 300)); */
}

/* h3 {
    font-size: 1.5rem;
    line-height: 2em;
    height: 2em;
    margin-bottom: 2.5rem;
} */

.title {
    /* font-size: 1.5rem; */
    line-height: 2em;
    height: 4em;
    font-weight: bold;
    color: red;
    overflow: hidden;
    margin-bottom: 0.75rem;
}

.content {
    line-height: 2em;
    height: 4em;
    overflow: hidden;
    margin-bottom: 0.75rem;
    color: black;
}

.timestamp {
    color: #888;
    /* margin-bottom: 2.5rem; */
}
</style>
  