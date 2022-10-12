<template>
    <div>
        <h3>Latest Podcast episodes</h3>
        <NuxtLink class="text-blue-500" to="/podcast">View all episodes</NuxtLink>
        <div v-if="!errorMessage && latestEpisodes">
            <PodcastEpisode v-for="episode in latestEpisodes" :key="episode.title" :episodeData="episode" />
        </div>
        <div v-else-if="erroeMessage">
            <p>{{errorMessage}}</p>
        </div>
        <FullLoader v-else />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PodcastMixin from '../../../../mixins/podcast.vue'
import FullLoader from '~/components/layout/fullLoader.vue';

export default Vue.extend({
    name: "RecentPodcastEpisodes",
    mixins: [PodcastMixin],
    components: { FullLoader }
});
</script>