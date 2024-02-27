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
// import { useRouter } from 'vue-router';

const articlesStore = useArticlesStore()
// const router = useRouter()

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

onMounted(() => {
  getHomeData()
})

watch(router, () => {
  getHomeData()
})

async function getHomeData() {
  console.log(articlesStore.articles.length)
  if (articlesStore.articles.length != 0) {
    homeArticles.value = articlesStore.articles
    return
  } 
  const homeDataResponse = await axios.get('http://127.0.0.1:8000');
  const articlesData = homeDataResponse.data['data']
  homeArticles.value = articlesData
  articlesStore.addArticles(articlesData)

}

function navigate_article(path: string | number) {
  router.push('article/' + path)
}

function navigateByTpye(type: string, path: string) {
  if (type == 'category') {
    router.push('/category/' + path)
  } else {
    router.push('/article/' + path)
  }
}

const pages = ref({
  counts: 12,
  currentPage: 1
})

const imageUrl = 'https://img.toy-people.com/member/170816079048_1200.jpg'
const bannerImages = {
  main: imageUrl,
  subs: [imageUrl, imageUrl, imageUrl, imageUrl]
}

const articleImageSrc = 'https://img.toy-people.com/member/170806416696_1200.jpg'
const homeArticles = ref([] as Article[])

const bannerTitles = {
  main: 'main title',
  subs: ['sub title 1', 'sub title 2', 'sub title 3', 'sub title 4']
}

const twitterIdArt = ref('1759401929308885060')
const twitterIdCosplay = ref('1758975904330752312')

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

</script>

<template>
  <div class="main-holder"><div class="inner-main-holder">
  <TopIconView />
  <header class="header-block">
    <HeaderMenu />
  </header>
  
  <main>
    <HomeBanner @banner-type-click="(type, path) => navigateByTpye(type, path)" class="banner" :largeImageSrc="bannerImages.main" :mainTitle="bannerTitles.main"
      :smallImages="bannerImages.subs" :subTitles="bannerTitles.subs" />
    <div class="main-body">
      <div class="main-body-left">
        <div style="height: 2rem;">Hot Topics</div>
        <GridTopicsView :topics="subTopics" />
        <div style="height: 2rem;"></div>
        <div style="height: 2rem;">Latest News</div>
        <template v-for="article in homeArticles">
          <HomeArticleListItem @on-article-click="(article) => { navigate_article(article.id) }" class="body-left-article" :article="article" />
        </template>
        <PagingView :counts="pages.counts" :current-page="pages.currentPage" />
      </div>
      <div class="main-body-right">
        <div>Tags</div>
        <WrapTags :tags="tags" />
        <div style="height: 1.5rem;"></div>
        <div>Art Work Of The Day</div>
        <EmbedView :twitterId="twitterIdArt" />
        <div style="height: 1rem;"></div>
        <div>Cosplay Of The Day</div>
        <EmbedView :twitterId="twitterIdCosplay" />
        <div style="height: 1.5rem;"></div>
        <div style="height: 2rem;">Popular</div>
        <template v-for="article in popularArticles">
          <BackgroundImageTextArticle style="margin-bottom: 0.5rem;" :article="article" />
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
</style>
