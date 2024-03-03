import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const upToDate = ref(false)
  const twitter_art = ref('')
  const twitter_cosplay = ref('')
  const tags = ref<string[]>([])
  const popular_ids = ref<string[]>([])

  return { upToDate, twitter_art, twitter_cosplay, tags, popular_ids }
})

// export const useTagsStore = defineStore('tags', () => {
//   const upToDate = ref(false)
//   const tags = ref<string[]>([])

//   return { upToDate, tags }
// })

// export const usePopularStore = defineStore('popular', () => {
//   const upToDate = ref(false)
//   const populars = ref<string[]>([])

//   return { upToDate, populars }
// })

