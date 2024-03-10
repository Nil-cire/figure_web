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
                    <br>
                    <div>Update date: 2024/3/10</div>
                </div>
            </div>
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