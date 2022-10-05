<template>
  <div>
    <PageTitle :title="article.title || 'Loading...'" />
    <NuxtLink to="/articles">
      <p>Back to {{articlesDisplayName}}</p>
    </NuxtLink>
    <div v-if="article">
      <nuxt-content :document="article" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import Vue from 'vue'
import PageTitle from '../../components/layout/pageTitle.vue'

type Data = {
  article: FetchReturn | null,
  articlesDisplayName: string | null,
}

export default Vue.extend({
  name: 'ArticlePage',
  components: { PageTitle },
  data(): Data {
    return {
      article: null,
      articlesDisplayName: null,
    }
  },
  methods: {
    async fetchArticle() {
      const slug = this.$nuxt.$route.params.slug;
      this.article = (await this.$content(`articles/${slug}`).fetch()) as FetchReturn;
    }
  },
  async beforeMount() {
    this.articlesDisplayName = process.env.articlesDisplayName || 'Articles';
  },
  async created() {
    await this.fetchArticle()
  }
})
</script>
