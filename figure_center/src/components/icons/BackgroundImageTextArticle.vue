<script setup lang="ts">
import { computed } from 'vue';

interface ArticleVo {
    title: string,
    imageUrl: string,
    link: string
}

const props = defineProps<{
    article: ArticleVo
}>()

// const holderStyle = computed(() => {
//     return {
//         'background': `url(${props.article.imageUrl})`
//     }
// })
</script>

<template>
    <div class="holder">
        <img :src="article.imageUrl">
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
    opacity: 0.4;
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
    padding: 0.15rem 0.75rem;
    max-lines: 2;
    background-color: rgb(0, 0, 0, 0.4);
}
</style>