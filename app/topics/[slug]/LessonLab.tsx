"use client";

import { useMemo, useState } from "react";

type LessonLabProps = { slug: string };

const flashcards: Record<string, Array<[string, string]>> = {
  definition: [
    ["Value আর Profit-এর পার্থক্য কী?", "Value হলো সব stakeholder-এর জন্য তৈরি total benefit; Profit হলো firm-এর captured share."],
    ["Price বাড়ল, quality একই—create না capture?", "Mainly Value Capture: firm existing value-এর বড় অংশ নিচ্ছে; total value বাড়েনি."],
    ["Customer value-এর formula?", "Customer surplus = WTP − Price."],
    ["Strategy মনে রাখার shortest line?", "Strategy is a plan to create value."],
  ],
  competition: [
    ["PESTEL কী দেখে?", "Macro-environmental change: Political, Economic, Social, Technological, Environmental, Legal."],
    ["Five Forces-এর unit of analysis কী?", "Industry—একটি single firm নয়."],
    ["Buyer power বেশি হলে কী হয়?", "Buyers price/terms চাপতে পারে; industry profit potential কমে."],
    ["Positioning-এর তিন route?", "Cost leadership, Differentiation, Focus."],
  ],
  resources: [
    ["VRIO-তে V আছে, R নেই—outcome?", "Competitive parity; resource useful হলেও competitors-এর কাছেও আছে."],
    ["Resource আর Capability-এর পার্থক্য?", "Resource হলো asset; Capability হলো assets coordinate করে কাজ সম্পাদনের repeatable ability."],
    ["SWOT list-এর পরে কী দরকার?", "TOWS logic—internal ও external factor মিলিয়ে action তৈরি করা."],
    ["Sustained advantage-এর condition?", "Valuable, Rare, costly to Imitate, and Organized to capture value."],
  ],
  formation: [
    ["Rumelt Kernel-এর তিন অংশ?", "Diagnosis, Guiding Policy, Coherent Actions."],
    ["Goal আর Strategy কি একই?", "না। Goal বলে কোথায় যেতে চাই; Strategy বলে obstacle পেরিয়ে কীভাবে সেখানে যাব."],
    ["Emergent strategy কী?", "Action ও learning থেকে গড়ে ওঠা realized pattern, যা original plan-এর বাইরে হতে পারে."],
    ["Coherence কেন জরুরি?", "Actions একে অপরকে reinforce না করলে resources ছড়িয়ে যায় এবং trade-off অস্পষ্ট হয়."],
  ],
  organization: [
    ["Structure follows strategy—মানে?", "Chosen strategy বাস্তবায়নের জন্য roles, authority, coordination ও incentives fit করতে হবে."],
    ["Functional structure কখন ভালো?", "Limited product range, specialization benefit এবং তুলনামূলক stable coordination need হলে."],
    ["Matrix-এর main risk?", "Dual authority, conflict এবং slow decisions."],
    ["7S-এ hard/soft মিল কতটা জরুরি?", "সব seven elements mutually aligned না হলে implementation friction তৈরি হয়."],
  ],
  ethics: [
    ["Legal হলেই ethical?", "না। Law minimum boundary; ethical analysis stakeholder harm, fairness ও responsibility-ও দেখে."],
    ["CSR Pyramid-এর layers?", "Economic, Legal, Ethical, Philanthropic responsibilities."],
    ["Amplification Effect-এর dimensions?", "Scale, Time, Complexity এবং Visibility—organizational decision-এর consequence এগুলো দিয়ে amplify হয়."],
    ["Ethics strategy-এর বাইরে কেন নয়?", "Unethical choices trust, legitimacy, talent, regulation ও long-term value নষ্ট করতে পারে."],
  ],
  cpm: [
    ["Positive NPV কী বোঝায়?", "Required return account করার পর project value যোগ করে; assumptions valid হলে accept."],
    ["Lagging বনাম leading KPI?", "Lagging outcome দেখায়; leading future outcome-এর driver আগে signal করে."],
    ["Ratio একা verdict দেয়?", "না। Trend, benchmark, accounting policy ও business context দরকার."],
    ["Metric-এর danger কী?", "Target-এ পরিণত হলে মানুষ metric game করতে পারে; behaviour and quality check দরকার."],
  ],
  okrs: [
    ["Objective কেমন?", "Qualitative, directional, motivating এবং strategically meaningful."],
    ["Key Result কেমন?", "Specific, measurable, time-bound outcome—not a task list."],
    ["Initiative আর KR-এর difference?", "Initiative হলো কাজ; KR হলো কাজ সফল হলে যে measurable outcome বদলাবে."],
    ["OKR review কেন?", "Score দিয়ে punishment নয়; evidence থেকে learn, adapt এবং next cycle improve করা."],
  ],
};

const teacherNotes: Record<string, { confuse: string; move: string; sentence: string }> = {
  definition: { confuse: "Students প্রায়ই Revenue/Profit-কে Value বলে। আগে stakeholder ও counterfactual benefit খুঁজো।", move: "Numbers দেখলে WTP → Price → Cost → WTS লিখে surplus আলাদা করো।", sentence: "The initiative creates value by increasing WTP and captures part of it through the price-cost margin." },
  competition: { confuse: "PESTEL, Five Forces এবং competitor analysis একসঙ্গে মিশিয়ে ফেলা হয়। তিনটির level আলাদা।", move: "দেশ/সমাজের signal হলে PESTEL; industry economics হলে Five Forces; chosen advantage হলে Positioning.", sentence: "The dominant external pressure is buyer power, which compresses industry margins and requires clearer differentiation." },
  resources: { confuse: "কোনো asset ভালো হলেই sustained advantage ধরে নেওয়া হয়। VRIO-এর সব gate পেরোতে হয়।", move: "Resource-এর নাম নয়, evidence দাও: কেন valuable, rare, hard to copy, এবং organization কীভাবে exploit করে।", sentence: "The capability can support sustained advantage only if the firm is organized to exploit its rarity and imitability barriers." },
  formation: { confuse: "Ambitious target-কে strategy লেখা হয়। Target obstacle বা choice ব্যাখ্যা করে না।", move: "Diagnosis দিয়ে bottleneck narrow করো, guiding policy দিয়ে boundary দাও, তারপর mutually reinforcing actions লেখো।", sentence: "The strategy is coherent because the guiding policy addresses the diagnosed constraint and coordinates reinforcing actions." },
  organization: { confuse: "Org chart বদলালেই implementation solve হবে ভাবা হয়। Systems, skills, incentives ও culture একই সঙ্গে matter করে।", move: "Strategy requirement → coordination problem → structure → 7S gaps—এই chain লিখো।", sentence: "Implementation failure reflects a misfit between strategy, structure, systems and incentives rather than a weak strategy alone." },
  ethics: { confuse: "Shareholder profit বনাম charity—এই false choice করা হয়। Ethics daily strategic choices-এর stakeholder consequences দেখে।", move: "Stakeholder, harm/benefit, rights/fairness, salience, mitigation—এই পাঁচ ধাপ follow করো।", sentence: "Although the action may be legal and profitable, it creates material stakeholder harm and threatens long-term legitimacy." },
  cpm: { confuse: "একটি ratio বা KPI দেখে final judgement দেওয়া হয়। Measurement হলো evidence, explanation নয়।", move: "Calculate → direction → benchmark → driver → limitation → action.", sentence: "The indicator suggests deterioration, but a valid conclusion requires trend, benchmark and operational-driver analysis." },
  okrs: { confuse: "Task-কে Key Result লেখা হয়: launch, build, run—এসব initiative verb।", move: "‘কতটা outcome বদলাবে, কবে পর্যন্ত?’—উত্তর না থাকলে KR rewrite করো।", sentence: "The Key Results translate strategic intent into measurable outcomes, while initiatives describe the work used to achieve them." },
};

function DefinitionLab() {
  const [wtp, setWtp] = useState(8);
  const [price, setPrice] = useState(6);
  const [cost, setCost] = useState(3);
  const [wts, setWts] = useState(2);
  const valid = wtp >= price && price >= cost && cost >= wts;
  const customer = wtp - price;
  const firm = price - cost;
  const partner = cost - wts;
  return <div className="customLab valueLab">
    <div className="labLead"><span>VALUE STICK SIMULATOR</span><h3>Cake বড় হলো, নাকি শুধু company-র slice?</h3><p>Sliders বদলে দেখো—কোন decision stakeholder value এবং firm margin-কে কীভাবে বদলায়।</p></div>
    <div className="valueWorkbench">
      <div className="sliderStack">
        {[["WTP",wtp,setWtp],["Price",price,setPrice],["Cost",cost,setCost],["WTS",wts,setWts]].map(([label,value,setter]) => <label key={label as string}><span><b>{label as string}</b><strong>€{value as number}</strong></span><input aria-label={`${label as string} value`} type="range" min="0" max="12" value={value as number} onChange={(e) => (setter as (n:number)=>void)(Number(e.target.value))}/></label>)}
      </div>
      <div className="valueResults">
        <div><small>CUSTOMER SURPLUS</small><strong>€{customer}</strong><code>WTP − Price</code></div>
        <div><small>FIRM MARGIN</small><strong>€{firm}</strong><code>Price − Cost</code></div>
        <div><small>PARTNER SURPLUS</small><strong>€{partner}</strong><code>Cost − WTS</code></div>
        <div className="totalValue"><small>TOTAL VALUE CREATED</small><strong>€{wtp-wts}</strong><code>WTP − WTS</code></div>
      </div>
    </div>
    {!valid && <p className="labWarning">⚠ বাস্তবসম্মত Value Stick-এর order ভেঙেছে। সাধারণত WTP ≥ Price ≥ Cost ≥ WTS রাখো।</p>}
    <div className="labDebrief"><b>Experiment:</b><p>শুধু Price বাড়াও—firm capture বাড়ে, customer surplus কমে, total value একই থাকে। তারপর WTP বাড়াও—total cake বড় হয়। এটাই <strong>Value Capture বনাম Value Creation</strong>।</p></div>
  </div>;
}

const forces = ["Rivalry", "Buyer power", "Supplier power", "New entrants", "Substitutes"];
function CompetitionLab() {
  const [levels, setLevels] = useState([3,3,3,3,3]);
  const average = levels.reduce((a,b)=>a+b,0)/levels.length;
  const verdict = average >= 4 ? "Structurally unattractive" : average >= 2.7 ? "Mixed pressure" : "Relatively attractive";
  return <div className="customLab competitionLab">
    <div className="labLead"><span>FIVE FORCES PRESSURE BOARD</span><h3>Industry profit কোথায় leak করছে?</h3><p>Case evidence অনুযায়ী প্রতিটি force-এর pressure set করো। এটি thinking aid—official numeric formula নয়।</p></div>
    <div className="forceBoard">{forces.map((force,i)=><div className="forceRow" key={force}><b>{force}</b><div>{[1,2,3,4,5].map(level=><button aria-label={`${force} level ${level}`} className={levels[i]===level?"active":""} key={level} onClick={()=>setLevels(levels.map((x,j)=>j===i?level:x))}>{level}</button>)}</div><small>{levels[i] <= 2 ? "low" : levels[i]===3 ? "medium" : "high"}</small></div>)}</div>
    <div className="pressureVerdict"><small>LEARNING SIGNAL</small><strong>{verdict}</strong><p>Average pressure {average.toFixed(1)}/5। এখন highest force-এর evidence explain করে action দাও; শুধু পাঁচটি force list করো না।</p></div>
  </div>;
}

function ResourcesLab() {
  const [vrio,setVrio] = useState([true,true,false,false]);
  const labels = [["V","Valuable"],["R","Rare"],["I","Costly to imitate"],["O","Organized"]];
  let outcome="Sustained competitive advantage";
  if(!vrio[0]) outcome="Competitive disadvantage"; else if(!vrio[1]) outcome="Competitive parity"; else if(!vrio[2]) outcome="Temporary competitive advantage"; else if(!vrio[3]) outcome="Unrealized advantage";
  return <div className="customLab resourceLab">
    <div className="labLead"><span>VRIO GATEKEEPER</span><h3>Resource-টি কত দূর advantage নিতে পারে?</h3><p>প্রতিটি gate on/off করো। Model sequential—আগের gate fail করলে পরে tick দিয়ে লাভ নেই।</p></div>
    <div className="vrioPath">{labels.map(([letter,label],i)=><button className={vrio[i]?"passed":""} onClick={()=>setVrio(vrio.map((v,j)=>j===i?!v:v))} key={letter}><b>{letter}</b><span>{label}</span><small>{vrio[i]?"YES":"NO"}</small></button>)}</div>
    <div className="resourceOutcome"><small>STRATEGIC OUTCOME</small><strong>{outcome}</strong><p>Exam-এ প্রতিটি YES-এর পাশে case evidence দাও। “Strong brand” বলা evidence নয়; customer preference, scarcity ও copying barrier explain করো।</p></div>
  </div>;
}

function FormationLab() {
  const [mix,setMix]=useState(65);
  return <div className="customLab formationLab">
    <div className="labLead"><span>RUMELT KERNEL BUILDER</span><h3>Goal-কে strategy বানাও</h3><p>একটি ভালো answer-এর তিন block পরস্পরের সঙ্গে logically linked হবে।</p></div>
    <div className="kernelFlow"><article><span>01</span><b>Diagnosis</b><p>“Sales কম”—symptom। ভালো diagnosis: mid-market customers delivery uncertainty-এর কারণে churn করছে।</p></article><i>→</i><article><span>02</span><b>Guiding Policy</b><p>Fastest হওয়া নয়; reliable delivery-তে compete করব এবং low-fit custom orders বাদ দেব।</p></article><i>→</i><article><span>03</span><b>Coherent Actions</b><p>SKU simplify, capacity buffer, supplier SLA, delivery KPI—সব policy-কে reinforce করে।</p></article></div>
    <label className="continuum"><span><b>Deliberate</b><small>plan-led</small></span><input aria-label="Deliberate to emergent strategy mix" type="range" min="0" max="100" value={mix} onChange={e=>setMix(Number(e.target.value))}/><span><b>Emergent</b><small>learning-led</small></span></label>
    <p className="continuumRead">তোমার mix: <strong>{mix<35?"Mostly deliberate":mix>65?"Mostly emergent":"Balanced learning"}</strong>। Stable execution-এ planning বেশি useful; uncertainty-তে experiments ও feedback-এর জায়গা বেশি রাখো।</p>
  </div>;
}

function OrganizationLab(){
  const [size,setSize]=useState("large"); const [variety,setVariety]=useState("diverse"); const [change,setChange]=useState("dynamic");
  const recommendation = size==="small" ? "Simple / light Functional" : variety==="single" ? "Functional structure" : change==="stable" ? "Divisional structure" : "Divisional core + Matrix/SBU coordination";
  return <div className="customLab organizationLab"><div className="labLead"><span>STRUCTURE FIT LAB</span><h3>Strategy-এর coordination problem থেকে structure বেছে নাও</h3><p>এটি diagnosis starter, automatic final answer নয়। Case evidence দিয়ে fit verify করবে।</p></div>
    <div className="fitControls"><label>Organization size<select value={size} onChange={e=>setSize(e.target.value)}><option value="small">Small</option><option value="large">Large</option></select></label><label>Product/market variety<select value={variety} onChange={e=>setVariety(e.target.value)}><option value="single">Single / related</option><option value="diverse">Diverse</option></select></label><label>Environment<select value={change} onChange={e=>setChange(e.target.value)}><option value="stable">Stable</option><option value="dynamic">Dynamic</option></select></label></div>
    <div className="orgSketch"><div>CEO</div><span>↙</span><div className="orgRecommendation"><small>STARTING HYPOTHESIS</small><strong>{recommendation}</strong></div><span>↘</span><div>7S alignment check</div></div>
    <p className="labFoot">তারপর Strategy, Systems, Skills, Staff, Style এবং Shared Values-এর mismatch খুঁজবে। Structure একা execution ঠিক করে না।</p>
  </div>;
}

function EthicsLab(){
  const [checks,setChecks]=useState([false,false,false,false]);
  const tests=["Stakeholder harm mapped","Rights & fairness checked","Scale/time/complexity/visibility checked","Mitigation and voice designed"];
  const done=checks.filter(Boolean).length;
  return <div className="customLab ethicsLab"><div className="labLead"><span>ETHICAL DECISION GATE</span><h3>Legal/profitable answer-এর বাইরে কী দেখবে?</h3><p>Scenario: cheaper supplier নিলে margin বাড়বে, কিন্তু unsafe working conditions-এর credible evidence আছে।</p></div>
    <div className="ethicsGrid"><div className="csrPyramid"><div>PHILANTHROPIC</div><div>ETHICAL</div><div>LEGAL</div><div>ECONOMIC</div></div><div className="ethicsChecks">{tests.map((test,i)=><label key={test}><input type="checkbox" checked={checks[i]} onChange={()=>setChecks(checks.map((v,j)=>j===i?!v:v))}/><span>{test}</span></label>)}</div></div>
    <div className={`ethicsVerdict ${done===4?"ready":""}`}><strong>{done===4?"Decision-ready":"Analysis incomplete"}</strong><p>{done===4?"এখন option compare করো: supplier remediation + audit + deadline, alternative sourcing, এবং affected workers-এর protection.":`${4-done}টি ethical lens বাকি। শুধু “supplier বাদ দাও” বললে unintended harm-ও হতে পারে।`}</p></div>
  </div>;
}

function CpmLab(){
  const [investment,setInvestment]=useState(100); const [rate,setRate]=useState(10); const [flows,setFlows]=useState([45,45,45]);
  const npv=useMemo(()=>-investment+flows.reduce((sum,cf,i)=>sum+cf/Math.pow(1+rate/100,i+1),0),[investment,rate,flows]);
  return <div className="customLab cpmLab"><div className="labLead"><span>NPV DECISION DESK</span><h3>Formula থেকে management meaning বের করো</h3><p>Values বদলে দেখো। Unit একই ধরো—যেমন €000।</p></div>
    <div className="npvDesk"><div className="npvInputs"><label>Initial investment<input type="number" value={investment} onChange={e=>setInvestment(Number(e.target.value))}/></label><label>Discount rate %<input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))}/></label>{flows.map((flow,i)=><label key={i}>Year {i+1} cash flow<input type="number" value={flow} onChange={e=>setFlows(flows.map((v,j)=>j===i?Number(e.target.value):v))}/></label>)}</div><div className="npvScreen"><small>NET PRESENT VALUE</small><strong>{npv<0?"−":"+"}€{Math.abs(npv).toFixed(2)}</strong><b>{npv>=0?"ACCEPT SIGNAL":"REJECT SIGNAL"}</b><p>{npv>=0?"Project required return-এর পরে value যোগ করছে।":"Project stated assumptions-এ required return cover করছে না।"}</p></div></div>
    <p className="labFoot"><b>Caveat:</b> NPV যত accurate, forecast ও discount rate তত accurate। Strategic options, risk এবং non-financial effects আলাদাভাবে discuss করো।</p>
  </div>;
}

function OkrsLab(){
  const examples=[
    {text:"Launch the new dashboard",good:false,why:"এটি activity/initiative; outcome নয়."},
    {text:"Increase weekly active users from 40% to 55% by Q4",good:true,why:"Baseline, target, metric ও deadline আছে."},
    {text:"Improve customer happiness",good:false,why:"Direction আছে, measurable result নেই."},
    {text:"Reduce median support resolution time from 18h to 8h by June",good:true,why:"Specific, measurable এবং time-bound outcome."},
  ];
  const [answers,setAnswers]=useState<Record<number,boolean>>({});
  return <div className="customLab okrLab"><div className="labLead"><span>KEY RESULT QUALITY CHECK</span><h3>Task নাকি measurable outcome?</h3><p>প্রতিটি card-এ সিদ্ধান্ত দাও। ভুল হলে explanation-টাই memory hook হিসেবে ব্যবহার করো।</p></div>
    <div className="krCards">{examples.map((item,i)=><article key={item.text} className={answers[i]===undefined?"":answers[i]===item.good?"correct":"wrong"}><p>{item.text}</p><div><button onClick={()=>setAnswers({...answers,[i]:true})}>Strong KR</button><button onClick={()=>setAnswers({...answers,[i]:false})}>Weak KR</button></div>{answers[i]!==undefined&&<small>{answers[i]===item.good?"✓ Correct — ":"✕ Recheck — "}{item.why}</small>}</article>)}</div>
    <div className="okrGrammar"><b>KR grammar</b><code>Verb + metric + from baseline + to target + by date</code><p>Initiatives পরে লিখবে: কোন কাজগুলো এই outcome change করবে?</p></div>
  </div>;
}

function TopicLab({slug}:{slug:string}){
  if(slug==="definition") return <DefinitionLab/>;
  if(slug==="competition") return <CompetitionLab/>;
  if(slug==="resources") return <ResourcesLab/>;
  if(slug==="formation") return <FormationLab/>;
  if(slug==="organization") return <OrganizationLab/>;
  if(slug==="ethics") return <EthicsLab/>;
  if(slug==="cpm") return <CpmLab/>;
  return <OkrsLab/>;
}

export default function LessonLab({slug}:LessonLabProps){
  const cards=flashcards[slug]||[];
  const note=teacherNotes[slug];
  const [card,setCard]=useState(0); const [revealed,setRevealed]=useState(false);
  return <>
    <section className={`lessonLabSection lab-${slug}`} id="learning-lab">
      <div className="lessonSectionLabel"><span>✦</span><b>Interactive learning lab</b></div>
      <TopicLab slug={slug}/>
    </section>
    <section className="teacherDesk">
      <div className="teacherTitle"><span>TEACHER&apos;S DESK</span><h2>Student হিসেবে কোথায় ভুল হওয়ার chance বেশি?</h2></div>
      <div className="teacherCards"><article><small>COMMON CONFUSION</small><p>{note.confuse}</p></article><article><small>EXAM MOVE</small><p>{note.move}</p></article><article className="sayThis"><small>SAY THIS IN ENGLISH</small><blockquote>“{note.sentence}”</blockquote></article></div>
    </section>
    <section className="recallDeck" id="daily-review">
      <div className="recallIntro"><span>5-MINUTE DAILY REVIEW</span><h2>দেখে পড়বে না—মনে করে বলবে।</h2><p>প্রথমে answer aloud বলো, তারপর reveal করো। চারটি card শেষ হলে model-এর নাম না দেখে একটি নতুন example নিজে বানাও।</p></div>
      <div className="flashcard" aria-live="polite"><div className="cardCount">CARD {card+1} / {cards.length}</div><h3>{cards[card]?.[0]}</h3>{revealed?<div className="flashAnswer"><small>ANSWER</small><p>{cards[card]?.[1]}</p></div>:<button onClick={()=>setRevealed(true)}>Answer reveal করো</button>}<div className="cardNav"><button disabled={card===0} onClick={()=>{setCard(card-1);setRevealed(false)}}>← Previous</button><button disabled={card===cards.length-1} onClick={()=>{setCard(card+1);setRevealed(false)}}>Next →</button></div></div>
      <div className="reviewRoutine"><b>Daily loop</b><ol><li>60 sec: terms recall</li><li>2 min: flashcards</li><li>1 min: নিজে example</li><li>1 min: English exam sentence</li></ol></div>
    </section>
  </>;
}
