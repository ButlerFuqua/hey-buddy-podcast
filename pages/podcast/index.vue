<template>
    <div>
        <PageTitle :title="podcastTitle" />
        <div class="p-2">
            <div v-if="episodes && !errorMessage">
                <PodcastEpisode v-for="episode in episodes" :key="episode.title" :episodeData="episode" />
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

export default Vue.extend({
    name: 'PodcastPage',
    components: { PageTitle, FullLoader },
    mixins: [PodcastMixin],
});
</script>
  