<script setup lang="ts">
import { topics } from '~/studyData'

const props = defineProps<{ lesson: any; activeModel: number }>()
const emit = defineEmits<{ selectModel: [index: number] }>()
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

function chooseModel(index:number){
  emit('selectModel', index)
  open.value = false
  nextTick(() => document.querySelector('#models')?.scrollIntoView({ behavior:'smooth', block:'start' }))
}
</script>

<template>
  <button class="outlineToggle" :aria-expanded="open" aria-controls="topic-outline" @click="open=!open">
    <span>☰</span><b>Outline</b>
  </button>
  <div v-if="open" class="outlineBackdrop" @click="open=false" />
  <aside id="topic-outline" class="topicNavigator" :class="{open}">
    <div class="navigatorHead"><div><small>STUDY NAVIGATOR</small><strong>{{lesson.number}} · {{lesson.title}}</strong></div><button aria-label="Close topic navigator" @click="open=false">×</button></div>
    <div class="navigatorScroll">
      <section>
        <b class="navigatorLabel">THIS LESSON</b>
        <nav class="sectionLinks">
          <a href="#overview" @click="open=false"><span>01</span>Overview</a>
          <a href="#learning-lab" @click="open=false"><span>02</span>Interactive lab</a>
          <a href="#models" @click="open=false"><span>03</span>Models</a>
          <a href="#active-recall" @click="open=false"><span>04</span>Active recall</a>
          <a href="#daily-review" @click="open=false"><span>05</span>Quick review</a>
          <a href="#exam-practice" @click="open=false"><span>06</span>Exam practice</a>
        </nav>
      </section>
      <section>
        <b class="navigatorLabel">MODELS IN THIS TOPIC</b>
        <button v-for="(model,i) in lesson.models" :key="model.id" class="modelNavButton" :class="{active:activeModel===i}" @click="chooseModel(i)"><span>{{String(i+1).padStart(2,'0')}}</span>{{model.term}}</button>
      </section>
      <section>
        <b class="navigatorLabel">ALL TOPICS</b>
        <NuxtLink v-for="topic in topics" :key="topic.id" :to="`/topics/${topic.id}`" :class="{current:topic.id===lesson.slug}"><span>{{topic.number}}</span><div><b>{{topic.title}}</b><small>{{topic.subtitle}}</small></div></NuxtLink>
      </section>
    </div>
  </aside>
</template>
