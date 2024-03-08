<script setup lang="ts">

import HomeBanner from '@/components/HomeBanner.vue'
import HomeArticleListItem from '@/components/HomeArticleListItem.vue';
import HomeSimpleArticleListItem from '@/components/HomeSimpleArticleListItem.vue';
import EmbedView from '@/components/EmbedView.vue'
import GridTopicsView from '@/components/GridTopicsView.vue';
import WrapTags from '@/components/WrapTags.vue';
import BackgroundImageTextArticle from '@/components/icons/BackgroundImageTextArticle.vue';
import { onMounted, ref, watch } from 'vue';
import router from '@/router';
import FooterView from '@/components/FooterView.vue';
import PagingView from '@/components/PagingView.vue';
import TopIconView from '@/components/TopIconView.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import axios from 'axios'
import { useArticlesStore } from '@/stores/articles';
import { useHomeStore } from '@/stores/home';
// import { useRouter } from 'vue-router';
import { Parse } from 'parse/dist/parse.min.js';
import { getPosts, getPostsById } from '@/data/post';
import { getHomeData } from '@/data/home';

const articlesStore = useArticlesStore()
const homeStore = useHomeStore()
// const router = useRouter()

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

onMounted(() => {
  _getPostData()
  _getHomeData()
})

// watch(router, () => {
//   _getPostData()
//   _getHomeData()
// })

let page = 1;
const pageEnds = ref(false)
const homeArticles = ref([] as Article[])
const twitter_art = ref('')
const twitter_consplay = ref('')
const tags_ref = ref<string[]>([])
const popular_ref = ref<Article[]>([])
const home_banner_ref = ref<Article[]>([])
const home_sub_banner_ref = ref<Article[]>([])

function navigate_article(path: string | number) {
  router.push('article/' + path)
}

function navigate_category(category: string) {
  router.push('/category/' + category)
}

function navigate_tag(tag: string) {
  router.push('/tag/' + tag)
}
["iBOt0JxHPE", "2uSE5aFuCe", "vhYal5aLgj", "IIVmfuJQis", "6esQv3ibzA"]
async function _getHomeData() {
  const init = homeStore.upToDate
  if (!init) {
    const homeData = await getHomeData()
    // cache in store
    homeStore.twitter_art = homeData.twitter_art
    homeStore.twitter_cosplay = homeData.twitter_cosplay
    homeStore.tags = homeData.tags
    homeStore.popular_ids = homeData.popular_ids
    homeStore.home_banner = homeData.home_banner
    homeStore.home_sub_banner = homeData.home_sub_banner

    // show data
    twitter_art.value = homeData.twitter_art
    twitter_consplay.value = homeData.twitter_cosplay
    tags_ref.value = homeData.tags
    popular_ref.value = await _getPopularData(homeData.popular_ids)
    home_banner_ref.value = await _getPopularData(homeData.home_banner)
    home_sub_banner_ref.value = (await _getPopularData(homeData.home_sub_banner)).slice(0,4)
  } else {
    twitter_art.value = homeStore.twitter_art
    twitter_consplay.value = homeStore.twitter_cosplay
    tags_ref.value = homeStore.tags
    popular_ref.value = await _getPopularData(homeStore.popular_ids)
    home_banner_ref.value = (await _getPopularData(homeStore.home_banner)).slice(0,5)
    home_sub_banner_ref.value = (await _getPopularData(homeStore.home_sub_banner)).slice(0,4)
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

async function _getPostData() {
  if (articlesStore.upToDate == true) {
    homeArticles.value = articlesStore.articles
    twitter_art.value = articlesStore.twitter_art
    twitter_consplay.value = articlesStore.twitter_cosplay
    return
  } else {
    // back4app
    const posts = await getPosts(1)
    homeArticles.value = posts
    articlesStore.addArticles(posts)
    articlesStore.upToDate = true
    // console.log(posts[0].get('createdAt'))
    // axiois
    // const homeDataResponse = await axios.get('http://127.0.0.1:8000/home');
    // const homeData = homeDataResponse.data['data']
    // const homeDataArticles = homeData['articles'] as Article[]
    // const homeDataTwitterArt = homeData['art']
    // const homeDataTwitterCosplay = homeData['cosplay']
    // homeDataArticles.sort((a, b) => b.id - a.id)
    // homeArticles.value = homeDataArticles
    // twitter_art.value = homeDataTwitterArt
    // twitter_consplay.value =homeDataTwitterCosplay
    // articlesStore.addArticles(homeDataArticles)
    // articlesStore.setTwitterArt(homeDataTwitterArt)
    // articlesStore.setTwitterCosplay(homeDataTwitterCosplay)
  }
}

async function getMorePosts() {
  page += 1
  const posts = await getPosts(page)
  if (posts.length < 20) {
    pageEnds.value = true
  }
  const currentList = homeArticles.value
  posts.forEach(element => {
    currentList.push(element)
  });
  homeArticles.value = currentList
  articlesStore.addArticles(posts)
}

// const pages = ref({
//   counts: 12,
//   currentPage: 1
// })




const imageUrlTopic = 'https://img.toy-people.com/member/17080985107_1200.jpg'
const subTopics = [
  {
    title: "title1",
    imageUrl: imageUrlTopic,
    link: ''
  },
  {
    title: "title2",
    imageUrl: imageUrlTopic,
    link: ''
  },
  {
    title: "title3",
    imageUrl: imageUrlTopic,
    link: ''
  },
  {
    title: "title4",
    imageUrl: imageUrlTopic,
    link: ''
  },
]

const tags = ref([
  {
    name: 'tag1',
    link: ''
  },
  {
    name: 'tag2tag2',
    link: ''
  },
  {
    name: 'tag3tag3tag3',
    link: ''
  },
  {
    name: 'tag4',
    link: ''
  },
  {
    name: 'tag5',
    link: ''
  },
  {
    name: 'tag6',
    link: ''
  },
  {
    name: 'tag7',
    link: ''
  },
])

</script>

<template>
  <div class="main-holder"><div class="inner-main-holder">
  <TopIconView />
  <header class="header-block">
    <HeaderMenu @menu-click="(category) => navigate_category(category)" />
  </header>
  
  <main>
    <HomeBanner @banner-click="(article_id) => navigate_article(article_id)" class="banner" :articles="home_banner_ref" />
    <div class="main-body">
      <div class="main-body-left">
        <div class="sub-title"> 【 Hot Topics 】</div>
        <GridTopicsView @article-click="(id) => navigate_article(id)" :topics="home_sub_banner_ref" />
        <div style="height: 2rem;"></div>
        <div class="sub-title"> 【 Latest News 】</div>
        <template v-for="article in homeArticles">
          <HomeArticleListItem @on-article-click="(article) => { navigate_article(article.id) }" class="body-left-article" :article="article" />
        </template>
        <div v-if="pageEnds == false" style="display: flex;">
          <div style="width: 33%;"></div>
          <div class="more-btn" @click="getMorePosts()"> more </div>
          <div style="width: 33%;"></div>
        </div>
        <!-- <PagingView :counts="pages.counts" :current-page="pages.currentPage" /> -->
      </div>
      <div class="main-body-right">
        <div class="sub-title"> 【 Tags 】</div>
        <WrapTags @tag-click="(tag) => navigate_tag(tag)" :tags="tags_ref" />
        <div style="height: 1.5rem;"></div>
        <div class="sub-title"> 【 Art Work Of The Day 】</div>
        <EmbedView :twitterId="twitter_art" />
        <div style="height: 1rem;"></div>
        <div class="sub-title"> 【 Cosplay Of The Day 】</div>
        <EmbedView :twitterId="twitter_consplay" />
        <div style="height: 1.5rem;"></div>
        <div class="sub-title"> 【 Popular 】</div>
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
.left {
  display: flex;
  justify-content: space-around;
}

.header-block {
  width: 100%;
  min-width: 1280px;
}

.banner {
  margin-top: 1rem;
}

.main-holder {
  display: flex;
  justify-content: center;
}

.inner-main-holder {
  max-width: 1280px;
}

.main-body {
  display: flex;
  margin-top: 2rem;
}

.main-body-left {
  /* flex: 4; */
  min-width: 800px;
  /* width: 100%; */
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

.more-btn {
  width: 33%;
  background-color: red;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding: auto auto;
  color: white;
  margin-top: 1rem;
}

.more-btn:hover {
  cursor: pointer;
  opacity: 0.7;
}

.sub-title {
  color: rgb(255, 209, 180);
  font-size: 1.2rem;
  height: 2rem;
  margin-bottom: 0.75rem;
}
</style>
