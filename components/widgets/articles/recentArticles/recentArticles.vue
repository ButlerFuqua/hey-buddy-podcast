<template>
    <div>
        <p class="text-xl">Latest Articles</p>
        <NuxtLink class="text-blue-500" to="/articles">View all articles</NuxtLink>
        <div v-if="latestArticles">
            <ArticleThumbnail v-for="article in latestArticles" :key="article.title" :articleData="article" />
        </div>
        <div v-else>
            <p>Loading articles...</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ArticleThumbnail from '../../../../components/widgets/articles/articleThumbnail.vue'

import ArticlesMixin from '../../../../mixins/articles.vue'

export default Vue.extend({
    name: 'RecentArticles',
    mixins: [ArticlesMixin]
});
</script>