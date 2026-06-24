export const lessons = [
  {
    id: 1,
    title: 'WGTK Business Overview',
    subtitle: 'Who we are & what we do',
    category: 'Foundation',
    duration: '20 min',
    xp: 100,
    icon: '🔑',
    trainerNotes: [
      'Start with energy — WGTK is a fast-growing auto locksmith network, not a traditional locksmith firm.',
      'Emphasise the mobile-first model: engineers go to the customer/branch, not the other way around.',
      'Key stat to hammer home: we beat the dealership on every job — usually by days, sometimes by weeks.',
      'SERMI certification is a big differentiator — mention it whenever compliance comes up.',
    ],
    cheatSheet: [
      { label: 'Founded', value: 'We\'ve Got The Key — Auto Locksmiths' },
      { label: 'Model', value: 'Mobile engineers dispatched nationwide' },
      { label: 'Coverage', value: '365 days/year, Glasgow to Exeter' },
      { label: 'Engineers', value: '30+ vetted, insured, DBS-checked' },
      { label: 'Certification', value: 'SERMI certified' },
      { label: 'Guarantee', value: '12 months on every key supplied' },
    ],
    content: [
      {
        type: 'agenda',
        heading: "Today's Training",
        items: [
          {
            icon: '🗺️',
            title: 'Office Tour',
            desc: 'We\'ll start with a walk around the building — fire exits, facilities, who sits where.',
            note: 'Physical tour — pause here and take the group around the office before continuing.',
          },
          {
            icon: '📋',
            title: 'What Training Looks Like',
            desc: 'A mix of classroom sessions, real scenarios and quizzes. We\'ll go through each module together — no rushing.',
          },
          {
            icon: '⭐',
            title: 'What We Expect From You',
            desc: 'Be present, ask questions, and be honest about what you don\'t know. There are no silly questions here — we\'d rather you ask than guess.',
          },
          {
            icon: '🔑',
            title: 'WGTK Business Overview',
            desc: 'Then we\'ll dive into who we are, what we do, and where we\'ve come from.',
          },
        ],
      },
      {
        type: 'intro',
        text: 'WGTK (We\'ve Got The Key) is a specialist mobile auto locksmith network. We solve key problems on-site, faster and cheaper than main dealers.',
      },
      {
        type: 'timeline',
        heading: 'Our Story',
        events: [
          { year: '2011', title: 'Soter Professional Services', desc: 'The business begins under the Soter brand — handling insurance claims only, panelling all work to sub-contractors.' },
          { year: '2018', title: 'First Office', desc: 'Soter moves into its first office in Norwich as the operation grows.' },
          { year: '2021', title: 'WGTK is Born', desc: 'We employ our first in-house locksmiths to cover areas we struggled to fill, and begin working directly with retail and trade clients. Soter becomes WGTK.' },
          { year: '2021', title: 'Bigger Office', desc: 'Growing fast — we move to a larger office in Norwich to support the expanding team.' },
          { year: '2023', title: 'Norfolk Tower', desc: 'HQ moves to Norfolk Tower — our biggest base yet, built for the next chapter.' },
          { year: '3 Years', title: '35 Engineers Nationwide', desc: 'From a handful of locksmiths to 35 vetted engineers covering the UK within just three years of launching WGTK.' },
          { year: 'Today', title: 'You Joined', desc: "Welcome to the team. You're part of a company that's still growing fast — and the best is still ahead." },
        ],
      },
      {
        type: 'services',
        heading: 'The Core Offer',
        services: [
          {
            name: 'All Keys Lost',
            desc: "We cut and code a brand new key on-site, getting the vehicle moving again. We're able to make keys even without a spare key to work from.",
          },
          {
            name: 'Spare Keys',
            desc: 'A duplicate key cut and programmed to the vehicle — ideal as a backup or for fleet management.',
          },
          {
            name: 'Gain Access',
            desc: 'We open the vehicle damage-free when keys are locked inside, in minutes.',
          },
          {
            name: 'Ignition & Door Barrels',
            desc: 'We replace ignition barrels and door locks where keys are lost or the lock is compromised.',
          },
          {
            name: 'Key Deletion',
            desc: "Lost or stolen keys are wiped from the vehicle's memory so they can never be used to start it again.",
          },
        ],
      },
      {
        type: 'stat-row',
        stats: [
          { value: '365', label: 'Days a year', detail: "We don't control when people lose their keys — so we work around them. Phones are manned 365 days a year, 24 hours a day. No answerphone, no waiting until Monday." },
          { value: '35', label: 'Engineers UK-wide', detail: 'We have 35 employed locksmiths working directly for WGTK, plus a network of 100+ panel and sub-contractor locksmiths across the UK.' },
          { value: '12 Months', label: 'Key guarantee', detail: 'We pride ourselves on the parts and equipment we use. Both WGTK and our panel guarantee all parts and workmanship for 12 months — just like going direct to the dealer.' },
          { value: 'SERMI', label: 'Certified', detail: 'SERMI is a European certification scheme that allows independent locksmiths to access security-sensitive vehicle information — like immobilisers, key programming and anti-theft systems — directly from manufacturers. It balances vehicle cybersecurity with fair access for repair specialists. Very few locksmiths hold this.' },
        ],
      },
    ],
    quiz: [
      {
        question: 'What does WGTK stand for?',
        options: ["We've Got The Key", "We Get The Keywork", "Wholesale Gate & Token Keys", "We've Got The Knowledge"],
        answer: 0,
      },
      {
        question: 'How many days a year does WGTK operate?',
        options: ['Monday–Friday only', '6 days a week', '365 days a year', 'Weekdays + Saturday'],
        answer: 2,
      },
      {
        question: 'What certification sets WGTK apart from regular locksmiths?',
        options: ['ISO 9001', 'SERMI', 'Checkatrade Gold', 'ATA Approved'],
        answer: 1,
      },
      {
        question: 'What guarantee does WGTK offer on every key supplied?',
        options: ['3 months', '6 months', '12 months', 'Lifetime'],
        answer: 2,
      },
    ],
  },
  {
    id: 2,
    title: 'Call Structure & Rapport',
    subtitle: 'Opening calls the right way',
    category: 'Sales Skills',
    duration: '25 min',
    xp: 120,
    icon: '📞',
    trainerNotes: [
      'Role play is essential here — don\'t just talk about it, get them on the phone.',
      'The first 10 seconds of a call sets the whole tone. Energy, pace, and confidence matter.',
      'Trainees often rush through the greeting — slow them down.',
      'Objections are normal — teach them to welcome pushback as engagement, not rejection.',
    ],
    cheatSheet: [
      { label: 'Step 1', value: 'Greet — name, company, offer to help' },
      { label: 'Step 2', value: 'Qualify — what\'s the vehicle, what\'s the situation?' },
      { label: 'Step 3', value: 'Empathise — acknowledge the problem' },
      { label: 'Step 4', value: 'Present — solution + timeframe' },
      { label: 'Step 5', value: 'Close — confirm booking or next step' },
      { label: 'Golden rule', value: 'Listen more than you talk' },
    ],
    content: [
      {
        type: 'intro',
        text: 'A great call isn\'t a script — it\'s a structured conversation. The goal: make the customer feel heard, solve their problem fast, and book the job.',
      },
      {
        type: 'keypoints',
        heading: 'The 5-Step Call Flow',
        points: [
          'GREET — "Good morning, WGTK, [your name] speaking — how can I help?"',
          'QUALIFY — Vehicle make, model, year. What\'s the problem?',
          'EMPATHISE — "I completely understand, that\'s really frustrating..."',
          'PRESENT — "We can have an engineer with you today/tomorrow..."',
          'CLOSE — "Can I take your details to get that booked in for you?"',
        ],
      },
      {
        type: 'keypoints',
        heading: 'Tone Checklist',
        points: [
          'Confident but not pushy',
          'Warm but efficient',
          'Clear — no jargon with customers',
          'Pace yourself — don\'t rush',
        ],
      },
    ],
    quiz: [
      {
        question: 'What is the FIRST thing you should do when a customer calls?',
        options: ['Ask for their vehicle reg', 'Greet them with your name and company', 'Quote a price', 'Ask if they\'ve called anyone else'],
        answer: 1,
      },
      {
        question: 'After qualifying the customer\'s situation, what comes next?',
        options: ['Close the sale', 'Transfer to a manager', 'Empathise with their problem', 'Read out prices'],
        answer: 2,
      },
      {
        question: 'What is the "golden rule" of a good call?',
        options: ['Always upsell', 'Listen more than you talk', 'Keep it under 3 minutes', 'Offer a discount immediately'],
        answer: 1,
      },
    ],
  },
  {
    id: 3,
    title: 'Pricing Basics',
    subtitle: 'Understanding how we quote',
    category: 'Sales Skills',
    duration: '20 min',
    xp: 110,
    icon: '💷',
    trainerNotes: [
      'Never give a price without knowing the vehicle — make and model drive the cost completely.',
      'Average job is around £780 — use this as a reference point, not a fixed price.',
      'Trainees should never apologise for the price. The value is the speed vs. the dealership.',
      'If challenged on price, pivot to: "The dealer quoted you 4 weeks — we\'ll be there tomorrow."',
    ],
    cheatSheet: [
      { label: 'Average job value', value: '~£780' },
      { label: 'Partner rebate', value: '25% back on every job' },
      { label: 'Loyalty bonus', value: '+£25/job when 4+ jobs/month' },
      { label: 'Quote rule', value: 'Always confirm vehicle before pricing' },
      { label: 'Payment terms', value: 'Invoice settled within 30 days' },
      { label: 'Key message', value: 'Speed vs. dealer is the value' },
    ],
    content: [
      {
        type: 'intro',
        text: 'Pricing at WGTK is job-by-job — every vehicle is different. The key is to always confirm the vehicle before quoting, then lead with the value (speed) not the number.',
      },
      {
        type: 'keypoints',
        heading: 'Pricing Rules',
        points: [
          'Never give a price blind — always get make, model, year first',
          'Average job = ~£780 (use as ballpark only)',
          'Quote upfront and transparently — no hidden extras',
          'Partners get 25% back automatically on every job',
          '4+ jobs/month = extra £25 per job loyalty bonus',
        ],
      },
      {
        type: 'stat-row',
        stats: [
          { value: '£780', label: 'Average job' },
          { value: '25%', label: 'Partner rebate' },
          { value: '+£25', label: 'Loyalty bonus/job' },
          { value: '30d', label: 'Payment terms' },
        ],
      },
    ],
    quiz: [
      {
        question: 'What is the average WGTK job value?',
        options: ['~£350', '~£500', '~£780', '~£1,200'],
        answer: 2,
      },
      {
        question: 'What should you ALWAYS do before quoting a price?',
        options: ['Check the weather', 'Confirm the vehicle make, model and year', 'Ask for a credit card', 'Check engineer availability first'],
        answer: 1,
      },
      {
        question: 'How much rebate do Fix Auto partners earn per job?',
        options: ['10%', '15%', '20%', '25%'],
        answer: 3,
      },
      {
        question: 'When does the loyalty bonus kick in?',
        options: ['From job 1', 'After 10 jobs total', '4 or more jobs in a calendar month', 'Only for Gold partners'],
        answer: 2,
      },
    ],
  },
  {
    id: 4,
    title: 'Booking Jobs & Setting Expectations',
    subtitle: 'Confirming jobs the right way',
    category: 'Operations',
    duration: '25 min',
    xp: 120,
    icon: '📋',
    trainerNotes: [
      'A job is only a job when it\'s confirmed in the system — teach this firmly.',
      'SLA: we attend within 48 working hours of instruction (subject to parts).',
      'Setting expectations correctly now prevents complaints later.',
      'Walk through the booking system during this session — don\'t just describe it.',
    ],
    cheatSheet: [
      { label: 'SLA', value: 'On-site within 48 working hours of instruction' },
      { label: 'Info needed', value: 'Vehicle reg, make, model, year, location, contact' },
      { label: 'Channels', value: 'Phone / Portal / Email' },
      { label: 'Confirmation', value: 'Always send written confirmation to customer' },
      { label: 'Parts caveat', value: '"Subject to parts availability"' },
      { label: 'Key message', value: 'Under-promise, over-deliver' },
    ],
    content: [
      {
        type: 'intro',
        text: 'A smooth booking sets the whole job up for success. Get the right info, set realistic expectations, and confirm everything in writing.',
      },
      {
        type: 'keypoints',
        heading: 'Info You Must Capture',
        points: [
          'Vehicle registration number',
          'Make, model and year',
          'Exact location (postcode)',
          'Nature of the problem (lost key / broken / programming)',
          'Customer/branch contact name and number',
          'Any access restrictions at the site',
        ],
      },
      {
        type: 'keypoints',
        heading: 'Setting Expectations',
        points: [
          'SLA: within 48 working hours, subject to parts',
          'Always qualify "subject to parts availability"',
          'Send written confirmation of the booking',
          'Under-promise, over-deliver — if we can do it faster, great',
        ],
      },
    ],
    quiz: [
      {
        question: 'What is WGTK\'s attendance SLA?',
        options: ['Same day, guaranteed', 'Within 48 working hours (subject to parts)', 'Within 1 week', 'Within 72 hours'],
        answer: 1,
      },
      {
        question: 'Which of these is NOT required when booking a job?',
        options: ['Vehicle registration', 'Customer\'s date of birth', 'Exact site postcode', 'Nature of the problem'],
        answer: 1,
      },
      {
        question: 'What should always follow a verbal booking?',
        options: ['A call to the engineer', 'Written confirmation to the customer', 'An invoice', 'A credit check'],
        answer: 1,
      },
    ],
  },
  {
    id: 5,
    title: 'Products & Services Deep Dive',
    subtitle: 'Know every service inside out',
    category: 'Product Knowledge',
    duration: '30 min',
    xp: 150,
    icon: '🔧',
    trainerNotes: [
      'Trainees need to be able to explain every service simply, without jargon.',
      'Use real examples — "your neighbour lost their car keys" type scenarios.',
      'Key deletion is often misunderstood — make sure they get why it matters to insurers.',
      'Damage-free entry is a selling point — customers fear the locksmith will wreck the door.',
    ],
    cheatSheet: [
      { label: 'Key Replacement', value: 'Cut & coded, all makes/models, on-site' },
      { label: 'Key Programming', value: 'Remotes & transponders, no dealer wait' },
      { label: 'Key Deletion', value: 'Lost/stolen keys wiped — peace of mind for insurer' },
      { label: 'Lockset Replacement', value: 'Full lock supply & fitting' },
      { label: 'Damage-Free Entry', value: 'Locked keys cleared in minutes, zero damage' },
      { label: 'Priority Call-Out', value: '365-day response for urgent jobs' },
    ],
    content: [
      {
        type: 'intro',
        text: 'Six services. Every engineer can deliver all of them. Your job is to match the right service to the customer\'s problem — quickly and confidently.',
      },
      {
        type: 'keypoints',
        heading: 'The Six Services',
        points: [
          '01 KEY REPLACEMENT — Lost or broken keys cut & coded on-site, all makes and models.',
          '02 KEY PROGRAMMING — Keys, remotes & transponders programmed at the branch, no dealership wait.',
          '03 KEY DELETION — Lost or stolen keys deleted from the vehicle so they can\'t start it again.',
          '04 LOCKSET REPLACEMENT — Replacement locks & locksets supplied and fitted where keys are lost or compromised.',
          '05 DAMAGE-FREE ENTRY — Locked-in keys and seized locks cleared in minutes, no damage.',
          '06 PRIORITY CALL-OUT — 365-day response for the jobs that can\'t wait.',
        ],
      },
    ],
    quiz: [
      {
        question: 'A customer\'s car was stolen and recovered. The police say the old keys could still work. Which service is most important?',
        options: ['Key Replacement', 'Key Deletion', 'Lockset Replacement', 'Priority Call-Out'],
        answer: 1,
      },
      {
        question: 'A Fix Auto branch has a vehicle with keys locked inside. Which service applies?',
        options: ['Key Programming', 'Lockset Replacement', 'Damage-Free Entry', 'Key Deletion'],
        answer: 2,
      },
      {
        question: 'How many core services does WGTK offer?',
        options: ['3', '4', '5', '6'],
        answer: 3,
      },
      {
        question: 'Key programming handles which of the following?',
        options: ['Cutting a new physical key', 'Wiping old keys from a vehicle', 'Programming remotes & transponders on-site', 'Replacing a broken door lock'],
        answer: 2,
      },
    ],
  },
  {
    id: 6,
    title: 'FAQs & Objections',
    subtitle: 'Handling the hard questions',
    category: 'Sales Skills',
    duration: '25 min',
    xp: 130,
    icon: '💬',
    trainerNotes: [
      'Trainees are often blindsided by objections — role play every one of these.',
      '"Why can\'t the dealer just do it?" is the most common — own the speed answer.',
      'Never badmouth competitors or main dealers — just contrast the facts.',
      '"It\'s too expensive" is usually about value, not price — reframe to speed and convenience.',
    ],
    cheatSheet: [
      { label: '"Why not the dealer?"', value: '"We\'re faster, on-site, and you earn 25% back."' },
      { label: '"It\'s too expensive"', value: '"The dealer quoted 4 weeks — we\'re there tomorrow."' },
      { label: '"Can you guarantee it?"', value: '"12 months on every key we supply."' },
      { label: '"Are you insured?"', value: '"SERMI certified, fully insured, DBS-checked."' },
      { label: '"How long will it take?"', value: '"Within 48 working hours once we have the job."' },
      { label: '"Can you do all cars?"', value: '"All makes and models — that\'s what we do."' },
    ],
    content: [
      {
        type: 'intro',
        text: 'Objections aren\'t a problem — they\'re a sign the customer is engaged. Know the answers cold and you\'ll close more jobs.',
      },
      {
        type: 'keypoints',
        heading: 'Top 6 Objections & Responses',
        points: [
          '"Why not just go to the dealer?" → We\'re faster, on-site, and the branch earns 25% back.',
          '"It\'s too expensive" → What did the dealer quote? We\'re usually £100s less and weeks faster.',
          '"Can you guarantee your work?" → 12 months on every key we supply.',
          '"Are your engineers insured?" → SERMI certified, fully insured, and DBS-checked.',
          '"How long will it take?" → Within 48 working hours of instruction.',
          '"Can you do my make of car?" → All makes and models — that\'s our entire business.',
        ],
      },
    ],
    quiz: [
      {
        question: 'A customer says "I\'ll just use the main dealer." What\'s your best response?',
        options: ['OK, no problem', '"The dealer will likely take weeks — we\'ll be on-site within 48 hours."', '"Dealers are expensive and unreliable."', '"We\'re cheaper, that\'s all I\'ll say."'],
        answer: 1,
      },
      {
        question: 'How long is the WGTK guarantee on every key supplied?',
        options: ['3 months', '6 months', '12 months', '24 months'],
        answer: 2,
      },
      {
        question: 'When a customer says "it\'s too expensive", the best approach is to:',
        options: ['Offer a discount immediately', 'End the call', 'Reframe around speed and the cost of waiting', 'Transfer to a manager'],
        answer: 2,
      },
    ],
  },
  {
    id: 7,
    title: 'Compliance & Boundaries',
    subtitle: 'Staying legal and professional',
    category: 'Compliance',
    duration: '20 min',
    xp: 100,
    icon: '⚖️',
    trainerNotes: [
      'This is non-negotiable territory — treat it seriously even if it feels dry.',
      'SERMI regulation means we can only work on vehicles where we can verify ownership.',
      'If a job feels off, stop and check — trainees must know it\'s OK to say no.',
      'DBS checks and insurance are discussed here — they protect the engineer and the business.',
    ],
    cheatSheet: [
      { label: 'SERMI', value: 'EU regulation for vehicle security reprogramming access' },
      { label: 'Ownership check', value: 'Always verify — V5, insurance doc, or confirmed branch job' },
      { label: 'Red flags', value: 'No proof of ownership, pressure to rush, unusual location' },
      { label: 'DBS', value: 'All engineers DBS-checked before working' },
      { label: 'If unsure', value: 'Stop the job and escalate — never rush compliance' },
      { label: 'Insurance', value: 'All engineers fully insured for every job type' },
    ],
    content: [
      {
        type: 'intro',
        text: 'WGTK operates to the highest compliance standards. Every job must have verified ownership. If something doesn\'t feel right, stop and check.',
      },
      {
        type: 'keypoints',
        heading: 'Compliance Non-Negotiables',
        points: [
          'SERMI certified — legally authorised to access security systems',
          'Always verify the customer is the legitimate owner',
          'Accept V5 logbook, insurance document, or confirmed branch instruction as proof',
          'All engineers are DBS-checked and fully insured',
          'Red flags: no ID, pressure to rush, unusual locations',
          'Escalate if unsure — never rush a compliance decision',
        ],
      },
    ],
    quiz: [
      {
        question: 'What does SERMI certification authorise WGTK to do?',
        options: ['Sell car parts', 'Access vehicle security & reprogramming systems legally', 'Operate in EU countries only', 'Train new engineers'],
        answer: 1,
      },
      {
        question: 'Which document is NOT acceptable as proof of vehicle ownership?',
        options: ['V5 logbook', 'Insurance document', 'A verbal statement from the customer', 'Confirmed branch instruction'],
        answer: 2,
      },
      {
        question: 'What should you do if a job feels suspicious?',
        options: ['Complete it quickly and move on', 'Stop the job and escalate', 'Ask the customer to pay upfront', 'Call the police immediately'],
        answer: 1,
      },
    ],
  },
  {
    id: 8,
    title: 'CRM & Call Logging',
    subtitle: 'Keeping records that work',
    category: 'Operations',
    duration: '20 min',
    xp: 100,
    icon: '🗂️',
    trainerNotes: [
      'No log = no job. This is the discipline that separates good teams from great ones.',
      'Walk through the CRM system live during this session.',
      'Trainees should log during the call, not after — get the habit right from day one.',
      'A well-logged CRM is what lets us follow up, dispute invoices, and track rebates accurately.',
    ],
    cheatSheet: [
      { label: 'Log when', value: 'During the call — not after' },
      { label: 'Must capture', value: 'Vehicle, customer, problem, date, outcome, next step' },
      { label: 'Call outcome', value: 'Booked / Callback / Not interested / Referred' },
      { label: 'Follow-up', value: 'Set a task if no decision made today' },
      { label: 'Golden rule', value: 'If it\'s not in the CRM, it didn\'t happen' },
      { label: 'Disputes', value: 'Good logs = easy to resolve any billing queries' },
    ],
    content: [
      {
        type: 'intro',
        text: 'The CRM is the single source of truth for every job, every call, every rebate. Log accurately, log during the call, and set follow-ups every time.',
      },
      {
        type: 'keypoints',
        heading: 'What to Log on Every Call',
        points: [
          'Customer / branch name and contact number',
          'Vehicle make, model, year and registration',
          'Problem description',
          'Date and time of call',
          'Outcome: Booked / Callback / Not interested',
          'Next action and follow-up date',
        ],
      },
      {
        type: 'keypoints',
        heading: 'The Golden Rules',
        points: [
          'Log during the call — not after',
          'If it\'s not in the CRM, it didn\'t happen',
          'Set a follow-up task whenever the job isn\'t booked immediately',
          'Accurate logs protect you if billing or rebate disputes arise',
        ],
      },
    ],
    quiz: [
      {
        question: 'When should you log a call in the CRM?',
        options: ['End of the day', 'At the end of the week', 'During the call', 'Only if the job is booked'],
        answer: 2,
      },
      {
        question: 'What is the "golden rule" of CRM logging?',
        options: ['Log every Monday morning', 'If it\'s not in the CRM, it didn\'t happen', 'Only managers need to log', 'Log after the engineer confirms attendance'],
        answer: 1,
      },
      {
        question: 'Which of these is NOT a standard call outcome to log?',
        options: ['Booked', 'Callback', 'Engineer dispatched', 'Not interested'],
        answer: 2,
      },
    ],
  },
];

export const categories = [...new Set(lessons.map(l => l.category))];

export const getLessonById = (id) => lessons.find(l => l.id === parseInt(id));
