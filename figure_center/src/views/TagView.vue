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
import { ref, watch, onMounted } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import CategoryHeader from '@/components/CategoryHeaderView.vue';
import TopIconView from '@/components/TopIconView.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import { useArticlesStore } from '@/stores/articles'
import { getPostsBySubTag, getPostsById } from '@/data/post';
import { useHomeStore } from '@/stores/home';
import { getHomeData } from '@/data/home';


const route = useRoute();
const homeStore = useHomeStore()
// const articleId = ref(route.params.id)
const tag = ref(route.params.tag as string)
const articlesStore = useArticlesStore()

// const props = defineProps<{
// }>()

watch(route, () => {
    articles_ref.value = []
    tag.value = route.params.tag as string
    _getArticles(tag.value)
    _getHomeData()
    window.scrollTo(0, 0)
})

onMounted(() => {
    _getArticles(tag.value)
    _getHomeData()
    window.scrollTo(0, 0)
})

const pageEnds = ref(true)

async function _getArticles(tag: string) {
    if (articlesStore.upToDate == true) {
        const category_articles = articlesStore.articles.filter((item) => item.main_topic == tag)
        if (category_articles.length >= 20) {
            articles_ref.value = category_articles.slice(0, 20)
            pageEnds.value = false
        } else {
            const posts = await getPostsBySubTag(tag, 1)
            console.log(`psot count = ${posts.length}`)
            articles_ref.value = posts
            articlesStore.addArticles(posts)
            if (posts < 20) pageEnds.value = true
        }
    } else {
        const posts = await getPostsBySubTag(tag, 1)
        console.log(`psot count2 = ${posts.length}`)
        articles_ref.value = posts
        articlesStore.addArticles(posts)
        if (posts < 20) pageEnds.value = true
    }
}



function navigate_article(path: string) {
    router.push('/article/' + path)
}

function navigate_category(category: string) {
    router.push('/category/' + category)
}

function navigate_tag(tag: string) {
  router.push('/tag/' + tag)
}


let page = 1

async function getMorePosts() {
  page += 1
  const posts = await getPostsBySubTag(tag, page)
  if (posts.length < 20) {
    pageEnds.value = true
  }
  const currentList = articles_ref.value
  posts.forEach(element => {
    currentList.push(element)
  });
  articles_ref.value = currentList
  articlesStore.addArticles(posts)
}

const articles_ref = ref<Article[]>([])
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

const popularArticlesImageUrl = 'https://img.toy-people.com/member/17056540127_1200.jpg'

const popularArticles = ref([
    {
        title: 'title1',
        imageUrl: popularArticlesImageUrl,
        link: ''
    },
    {
        title: 'title2',
        imageUrl: popularArticlesImageUrl,
        link: ''
    },
    {
        title: 'title3',
        imageUrl: popularArticlesImageUrl,
        link: ''
    },
    {
        title: 'title4',
        imageUrl: popularArticlesImageUrl,
        link: ''
    },
    {
        title: 'title5',
        imageUrl: popularArticlesImageUrl,
        link: ''
    },
    {
        title: 'title1',
        imageUrl: popularArticlesImageUrl,
        link: ''
    },
])

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

</script>

<template>
    <div class="main-holder"><div class="inner-main-holder">
    <TopIconView />
    <header class="header-block">
        <HeaderMenu @menu-click="(category) => navigate_category(category)"/>
    </header>
    <main>
        <div class="main-body">
            <div class="main-body-left">
                <CategoryHeader :title="tag" />
                <!-- <div style="height: 2rem;">Hot Topics</div>
                <GridTopicsView :topics="subTopics" />
                <div style="height: 2rem;"></div>
                <div style="height: 2rem;">Latest News</div>
                <template v-for="n in 10">
                    <HomeArticleListItem class="body-left-article" :imageSrc="homeArticle.imageSrc"
                        :title="homeArticle.title" :timestamp="homeArticle.timestamp" />
                </template> -->
                <div style="margin-top: 1rem;">
                    <template v-for="(article, index) in articles_ref">
                        <HomeArticleListItem class="body-left-article" @on-article-click="(article) => { navigate_article(article.id) }" :article="article" />
                    </template>
                </div>

                <div v-if="pageEnds == false" style="display: flex;">
                    <div style="width: 33%;"></div>
                    <div class="more-btn" @click="getMorePosts()"> more </div>
                    <div style="width: 33%;"></div>
                </div>

                <div style="margin: 1.5rem 0 0.5rem 0;">
                    <div class="sub-title">Relative Topics : </div>
                    <WrapTags @tag-click="(tag) => navigate_tag(tag)" :tags="tags_ref" style="margin-top: 0.5rem;"/>
                </div>
                <!-- <div class="article-content" v-html="article.content + article.content + article.content"></div> -->
                <!-- <div v-if="article.twitter != ''" class="twitter-holder">
                    <div style="flex: 1"></div>
                    <EmbedView class="twitter" :twitter-id="article.twitter" />
                    <div style="flex: 1"></div>
                </div> -->
            </div>
            <div class="main-body-right">
                <!-- <div style="height: 2rem;">Tags</div> -->
                <!-- <WrapTags @tag-click="(tag) => navigate_tag(tag)" :tags="tags_ref" /> -->
                <!-- <div style="height: 1.5rem;"></div>
                <div>Art Work Of The Day</div>
                <EmbedView :twitterId="twitterIdArt" />
                <div style="height: 1rem;"></div>
                <div>Cosplay Of The Day</div>
                <EmbedView :twitterId="twitterIdCosplay" /> -->
                <!-- <div style="height: 1.5rem;"></div> -->
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

.article-content {
    font-size: 1.2rem;
    padding: 0 3rem;
}

.article-image-content {
    display: flex;
}

.twitter-holder {
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
