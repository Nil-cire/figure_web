<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

function navigate_terms() {
  router.push('/terms')
}

function navigate_privacy() {
  router.push('/privacy')
}


interface FooterVo {
    title: string,
    items: string[]
}

const footerItems = ref([
    {
        title: "About Us",
        items: [1, 2, 3]
    },
    {
        title: "About Us",
        items: ["What is Tokyo Otaku Mode?", "TOM Premium", "Letter From the Founder", "Our Promise"]
    },
    {
        title: "About Us",
        items: ["What is Tokyo Otaku Mode?", "TOM Premium", "Letter From the Founder", "Our Promise"]
    },
    {
        title: "About Us",
        items: ["What is Tokyo Otaku Mode?", "TOM Premium", "Letter From the Founder", "Our Promise"]
    },
    {
        title: "About Us",
        items: ["What is Tokyo Otaku Mode?", "TOM Premium", "Letter From the Founder", "Our Promise"]
    },
])

</script>

<template>
    <div class="holder">
        <div class="content-holder">
            <div class="cell">
                <img src="@/assets/logo.svg" alt="Website logo">
            </div>
            <div class="cell">
                <div style="color: gray; font-size: 1.2rem;"> Follow Us </div>
                <div class="follow-image-holder">
                    <a>
                        <img style="margin-right: 0.5rem;" src="@/assets/twitter.png" alt="X(Twitter) icon">
                    </a>
                    <a>
                        <img src="@/assets/instagram.png" alt="Instagram icon">
                    </a>
                   
                </div>
            </div>
            <div class="cell">
                <div style="color: gray; font-size: 1.2rem;"> Legal </div>
                <div class="contact-holder">
                    <div @click="navigate_terms()" class="legal" style="color: lightgray; font-size: 1rem;"> Terms of Use </div>
                    <div @click="navigate_privacy()" class="legal" style="color: lightgray; font-size: 1rem;">Privacy Policy</div>
                </div>
            </div>
            <div class="cell">
                <div style="color: gray; font-size: 1.2rem;"> Contact Us </div>
                <div class="contact-holder">
                    <div style="color: lightgray; font-size: 1rem;"> e-mail: </div>
                    <a class="link" href="mailto:yourEmail@domain.com">akida-anime-collection@gmail.com</a>
                </div>
            </div>
            <!-- <template v-for="footer in footerItems">
                <div class="cell">
                    <div class="title">{{ footer.title }}</div>
                    <template v-for="item in footer.items">
                        <div class="item">{{ item }}</div>
                    </template>

                </div>
            </template> -->
        </div>
        <!-- <div class="logo-holder">
            <div class="logo">
                Terms of Use
            </div>
        </div> -->

        <div class="end-block"></div>
        <div class="logo-holder">
            <div class="logo" style="background-color: black; width: 100%; text-align: center;">
                2024 AKIDA ANIME COLLECTION, All right reserved.
            </div>
        </div>
    </div>
</template>

<style scoped>



.holder {
    min-width: 1280px;
    /* padding: 3rem auto 5rem auto; */
    background-color: rgb(33, 32, 31);
    margin-top: 2rem;
}

.content-holder {
    display: flex;
    /* padding: 3rem auto 5rem auto; */
    justify-content: center;
    align-items: top;
    padding: auto auto;
}

.cell {
    /* flex-basis: 25%; */
    margin: 5rem 2rem 0 2rem;
    /* margin: 3rem 0 0 0; */
}

.cell img {
    width: 80px;
    height: 80px;
}

.follow-image-holder {
    margin-top: 1rem;
}

.follow-image-holder img {
    width: 50px;
    height: 50px;
}

.legal:hover {
    cursor: pointer;
    opacity: 0.6;
}

.contact-holder {
    margin-top: 1rem;
}

.title {
    color: gray;
    font-size: 1rem;
}

.title:hover {
    cursor: pointer;
    opacity: 0.5;
}

.link:hover {
    cursor: pointer;
}

.item {
    font-size: 1rem;
    color: white;
    margin-top: 0.5rem;
    word-wrap: break-word;
}

.item:hover {
    cursor: pointer;
    opacity: 0.5;
}


.logo-holder {
    display: flex;
    justify-content: center;
}

.logo {
    color: white;
    margin-top: 4rem;
    font-size: 1.2rem;
}

.logo:hover {
    cursor: pointer;
    opacity: 0.5;
}


.end-block {
    height: 5rem;
}
</style>