<template>
    <div>
        <h1>{{title}}</h1>
        <p class="text-blue-400">
            breadcrumbs/here
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'PageTitle',
    props: ['title']
})
</script>