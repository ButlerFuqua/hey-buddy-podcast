<template>
    <div v-if="podcastEpisode" class="p-2">
        <PageTitle :title="podcastEpisode.title" :breadCrumbDTOs="breadCrumbs" />
        <div class="text-gray-600 flex sm:flex-col md:flex-row justify-between flex-wrap">
            <p class="mb-2">Published: {{returnFriendlyDate(podcastEpisode.published_at)}}</p>
            <p class="mb-2">Season: {{podcastEpisode.season_number}}</p>
            <p class="mb-2">Episode: {{podcastEpisode.episode_number}}</p>
            <p class="mb-2">Total Plays: {{podcastEpisode.total_plays}}</p>
        </div>

        <PodcastEpisode :episodeData="podcastEpisode" :hideMeta="true" />

        <div class="my-5 border-t-2 pt-3">
            <h2 class="text-xl">Show Notes</h2>
            <div id="showNotes">
                <div v-html="podcastEpisode.description"></div>
            </div>
        </div>

    </div>
    <div v-else-if="errorMessage">
        <p>
            {{errorMessage}}
        </p>
    </div>
    <FullLoader v-else />
</template>
  
<script lang="ts">
import axios, { AxiosResponse } from 'axios';
import Vue from 'vue'
import PodcastEpisode from '../../components/widgets/podcast/episode.vue'
import PageTitle, { BreadCrumb } from '../../components/layout/pageTitle.vue'

import { returnFriendlyDate } from '../../utils/string.utils';
import { Episode } from '~/mixins/podcast.vue';
import FullLoader from '~/components/layout/fullLoader.vue';

type Data = {
    breadCrumbs: null | BreadCrumb[]
    podcastEpisode: null | Episode
    errorMessage: null | string
}

export default Vue.extend({
    name: 'PodcastEpisodePage',
    mixins: [],
    components: { PageTitle, PodcastEpisode, FullLoader },
    data(): Data {
        return {
            breadCrumbs: null,
            podcastEpisode: null,
            errorMessage: null
        }
    },
    methods: {
        returnFriendlyDate(dateString: string) {
            return returnFriendlyDate(dateString);
        },
        async setPodcastEpisode(episodeId: string | number) {
            try {
                const { data: episode }: AxiosResponse<Episode> = await axios.post('/api/one-episode', { episodeId });
                this.podcastEpisode = episode;
            } catch (error) {
                console.error(error)
                this.errorMessage = `Error getting podcast episode`
            }

            if (!this.podcastEpisode) return;

            this.breadCrumbs = [
                {
                    label: 'Podcast',
                    path: '/podcast',
                    current: false
                },
                {
                    label: this.podcastEpisode.title,
                    path: `/podcast/${this.podcastEpisode.id}`,
                    current: true
                },
            ]
        }
    },
    async beforeMount() {

    },
    async created() {
        await this.setPodcastEpisode(this.$route.params.id)
    }
})
</script>
  