<script setup lang="ts">
import { topics } from '~/studyData'

const route = useRoute()
const topicIndex = computed(() => topics.findIndex(t => route.path === `/topics/${t.id}`))
const nextTopic = computed(() => topicIndex.value >= 0 ? topics[(topicIndex.value + 1) % topics.length] : null)
</script>

<template>
  <nav class="mobileDock" aria-label="Quick navigation">
    <template v-if="topicIndex >= 0">
      <NuxtLink to="/#map"><span>⌂</span><small>Topics</small></NuxtLink>
      <a href="#learning-lab"><span>✦</span><small>Lab</small></a>
      <a href="#daily-review"><span>↻</span><small>Review</small></a>
      <NuxtLink class="dockPrimary" :to="`/topics/${nextTopic?.id}`"><span>→</span><small>Next</small></NuxtLink>
    </template>
    <template v-else>
      <NuxtLink to="/#map"><span>⌘</span><small>Map</small></NuxtLink>
      <NuxtLink to="/#learn"><span>▤</span><small>Learn</small></NuxtLink>
      <NuxtLink to="/case-2"><span>◫</span><small>Case</small></NuxtLink>
      <NuxtLink class="dockPrimary" to="/trainer"><span>▶</span><small>Train</small></NuxtLink>
    </template>
  </nav>
</template>
