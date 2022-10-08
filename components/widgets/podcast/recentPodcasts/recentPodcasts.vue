<template>
    <div>
        <h3>Latest Podcast episodes</h3>
        <NuxtLink class="text-blue-500" to="/podcast">View all episodes</NuxtLink>
        <div v-if="!errorMessage && latestEpisodes">
            <PodcastEpisode v-for="episode in latestEpisodes" :key="episode.title" :episodeData="episode" />
        </div>
        <div v-else-if="!errorMessage">
            <p>Loading episodes...</p>
        </div>
        <div v-else>
            <p>{{errorMessage}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PodcastMixin from '../../../../mixins/podcast.vue'

export default Vue.extend({
    name: 'RecentPodcastEpisodes',
    mixins: [PodcastMixin],
});
</script>