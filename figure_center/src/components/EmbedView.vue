<script setup lang="ts">
import { onMounted } from 'vue';
import Tweet from 'vue-tweet';
// declare var require: any

const props = defineProps<{
    twitterId: string
}>()

// const TwitterWidgetsLoader = require('twitter-widgets');
// onMounted(() => {
//     TwitterWidgetsLoader.load();
// })
</script>

<template>
    <Tweet :tweet-id="twitterId" />
    <!-- <blockquote class="twitter-tweet">
        <p lang="zxx" dir="ltr"><a href="https://t.co/EQBFyp1632">pic.twitter.com/EQBFyp1632</a></p>&mdash; nba paint
        (@nba_paint) <a href="https://twitter.com/nba_paint/status/1759401929308885060?ref_src=twsrc%5Etfw">February 19,
            2024</a>
    </blockquote> -->
    <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></template> -->
</template>
<style scoped></style>