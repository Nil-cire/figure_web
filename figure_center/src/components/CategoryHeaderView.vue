<template>
    <div class="holder">
        <div class="content">
            {{ title }}
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string
    }>()
</script>

<style scoped>
.holder {
    display: flex;
    justify-items: center;
    background-color: red;
}

.content {
    font-size: 1.4rem;
    color: white;
    margin: 0.5rem auto 0.5rem 2rem;
}
</style>