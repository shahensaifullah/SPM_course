export type LessonModel = {
  id: string;
  term: string;
  banglaTitle: string;
  solves: string;
  why: string[];
  mechanism: { label: string; text: string }[];
  steps: string[];
  scenario: string;
  analysis: string[];
  improve: string;
  examTerms: string[];
  examAnswer: string;
  traps: string[];
};

export type TopicLesson = {
  slug: string;
  number: string;
  title: string;
  banglaTitle: string;
  color: string;
  coreQuestion: string;
  shortAnswer: string;
  story: string[];
  learningGoals: string[];
  diagnosticQuestions: string[];
  models: LessonModel[];
  synthesis: { situation: string; lead: string; support: string; reason: string }[];
  fastRevision: string[];
  practice: { case: string; prompt: string; answer: string };
  remainingIssue: string;
  nextSlug: string | null;
  nextTitle: string | null;
  nextReason: string | null;
  source: string;
};

export const topicLessons: TopicLesson[] = [
  {
    slug: "definition", number: "01", title: "Definition", banglaTitle: "Strategy আসলে কী?", color: "lime",
    coreQuestion: "একটি organization কীভাবে value তৈরি করবে, সেই value-র কতটা capture করবে, এবং কোন choices অন্য choices-কে reinforce করবে?",
    shortAnswer: "Strategy কোনো slogan, target বা আলাদা project-এর তালিকা নয়। Strategy হলো value creation-এর জন্য একটি coherent set of choices—কাকে serve করব, কীভাবে আলাদা হব, কী করব এবং ইচ্ছাকৃতভাবে কী করব না।",
    story: [
      "ধরো একটি airline বলে: ‘আমরা customer experience-এ সেরা হব, আবার বাজারের সবচেয়ে কম দামও দেব।’ শুনতে ভালো, কিন্তু দুটো promise-এর জন্য ভিন্ন activity system লাগে। Premium service-এর জন্য lounge, বেশি staff ও flexibility দরকার; low cost-এর জন্য standardization ও কম complexity দরকার। এখানেই Strategy দরকার—কারণ সব ভালো জিনিস একসাথে করা যায় না।",
      "এই topic তোমাকে তিনটি confusion দূর করতে শেখায়: goal আর strategy এক নয়; profit আর value এক নয়; planned intention আর actual behavior-ও এক নয়। Exam scenario-তে প্রথম কাজ হলো scenario-টি কোন level-এর কথা বলছে তা বোঝা।"
    ],
    learningGoals: ["Value creation ও value capture আলাদা করা", "Mintzberg’s 5 Ps দিয়ে strategy-র বিভিন্ন রূপ চেনা", "Strategic Management Process-এর phase বোঝা", "Strategy, Tactics ও Operational Effectiveness আলাদা করা", "Competitive Advantage-এর logic ব্যাখ্যা করা"],
    diagnosticQuestions: ["Customer কেন বেশি pay করবে?", "Employee বা supplier কেন এই firm-এর সাথে কাজ করবে?", "এটি long-term choice, নাকি short-term action?", "Company যা বলছে এবং বারবার যা করছে—দুটো কি এক?", "Competitor সহজে copy করতে পারবে কি?"],
    models: [
      {
        id: "value-stick", term: "Value Stick", banglaTitle: "চারটি point দিয়ে value কোথায় তৈরি হচ্ছে দেখো",
        solves: "Scenario-তে customer, firm, employee এবং supplier—সবার benefit একসাথে বিশ্লেষণ করতে হলে এই model ব্যবহার করো। এটি profit-এর বাইরে total value দেখায়।",
        why: ["অনেক manager মনে করে price বাড়ালেই value তৈরি হয়। আসলে price বাড়ানো value capture করতে পারে, কিন্তু customer-এর জন্য নতুন benefit তৈরি নাও করতে পারে।", "Sustainable strategy তখনই শক্তিশালী হয় যখন customer, employee/supplier এবং firm—একাধিক stakeholder লাভ পায়; ফলে সম্পর্ক ভেঙে না গিয়ে দীর্ঘমেয়াদি advantage তৈরি হয়।"],
        mechanism: [
          { label: "Willingness to Pay (WTP)", text: "Customer সর্বোচ্চ কত দিতে রাজি। Quality, convenience, trust, brand, network effect বা sustainability WTP বাড়াতে পারে।" },
          { label: "Price", text: "Customer বাস্তবে যা দেয়। Customer Delight = WTP − Price." },
          { label: "Cost", text: "Firm-এর product/service deliver করার অর্থনৈতিক খরচ। Firm Margin = Price − Cost." },
          { label: "Willingness to Sell (WTS)", text: "Employee বা supplier কাজ/সম্পদ দিতে অন্তত কত compensation চায়। Supplier/Employee Surplus = Cost − WTS." },
          { label: "Total Value", text: "WTP − WTS. Price ও Cost value-টি stakeholder-দের মধ্যে ভাগ করে; WTP বাড়ানো বা WTS কমানো total value বাড়ায়।" }
        ],
        steps: ["Stakeholder নির্ধারণ করো: customer, firm, employee/supplier কারা?", "WTP বাড়ায় এমন concrete driver বের করো—speed, trust, quality, ecosystem ইত্যাদি।", "Price ও Cost-এর প্রভাব আলাদা করো; শুধু revenue দেখে থেমো না।", "Job quality, purpose, flexibility বা stable relationship WTS কমাতে পারে কি না দেখো।", "শেষে বলো: নতুন value কত তৈরি হলো, firm কত capture করল, এবং কার ক্ষতি হতে পারে।"],
        scenario: "একটি outdoor brand recycled material ব্যবহার করে, product repair করে এবং environmental mission-এ profit invest করে। দাম competitor-এর চেয়ে বেশি।",
        analysis: ["Credible sustainability ও durability customer WTP বাড়াতে পারে।", "Purpose-driven culture employee WTS কমাতে পারে—একই salary-তে job বেশি attractive হয়।", "Recycled input শুরুতে Cost বাড়াতে পারে, কিন্তু loyalty ও repair-based differentiation price premium support করে।", "Firm বেশি margin capture করলেও total value বাড়ছে কি না stakeholder evidence দিয়ে দেখাতে হবে।"],
        improve: "Issue যদি low customer loyalty হয়, WTP driver উন্নত করো। যদি talent retention খারাপ হয়, employee experience দিয়ে WTS কমাও। যদি margin কম হয়, value destroy না করে process innovation দিয়ে Cost কমাও।",
        examTerms: ["Willingness to Pay", "Willingness to Sell", "Customer Delight", "Supplier/Employee Surplus", "Value Creation", "Value Capture"],
        examAnswer: "The Value Stick shows that the firm creates value by increasing customers’ willingness to pay and/or reducing employees’ and suppliers’ willingness to sell. Price and cost determine how this value is captured and distributed among stakeholders.",
        traps: ["Price increase-কে value creation বলা", "Profit-কে total value বলা", "Employee ও supplier side বাদ দেওয়া", "CSR activity দেখেই WTP বাড়বে ধরে নেওয়া—credibility evidence দরকার"]
      },
      {
        id: "five-ps", term: "Mintzberg’s 5 Ps", banglaTitle: "Strategy-কে পাঁচটি lens দিয়ে দেখো",
        solves: "Company-র formal plan, competitive move, repeated behavior, market position ও culture একে অপরের সাথে মিলছে কি না বোঝায়।",
        why: ["Real organization-এ strategy শুধু annual plan নয়। অনেক strategy action-এর pattern থেকে পরে বোঝা যায়।", "একটি Perspective ভুল হলে excellent plan-ও ভুল direction-এ যেতে পারে; Kodak-এর film-centered worldview তার digital response আটকে দিয়েছিল।"],
        mechanism: [
          { label: "Plan", text: "আগে থেকে consciously intended course of action." },
          { label: "Ploy", text: "Competitor-কে outmaneuver করার নির্দিষ্ট maneuver." },
          { label: "Pattern", text: "সময় ধরে observed consistency in behavior—intended হোক বা না হোক।" },
          { label: "Position", text: "Market বা industry-তে firm কোথায় দাঁড়াচ্ছে এবং কার তুলনায় কীভাবে আলাদা।" },
          { label: "Perspective", text: "Shared worldview, culture বা ‘আমরা business-টিকে কীভাবে দেখি’।" }
        ],
        steps: ["Case-এর explicit intention খুঁজে Plan চিহ্নিত করো।", "Repeated decisions দেখে Pattern বের করো।", "Customer/competitor-এর তুলনায় Position বলো।", "Culture বা deep belief থেকে Perspective infer করো।", "যদি short competitive maneuver থাকে, Ploy বলো; শেষে Ps-এর relationship ব্যাখ্যা করো।"],
        scenario: "Netflix data দিয়ে content select করে, personalized recommendations দেয় এবং পরে original content তৈরি শুরু করে।",
        analysis: ["Repeated data-based decisions হলো Pattern।", "সফল Pattern থেকে data-driven Perspective শক্ত হয়েছে।", "Original content investment formal Plan হয়েছে।", "Personalized entertainment তার Position reinforce করেছে।"],
        improve: "যদি stated plan ও actual action mismatch করে, realized Pattern audit করো। Perspective rigidity থাকলে leadership narrative ও incentives বদলাও; Position অস্পষ্ট হলে clear trade-off নির্ধারণ করো।",
        examTerms: ["Intended Strategy", "Realized Pattern", "Strategic Position", "Organizational Perspective", "Competitive Ploy"],
        examAnswer: "The scenario is best understood as strategy as a Pattern because the firm repeatedly behaves in a consistent way. Over time, this pattern shapes its Perspective and supports a distinct market Position.",
        traps: ["প্রতিটি case-এ পাঁচটি P জোর করে বসানো", "একবারের action-কে Pattern বলা", "Ploy ও long-term Position গুলিয়ে ফেলা"]
      },
      {
        id: "schools", term: "Schools of Strategy", banglaTitle: "Strategy কীভাবে তৈরি হয়—একটি answer নয়, দশটি perspective",
        solves: "Formal analysis, founder vision, organizational learning, politics, culture এবং environmental pressure—কোন process strategy-কে চালাচ্ছে তা বোঝায়।",
        why: ["একটি stable industry-তে formal Planning কাজে লাগতে পারে; turbulent market-এ Learning বেশি দরকার।", "একটি school-কে absolute truth ভাবলে dysfunction হয়: Planning ritual হয়ে যায়, Learning drift হয়, Power politics হয়ে যায়।"],
        mechanism: [
          { label: "Prescriptive Schools", text: "Design = internal/external fit; Planning = formal programmed process; Positioning = analytical market choice." },
          { label: "Descriptive Schools", text: "Entrepreneurial = vision; Cognitive = mental process; Learning = emergence; Power = negotiation; Cultural = shared beliefs; Environmental = reaction; Configuration = transformation." }
        ],
        steps: ["Scenario-তে strategy formation-এর dominant actor/process চিহ্নিত করো।", "Stable না uncertain context বলো।", "Relevant school select করে mechanism explain করো।", "School-এর benefit ও extreme-risk বলো।", "প্রয়োজনে complementary school দাও—যেমন Positioning + Learning।"],
        scenario: "একটি startup founder-এর vision দিয়ে শুরু করে, কিন্তু user experiments থেকে business model বদলায়। Investor ও product team-এর negotiation-ও decision প্রভাবিত করে।",
        analysis: ["Founder vision = Entrepreneurial School।", "Experiments থেকে adaptation = Learning School।", "Investor/team negotiation = Power School।", "একটি combined explanation single-school answer-এর চেয়ে শক্তিশালী।"],
        improve: "অতিরিক্ত formalization হলে Learning mechanisms যোগ করো; strategic drift হলে Design/Positioning দিয়ে direction দাও; politics বেশি হলে transparent criteria ও shared goals তৈরি করো।",
        examTerms: ["Prescriptive", "Descriptive", "Design School", "Planning School", "Positioning School", "Learning School", "Power School", "Configuration School"],
        examAnswer: "The case combines the Entrepreneurial and Learning Schools. Leadership provides an overarching vision, while the realized strategy emerges through experimentation and organizational learning.",
        traps: ["School-এর নাম লিখে process না বোঝানো", "Planning School-কে Strategic Management-এর পুরো process ভাবা", "একটি school নির্বাচন করলেই অন্য influence অস্বীকার করা"]
      },
      {
        id: "management-cycle", term: "Strategic Management Process", banglaTitle: "Choice থেকে execution এবং learning-এর loop",
        solves: "Problem-টি strategy choose করা, implement করা, নাকি evaluate করার—এই level distinction দেয়।",
        why: ["ভালো idea execution ছাড়া value তৈরি করে না। আবার measurement ছাড়া বোঝা যায় না strategy কাজ করছে কি না।", "Feedback loop থাকার কারণে evaluation শুধু শেষ ধাপ নয়; এটি formulation ও implementation দুটোই বদলায়।"],
        mechanism: [
          { label: "Formulation", text: "What and why: direction, objectives, strategic choices ও resource priorities." },
          { label: "Implementation", text: "How: structure, people, processes, systems, budget ও day-to-day activity." },
          { label: "Evaluation", text: "KPI, results, assumptions ও environmental change review; তারপর adjustment." }
        ],
        steps: ["Case-এর current phase identify করো।", "Phase-specific failure বলো: wrong choice, weak execution, নাকি poor feedback?", "Responsible organizational level ও required information চিহ্নিত করো।", "Feedback কীভাবে previous phase বদলাবে তা বলো।"],
        scenario: "Company subscription strategy নিয়েছে, কিন্তু churn KPI নেই এবং customer-support team bonus শুধু ticket volume-এর উপর পায়।",
        analysis: ["Formulation আছে, কিন্তু implementation ও evaluation misaligned।", "Support incentive strategy support করছে না।", "Retention/churn feedback না থাকায় management শিখতে পারছে না।"],
        improve: "Strategy-aligned systems, owner, resources ও measures দাও; evaluation result দিয়ে policy বা execution revise করো।",
        examTerms: ["Strategy Formulation", "Strategy Implementation", "Strategy Evaluation", "Feedback Loop", "Cross-functional Decisions"],
        examAnswer: "The problem is primarily an implementation and evaluation gap. The chosen strategy is not translated into aligned incentives and performance measures, so feedback cannot inform corrective action.",
        traps: ["Process-কে one-way waterfall বলা", "Formulation শুধু top management আর evaluation শুধু finance-এর কাজ বলা", "Action list-কে strategy বলা"]
      },
      {
        id: "strategy-tactics-oe", term: "Strategy vs. Tactics vs. Operational Effectiveness", banglaTitle: "Level ভুল করলে model ভুল হবে",
        solves: "Short-term move, process improvement এবং durable strategic choice আলাদা করে।",
        why: ["Competitor সাধারণত best practice copy করতে পারে; তাই Operational Effectiveness দরকার হলেও এটি একা Sustainable Competitive Advantage দেয় না।", "Strategy একটি distinctive activity system তৈরি করে; Tactics সেই direction-এর সীমিত action।"],
        mechanism: [
          { label: "Strategy", text: "Long-term, coherent, high-level direction এবং trade-offs." },
          { label: "Tactics", text: "Immediate challenge/opportunity মোকাবিলার specific short-term action." },
          { label: "Operational Effectiveness (OE)", text: "Rival-এর মতো activity আরও ভালো, দ্রুত বা কম waste-এ করা." },
          { label: "Competitive Advantage", text: "Superior stakeholder value বা distinct capability-এর কারণে stronger position ও performance." }
        ],
        steps: ["Time horizon দেখো।", "Action concrete নাকি organizational direction তা দেখো।", "Competitor সহজে copy করতে পারে কি না জিজ্ঞাসা করো।", "Activity system আলাদা কি না দেখো।", "Strategy হলে supporting tactics ও OE আলাদা করে লিখো।"],
        scenario: "একটি retailer faster checkout চালু করেছে, এক মাস discount দিয়েছে এবং একই সঙ্গে small-city convenience format-এ permanently focus করছে।",
        analysis: ["Faster checkout = OE।", "One-month discount = Tactic।", "Small-city convenience format ও related activity choices = Strategy/Position।"],
        improve: "OE দিয়ে current system efficient করো, কিন্তু durable advantage-এর জন্য distinctive position ও mutually reinforcing activities তৈরি করো।",
        examTerms: ["Operational Effectiveness", "Strategic Positioning", "Competitive Convergence", "Trade-off", "Sustainable Competitive Advantage"],
        examAnswer: "The efficiency initiative represents Operational Effectiveness rather than strategy. A sustainable strategic position requires a distinct set of activities and explicit trade-offs that competitors cannot easily replicate.",
        traps: ["Technology adoption-কে automatic strategy বলা", "Short-term promotion-কে market position বলা", "OE অপ্রয়োজনীয় বলা—এটি essential, শুধু insufficient"]
      }
    ],
    synthesis: [
      { situation: "Customer/employee/supplier value", lead: "Value Stick", support: "CSR / VRIO", reason: "কার জন্য কত value তৈরি ও capture হচ্ছে দেখায়।" },
      { situation: "Company বলে এক, করে আরেক", lead: "Mintzberg’s 5 Ps", support: "Deliberate–Emergent", reason: "Plan ও realized Pattern-এর gap দেখায়।" },
      { situation: "Efficiency project-কে strategy বলা হচ্ছে", lead: "Strategy vs OE", support: "Generic Strategies", reason: "Process improvement ও positioning আলাদা করে।" }
    ],
    fastRevision: ["Strategy = coherent choices for value creation", "Total Value = WTP − WTS", "Profit = firm-এর captured value", "5 Ps = Plan, Ploy, Pattern, Position, Perspective", "Strategic Management = Formulation → Implementation → Evaluation → Feedback", "OE necessary but not sufficient", "Goal ≠ Strategy; Tactic ≠ Strategy"],
    practice: { case: "একটি university বলে ‘আমরা সবার জন্য premium education সবচেয়ে কম খরচে দেব’। একই সঙ্গে ছোট class, personal coaching, expensive labs এবং lowest tuition promise করে।", prompt: "কোন concept দিয়ে contradiction ধরবে এবং কী recommendation দেবে?", answer: "প্রথমে Strategy vs Operational Effectiveness ও Trade-offs ব্যবহার করো। Promise-গুলো incompatible activity systems তৈরি করছে। Value Stick দিয়ে দেখাও কোন features WTP বাড়ায় এবং কোনগুলো Cost বাড়ায়। University-কে target segment ও value proposition বেছে coherent activities তৈরি করতে হবে।" },
    remainingIssue: "এখন আমরা জানি Strategy কী এবং value কোথায় তৈরি হয়। কিন্তু firm vacuum-এ operate করে না। Competitor, regulation, technology, supplier ও customer power strategic choice-কে সীমাবদ্ধ করে।",
    nextSlug: "competition", nextTitle: "Competition", nextReason: "External Audit, PESTEL ও Five Forces দিয়ে outside pressure বুঝে তারপর Position নির্বাচন করতে হবে।",
    source: "https://awe-hnu.de/lectures/SPM/26WT/definition/"
  },
  {
    slug: "competition", number: "02", title: "Competition", banglaTitle: "বাইরের দুনিয়া পড়ে কোথায় compete করবে?", color: "orange",
    coreQuestion: "কোন external force industry-র profit potential বদলাচ্ছে, এবং firm কোন position বা growth path বেছে নেবে?",
    shortAnswer: "প্রথমে environment-কে facts হিসেবে বিশ্লেষণ করো; তারপর industry pressure বোঝো; এরপর clear position, growth choice ও trade-off নির্ধারণ করো।",
    story: ["একটি solar-energy company-র নিজের technology ভালো হতে পারে, কিন্তু subsidy কমে গেলে, interest rate বাড়লে এবং cheap imports এলে profit কমে যেতে পারে। এগুলো internal weakness নয়; external forces।", "এই topic-এর flow হলো: PESTEL দিয়ে macro signal → Five Forces দিয়ে industry effect → positioning frameworks দিয়ে response। Analysis আর strategy যেন গুলিয়ে না যায়: ‘AI adoption বাড়ছে’ একটি external fact; ‘AI product launch করব’ একটি strategic response।"],
    learningGoals: ["External opportunity ও threat নির্ভুলভাবে লেখা", "PESTEL থেকে Five Forces-এ causal link করা", "Generic Strategy দিয়ে position বেছে নেওয়া", "Ansoff দিয়ে growth risk classify করা", "Blue Ocean দিয়ে noncustomer demand তৈরি করা", "Trade-off ও decision reversibility বোঝা"],
    diagnosticQuestions: ["Change-টি firm-এর control-এর বাইরে কি?", "কার bargaining power বাড়ছে?", "Substitute price ceiling তৈরি করছে কি?", "Firm cost না uniqueness—কোন advantage pursue করছে?", "Product ও market existing না new?", "Decision reversible কি?"],
    models: [
      {
        id: "pestel", term: "External Audit & PESTEL", banglaTitle: "Macro noise-কে strategic signal-এ রূপান্তর",
        solves: "Regulation, economy, demographic shift, technology বা climate change-এর মধ্যে কোনগুলো firm-এর জন্য actionable Opportunity বা Threat তা বাছাই করে।",
        why: ["সব external information গুরুত্বপূর্ণ নয়। Strategic factor হতে হলে specific, quantified এবং actionable হতে হবে।", "একটি factor একই সঙ্গে Opportunity এবং Threat হতে পারে; firm-এর resources ও position-এর উপর effect বদলায়।"],
        mechanism: [
          { label: "Political", text: "Government stability, subsidy, trade policy, public priorities." },
          { label: "Economic", text: "Interest, inflation, income, GDP, exchange rate, credit." },
          { label: "Social", text: "Demography, lifestyle, education, values, health, media behavior." },
          { label: "Technological", text: "Innovation rate, AI, automation, infrastructure, patents." },
          { label: "Environmental", text: "Climate, energy, waste, resource scarcity, green expectations." },
          { label: "Legal", text: "Competition, labor, privacy, safety, consumer and IP law." }
        ],
        steps: ["Industry ও time horizon define করো।", "প্রতিটি relevant factor fact/trend হিসেবে লেখো—strategy হিসেবে নয়।", "সম্ভব হলে number, direction ও date দাও।", "Opportunity, Threat বা both classify করো।", "Factor কোন Five Force বা demand driver বদলায় explain করো।", "Action implication শেষে দাও।"],
        scenario: "EU data law কঠোর হচ্ছে, cloud energy price বাড়ছে, এবং customers privacy-conscious হচ্ছে।",
        analysis: ["Legal: compliance ও liability বাড়ছে।", "Economic/Environmental: infrastructure cost ও carbon pressure বাড়ছে।", "Social: privacy-friendly provider-এর WTP বাড়তে পারে।", "Strong governance থাকা firm threat-কে differentiation opportunity বানাতে পারে।"],
        improve: "Scenario monitoring, quantified trigger এবং response options বানাও; vague risk list নয়।",
        examTerms: ["External Audit", "Opportunity", "Threat", "Actionable External Factor", "Environmental Scanning", "PESTEL"],
        examAnswer: "The regulatory change is a Legal external factor. It raises compliance costs and entry barriers, but it may also create an opportunity for firms that can credibly differentiate through privacy and trust.",
        traps: ["‘Expand internationally’ PESTEL-এ লেখা", "Specific evidence ছাড়া ‘economic uncertainty’ বলা", "Factor-এর firm/industry effect না বোঝানো"]
      },
      {
        id: "five-forces", term: "Porter’s Five Forces", banglaTitle: "Industry-তে profit কে কে চাপ দিয়ে কমাচ্ছে?",
        solves: "Industry attractive কি না এবং profit pool কোন actor capture করছে তা বোঝায়।",
        why: ["Competition শুধু direct rival নয়। Powerful buyer price কমায়, supplier cost বাড়ায়, substitute price ceiling দেয়, entrant capacity আনে।", "PESTEL একটি change দেখায়; Five Forces change-টির industry economics দেখায়।"],
        mechanism: [
          { label: "Threat of Entry", text: "Entry barrier কম হলে new capacity ও price pressure বাড়ে। Barrier: scale, differentiation, capital, cost advantage, distribution, policy." },
          { label: "Supplier Power", text: "Few suppliers, unique input, switching cost বা forward integration threat থাকলে শক্তিশালী।" },
          { label: "Buyer Power", text: "Concentrated buyers, standardized product, high purchase share বা backward integration threat থাকলে শক্তিশালী।" },
          { label: "Threat of Substitutes", text: "Different solution একই need meet করে; attractive price-performance industry price limit করে।" },
          { label: "Rivalry", text: "Many equal rivals, slow growth, fixed cost, low differentiation ও high exit barrier rivalry বাড়ায়।" }
        ],
        steps: ["Industry boundary স্পষ্ট করো—product, geography, customer।", "প্রতিটি force Strong/Moderate/Weak বলে mechanism ও evidence দাও।", "সবচেয়ে decisive force identify করো।", "Collective effect থেকে profit potential judge করো।", "Defend, influence বা reposition করার response দাও।"],
        scenario: "Generative AI market-এ chip/cloud suppliers অল্প, open-source models দ্রুত উন্নত হচ্ছে, customers multi-home করে এবং বড় players price subsidize করে।",
        analysis: ["Supplier Power strong: scarce compute concentrated।", "Substitute threat strong: open-source option।", "Buyer Power বাড়ে: switching/multi-homing সহজ।", "Rivalry high: well-funded players ও fast innovation।", "Industry growth high হলেও value capture কঠিন হতে পারে।"],
        improve: "Supplier dependency diversify করো, switching cost/value differentiation তৈরি করো, niche Focus বেছে নাও বা complementary ecosystem build করো।",
        examTerms: ["Industry Structure", "Profit Potential", "Entry Barriers", "Bargaining Power", "Substitutes", "Competitive Rivalry"],
        examAnswer: "Supplier power is high because critical computing capacity is concentrated among a few providers and switching is costly. This pressure reduces the industry’s profit potential unless firms secure alternative capacity or differentiate away from input-intensive competition.",
        traps: ["Competitor list বানিয়ে থেমে যাওয়া", "Force-কে firm strength/weakness বলা", "High growth মানেই attractive industry ধরে নেওয়া"]
      },
      {
        id: "generic-strategies", term: "Porter’s Generic Strategies", banglaTitle: "কীভাবে compete করবে: cost, uniqueness, নাকি niche?",
        solves: "Firm-এর competitive position অস্পষ্ট হলে clear advantage ও market scope বেছে দেয়।",
        why: ["Broad market ও narrow niche-এর requirements আলাদা। Low cost ও differentiation-এর activity system-ও আলাদা।", "Clear positioning resource focus করে এবং competitor imitation কঠিন করার trade-off তৈরি করে।"],
        mechanism: [
          { label: "Cost Leadership", text: "Broad market-এ lowest-cost producer; scale, standardization, process efficiency." },
          { label: "Differentiation", text: "Broad market-এ valued uniqueness; innovation, quality, brand, service." },
          { label: "Cost Focus", text: "Narrow segment-এ lower-cost fit." },
          { label: "Differentiation Focus", text: "Narrow segment-এর special need superiorভাবে serve করা." },
          { label: "Stuck in the Middle", text: "Cost advantage নেই, valued uniqueness-ও নেই; activities inconsistent." }
        ],
        steps: ["Market scope broad না narrow বলো।", "Advantage source cost না uniqueness বলো।", "Supporting activities identify করো।", "Customer value ও economic logic explain করো।", "Position protect করা trade-offs লিখো।"],
        scenario: "একটি cybersecurity firm শুধু hospitals serve করে এবং clinical regulation expertise ও 24/7 response-এর জন্য premium নেয়।",
        analysis: ["Narrow segment = Focus।", "Special expertise ও service = Differentiation।", "অতএব Differentiation Focus।", "General market expand করলে expertise dilution ও cost বাড়তে পারে—trade-off।"],
        improve: "Target segment, value proposition ও activity system align করো; incompatible offers বাদ দাও।",
        examTerms: ["Cost Leadership", "Differentiation", "Cost Focus", "Differentiation Focus", "Stuck in the Middle", "Strategic Position"],
        examAnswer: "The firm follows a Differentiation Focus strategy because it serves a narrow healthcare segment with specialized regulatory expertise and premium incident-response capabilities.",
        traps: ["Low price দেখেই Cost Leadership বলা—lowest-cost system evidence দরকার", "একটি unique feature-কে পুরো Differentiation Strategy বলা", "Hybrid মানেই সবসময় stuck in the middle বলা"]
      },
      {
        id: "ansoff", term: "Ansoff Growth Matrix", banglaTitle: "Growth-এর চার পথ এবং risk",
        solves: "Growth product থেকে আসবে নাকি market থেকে—এবং কতটা নতুনত্ব/risk আছে তা classify করে।",
        why: ["Existing capability leverage যত কম, uncertainty তত বেশি। তাই new product + new market সাধারণত সবচেয়ে risky।", "Matrix একটি direction দেয়; success নিশ্চিত করে না। Resources, competition ও economics পরে test করতে হয়।"],
        mechanism: [
          { label: "Market Penetration", text: "Existing product × existing market: usage/share বাড়ানো." },
          { label: "Market Development", text: "Existing product × new market: geography বা segment expansion." },
          { label: "Product Development", text: "New product × existing market: known customers-কে নতুন offer." },
          { label: "Diversification", text: "New product × new market: related বা unrelated; highest learning burden." }
        ],
        steps: ["‘New’ firm-এর perspective থেকে define করো।", "Product existing/new ও market existing/new classify করো।", "Corresponding quadrant নাম দাও।", "Required capabilities ও risk বলো।", "VRIO, Five Forces ও NPV দিয়ে viability test করার কথা বলো।"],
        scenario: "German meal-kit firm তার existing service Southeast Asia-তে local partners দিয়ে চালু করে।",
        analysis: ["Product মূলত existing।", "Geography ও customer context new।", "এটি Market Development।", "Local taste, logistics, regulation ও partner capability risk।"],
        improve: "Pilot/reversible entry দিয়ে market knowledge build করো; localize করলেও core product কতটা বদলালে classification পাল্টায় তা explain করো।",
        examTerms: ["Market Penetration", "Market Development", "Product Development", "Diversification", "Related Diversification"],
        examAnswer: "This move is Market Development because the firm takes an existing service into a new geographic market. The main risks concern local demand, distribution, regulation, and the transferability of existing capabilities.",
        traps: ["New channel-কে automatic new market বলা", "Diversification-কে শুধু acquisition বলা", "Risk/capability discussion বাদ দেওয়া"]
      },
      {
        id: "blue-ocean", term: "Blue Ocean Strategy", banglaTitle: "Existing rivalry এড়িয়ে নতুন demand তৈরি",
        solves: "Red Ocean-এ price war ও imitation বেশি হলে noncustomers-এর জন্য value curve বদলে uncontested space খোঁজে।",
        why: ["Value Innovation একসাথে differentiation ও lower cost pursue করে; শুধু premium feature যোগ করা নয়।", "Industry যেসব factor taken for granted করে সেগুলো challenge করলে cost কমে এবং নতুন buyer value তৈরি হতে পারে।"],
        mechanism: [
          { label: "Eliminate", text: "Industry-র কোন factor পুরো বাদ যাবে?" },
          { label: "Reduce", text: "কোন factor standard-এর অনেক নিচে নামবে?" },
          { label: "Raise", text: "কোন factor standard-এর ওপরে উঠবে?" },
          { label: "Create", text: "Industry আগে দেয়নি—এমন কী নতুন value তৈরি হবে?" },
          { label: "Noncustomers", text: "Soon-to-be, Refusing এবং Unexplored—তিন tier-এর latent demand." }
        ],
        steps: ["Current value curve-এর competitive factors list করো।", "Noncustomers কেন কিনছে না জিজ্ঞাসা করো।", "ERRC Grid তৈরি করো।", "নতুন curve cost কমায় ও buyer value বাড়ায় কি না test করো।", "Resources, imitation এবং execution risk যাচাই করো।"],
        scenario: "Nintendo Wii hardcore gamers-এর graphics race ছেড়ে motion control ও family play তৈরি করেছিল।",
        analysis: ["Reduce: processing power/technical arms race।", "Raise: ease of use, reliability, family friendliness।", "Create: motion gaming ও non-gamer appeal।", "New demand তৈরি হয়, rivalry basis বদলায়।"],
        improve: "Crowded feature race থেকে বেরিয়ে refusal reason address করো; unnecessary cost factor বাদ দাও।",
        examTerms: ["Blue Ocean", "Red Ocean", "Value Innovation", "ERRC Grid", "Noncustomers", "Value-Cost Trade-off"],
        examAnswer: "The firm pursues Value Innovation by eliminating and reducing costly industry factors while raising ease of use and creating a new experience for noncustomers.",
        traps: ["শুধু নতুন market-কে Blue Ocean বলা", "Eliminate/Reduce বাদ দিয়ে শুধু features Create করা", "Blue Ocean permanently competition-free ধরে নেওয়া"]
      },
      {
        id: "tradeoffs-doors", term: "Strategic Trade-offs & One/Two-Way Doors", banglaTitle: "কী করব না এবং কত দ্রুত সিদ্ধান্ত নেব",
        solves: "Incompatible choice ও decision speed-এর সমস্যা সমাধান করে।",
        why: ["Trade-off position-কে credible করে; সব segment serve করলে activities conflict করে।", "সব decision slow করলে opportunity হারায়, সব decision fast করলে irreversible ক্ষতি হয়।"],
        mechanism: [
          { label: "Strategic Trade-off", text: "Image, activity configuration বা coordination limit-এর কারণে এক choice অন্য choice-কে exclude করে." },
          { label: "One-Way Door", text: "Consequential ও nearly irreversible; data, consultation ও deliberation দরকার." },
          { label: "Two-Way Door", text: "Reversible experiment; small empowered team দ্রুত decide করতে পারে." }
        ],
        steps: ["Choice-টি position-এর কোন promise support করে বলো।", "Incompatible alternative কী বাদ যাচ্ছে বলো।", "Reversibility, downside, switching cost assess করো।", "One-way হলে slow governance; two-way হলে rapid experiment design করো।", "Learning metric ও exit trigger দাও।"],
        scenario: "Landing-page pricing test বনাম €10bn competitor acquisition।",
        analysis: ["Pricing A/B test সাধারণত Two-Way Door; দ্রুত reversible।", "Large acquisition integration, debt ও culture বদলায়; One-Way Door-এর কাছাকাছি।", "দুটোর decision process একই হওয়া উচিত নয়।"],
        improve: "Reversible choices decentralize করো; irreversible commitment-এ scenario, NPV, integration ও ethics due diligence করো।",
        examTerms: ["Strategic Trade-off", "One-Way Door", "Two-Way Door", "Reversibility", "Strategic Commitment"],
        examAnswer: "The acquisition is a One-Way Door decision because it is highly consequential and difficult to reverse. It therefore requires extensive analysis, consultation, and integration planning.",
        traps: ["Fast decision = agile ধরে নেওয়া", "Experiment-এর stop rule না দেওয়া", "Trade-off-কে সাধারণ opportunity cost-এর সাথে গুলিয়ে ফেলা"]
      }
    ],
    synthesis: [
      { situation: "Regulation/demography/technology change", lead: "PESTEL", support: "Five Forces", reason: "Macro fact কীভাবে industry pressure বদলায় দেখায়।" },
      { situation: "Industry লাভজনক কি না", lead: "Five Forces", support: "Generic Strategies", reason: "Pressure diagnose করে defensible position বেছে দেয়।" },
      { situation: "Growth কোথা থেকে আসবে", lead: "Ansoff Matrix", support: "VRIO + NPV", reason: "Direction classify করে capability ও value test করে।" },
      { situation: "Crowded market/price war", lead: "Blue Ocean / ERRC", support: "Value Stick", reason: "Noncustomer value ও cost redesign করে।" }
    ],
    fastRevision: ["PESTEL = macro environment", "Five Forces = industry profit pressure", "Generic Strategies = competitive position", "Ansoff = growth direction", "Blue Ocean = Value Innovation + noncustomers", "Trade-off = what not to do", "One-way slow; two-way fast"],
    practice: { case: "একটি budget fashion retailer premium couture service চালু করছে, একই সঙ্গে lowest price promise রাখছে। Online resale platforms দ্রুত substitute হিসেবে বাড়ছে।", prompt: "কোন models কোন order-এ ব্যবহার করবে?", answer: "Substitute pressure বোঝাতে Five Forces; incompatible premium/lowest-cost choices বোঝাতে Generic Strategies ও Trade-offs; resale growth-কে PESTEL Social/Technological factor হিসেবেও দেখানো যায়। Recommendation: clear position বেছে coherent activity system তৈরি করা অথবা Blue Ocean ERRC দিয়ে নতুন value curve বানানো।" },
    remainingIssue: "External analysis industry-র pressure ও possible position দেখাল। কিন্তু একই industry-তে কিছু firm কেন অন্যদের চেয়ে consistently ভালো করে—এটি external models একা ব্যাখ্যা করতে পারে না।",
    nextSlug: "resources", nextTitle: "Resources", nextReason: "RBV, VRIO ও Dynamic Capabilities দিয়ে firm-specific advantage এবং adaptation capacity পরীক্ষা করতে হবে।",
    source: "https://awe-hnu.de/lectures/SPM/26WT/competition/"
  },
  {
    slug: "resources", number: "03", title: "Resources", banglaTitle: "Firm-এর ভেতরের advantage কোথায়?", color: "blue",
    coreQuestion: "কোন resource বা capability competitor-এর নেই, copy করা কঠিন, এবং organization সেটি exploit করতে প্রস্তুত?",
    shortAnswer: "Internal Audit দিয়ে strengths/weaknesses খুঁজে, VRIO দিয়ে competitive outcome বিচার করো; তারপর Dynamic Capabilities দিয়ে resource base সময়ের সাথে renew করো।",
    story: ["একই industry, একই regulation এবং প্রায় একই customer থাকা সত্ত্বেও firms-এর performance আলাদা হয়। কারণ advantage শুধু market position থেকে আসে না; brand trust, routines, ecosystem, culture, data ও relationships-এর মতো firm-specific resources থেকেও আসে।", "তবে আজকের strength কাল rigidity হতে পারে। তাই Resources topic-এর দুই অংশ: current advantage (RBV/VRIO) এবং renewal ability (Dynamic Capabilities)। SWOT শেষে outside ও inside-কে action-এ যুক্ত করে।"],
    learningGoals: ["Internal resources-এর category ও strategic relevance বোঝা", "VRIO দিয়ে competitive outcome নির্ধারণ করা", "Imitation barrier ব্যাখ্যা করা", "Ex-ante ও Ex-post limits আলাদা করা", "Sense–Seize–Reconfigure apply করা", "SWOT থেকে SO/WO/ST/WT action বানানো"],
    diagnosticQuestions: ["Resource কোন opportunity exploit বা threat neutralize করে?", "কতজন rival এটি control করে?", "Copy/substitute করতে কেন cost লাগে?", "Firm-এর structure/incentive কি resource exploit করে?", "Environment বদলালে resource reconfigure করা যাবে?"],
    models: [
      {
        id: "internal-rbv", term: "Internal Audit & Resource-Based View (RBV)", banglaTitle: "Performance difference-এর inside-out explanation",
        solves: "Industry analysis একই হলেও firm কেন outperform করে তা resource heterogeneity ও immobility দিয়ে বোঝায়।",
        why: ["Resources শুধু assets নয়; routines, knowledge, culture, relationships ও coordination-ও resource/capability।", "Internal strength external opportunity-এর context ছাড়া value নাও দিতে পারে। তাই RBV external analysis-এর replacement নয়, complement।"],
        mechanism: [
          { label: "Tangible Resources", text: "Cash, plant, equipment, inventory, physical infrastructure." },
          { label: "Intangible Resources", text: "Patent, brand, reputation, proprietary data/technology." },
          { label: "Human & Organizational Capabilities", text: "Skills, leadership, routines, innovation, operations, culture, knowledge sharing." },
          { label: "Resource Heterogeneity", text: "Firms-এর resource bundles আলাদা." },
          { label: "Resource Immobility", text: "Important resources সহজে buy, move বা replicate করা যায় না." }
        ],
        steps: ["Value chain/function ধরে resource inventory করো।", "Asset নয়—capability/routine-ও লিখো।", "Strength/weakness relative to competitor ও strategy হিসেবে বিচার করো।", "Resource combination বা complementarity খুঁজো।", "VRIO দিয়ে শুধু গুরুত্বপূর্ণ resources test করো।"],
        scenario: "দুই airline একই aircraft ব্যবহার করে; একটির turnaround routine, employee culture ও route coordination অনেক ভালো।",
        analysis: ["Aircraft common tangible resource; advantage নয়।", "Fast turnaround একটি organizational capability।", "Culture ও routines socially complex এবং path-dependent হতে পারে।", "Resource bundle cost position support করে।"],
        improve: "Generic asset কেনার বদলে routines, knowledge integration এবং complements build করো; weak capability-তে partner/acquire/develop choice নাও।",
        examTerms: ["Resource-Based View", "Resource Heterogeneity", "Resource Immobility", "Distinctive Competence", "Tangible and Intangible Resources"],
        examAnswer: "The RBV explains the performance difference through heterogeneous and imperfectly mobile organizational capabilities rather than through industry conditions alone.",
        traps: ["যেকোনো asset-কে strategic resource বলা", "Competitor benchmark না করা", "External fit বাদ দেওয়া"]
      },
      {
        id: "vrio", term: "VRIO Framework", banglaTitle: "Resource কি সত্যিই sustained advantage?",
        solves: "একটি নির্দিষ্ট resource parity, temporary advantage নাকি Sustained Competitive Advantage দেয় তা পরীক্ষা করে।",
        why: ["Valuable হলেই advantage হয় না; সবাই পেলে parity। Rare হলেও সহজে copy হলে temporary।", "VRI resource থাকলেও wrong structure, incentive বা process থাকলে firm value capture করতে পারে না—এটাই Organization প্রশ্ন।"],
        mechanism: [
          { label: "Valuable", text: "Opportunity exploit, threat neutralize, cost reduce বা revenue/WTP increase করে?" },
          { label: "Rare", text: "কত competing firm resource control করে?" },
          { label: "Costly to Imitate", text: "Path dependence, causal ambiguity, social complexity, legal protection, network effects বা time compression আছে?" },
          { label: "Organized", text: "Structure, control system, incentives, process ও complementary resources full potential exploit করে?" },
          { label: "Outcome", text: "Not valuable = disadvantage; V = parity; VR = temporary; VRI + O = sustained advantage." }
        ],
        steps: ["একবারে একটি precise resource নাম দাও।", "Value-এর causal link external opportunity/threat-এর সাথে দাও।", "Rarity competitor evidence দিয়ে বিচার করো।", "Imitation cost-এর specific mechanism explain করো।", "Organization evidence দাও।", "শেষে competitive outcome স্পষ্ট বলো।"],
        scenario: "Salesforce-এর AppExchange-এ হাজারো apps, partner relationships ও দীর্ঘ network effects আছে।",
        analysis: ["Valuable: integrations customer value ও switching cost বাড়ায়।", "Rare: ecosystem depth rivals-এর তুলনায় বড়।", "Inimitable: network effects, path dependence, partner trust ও time compression diseconomies।", "Organized: partner program, certification, revenue sharing support করে।", "Result: potential Sustained Competitive Advantage।"],
        improve: "Temporary feature advantage-কে ecosystem, data, relationships ও complementary process দিয়ে harder-to-copy bundle-এ পরিণত করো।",
        examTerms: ["Valuable", "Rare", "Costly to Imitate", "Organized to Capture Value", "Competitive Parity", "Temporary Advantage", "Sustained Competitive Advantage"],
        examAnswer: "The ecosystem is valuable and rare, while network effects, path dependence, and socially complex partner relationships make imitation costly. Because the firm has dedicated governance and incentives, it is organized to capture the resource’s potential value.",
        traps: ["Company-কে VRIO করা—resource-কে করতে হবে", "Rarity আর imitability একই evidence দিয়ে বলা", "O-কে ‘organization একটি resource’ হিসেবে লেখা", "Substitute possibility বাদ দেওয়া"]
      },
      {
        id: "limits", term: "Ex-ante and Ex-post Limits to Competition", banglaTitle: "Advantage পাওয়ার আগে ও পরে protection",
        solves: "Firm কীভাবে resource-এর future value-এর চেয়ে কম cost-এ acquire করে এবং success দেখা যাওয়ার পর rival কেন rent erode করতে পারে না তা বোঝায়।",
        why: ["সবাই যদি আগে থেকেই resource-এর future value জানে, bidding সেই value consume করবে।", "Success-এর পরে imitation barrier না থাকলে competitive advantage দ্রুত disappear করবে।"],
        mechanism: [
          { label: "Ex-ante Limits", text: "Position প্রতিষ্ঠার আগে competition সীমিত: uncertainty, information asymmetry, first insight, unique complement." },
          { label: "Ex-post Limits", text: "Position হওয়ার পরে rent protect: patent, switching cost, causal ambiguity, social complexity, network effect." }
        ],
        steps: ["Resource কখন acquire/build হয়েছিল দেখো।", "তখন market কী জানত না explain করো।", "Acquisition cost future value পুরো capture করেনি কেন বলো।", "বর্তমানে rival copy/substitute করতে কী বাধা দেখো।", "Barrier erosion-এর threat বলো।"],
        scenario: "1999-এ cloud CRM uncertain ছিল; Salesforce clean-slate architecture তৈরি করে। এখন ecosystem ও switching cost leadership protect করে।",
        analysis: ["Uncertainty ও incumbent skepticism = Ex-ante limit।", "Architecture path dependence, ecosystem, trust, switching cost = Ex-post limits।", "বর্তমানে AI-native entrant কিছু barrier bypass করতে পারে—dynamic threat।"],
        improve: "Emerging resource-এ differentiated insight দিয়ে early commit করো; পরে legal, relational ও ecosystem isolating mechanisms build করো।",
        examTerms: ["Ex-ante Limits to Competition", "Ex-post Limits to Competition", "Economic Rents", "Isolating Mechanisms", "Causal Ambiguity", "Path Dependence"],
        examAnswer: "Uncertainty about cloud adoption limited competition for the initial position ex ante, while network effects, switching costs, and path-dependent architecture now protect the advantage ex post.",
        traps: ["First mover-কে নিজে থেকেই barrier বলা", "Ex-ante ও Ex-post সময় উল্টানো", "Barrier permanent ধরে নেওয়া"]
      },
      {
        id: "dynamic-capabilities", term: "Dynamic Capabilities", banglaTitle: "Strength-কে rigidity হতে না দেওয়া",
        solves: "Rapid change-এ current resources obsolete হলে firm কীভাবে resource base renew করবে তা বোঝায়।",
        why: ["Ordinary Capability আজকের কাজ ভালোভাবে করে; Dynamic Capability firm কী করে এবং কীভাবে করে সেটি বদলায়।", "Adaptation শুধু reaction নয়—opportunity sense, commitment seize, তারপর assets/structure reconfigure করতে হয়।"],
        mechanism: [
          { label: "Sensing", text: "Technology, customer, competitor ও weak signal scan এবং interpret করা." },
          { label: "Seizing", text: "Business model, investment ও resource commitment দিয়ে opportunity capture করা." },
          { label: "Reconfiguring", text: "Assets, talent, process, structure, partners ও identity transform করা." },
          { label: "Evolutionary Fitness", text: "Environment বদলালে relevant ও competitive থাকার ability." }
        ],
        steps: ["Environmental change ও strategic discontinuity identify করো।", "Firm কীভাবে signal collect/interpret করছে বলো।", "Opportunity capture-এর concrete commitment দেখাও।", "কোন resource/process/structure reconfigure হবে বলো।", "Learning feedback ও cannibalization risk address করো।"],
        scenario: "Apple mobile computing demand sense করে iPhone launch করে এবং supply chain, developer ecosystem ও services reconfigure করে।",
        analysis: ["Trend recognition = Sensing।", "iPhone investment/launch = Seizing।", "Manufacturing, ecosystem, service model change = Reconfiguring।", "একবারের product success নয়; repeated renewal capability গুরুত্বপূর্ণ।"],
        improve: "Market sensing routines, fast resource allocation এবং legacy asset recombination capability build করো।",
        examTerms: ["Sensing", "Seizing", "Reconfiguring", "Ordinary Capabilities", "Evolutionary Fitness", "Strategic Renewal"],
        examAnswer: "The firm demonstrates Dynamic Capabilities by sensing a technological shift, seizing the opportunity through committed investment, and reconfiguring its asset base and ecosystem.",
        traps: ["যেকোনো change-কে Dynamic Capability বলা", "Sensing-এর পরে resource commitment না দেখানো", "Constant change-কে agility বলা"]
      },
      {
        id: "it-roles", term: "IT and Dynamic Capabilities", banglaTitle: "IT শুধু tool নয়—চারটি role",
        solves: "Digital technology capability change-এ কীভাবে context, enabler, embedded component এবং outcome হয় তা আলাদা করে।",
        why: ["IT-কে শুধু infrastructure ভাবলে strategy-তে তার deeper role miss হয়।", "Capability IT তৈরি করতে পারে, আবার capability development নতুন IT asset-ও তৈরি করতে পারে—relationship two-way।"],
        mechanism: [
          { label: "IT as Context", text: "Digital environment change-এর pressure ও opportunity তৈরি করে." },
          { label: "IT as Enabler", text: "Analytics/cloud sensing ও fast coordination enable করে." },
          { label: "IT Embedded", text: "IT process/capability-এর inseparable অংশ—যেমন algorithmic supply chain." },
          { label: "IT as Outcome", text: "Innovation/learning capability থেকে নতুন platform বা IT capability তৈরি হয়." }
        ],
        steps: ["Case-এ IT কী করছে—পরিবেশ বদলাচ্ছে, সাহায্য করছে, process-এর ভেতরে আছে, নাকি output?", "Role-এর causal effect বলো।", "Multiple roles coexist করলে sequence দেখাও।", "Governance ও capability implication বলো।"],
        scenario: "Retailer analytics দিয়ে demand sense করে; replenishment algorithm supply process-এর অংশ; একই learning থেকে নতুন supplier platform তৈরি হয়।",
        analysis: ["Analytics = Enabler।", "Replenishment algorithm = Embedded।", "Supplier platform = Outcome।", "Digital competition/real-time expectation = Context।"],
        improve: "IT investment-কে isolated system project না রেখে business process, decision rights ও learning routines-এর সাথে integrate করো।",
        examTerms: ["IT as Context", "IT as Enabler", "IT Embedded in Capabilities", "IT as Outcome", "Digital Capability"],
        examAnswer: "IT plays multiple roles: analytics enables sensing, the algorithm is embedded in operational routines, and the resulting platform is an outcome of the firm’s innovation capability.",
        traps: ["সব role-কে enabler বলা", "Technology possession-কে capability বলা", "People/process integration বাদ দেওয়া"]
      },
      {
        id: "swot", term: "SWOT / TOWS Matrix", banglaTitle: "Analysis থেকে strategic action",
        solves: "Internal strengths/weaknesses এবং external opportunities/threats combine করে action option তৈরি করে।",
        why: ["চারটি list নিজে strategy নয়। Value আসে যখন internal এবং external factor match, convert, neutralize বা defend করতে ব্যবহার করা হয়।", "Framework সহজ বলে popular, কিন্তু evidence ও prioritization ছাড়া subjective snapshot হয়ে যায়।"],
        mechanism: [
          { label: "SO — Matching", text: "Strength দিয়ে Opportunity exploit." },
          { label: "WO — Conversion", text: "Opportunity ব্যবহার করে Weakness improve." },
          { label: "ST — Neutralization", text: "Strength দিয়ে Threat impact কমানো." },
          { label: "WT — Defense", text: "Weakness ও Threat exposure একসাথে কমানো; restructure/divestও হতে পারে." }
        ],
        steps: ["External Audit থেকে শুধু O/T নাও।", "Internal Audit থেকে শুধু S/W নাও।", "Specific, quantified, relative factors লেখো।", "Priority factors pair করে SO/WO/ST/WT action verb দিয়ে লেখো।", "Feasibility, trade-off ও dynamic change test করো।"],
        scenario: "AI firm-এর strong research talent আছে, enterprise demand বাড়ছে, কিন্তু compliance দুর্বল এবং regulation কঠোর হচ্ছে।",
        analysis: ["S + O: talent দিয়ে secure vertical model launch = SO।", "W + T: compliance gap + regulation = WT; governance build/partner before expansion।", "একটি factor দুই strategy combination-এ different action তৈরি করতে পারে।"],
        improve: "‘Strong brand’ নয়—evidence দাও; strategy sentence-এ verb, target ও mechanism দাও।",
        examTerms: ["Strength", "Weakness", "Opportunity", "Threat", "SO Strategy", "WO Strategy", "ST Strategy", "WT Strategy"],
        examAnswer: "An SO strategy would leverage the firm’s research talent to capture growing enterprise demand. In parallel, a WT strategy should reduce regulatory exposure by strengthening compliance capabilities before scaling.",
        traps: ["Internal/external ভুল box-এ রাখা", "Strategy-কে factor list-এ রাখা", "Priority ও evidence বাদ দেওয়া", "SWOT-কে predictive tool বলা"]
      }
    ],
    synthesis: [
      { situation: "Firm-specific performance gap", lead: "RBV", support: "VRIO", reason: "Resource difference ও sustainability test করে।" },
      { situation: "Technology shift current strength threaten করে", lead: "Dynamic Capabilities", support: "Deliberate–Emergent", reason: "Renewal এবং learning path দেখায়।" },
      { situation: "Internal ও external findings থেকে action", lead: "SWOT/TOWS", support: "VRIO + PESTEL", reason: "Evidence-backed combination strategy তৈরি করে।" }
    ],
    fastRevision: ["RBV = inside-out advantage", "Resource heterogeneity + immobility matter", "VRIO sequence: V → R → I → O", "Ex-ante wins cheaply; Ex-post protects rents", "Dynamic Capabilities = Sense → Seize → Reconfigure", "SWOT list নয়; SO/WO/ST/WT action"],
    practice: { case: "একটি logistics firm-এর proprietary route data ও experienced dispatcher team আছে। Competitors software copy করতে পারে, কিন্তু team routines ও customer relationships replicate করতে কষ্ট হয়। AI routing দ্রুত industry বদলাচ্ছে।", prompt: "VRIO এবং Dynamic Capabilities একসাথে apply করো।", answer: "Software alone imitable, তাই temporary/parity হতে পারে। Data, tacit routines ও relationships-এর bundle socially complex ও path-dependent; Organization থাকলে sustained potential। কিন্তু AI shift-এর জন্য firm-কে Sense new methods, Seize through investment, এবং routines/skills Reconfigure করতে হবে—না হলে strength rigidity হবে।" },
    remainingIssue: "আমরা জানি firm-এর কী আছে এবং কীভাবে renew করতে পারে। কিন্তু analysis থেকে coherent strategy কীভাবে বাস্তবে জন্ম নেয়—বিশেষ করে যখন information incomplete এবং plan ব্যর্থ হয়—সেটি এখনও খোলা।",
    nextSlug: "formation", nextTitle: "Formation", nextReason: "Rumelt’s Kernel, Deliberate–Emergent Strategy ও Strategy as Craft দিয়ে choice এবং learning-এর process বুঝতে হবে।",
    source: "https://awe-hnu.de/lectures/SPM/26WT/resources/"
  },
  {
    slug: "formation", number: "04", title: "Formation", banglaTitle: "Uncertainty-তে Strategy কীভাবে তৈরি হয়?", color: "violet",
    coreQuestion: "Messy reality থেকে pivotal challenge কীভাবে diagnose করে একটি guiding policy ও coherent action system বানানো যায়—এবং action থেকে কীভাবে শেখা যায়?",
    shortAnswer: "Good Strategy diagnosis দিয়ে complexity simplify করে, guiding policy দিয়ে approach বেছে নেয়, এবং coherent actions দিয়ে focus করে। বাস্তবে strategy deliberate intent ও emergent learning-এর মিশ্রণ।",
    story: ["Netflix 1997 সালে DVD business শুরু করার সময় 2013-এর original-content strategy পুরো plan করতে পারেনি। Streaming technology, customer behavior, Qwikster failure এবং content-owner pressure থেকে strategy evolve করেছে।", "Formation topic তাই ‘plan বানাও’ বলে থামে না। এটি দেখায় leadership environment এবং organizational operating system-এর মধ্যে mediator—stability রক্ষা করে, আবার discontinuity এলে change ঘটায়।"],
    learningGoals: ["Good ও bad strategy আলাদা করা", "Rumelt’s Kernel লিখতে পারা", "Intended, Unrealized, Emergent ও Realized Strategy বোঝা", "Crafting metaphor apply করা", "Convergence ও strategic leap চেনা", "High-quality fast decision capability ব্যাখ্যা করা"],
    diagnosticQuestions: ["Pivotal challenge আসলে কী?", "এটি symptom নাকি root mechanism?", "Overall approach কী?", "Actions কি একে অপরকে reinforce করে?", "কোন intended plan unrealized হয়েছে?", "Observed pattern থেকে কী শেখা গেছে?"],
    models: [
      {
        id: "kernel", term: "Rumelt’s Strategy Kernel", banglaTitle: "Good Strategy-এর তিন অংশ",
        solves: "Vision, target বা wish list-কে বাস্তব strategy-তে রূপান্তর করে।",
        why: ["Diagnosis ছাড়া action symptom treat করে। Guiding Policy ছাড়া initiatives বিচ্ছিন্ন হয়। Coherent Actions ছাড়া policy rhetoric থেকে যায়।", "Good Strategy সাধারণত সব problem solve করে না; leverage point-এ resources concentrate করে।"],
        mechanism: [
          { label: "Diagnosis", text: "Complex reality simplify করে challenge-এর critical mechanism explain করা." },
          { label: "Guiding Policy", text: "Diagnosis মোকাবিলার overall approach ও boundary." },
          { label: "Coherent Actions", text: "Mutually reinforcing, coordinated steps যা policy বাস্তবায়ন করে." }
        ],
        steps: ["Symptoms ও facts list করো।", "Root constraint/pivotal issue এক sentence-এ explain করো।", "একটি broad approach বেছে what not to do বলো।", "3–5 actions দাও যেগুলো একই policy support করে।", "Contradiction, resource fit ও feedback metric check করো।"],
        scenario: "SaaS firm churn কমাতে 25টি initiative করেছে—discount, ads, features—কিন্তু data দেখায় users প্রথম 7 দিনে setup complete করতে পারে না।",
        analysis: ["Diagnosis: price নয়, early activation failure churn-এর root cause।", "Guiding Policy: win the first seven days।", "Actions: onboarding redesign, setup assistance, activation KPI, customer-success staffing; broad discount pause।"],
        improve: "Resource pivotal constraint-এ concentrate করো এবং unrelated objectives বাদ দাও।",
        examTerms: ["Diagnosis", "Guiding Policy", "Coherent Actions", "Pivotal Objective", "Strategic Focus", "Leverage"],
        examAnswer: "A good strategy should diagnose poor early activation as the pivotal challenge, adopt a guiding policy focused on the first seven days, and coordinate onboarding, support, and measurement actions around that policy.",
        traps: ["Target-কে Guiding Policy বলা", "Diagnosis-এ solution ঢোকানো", "Long action list যেগুলো reinforce করে না", "Buzzword/fluff"]
      },
      {
        id: "bad-strategy", term: "Hallmarks of Poor Strategy", banglaTitle: "Strategy-এর ছদ্মবেশে কী থাকে?",
        solves: "Why strategy documents ambitious হলেও কাজ করে না তা diagnose করে।",
        why: ["Problem face না করলে quality assess করা যায় না। Goal strategy নয়; strategy goal অর্জনের approach।", "Choice এড়াতে সবাইকে সন্তুষ্ট করার list বানালে focus ও resource concentration নষ্ট হয়।"],
        mechanism: [
          { label: "Failure to Face the Problem", text: "Critical challenge define করা হয়নি." },
          { label: "Mistaking Goals for Strategy", text: "‘Grow 20%’ destination; route নয়." },
          { label: "Bad Strategic Objectives", text: "Vague, conflicting বা endless to-do list." },
          { label: "Fluff", text: "Buzzword ও obvious statement expertise-এর মতো দেখানো." },
          { label: "Inability to Choose", text: "Trade-off এড়িয়ে সব priority রাখা." }
        ],
        steps: ["Document-এ diagnosis sentence খুঁজো।", "Goal-এর পাশে ‘how’ আছে কি দেখো।", "Objective count ও conflict দেখো।", "Jargon বাদ দিলে meaning থাকে কি না test করো।", "Resource allocation থেকে real priority infer করো।"],
        scenario: "‘We will become a world-class, customer-centric, AI-enabled leader and double growth’—কোন challenge, policy বা trade-off নেই।",
        analysis: ["Fluff ও goal আছে; strategy নেই।", "Challenge/obstacle undefined।", "No guiding policy, no coherent actions, no choice।"],
        improve: "Statement-টি Kernel-এ rewrite করো এবং one or two pivotal objectives রাখো।",
        examTerms: ["Fluff", "Failure to Face the Challenge", "Goals Are Not Strategy", "Bad Strategic Objectives", "Inability to Choose"],
        examAnswer: "The statement reflects poor strategy because it substitutes ambitious goals and vague language for a diagnosis, a guiding policy, and coherent actions.",
        traps: ["Ambition-কে খারাপ বলা—problem ambition নয়, approach-এর absence", "Vision statement-এর value পুরো অস্বীকার করা"]
      },
      {
        id: "deliberate-emergent", term: "Deliberate–Emergent Strategy Spectrum", banglaTitle: "Intention আর বাস্তব pattern-এর সম্পর্ক",
        solves: "Plan কেন partly fail করে এবং unplanned success কীভাবে actual strategy হয় তা বোঝায়।",
        why: ["Pure Deliberate Strategy-এর জন্য stable environment, perfect information ও full control দরকার—বাস্তবে rare।", "Pure Emergence direction, coordination ও sustained investment হারায়—এটিও rare। Effective firms intent ও learning balance করে।"],
        mechanism: [
          { label: "Intended Strategy", text: "Management যা করতে চেয়েছিল." },
          { label: "Deliberate Strategy", text: "Intended অংশ যা ঠিক পরিকল্পনা অনুযায়ী realized হয়েছে." },
          { label: "Unrealized Strategy", text: "Intended ছিল কিন্তু বাস্তব হয়নি." },
          { label: "Emergent Strategy", text: "Original intention ছাড়া action/learning থেকে realized pattern." },
          { label: "Realized Strategy", text: "বাস্তবে observed consistent behavior = deliberate + emergent elements." }
        ],
        steps: ["Original intention reconstruct করো।", "Actual repeated behavior identify করো।", "কোন অংশ deliberate, unrealized, emergent classify করো।", "Environmental/internal cause explain করো।", "Management কখন persist/pivot করবে recommendation দাও।"],
        scenario: "Netflix Qwikster separation plan customer backlash-এ reverse করে, পরে viewing data থেকে original content opportunity ধরে।",
        analysis: ["Qwikster intended কিন্তু Unrealized।", "Data-driven content opportunity শুরুতে Emergent।", "পরে formal investment-এর মাধ্যমে deliberate direction হয়েছে।", "Realized Strategy উভয়ের mix।"],
        improve: "Clear strategic intent রাখো, কিন্তু weak signals ও frontline learning capture করার review process তৈরি করো।",
        examTerms: ["Intended Strategy", "Deliberate Strategy", "Unrealized Strategy", "Emergent Strategy", "Realized Strategy"],
        examAnswer: "The realized strategy combines deliberate intent with emergent learning. The failed separation became unrealized strategy, while data-driven content production first emerged through experience and was later formalized.",
        traps: ["Failure মানেই emergent বলা", "Unplanned একবারের ঘটনা-কে strategy বলা", "Emergence মানে no leadership বলা"]
      },
      {
        id: "craft", term: "Strategy as Craft", banglaTitle: "Blueprint নয়—potter-এর মতো shaping",
        solves: "Analysis ও implementation আলাদা করলে কেন strategy learning miss করে তা বোঝায়।",
        why: ["Potter general intent রাখে, কিন্তু clay-এর response অনুযায়ী form adjust করে। একইভাবে strategist action-এর feedback থেকে shape করে।", "Intimate business knowledge pattern ও discontinuity দেখতে সাহায্য করে; spreadsheet alone যথেষ্ট নয়।"],
        mechanism: [
          { label: "Past", text: "Historical pattern, accumulated capability ও identity." },
          { label: "Present", text: "Current action, feedback, operational reality." },
          { label: "Future", text: "Intent, aspiration ও direction." },
          { label: "Crafting", text: "Thought + action, control + learning, stability + change integrate করা." }
        ],
        steps: ["Past success/failure pattern পড়ো।", "Current operations-এর কাছাকাছি real-time feedback নাও।", "Future intent স্পষ্ট রাখো।", "Small action দিয়ে assumption test করো।", "Emerging pattern coherent হলে formalize; noise হলে ignore।"],
        scenario: "Restaurant chain local menu experiment থেকে repeat demand দেখে regional product line গড়ে তোলে।",
        analysis: ["Frontline action strategic learning দেয়।", "Repeated demand Pattern।", "Management pattern-কে plan-এ formalize করে।", "Core brand continuity রেখে local adaptation করে।"],
        improve: "Planner ও operator-এর separation কমাও; review meeting-এ শুধু target নয়, pattern ও surprise discuss করো।",
        examTerms: ["Strategy as Craft", "Learning by Doing", "Pattern Recognition", "Tacit Knowledge", "Integration of Formulation and Implementation"],
        examAnswer: "Strategy formation resembles craft because managers shape direction through continuous interaction between strategic intent, accumulated experience, and operational feedback.",
        traps: ["Craft = ad hoc improvisation বলা", "Analysis পুরো বাদ দেওয়া", "প্রতিটি local experiment corporate strategy করা"]
      },
      {
        id: "lifecycles-capabilities", term: "Strategy Life Cycles & Crafting Capabilities", banglaTitle: "Continuity কখন, strategic leap কখন?",
        solves: "Noise-এর কারণে overreact করা এবং real discontinuity miss করা—দুই risk balance করে।",
        why: ["Most time current strategy refine করা দরকার; constant pivot capability destroy করে।", "কিন্তু substitute, technology বা lifecycle shift এলে incrementalism যথেষ্ট নয়—quantum reorientation লাগে।"],
        mechanism: [
          { label: "Convergence", text: "Current strategy refine, extend, optimize ও capability deepen." },
          { label: "Divergence", text: "Brief strategic reorientation বা quantum leap." },
          { label: "Five Capabilities", text: "Know business; manage stability; manage patterns; detect discontinuities; reconcile change and continuity." }
        ],
        steps: ["Change temporary noise নাকি persistent pattern test করো।", "Current strategy-এর adaptive capacity assess করো।", "Discontinuity হলে threatened assumptions identify করো।", "Core continuity কী থাকবে এবং কী বদলাবে বলো।", "Timing, resources ও transition path define করো।"],
        scenario: "Studio owners content ফিরিয়ে নিচ্ছে; streaming firm licensed-content optimization করেই চলবে নাকি producer হবে?",
        analysis: ["Persistent content withdrawal strategic discontinuity।", "Incremental licensing negotiation যথেষ্ট নাও হতে পারে।", "Production capability build quantum reorientation।", "Customer-entertainment mission continuity রক্ষা করে business model change।"],
        improve: "Leading indicators ও strategic assumptions monitor করো; change threshold আগে define করো।",
        examTerms: ["Convergence", "Divergence", "Strategic Reorientation", "Discontinuity", "Change and Continuity"],
        examAnswer: "The withdrawal of licensed content represents a strategic discontinuity that may require divergence from the existing model rather than incremental optimization within it.",
        traps: ["প্রতিটি market fluctuation-এ upheaval", "Past capability sunk cost-এর জন্য ধরে রাখা", "Core purpose ও current model এক মনে করা"]
      },
      {
        id: "decision-capabilities", term: "Strategic Decision-Making Capabilities", banglaTitle: "দ্রুত কিন্তু ভালো decision কীভাবে?",
        solves: "Dynamic environment-এ analysis paralysis ও political paralysis এড়িয়ে fast, high-quality decision নেয়।",
        why: ["Speed ও quality trade-off হওয়া বাধ্যতামূলক নয়; shared real-time understanding debate দ্রুত করে।", "Conflict useful যখন task-focused ও evidence-based; politics harmful যখন personal agenda decision distort করে।"],
        mechanism: [
          { label: "Collective Intuition", text: "Shared, current information থেকে team-level pattern recognition." },
          { label: "Quick Conflict", text: "Multiple alternative নিয়ে vigorous কিন্তু দ্রুত evidence-based debate." },
          { label: "Defuse Politics", text: "Common goals, transparent criteria, trust ও fact focus দিয়ে agenda কমানো." }
        ],
        steps: ["Decision team-কে common real-time data দাও।", "At least 2–3 alternatives ও devil’s advocate ব্যবহার করো।", "Decision criteria আগে declare করো।", "Debate deadline ও decision owner দাও।", "After-action review দিয়ে collective intuition update করো।"],
        scenario: "Product, finance ও sales একটি launch নিয়ে months ধরে নিজেদের target defend করছে।",
        analysis: ["Shared fact base নেই।", "Conflict task নয়, political।", "Transparent criteria ও common objective দরকার।", "Informed decision owner debate শেষে decide করবে।"],
        improve: "Frequent operating review, shared metrics, explicit decision rights ও fact-based conflict routine বানাও।",
        examTerms: ["Collective Intuition", "Quick Conflict", "Political Behavior", "Shared Situational Awareness", "Decision Quality and Speed"],
        examAnswer: "The organization should build collective intuition through shared real-time information, stimulate quick evidence-based conflict, and defuse political behavior through common goals and transparent decision criteria.",
        traps: ["Intuition = gut feeling বলা", "Conflict পুরো eliminate করা", "Consensus-কে decision quality-এর একমাত্র sign বলা"]
      }
    ],
    synthesis: [
      { situation: "Goal আছে, approach নেই", lead: "Rumelt’s Kernel", support: "Trade-offs", reason: "Challenge, policy ও focused actions তৈরি করে।" },
      { situation: "Plan fail/pivot/unplanned success", lead: "Deliberate–Emergent", support: "Strategy as Craft", reason: "Intention ও realized learning explain করে।" },
      { situation: "Signal না noise", lead: "Strategy Life Cycle", support: "Dynamic Capabilities", reason: "Incremental refinement নাকি reorientation ঠিক করে।" }
    ],
    fastRevision: ["Kernel = Diagnosis → Guiding Policy → Coherent Actions", "Goal ≠ Strategy", "Realized = Deliberate + Emergent", "Craft = past + present + future", "Convergence refine করে; divergence reorient করে", "Collective intuition + quick conflict − politics"],
    practice: { case: "একটি education platform বলে ‘2028-এর মধ্যে market leader হব’। 40টি project চলছে, কিন্তু completion rate কমার root cause কেউ জানে না। Teachers-এর ছোট experiment-এ peer feedback completion বাড়িয়েছে।", prompt: "Good Strategy এবং Emergent Strategy দিয়ে response দাও।", answer: "Leadership goal strategy নয়। প্রথমে completion decline diagnose করতে হবে। Teacher experiment একটি emergent pattern; evidence থাকলে Guiding Policy হতে পারে ‘make learning socially accountable’। Coherent actions হবে peer groups, feedback tools, facilitator training ও completion measures; unrelated projects pause করতে হবে।" },
    remainingIssue: "একটি coherent strategy তৈরি হয়েছে। কিন্তু structure, reporting, systems, skills, staff ও culture যদি পুরোনো strategy support করে, নতুন strategy execute হবে না।",
    nextSlug: "organization", nextTitle: "Organization", nextReason: "Organizational Alignment, 7S এবং Structure Follows Strategy দিয়ে execution architecture design করতে হবে।",
    source: "https://awe-hnu.de/lectures/SPM/26WT/formation/"
  },
  {
    slug: "organization", number: "05", title: "Organization", banglaTitle: "Strategy-কে execute করার মতো organization", color: "teal",
    coreQuestion: "Structure, systems, people, skills, culture ও leadership style কীভাবে strategy-কে reinforce করবে?",
    shortAnswer: "No structure is universally best. Performance আসে strategy, size, environment এবং internal elements-এর fit থেকে। Strategy বদলালে decision rights, coordination ও resource flow-ও বদলাতে হয়।",
    story: ["একটি bank digital-first strategy ঘোষণা করল, কিন্তু সব approval headquarters-এ, bonus branch sales-এর উপর, API team legacy IT-এর অনুমতি ছাড়া কিছু করতে পারে না। Strategy খারাপ নয়; organization পুরোনো logic-এ চলছে।", "এই topic তোমাকে symptom—silo, slow decision, duplication, conflict—থেকে alignment problem diagnose করতে শেখায়। তারপর structure ও integration mechanism বেছে নিতে শেখায়।"],
    learningGoals: ["Organizational Alignment-এর dimension বোঝা", "McKinsey 7S দিয়ে whole-system diagnosis", "Structure Follows Strategy explain করা", "Simple/Functional/Divisional/Matrix/SBU compare করা", "Integration strategy-র structural implication", "CIO/CDO ambidexterity ও structural transition বোঝা"],
    diagnosticQuestions: ["Decision rights strategy support করে?", "Resource কোথায় allocate হয়?", "Size/complexity-এর সাথে structure fit করে?", "Environment dynamic হলে authority কতটা decentralized?", "Efficiency ও innovation একই unit-এ conflict করছে?"],
    models: [
      {
        id: "alignment", term: "Organizational Alignment", banglaTitle: "ভালো strategy কেন organization-এ আটকে যায়",
        solves: "Strategy, structure, process ও culture একে অপরের বিপরীতে কাজ করলে misfit চিহ্নিত করে।",
        why: ["Alignment শুধু implementation hygiene নয়; complex fit competitor copy করা কঠিন হওয়ায় advantage হতে পারে।", "Fit static নয়। Growth, environment ও strategy বদলালে old structure constraint হয়ে যায়।"],
        mechanism: [
          { label: "Internal Structural Fit", text: "Strategy, process, culture ও components পরস্পর coherent." },
          { label: "Size–Structure Fit", text: "Scale ও complexity অনুযায়ী formalization/coordination." },
          { label: "Size–Planning Fit", text: "Organization size অনুযায়ী budgeting/forecasting sophistication." },
          { label: "Environment–Structure Fit", text: "Stable context-এ formalization; dynamic context-এ flexibility/decentralization." }
        ],
        steps: ["Strategic requirement list করো—speed, efficiency, innovation, local response ইত্যাদি।", "Current structure/process/culture evidence নাও।", "চার fit dimension-এ mismatch identify করো।", "Performance mechanism explain করো।", "Coordinated redesign ও review cadence দাও।"],
        scenario: "50-person startup 5,000 employee হওয়ার পরও founder সব decision approve করে।",
        analysis: ["Size–Structure misfit: simple centralized model scale ছাড়িয়েছে।", "Information overload ও slow decision।", "Size–Planning fit-ও weak হতে পারে।", "Functional specialization/delegation দরকার।"],
        improve: "Decision rights distribute, management layers/roles clarify এবং planning system scale-এর সাথে match করো।",
        examTerms: ["Organizational Alignment", "Internal Structural Fit", "Size–Structure Fit", "Environment–Structure Fit", "Strategic Misalignment"],
        examAnswer: "The organization suffers from a Size–Structure misfit: centralized entrepreneurial control no longer matches its scale and complexity, causing information overload and slow decisions.",
        traps: ["Alignment = সবাই agree করা", "Structure alone change করা", "Fit-কে permanent বলা"]
      },
      {
        id: "7s", term: "McKinsey 7S Framework", banglaTitle: "Transformation-এ সাতটি interdependent element",
        solves: "Strategy change, merger বা performance problem-এ কোন hard/soft element mismatch করছে তা whole-system view-এ দেখায়।",
        why: ["Structure বদলালেই behavior বদলায় না। Incentive, skill, leadership style ও shared values old logic ধরে রাখতে পারে।", "Seven elements mutually reinforcing; একটির weakness পুরো system undermine করে।"],
        mechanism: [
          { label: "Hard S", text: "Strategy, Structure, Systems—formal এবং তুলনামূলক visible." },
          { label: "Soft S", text: "Shared Values, Skills, Staff, Style—culture ও behavior-related." },
          { label: "Alignment Logic", text: "প্রতিটি S অন্যগুলোর সাথে compatible এবং strategy execution support করবে." }
        ],
        steps: ["Desired strategy থেকে required behavior/capability লিখো।", "প্রতিটি 7S-এর current state evidence দাও।", "Pairwise contradiction খুঁজো।", "Root misalignment prioritize করো।", "Hard ও soft change একসাথে sequence করো।"],
        scenario: "Company innovation চায়, কিন্তু annual budget fixed, failure punished, promotion operational efficiency-র উপর।",
        analysis: ["Strategy = innovation; Systems = cost/control; Style = risk-averse; Shared Values = certainty।", "একাধিক misfit innovation block করছে।", "Budget, metrics, leadership behavior ও skills বদলাতে হবে।"],
        improve: "Innovation fund, learning metrics, safe experiments, skill development ও leadership modeling align করো।",
        examTerms: ["Strategy", "Structure", "Systems", "Shared Values", "Skills", "Staff", "Style", "Mutual Reinforcement"],
        examAnswer: "The innovation strategy is undermined by misaligned Systems, Style, and Shared Values. Incentives reward efficiency, leadership punishes failure, and the culture discourages experimentation.",
        traps: ["7S list লিখে relationship না দেখানো", "Soft elements ignore করা", "Framework-কে strategy selection tool বলা"]
      },
      {
        id: "structure-follows", term: "Structure Follows Strategy", banglaTitle: "Strategic choice resource flow বদলায়",
        solves: "New product, geography, integration বা priority পুরোনো organizational design-এ কেন execute হয় না তা বোঝায়।",
        why: ["Structure নির্ধারণ করে objectives/policies কোথায় set হয় এবং resources কোথায় যায়।", "নতুন strategy-তে coordination need বদলে গেলে reporting ও decision rights না বদলালে delay/conflict হয়।"],
        mechanism: [
          { label: "Objective and Policy Setting", text: "Authority relationship কে decision নেয় তা নির্ধারণ করে." },
          { label: "Resource Allocation", text: "Funding, people ও attention কোন unit পায় তা structure shape করে." },
          { label: "Structural Trigger", text: "Growth, diversification, geography, technology, regulation বা strategic shift." }
        ],
        steps: ["New strategy-এর critical activities/coordination map করো।", "Current decision rights ও resource flow trace করো।", "Constraint identify করো।", "Required structural change ও integration mechanism দাও।", "Transition cost ও temporary disruption acknowledge করো।"],
        scenario: "Domestic product firm global markets-এ ঢুকছে, কিন্তু সব local pricing ও product decision central HQ নেয়।",
        analysis: ["Market Development local responsiveness চায়।", "Central functional structure slow/misfit।", "Geographic divisions বা delegated market teams দরকার, shared brand/platform coordinationসহ।"],
        improve: "Local authority ও global standards-এর boundary স্পষ্ট করো; duplicated resources কোথায় acceptable বলো।",
        examTerms: ["Structure Follows Strategy", "Decision Rights", "Resource Allocation", "Structural Adaptation", "Coordination Mechanisms"],
        examAnswer: "International expansion changes coordination and responsiveness requirements. The firm should therefore adapt decision rights and resource allocation rather than retain a purely domestic centralized structure.",
        traps: ["প্রতিটি strategy change-এ reorganization", "Structure strategy-কে influence করে না বলা", "Transition risk বাদ দেওয়া"]
      },
      {
        id: "structures", term: "Structural Options", banglaTitle: "Simple, Functional, Divisional, Matrix ও SBU কখন?",
        solves: "Size, product/market diversity ও coordination need অনুযায়ী structural form বেছে দেয়।",
        why: ["প্রতিটি structure benefit-এর সাথে cost আনে: speed বনাম coordination, specialization বনাম responsiveness, efficiency বনাম innovation।", "‘Best structure’ নেই; fit ও downside management আছে।"],
        mechanism: [
          { label: "Simple Structure", text: "Central entrepreneur, low hierarchy; fast but not scalable." },
          { label: "Functional Structure", text: "Specialized departments; efficient expertise but silos/slow market response." },
          { label: "Divisional Structure", text: "Product/market/geography units; responsiveness/accountability but duplication." },
          { label: "Matrix Structure", text: "Dual authority; integration/flexibility but ambiguity/conflict/cost." },
          { label: "Strategic Business Units (SBU)", text: "Related divisions grouped as semi-autonomous strategic businesses; corporate portfolio allocation." }
        ],
        steps: ["Size, diversity, geography ও environment assess করো।", "Dominant coordination problem define করো।", "Structure select করে fit explain করো।", "At least দুই advantage ও দুই disadvantage দাও।", "Integration mechanisms/metrics দিয়ে downside mitigate করো।"],
        scenario: "Large company healthcare, electronics ও finance-এ operates; প্রতিটির competition আলাদা।",
        analysis: ["Functional structure diversity handle করবে না।", "SBU structure distinct business strategy ও performance accountability দেয়।", "Corporate center portfolio allocate করবে।", "Cross-SBU synergy হারানোর risk থাকবে।"],
        improve: "SBU autonomy দাও, কিন্তু shared platforms ও cross-unit councils দিয়ে relevant synergy রক্ষা করো।",
        examTerms: ["Simple Structure", "Functional Structure", "Divisional Structure", "Matrix Structure", "Strategic Business Unit", "Centralization", "Decentralization"],
        examAnswer: "An SBU structure fits the diversified portfolio because each business faces distinct competitive dynamics and requires strategic autonomy, while the corporate center can allocate resources across the portfolio.",
        traps: ["Matrix সব complex firm-এর solution", "Divisional ও SBU এক বলা", "Downside/coordination cost না লেখা"]
      },
      {
        id: "integration", term: "Integration Strategies", banglaTitle: "Acquisition direction structure-কে কীভাবে বদলায়",
        solves: "Supplier, distributor, competitor বা related business acquire করলে নতুন coordination need বোঝায়।",
        why: ["Strategic logic থাকলেও integration system ছাড়া synergy realize হয় না।", "Unit specialization (Differentiation) রাখতে হবে, আবার shared planning/data (Integration) তৈরি করতে হবে।"],
        mechanism: [
          { label: "Backward Vertical Integration", text: "Supplier/input control; procurement-production coordination." },
          { label: "Forward Vertical Integration", text: "Distribution/retail control; product-customer coordination." },
          { label: "Horizontal Integration", text: "Same-industry competitor control; consolidation ও redundancy." },
          { label: "Related Diversification", text: "Adjacent businesses; shared capability/synergy ও SBU/matrix need." }
        ],
        steps: ["Transaction direction classify করো।", "Expected control/synergy বলো।", "Which activities remain specialized বলো।", "Shared systems, planning ও conflict-resolution design করো।", "Culture/duplication/integration-cost risk বলো।"],
        scenario: "Apple নিজস্ব retail stores চালায়।",
        analysis: ["এটি Forward Vertical Integration।", "Customer experience ও distribution control বাড়ে।", "Product, retail, inventory ও service coordination দরকার।"],
        improve: "Common data, integrated planning ও clear unit accountability বানাও; শুধু ownership change-এ থেমো না।",
        examTerms: ["Forward Integration", "Backward Integration", "Horizontal Integration", "Related Diversification", "Differentiation and Integration"],
        examAnswer: "The move represents Forward Vertical Integration because the firm gains control over distribution and customer interaction. Its success depends on coordination between product, retail, inventory, and service units.",
        traps: ["সব acquisition horizontal বলা", "Synergy assume করা", "Structure/culture integration ignore করা"]
      },
      {
        id: "ambidexterity", term: "Structural Ambidexterity: CIO and CDO", banglaTitle: "আজকের reliability ও আগামীকালের innovation একসাথে",
        solves: "Stable operations এবং risky exploration একই process/metric-এ conflict করলে separate-but-coordinated design দেয়।",
        why: ["Exploitation efficiency, reliability ও control চায়; Exploration experimentation, speed ও failure tolerance চায়।", "CIO ও CDO competing power center হলে transformation fail; complementary roles হলে current platform future innovation enable করে।"],
        mechanism: [
          { label: "Exploitation / CIO", text: "Reliable IT, efficiency, cybersecurity, compliance, process improvement." },
          { label: "Exploration / CDO", text: "Digital innovation, customer experience, new models, experiments." },
          { label: "Integration", text: "Shared platforms/governance, explicit boundaries, cultural connection, dynamic resource allocation, balanced metrics." }
        ],
        steps: ["Exploit ও explore activities আলাদা করো।", "Different risk, process ও metric define করো।", "CIO/CDO decision rights স্পষ্ট করো।", "Shared architecture/data/security guardrails বানাও।", "Pilot-to-scale handoff process দাও।"],
        scenario: "Digital team security bypass করে দ্রুত prototype বানায়; CIO সব unstable experiment বন্ধ করতে চান।",
        analysis: ["Different logics legitimate কিন্তু uncoordinated।", "Exploration sandbox দরকার।", "CIO production guardrails ও platform দেবেন; CDO experiment portfolio চালাবেন।", "Scale gate-এ joint governance।"],
        improve: "Separate experimentation space, shared standards এবং transition ownership তৈরি করো।",
        examTerms: ["Structural Ambidexterity", "Exploration", "Exploitation", "Chief Information Officer", "Chief Digital Officer", "Shared Governance"],
        examAnswer: "Structural Ambidexterity separates exploratory digital innovation from exploitative IT operations while coordinating both through shared platforms, governance, and a clear pilot-to-scale process.",
        traps: ["CIO old, CDO new—এমন oversimplification", "Units আলাদা করেই integration ভুলে যাওয়া", "একই KPI দুই unit-এ ব্যবহার করা"]
      },
      {
        id: "transitions", term: "Convergence and Frame-Breaking Change", banglaTitle: "System-এর ভিতরে change নাকি system-টাই বদলাবে?",
        solves: "Incremental improvement যথেষ্ট, নাকি mission/power/structure-সহ radical change দরকার তা নির্ধারণ করে।",
        why: ["Convergence fit deepen করে, কিন্তু inertia তৈরি করতে পারে।", "Industry discontinuity, lifecycle shift বা crisis-এ frame-breaking change দরকার; এটি high-risk এবং executive-intensive।"],
        mechanism: [
          { label: "Convergence", text: "Policy, process, role ও skill incremental refine; current system-এর মধ্যে change." },
          { label: "Upheaval / Frame-Breaking", text: "Mission, power, structure, people ও process system-wide reorientation; system-এর change." },
          { label: "Leadership", text: "Convergence-এ monitor/align; upheaval-এ direct involvement, vision, resistance management." }
        ],
        steps: ["Trigger discontinuity কি না diagnose করো।", "Current system adapt করতে পারে কি না দেখো।", "Incremental vs frame-breaking choice justify করো।", "Affected elements ও transition sequence বলো।", "Resistance, continuity ও capability loss manage করো।"],
        scenario: "Physical-media company streaming substitute আসার পরও শুধু store layout optimize করে।",
        analysis: ["Store optimization convergence।", "Business model threat strategic discontinuity।", "Frame-breaking digital reorientation প্রয়োজন হতে পারে।"],
        improve: "Old system optimize করার সীমা চিনে timely resource/structure shift করো; core customer purpose preserve করো।",
        examTerms: ["Convergence", "Upheaval", "Frame-Breaking Change", "Industry Discontinuity", "Organizational Inertia"],
        examAnswer: "Incremental convergence is insufficient because the substitute challenges the firm’s underlying business model. A frame-breaking transformation of strategy, structure, capabilities, and processes is required.",
        traps: ["Radical change-কে সবসময় better বলা", "People/culture transition বাদ দেওয়া", "Convergence-কে stagnation বলা"]
      }
    ],
    synthesis: [
      { situation: "Strategy ভালো, execution আটকে", lead: "7S / Alignment", support: "Management Control", reason: "Misfit ও execution mechanism দেখায়।" },
      { situation: "Firm grew/diversified", lead: "Structural Options", support: "Structure Follows Strategy", reason: "Scale/complexity-fit structure দেয়।" },
      { situation: "Stable IT বনাম digital innovation", lead: "Structural Ambidexterity", support: "Dynamic Capabilities", reason: "Exploit–explore balance তৈরি করে।" }
    ],
    fastRevision: ["Performance = fit, not one best structure", "7S = 3 hard + 4 soft", "Structure shapes decisions and resources", "Functional efficient; Divisional responsive; Matrix integrative but complex", "CIO exploits, CDO explores—coordinate both", "Convergence changes in system; upheaval changes system"],
    practice: { case: "একটি global manufacturer service-based digital revenue strategy নেয়। Product divisions hardware sales-এ rewarded, IT cost center, digital talent central team-এ, customer data fragmented।", prompt: "7S ও Ambidexterity দিয়ে redesign করো।", answer: "Strategy service-based হলেও Systems hardware sales reward করে, Structure/Data fragmented, Skills/Staff isolated—clear 7S misfit। CDO-led exploration team service model pilot করতে পারে; CIO shared data/security platform দেবেন। Scale হলে divisional incentives recurring revenue/customer outcome-এ বদলাতে হবে এবং pilot-to-core integration governance লাগবে।" },
    remainingIssue: "Organization strategy execute করতে সক্ষম হলো। কিন্তু effective হলেই decision right বা sustainable হয় না। Scale, data, AI ও environmental impact stakeholder-দের বড় ক্ষতি করতে পারে।",
    nextSlug: "ethics", nextTitle: "Ethics", nextReason: "CSR, Corporate Digital Responsibility ও ethical implementation দিয়ে strategy-র legitimacy, harm ও shared value পরীক্ষা করতে হবে।",
    source: "https://awe-hnu.de/lectures/SPM/26WT/organization/"
  },
  {
    slug: "ethics", number: "06", title: "Ethics", banglaTitle: "Effective Strategy কি Responsible-ও?", color: "pink",
    coreQuestion: "Strategy profit তৈরি করলেও stakeholder, society ও future generation-এর জন্য right, fair এবং sustainable কি না কীভাবে বিচার করবে?",
    shortAnswer: "Ethics compliance-এর add-on নয়; strategic risk, legitimacy এবং value creation-এর অংশ। CSR/CDR obligations, stakeholder impact, metrics, culture ও daily design decisions-এ integrate করতে হয়।",
    story: ["একটি social platform-এর engagement বাড়ছে, কিন্তু teenage well-being ক্ষতিগ্রস্ত, employees concern তুলছে এবং regulator নজর দিচ্ছে। Financial KPI green হলেও strategy sustainable নাও হতে পারে।", "Corporate action-এর scale, time, complexity ও visibility individual action-এর চেয়ে বড়। তাই ethics শুধু ‘ভালো কাজ’ নয়; path dependency, reputation, legal risk, trust ও long-term value-এর strategic question।"],
    learningGoals: ["Ethics, Business Ethics ও CSR আলাদা করা", "Amplification Effect বোঝা", "Carroll’s CSR Pyramid apply করা", "Corporate Digital Responsibility-এর issue চেনা", "CSR–Performance relationship balancedভাবে লেখা", "Ethical strategy implementation ও heuristics ব্যবহার"],
    diagnosticQuestions: ["কার benefit, কার harm?", "Legal হলেও fair কি?", "Decision scale/time-এ কী amplify হবে?", "Vulnerable stakeholder কে?", "CSR core capability-এর সাথে aligned কি?", "Metric unethical behavior encourage করছে কি?"],
    models: [
      {
        id: "foundations", term: "Business Ethics & Amplification Effect", banglaTitle: "Corporate decision-এর moral impact কেন বড়",
        solves: "Effective/efficient choice আর right/fair choice আলাদা করে এবং organizational harm-এর scale বোঝায়।",
        why: ["Morality culture/time অনুযায়ী evolve করে; global firm different expectations navigate করে।", "Firm-এর decision হাজার মানুষ ও বহু বছর affect করে; visibility ও path dependency value destruction amplify করে।"],
        mechanism: [
          { label: "Scale Amplification", text: "এক decision বহু employee/customer/community affect করে." },
          { label: "Time Amplification", text: "Strategic commitment years ধরে behavior lock করে." },
          { label: "Complexity Amplification", text: "Jurisdiction, culture ও stakeholder expectation conflict করে." },
          { label: "Visibility Amplification", text: "Media, activists ও regulator scrutiny দ্রুত reputation impact করে." }
        ],
        steps: ["Decision ও affected stakeholders map করো।", "Rights, fairness, harm ও duties identify করো।", "Scale/time/complexity/visibility assess করো।", "Short/long-term value effects বলো।", "Governance ও mitigation দাও।"],
        scenario: "AI credit model সামান্য bias নিয়ে millions of applications process করে।",
        analysis: ["Small error scale-এ systemic exclusion হয়।", "Historical data bias time amplify করে।", "Different legal/cultural context complexity বাড়ায়।", "Public exposure trust ও license-to-operate ক্ষতি করে।"],
        improve: "Pre-deployment impact assessment, subgroup testing, appeal, audit trail ও monitoring design করো।",
        examTerms: ["Business Ethics", "Corporate Moral Responsibility", "Ethical Dilemma", "Amplification Effect", "Stakeholder Impact"],
        examAnswer: "The ethical risk is amplified by the scale, duration, complexity, and visibility of automated decision-making. A small model bias can therefore become a systemic strategic liability.",
        traps: ["Legal = ethical ধরা", "Personal intention দিয়ে organizational outcome justify করা", "Only reputation risk—actual stakeholder harm বাদ দেওয়া"]
      },
      {
        id: "csr-pyramid", term: "Carroll’s CSR Pyramid", banglaTitle: "Business-এর চার ধরনের responsibility",
        solves: "Economic, Legal, Ethical ও Philanthropic obligation আলাদা করে stakeholder expectation বুঝতে সাহায্য করে।",
        why: ["Firm economically viable না হলে responsibility sustain করা যায় না; কিন্তু profit legal/ethical obligation বাতিল করে না।", "Philanthropy ethical core business-এর substitute নয়।"],
        mechanism: [
          { label: "Economic Responsibility", text: "Profitable, efficient ও competitively viable হওয়া—society requires." },
          { label: "Legal Responsibility", text: "Law/regulation comply করা—society requires." },
          { label: "Ethical Responsibility", text: "Law-এর বাইরে right, fair, just এবং evolving standards meet করা—society expects." },
          { label: "Philanthropic Responsibility", text: "Voluntary good citizenship/community contribution—society desires." }
        ],
        steps: ["Action কোন responsibility layer-এ পড়ে classify করো।", "Affected stakeholder ও expectation বলো।", "Layers-এর tension দেখাও।", "Core business ও peripheral philanthropy আলাদা করো।", "Strategic integration/value effect explain করো।"],
        scenario: "Tech firm GDPR comply করে, AI explanation voluntaryভাবে দেয় এবং digital-access charity fund করে।",
        analysis: ["GDPR = Legal।", "Explainability beyond minimum = Ethical।", "Digital-access funding = Philanthropic।", "Profitable digital model = Economic foundation।"],
        improve: "Core product ethics আগে ঠিক করো; তারপর philanthropy। Metrics-এ চার layer-এর relevant outcome ধরো।",
        examTerms: ["Economic Responsibility", "Legal Responsibility", "Ethical Responsibility", "Philanthropic Responsibility", "Corporate Citizenship"],
        examAnswer: "Legal compliance satisfies the legal layer, while voluntary explainability addresses ethical expectations. Philanthropic donations cannot compensate for unfair practices in the core business model.",
        traps: ["Pyramid মানে নিচের layer complete না হলে উপরের layer impossible বলা", "CSR = charity", "Ethical responsibility-কে optional বলা"]
      },
      {
        id: "cdr", term: "Corporate Digital Responsibility (CDR)", banglaTitle: "Digital product-এর ESG responsibility",
        solves: "AI, data, surveillance, automation, access, e-waste ও reliability-এর নতুন ethical issue structure করে।",
        why: ["Fast technology moral reflection-এর চেয়ে দ্রুত এগোয়; law lag করতে পারে।", "Digital products invisible, scalable ও data-dependent হওয়ায় harm আগে design stage-এ scan করা দরকার।"],
        mechanism: [
          { label: "Environmental", text: "ICT energy/carbon footprint, device lifecycle ও e-waste." },
          { label: "Social", text: "Fairness, inclusion, well-being, freedom, identity, surveillance, socially compatible automation." },
          { label: "Governance", text: "Reliability, transparency, ownership, privacy, security, data use, autonomous-system accountability." }
        ],
        steps: ["Digital lifecycle ও data flow map করো।", "Environmental/Social/Governance harm list করো।", "Most vulnerable user identify করো।", "Prevent, detect, respond controls design করো।", "Outcome KPI ও accountable owner দাও।"],
        scenario: "Employer productivity software employee screen/keyboard data collect করে performance score বানায়।",
        analysis: ["Surveillance, privacy, autonomy ও power asymmetry issue।", "Data accuracy ও context problem unfair decision আনতে পারে।", "Transparency, proportionality, consent/voice ও human review দরকার।"],
        improve: "Minimum necessary data, clear purpose, retention limit, employee participation, bias validation ও appeal route দাও।",
        examTerms: ["Corporate Digital Responsibility", "Algorithmic Fairness", "Digital Well-being", "Data Stewardship", "Digital Surveillance", "Responsible Automation"],
        examAnswer: "The system creates Corporate Digital Responsibility risks related to surveillance, proportionality, data governance, and unfair automated evaluation. The firm should minimize data collection and provide transparency and human appeal.",
        traps: ["Cybersecurity দিয়েই CDR complete বলা", "User consent থাকলেই fair বলা", "Model-level fix দিয়ে organizational power ignore করা"]
      },
      {
        id: "csr-performance", term: "CSR–Performance Relationship", banglaTitle: "Good ethics কখন financial value দেয়?",
        solves: "CSR সবসময় pays বা কখনো pays না—এই দুই extreme-এর বদলে strategic balance দেয়।",
        why: ["Underinvestment loyalty, risk mitigation, talent ও innovation opportunity হারায়।", "Overinvestment core business থেকে resources সরাতে পারে বা authenticity skepticism তৈরি করতে পারে। Context ও alignment decisive।"],
        mechanism: [
          { label: "Underinvestment Risk", text: "Reputation, regulation, talent, customer loyalty ও efficiency opportunity miss." },
          { label: "Strategic Zone", text: "Material stakeholder issue + core capability + measurable social/business impact." },
          { label: "Overinvestment Risk", text: "Diminishing returns, resource diversion, cost disadvantage, symbolic activity." },
          { label: "U-shaped / Nuanced Relationship", text: "Social ও financial performance relationship linear নয়; context dependent." }
        ],
        steps: ["Material stakeholder issue identify করো।", "Core strategy/capability link বলো।", "Cost ও value mechanism estimate করো।", "Under/overinvestment risk compare করো।", "Financial ও social KPI, time horizon ও review trigger দাও।"],
        scenario: "Manufacturer energy efficiency-তে invest করে বনাম unrelated charity sponsorship বাড়ায়।",
        analysis: ["Energy efficiency environment impact ও Cost দুটো improve করে—strategic alignment strong।", "Unrelated sponsorship social value দিতে পারে, কিন্তু business mechanism/credibility দুর্বল।", "দুটিকে same ROI logic-এ বিচার করা ঠিক নয়, কিন্তু opportunity cost দেখাতে হবে।"],
        improve: "Materiality assessment ও shared-value business case দিয়ে CSR portfolio prioritize করো।",
        examTerms: ["CSR–Financial Performance", "Strategic CSR", "Materiality", "Underinvestment", "Overinvestment", "Shared Value"],
        examAnswer: "CSR is most likely to support financial performance when it addresses a material stakeholder issue, aligns with the firm’s capabilities, and produces measurable social and business outcomes.",
        traps: ["CSR সবসময় profit বাড়ায় বলা", "Short-term accounting return দিয়েই long-term risk বিচার", "Authenticity/greenwashing বাদ দেওয়া"]
      },
      {
        id: "ethics-analysis", term: "Ethics in Strategic Analysis & Value Stick", banglaTitle: "Ethics-কে আলাদা chapter নয়, strategy-র ভিতরে বসাও",
        solves: "CSR কীভাবে PESTEL, SWOT, RBV ও Value Stick-এ integrate হবে দেখায়।",
        why: ["External expectation Opportunity/Threat; internal ethics culture Strength/Weakness; stakeholder trust resource হতে পারে।", "CSR WTP, Cost ও WTS বদলে value creation mechanism তৈরি করতে পারে।"],
        mechanism: [
          { label: "External Audit", text: "Regulation, activism, social expectations, sustainability trends." },
          { label: "Internal Audit", text: "Culture, reputation, compliance, stakeholder relations, responsible innovation." },
          { label: "Value Stick", text: "Trust raises WTP; efficiency lowers Cost; purpose/fairness lowers WTS; resilience protects value." },
          { label: "SWOT", text: "Ethical strengths/opportunities leverage; vulnerabilities/threats mitigate." }
        ],
        steps: ["Relevant ethical external factors লিখো।", "Internal capability/vulnerability audit করো।", "Value Stick-এর exact lever বলো।", "SO/ST/WO/WT action বানাও।", "Claim credibility ও evidence test করো।"],
        scenario: "Fair sourcing program supplier relationship stable করে, talent attract করে এবং customers premium দেয়।",
        analysis: ["Supplier WTS/relationship improve।", "Employee WTS কমতে পারে purpose fit-এর কারণে।", "Customer WTP বাড়ে যদি claim credible।", "Long-term supply risk কমে।"],
        improve: "Certification, traceability ও stakeholder evidence দিয়ে greenwashing risk কমাও।",
        examTerms: ["Ethical External Factor", "Ethical Capability", "Stakeholder Value", "Reputational Risk", "Greenwashing", "Shared Value"],
        examAnswer: "The sourcing initiative can create value by increasing customer willingness to pay, strengthening supplier relationships, and improving employee attraction, provided that the claims are credible and operationally embedded.",
        traps: ["CSR activity দেখেই WTP increase assume করা", "Cost ignore করা", "Reputation-কে শুধু marketing বলা"]
      },
      {
        id: "implementation", term: "Ethical Implementation & Decision Heuristics", banglaTitle: "Values statement থেকে daily decision",
        solves: "Code of conduct থাকলেও product, incentive ও operational decision unethical হলে ethics execution gap বন্ধ করে।",
        why: ["Ethics micro-decisions-এ ঘটে। Culture, incentive ও voice mechanism strategy-র চেয়ে behavior বেশি shape করতে পারে।", "Quick heuristic early warning দেয়; high-stakes case-এ full assessment দরকার।"],
        mechanism: [
          { label: "Implementation System", text: "Ethical audit, stakeholder impact, risk management, balanced KPI, culture, education, escalation, leadership example." },
          { label: "Newspaper Test", text: "Decision public headline হলে comfortable?" },
          { label: "Universality Test", text: "Competitor/supplier আমাদের সাথে একই করলে acceptable?" },
          { label: "Family Test", text: "Decision family member-কে proudভাবে explain করা যায়?" },
          { label: "Consequence Scan", text: "Intended benefit, unintended harm, vulnerable user, mitigation." }
        ],
        steps: ["Decision-এর intended benefit লিখো।", "Misuse/second-order harm imagine করো।", "Vulnerable stakeholder identify করো।", "Three quick tests চালাও।", "High risk হলে formal review/control/KPI দাও।", "Post-launch monitoring ও stop authority দাও।"],
        scenario: "Product team addictive notifications দিয়ে daily usage বাড়াতে চায়।",
        analysis: ["Intended = engagement; unintended = anxiety/addiction।", "Young users vulnerable।", "Time-on-app KPI tunnel vision তৈরি করে।", "Frequency control, age-sensitive default, well-being KPI ও experiment guardrail দরকার।"],
        improve: "Ethicsকে sprint/product gate ও performance system-এ বসাও; independent escalation channel দাও।",
        examTerms: ["Ethical Audit", "Stakeholder Impact Assessment", "Ethical Risk Management", "Consequence Scanning", "Ethical Culture"],
        examAnswer: "The firm should integrate ethical review into product development by assessing intended benefits, unintended harms, vulnerable users, and mitigation measures, supported by balanced performance metrics.",
        traps: ["Heuristic-কে full ethical theory বলা", "Code publish করেই implementation complete", "Owner/metric/escalation না দেওয়া"]
      }
    ],
    synthesis: [
      { situation: "Legal but potentially harmful", lead: "Business Ethics / Amplification", support: "CSR Pyramid", reason: "Compliance-এর বাইরে fairness ও scale দেখায়।" },
      { situation: "AI/data/surveillance", lead: "Corporate Digital Responsibility", support: "Stakeholder + Process Check", reason: "Digital ESG risks structure করে।" },
      { situation: "CSR investment pays কি না", lead: "CSR–Performance", support: "Value Stick", reason: "Materiality ও value mechanism দেখায়।" }
    ],
    fastRevision: ["Legal is the floor, not the ceiling", "Amplification = Scale + Time + Complexity + Visibility", "CSR Pyramid = Economic, Legal, Ethical, Philanthropic", "CDR = environmental + social + governance of digital", "Strategic CSR = material + aligned + measurable", "Ethics must enter incentives, product design and metrics"],
    practice: { case: "Insurance company health-app data দিয়ে premium personalize করতে চায়। Model profit improve করে, কিন্তু users বুঝে না data কীভাবে ব্যবহার হচ্ছে এবং chronic patients বেশি charge পায়।", prompt: "কোন ethical frameworks apply করবে?", answer: "CDR দিয়ে privacy, transparency, ownership, fairness ও vulnerable-user risk; Amplification দিয়ে scale/time impact; CSR Pyramid দিয়ে Legal বনাম Ethical responsibility; Value Stick দিয়ে short-term capture বনাম trust/value destruction। Recommendation: meaningful transparency, proportional data use, fairness testing, appeal এবং health outcome/trust KPI।" },
    remainingIssue: "Responsible strategy ও safeguards design করা হলো। এখন জানতে হবে strategy কাজ করছে কি না, investment value তৈরি করছে কি না, এবং measures behavior distort করছে কি না।",
    nextSlug: "cpm", nextTitle: "Corporate Performance Management", nextReason: "Financial statements, ratios, NPV, management control, variance ও balanced frameworks দিয়ে performance measure এবং steer করতে হবে।",
    source: "https://awe-hnu.de/lectures/SPM/26WT/ethics/"
  },
  {
    slug: "cpm", number: "07", title: "Corporate Performance Management", banglaTitle: "Measure, Control, Learn—কিন্তু ভুল behavior নয়", color: "yellow",
    coreQuestion: "Strategy কাজ করছে কি না কীভাবে measure করবে, accountability কোথায় দেবে, এবং variance থেকে কী action/learning নেবে?",
    shortAnswer: "CPM financial ও non-financial goals, measures, feedback, incentives ও learning integrate করে। Management Control formulation ও task execution-এর bridge—কিন্তু metric design behavior distort করতে পারে।",
    story: ["একটি call center average call time কমানোর target দেয়। Agents দ্রুত call শেষ করে target hit করে, কিন্তু repeat call ও churn বাড়ে। ‘What gets measured gets managed’—কিন্তু ভুল measure হলে ভুল জিনিস managed হয়।", "CPM topic numbers শেখায়, তবে মূল lesson হলো interpretation ও behavior। Profit, cash, ratio, NPV, budget, responsibility center এবং BSC—সব strategy ও controllability-এর সাথে connect করতে হবে।"],
    learningGoals: ["CPM ও Management Control আলাদা করা", "Agency, Motivation ও Power perspective apply করা", "Financial Statements connect করা", "Key ratios interpret করা", "TVM/NPV calculate ও critique করা", "Budget, responsibility center ও variance design", "Performance frameworks select করা"],
    diagnosticQuestions: ["Metric কোন behavior reward করছে?", "Profit cash-এ convert হচ্ছে?", "Manager measure-টি control করতে পারে?", "Variance price, volume, mix না cost থেকে?", "Investment cash flow ও discount rate consistent?", "Leading ও lagging indicators balanced?"],
    models: [
      {
        id: "cpm-control", term: "CPM & Management Control", banglaTitle: "Strategy থেকে daily execution-এর bridge",
        solves: "Strategic goals operational target, accountability, feedback ও corrective action-এ translate করে।",
        why: ["CPM organization-wide broader system; Management Control তার core bridge।", "Structure, HRM ও Culture formal measure-এর সাথে behavior shape করে—dashboard alone execution নয়।"],
        mechanism: [
          { label: "Strategy Formulation", text: "What to do এবং why." },
          { label: "Management Control", text: "Managers অন্যদের influence করে resources effectively/efficiently use করে strategy implement করায়." },
          { label: "Task Control", text: "Specific task সঠিকভাবে execute করা." },
          { label: "Control Cycle", text: "Plan → Budget → Measure → Analyze → Act → Learn." }
        ],
        steps: ["Strategic objective স্পষ্ট করো।", "Critical success factor ও causal logic লিখো।", "Owner, target, resource ও measure assign করো।", "Review cadence ও variance threshold দাও।", "Corrective action ও strategy feedback আলাদা করো।"],
        scenario: "Subscription strategy আছে, কিন্তু departments শুধু annual cost budget report করে।",
        analysis: ["Financial control আছে, strategy execution control নেই।", "Retention, activation, service quality ও learning indicators দরকার।", "Department budgets cross-functional customer outcome-এর সাথে link করতে হবে।"],
        improve: "Strategy map, balanced KPIs, cross-functional review ও learning loop বসাও।",
        examTerms: ["Corporate Performance Management", "Management Control", "Task Control", "Strategy Implementation", "Feedback and Learning"],
        examAnswer: "Management Control should bridge strategy formulation and task execution by translating retention strategy into aligned targets, responsibilities, measures, and corrective-action routines.",
        traps: ["CPM = software/dashboard", "Control = punishment", "Task efficiency-কে strategic success বলা"]
      },
      {
        id: "theories-dysfunction", term: "Agency, Motivation, Power & Measurement Dysfunctions", banglaTitle: "Measure মানুষকে কী করায়?",
        solves: "Incentive, information asymmetry, motivation ও politics-এর কারণে measurement system কেন fail করে তা বোঝায়।",
        why: ["Agent ও principal-এর interest আলাদা হতে পারে; monitoring costly এবং incomplete।", "Goal specific হলেও unfair/unattainable হলে motivation কমে। Measure কে define করে সেটিও power—resource allocation ও discourse shape করে।"],
        mechanism: [
          { label: "Agency Theory", text: "Goal conflict ও information asymmetry; monitoring/incentive alignment." },
          { label: "Expectancy–Instrumentality–Valence", text: "Effort→performance সম্ভব? Performance→reward নিশ্চিত? Reward valued?" },
          { label: "Self-Determination", text: "Autonomy, mastery, purpose, recognition intrinsic motivation support করে." },
          { label: "Dysfunctions", text: "Tunnel Vision, Gaming, Short-termism, Suboptimization, Rigidity." },
          { label: "Power", text: "Metric definition/data interpretation authority ও budget influence করে." }
        ],
        steps: ["Desired behavior ও actor incentives map করো।", "Controllability/information gap দেখো।", "Metric gaming path imagine করো।", "Quantitative + qualitative এবং short + long-term balance করো।", "KPI governance/audit/review design করো।"],
        scenario: "Sales bonus শুধু revenue-তে; reps heavy discount ও unsuitable contracts দেয়।",
        analysis: ["Agency alignment incomplete।", "Gaming ও short-termism।", "Local revenue optimization overall margin/churn ক্ষতি = suboptimization।", "Margin, quality, retention ও conduct guardrails দরকার।"],
        improve: "Balanced team/outcome metrics, clawback, audit ও coaching যোগ করো; bonus-এর সাথে stretch goals tightly link কোরো না।",
        examTerms: ["Agency Problem", "Information Asymmetry", "Expectancy", "Instrumentality", "Valence", "Tunnel Vision", "Gaming", "Suboptimization", "Short-termism"],
        examAnswer: "The revenue-only incentive creates gaming, short-termism, and suboptimization. The firm should balance revenue with margin, retention, customer fit, and ethical-conduct measures.",
        traps: ["More metrics = automatically better", "Money সবাইকে একইভাবে motivate করে", "Politics ignore করা"]
      },
      {
        id: "statements", term: "Financial Statements", banglaTitle: "Profit, position ও cash—তিনটি আলাদা গল্প",
        solves: "Company profitable হলেও cash crisis কেন, investment P&L-এ কীভাবে আসে, এবং financial position কী তা বোঝায়।",
        why: ["P&L period performance; Balance Sheet point-in-time stocks; Cash Flow actual cash movement।", "Accounting timing-এর কারণে revenue/expense এবং cash flow একই সময়ে নাও হতে পারে।"],
        mechanism: [
          { label: "Profit & Loss Statement", text: "Revenue − COGS/expenses → EBITDA → EBIT → EBT → Net Income over a period." },
          { label: "Balance Sheet", text: "Assets = Liabilities + Equity at a date; current/non-current classification." },
          { label: "Cash Flow Statement", text: "Operating, Investing, Financing cash flows over a period." },
          { label: "Link", text: "Net income retained equity-তে যায়; non-cash depreciation P&L affect করে; asset/debt changes cash flow explain করে." }
        ],
        steps: ["Period/date এবং unit check করো।", "Profitability P&L থেকে, solvency BS থেকে, cash generation CF থেকে নাও।", "Major non-cash/timing difference identify করো।", "Statements cross-check করো।", "Strategy-related interpretation দাও।"],
        scenario: "Wholesaler profit বাড়ায়, কিন্তু receivable ও inventory দ্রুত বাড়ায়; suppliers pay করতে কষ্ট হয়।",
        analysis: ["Revenue recognition profit বাড়ায়, cash collect হয়নি।", "A/R ও inventory current assets-এ আটকা।", "Operating cash flow দুর্বল।", "Working capital management issue।"],
        improve: "Credit terms, collection, inventory planning ও cash forecast improve করো—sales growth alone optimize কোরো না।",
        examTerms: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Operating Cash Flow", "Working Capital", "Non-cash Expense"],
        examAnswer: "The firm is profitable but cash-constrained because growth is absorbed by receivables and inventory. The Cash Flow Statement and working-capital ratios are therefore more informative than Net Income alone.",
        traps: ["Profit = cash", "Loan receipt = revenue", "Equipment purchase পুরো P&L expense", "Stock ও flow measure mix করা"]
      },
      {
        id: "ratios", term: "Financial Ratios & Cash Conversion Cycle", banglaTitle: "Number থেকে diagnosis",
        solves: "Profitability, liquidity, efficiency ও leverage compare/interpret করে।",
        why: ["Absolute number scale effect hide করে; ratio comparison সাহায্য করে। কিন্তু trend, benchmark ও business model ছাড়া ratio meaningless হতে পারে।", "ROE leverage বাড়লে artificialভাবে improve করতে পারে; low inventory days stockout তৈরি করতে পারে—interpretation দরকার।"],
        mechanism: [
          { label: "Profitability", text: "Gross Margin, EBITDA Margin, EBIT Margin, Net Margin, ROA, ROE, ROCE." },
          { label: "Liquidity", text: "Current Ratio, Quick Ratio, Operating Cash Flow Ratio." },
          { label: "Efficiency", text: "Asset/Inventory/Receivable/Payable Turnover; DSO, DIO, DPO." },
          { label: "Leverage", text: "Debt-to-Equity, Equity Ratio, Interest Coverage, DSCR." },
          { label: "CCC", text: "DIO + DSO − DPO = cash operations-এ net কতদিন আটকে." }
        ],
        steps: ["Question family identify করো: return, liquidity, use, risk।", "Formula লিখে consistent period/average balance ব্যবহার করো।", "Direction calculate করো।", "Past/peer/target benchmark করো।", "Business mechanism ও trade-off explain করো।"],
        scenario: "DSO 45 থেকে 70 days, DIO 30 থেকে 50, DPO 40 অপরিবর্তিত।",
        analysis: ["CCC আগে 35, এখন 80 days।", "Cash আরও 45 days tied up।", "Collection ও inventory issue; liquidity pressure বাড়ে।", "DPO বাড়ানো supplier relation ক্ষতি করতে পারে।"],
        improve: "Credit quality/collection, demand planning ও inventory segmentation improve করো; শুধু supplier payment delay নয়।",
        examTerms: ["Profitability", "Liquidity", "Efficiency", "Leverage", "Days Sales Outstanding", "Days Inventory Outstanding", "Days Payable Outstanding", "Cash Conversion Cycle"],
        examAnswer: "The Cash Conversion Cycle increased from 35 to 80 days, indicating that substantially more cash is tied up in operations because both receivables collection and inventory holding deteriorated.",
        traps: ["Higher সব ratio better", "ROE leverage effect ignore", "Average balance না ব্যবহার", "Days ও turnover direction গুলিয়ে ফেলা"]
      },
      {
        id: "npv", term: "Time Value of Money & Net Present Value (NPV)", banglaTitle: "Future cash আজ কত value?",
        solves: "Investment, acquisition বা long-term project expected cash flows cost of capital-এর তুলনায় value add করে কি না বিচার করে।",
        why: ["আজকের euro future euro-এর চেয়ে valuable—opportunity cost, risk, inflation ও preference-এর কারণে।", "NPV সব cash flow common present basis-এ এনে investment value দেখায়।"],
        mechanism: [
          { label: "Future Value", text: "FV = PV × (1 + i)^n" },
          { label: "Present Value", text: "PV = FV / (1 + i)^n" },
          { label: "Effective Annual Rate", text: "EAR = (1 + nominal rate / m)^m − 1; compounding frequency-কে comparable annual rate-এ আনে." },
          { label: "Ordinary Annuity", text: "Equal periodic cash flows: PV = PMT × [1 − (1 + i)^−n] / i; FV = PMT × [(1 + i)^n − 1] / i." },
          { label: "Net Present Value", text: "NPV = Σ CFₜ / (1 + r)^t; initial outflow সাধারণত t=0 negative." },
          { label: "Decision Rule", text: "NPV > 0 হলে risk-adjusted alternative-এর তুলনায় financial value add; NPV < 0 হলে destroy." },
          { label: "Sensitivity", text: "Cash flow, horizon, discount rate ও terminal value assumption vary করে result robustness test." }
        ],
        steps: ["Incremental after-tax cash flows estimate করো।", "Quarter/year ও horizon consistent করো।", "Risk-appropriate discount rate justify করো।", "প্রতিটি CF discount করে sum করো।", "Decision rule apply করো।", "Sensitivity, scenario ও strategic option value discuss করো।"],
        scenario: "€10,000 initial investment; years 1–3 cash €3k, €4k, €5k; WACC 10%.",
        analysis: ["PV inflows ≈ €2,727 + €3,306 + €3,757।", "NPV ≈ −€210।", "Financial rule অনুযায়ী reject।", "Small negative result assumptions-sensitive; strategic learning/options আলাদা discuss করা যায়।"],
        improve: "Optimistic single forecast নয়—base/upside/downside scenario ও key driver sensitivity দাও।",
        examTerms: ["Time Value of Money", "Effective Annual Rate", "Ordinary Annuity", "Discount Rate", "Weighted Average Cost of Capital", "Incremental Cash Flow", "Net Present Value", "Sensitivity Analysis"],
        examAnswer: "At a 10% discount rate, the project has a slightly negative NPV and therefore does not create financial value relative to an equally risky alternative. The conclusion remains sensitive to the cash-flow and discount-rate assumptions.",
        traps: ["Revenue-কে cash flow বলা", "Quarterly/annual mix", "Sunk cost include করা", "NPV positive হলেই ethical/strategic fit নিশ্চিত বলা"]
      },
      {
        id: "costs", term: "Cost Types, Standard Costing & Activity-Based Costing", banglaTitle: "Cost কোথা থেকে আসে ঠিকমতো দেখা",
        solves: "Product/customer/unit profitability ভুল allocation-এর কারণে distorted হলে causal cost assignment দেয়।",
        why: ["Direct/indirect assignability; fixed/variable behavior—দুটি আলাদা dimension।", "ABC resource cost activities-এ, তারপর driver দিয়ে cost object-এ দেয়; pricing ও outsourcing decision improve করে।"],
        mechanism: [
          { label: "Direct vs Indirect", text: "Cost object-এ সহজে trace করা যায় কি না." },
          { label: "Fixed vs Variable", text: "Relevant range-এ output-এর সাথে cost বদলায় কি না." },
          { label: "Standard Costing", text: "Expected rate/usage set করে price ও efficiency variance." },
          { label: "Activity-Based Costing", text: "Resource → Activity → Cost Driver → Product/Customer." }
        ],
        steps: ["Cost object define করো।", "Cost pool ও behavior classify করো।", "Causal activity driver choose করো।", "Driver rate calculate করো।", "Usage অনুযায়ী assign করো।", "Pricing/process/outsourcing implication দাও।"],
        scenario: "Support team €300k/year; 15k tickets; enterprise client 500 tickets, SMB 50।",
        analysis: ["Driver rate €20/ticket।", "Enterprise support cost €10k; SMB €1k।", "Revenue-only customer profitability misleading হতে পারে।", "Tiered pricing/self-service investment justify হতে পারে।"],
        improve: "Causal driver ও capacity use review করো; allocation politics transparently govern করো।",
        examTerms: ["Direct Cost", "Indirect Cost", "Fixed Cost", "Variable Cost", "Standard Costing", "Activity-Based Costing", "Cost Driver"],
        examAnswer: "ABC reveals that enterprise clients consume substantially more support activity. This insight can inform tiered pricing, service design, and self-service investment.",
        traps: ["Indirect = fixed ধরে নেওয়া", "Arbitrary driver", "Allocated cost-কে controllable cost বলা"]
      },
      {
        id: "budget-responsibility", term: "Planning, Budgeting & Responsibility Centers", banglaTitle: "Target ও accountability সঠিক level-এ",
        solves: "Strategy annual/rolling plan-এ translate এবং manager-কে controllable result-এর জন্য accountable করে।",
        why: ["Annual budget coordination/authorization দেয়, কিন্তু volatile context-এ stale হয়। Rolling forecast responsiveness বাড়ায়।", "Wrong center/metric manager-কে uncontrollable outcome-এর জন্য judge করে এবং gaming বাড়ায়।"],
        mechanism: [
          { label: "Budget Types", text: "Annual, Rolling, Zero-Based, Activity-Based; driver-based planning modern approach." },
          { label: "Cost Center", text: "Cost/budget responsibility; output revenue control limited." },
          { label: "Revenue Center", text: "Sales/revenue responsibility; cost/investment limited." },
          { label: "Profit Center", text: "Revenue + cost/P&L accountability." },
          { label: "Investment Center", text: "Profit + assets/capital; ROI/ROCE/EVA measures." },
          { label: "Controllability Principle", text: "Manager যেটা influence করতে পারে শুধু সেটার জন্য accountability." }
        ],
        steps: ["Strategy driver identify করো।", "Environment volatility অনুযায়ী budget approach বেছে নাও।", "Decision authority অনুযায়ী center type দাও।", "Controllable KPIs/targets set করো।", "Forecast update ও review process দাও।"],
        scenario: "Regional manager price বা capital control করে না, কিন্তু ROI target-এ bonus পায়।",
        analysis: ["Investment Center measure authority-এর সাথে mismatch।", "Controllability violation।", "Relevant profit/cost/service measures বা authority redesign দরকার।"],
        improve: "Authority ও accountability align করো; volatile market-এ rolling forecast ও scenario use করো।",
        examTerms: ["Strategic Planning", "Operating Budget", "Rolling Forecast", "Responsibility Center", "Controllability Principle", "Investment Center"],
        examAnswer: "The ROI target violates the Controllability Principle because the regional manager does not control pricing or invested capital. Measures should match the manager’s actual decision authority.",
        traps: ["Budget = forecast", "Variance = poor manager", "সব unit profit center করা"]
      },
      {
        id: "variance-frameworks", term: "Variance Analysis & Performance Frameworks", banglaTitle: "Result miss কেন হলো এবং কীভাবে balancedভাবে দেখবে",
        solves: "Budget–actual gap-এর cause isolate করে এবং financial result-এর সাথে customer/process/learning evidence balance করে।",
        why: ["Total unfavorable variance action বলে না। Price, volume, mix ও cost আলাদা করলে cause দেখা যায়।", "Financial metrics lagging; BSC leading capabilities ও processes connect করে।"],
        mechanism: [
          { label: "Variance Analysis", text: "Overall profit gap → price, volume, mix, material, labor, overhead; ceteris paribus isolation." },
          { label: "DuPont", text: "Financial return drivers decompose." },
          { label: "Balanced Scorecard", text: "Financial, Customer, Internal Process, Learning & Growth." },
          { label: "Performance Prism", text: "Stakeholders, their wants/contribution, strategy, process, capabilities." },
          { label: "Performance Pyramid / Tableau de Bord", text: "Hierarchical linkage / holistic dashboard." }
        ],
        steps: ["Overall variance quantify করো।", "Causal factors isolate করো।", "Material factors-এ stop করো।", "Context/strategy shift দিয়ে interpret করো।", "Framework select করে leading/lagging causal chain বানাও।", "Corrective action ও learning আলাদা করো।"],
        scenario: "Meta AI investment current expense বাড়ায়, কিন্তু engagement, ad ranking ও developer capability improve করছে।",
        analysis: ["Current financial margin alone incomplete।", "Learning/R&D → internal ranking/infrastructure → customer engagement → future financial result causal chain।", "BSC long-term bet assess করতে suitable।", "NPV scenario financial discipline যোগ করে।"],
        improve: "KPI pile নয়, strategy map এবং causally linked measures বানাও; assumptions review করো।",
        examTerms: ["Price Variance", "Volume Variance", "Mix Variance", "Balanced Scorecard", "Leading Indicator", "Lagging Indicator", "Strategy Map"],
        examAnswer: "The Balanced Scorecard should connect learning investments to improved internal processes, customer outcomes, and ultimately financial performance rather than evaluating the AI investment through current profit alone.",
        traps: ["সব variance manager fault", "BSC চার perspective-এ random KPI", "Leading indicator-কে outcome proof বলা"]
      }
    ],
    synthesis: [
      { situation: "Profit আছে, cash নেই", lead: "Financial Statements + CCC", support: "Variance", reason: "Working-capital mechanism দেখায়।" },
      { situation: "Long-term investment/moonshot", lead: "NPV + Scenarios", support: "Balanced Scorecard", reason: "Financial value ও leading evidence combine করে।" },
      { situation: "Target wrong behavior আনছে", lead: "Measurement Dysfunctions", support: "Motivation + Ethics", reason: "Behavioral cause ও redesign দেয়।" }
    ],
    fastRevision: ["CPM broad system; Management Control bridge", "Profit ≠ Cash", "CCC = DIO + DSO − DPO", "EAR makes compounding rates comparable", "Annuity = equal periodic cash flows", "NPV > 0 adds risk-adjusted financial value", "Match center to controllability", "Variance finds cause, not blame", "BSC = Financial, Customer, Process, Learning"],
    practice: { case: "একটি division revenue target beat করেছে, কিন্তু discount-এর কারণে margin কম, unsuitable customers-এর churn বেশি, receivable collection slow। Manager bonus revenue-only।", prompt: "Financial, behavioral ও control diagnosis দাও।", answer: "Revenue variance favorable হলেও price/mix ও margin unfavorable হতে পারে। DSO/CCC liquidity problem দেখাবে। Revenue-only bonus Agency problem, Gaming, Short-termism ও Suboptimization তৈরি করেছে। Profit/customer-quality/cash/conduct measures balance করতে হবে এবং controllability অনুযায়ী Profit Center accountability দিতে হবে।" },
    remainingIssue: "CPM strategy measure ও steer করে, কিন্তু broad strategy daily teams-এর জন্য focus না দিলে dozens of KPIs ও projects তৈরি হয়। Teams জানে না এই quarter-এ কোন outcome সবচেয়ে জরুরি।",
    nextSlug: "okrs", nextTitle: "OKRs", nextReason: "Objectives and Key Results দিয়ে strategic priorities-কে visible, measurable, aligned quarterly outcomes-এ translate করতে হবে।",
    source: "https://awe-hnu.de/lectures/SPM/26WT/cpm/"
  },
  {
    slug: "okrs", number: "08", title: "OKRs", banglaTitle: "Strategy-কে focused outcome-এ নামানো", color: "red",
    coreQuestion: "এই cycle-এ কী outcome achieve করতে হবে, success-এর evidence কী, এবং teams কীভাবে aligned থেকেও autonomy রাখবে?",
    shortAnswer: "Objective meaningful direction দেয়; 3–5 Key Results measurable outcomes দিয়ে achievement define করে। Public alignment, frequent check-in ও CFRs learning চালায়—কিন্তু OKR নিজে strategy নয়।",
    story: ["একটি company-তে 27টি ‘strategic priority’, 140টি KPI এবং weekly status meeting আছে। সবাই busy, কিন্তু dependency invisible এবং important outcome clear নয়। OKR system scarcity of attention স্বীকার করে।", "OKR-এর strength Focus, Alignment, Tracking ও Stretching। Weakness হয় যখন task-কে Key Result বানানো, compensation tightly link করা, quality guardrail বাদ দেওয়া বা bad strategy-কে শুধু measure করা হয়।"],
    learningGoals: ["Objective, Key Result ও Initiative আলাদা করা", "Strong KR লিখতে পারা", "OKR implementation cycle design", "Focus–Align–Track–Stretch explain", "CFRs দিয়ে continuous performance management", "Goal-setting risks ও safeguards বোঝা", "OKR-কে strategy loop-এর সাথে connect করা"],
    diagnosticQuestions: ["Objective কি meaningful outcome direction?", "KR activity না outcome?", "3–5-এর বেশি কেন?", "Quality/ethics guardrail আছে?", "Top-down, bottom-up ও horizontal alignment আছে?", "Score learning-এর জন্য নাকি punishment-এর জন্য?"],
    models: [
      {
        id: "okr-basics", term: "Objectives and Key Results", banglaTitle: "What এবং measurable evidence",
        solves: "Vague priority ও activity list-কে measurable outcome definition-এ রূপান্তর করে।",
        why: ["Objective motivation/direction দেয়; KR ambiguity কমায়।", "Activity complete হলেও outcome নাও বদলাতে পারে। তাই ‘workshop run’ initiative; ‘activation rate improve’ KR।"],
        mechanism: [
          { label: "Objective", text: "What: qualitative, valuable, action-oriented, tangible, ambitious but realistic." },
          { label: "Key Results", text: "Evidence/how far: 3–5 specific, time-bound, challenging, verifiable outcomes." },
          { label: "Initiatives", text: "Tasks/projects believed to influence KRs; change করা যায়." },
          { label: "Quality Guardrail", text: "Quantity chase-এ quality/ethics ক্ষতি বন্ধ করার paired measure." }
        ],
        steps: ["Strategy থেকে one meaningful outcome priority বেছে Objective লেখো।", "Baseline, target, deadlineসহ 3–5 outcome KR লেখো।", "সব KR complete হলে Objective সত্যিই achieved হবে কি test করো।", "Quantity/quality pair করো।", "Initiative আলাদা list করো; evidence source নিশ্চিত করো।"],
        scenario: "Objective: Improve onboarding. KR: five workshops run।",
        analysis: ["Objective vague কিন্তু direction আছে।", "Workshop activity, outcome নয়।", "Rewrite: ‘Increase seven-day activation from 52% to 72% by Q3 while keeping support complaints below 3%.’"],
        improve: "Outcome, baseline, target, deadline ও guardrail ব্যবহার করো।",
        examTerms: ["Objective", "Key Result", "Initiative", "Outcome Measure", "Baseline", "Target", "Quality Guardrail"],
        examAnswer: "The proposed Key Result measures an activity rather than an outcome. It should be rewritten with a baseline, target, deadline, and quality guardrail that evidence achievement of the Objective.",
        traps: ["Objective-কে metric বানানো", "KR-কে task list", "অনেক KR দিয়ে focus হারানো", "Unmeasurable evidence"]
      },
      {
        id: "implementation", term: "OKR Implementation Cycle", banglaTitle: "Top থেকে bottom, team থেকে team",
        solves: "Organization-level priority teams/individuals-এর aligned work-এ translate করে এবং cadence দেয়।",
        why: ["Pure cascading slow ও top-down; frontline impending change আগে দেখে।", "Visibility dependency, duplication ও misalignment reveal করে; common cycle coordination দেয়।"],
        mechanism: [
          { label: "Step 1 — Objectives", text: "Top priorities; প্রতি tier 3–5; প্রায় অর্ধেক bottom-up হতে পারে." },
          { label: "Step 2 — Key Results", text: "প্রতি Objective 3–5; comprehensive, specific, public." },
          { label: "Step 3 — Cycle", text: "Annual long-term + quarterly supporting cycles." },
          { label: "Step 4 — Tooling & Roles", text: "Visible shared system + OKR Shepherd." },
          { label: "Step 5 — Walk the Talk", text: "Weekly/monthly check-in, score, reflect, revise, repeat." }
        ],
        steps: ["Company priorities সীমিত করো।", "Teams dependency ও contribution map করুক।", "Public OKRs ও owners publish করো।", "Weekly/monthly confidence/progress check করো।", "Quarter-end score + narrative retrospective করো।", "Irrelevant OKR revise/stop করার permission দাও।"],
        scenario: "Company retention Objective product, support ও customer-success teams-কে affect করে।",
        analysis: ["Product activation KR, support resolution KR, success adoption KR দরকার।", "Horizontal dependencies explicit করতে হবে।", "Shared outcome cross-functional cooperation বাড়ায়।"],
        improve: "Mechanical cascade নয়—alignment conversation ও dependency ownership বানাও।",
        examTerms: ["Top-down Alignment", "Bottom-up Alignment", "Horizontal Alignment", "OKR Cycle", "Transparency", "OKR Shepherd"],
        examAnswer: "The retention Objective should be translated through top-down, bottom-up, and horizontal alignment so that product, support, and customer-success teams own complementary Key Results and visible dependencies.",
        traps: ["CEO goal copy-paste", "Private OKRs", "Year-end only review", "Tool কিনলেই implementation"]
      },
      {
        id: "superpowers", term: "OKR Superpowers", banglaTitle: "Focus, Align, Track, Stretch",
        solves: "Too many priorities, silo, invisible progress ও low ambition-এর problem address করে।",
        why: ["Commitment মানে opportunity cost—সবকিছু priority হলে কিছুই priority নয়।", "Tracking score punishment নয়; double down, revise বা stop-এর evidence। Stretch innovation encourage করে, তবে committed outcome-এর সাথে আলাদা রাখতে হয়।"],
        mechanism: [
          { label: "Focus", text: "Few significant priorities ও limited KRs." },
          { label: "Align and Connect", text: "Public top-down + bottom-up + horizontal contribution/dependency." },
          { label: "Track for Accountability", text: "Objective scoring, self-assessment, blockers ও learning." },
          { label: "Stretch for Amazing", text: "Committed OKRs + Aspirational OKRs; uncertainty গ্রহণ." }
        ],
        steps: ["Must-win outcomes choose করো।", "Every OKR-এর strategic link লিখো।", "Dependency ও owner visible করো।", "Progress, confidence, blockers track করো।", "Committed বনাম aspirational label করো।", "Retrospective learning capture করো।"],
        scenario: "Team easy target set করে যাতে bonus নিশ্চিত হয়।",
        analysis: ["Stretch হারিয়েছে এবং compensation coupling sandbagging তৈরি করেছে।", "Committed baseline ও aspirational goal আলাদা করা দরকার।", "Score learning-এর জন্য; bonus broader performance judgment-এ।"],
        improve: "Psychological safety, non-punitive review এবং ambitious but reasoned target range তৈরি করো।",
        examTerms: ["Focus", "Alignment", "Accountability", "Committed OKR", "Aspirational OKR", "Stretch Goal"],
        examAnswer: "Tight coupling between OKR scores and compensation encourages sandbagging. The firm should separate committed and aspirational OKRs and use scoring primarily for learning and accountability.",
        traps: ["Stretch = impossible", "Red score = poor employee", "Alignment = cascade only"]
      },
      {
        id: "scoring", term: "OKR Scoring and Check-ins", banglaTitle: "Color judgement নয়—conversation starter",
        solves: "Progress objectiveভাবে track, relevance reassess এবং end-cycle learning capture করে।",
        why: ["Numeric completion context ছাড়া misleading। A 45% result breakthrough insight হতে পারে; 100% sandbagged target হতে পারে।", "Score-এর সাথে subjective assessment ও narrative দরকার।"],
        mechanism: [
          { label: "Green", text: "71–100%: on target; continue, তবে target ambition review." },
          { label: "Yellow", text: "30–70%: continue বা revise; blockers/assumptions inspect." },
          { label: "Red", text: "0–29%: revise/stop; relevance, resource ও strategy issue examine." },
          { label: "Reflection", text: "Facilitators, roadblocks, surprise, takeaway ও next-cycle change." }
        ],
        steps: ["KR data update করো।", "Completion score calculate করো।", "Confidence ও context narrative যোগ করো।", "Blocker controllable কি না discuss করো।", "Continue/revise/stop decision নাও।", "Learning next formulation/OKR-এ feed করো।"],
        scenario: "Regulation change হওয়ায় originally planned product launch আর relevant নয়; score 20%.",
        analysis: ["Red মানে team failure নয়।", "External assumption invalid হয়েছে।", "Irrelevant OKR stop/revise করাই rational।", "Learning PESTEL ও strategy formation-এ ফিরে যায়।"],
        improve: "Score alongside narrative, confidence trend ও assumption log ব্যবহার করো।",
        examTerms: ["Objective Scoring", "Self-assessment", "Check-in Cadence", "Relevance Review", "Learning Loop"],
        examAnswer: "The red score should trigger a relevance review rather than automatic blame. Because an external assumption changed, the rational response may be to revise or stop the OKR and feed the learning back into strategy.",
        traps: ["Color-কে employee rating", "100% always success", "Changed context ignore করা"]
      },
      {
        id: "cfr", term: "CFRs — Conversations, Feedback, Recognition", banglaTitle: "Human system ছাড়া OKR mechanical",
        solves: "Dashboard আছে কিন্তু coaching, trust, development ও learning নেই—এই gap পূরণ করে।",
        why: ["Frequent conversation obstacle early reveal করে। Bidirectional feedback manager-ও improve করে।", "Recognition person label নয়, actions/results celebrate করে এবং desired culture reinforce করে।"],
        mechanism: [
          { label: "Conversations", text: "Progress, problem-solving, coaching, development ও lightweight review." },
          { label: "Feedback", text: "Bidirectional, networked information: কী improve করব? succeed করতে কী support দরকার?" },
          { label: "Recognition", text: "Specific action/result-এর private/public appreciation, company goals/values-এর সাথে linked." }
        ],
        steps: ["Regular one-to-one/team check-in schedule করো।", "Progress-এর সাথে blocker/support question করো।", "Manager feedback invite করো।", "Learning/development need link করো।", "Goal-supporting action timely recognize করো।"],
        scenario: "Quarter-end dashboard score আছে, কিন্তু employee problem early বলতে ভয় পায়।",
        analysis: ["Transparency data আছে, psychological safety নেই।", "CFRs absent।", "Manager must ask support/feedback এবং early escalation reward করতে হবে।"],
        improve: "High-recognition, low-blame cadence এবং coaching skill build করো।",
        examTerms: ["Conversations", "Feedback", "Recognition", "Continuous Performance Management", "Psychological Safety", "Coaching"],
        examAnswer: "CFRs complement OKRs by turning scores into continuous coaching, bidirectional feedback, and recognition, thereby supporting psychological safety and learning.",
        traps: ["CFR = annual appraisal", "Recognition = employee of month only", "Conversation = status reporting"]
      },
      {
        id: "risks", term: "Goal-Setting Risks", banglaTitle: "Target কখন strategy ও ethics নষ্ট করে",
        solves: "Narrow focus, excessive risk, unethical behavior, inhibited learning, low cooperation ও intrinsic motivation loss prevent করে।",
        why: ["Specific challenging goals performance বাড়াতে পারে, কিন্তু attention narrow করে।", "Complex/uncertain task-এ premature performance target exploration বন্ধ করতে পারে; Learning Goals better হতে পারে।"],
        mechanism: [
          { label: "Narrow Focus", text: "Unmeasured quality/stakeholder issue ignored." },
          { label: "Risk & Ethics", text: "Unmet target corner-cutting ও rationalization বাড়ায়." },
          { label: "Time Horizon", text: "Short-term target long-term capability/investment ক্ষতি করে." },
          { label: "Cooperation", text: "Individual goal silo ও competition বাড়ায়." },
          { label: "Motivation/Learning", text: "Extrinsic control autonomy/intrinsic motivation কমায়; performance goal search বন্ধ করে." }
        ],
        steps: ["Goal comprehensive কি না test করো।", "Difficulty/resources/skill fit দেখো।", "Risk appetite ও ethical guardrails দাও।", "Short + long-term measures balance করো।", "Team vs individual level choose করো।", "Uncertain task হলে Learning Goal ব্যবহার করো।"],
        scenario: "Warehouse ‘zero late shipment’ target পেয়ে unsafe speed ও quality bypass করে।",
        analysis: ["Narrow performance goal safety ignore করে।", "Punitive miss consequence risk-taking বাড়ায়।", "Quality/safety guardrail ও process learning goal দরকার।"],
        improve: "On-time delivery-এর সাথে safety incidents, error rate ও sustainable workload pair করো; root-cause learning review দাও।",
        examTerms: ["Goal Displacement", "Narrow Focus", "Unethical Behavior", "Intrinsic Motivation", "Learning Goal", "Performance Goal"],
        examAnswer: "The narrow delivery target creates goal displacement by encouraging employees to sacrifice safety and quality. Balanced guardrails and learning-oriented goals are required.",
        traps: ["Goal যত hard তত ভালো", "More individual targets cooperation বাড়ায়", "Ethics separate control দিয়ে solve—goal design-ও বদলাতে হবে"]
      },
      {
        id: "strategy-loop", term: "OKRs in the Strategy Loop", banglaTitle: "Direction fixed, route learnable",
        solves: "Planned strategic intent এবং bottom-up emergence balance করে; convergence বা upheaval-এ aligned action দেয়।",
        why: ["Top-line Objective direction দেয়, team-created KRs ও check-ins new information surface করে।", "OKR strategy নয়; bad diagnosis measure করলে failure শুধু আরও visible হবে।"],
        mechanism: [
          { label: "Deliberate Direction", text: "Leadership priorities ও constraints." },
          { label: "Emergent Learning", text: "Bottom-up goals, experiments, progress review ও surprise." },
          { label: "Convergence", text: "Current strategy refine/execute করার OKRs." },
          { label: "Upheaval", text: "New strategic direction দ্রুত align করার transition OKRs." },
          { label: "Feedback", text: "Scores/learning evaluation থেকে formulation-এ ফেরে." }
        ],
        steps: ["Rumelt Kernel দিয়ে strategy quality check করো।", "Strategic choice থেকে few Objectives derive করো।", "Teams outcome KRs co-create করুক।", "Experiments ও assumption evidence review করো।", "Learning অনুযায়ী strategy/OKR revise করো।"],
        scenario: "Company digital transformation চায়, কিন্তু exact customer journey solution uncertain।",
        analysis: ["Objective destination specify করতে পারে।", "Team KRs learning/behavior outcomes measure করবে।", "Initiatives experiment হতে পারে।", "Review emergent knowledge formal strategy-তে feed করবে।"],
        improve: "Outcome ও learning KRs combine করো; central direction ও local autonomy balance করো।",
        examTerms: ["Strategic Alignment", "Deliberate and Emergent Strategy", "Convergence", "Frame-Breaking Change", "Strategy Execution", "Feedback Loop"],
        examAnswer: "OKRs provide deliberate direction while preserving room for emergent learning through bottom-up Key Results, experimentation, and frequent review. They support strategy execution but do not replace strategy formulation.",
        traps: ["OKR = strategy", "Objective directly mission copy", "Every operation-এ OKR", "Learning result formulation-এ না ফেরানো"]
      }
    ],
    synthesis: [
      { situation: "Vague goal/activity list", lead: "Objective + Key Results", support: "Rumelt’s Kernel", reason: "Strategy quality check করে outcome evidence দেয়।" },
      { situation: "Teams misaligned/dependency hidden", lead: "OKR Alignment", support: "7S / CPM", reason: "Visible cross-team contribution ও system fit দেয়।" },
      { situation: "Targets unethical behavior আনছে", lead: "Goal-Setting Risks", support: "CPM Dysfunctions + Ethics", reason: "Metric ও guardrail redesign করে।" }
    ],
    fastRevision: ["Objective = meaningful What", "KR = measurable outcome evidence", "Initiative = task/project", "3–5 Objectives; 3–5 KRs", "FATS = Focus, Align, Track, Stretch", "CFR = Conversations, Feedback, Recognition", "Score for learning, not automatic pay", "OKRs execute strategy; they do not create good strategy"],
    practice: { case: "Sales team-এর Objective ‘Dominate the market’; KRs: 100 calls/day, 10 demos/week, attend 3 fairs. Revenue বাড়লেও margin ও retention পড়ে।", prompt: "OKR rewrite এবং risk control করো।", answer: "Current Objective vague; KRs activities। Rewrite Objective: ‘Win and retain the right mid-market customers profitably.’ KRs: qualified new ARR target, gross-margin floor, 90-day retention target, customer-fit/NPS guardrail। Calls/demos initiatives থাকবে। Revenue-only pressure-এর Gaming/Short-termism CFR review ও balanced incentive দিয়ে mitigate করতে হবে।" },
    remainingIssue: "OKR cycle শেষ হলে score, blockers ও surprises নতুন evidence দেয়। এই evidence দিয়ে external assumptions, resources, strategy ও alignment আবার review করতে হয়—তাই Strategic Management একটি loop।",
    nextSlug: null, nextTitle: null, nextReason: null,
    source: "https://awe-hnu.de/lectures/SPM/26WT/OKRs/"
  }
];

export function getTopicLesson(slug: string) {
  return topicLessons.find((topic) => topic.slug === slug);
}
