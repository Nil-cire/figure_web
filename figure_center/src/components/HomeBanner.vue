<template>
  <div class="banner">
    <div class="large-image" @click="onBannerClick(props.articles[0].id)">
      <img :src="_getArticleImageOrEmpty(0)" alt="Large Image">
      <div class="overlay-main">{{ _getArticleTitleOrEmpty(0) }}</div>
    </div>
    <div class="small-images">
      <div v-for="(article, index) in props.articles.splice(1,5)" :key="index" class="small-image" @click="onBannerClick(article.id)">
          <img :src="article.image_url" alt="Small Image">
          <div class="overlay-sub">{{ article.title }}</div>
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
  // largeImageSrc: string
  // mainTitle: string
  // smallImages: string[]
  // subTitles: string[]
}>()

// const path = "11";
// const article = 'article';
// const category = 'category';

// const emit = defineEmits<{
//   (e: 'bannerClick', id: string): void
//   (e: 'bannerTypeClick', type: string, path: string): void
// }>()

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
  padding: 0.5rem;
  font-size: 1.5rem;
  text-align: start;
}

.overlay-sub {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* right: 0; */
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.5rem;
  text-align: start;
}
</style>