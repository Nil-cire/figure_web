<template>
        <div class="header-menu-bar">
            <template v-for="menu in menus" :key="menu.id">
                <HoverExpandMenuButton @click="onMenuClicked(menu.displayName)" class="menu-button" :title="menu.displayName" :menus="menu.categories" />
            </template>
        </div>
</template>

<script setup lang="ts">

import HoverExpandMenuButton from '../components/button/HoverExpandMenuButton.vue'

const emit = defineEmits<{
    menuClick: [name: string]
}>()

function onMenuClicked(category: string) {
    emit('menuClick', category)
}

const menus = [
    {
        id: 0,
        displayName: 'Figure',
        path: 'figure',
        categories: [
            // {
            //     displayName: 'PVC',
            //     path: 'pvc'
            // },
            // {
            //     displayName: 'GK',
            //     path: 'gk'
            // }
        ]
    },
    {
        id: 1,
        displayName: 'Anime',
        path: 'anime',
        categories: []
    },
    {
        id: 2,
        displayName: 'Games',
        path: 'games',
        categories: []
    },
    {
        id: 3,
        displayName: 'Prize & Merch',
        path: 'merch',
        categories: []
    },
    {
        id: 4,
        displayName: 'Travel',
        path: 'travel',
        categories: []
    },
    {
        id: 5,
        displayName: 'LEGO',
        path: 'lego',
        categories: []
    },
    {
        id: 6,
        displayName: 'VTuber',
        path: 'vtuber',
        categories: []
    },
    {
        id: 6,
        displayName: 'Pokémon TCG',
        path: 'vtuber',
        categories: []
    },
]

</script>

<style scoped>

.header-menu-bar {
  display: flex;
  justify-content: space-between;
  /* padding-right: 20px; */
  width: 100%;
  background-color: rgb(227, 100, 20);
}

.menu-button {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 20;
}
</style>