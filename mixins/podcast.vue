<script lang="ts">
import Vue from 'vue'
import PodcastEpisode from '../components/widgets/podcast/episode.vue'
import axios, { AxiosResponse } from 'axios'

export type Episode = {
    title: string
    audio_url: string
    description: string
    id: string | number
    published_at: string
    season_number: number
    episode_number: number
    total_plays: number
    'content:encoded': string
};

type Data = {
    podcastTitle: string
    episodes: null | Episode[],
    latestEpisodes: null | Episode[],
    oneEpisode: null | Episode,
    errorMessage: null | string
}

export default Vue.extend({
    name: 'PodcastMixin',
    components: { PodcastEpisode },
    data(): Data {
        return {
            podcastTitle: 'Hey Buddy',
            episodes: null,
            latestEpisodes: null,
            errorMessage: null,
            oneEpisode: null,
        }
    },
    methods: {
        async setLatestPodcastEpisodes() {
            this.latestEpisodes = (this.episodes || []).slice(0, 3);
        },
        async fetchAllPodcastData() {
            try {
                const { data: episodes }: AxiosResponse<Episode[]> = await axios.get('/api/all-episodes')
                this.episodes = episodes.filter(episode => episode.season_number !== 99);
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