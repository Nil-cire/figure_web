<template>
  <div class="menu" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
    <div class="menu-title">
      {{ title }}
    </div>
    <transition name="fade">
      <div v-if="showDropdown" class="dropdown">
        <ul>
          <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false" v-for="(item, index) in menus"
            :key="index">{{ item.displayName }}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'

interface Category {
  displayName: string,
  path: string
}

const showDropdown = ref(false)
// const emphasize = ref(false)

const props = defineProps<{
  title: string
  menus: Category[]
}>()
</script>
  
<style scoped>
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  /* Align horizontal */
  align-items: center;
  /* Align vertical */
  height: 40px;
  text-align: center;
  cursor: pointer;
}

.menu:hover {
  background-color: rgb(149, 33, 10);
}

.menu-title {
  color: #ffffff;
  font-weight: bold;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  /* display: none; */
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 5;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 8px;
  cursor: pointer;
}

.dropdown li:hover {
  color: red;
  opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
  