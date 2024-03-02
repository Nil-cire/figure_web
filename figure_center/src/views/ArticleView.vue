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


const articlesStore = useArticlesStore();
const route = useRoute();
const articleId = ref(route.params.id as string)

watch(route, () => {
    article.value = undefined
    articleId.value = route.params.id as string
    getArticle(articleId.value)
})

function navigate_article(path: string | number) {
    router.push('/article/' + path)
}

const more_display_max = 10

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
    "twitter": string
}

const article = ref<Article>()
const more_articles = ref<Article[]>([])

onMounted(() => {
    getArticle(articleId.value)
})

async function getArticle(articleId: string) {
    const storeArticles = articlesStore.articles
    const storeArticle = storeArticles.find(item => item.id == articleId)
    if (storeArticle == undefined) {
        console.log("no article, fetching...")
        const post = await getPostsById(articleId)
        article.value = post
        articlesStore.addArticle(post)
        getReadMoreArticles(post.main_topic, articleId)
    } else {
        console.log("article found")
        article.value = storeArticle
        getReadMoreArticles(storeArticle.main_topic, articleId)
    }


    // const articles = articlesStore.articles
    // if (articles.length == 0){
    //     const homeDataResponse = await axios.get(`http://127.0.0.1:8000/article/${articleId}`);
    //     const articlesData = homeDataResponse.data['data']
    //     articlesStore.articles = articlesData;
    //     article.value = articlesData.find(item => item.id == articleId)
    //     more_articles.value = articlesData.filter(item => item.id != articleId)
    // } else {
    //     console.log(articles)
    //     article.value = articles.find(item => item.id == articleId)
    //     more_articles.value = articles.filter(item => item.id != articleId)
    // }
    window.scrollTo(0, 0);
}

async function getReadMoreArticles(tag: string, articleId: string) {
    console.log(`tag = ${tag}`)
    const storeArticles = articlesStore.articles
    const moreArticles = storeArticles.filter(item => item.main_topic == tag)
    console.log(`moreArticles = ${moreArticles.length}`)
    if (moreArticles.length < 10) {
        console.log(`moreArticles < 10`)
        const posts = await getPostsByMainTag(tag)
        const filter_post = posts.filter((item) => item.id != articleId)
        more_articles.value = filter_post
        articlesStore.addArticles(posts)
    } else {
        console.log(`moreArticles >= 10`)
        const filter_post = moreArticles.filter((item) => item.id != articleId)
        more_articles.value = filter_post
    }
}

function imageStyle(url: string): string {
    return `<img style="width:600px; margin: 1rem auto;" src="${url}">`
}

const menu1 = {
    title: " Feature",
    menus: ["Good Smile", "BANDAI", "GK"]
}
const imageUrl = 'https://img.toy-people.com/member/1708 1 60 7 9048_1200.jpg'
const bannerImages = {
    main: imageUrl,
    subs: [imageUrl, imageUrl, imageUrl, imageUrl]
}

const articleImageSrc = ' https://img.toy-peop l e.co m /member/170806416696_1200.jpg'
const homeArticle = {
    imageSrc: articleImageSrc,
    title: "壽屋『我想成為影之強者！戴爾塔 ED Ver.』1/7比例模型 再現可愛又不失性感的豪放M字蹲！",
    timestamp: "預定發售：2024年9月",
}

const bannerTitles = {
    main: 'main title',
    subs: ['sub title 1', 'sub title 2', 'sub title 3', 'sub title 4']
}

const readMore = "Read more"

const imageUrlTopic = 'https://img.toy-people.com/member/17080985107_1200.jpg'

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
    <div class="main-holder">
        <div class="inner-main-holder">
            <TopIconView />
            <header class="header-block">
                <HeaderMenu />
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
                            </div>
                            <!-- <div class="article-content" v-html="article.content + article.content + article.content"></div> -->
                            <!-- <div v-if="article?.twitter != ''" class="twitter-holder">
                                <div style="flex: 1"></div>
                                <EmbedView class="twitter" :twitter-id="article?.twitter" />
                                <div style="flex: 1"></div>
                            </div> -->

                            <div style="margin: 1.5rem 2rem 0.5rem 2rem;">
                                <div>Relative:</div>
                                <WrapTags :tags="tags" style="margin-top: 0.5rem;" />
                            </div>
                        </div>

                        <CategoryHeader style="margin-top: 2rem;" :title="readMore" />
                        <div style="margin-top: 1rem;">
                            <template v-for="article, index in more_articles">
                                <HomeArticleListItem @on-article-click="navigate_article(article.id)"
                                    v-if="index < more_display_max" class="body-left-article" :article="article" />
                            </template>
                        </div>
                    </div>
                    <div class="main-body-right">
                        <div style="height: 2rem;">Tags</div>
                        <WrapTags :tags="tags" />
                        <!-- <div style="height: 1.5rem;"></div>
                <div>Art Work Of The Day</div>
                <EmbedView :twitterId="twitterIdArt" />
                <div style="height: 1rem;"></div>
                <div>Cosplay Of The Day</div>
                <EmbedView :twitterId="twitterIdCosplay" /> -->
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
</style>
