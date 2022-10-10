<template>
    <div v-if="episodeData" class="border rounded p-2 my-3">
        <p class="text-xl">{{episodeData.title}}</p>
        <br>
        <audio controls class="w-full mb-2">
            <source :src="episodeData.enclosure.url" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
        <div class="flex justify-end">
            <button @click="showDescription = true"
                class="text-green-500 hover:text-green-400 font-bold transition-all eas-in-out p-2 rounded">
                Show Notes
            </button>
        </div>
        <div id="showNotes" v-if="showDescription" class="fixed h-full w-full top-0 left-0  bg-white z-30">
            <button v-if="showDescription" @click="showDescription = false"
                class="bg-green-400 hover:bg-green-300 transition-all eas-in-out0 p-2 rounded fixed top-3 right-3 z-50">Close</button>
            <div class="container xl mt-5 m-auto h-full">
                <p class="text-xl">{{episodeData.title}}</p>
                <p class="text-lg">Show notes</p>
                <div v-html="episodeData['content:encoded']"></div>
            </div>
        </div>
    </div>
    <div v-else>
        Waiting for episode data...
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue';

type Data = {
    showDescription: boolean
}

export default Vue.extend({
    name: 'PodcastEpisode',
    props: ['episodeData'],
    components: {},
    data() {
        return {
            showDescription: false,
        }
    },
    async created() {
    }
})
</script>

  