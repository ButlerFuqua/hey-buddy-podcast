<template>
    <div v-if="episode" :class="!hideMeta ? 'border rounded p-2' : ''" class="my-3">
        <p v-if="!hideMeta" class="text-xl mb-3">{{episode.title}}</p>
        <audio controls class="w-full">
            <source :src="episode.audio_url" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
        <div v-if="!hideMeta" class="p-1">
            <span class="m-2 text-orange-500">
                Season {{episode.season_number}}:Ep {{episode.episode_number}}
            </span>
            <span class="m-2 text-orange-500">
                plays {{episode.total_plays}}
            </span>
        </div>
        <div v-if="!hideMeta && episode" class="flex justify-end mt-2">
            <button @click="$router.push(`/podcast/${episode?.id}`)"
                class="text-green-500 hover:text-green-400 font-bold transition-all eas-in-out p-2 rounded">
                View Episode
            </button>
        </div>
    </div>
    <FullLoader v-else />
</template>
  
<script lang="ts">
import Vue from 'vue';

import { Episode } from '../../../mixins/podcast.vue'
import FullLoader from '~/components/layout/fullLoader.vue';

type Data = {
    episode: null | Episode
}

export default Vue.extend({
    name: 'PodcastEpisode',
    props: ['episodeData', 'hideMeta'],
    components: { FullLoader },
    data(): Data {
        return {
            episode: null
        }
    },
    async created() {
        this.episode = this.episodeData;
    }
})
</script>

  