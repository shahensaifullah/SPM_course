"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { scenarios } from "../studyData";

const optionSets = [
  ["Porter’s Generic Strategies / stuck in the middle", "Operational Effectiveness", "Ansoff Matrix", "VRIO"],
  ["PESTEL → Five Forces → SWOT", "VRIO → NPV", "7S → OKRs", "CSR Pyramid"],
  ["VRIO", "Five Forces", "PESTEL", "Balanced Scorecard"],
  ["Emergent Strategy + Strategy as Craft", "Planning School", "Generic Strategies", "Responsibility Centers"],
  ["McKinsey 7S / Organizational Alignment", "Five Forces", "Blue Ocean", "NPV"],
  ["Structural Ambidexterity", "Functional Structure", "Cost Leadership", "CFRs"],
  ["Corporate Digital Responsibility + CPM Dysfunction", "Market Development", "VRIO", "Variance Analysis"],
  ["Cash Flow + Working Capital Ratios", "Revenue Growth", "Value Stick", "OKR Scoring"],
  ["NPV + Balanced Scorecard + Real Options", "Current Profit only", "PESTEL only", "Cost Center"],
  ["Performance Measurement Dysfunction", "Blue Ocean", "CSR Pyramid", "Dynamic Capabilities"],
  ["OKRs", "Five Forces", "Ansoff", "ABC Costing"],
  ["Ansoff: Market Development", "Product Development", "Market Penetration", "Diversification"],
];

const contrastRows = [
  ["PESTEL", "Macro change", "Country/society-level force", "A single rival cuts price"],
  ["Five Forces", "Industry profitability", "Power, entry, substitutes, rivalry", "Why this firm alone performs better"],
  ["VRIO", "Firm-specific advantage", "Valuable/rare/copy/organized resource", "Overall industry attractiveness"],
  ["7S", "Implementation misfit", "Structure, systems, skills, culture conflict", "Choosing the competitive position"],
  ["CPM", "Measurement/control", "Results, behaviour, variance, accountability", "Defining quarterly strategic focus"],
  ["OKRs", "Focused execution", "Objective, outcome KR, alignment, cadence", "Diagnosing whether strategy is good"],
];

export default function TrainerClient() {
  const [order,setOrder]=useState(scenarios.map((_,i)=>i));
  const [step,setStep]=useState(0);
  const [choice,setChoice]=useState<string|null>(null);
  const [score,setScore]=useState(0);
  const [confidence,setConfidence]=useState<string|null>(null);
  const [fields,setFields]=useState({signal:"",model:"",evidence:"",action:"",caveat:""});
  const [rubric,setRubric]=useState([false,false,false,false,false]);
  const scenarioIndex=order[step];
  const scenario=scenarios[scenarioIndex];
  const options=optionSets[scenarioIndex];
  const correct=choice===scenario.answer;
  const rubricScore=rubric.filter(Boolean).length;
  const completed=step===order.length-1 && choice!==null;
  const progress=Math.round(((step+(choice?1:0))/order.length)*100);
  const weakSignal=useMemo(()=>confidence==="guessed"||(!correct&&choice!==null),[confidence,correct,choice]);

  function answer(option:string){
    if(choice) return;
    setChoice(option);
    if(option===scenario.answer) setScore(score+1);
  }
  function next(){
    if(step<order.length-1){setStep(step+1);setChoice(null);setConfidence(null);}
  }
  function restart(shuffle=false){
    const nextOrder=scenarios.map((_,i)=>i);
    if(shuffle) for(let i=nextOrder.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[nextOrder[i],nextOrder[j]]=[nextOrder[j],nextOrder[i]];}
    setOrder(nextOrder);setStep(0);setChoice(null);setScore(0);setConfidence(null);
  }
  return <main className="trainerPage">
    <header className="lessonTopbar"><Link className="brand" href="/"><span>SPM</span> Field Guide</Link><div className="lessonTopActions"><Link href="/#map">Topics</Link><Link href="/case-2">Meta Case</Link><a className="navCta" href="#answer-studio">Answer Studio</a></div></header>

    <section className="trainerHero"><div><span>EXAM TRANSFER LAB</span><h1>Model মুখস্থ নয়।<br/><em>Signal discriminate করো।</em></h1><p>Professor scenario দিলে আগে dominant issue ধরবে, তারপর primary model, case evidence, action এবং caveat। এই mixed practice-এ topic labels লুকানো—exam-এর মতো।</p></div><div className="trainerRule"><small>THE RULE</small><strong>One lead model</strong><p>Supporting model কেবল তখন যোগ করো, যখন সেটি নতুন explanatory কাজ করে। Model dumping marks বাড়ায় না।</p></div></section>

    <section className="mixedQuiz">
      <div className="quizHeader"><div><span>MIXED CASE {step+1} / {order.length}</span><div className="quizTrack"><i style={{width:`${progress}%`}}/></div></div><strong>{score} correct</strong></div>
      <div className="quizBody"><div className="casePrompt"><small>SCENARIO — TOPIC HIDDEN</small><h2>{scenario.title}</h2><p>{scenario.prompt}</p><b>Which model should lead?</b></div><div className="modelChoices">{options.map(option=><button key={option} disabled={!!choice} className={choice?option===scenario.answer?"correct":option===choice?"wrong":"muted":""} onClick={()=>answer(option)}>{option}</button>)}</div></div>
      {choice&&<div className="quizFeedback"><div><span>{correct?"✓ CORRECT":"✕ NOT YET"}</span><h3>{scenario.answer}</h3><p>{scenario.reasoning}</p></div><div className="confidence"><b>Answer-এর আগে তুমি কতটা sure ছিলে?</b>{[["knew","Knew it"],["unsure","Unsure"],["guessed","Guessed"]].map(([v,l])=><button className={confidence===v?"active":""} key={v} onClick={()=>setConfidence(v)}>{l}</button>)}{weakSignal&&<small>এই case-টি 24 ঘণ্টা পরে আবার solve করো—এটি তোমার weak discrimination signal।</small>}</div></div>}
      <div className="quizActions"><button onClick={()=>restart(true)}>↻ Shuffle & restart</button>{choice&&!completed&&<button className="nextCase" onClick={next}>Next case →</button>}{completed&&<div><strong>Final score: {score}/{order.length}</strong><button onClick={()=>restart(true)}>New mixed round</button></div>}</div>
    </section>

    <section className="contrastSection"><div className="sectionIntro"><span>02 / Contrast practice</span><h2>Similar models-এর boundary শিখো.</h2><p>Exam clue দেখেই favourite model বসিও না। Model select করার সবচেয়ে ভালো shortcut হলো: “এই model কোন প্রশ্নের উত্তর দেয়—আর কোন প্রশ্নের দেয় না?”</p></div><div className="contrastTable"><div className="contrastHead"><b>Model</b><b>Question</b><b>Positive signal</b><b>Do not lead when…</b></div>{contrastRows.map(row=><div className="contrastRow" key={row[0]}>{row.map((cell,i)=>i===0?<strong key={cell}>{cell}</strong>:<span key={cell}>{cell}</span>)}</div>)}</div></section>

    <section className="answerStudio" id="answer-studio"><div className="studioIntro"><span>03 / Blank-page transfer</span><h2>Reveal ছাড়া answer বানাও.</h2><p>উপরের যেকোনো case বেছে notes না দেখে SMEAC লিখো। সুন্দর prose-এর আগে causal skeleton ঠিক করো। লেখা browser-এর বাইরে যায় না।</p></div><div className="studioGrid">{Object.entries(fields).map(([key,value])=><label key={key}><span>{key.toUpperCase()}</span><small>{key==="signal"?"Decisive fact":key==="model"?"Precise framework + why":key==="evidence"?"2–3 facts mapped to mechanism":key==="action"?"Specific recommendation":"Risk, assumption or limitation"}</small><textarea value={value} onChange={e=>setFields({...fields,[key]:e.target.value})}/></label>)}</div><div className="selfRubric"><div><small>SELF-MARKING RUBRIC</small><strong>{rubricScore}/5</strong><p>নিজের answer-এর বিরুদ্ধে honest check দাও।</p></div>{["আমি decisive case fact quote/paraphrase করেছি","Lead model-এর mechanism explain করেছি","কমপক্ষে 2টি evidence model-এর component-এ map করেছি","Action diagnosis থেকে logically follows","একটি real caveat/assumption দিয়েছি"].map((x,i)=><label key={x}><input type="checkbox" checked={rubric[i]} onChange={()=>setRubric(rubric.map((v,j)=>j===i?!v:v))}/><span>{x}</span></label>)}</div></section>

    <section className="trainerMethod"><b>How to use this lab</b><ol><li>Topic page দিয়ে worked example বুঝো।</li><li>পরের দিন mixed quiz-এ model discriminate করো।</li><li>ভুল/guessed case 24 ঘণ্টা পরে repeat করো।</li><li>শেষে blank-page SMEAC answer লিখে rubric দাও।</li></ol></section>
  </main>;
}
