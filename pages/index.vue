<template>
  <div>
    <div v-if="landingPageContent === 'info'">
      <h2>Site info...</h2>
    </div>
    <RecentPodcasts v-else-if="landingPageContent === 'podcast'" />
    <RecentArticles v-else-if="landingPageContent === 'articles'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RecentPodcasts from '../components/widgets/podcast/recentPodcasts/recentPodcasts.vue'
import RecentArticles from '../components/widgets/articles/recentArticles/recentArticles.vue'

type Data = {
  title: string | null,
  description: string | null,
  landingPageContent: string | null,
}

export default Vue.extend({
  name: 'IndexPage',
  layout: 'landing',
  components: { RecentPodcasts, RecentArticles },
  data(): Data {
    return {
      title: null,
      description: null,
      landingPageContent: null,
    }
  },
  methods: {
  },
  async created() {
    this.title = process.env.siteName || null
    this.description = process.env.siteDescription || null
    this.landingPageContent = process.env.landingPageContent || 'info'
  }
})
</script>
