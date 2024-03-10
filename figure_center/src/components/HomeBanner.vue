<template>
  <div class="banner">
    <div class="large-image" @click="onBannerClick(props.articles[0].id)">
      <img :src="_getArticleImageOrEmpty(0)" alt="Large Image of anime merchandise">
      <div class="overlay-main">{{ _getArticleTitleOrEmpty(0) }}</div>
    </div>
    <div class="small-images">
      <!-- <div v-for="(article, index) in props.articles.splice(1,5)" :key="index" class="small-image" @click="onBannerClick(article.id)">
          <img :src="_getArticleImageOrEmpty(index+1)" alt="Small Image">
          <div class="overlay-sub">{{ article.title }}</div>
      </div> -->
      <div class="small-image" @click="onBannerClick(props.articles[1].id)">
          <img :src="_getArticleImageOrEmpty(1)" alt="Small Image of anime merchandise">
          <div class="overlay-sub">{{ _getArticleTitleOrEmpty(1) }}</div>
      </div>
      <div class="small-image" @click="onBannerClick(props.articles[2].id)">
          <img :src="_getArticleImageOrEmpty(2)" alt="Small Image of anime merchandise">
          <div class="overlay-sub">{{ _getArticleTitleOrEmpty(2) }}</div>
      </div>
      <div class="small-image" @click="onBannerClick(props.articles[3].id)">
          <img :src="_getArticleImageOrEmpty(3)" alt="Small Image of anime merchandise">
          <div class="overlay-sub">{{ _getArticleTitleOrEmpty(3) }}</div>
      </div>
      <div class="small-image" @click="onBannerClick(props.articles[4].id)">
          <img :src="_getArticleImageOrEmpty(4)" alt="Small Image of anime merchandise">
          <div class="overlay-sub">{{ _getArticleTitleOrEmpty(4) }}</div>
      </div>

    </div>
  </div>
</template>
  
<script setup lang="ts">

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

function _getArticleImageOrEmpty(index: number) {
  if (index <= props.articles.length -1) {
    return props.articles[index].image_url
  } else {
    return ""
  }
}

function _getArticleTitleOrEmpty(index: number) {
  if (index <= props.articles.length - 1) {
    return props.articles[index].title
  } else {
    return ""
  }
}

const props = defineProps<{
  articles: Article[]
}>()


const emit = defineEmits<{
  bannerClick: [articleId: string]
}>()

function onBannerClick(articleId: string) {
  emit('bannerClick', articleId)
}
</script>
  
<style scoped>
.banner {
  display: flex;
  width: 100%;
  align-items: center;
}

.large-image {
  position: relative;
  flex: 1;
  /* background-color: blue; */
  /* aspect-ratio: auto 4/3; */
  width: 100%;
  height: 0;
  padding-top: calc(100% * (100 / 300));
}

.large-image:hover {
  cursor: pointer;
}

.large-image img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* width: 100%; */
  /* height: auto; */
  /* aspect-ratio: auto 4/3; */
}

.large-image img:hover {
  opacity: 0.8;
}

.small-images {
  align-items: center;
  flex: 1;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr;
}

.small-image:hover {
  cursor: pointer;
}

.small-image {
  position: relative;
  /* aspect-ratio: auto 4/3; */
  /* background-color: black; */
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * (200 / 300));
}

.small-image img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* width: 100%; */
  /* height: auto; */
  /* aspect-ratio: auto 4/3; */
  /* object-fit: cover; */
}

.small-image img:hover {
  opacity: 0.6;
}

.overlay-main {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* right: 0; */
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0 0.75rem;
  font-size: 1.4rem;
  text-align: start;

  display: flex;
  align-items: center;

  line-height: 2em;
  height: 4em;
  overflow: hidden;
}

.overlay-sub {
  position: absolute;
  bottom: 0;
  left: 0;
  /* width: 100%; */
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0 0.5em;
  text-align: start;

  display: flex;
  align-items: center;

  line-height: 2em;
  height: 6em;
  overflow: hidden;

  /* line-height: 1.5 rem;
  height: 3 rem;
  font-size: 1rem;
  overflow: hidden; */
}
</style>