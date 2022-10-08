<template>
    <div v-if="episodeData">
        <p class="text-xl">{{episodeData.title}}</p>
        <br>
        <audio controls class="w-full">
            <source :src="episodeData.enclosure.url" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    </div>
    <div v-else>
        Waiting for episode data...
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PodcastEpisode',
    props: ['episodeData'],
    components: {},
    data() {
        return {

        }
    },
    async created() {
    }
})
</script>

  