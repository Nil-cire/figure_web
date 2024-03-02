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

export const useCategoryArticlesStore = defineStore('category_articles', () => {
    const articles = ref(new Map<string, Article[]>())
    function addArticle(category: string, article: Article) {
        const data = articles.value.get(category)
        const list = (data == undefined) ? [] : data
        if (data == undefined) {
            articles.value.set(category, list)
        } else {
            list.push(article)
            articles.value.set(category, list)
        }
    }

    function addArticles(category: string, articleList: Article[]) {
        const data = articles.value.get(category)
        const list = (data == undefined) ? [] : data
        if (data == undefined) {
            articles.value.set(category, list)
        } else {
            articleList.forEach((article) => {
                list.push(article)
            })
            articles.value.set(category, list)
        }
    }

    return { articles, addArticle, addArticles }
})