<template>
    <div>
        <h1 v-if="!errorMessage">{{podcastTitle || 'Loading Podcast data'}}</h1>
        <br>
        <div v-if="episodes && !errorMessage">
            <PodcastEpisode v-for="episode in latestEpisodes" :key="episode.title" :episodeData="episode" />
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
import Vue from 'vue';
import PodcastEpisode from '../episode.vue'
import PodcastMixin from '../../../../mixins/podcast.vue'

type Data = {

}

export default Vue.extend({
    name: 'RecentPodcastEpisodes',
    components: { PodcastEpisode },
    mixins: [PodcastMixin],
    data(): Data {
        return {}
    },
    created() {
    }
});
</script>