<template>
    <div>
        <PageTitle :title="podcastTitle" />
        <ListenPodcastOn />
        <div class="p-2">
            <div v-if="episodes && !errorMessage">
                <PodcastEpisode v-for="episode in episodes" :key="episode.id" :episodeData="episode" />
            </div>
            <div v-else-if="errorMessage">
                <p>{{errorMessage}}</p>
            </div>
            <FullLoader v-else />
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import PodcastMixin from '../../mixins/podcast.vue'
import PageTitle from '~/components/layout/pageTitle.vue';
import FullLoader from '~/components/layout/fullLoader.vue';
import PodcastEpisode from '~/components/widgets/podcast/episode.vue'
import ListenPodcastOn from '~/components/widgets/podcast/lisentOn/listenPodcastOn.vue';

export default Vue.extend({
    name: 'PodcastPage',
    components: { PodcastEpisode, PageTitle, FullLoader, ListenPodcastOn },
    mixins: [PodcastMixin],
});
</script>
  