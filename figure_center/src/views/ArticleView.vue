<script setup lang="ts">
import HoverExpandMenuButton from '../components/button/HoverExpandMenuButton.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import HomeArticleListItem from '@/components/HomeArticleListItem.vue';
import HomeSimpleArticleListItem from '@/components/HomeSimpleArticleListItem.vue';
import EmbedView from '@/components/EmbedView.vue'
import GridTopicsView from '@/components/GridTopicsView.vue';
import WrapTags from '@/components/WrapTags.vue';
import BackgroundImageTextArticle from '@/components/icons/BackgroundImageTextArticle.vue';
import ArticleBanner from '@/components/ArticleBanner.vue'
import FooterView from '@/components/FooterView.vue';
import { computed, onMounted, ref, watch } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import CategoryHeader from '@/components/CategoryHeaderView.vue';
import TopIconView from '@/components/TopIconView.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import { useArticlesStore } from '@/stores/articles'
import axios from 'axios'
// import Article from '@/class/article'
import { getPosts, getPostsByMainTag, getPostsById } from '@/data/post';
import WelcomeItem from '@/components/WelcomeItem.vue';
import { useHomeStore } from '@/stores/home';
import { getHomeData } from '@/data/home';

const homeStore = useHomeStore()
const articlesStore = useArticlesStore();
const route = useRoute();
const articleId = ref(route.params.id as string)

watch(route, () => {
    article.value = undefined
    articleId.value = route.params.id as string
    getArticle(articleId.value)
    _getHomeData()
})

function navigate_article(path: string | number) {
    router.push('/article/' + path)
}

function navigate_category(category: string) {
  router.push('/category/' + category)
}

function navigate_tag(tag: string) {
  router.push('/tag/' + tag)
}

// const more_display_max = 10

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
    "link": string
}

const article = ref<Article>()
const more_articles = ref<Article[]>([])

onMounted(() => {
    getArticle(articleId.value)
    _getHomeData()
})

async function getArticle(articleId: string) {
    const storeArticles = articlesStore.articles
    const storeArticle = storeArticles.find(item => item.id == articleId)
    if (storeArticle == undefined) {
        console.log("no article, fetching...")
        const post = await getPostsById(articleId)
        article.value = post
        console.log(`post = ${post}`)
        articlesStore.addArticle(post)
        getReadMoreArticles(post.main_topic, articleId)
    } else {
        console.log("article found")
        article.value = storeArticle
        getReadMoreArticles(storeArticle.main_topic, articleId)
    }
    window.scrollTo(0, 0);
}

async function getReadMoreArticles(tag: string, articleId: string) {
    // console.log(`tag = ${tag}`)
    const storeArticles = articlesStore.articles
    const moreArticles = storeArticles.filter(item => item.main_topic == tag)
    console.log(`moreArticles = ${moreArticles.length}`)
    if (moreArticles.length < 10) {
        // console.log(`moreArticles < 10`)
        const posts = await getPostsByMainTag(tag, 1)
        const filter_post = posts.filter((item) => item.id != articleId)
        more_articles.value = filter_post
        articlesStore.addArticles(posts)
    } else {
        // console.log(`moreArticles >= 10`)
        const filter_post = moreArticles.filter((item) => item.id != articleId)
        more_articles.value = filter_post
    }
}

function imageStyle(url: string): string {
    return `<img style="width:600px; margin: 1rem auto;" src="${url}">`
}

const tags_ref = ref<string[]>([])
const popular_ref = ref<Article[]>([])

async function _getHomeData() {
  const init = homeStore.upToDate
  console.log(`init = ${init}`)
  if (!init) {
    const homeData = await getHomeData()
    // cache in store
    homeStore.twitter_art = homeData.twitter_art
    homeStore.twitter_cosplay = homeData.twitter_cosplay
    homeStore.tags = homeData.tags
    homeStore.popular_ids = homeData.popular_ids

    // show data
    // twitter_art.value = homeData.twitter_art
    // twitter_consplay.value = homeData.twitter_cosplay
    tags_ref.value = homeData.tags
    popular_ref.value = await _getPopularData(homeData.popular_ids)
  } else {
    // twitter_art.value = homeStore.twitter_art
    // twitter_consplay.value = homeStore.twitter_cosplay
    tags_ref.value = homeStore.tags
    popular_ref.value = await _getPopularData(homeStore.popular_ids)
  }
}

async function _getPopularData(ids: string[]) {
  const popularPosts = [] as Article[]
  for (let i = 0; i < ids.length; i++) {
    const post = await _getAticle(ids[i])
    if (post != undefined) popularPosts.push(post)
  }
  return popularPosts
}

async function _getAticle(id: string) {
  const post = articlesStore.articles.find((item) => item.id == id)
    if (post != undefined) {
      return post
    } else {
      const fetch_post = await getPostsById(id)
      articlesStore.addArticle(fetch_post)
      return post
    }
}

const readMore = "Read more"

</script>

<template>
    <div class="main-holder">
        <div class="inner-main-holder">
            <TopIconView />
            <header class="header-block">
                <HeaderMenu @menu-click="(category) => navigate_category(category)"/>
                <ArticleBanner class="banner" :article="article" />
            </header>
            <main>
                <div class="main-body">
                    <div class="main-body-left">
                        <div class="main-body-left-article">
                            <!-- <CategoryHeader :title="article.title" /> -->
                            <!-- <div style="height: 2rem;">Hot Topics</div>
                <GridTopicsView :topics="subTopics" />
                <div style="height: 2rem;"></div>
                <div style="height: 2rem;">Latest News</div>
                <template v-for="n in 10">
                    <HomeArticleListItem class="body-left-article" :imageSrc="homeArticle.imageSrc"
                        :title="homeArticle.title" :timestamp="homeArticle.timestamp" />
                </template> -->
                            <div>
                                <template v-for="(content, index) in article?.content">
                                    <div>
                                        <div v-if="content.includes('http')" class="article-image-content"
                                            v-html="imageStyle(content)">
                                        </div>
                                        <div v-else class="article-content" v-html="content"></div>
                                    </div>
                                </template>
                                <div class="reference-link" v-if="article?.link != undefined">
                                    <a target="_blank" rel="noopener noreferrer" :href="article?.link"> Reference </a>
                                </div>
                            </div>
                            <!-- <div class="article-content" v-html="article.content + article.content + article.content"></div> -->
                            <!-- <div v-if="article?.twitter != ''" class="twitter-holder">
                                <div style="flex: 1"></div>
                                <EmbedView class="twitter" :twitter-id="article?.twitter" />
                                <div style="flex: 1"></div>
                            </div> -->

                            <div style="margin: 2rem 2rem 0.5rem 2rem;">
                                <div>Relative:</div>
                                <WrapTags @tag-click="(tag) => navigate_tag(tag)" :tags="article?.tags" style="margin-top: 0.5rem;" />
                            </div>
                        </div>

                        <CategoryHeader style="margin-top: 2rem;" :title="readMore" />
                        <div style="margin-top: 1rem;">
                            <template v-for="article, index in more_articles">
                                <HomeArticleListItem @on-article-click="navigate_article(article.id)"
                                     class="body-left-article" :article="article" />
                            </template>
                        </div>
                    </div>
                    <div class="main-body-right">
                        <div style="height: 2rem;">Tags</div>
                        <WrapTags @tag-click="(tag) => navigate_tag(tag)" :tags="tags_ref" />
                        <!-- <div style="height: 1.5rem;"></div>
                <div>Art Work Of The Day</div>
                <EmbedView :twitterId="twitterIdArt" />
                <div style="height: 1rem;"></div>
                <div>Cosplay Of The Day</div>
                <EmbedView :twitterId="twitterIdCosplay" /> -->
                        <div style="height: 1.5rem;"></div>
                        <div style="height: 2rem;">Popular</div>
                        <template v-for="article in popular_ref">
                            <BackgroundImageTextArticle @article-click="(id) => navigate_article(id)" style="margin-bottom: 0.5rem;" :article="article" />
                        </template>
                        <!-- <template v-for="n in 10">
          <HomeSimpleArticleListItem class="body-right-article" :imageSrc="homeArticle.imageSrc"
            :title="homeArticle.title" :timestamp="homeArticle.timestamp" />
        </template> -->
                    </div>
                </div>
            </main>
        </div>
    </div>
    <FooterView />
</template>

<style scoped>
.main-holder {
    display: flex;
    justify-content: center;
}

.inner-main-holder {
    max-width: 1280px;
}

.header-block {
    width: 100%;
    min-width: 1280px;
}

.header-menu-bar {
    display: flex;
    justify-content: space-between;
    /* padding-right: 20px; */
    width: 100%;
    background-color: red;
}

.menu-button {
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 20;
}

.banner {
    margin-top: 1rem;
}

.main-body {
    display: flex;
    margin-top: 2rem;
}

.main-body-left {

    /* flex: 4; */
    width: 1000px;

    /* width: 100%; */
}

.main-body-left-article {
    padding: 1rem 0 1rem 0;
    background-color: white;
}

.article-content {
    margin-top: 1rem;
    font-size: 1.2rem;
    padding: 0 3rem;
}

.article-image-content {
    margin-top: 1rem;
    display: flex;
}

.twitter-holder {
    margin-top: 1rem;
    display: flex;
    /* background-color: black; */
}

.twitter {
    width: 300px;
    flex: 3;
    /* margin: 1rem auto; */
}

.main-body-right {
    /* flex: 1; */
    margin-left: 2.2rem;
    width: 350px;
    /* width: 100%; */
}

.body-left-article {
    width: 100%;
    margin-bottom: 1rem;
}

.body-right-article {
    width: 100%;
    margin-bottom: 2rem;
}

.reference-link {
    margin-top: 2rem;
    font-size: 1.0rem;
    padding: 0 3rem;
}

.reference-link:hover{
    cursor: pointer;
}
</style>
