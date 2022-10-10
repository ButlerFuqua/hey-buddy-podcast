<template>
    <div v-if="article">
        <h1>{{article.title}}</h1>
        <p>{{article.description}}</p>
        <NuxtLink :to="article.path">
            <p>Read more</p>
        </NuxtLink>
    </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import Vue from 'vue';


type Data = {
    article: null | FetchReturn
}

export default Vue.extend({
    name: 'ArticleThumbnail',
    props: ['fetchReturn'],
    data(): Data {
        return {
            article: null
        }
    },
    created() {
        this.article = this.fetchReturn as FetchReturn;
    }
})
</script>