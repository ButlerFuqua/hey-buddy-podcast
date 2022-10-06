<template>
    <div class="h-full">
        <MainNav />
        <div class="p-3 bg-blue-500 flex align-center">
            <img src="img/local_social_logo.png" alt="Logo Image">
            <div>
                <h1 v-if="title">{{title}}</h1>
                <h2 v-if="description">{{description}}</h2>
            </div>
        </div>
        <div class="container xl m-auto h-full">
            <nuxt />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainNav from '../components/layout/mainNav.vue';

type Data = {
    title: string | null,
    description: string | null,
    landingPageContent: string | null,
}
export default Vue.extend({
    name: 'LandingLayout',
    components: { MainNav },
    data(): Data {
        return {
            title: null,
            description: null,
            landingPageContent: null,
        }
    },
    async created() {
        this.title = process.env.siteName || null
        this.description = process.env.siteDescription || null
        this.landingPageContent = process.env.landingPageContent || 'info'
    }
})
</script>