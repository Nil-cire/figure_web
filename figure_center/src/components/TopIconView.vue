<template>
    <div class="holder">
      <img src="//www.toy-people.com/img/logo.svg" @click="toHomePage" alt="Akida Anime Collection Logo" width="157"
        height="49">

    <div style="width: 100%;"></div>

    <div class="social-media">
      <a><img style="max-width: 100%; max-height: 100%;" src="@/assets/twitter.png" alt="X(Twitter) Logo"></a>
      <a><img style="max-width: 100%; max-height: 100%;" src="@/assets/instagram.png" alt="Instagram Logo"></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';


function toHomePage() {
  router.push('/')
}

</script>

<style scoped>

.holder {
    display: flex;
    justify-content: space-around;
}

.holder img:hover {
  cursor: pointer;
}

.holder a:hover {
    cursor: pointer;
}

.social-media {
    display: flex;
}

</style>