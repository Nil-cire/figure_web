<script setup lang="ts">
import TopIconView from '@/components/TopIconView.vue';
import FooterView from '@/components/FooterView.vue'

</script>

<template>
    <div class="main-holder">
        <div class="inner-main-holder">
            <TopIconView />
            <div class="content" >
                <div style="width: 100%; text-align: center; font-size: 2rem;">Privacy Policy</div>
                <br>
                <div style="font-size: 1.2rem;">
                    <div>Welcome to Akida-Anime-Collection (the "Website"). These Terms of Use ("Terms") govern your access and use of the Website and its services (collectively, the "Service").</div>
                    <br>
                    <div>Please read these Terms carefully before using the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the Service.</div>
                    <br>
                    <div class="sub-title">Information Collection and Use:</div>
                    <div>1. When you visit our website, we may collect non-personally identifiable information such as browser information and IP addresses.</div>
                    <div>2. If you use our contact form or subscribe to newsletters, we may collect relevant contact information, including names and email addresses..</div>
                    <br>
                    <div class="sub-title">Use of Informations:</div>
                    <div>1. The information we collect will be used to provide, maintain, and improve our services, as well as to send you relevant communications and notifications.</div>
                    <br>
                    <div class="sub-title">Information Sharing:</div>
                    <div>1. We do not sell, exchange, or rent your personal information to third parties unless we obtain your consent or as required by law.</div>
                    <div>2. We may share some anonymous, aggregated statistical information with partners, but this will not include any personally identifiable information.</div>
                    <br>
                    <div class="sub-title">Cookie Technology:</div>
                    <div>1. We use cookie technology to enhance the usability of the website. You can choose to reject cookies through your browser settings.</div>
                    <br>
                    <div class="sub-title">Third-Party Links:</div>
                    <div>1. Our website may contain links to third-party websites, which may have independent privacy policies. We are not responsible for the content and practices of these websites.</div>
                    <br>
                    <div class="sub-title">Changes to Privacy Policy:</div>
                    <div>1. We reserve the right to modify this Privacy Policy. Please check regularly for updates.</div>
                    <br>
                    <div>Update date: 2024/3/10</div>
                    <!-- <div>1. 資訊來源： 本網站提供的動漫玩具、模型、卡片及周邊發售情報僅為參考之用，所有資訊來源均為公開發布或授權使用。</div>
                    <div>2. 可靠性： 我們盡力確保提供的資訊準確無誤，但不對其正確性、完整性或即時性作出任何明示或暗示的擔保。</div>
                    <div>3. 購買行為： 使用者在本網站上所得到的商品相關資訊，應自行判斷其適用性並謹慎購買。我們不對任何由於購買或使用相關商品而引起的損失負責。</div>
                    <div>4. 第三方連結： 本網站可能包含指向第三方網站的連結，這些連結僅為提供更多資訊之用。我們不對第三方網站的內容、隱私政策或使用條款負責。</div>
                    <div>5. 來源聲明： 本網站所使用的部分圖片可能來自於生產商的官方網站或其他合法的來源。這些圖片的版權屬於相應的版權擁有者。</div>
                    <div>6. 版權遵守： 本網站致力於尊重他人的知識產權，並已經盡力確保所有使用的圖片都是在法律允許的範圍內使用的。如果您認為我們的使用有任何侵權行為，請立即聯繫我們，我們將立即採取適當的措施。</div>
                    <div>7. 版權聲明： 本網站的所有內容，包括但不限於文字、圖片、影片等，均受到版權法保護。未經許可，禁止擅自轉載或使用。</div> -->
                </div>
            </div>
            <!-- <header class="header-block">
                <HeaderMenu @menu-click="(category) => navigate_category(category)" />
            </header> -->
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

.content {
  background-color: white;
  padding: 2rem;
  margin: 2rem 0 2rem 0;
}

.sub-title {
    font-weight: bold;
}
</style>