<script setup lang="ts">
const props = defineProps<{ slug: string }>()
const sliders = ref([8, 6, 3, 2])
const forces = ref([3, 3, 3, 3, 3])
const vrio = ref([true, true, false, false])
const checks = ref([false, false, false, false])
const deliberate = ref(50)
const size = ref('large'); const variety = ref('diverse'); const change = ref('dynamic')
const investment = ref(100); const rate = ref(10); const flows = ref([45,45,45])
const krAnswers = ref<Record<number, boolean>>({})
const forceNames = ['Rivalry','Buyer power','Supplier power','New entrants','Substitutes']
const krItems = [
  ['Launch the new dashboard', false, 'এটি initiative—outcome নয়।'],
  ['Increase weekly active users from 40% to 55% by Q4', true, 'Baseline, target, metric ও deadline আছে।'],
  ['Improve customer happiness', false, 'Direction আছে; measurable result নেই।'],
  ['Reduce resolution time from 18h to 8h by June', true, 'Specific, measurable এবং time-bound।']
] as const
const npv = computed(() => -investment.value + flows.value.reduce((s, cf, i) => s + cf / Math.pow(1 + rate.value / 100, i + 1), 0))
const vrioOutcome = computed(() => !vrio.value[0] ? 'Competitive disadvantage' : !vrio.value[1] ? 'Competitive parity' : !vrio.value[2] ? 'Temporary advantage' : !vrio.value[3] ? 'Unrealized advantage' : 'Sustained advantage')
const structure = computed(() => size.value === 'small' ? 'Simple / light Functional' : variety.value === 'single' ? 'Functional structure' : change.value === 'stable' ? 'Divisional structure' : 'Divisional core + Matrix coordination')
</script>

<template>
  <section id="learning-lab" class="lessonLabSection">
    <div class="lessonSectionLabel"><span>✦</span><b>Interactive learning lab</b></div>
    <div class="customLab">
      <div class="labLead">
        <span>LEARN BY CHANGING THE MODEL</span>
        <h3>{{ slug === 'definition' ? 'Cake বড় হলো, নাকি শুধু company-র slice?' : slug === 'competition' ? 'Industry profit কোথায় leak করছে?' : slug === 'resources' ? 'Resource কত দূর advantage দেয়?' : slug === 'formation' ? 'Plan ও learning-এর balance করো' : slug === 'organization' ? 'Coordination problem থেকে structure বেছে নাও' : slug === 'ethics' ? 'Legal answer-এর বাইরে ethical gate' : slug === 'cpm' ? 'Formula থেকে management meaning' : 'Task নাকি measurable outcome?' }}</h3>
        <p>Control বদলাও, result predict করো, তারপর explanation-এর সঙ্গে মিলিয়ে দেখো।</p>
      </div>

      <template v-if="slug === 'definition'">
        <div class="sliderStack"><label v-for="(label,i) in ['WTP','Price','Cost','WTS']" :key="label"><span><b>{{label}}</b><strong>€{{sliders[i]}}</strong></span><input v-model.number="sliders[i]" type="range" min="0" max="12"></label></div>
        <div class="valueResults"><div><small>CUSTOMER</small><strong>€{{sliders[0]-sliders[1]}}</strong></div><div><small>FIRM</small><strong>€{{sliders[1]-sliders[2]}}</strong></div><div><small>PARTNER</small><strong>€{{sliders[2]-sliders[3]}}</strong></div><div class="totalValue"><small>TOTAL VALUE</small><strong>€{{sliders[0]-sliders[3]}}</strong></div></div>
        <p class="labFoot"><b>Try:</b> শুধু Price বাড়ালে capture বদলায়; WTP বাড়ালে total cake বড় হয়।</p>
      </template>
      <template v-else-if="slug === 'competition'">
        <div class="forceBoard"><div v-for="(force,i) in forceNames" :key="force" class="forceRow"><b>{{force}}</b><div><button v-for="n in 5" :key="n" :class="{active: forces[i]===n}" @click="forces[i]=n">{{n}}</button></div><small>{{forces[i] >= 4 ? 'high' : forces[i] <= 2 ? 'low' : 'medium'}}</small></div></div>
        <p class="labFoot forceNote">Highest force-টির causal mechanism explain করো; average score কোনো official formula নয়।</p>
      </template>
      <template v-else-if="slug === 'resources'">
        <div class="vrioPath"><button v-for="(x,i) in [['V','Valuable'],['R','Rare'],['I','Costly to imitate'],['O','Organized']]" :key="x[0]" :class="{passed:vrio[i]}" @click="vrio[i]=!vrio[i]"><b>{{x[0]}}</b><span>{{x[1]}}</span><small>{{vrio[i]?'YES':'NO'}}</small></button></div>
        <div class="resourceOutcome"><small>OUTCOME</small><strong>{{vrioOutcome}}</strong><p>প্রতিটি YES-এর পাশে case evidence লাগবে।</p></div>
      </template>
      <template v-else-if="slug === 'formation'">
        <div class="kernelFlow"><article><b>Diagnosis</b><p>Critical obstacle</p></article><i>→</i><article><b>Guiding Policy</b><p>Overall approach</p></article><i>→</i><article><b>Coherent Actions</b><p>Reinforcing moves</p></article></div>
        <label class="continuum"><span>Deliberate</span><input v-model.number="deliberate" type="range"><span>Emergent</span></label><p class="labFoot">{{ deliberate < 35 ? 'Plan-led: stable context-এ useful.' : deliberate > 65 ? 'Learning-led: uncertainty-তে useful.' : 'Balanced: direction + experiments.' }}</p>
      </template>
      <template v-else-if="slug === 'organization'">
        <div class="fitControls"><label>Size<select v-model="size"><option value="small">Small</option><option value="large">Large</option></select></label><label>Variety<select v-model="variety"><option value="single">Single</option><option value="diverse">Diverse</option></select></label><label>Environment<select v-model="change"><option value="stable">Stable</option><option value="dynamic">Dynamic</option></select></label></div><div class="resourceOutcome"><small>STARTING HYPOTHESIS</small><strong>{{structure}}</strong><p>এরপর 7S alignment check করো—structure একা যথেষ্ট নয়।</p></div>
      </template>
      <template v-else-if="slug === 'ethics'">
        <div class="ethicsChecks"><label v-for="(x,i) in ['Stakeholder harm mapped','Rights & fairness checked','Scale/time/visibility checked','Mitigation and voice designed']" :key="x"><input v-model="checks[i]" type="checkbox"><span>{{x}}</span></label></div><div class="ethicsVerdict"><strong>{{checks.filter(Boolean).length===4?'Decision-ready':'Analysis incomplete'}}</strong><p>{{4-checks.filter(Boolean).length}} ethical lens বাকি।</p></div>
      </template>
      <template v-else-if="slug === 'cpm'">
        <div class="npvDesk"><div class="npvInputs"><label>Investment<input v-model.number="investment" type="number"></label><label>Discount rate %<input v-model.number="rate" type="number"></label><label v-for="(_,i) in flows" :key="i">Year {{i+1}} CF<input v-model.number="flows[i]" type="number"></label></div><div class="npvScreen"><small>NPV</small><strong>{{npv>=0?'+':'−'}}€{{Math.abs(npv).toFixed(2)}}</strong><b>{{npv>=0?'ACCEPT SIGNAL':'REJECT SIGNAL'}}</b></div></div>
      </template>
      <template v-else>
        <div class="krCards"><article v-for="(item,i) in krItems" :key="item[0]" :class="krAnswers[i]===undefined?'':krAnswers[i]===item[1]?'correct':'wrong'"><p>{{item[0]}}</p><div><button @click="krAnswers[i]=true">Strong KR</button><button @click="krAnswers[i]=false">Weak KR</button></div><small v-if="krAnswers[i]!==undefined">{{krAnswers[i]===item[1]?'✓ Correct — ':'✕ Recheck — '}}{{item[2]}}</small></article></div>
      </template>
    </div>
  </section>
</template>
