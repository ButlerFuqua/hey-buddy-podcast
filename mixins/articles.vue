<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder'
import Vue from 'vue'
import ArticleThumbnail from '../components/widgets/articles/articleThumbnail.vue'

type Data = {
    articles: null | FetchReturn[]
    latestArticles: null | FetchReturn[]
}

export default Vue.extend({
    name: 'ArticlesMixin',
    components: { ArticleThumbnail },
    data(): Data {
        return {
            articles: null,
            latestArticles: null
        }
    },
    methods: {
        async fetchPosts() {
            this.articles = (await this.$content("articles").fetch()) as FetchReturn[];
            this.setLatestArticles();
        },
        setLatestArticles() {
            this.latestArticles = (this.articles || []).slice(0, 3);
        }
    },
    async created() {
        await this.fetchPosts()
    }
})
</script>
  