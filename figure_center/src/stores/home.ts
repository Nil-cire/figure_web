import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const upToDate = ref(false)
  const twitter_art = ref('')
  const twitter_cosplay = ref('')
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

  return { upToDate, twitter_art, twitter_cosplay }
})