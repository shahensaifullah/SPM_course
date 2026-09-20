import type { Metadata } from "next";
import Link from "next/link";
import CaseCalculator from "./CaseCalculator";

export const metadata: Metadata = {
  title: "Meta Case Pt. 2 — CPM Preparation Lab | SPM Field Guide",
  description: "Step-by-step Bangla preparation for Meta acquisition ROI, AI investment, Reality Labs break-even, and Balanced Scorecard analysis.",
  openGraph: { title: "Meta Case Pt. 2 — CPM Preparation Lab", description: "Source discipline, calculations, interpretation, and exam-ready answer structures.", images: [] },
  twitter: { title: "Meta Case Pt. 2 — CPM Preparation Lab", description: "CPM case preparation in Bangla with English exam terms.", images: [] },
};

const documents = [
  ["D1","Q2 2026 Results","Current quarter: financial highlights, operational metrics, outlook, statements, segments"],
  ["D2","Q2 2026 Earnings Presentation","Multi-quarter trends: geography, Capex, DAP, Family ARPP, ads"],
  ["D3","Q2 2026 Earnings Call Transcript","Management explanations, AI strategy, milestones, Reality Labs outlook"],
  ["D4","FY 2025 Results","Full-year 2025 vs 2024 and original 2026 guidance"],
  ["D5","FY 2025 Form 10-K","2023–2025 history, risks, segment note, business description"],
  ["D6","Q1 2026 Results","Optional half-year comparison and Q1 segment figures"],
];

const tasks = [
  {n:"01",title:"Acquisition ROI",question:"Instagram বা WhatsApp acquisition paid off কি না কীভাবে judge করবে?",steps:["Acquisition price-এর exact convention state করো—announcement নাকি closing value।","Per-app revenue disclosed নয়; attributable revenue/FCF estimate-এর allocation key explain করো।","Current value, historic cash flows এবং indirect ecosystem benefits আলাদা করো।","Multi-year cash flows common period-এ এনে justified discount rate দিয়ে NPV/scenario করো।","Result-এর sensitivity ও data limitation লিখে managerial judgement দাও।"],models:"NPV · Scenario Analysis · Value Stick · Strategic Synergy",trap:"Family ARPP-কে একটি app-এর users দিয়ে multiply করো না। একই person multiple apps ব্যবহার করলেও DAP-এ একবার count হয়।"},
  {n:"02",title:"AI / AGI Investment",question:"Huge spend measurable strategic momentum তৈরি করছে কি?",steps:["Input: current/annual Capex ও R&D trend normalize করো।","Capability: infrastructure, talent, models ও developer ecosystem-এর evidence নাও।","Process/output: ranking, ad performance, product delivery বা efficiency signal নাও।","Customer/outcome: DAP, engagement, monetization ও management milestones trend করো।","Lagging financial return না আসা পর্যন্ত leading evidence, risk এবং waiting horizon define করো।"],models:"Balanced Scorecard · Leading/Lagging Indicators · Dynamic Capabilities",trap:"More Capex = success নয়। Spending input; value evidence-এর causal chain আলাদা দেখাতে হবে।"},
  {n:"03",title:"Reality Labs Break-Even",question:"Break-even-এর জন্য কত revenue growth বা cost reduction প্রয়োজন?",steps:["একই period-এর segment revenue ও operating loss নাও।","Implied operating cost = Revenue + absolute Operating Loss।","Revenue-only break-even: required revenue = current cost।","Cost-only break-even: required cost reduction = current loss।","Mixed scenarios, time horizon, product driver এবং risk disclosure যোগ করো।"],models:"Break-even · Scenario/Sensitivity · Management Control · Real Options",trap:"Quarterly loss-এর সঙ্গে annual revenue mix কোরো না; break-even-কে moonshot-এর একমাত্র success criterion বলো না।"},
  {n:"04",title:"Balanced Scorecard",question:"Meta-এর strategy financial এবং non-financial evidence-এ কীভাবে translate করবে?",steps:["Financial: revenue, margin, segment result, FCF, investment intensity।","Customer: DAP, engagement, Family ARPP, per-app milestones।","Internal Process: ranking, ad infrastructure, delivery efficiency, reliability।","Learning & Growth: R&D, skills, AI capability, organizational learning।","Causal chain ও resource-allocation implication লিখো; চারটি KPI list করে থেমো না।"],models:"Balanced Scorecard · Strategy Map · Resource Allocation",trap:"Management-selected positive metric-কে neutral truth ধরো না; omitted evidence ও trade-off খুঁজো।"},
];

export default function CaseTwoPage(){return <main className="caseLabPage">
  <header className="lessonTopbar"><Link className="brand" href="/"><span>SPM</span> Field Guide</Link><div className="lessonTopActions"><Link href="/topics/cpm">CPM Lesson</Link><Link href="/trainer">Exam Trainer</Link><a className="navCta" href="#tasks">Four Tasks</a></div></header>
  <section className="caseLabHero"><div className="caseLabMeta">META CASE PT. 2 · PREPARATION LAB</div><h1>Numbers খুঁজে পাওয়া নয়।<br/><em>Evidence থেকে judgement.</em></h1><p>Professor-এর guide-এর reference period হলো <strong>Q2 2026</strong> এবং last completed fiscal year <strong>FY 2025</strong>। এই page তোমাকে data → calculation → interpretation → limitation chain বানাতে শেখায়।</p><div className="caseThesis"><small>WHAT EARNS MARKS</small><strong>Traceable source + explicit assumption + correct model + defensible interpretation</strong></div></section>

  <section className="caseSourceDesk"><div className="sectionIntro"><span>01 / Source discipline</span><h2>D1–D6 map আগে বানাও.</h2><p>একই figure দুই জায়গায় থাকলে period, unit ও definition check করো। Company filing, management statement, third-party estimate এবং নিজের assumption কখনো একই evidence status নয়।</p></div><div className="docGrid">{documents.map(([id,title,use])=><article key={id}><span>{id}</span><h3>{title}</h3><p>{use}</p></article>)}</div><div className="evidenceLegend"><div><b>DISCLOSED</b><span>Meta filing/release-এর direct figure</span></div><div><b>MANAGEMENT CLAIM</b><span>Transcript-এর interpretation or milestone</span></div><div><b>ESTIMATED</b><span>Third-party বা derived allocation</span></div><div><b>ASSUMED</b><span>তোমার rate, horizon, growth, margin</span></div></div></section>

  <section className="integrityGate"><div><span>DATA INTEGRITY GATE</span><h2>Calculation-এর আগে পাঁচটি check</h2></div><ol><li><b>Period</b>Quarterly নাকি annual?</li><li><b>Unit</b>Dollar, million, billion?</li><li><b>Definition</b>Family DAP/ARPP নাকি per-app user?</li><li><b>Source status</b>Disclosed, estimated, assumed?</li><li><b>Comparability</b>Same segment, accounting basis, time?</li></ol></section>

  <section className="caseTasks" id="tasks"><div className="sectionIntro"><span>02 / Four tasks</span><h2>প্রতিটি task-এর আলাদা analytical lens.</h2><p>একই favourite formula সব task-এ ব্যবহার করবে না। প্রশ্নটি প্রথমে কী judgement চাইছে সেটি ধরো।</p></div>{tasks.map(task=><article className="caseTask" key={task.n}><div className="taskIdentity"><span>{task.n}</span><h3>{task.title}</h3><p>{task.question}</p><div><small>LEAD MODELS</small><b>{task.models}</b></div></div><ol>{task.steps.map(step=><li key={step}>{step}</li>)}</ol><aside><b>COMMON TRAP</b><p>{task.trap}</p></aside></article>)}</section>

  <section className="caseCalculatorSection"><div className="sectionIntro"><span>03 / Scenario tool</span><h2>Break-even mechanics নিজে test করো.</h2><p>Scenario input বদলে revenue-only assumption কত aggressive হয় দেখো। তারপর mixed revenue/cost path explain করো।</p></div><CaseCalculator/></section>

  <section className="caseAnswerArchitecture"><div><span>04 / ANSWER ARCHITECTURE</span><h2>একটি defensible CPM conclusion</h2></div><ol><li><b>Question</b>কোন decision/judgement?</li><li><b>Evidence</b>কোন D-source, period, unit?</li><li><b>Method</b>Formula/framework এবং কেন?</li><li><b>Result</b>Calculation/trend কী বলছে?</li><li><b>Meaning</b>Strategy/management implication?</li><li><b>Uncertainty</b>Estimate, assumption, bias, sensitivity?</li><li><b>Action</b>Invest, stop, stage-gate, reallocate, monitor?</li></ol><blockquote>“Using [source and period], the analysis indicates [result]. This suggests [managerial meaning], but the conclusion depends on [assumption/limitation]. Therefore, management should [action] while monitoring [leading and lagging evidence].”</blockquote></section>

  <section className="caseFinalCheck"><h2>Submit করার আগে</h2><div><p>□ Q2 2026 ও FY 2025 consistent</p><p>□ Quarterly/annual figures normalized</p><p>□ ARPP ≠ per-app ARPU লেখা</p><p>□ Every assumption visible</p><p>□ Trend, not one isolated number</p><p>□ Management positives critically checked</p><p>□ Calculation-এর managerial meaning আছে</p><p>□ One limitation + next evidence আছে</p></div><a href="https://awe-hnu.de/lectures/SPM/26WT/case-2/preparation.html" target="_blank" rel="noreferrer">Professor’s preparation page ↗</a></section>
</main>}
