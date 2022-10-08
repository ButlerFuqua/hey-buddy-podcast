<script lang="ts">
import Vue from 'vue'
import Parser from 'rss-parser';
import PodcastEpisode from '../components/widgets/podcast/episode.vue'

export type Episode = {
    title: string
    enclosure: {
        url: string
    }
};

type Data = {
    podcastTitle: null | string,
    episodes: null | Episode[],
    latestEpisodes: null | Episode[],
    errorMessage: null | string
}

type RssFeed = {
    title: string
    items: Episode[]
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
            if (process.env.podcastRssFeed) {
                try {
                    const parser = new Parser();
                    const feed = (await parser.parseURL(process.env.podcastRssFeed)) as RssFeed;
                    this.podcastTitle = feed.title
                    this.episodes = feed.items;
                } catch (error) {
                    console.error(error)
                    this.errorMessage = `There was an error fetching the podcast data`
                }
            } else {
                this.errorMessage = `No Podcast data has been provided`
            }
        }
    },
    async created() {
        await this.fetchAllPodcastData();
        await this.setLatestPodcastEpisodes();
    }
})
</script>