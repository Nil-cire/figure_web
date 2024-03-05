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
    categoryClick: [category: string]
    tagClick: [tag: string]
}>()

function onCategoryClick(category: string | undefined) {
    if (category == undefined) return
    emit("categoryClick", category)
}

function onTagClick(tag: string) {
    emit("tagClick", tag)
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

<template>
    <div class="holder">
        <img :src="article?.image_url">
        <dic class="image-cover"></dic>
        <div class="content-holder">
            <div class="main-tag-holder">
                <div @click="onCategoryClick(article?.main_topic)" class="main-tag"> {{ article?.main_topic }}</div>
            <!-- <div v-if="article?.sub_topic != ''" class="main-tag-secondary"> {{ article?.sub_topic }} </div> -->
            </div>
            <div class="sub-tag-holder">
                <template v-for="tag in article?.tags">
                    <div @click="onTagClick(tag)" class="sub-tag">{{ tag }}</div>
                </template>
            </div>

            <div class="title">{{ article?.title }}</div>
            <div class="date">{{ toDateTime(article?.timestamp) }}</div>
        </div>
    </div>
</template>

<style scoped>
.holder {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: calc(100% * (60 / 300));
}

.holder img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0.4; */
}

.image-cover {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
}

.content-holder {
    position: absolute;
    top: 0;
    /* padding: 2rem; */
    z-index: 5;
    margin-left: 1rem;
    max-height: 100%;
    height: 100%;
}

.main-tag-holder {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.main-tag {
    background-color: transparent;
    color: white;
    border-radius: 1rem;
    border: white 2px solid;
    padding: 0.15rem 0.75rem;
    font-size: 1.1rem;
    margin-right: 0.7rem;
}

.main-tag:hover {
    background-color: rgb(149, 33, 10);
    cursor: pointer;
}

.main-tag-secondary {
    background-color: red;
    color: white;
    border-radius: 1rem;
    border: transparent 2px solid;
    padding: 0.15rem 0.75rem;
    font-size: 1.1rem;
    opacity: 0.6;
}

.main-tag-secondary:hover {
    background-color: rgb(255, 255, 255, 0.2);
    cursor: pointer;
}

.sub-tag-holder {
    display: inline-flex;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.sub-tag {
    background-color: red;
    color: white;
    border-radius: 6px;
    padding: 0.15rem 0.75rem;
    margin-right: 0.5rem;
    opacity: 0.6;
}

.sub-tag:hover {
    background-color: rgb(149, 33, 10);
    cursor: pointer;
}

.title {
    font-size: 2.2rem;
    color: white;
    max-lines: 2;
    z-index: 5;
    margin-top: 1rem;
    padding: 0 1rem;
    line-height: 1.4;
    /* height: 100%; */
}

.date {
    font-size: 1rem;
    color: gray;
    max-lines: 1;
    padding: 0 1rem;
}
</style>