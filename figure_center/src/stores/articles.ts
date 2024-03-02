import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import { Article } from '@/class/article'

interface Article {
    "id": string,
    "title": string,
    "timestamp": string,
    "main_topic": string,
    "sub_topic": string,
    "content": string[],
    "tags": string[],
    "release": string,
    "image_url": string,
    "twitter": string,
    // "read": boolean
}

export const useArticlesStore = defineStore('articles', () => {
    const upToDate = ref(false)
    const articles = ref([] as Article[])

    function addArticle(article: Article) {
        const a = articles.value.find(item => item.id === article.id)
        const notExist = (a == undefined)
        if (notExist) {
            articles.value.push(article)
            articles.value.sort((a, b) => b.createdAt - a.createdAt)
        }
    }

    function addArticles(articleList: Article[]) {
        articleList.forEach((article) => {
            const a = articles.value.find(item => item.id === article.id)
            const notExist = (a == undefined)
            if (notExist) articles.value.push(article)
        })
        articles.value.sort((a, b) => b.createdAt - a.createdAt)
    }

    // function readArticle(id: string) {
    //     const a = articles.value.find(item => item.id === article.id)
    //     const exist = (a != undefined)
    //     if (exist) a.read = true
    // }

    const twitter_art = ref('')

    function setTwitterArt(id: string) {
        twitter_art.value = id
    }

    const twitter_cosplay = ref('')

    function setTwitterCosplay(id: string) {
        twitter_cosplay.value = id
    }
  
    return { upToDate, articles, addArticle, addArticles, twitter_art, setTwitterArt, twitter_cosplay, setTwitterCosplay }
  })