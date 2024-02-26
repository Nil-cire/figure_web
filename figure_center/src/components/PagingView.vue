<template>
    <div class="holder">
        <div v-if="!isFirst" class="button-control" @click="toTop">&lt;&lt;</div>
        <div v-if="!isFirst" class="button-control" @click="toLast">&lt;</div>
        <template v-for="button in buttons">
            <div v-if="button.selected" class="button-selected" @click="toPage(button.count)">{{ button.count }}</div>
            <div v-else class="button-unselected" @click="toPage(button.count)">{{ button.count }}</div>
        </template>
        <div v-if="!isLast" class="button-control" @click="toNext">></div>
        <div v-if="!isLast" class="button-control" @click="toEnd">>></div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Button {
    count: number,
    selected: boolean
}

const emit = defineEmits<{
    toPage: [page: number]
}>()

function toTop() {
    current.value = 1;
    emit('toPage', 1)
}

function toLast() {
    current.value -= 1;
    emit('toPage', current.value)
}

function toNext() {
    current.value += 1;
    emit('toPage', current.value)
}

function toEnd() {
    current.value = props.counts;
    emit('toPage', current.value)
}

function toPage(page: number) {
    current.value = page;
    emit('toPage', current.value)
}

const buttons = computed(() => {
    let maxDisplay = (props.counts >= 7) ? 7 : props.counts
    const list: Button[] = [];
    if (props.counts == 1) {
        list.push(
            {
                count: 1,
                selected: true
            }
        )
        return list;
    } else {
        const halfDisplay = maxDisplay / 2;
        let startIndex = (current.value > halfDisplay) ? Math.floor(current.value - halfDisplay) : 1

        for(let i = 0; i < 8; i++) {
            if (startIndex > props.counts) break;
            list.push(
                {
                    count: startIndex,
                    selected: startIndex == current.value
                }
            )
            startIndex++;
        }
        return list;
    }
})

const props = defineProps<{
    counts: number
    currentPage: number
}>()

const current = ref(props.currentPage)

const isFirst = computed(() => {
    return current.value == 1;
})

const isLast = computed(() => {
    return current.value == props.counts;
})


</script>

<style scoped>
.holder {
    display: flex;
    justify-content: center;
}

.button-unselected {
    background-color: gray;
    color: white;
    /* aspect-ratio: 1/1; */
    padding: 1rem;
    margin: 0 0.25rem 0 0.25rem;
    /* border-radius: 1rem; */
    font-size: larger;
    font-weight: bold;
}

.button-unselected:hover {
    cursor: pointer;
    opacity: 0.7;
}

.button-selected {
    background-color: rgb(163, 4, 4);
    color: white;
    /* aspect-ratio: 1/1; */
    padding: 1rem;
    margin: 0 0.25rem 0 0.25rem;
    /* border-radius: 1.5rem; */
    font-size: larger;
    font-weight: bold;
    text-decoration: underline
}

.button-selected:hover {
    cursor: pointer;
    opacity: 0.7;
}

.button-control {
    background-color: red;
    color: white;
    /* aspect-ratio: 1/1; */
    padding: 1rem;
    margin: 0 0.25rem 0 0.25rem;
    border-radius: 2rem;
    font-size: larger;
    font-weight: bold;
}

.button-control:hover {
    cursor: pointer;
    opacity: 0.7;
}
</style>