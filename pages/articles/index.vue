<template>
  <div>
    <PageTitle title="Articles" />
    <div v-if="articles">
      <div v-for="article in articles" :key="article.slug">
        <h1>{{article.title}}</h1>
        <p>{{article.description}}</p>
        <NuxtLink :to="article.path">
          <p>Read more</p>
        </NuxtLink>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder'
import Vue from 'vue'
import PageTitle from '../../components/layout/pageTitle.vue'

type Data = {
  articles: FetchReturn[]
}

export default Vue.extend({
  name: 'ArticlesIndexPage',
  components: { PageTitle },
  data(): Data {
    return {
      articles: null as null | any,
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
