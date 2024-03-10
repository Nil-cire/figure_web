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