<script setup lang="ts">
import HoverExpandMenuButton from '../components/button/HoverExpandMenuButton.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import HomeArticleListItem from '@/components/HomeArticleListItem.vue';
import HomeSimpleArticleListItem from '@/components/HomeSimpleArticleListItem.vue';
import EmbedView from '@/components/EmbedView.vue'
import GridTopicsView from '@/components/GridTopicsView.vue';
import WrapTags from '@/components/WrapTags.vue';
import BackgroundImageTextArticle from '@/components/icons/BackgroundImageTextArticle.vue';
import { ref } from 'vue';
import router from '@/router';
import FooterView from '@/components/FooterView.vue';

function navigate_article(path: string) {
  router.push('article/' + path)
}

const menu1 = {
  title: "Feature",
  menus: ["Good Smile", "BANDAI", "GK"]
}
const imageUrl = 'https://img.toy-people.com/member/170816079048_1200.jpg'
const bannerImages = {
  main: imageUrl,
  subs: [imageUrl, imageUrl, imageUrl, imageUrl]
}

const articleImageSrc = 'https://img.toy-people.com/member/170806416696_1200.jpg'
const homeArticle = {
  imageSrc: articleImageSrc,
  title: "壽屋『我想成為影之強者！戴爾塔 ED Ver.』1/7比例模型 再現可愛又不失性感的豪放M字蹲！",
  timestamp: "預定發售：2024年9月",
}

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
  <div id="logo" class="left">
    <a href="//www.toy-people.com/" onclick="ga('send', 'event', 'PC_Menu_Top_Logo', 'click');"><img
        src="//www.toy-people.com/img/logo.svg" alt="玩具人Toy People News" title="玩具人Toy People News" width="157"
        height="49"></a>
  </div>
  <header class="header-block">
    <div class="header-menu-bar">
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
      <HoverExpandMenuButton class="menu-button" :title="menu1.title" :menus="menu1.menus" />
    </div>
    <HomeBanner @banner-click="(id) => navigate_article(id)" class="banner" :largeImageSrc="bannerImages.main" :mainTitle="bannerTitles.main"
      :smallImages="bannerImages.subs" :subTitles="bannerTitles.subs" />
  </header>
  <main>
    <div class="main-body">
      <div class="main-body-left">
        <div style="height: 2rem;">Hot Topics</div>
        <GridTopicsView :topics="subTopics" />
        <div style="height: 2rem;"></div>
        <div style="height: 2rem;">Latest News</div>
        <template v-for="n in 10">
          <HomeArticleListItem class="body-left-article" :imageSrc="homeArticle.imageSrc" :title="homeArticle.title"
            :timestamp="homeArticle.timestamp" />
        </template>
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
  <FooterView />
</template>

<style scoped>
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
