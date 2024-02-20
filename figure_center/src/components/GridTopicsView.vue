<script setup lang="ts">
import type { PropType } from 'vue';


interface TopicObject {
    title: string,
    imageUrl: string,
    link: string
}

const props = defineProps<
    {
        topics: TopicObject[]
    }
>()
</script>

<template>
    <div class="grid-holder">
        <div class="topic-holder">
            <img class="image" :src="props.topics[0].imageUrl">
            <div class="cover"></div>
            <div class="title">{{ props.topics[0].title }}</div>
        </div>
        <div class="topic-holder">
            <img class="image" :src="props.topics[1].imageUrl">
            <div class="cover"></div>
            <div class="title">{{ props.topics[1].title }}</div>
        </div>
        <div class="topic-holder">
            <img class="image" :src="props.topics[2].imageUrl">
            <div class="cover"></div>
            <div class="title">{{ props.topics[2].title }}</div>
        </div>
        <div class="topic-holder">
            <img class="image" :src="props.topics[3].imageUrl">
            <div class="cover"></div>
            <div class="title">{{ props.topics[3].title }}</div>
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
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 2;
}

.cover:hover {
    opacity: 0.2;
}

.title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    font-size: 1.5rem;
    padding: 0 2rem;
    text-align: start;
    z-index: 3;
}
</style>