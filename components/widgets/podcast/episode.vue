<template>
    <div v-if="episodeData" :class="!hideMeta ? 'border rounded p-2' : ''" class="my-3">
        <p v-if="!hideMeta" class="text-xl mb-3">{{episodeData.title}}</p>
        <audio controls class="w-full">
            <source :src="episodeData.audio_url" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
        <div v-if="!hideMeta" class="flex justify-end mt-2">
            <button @click="$router.push(`/podcast/${episodeData.id}`)"
                class="text-green-500 hover:text-green-400 font-bold transition-all eas-in-out p-2 rounded">
                View Episode
            </button>
        </div>
    </div>
    <div v-else>
        Waiting for episode data...
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue';

type Data = {

}

export default Vue.extend({
    name: 'PodcastEpisode',
    props: ['episodeData', 'hideMeta'],
    components: {},
    data(): Data {
        return {

        }
    },
    async created() {
    }
})
</script>

  