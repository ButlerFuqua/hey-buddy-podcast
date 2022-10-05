<template>
  <div>
    <h1 v-if="title">{{title}}</h1>
    <h2 v-if="description">{{description}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  title: string | null,
  description: string | null,
}

export default Vue.extend({
  name: 'IndexPage',
  data(): Data {
    return {
      title: null,
      description: null,
    }
  },
  methods: {
  },
  async created() {
    this.title = process.env.siteName || null
    this.description = process.env.siteDescription || null
  }
})
</script>
