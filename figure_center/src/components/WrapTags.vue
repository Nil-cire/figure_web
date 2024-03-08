<script setup lang="ts">
// interface TagVo {
//     name: string,
//     link: string
// }

const props = defineProps<{
    tags: string[] | undefined
}>()

const emit = defineEmits<{
    tagClick: [tag: string]
}>()

function onTagClick(tag: string) {
    emit('tagClick', tag)
}
</script>

<template>
    <div class="tags-holder">
        <template v-for="tag in tags">
            <div @click="onTagClick(tag)" class="tag-item"> {{ tag }} </div>
        </template>
    </div>
</template>

<style scoped>
.tags-holder {
    display: flex;
    flex-wrap: wrap;
}

.tag-item {
    border-radius: 1.1rem;
    background-color: white;
    color: black;
    border: 2px, black;
    padding: 0.35rem 1.25rem;
    margin: 0.25rem;
    opacity: 0.5;
    font-weight: bold;
}

.tag-item:hover {
    background-color: rgb(149, 33, 10);
    cursor: pointer;
}
</style>