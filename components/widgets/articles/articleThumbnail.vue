<template>
    <div v-if="article" class="border p-2 my-3">
        <p class="text-xl bold text-green-500 font-black">{{article.title}}</p>
        <p>{{new Date(article.createdAt).toLocaleDateString()}}</p>
        <p>{{article.description}}</p>
        <NuxtLink :to="article.path">
            <button class="text-purple-500 font-bold">Read more</button>
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
    props: ['articleData'],
    data(): Data {
        return {
            article: null
        }
    },
    created() {
        this.article = this.articleData as FetchReturn;
    }
})
</script>