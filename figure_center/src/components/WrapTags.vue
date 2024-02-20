<script setup lang="ts">
interface TagVo {
    name: string,
    link: string
}

const props = defineProps<{
    tags: TagVo[]
}>()
</script>

<template>
    <div class="tags-holder">
        <template v-for="tag in tags">
            <div class="tag-item"> {{ tag.name }} </div>
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
    background-color: red;
    color: white;
    border: 2px, black;
    padding: 0.35rem 1.25rem;
    margin: 0.25rem;
}

.tag-item:hover {
    background-color: rgb(149, 33, 10);
    cursor: pointer;
}
</style>