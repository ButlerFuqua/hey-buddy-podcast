<template>
    <div class="h-full">
        <MainNav />
        <div class="">
            <div class="p-3 flex items-center container xl m-auto h-full">
                <img id="landingLogo" class="rounded" v-if="landingLogo" :src="landingLogo" alt="Logo Image" />
                <div class="p-3">
                    <h1 v-if="title">{{title}}</h1>
                    <p v-if="description">{{description}}</p>
                </div>
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
    landingLogo: string | null,
}
export default Vue.extend({
    name: 'LandingLayout',
    components: { MainNav },
    data(): Data {
        return {
            title: null,
            description: null,
            landingPageContent: null,
            landingLogo: null,
        }
    },
    async created() {
        this.title = process.env.siteName || null
        this.description = process.env.siteDescription || null
        this.landingPageContent = process.env.landingPageContent || 'info'
        this.landingLogo = process.env.landingLogo || null
    }
})
</script>

<style lang="scss">
#landingLogo {
    width: 125px;
}
</style>