<template>
  <div v-if="article">
    <PageTitle :title="article.title || 'Loading...'" :breadCrumbDTOs="breadCrumbs" />
    <div v-if="article">
      <nuxt-content :document="article" />
    </div>
    <div v-else>Loading...</div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import Vue from 'vue'
import PageTitle, { BreadCrumb } from '../../components/layout/pageTitle.vue'

type Data = {
  article: FetchReturn | null,
  articlesDisplayName: string | null,
  breadCrumbs: null | BreadCrumb[]
}

export default Vue.extend({
  name: 'ArticlePage',
  components: { PageTitle },
  data(): Data {
    return {
      article: null,
      articlesDisplayName: null,
      breadCrumbs: null
    }
  },
  methods: {
    async fetchArticle() {
      const slug = this.$nuxt.$route.params.slug;
      this.article = (await this.$content(`articles/${slug}`).fetch()) as FetchReturn;
      this.breadCrumbs = [
        {
          label: 'Articles',
          path: '/articles',
          current: false
        },
        {
          label: this.article.title,
          path: `/articles/${this.article.slug}`,
          current: true
        },
      ]
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
