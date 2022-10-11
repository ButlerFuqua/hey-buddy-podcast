<script lang="ts">
import Vue from 'vue'
import PodcastEpisode from '../components/widgets/podcast/episode.vue'
import axios, { AxiosResponse } from 'axios'

export type Episode = {
    title: string
    audio_url: string
    description: string
};

type Data = {
    podcastTitle: null | string,
    episodes: null | Episode[],
    latestEpisodes: null | Episode[],
    errorMessage: null | string
}

export default Vue.extend({
    name: 'PodcastMixin',
    components: { PodcastEpisode },
    data(): Data {
        return {
            podcastTitle: null,
            episodes: null,
            latestEpisodes: null,
            errorMessage: null
        }
    },
    methods: {
        async setLatestPodcastEpisodes() {
            this.latestEpisodes = (this.episodes || []).slice(0, 3);
        },
        async fetchAllPodcastData() {
            try {
                const { data: episodes }: AxiosResponse<Episode[]> = await axios.get('/api/all-episodes')
                console.log('episodes', episodes)
                this.episodes = episodes;
            } catch (error) {
                console.error(error)
                this.errorMessage = `Error getting podcast episodes`
            }
        },
    },
    async created() {
        await this.fetchAllPodcastData();
        await this.setLatestPodcastEpisodes();
    }
})
</script>