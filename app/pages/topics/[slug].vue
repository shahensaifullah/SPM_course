<script setup lang="ts">
import { topicLessons } from '~/topicLessons'
const route=useRoute(); const lesson=computed(()=>topicLessons.find(x=>x.slug===route.params.slug))
if(!lesson.value) throw createError({statusCode:404,statusMessage:'Topic not found'})
useSeoMeta({title:()=>`${lesson.value!.title} — SPM Field Guide`,description:()=>lesson.value!.shortAnswer})
const openModel=ref(0)
</script>
<template><main class="lessonPage" v-if="lesson">
  <header class="lessonTopbar"><NuxtLink class="brand" to="/"><span>SPM</span> Field Guide</NuxtLink><div class="lessonTopActions"><NuxtLink to="/#map">All topics</NuxtLink><NuxtLink to="/trainer">Trainer</NuxtLink><a class="navCta" href="#daily-review">Quick review</a></div></header>
  <TopicNavigator :lesson="lesson" :active-model="openModel" @select-model="openModel=$event" />
  <section class="lessonHero" :class="lesson.color"><div><span>TOPIC {{lesson.number}} · DETAILED LESSON</span><h1>{{lesson.title}}<em>{{lesson.banglaTitle}}</em></h1><p>{{lesson.shortAnswer}}</p></div><aside><small>CORE QUESTION</small><p>{{lesson.coreQuestion}}</p></aside></section>
  <section id="overview" class="lessonIntro"><div class="sectionIntro"><span>WHY THIS TOPIC?</span><h2>প্রথমে problem-টা বুঝি.</h2></div><p v-for="p in lesson.story" :key="p">{{p}}</p><div class="learningGoals"><b>After this lesson, you can:</b><ul><li v-for="g in lesson.learningGoals" :key="g">{{g}}</li></ul></div></section>
  <TopicLab :slug="lesson.slug" />
  <section id="models" class="modelsSection"><div class="sectionIntro"><span>STEP-BY-STEP MODELS</span><h2>কখন, কেন এবং কীভাবে ব্যবহার করবে.</h2></div><div class="modelChooser"><button v-for="(m,i) in lesson.models" :key="m.id" :class="{active:openModel===i}" @click="openModel=i">{{i+1}}. {{m.term}}</button></div><article class="modelLesson"><span>ISSUE IT SOLVES</span><h2>{{lesson.models[openModel].term}}</h2><p>{{lesson.models[openModel].solves}}</p><h3>Why you need it</h3><ul><li v-for="x in lesson.models[openModel].why" :key="x">{{x}}</li></ul><h3>Mechanism</h3><div class="mechanismGrid"><div v-for="x in lesson.models[openModel].mechanism" :key="x.label"><b>{{x.label}}</b><p>{{x.text}}</p></div></div><h3>How to apply</h3><ol><li v-for="x in lesson.models[openModel].steps" :key="x">{{x}}</li></ol><div class="workedCase"><small>WORKED SCENARIO</small><p>{{lesson.models[openModel].scenario}}</p><ul><li v-for="x in lesson.models[openModel].analysis" :key="x">{{x}}</li></ul></div><blockquote>“{{lesson.models[openModel].examAnswer}}”</blockquote><div class="trapBox"><b>Common traps</b><ul><li v-for="x in lesson.models[openModel].traps" :key="x">{{x}}</li></ul></div></article></section>
  <div id="active-recall"><LearningBooster :lesson="lesson" /></div>
  <section id="daily-review" class="recallDeck"><div class="recallIntro"><span>5-MINUTE DAILY REVIEW</span><h2>দেখে নয়—মনে করে বলো.</h2><p>Issue → Model → Mechanism → Example → Caveat এই পাঁচটি prompt ব্যবহার করো।</p></div><div class="reviewRoutine"><b>Fast revision</b><ol><li v-for="x in lesson.fastRevision" :key="x">{{x}}</li></ol></div></section>
  <section id="exam-practice" class="practiceSection"><div class="sectionIntro"><span>EXAM PRACTICE</span><h2>এখন transfer করো.</h2></div><article class="scenarioCard"><p>{{lesson.practice.case}}</p><b>{{lesson.practice.prompt}}</b><details><summary>Model answer দেখো</summary><p>{{lesson.practice.answer}}</p></details></article></section>
  <section id="next-topic" class="bridgeSection"><small>WHAT REMAINS?</small><h2>{{lesson.remainingIssue}}</h2><NuxtLink v-if="lesson.nextSlug" :to="`/topics/${lesson.nextSlug}`">Next: {{lesson.nextTitle}} →</NuxtLink><NuxtLink v-else to="/trainer">Go to mixed exam trainer →</NuxtLink></section>
</main></template>
