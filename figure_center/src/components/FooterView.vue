<script setup lang="ts">
import { ref } from 'vue';


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
            <template v-for="footer in footerItems">
                <div class="cell">
                    <div class="title">{{ footer.title }}</div>
                    <template v-for="item in footer.items">
                        <div class="item">{{ item }}</div>
                    </template>

                </div>
            </template>
        </div>
        <div class="logo-holder">
            <div class="logo">
                Logo and name here
            </div>
        </div>
        <div class="end-block"></div>
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
}

.cell {
    margin: 3rem 2rem 0 2rem;
}

.title {
    color: gray;
    font-size: 1rem;
}

.title:hover {
    cursor: pointer;
    opacity: 0.5;
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