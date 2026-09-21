<script setup lang="ts">
const props = defineProps<{ lesson: any }>()
const modelIndex = ref(0); const revealed = ref(false); const seconds = ref(60); const running = ref(false); let timer: ReturnType<typeof setInterval>|undefined
const model = computed(() => props.lesson.models[modelIndex.value])
function start(){ if(running.value)return; running.value=true; seconds.value=60; timer=setInterval(()=>{seconds.value--; if(seconds.value<=0){clearInterval(timer);running.value=false}},1000) }
onUnmounted(()=>timer&&clearInterval(timer))
</script>
<template>
  <section class="boosterSection">
    <div class="sectionIntro"><span>ACTIVE RECALL</span><h2>নিজের brain দিয়ে model reconstruct করো.</h2><p>Re-reading পরিচিতি তৈরি করে; retrieval practice exam-এ answer বের করার ক্ষমতা তৈরি করে।</p></div>
    <div class="boosterGrid">
      <article class="scenarioSprint"><small>SCENARIO SPRINT</small><select v-model.number="modelIndex"><option v-for="(m,i) in lesson.models" :value="i" :key="m.id">{{m.term}}</option></select><p>{{model.scenario}}</p><button @click="revealed=!revealed">{{revealed?'Hide reasoning':'Which model & why?'}}</button><div v-if="revealed" class="sprintAnswer"><b>{{model.term}}</b><p>{{model.analysis[0]}}</p><p><strong>Action:</strong> {{model.improve}}</p></div></article>
      <article class="teachBack"><small>60-SECOND TEACH-BACK</small><strong class="timer">{{seconds}}s</strong><p>Notes বন্ধ করে aloud বলো:</p><ol><li>কোন issue solve করে?</li><li>Mechanism কী?</li><li>একটি example?</li><li>Limitation কী?</li></ol><button @click="start">{{running?'Explain now…':'Start timer'}}</button></article>
    </div>
  </section>
</template>
