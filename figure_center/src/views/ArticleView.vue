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
import { ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
const articleId = ref(route.params.id)

function navigate_article(path: string) {
    router.push('article/' + path)
}

const article = ref({
    title: 'loooooooooooooooooog tittttttttttttttttttttle heeeeeeeeeeeeeeeeeeeeeeeeeeeeeere',
    main_topic: 'figure',
    sub_topic: 'subbb',
    tags: ['tag1', 'tag2', 'tag3', 'tag4'],
    // imageUrl: 'https://img.toy-people.com/member/16255662087.png',
    imageUrl: 'https://img.toy-people.com/member/17056540127_1200.jpg',
    content: [
        '<div>由 Takahiro負責原作、竹村洋平擔任作畫的漫畫《魔都精兵的奴隸》（魔都精兵のスレイブ），劇情講述會將人類傳送至「魔都」的異世界大門隨時會打開，政府為了消滅在魔都中會吃人的怪物「醜鬼」，組織了由女性士兵組成的戰鬥集團「魔防隊」。平凡卻可望成為英雄的男主角「和倉優希」，在一次意外中誤闖魔都，在情急之下和魔防隊第七組組長「羽前京香」簽訂契約，成為擁有特殊能力的奴隸！但京香使用奴隸的代價是....必須獎勵奴隸想要的東西（福利大放送）？</div>',
        '<img style="width:600px; margin: 1rem auto;" src="https://img.toy-people.com/member/17056540127_1200.jpg">',
        '<div>由 Takahiro負責原作、竹村洋平擔任作畫的漫畫《魔都精兵的奴隸》（魔都精兵のスレイブ），劇情講述會將人類傳送至「魔都」的異世界大門隨時會打開，政府為了消滅在魔都中會吃人的怪物「醜鬼」，組織了由女性士兵組成的戰鬥集團「魔防隊」。平凡卻可望成為英雄的男主角「和倉優希」，在一次意外中誤闖魔都，在情急之下和魔防隊第七組組長「羽前京香」簽訂契約，成為擁有特殊能力的奴隸！但京香使用奴隸的代價是....必須獎勵奴隸想要的東西（福利大放送）？</div>',
        '<img style="width:600px; margin: 1rem auto;" src="https://img.toy-people.com/member/17056540127_1200.jpg">',
    ],
    timestamp: '2024/02/20',
    twitter: '1748004348263850024'
})

const menu1 = {
    title:  " Feature",
    menus:  [ "Good Smile", "BANDAI", "GK"]
}
const imageUrl = 'https://img.toy-people.com/member/1708 1 60 7 9048_1200.jpg'
const bannerImages = {
    main: imageUrl,
    subs: [imageUrl, imageUrl, imageUrl, imageUrl]
}

const articleImageSrc =  ' https://img.toy-peop l e.co m /member/170806416696_1200.jpg'
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
        <ArticleBanner class="banner" :article="article" />
    </header>
    <main>
        <div class="main-body">
            <div class="main-body-left">
                <!-- <div style="height: 2rem;">Hot Topics</div>
                <GridTopicsView :topics="subTopics" />
                <div style="height: 2rem;"></div>
                <div style="height: 2rem;">Latest News</div>
                <template v-for="n in 10">
                    <HomeArticleListItem class="body-left-article" :imageSrc="homeArticle.imageSrc"
                        :title="homeArticle.title" :timestamp="homeArticle.timestamp" />
                </template> -->
                <div>
                    <template v-for="(content, index) in article.content">
                        <div>
                            <div v-if="content.includes('<img')" class="article-image-content" v-html="content"></div>
                            <div v-else class="article-content" v-html="content"></div>
                        </div>
                    </template>
                </div>
                <!-- <div class="article-content" v-html="article.content + article.content + article.content"></div> -->
                <div v-if="article.twitter != ''" class="twitter-holder">
                    <div style="flex: 1"></div>
                    <EmbedView class="twitter" :twitter-id="article.twitter" />
                    <div style="flex: 1"></div>
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
</style>