<template>
    <div v-if="episodeData">
        <h1>{{episodeData.title}}</h1>
        <br>
        <audio controls>
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
import Parser from 'rss-parser';

export type Episode = {

}
export default Vue.extend({
    name: 'PodcastEpisode',
    props: ['episodeData'],
    data() {
        return {

        }
    },
    async created() {
    }
})
</script>
  