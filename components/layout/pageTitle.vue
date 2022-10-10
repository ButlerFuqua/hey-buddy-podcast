<template>
    <div class="border-b-2 mb-3">
        <h1>{{title}}</h1>
        <div class="flex" v-if="breadCrumbs">
            <span class="transition-all ease-in-out"
                :class="!current ? 'text-blue-400 hover:text-blue-500 cursor-pointer' : ''"
                v-for="{label, path, current} in breadCrumbs" :key="label" @click="$router.push(path)">
                {{label}}{{!current ? ' /&nbsp;' : ''}}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
    breadCrumbs: BreadCrumb[] | null
}

export type BreadCrumb = {
    label: string
    path: string
    current: boolean
}

export default Vue.extend({
    name: 'PageTitle',
    props: ['title', 'breadCrumbDTOs'],
    data(): Data {
        return {
            breadCrumbs: null,
        }
    },
    created() {
        this.breadCrumbs = this.breadCrumbDTOs as BreadCrumb[];
    }
})
</script>