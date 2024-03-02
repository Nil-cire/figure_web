import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Article {
    "id": number,
    "title": string,
    "timestamp": string,
    "main_topic": string,
    "sub_topic": string,
    "content": string[],
    "tags": string[],
    "release": string,
    "image_url": string,
    "twitter": string
}

export const useArticlesStore = defineStore('articles', () => {
    const articles = ref([] as Article[])
    function addArticle(article: Article) {
        articles.value.push(article)
    }

    function addArticles(articleList: Article[]) {
        articleList.forEach((article) => {
            articles.value.push(article)
        })
    }

    const twitter_art = ref('')

    function setTwitterArt(id: string) {
        twitter_art.value = id
    }

    const twitter_cosplay = ref('')

    function setTwitterCosplay(id: string) {
        twitter_cosplay.value = id
    }
  
    return { articles, addArticle, addArticles, twitter_art, setTwitterArt, twitter_cosplay, setTwitterCosplay }
  })