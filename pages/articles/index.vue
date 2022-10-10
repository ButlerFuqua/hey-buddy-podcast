<template>
  <div>
    <PageTitle title="Articles" />
    <div v-if="articles">
      <ArticleThumbnail v-for="article in articles" :key="article.slug" :articleData="article" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder'
import Vue from 'vue'
import PageTitle from '../../components/layout/pageTitle.vue'
import ArticleThumbnail from '../../components/widgets/articles/articleThumbnail.vue'

type Data = {
  articles: null | FetchReturn[]
}

export default Vue.extend({
  name: 'ArticlesIndexPage',
  components: { PageTitle, ArticleThumbnail },
  data(): Data {
    return {
      articles: null,
    }
  },
  methods: {
    async fetchPosts() {
      this.articles = (await this.$content("articles").fetch()) as FetchReturn[];
    },
  },
  async created() {
    await this.fetchPosts()
  }
})
</script>
