<template>
    <div>
        <button @click="() => closed = !closed"
            class="bg-blue-400 hover:bg-blue-600 transition-all z-20 absolute right-2 top-2 p-2 rounded">
            Menu
        </button>
        <div :class="closed ? 'closed' : 'right-0'"
            class="absolute top-0 w-full h-full z-10 bg-gray-200 transition-all ease-in-out shadow">
            <!-- This isn't currently needed -->
            <!-- <div data-netlify-identity-menu></div> -->
            <!-- <hr class="my-2"> -->
            <ul v-if="navItems">
                <li v-for="navItem in navItems" :key="navItem.label" @click="navAction(navItem)" class="cursor-pointer">
                    {{navItem.label}}
                </li>
            </ul>
            <div v-else>
                Loading...
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
    navItems: null | NavItem[]
    closed: boolean
    articlesDisplayName: string | null
}

export enum NavType {
    nativeLink,
    internalNewTab
}
export type NavItem = {
    path: string
    label: string
    type: NavType
}
export default Vue.extend({
    name: 'MainNav',
    data(): Data {
        return {
            closed: true,
            navItems: null,
            articlesDisplayName: null,

        }
    },
    methods: {
        async loadNavItems() {
            this.articlesDisplayName = process.env.articlesDisplayName || 'Articles';
            this.navItems = [
                {
                    path: '/',
                    label: 'Home',
                    type: NavType.nativeLink
                },
                {
                    path: '/articles',
                    label: this.articlesDisplayName,
                    type: NavType.nativeLink
                },
                {
                    path: '/podcast',
                    label: 'Podcast',
                    type: NavType.nativeLink
                },
            ]
        },
        navAction(navItem: any) {
            switch (navItem.type) {
                case NavType.nativeLink:
                    this.$nuxt.$router.push(navItem.path)
                    this.closed = true;
                    break;

                case NavType.internalNewTab:
                    let routeData = this.$router.resolve({ name: navItem.path, });
                    window.open(routeData.href, '_blank');
                    break;

                default:
                    console.error(`nav type not covered`, navItem)
                    break;
            }

        },
    },
    async beforeMount() {
        await this.loadNavItems();
    },
})
</script>

<style lang="scss" scoped>
.closed {
    right: 100vw;
}
</style>