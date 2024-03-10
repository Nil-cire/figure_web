<template>
    <div class="blog-unit">
        <div class="image-container">
            <img :src="imageSrc" alt="Image of anime merchandise">
        </div>
        <div class="content-container">
            <h3>{{ title }}</h3>
            <!-- <p class="summary">{{ summary }}</p> -->
            <p class="timestamp">{{ timestamp }}</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">

const props = defineProps<{
    imageSrc: string,
    title: string,
    timestamp: string,
}>()

</script>
  
<style scoped>
.blog-unit {
    /* display: flex; */
    margin-bottom: 20px;
}

.image-container {
    /* flex: 1; */
    /* margin-right: 20px; */
}

.image-container img {
    width: 100%;
    height: auto;
}

.content-container {
    /* flex: 2; */
}

h3 {
    font-size: 1rem;
    margin-bottom: 10px;
}

.summary {
    color: #555;
    margin-bottom: 10px;
}

.timestamp {
    font-size: 0.5rem;
    color: #888;
}
</style>