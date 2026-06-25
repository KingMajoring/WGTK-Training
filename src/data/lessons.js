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
    title: 'Welcome & Introductions',
    subtitle: 'Setting the tone for the next two weeks',
    category: 'Foundation',
    duration: '30 min',
    xp: 80,
    icon: '👋',
    trainerNotes: [
      'BEFORE YOU START — Offer tea/coffee, ask if travel was okay, make sure they\'re comfortable. Let them settle before jumping in.',
      'Keep the energy warm and relaxed — this sets the tone for everything that follows.',
      'Don\'t rush. If they\'re still chatting or settling in, let it happen. Tense people don\'t learn.',
      'TWO TRUTHS AND A LIE — Trainer goes first. Share: your name, your role, what you do day-to-day, how long you\'ve been at WGTK, and one surprising fact about yourself. This breaks the awkwardness instantly.',
      'When they share their goal, write it down visibly. It tells them you\'re listening and you\'ll hold them to it.',
    ],
    cheatSheet: [
      { label: 'Format', value: 'Informal, interactive, conversation-based' },
      { label: 'Who delivers', value: 'Any trainer, office manager or senior staff' },
      { label: 'Materials', value: 'Training rota, names/roles list, notepad' },
      { label: 'Permission statement', value: 'If you don\'t understand — ask. If you make a mistake — tell us. If you\'re stuck on a call — we help.' },
      { label: 'Week 1 focus', value: 'Training sessions, shadowing, roleplays' },
      { label: 'Week 2 focus', value: 'Supported live calls' },
    ],
    content: [
      {
        type: 'activity',
        heading: 'Two Truths and a Lie',
        instruction: 'Each person says 3 things about themselves — 2 true, 1 a lie. Everyone else guesses which is the lie.',
        trainerFirst: 'Trainer goes first. Share: your name, your role, what you do day-to-day, how long you\'ve been at WGTK, and one surprising fact.',
        tip: 'This kills the new starter awkwardness instantly. Don\'t skip it.',
      },
      {
        type: 'two-col',
        heading: 'The Next Two Weeks',
        left: {
          label: 'Week 1',
          points: ['Classroom training sessions', 'Shadowing calls', 'Roleplays & practice'],
        },
        right: {
          label: 'Week 2',
          points: ['Supported live calls', 'Real jobs, real customers', 'We\'re right there with you'],
        },
      },
      {
        type: 'keypoints',
        heading: 'What We Promise You',
        points: [
          'You will not be thrown in blind',
          'You will make mistakes — and that\'s normal',
          'If you\'re stuck on a call, we help',
        ],
      },
      {
        type: 'big-question',
        question: 'What\'s one thing you\'re hoping to get good at in this job?',
        note: 'Write their answers down — it makes them feel heard.',
      },
    ],
    quiz: [],
  },
];

export const categories = [...new Set(lessons.map(l => l.category))];

export const getLessonById = (id) => lessons.find(l => l.id === parseInt(id));
