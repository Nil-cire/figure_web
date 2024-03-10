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

const props = defineProps<
    {
        topics: Article[]
    }
>()

const emit = defineEmits<{
    articleClick: [id: string]
}>()

function onArticleClick(id: string) {
    emit('articleClick', id)
}

function getTopicImageUrlOrEmpty(index: number) {
    if (index <= props.topics.length - 1) {
        return props.topics[index].image_url
    } else {
        return ""
    }
}

function getTopicTitleOrEmpty(index: number) {
    if (index <= props.topics.length - 1) {
        return props.topics[index].title
    } else {
        return ""
    }
}

function getTopicMainTopicOrEmpty(index: number) {
    if (index <= props.topics.length - 1) {
        return props.topics[index].main_topic
    } else {
        return ""
    }
}

function getTopicIdOrEmpty(index: number) {
    if (index <= props.topics.length - 1) {
        return props.topics[index].id
    } else {
        return ""
    }
}
</script>

<template>
    <div class="grid-holder">
        <div class="topic-holder" @click="onArticleClick(getTopicIdOrEmpty(0))">
            <img class="image" :src="getTopicImageUrlOrEmpty(0)" alt="Popular article of current topic">
            <div class="cover"></div>
            <div class="tag-item"> {{ getTopicMainTopicOrEmpty(0) }} </div>
            <div class="title">{{ getTopicTitleOrEmpty(0) }}</div>
        </div>
        <div class="topic-holder" @click="onArticleClick(getTopicIdOrEmpty(1))">
            <img class="image" :src="getTopicImageUrlOrEmpty(1)" alt="Popular article of current topic">
            <div class="cover"></div>
            <div class="tag-item"> {{ getTopicMainTopicOrEmpty(1) }} </div>
            <div class="title">{{ getTopicTitleOrEmpty(1) }}</div>
        </div>
        <div class="topic-holder" @click="onArticleClick(getTopicIdOrEmpty(2))">
            <img class="image" :src="getTopicImageUrlOrEmpty(2)" alt="Popular article of current topic">
            <div class="cover"></div>
            <div class="tag-item"> {{ getTopicMainTopicOrEmpty(2) }} </div>
            <div class="title">{{ getTopicTitleOrEmpty(2) }}</div>
        </div>
        <div class="topic-holder" @click="onArticleClick(getTopicIdOrEmpty(3))">
            <img class="image" :src="getTopicImageUrlOrEmpty(3)" alt="Popular article of current topic">
            <div class="cover"></div>
            <div class="tag-item"> {{ getTopicMainTopicOrEmpty(3) }} </div>
            <div class="title">{{ getTopicTitleOrEmpty(3) }}</div>
        </div>
    </div>
</template>

<style scoped>
.grid-holder {
    display: grid;
    grid-template-columns: 1fr 1fr;

}

.topic-holder {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: calc(100% * (120 / 300));
    /* border: 0.5rem solid white; */
}

.topic-holder:hover {
    cursor: pointer;
}

.topic-holder img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
}

.cover {
    position: absolute;
    top: 0;
    background-color: gray;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 2;
}

.cover:hover {
    opacity: 0.2;
}

.title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    font-size: 1.1rem;
    padding: 0 2rem;
    text-align: start;
    z-index: 3;

    display: flex;
    align-items: center;

    line-height: 2em;
    height: 4em;
    overflow: hidden;

    margin-top: 1rem;
    font-weight: bold;
}

.title:hover {
    color: orange;
}

.tags-holder {
    display: flex;
    flex-wrap: wrap;
}

.tag-item {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 1.1rem;
    background-color: white;
    color: black;
    border: 2px, black;
    padding: 0.35rem 1.25rem;
    margin: 1rem 1rem 1rem 1rem;
    z-index: 3;
    font-weight: bold;
}
</style>