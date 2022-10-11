<template>
    <div v-if="podcast">
        <PageTitle :title="podcast.title || 'Loading...'" :breadCrumbDTOs="breadCrumbs" />
        <div class="p-2 text-gray-600 flex justify-between">
            <p>Created: {{returnFriendlyDate(podcast.createdAt)}}</p>
            <p>Last updated: {{returnFriendlyDate(podcast.createdAt)}}</p>
        </div>

        <!-- TODO put episode here -->

    </div>
    <div v-else>
        Loading...
    </div>
</template>
  
<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import Vue from 'vue'
import PageTitle, { BreadCrumb } from '../../components/layout/pageTitle.vue'

import { returnFriendlyDate } from '../../utils/string.utils';

type Data = {
    podcast: any /** TODO Type this */ | null,
    breadCrumbs: null | BreadCrumb[]
}

export default Vue.extend({
    name: 'PodcastEpisodePage',
    components: { PageTitle },
    data(): Data {
        return {
            podcast: null,
            breadCrumbs: null
        }
    },
    methods: {
        async fetchArticle() {
            const slug = this.$nuxt.$route.params.slug;
            this.podcast = { /** TODO */ }
            this.breadCrumbs = [
                {
                    label: 'Podcast',
                    path: '/podcast',
                    current: false
                },
                {
                    label: this.podcast.title,
                    path: `/podcast/${this.podcast.slug}`,
                    current: true
                },
            ]
        },
        returnFriendlyDate(dateString: string) {
            return returnFriendlyDate(dateString);
        },
    },
    async beforeMount() {

    },
    async created() {
        await this.fetchArticle()
    }
})
</script>
  