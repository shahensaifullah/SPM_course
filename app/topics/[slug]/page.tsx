import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicLesson, topicLessons } from "../../topicLessons";
import { courseCoverage } from "../../courseCoverage";
import LessonLab from "./LessonLab";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return topicLessons.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getTopicLesson(slug);
  if (!lesson) return {};
  const title = `${lesson.title} — বিস্তারিত Bangla Lesson | SPM Field Guide`;
  const description = `${lesson.banglaTitle} ধাপে ধাপে শিখুন: problem, models, application, scenario analysis এবং exam-ready English terms.`;
  return {
    title,
    description,
    openGraph: { title, description, images: [] },
    twitter: { title, description, images: [] },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getTopicLesson(slug);
  if (!lesson) notFound();
  const currentIndex = topicLessons.findIndex((topic) => topic.slug === lesson.slug);
  const previous = currentIndex > 0 ? topicLessons[currentIndex - 1] : null;
  const coverage = courseCoverage[lesson.slug];

  return (
    <main className="lessonPage">
      <header className="lessonTopbar">
        <Link className="brand" href="/"><span>SPM</span> Field Guide</Link>
        <div className="lessonTopActions"><Link href="/#map">সব Topic</Link><Link href="/#decoder">Scenario Decoder</Link><a className="navCta" href="#exam-kit">Exam Kit</a></div>
      </header>

      <div className="lessonShell">
        <aside className="lessonSidebar">
          <div className="sidebarLabel">COURSE TOPICS</div>
          <nav aria-label="Course topics">
            {topicLessons.map((topic) => <Link key={topic.slug} className={topic.slug === lesson.slug ? "active" : ""} href={`/topics/${topic.slug}`}><span>{topic.number}</span><b>{topic.title}</b></Link>)}
          </nav>
          <div className="sidebarLabel modelLabel">ON THIS PAGE</div>
          <div className="modelLinks"><a href="#learning-lab"><span>✦</span>Learning lab</a>{lesson.models.map((model, index) => <a key={model.id} href={`#${model.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{model.term}</a>)}<a href="#daily-review"><span>↻</span>Daily review</a></div>
        </aside>

        <article className="lessonArticle">
          <section className={`lessonHero ${lesson.color}`}>
            <div className="lessonHeroMeta"><span>TOPIC {lesson.number} · DETAILED LESSON</span><span>বাংলায় ব্যাখ্যা · English exam terms</span></div>
            <h1>{lesson.title}</h1>
            <h2>{lesson.banglaTitle}</h2>
            <div className="coreQuestion"><small>CORE QUESTION</small><strong>{lesson.coreQuestion}</strong><p>{lesson.shortAnswer}</p></div>
          </section>

          <section className="lessonIntro">
            <div className="lessonSectionLabel"><span>00</span><b>Big picture</b></div>
            <div className="storyText">{lesson.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="goalsGrid">
              <div><h3>এই topic শেষে তুমি পারবে</h3><ul>{lesson.learningGoals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div>
              <div className="diagnosticCard"><h3>Scenario পড়ার সময় জিজ্ঞাসা করো</h3><ol>{lesson.diagnosticQuestions.map((question) => <li key={question}>{question}</li>)}</ol></div>
            </div>
          </section>

          <section className="sourceAlignment">
            <div><span>COURSE ALIGNMENT · VALIDATED</span><h2>Professor-এর page-এর সঙ্গে কী কী মিলিয়ে দেখা হয়েছে</h2><p>এই তালিকাটি lecture page-এর heading ও explanations-এর বিরুদ্ধে check করা। নতুন memory aids ও examples explanation-এর জন্য; exam terminology-তে course wording-কে priority দাও।</p></div>
            <ul>{coverage.sourceTopics.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
            <aside><b>BOUNDARY NOTE</b><p>{coverage.examBoundary}</p><a href={lesson.source} target="_blank" rel="noreferrer">Professor’s original page ↗</a></aside>
          </section>

          <LessonLab slug={lesson.slug} />

          {lesson.models.map((model, index) => <section className="modelLesson" id={model.id} key={model.id}>
            <div className="modelNumber">MODEL {String(index + 1).padStart(2, "0")}</div>
            <h2>{model.term}</h2>
            <h3>{model.banglaTitle}</h3>

            <div className="solvesBox"><span>WHICH ISSUE DOES IT SOLVE?</span><p>{model.solves}</p></div>

            <div className="modelExplainGrid">
              <div className="whyBlock"><div className="miniLabel">WHY DO I NEED IT?</div>{model.why.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="mechanismBlock"><div className="miniLabel">HOW THE MODEL WORKS</div>{model.mechanism.map((item) => <div className="mechanismRow" key={item.label}><strong>{item.label}</strong><p>{item.text}</p></div>)}</div>
            </div>

            <div className="applicationSteps">
              <div className="miniLabel">STEP-BY-STEP APPLICATION</div>
              <ol>{model.steps.map((step, stepIndex) => <li key={step}><span>{String(stepIndex + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            </div>

            <div className="workedCase">
              <div className="workedCaseHead"><span>WORKED SCENARIO</span><p>{model.scenario}</p></div>
              <div className="workedAnalysis"><b>Analysis</b><ul>{model.analysis.map((point) => <li key={point}>{point}</li>)}</ul></div>
              <div className="improvement"><b>HOW TO IMPROVE THE ISSUE</b><p>{model.improve}</p></div>
            </div>

            <div className="examKit" id={index === 0 ? "exam-kit" : undefined}>
              <div><span className="miniLabel">WRITE THESE TERMS IN THE EXAM</span><div className="termChips">{model.examTerms.map((term) => <code key={term}>{term}</code>)}</div></div>
              <div className="examSentence"><span className="miniLabel">EXAM-READY ENGLISH</span><blockquote>“{model.examAnswer}”</blockquote></div>
            </div>

            <div className="trapBox"><b>COMMON TRAPS</b><ul>{model.traps.map((trap) => <li key={trap}>{trap}</li>)}</ul></div>
          </section>)}

          <section className="selectionGuide">
            <div className="lessonSectionLabel"><span>↳</span><b>Which model when?</b></div>
            <h2>Scenario signal থেকে model select করো</h2>
            <div className="selectionTable"><div className="selectionHeader"><b>Situation</b><b>Lead model</b><b>Support model</b><b>Why</b></div>{lesson.synthesis.map((row) => <div className="selectionRow" key={row.situation}><strong>{row.situation}</strong><code>{row.lead}</code><span>{row.support}</span><p>{row.reason}</p></div>)}</div>
          </section>

          <section className="revisionPanel">
            <div><span>60-SECOND REVISION</span><h2>{lesson.title}</h2><p>Page বন্ধ করে প্রথমে নিজে বলো, তারপর list check করো।</p></div>
            <ul>{lesson.fastRevision.map((point) => <li key={point}>{point}</li>)}</ul>
          </section>

          <section className="topicPractice">
            <div className="lessonSectionLabel"><span>?</span><b>Exam practice</b></div>
            <h2>এবার নিজে apply করো</h2>
            <div className="practiceCase"><span>SCENARIO</span><p>{lesson.practice.case}</p><b>{lesson.practice.prompt}</b></div>
            <details><summary>Model answer দেখো</summary><p>{lesson.practice.answer}</p></details>
          </section>

          <section className="remainingIssue">
            <span>WHAT ISSUE REMAINS?</span><h2>{lesson.remainingIssue}</h2>
            {lesson.nextSlug ? <div className="nextTopicCard"><div><small>NEXT TOPIC</small><strong>{lesson.nextTitle}</strong><p>{lesson.nextReason}</p></div><Link href={`/topics/${lesson.nextSlug}`}>পরের lesson শুরু করো <b>→</b></Link></div> : <div className="loopComplete"><strong>Strategy loop complete</strong><p>OKR review থেকে পাওয়া evidence আবার Definition, Competition ও Resources-এ ফিরে যায়। অর্থাৎ Strategy একবারের project নয়; continuous learning loop।</p><Link href="/#map">পুরো course map-এ ফিরে যাও →</Link></div>}
          </section>

          <footer className="lessonFooter">
            <div>{previous && <Link href={`/topics/${previous.slug}`}>← {previous.title}</Link>}</div>
            <a href={lesson.source} target="_blank" rel="noreferrer">Professor’s source page ↗</a>
            <div>{lesson.nextSlug && <Link href={`/topics/${lesson.nextSlug}`}>{lesson.nextTitle} →</Link>}</div>
          </footer>
        </article>
      </div>
    </main>
  );
}
