<template>
  <div class="p-2 h-full flex flex-col md:flex-row">
    <div class="flex-grow">
      <div v-if="landingPageContent === 'info'">
        <h2>Site info...</h2>
      </div>
      <RecentPodcasts v-else-if="landingPageContent === 'podcast'" />
      <RecentArticles v-else-if="landingPageContent === 'articles'" />
    </div>
    <Sidebar :landingPageContent="landingPageContent" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RecentPodcasts from '../components/widgets/podcast/recentPodcasts/recentPodcasts.vue'
import RecentArticles from '../components/widgets/articles/recentArticles/recentArticles.vue'
import Sidebar from '~/components/layout/sidebar.vue';

type Data = {
  title: string | null,
  description: string | null,
  landingPageContent: string | null,
}

export default Vue.extend({
  name: 'IndexPage',
  layout: 'landing',
  components: { RecentPodcasts, RecentArticles, Sidebar },
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
