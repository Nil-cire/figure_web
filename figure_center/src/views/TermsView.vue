<script setup lang="ts">
import TopIconView from '@/components/TopIconView.vue';
import FooterView from '@/components/FooterView.vue'

</script>

<template>
    <div class="main-holder">
        <div class="inner-main-holder">
            <TopIconView />
            <div class="content" >
                <div style="width: 100%; text-align: center; font-size: 2rem;">Terms of Use</div>
                <br>
                <div style="font-size: 1.2rem;">
                    <div>Welcome to Akida-Anime-Collection (the "Website"). These Terms of Use ("Terms") govern your access and use of the Website and its services (collectively, the "Service").</div>
                    <br>
                    <div>Please read these Terms carefully before using the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the Service.</div>
                    <br>
                    <div class="sub-title">General Use:</div>
                    <div>1. The information provided on this website are for reference only.</div>
                    <div>2. We do our best to ensure that the information provided is accurate, but we make no express or implied warranties as to its accuracy, completeness, or timeliness.</div>
                    <div>3. Users should make their own judgments on the applicability of the product information they obtain on this website and purchase with caution. We are not responsible for any losses caused by the purchase or use of related products.</div>
                    <div>4. This website may contain links to third-party websites. These links are provided for the sole purpose of providing more information. We are not responsible for the content, privacy policy, or terms of use of third-party websites.</div>
                    <div>5. All content on this website, including but not limited to text, images, and videos, is protected by copyright law. Unauthorized reproduction or use is prohibited.</div>
                    <br>
                    <div class="sub-title">Age Restrictions:</div>
                    <div>1. The Service is not intended for children under 13.</div>
                    <div>2. Users between 13-17 need parental consent to use the Service.</div>
                    <br>
                    <div class="sub-title">Image Usage:</div>
                    <div>1. We may display images of products from various manufacturers and companies ("Product Images") on the Website.</div>
                    <div>2. These Product Images are likely protected by intellectual property rights of the respective companies.</div>
                    <div>3. Your use of these Product Images is subject to the terms and conditions of the rights holder (usually the manufacturer/company)</div>
                    <div>4. We do not grant you any rights to use the Product Images beyond what is necessary for your use of the Service.</div>
                    <div>5. You are solely responsible for obtaining any necessary permissions from the rights holder if you want to use the Product Images outside the Service.</div>
                    <div></div>
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