<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder'
import Vue from 'vue'

export type EpisodeDTO = {
    title: string
    id: number
    slug: string
    featuredimage: string
    audio: string
    date: any
    description: string
    episodeNumber: number
    seasonNumber: number
    totalPlays: number
    body: any
}

type Data = {
    episodes: null | FetchReturn[]
    latestEpisodes: null | FetchReturn[]
}

export default Vue.extend({
    name: 'PodcastV2Mixin',
    components: {},
    data(): Data {
        return {
            episodes: null,
            latestEpisodes: null
        }
    },
    methods: {
        async fetchEpisodes() {
            this.episodes = (await this.$content("podcasts").sortBy('date', 'desc').fetch()) as FetchReturn[];
            console.log('episodes', this.episodes)
            this.setLatestEpisodes();
        },
        setLatestEpisodes() {
            this.latestEpisodes = (this.episodes || []).slice(0, 3);
        }
    },
    async created() {
        await this.fetchEpisodes()
    }
})
</script>
  