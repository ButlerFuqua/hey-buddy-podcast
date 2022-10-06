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
import PodcastMixin from '../../mixins/podcast.vue'

export default Vue.extend({
    name: 'PodcastPage',
    components: {},
    mixins: [PodcastMixin],
});
</script>
  