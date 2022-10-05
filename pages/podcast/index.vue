<template>
    <div>
        <h1 v-if="!errorMessage">{{podcastTitle || 'Loading Podcast data'}}</h1>
        <br>
        <div v-if="episodes && !errorMessage">
            <PodcastEpisode v-for="episode in episodes" :key="episode.title" :episodeData="episode" />
        </div>
        <div v-else-if="!errorMessage">
            <p>Loading episodes...</p>
        </div>
        <div v-else-if="errorMessage">
            <p>{{errorMessage}}</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import Parser from 'rss-parser';
import PodcastEpisode from './episode.vue'

import { Episode } from './episode.vue'

type Data = {
    podcastTitle: null | string,
    episodes: null | Episode,
    errorMessage: null | string
}

type RssFeed = {
    title: string
    items: Episode[]
}

export default Vue.extend({
    name: 'PodcastPage',
    components: { PodcastEpisode },
    data(): Data {
        return {
            podcastTitle: null,
            episodes: null,
            errorMessage: null
        }
    },
    async created() {
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
})
</script>
  