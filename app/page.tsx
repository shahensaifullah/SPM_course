"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { decoder, formulas, scenarios, sources, topics } from "./studyData";

function Mark({ done }: { done: boolean }) {
  return <span className={done ? "mark done" : "mark"}>{done ? "✓" : ""}</span>;
}

export default function Home() {
  const [activeTopic, setActiveTopic] = useState("definition");
  const [openConcept, setOpenConcept] = useState<string | null>("Value Stick");
  const [decoderIndex, setDecoderIndex] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [answerShown, setAnswerShown] = useState(false);
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<string[]>([]);
  const [formulaQuery, setFormulaQuery] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setCompleted(JSON.parse(localStorage.getItem("spm-completed") || "[]")); } catch { /* local preference only */ }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function toggleComplete(id: string) {
    const next = completed.includes(id) ? completed.filter((x) => x !== id) : [...completed, id];
    setCompleted(next);
    localStorage.setItem("spm-completed", JSON.stringify(next));
  }

  const topic = topics.find((t) => t.id === activeTopic) || topics[0];
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return topics.flatMap((t) => t.concepts.map((c) => ({ topic: t, concept: c })))
      .filter(({ topic: t, concept: c }) => `${t.title} ${c.name} ${c.signal} ${c.use} ${c.example}`.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);
  const visibleFormulas = formulas.filter((f) => f.join(" ").toLowerCase().includes(formulaQuery.toLowerCase()));
  const progress = Math.round((completed.length / topics.length) * 100);

  function jumpToTopic(id: string, concept?: string) {
    setActiveTopic(id);
    setOpenConcept(concept || null);
    setQuery("");
    document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top"><span>SPM</span> Field Guide</a>
        <nav aria-label="Primary navigation">
          <a href="#map">Course map</a><a href="#learn">Learn</a><a href="#decoder">Decoder</a><Link href="/case-2">Meta Case</Link>
          <Link className="navCta" href="/trainer">Exam Trainer</Link>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> HNU · Strategic Performance Management</div>
        <h1>See the signal.<br /><em>Name the model.</em></h1>
        <p className="lede">An exam-first study system for turning business scenarios into the right strategic framework—and explaining why it fits.</p>
        <div className="heroActions"><a className="primaryBtn" href="#map">Follow the strategy flow <b>→</b></a><Link className="textLink" href="/trainer">Open mixed exam lab</Link></div>
        <div className="examFormula"><span>THE EXAM MOVE</span><strong>Signal → Model → Evidence → Action → Caveat</strong></div>
      </section>

      <section className="searchBand" aria-label="Search the study guide">
        <label htmlFor="global-search">Find a model, clue, or concept</label>
        <div className="searchWrap"><span>⌕</span><input id="global-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try ‘supplier power’, ‘silos’, ‘NPV’…" /></div>
        {query && <div className="searchResults">{searchResults.length ? searchResults.map(({ topic: t, concept }) => <button key={`${t.id}-${concept.name}`} onClick={() => jumpToTopic(t.id, concept.name)}><small>{t.title}</small><strong>{concept.name}</strong><span>{concept.signal}</span></button>) : <p>No direct match. Try a shorter clue.</p>}</div>}
      </section>

      <section className="mapSection" id="map">
        <div className="sectionIntro"><span>01 / The big picture</span><h2>Strategy is a loop,<br />not a list.</h2><p>Each lecture answers the question left open by the previous one. Follow the arrows to see the course logic.</p></div>
        <div className="flow">
          {topics.map((t, index) => <a className={`flowCard ${completed.includes(t.id) ? "complete" : ""}`} key={t.id} href={`/topics/${t.id}`}>
            <div className="flowTop"><span>{t.number}</span><i>{index < topics.length - 1 ? "→" : "↺"}</i></div><h3>{t.title}</h3><p>{t.subtitle}</p><Mark done={completed.includes(t.id)} />
          </a>)}
        </div>
        <div className="loopNarrative">
          <b>Value</b><span>→</span><b>Outside</b><span>→</span><b>Inside</b><span>→</span><b>Choice</b><span>→</span><b>Alignment</b><span>→</span><b>Responsibility</b><span>→</span><b>Measurement</b><span>→</span><b>Focus</b><span>↺ learn</span>
        </div>
      </section>

      <section className="learnSection" id="learn">
        <aside className="topicRail">
          <div className="railHead"><span>Your progress</span><strong>{progress}%</strong></div><div className="progressTrack"><i style={{ width: `${progress}%` }} /></div>
          {topics.map((t) => <button key={t.id} className={activeTopic === t.id ? "active" : ""} onClick={() => { setActiveTopic(t.id); setOpenConcept(null); }}><span>{t.number}</span><b>{t.title}</b><Mark done={completed.includes(t.id)} /></button>)}
        </aside>

        <div className="topicContent">
          <div className={`topicHero ${topic.color}`}>
            <div className="topicMeta"><span>CHAPTER {topic.number}</span><button onClick={() => toggleComplete(topic.id)}><Mark done={completed.includes(topic.id)} /> {completed.includes(topic.id) ? "Reviewed" : "Mark reviewed"}</button></div>
            <h2>{topic.title}</h2><p className="topicSubtitle">{topic.subtitle}</p>
            <div className="chapterQuestion"><small>THE QUESTION THIS TOPIC ANSWERS</small><strong>{topic.question}</strong><div><p>{topic.answer}</p><a className="fullLessonLink" href={`/topics/${topic.id}`}>বাংলায় বিস্তারিত lesson খুলুন →</a></div></div>
          </div>

          <div className="examCue"><span>WHEN TO USE THIS CHAPTER</span><p>{topic.examLine}</p></div>

          <div className="concepts">
            {topic.concepts.map((c, i) => {
              const open = openConcept === c.name;
              return <article className={`concept ${open ? "open" : ""}`} key={c.name}>
                <button className="conceptHead" onClick={() => setOpenConcept(open ? null : c.name)} aria-expanded={open}>
                  <span>{String(i + 1).padStart(2, "0")}</span><div><h3>{c.name}</h3><p>{c.memory}</p></div><i>{open ? "−" : "+"}</i>
                </button>
                {open && <div className="conceptBody">
                  <div className="signalBox"><small>SCENARIO SIGNAL</small><p>{c.signal}</p></div>
                  <div className="conceptGrid"><div><small>HOW TO APPLY IT</small><p>{c.use}</p>{c.steps && <ol>{c.steps.map((step) => <li key={step}>{step}</li>)}</ol>}</div><div><small>EXAMPLE</small><p>{c.example}</p><div className="caution"><b>Watch out</b><span>{c.caution}</span></div></div></div>
                </div>}
              </article>;
            })}
          </div>

          <div className="rapidNote"><div><span>60-SECOND NOTE</span><h3>{topic.title}</h3></div><ul>{topic.rapid.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="bridge"><span>NEXT QUESTION →</span><p>{topic.bridge}</p><button onClick={() => { const next = topics[(topics.findIndex((t) => t.id === topic.id) + 1) % topics.length]; setActiveTopic(next.id); setOpenConcept(null); document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" }); }}>Continue the loop</button></div>
        </div>
      </section>

      <section className="decoderSection" id="decoder">
        <div className="sectionIntro inverse"><span>02 / Exam decoder</span><h2>Start with the clue,<br />not your favorite model.</h2><p>Choose the dominant issue. Then combine one primary model with a supporting model only when it adds explanatory power.</p></div>
        <div className="decoderLayout">
          <div className="decoderMenu">{decoder.map((d, i) => <button className={i === decoderIndex ? "active" : ""} key={d.label} onClick={() => setDecoderIndex(i)}><span>{String(i + 1).padStart(2, "0")}</span>{d.label}</button>)}</div>
          <div className="decoderAnswer">
            <span className="kicker">SIGNALS IN THE CASE</span><p className="clueWords">{decoder[decoderIndex].clues}</p>
            <div className="modelStamp"><small>LEAD WITH</small><strong>{decoder[decoderIndex].primary}</strong></div>
            <div className="supportLine"><small>SUPPORT WITH</small><b>{decoder[decoderIndex].support}</b></div>
            <p className="why">{decoder[decoderIndex].why}</p>
            <blockquote>“The key signal is <u>___</u>. Therefore I would apply <u>{decoder[decoderIndex].primary}</u>, because it explains <u>___</u>. The evidence suggests <u>___</u>, so management should <u>___</u>. A limitation is <u>___</u>.”</blockquote>
          </div>
        </div>
      </section>

      <section className="practiceSection" id="practice">
        <div className="sectionIntro"><span>03 / Retrieval practice</span><h2>Practice the move.</h2><p>Say your answer aloud before revealing it. Naming a model earns little; linking case evidence to its mechanism earns marks.</p></div>
        <div className="scenarioCard">
          <div className="scenarioTop"><span>CASE {String(scenarioIndex + 1).padStart(2, "0")} / {scenarios.length}</span><div><button disabled={scenarioIndex === 0} onClick={() => { setScenarioIndex(scenarioIndex - 1); setAnswerShown(false); }}>←</button><button disabled={scenarioIndex === scenarios.length - 1} onClick={() => { setScenarioIndex(scenarioIndex + 1); setAnswerShown(false); }}>→</button></div></div>
          <h3>{scenarios[scenarioIndex].title}</h3><p className="scenarioPrompt">{scenarios[scenarioIndex].prompt}</p>
          {!answerShown ? <button className="revealBtn" onClick={() => setAnswerShown(true)}>Reveal model + reasoning</button> : <div className="scenarioSolution"><small>BEST LEAD MODEL</small><strong>{scenarios[scenarioIndex].answer}</strong><p>{scenarios[scenarioIndex].reasoning}</p><button onClick={() => setAnswerShown(false)}>Hide answer</button></div>}
        </div>
        <div className="answerMethod"><div><b>S</b><span><strong>Signal</strong>Quote the decisive fact</span></div><div><b>M</b><span><strong>Model</strong>Name it precisely</span></div><div><b>E</b><span><strong>Evidence</strong>Map 2–3 case facts</span></div><div><b>A</b><span><strong>Action</strong>Recommend a move</span></div><div><b>C</b><span><strong>Caveat</strong>State risk or limit</span></div></div>
      </section>

      <section className="formulaSection" id="formulas">
        <div className="sectionIntro inverse"><span>04 / CPM formula desk</span><h2>Know what the number<br />is trying to tell you.</h2><p>In the exam: write the formula, substitute consistently, calculate, interpret direction, and add one limitation.</p></div>
        <input className="formulaSearch" value={formulaQuery} onChange={(e) => setFormulaQuery(e.target.value)} placeholder="Filter ratios and formulas…" aria-label="Filter formulas" />
        <div className="formulaTable">{visibleFormulas.map(([name, formula, meaning]) => <div className="formulaRow" key={name}><strong>{name}</strong><code>{formula}</code><span>{meaning}</span></div>)}</div>
        <div className="npvNote"><b>NPV exam sentence</b><p>“At the stated discount rate, NPV is [positive/negative], so the project [adds/destroys] financial value relative to an equally risky alternative. This conclusion depends on the cash-flow, horizon, and discount-rate assumptions; strategic option value should be assessed separately.”</p></div>
      </section>

      <section className="caseSection" id="meta-case">
        <div className="caseLabel">META CASE · CPM APPLICATION</div><h2>Four tasks. Four analytical lenses.</h2>
        <div className="caseGrid">
          <article><span>01</span><h3>Acquisition ROI</h3><b>NPV + assumptions</b><p>Pick Instagram or WhatsApp. State acquisition price, estimate attributable cash flows transparently, discount them, include indirect ecosystem value, and distinguish disclosed from estimated data.</p></article>
          <article><span>02</span><h3>AI / AGI investment</h3><b>Leading + lagging evidence</b><p>Trend capex and R&D, then connect spend to user, ad-ranking, engagement, product, and capability outcomes. Separate current cost from future positioning.</p></article>
          <article><span>03</span><h3>Reality Labs break-even</h3><b>Scenario + sensitivity</b><p>Use segment revenue and operating loss to model the revenue growth or cost reduction required. Ask whether break-even is the right moonshot criterion and stage-gate uncertainty.</p></article>
          <article><span>04</span><h3>Balanced Scorecard</h3><b>Finance · Customer · Process · Learning</b><p>Build causal logic, not a KPI pile: R&D/talent → better ranking/infrastructure → engagement/monetization → financial results. Identify weak perspectives and resource implications.</p></article>
        </div>
        <div className="caseWarnings"><span>!</span><div><b>Three traps from the preparation guide</b><p>ARPP is Family revenue per unique daily person—not per-app ARPU. Do not mix quarterly and annual figures without annualizing. Label third-party estimates and every assumption.</p></div></div>
      </section>

      <section className="planSection" id="plan">
        <div className="sectionIntro"><span>05 / Final preparation</span><h2>A five-pass exam plan.</h2><p>Use active recall. Re-reading creates familiarity; scenarios create retrieval strength.</p></div>
        <div className="planGrid">
          {[ ["Pass 1", "Build the map", "Explain the eight-topic loop from memory. If you cannot explain why one topic leads to the next, return to the course map."], ["Pass 2", "Trigger words", "Use the decoder. Cover the model column and identify it from the clues. Add one supporting model only when useful."], ["Pass 3", "Model mechanics", "For every framework, say its components, causal mechanism, best use, and one limitation—without notes."], ["Pass 4", "Timed scenarios", "Answer each case with SMEAC: Signal, Model, Evidence, Action, Caveat. Aim for 4–6 structured sentences first."], ["Pass 5", "Numbers + integration", "Practice NPV, ratios, and Meta tasks. Combine financial evidence with customer, process, learning, resource, and ethical evidence."] ].map((p) => <article key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}
        </div>
        <div className="nightBefore"><div><span>THE NIGHT-BEFORE CARD</span><h3>8 questions to remember</h3></div><ol><li>What value is created?</li><li>What changed outside?</li><li>What is special inside?</li><li>What is the pivotal challenge and choice?</li><li>What must align?</li><li>Who could be harmed?</li><li>How will we measure and learn?</li><li>What must happen this quarter?</li></ol></div>
      </section>

      <footer>
        <div><a className="brand" href="#top"><span>SPM</span> Field Guide</a><p>Independent study companion based on the linked HNU SPM 26WT lecture pages. Always prioritize your professor’s wording and updates.</p></div>
        <div className="sourceLinks"><b>Lecture sources</b>{sources.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={label}>{label} ↗</a>)}<b>Learning design research</b><a href="https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/" target="_blank" rel="noreferrer">Retrieval practice · Roediger &amp; Karpicke ↗</a><a href="https://onlinelibrary.wiley.com/doi/10.1207/s15516709cog1302_1" target="_blank" rel="noreferrer">Self-explanation · Chi et al. ↗</a><a href="https://www.tandfonline.com/doi/abs/10.1207/s1532690xci0201_3" target="_blank" rel="noreferrer">Worked examples · Sweller &amp; Cooper ↗</a></div>
        <a className="backTop" href="#top">↑ Back to top</a>
      </footer>
    </main>
  );
}
