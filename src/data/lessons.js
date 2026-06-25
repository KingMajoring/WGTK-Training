export const lessons = [
  {
    id: 1,
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
      'TWO TRUTHS AND A LIE — Trainer goes first. Share: your name, your role, what you do day-to-day, how long you\'ve been at WGTK, and one surprising fact about yourself.',
      'FIRST JOB — Share your own first job story too. The funnier or more embarrassing the better — it gets people talking.',
      'BIG QUESTION SLIDE — Write their answers down visibly as they speak. It tells them you\'re listening.',
    ],
    cheatSheet: [],
    content: [
      {
        type: 'activity',
        heading: 'Two Truths and a Lie',
        instruction: 'Each person says 3 things about themselves — 2 true, 1 a lie. Everyone else guesses which is the lie.',
      },
      {
        type: 'activity',
        heading: 'First Job',
        instruction: 'Everyone shares their very first job — the more embarrassing, the better. What was it? How long did you last?',
      },
      {
        type: 'big-question',
        question: 'What\'s one thing you\'re hoping to get good at in this job?',
      },
    ],
    quiz: [],
  },
  {
    id: 2,
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
    id: 3,
    title: 'Products & Services',
    subtitle: 'What we sell and how to talk about it',
    category: 'Product Knowledge',
    duration: '45 min',
    xp: 120,
    icon: '🔧',
    trainerNotes: [
      'Have physical key samples ready before this session — blade keys, transponder keys, remotes, flip keys, and smart/proximity keys.',
      'WARM-UP: Use whiteboard for both opening questions. Encourage trainees to make notes. Let them talk freely — don\'t correct yet, just capture.',
      'Start with the warm-up discussion — let them talk first, then correct and frame it.',
      'When you get to key types, pass the samples around. Let them handle them.',
      'The "Customer Says" table is a great exercise — ask them to guess what the customer actually means before revealing it.',
      'For scenarios, read them out slowly. Give trainees time to think before they answer.',
      'Common mistakes — keep it light. These are things everyone gets wrong at first.',
    ],
    cheatSheet: [
      { label: 'Gain Access', value: 'Open vehicle, no key — damage-free' },
      { label: 'All Keys Lost', value: 'New key cut & coded on-site, no spare needed' },
      { label: 'Spare Key', value: 'Duplicate cut & programmed, any working key' },
      { label: 'Key Deletion', value: 'Wipe lost/stolen keys from vehicle memory' },
      { label: 'Ignition Barrel', value: 'Replace ignition if key lost or barrel damaged' },
      { label: 'Door Barrel', value: 'Replace door lock cylinder' },
    ],
    content: [
      {
        type: 'big-question',
        question: 'Why do you think a customer might call us?',
      },
      {
        type: 'big-question',
        question: 'What might the customer be feeling?',
      },
      {
        type: 'services',
        heading: 'Gain Access',
        services: [
          { name: 'Keys locked inside', desc: 'We open the vehicle damage-free when keys are locked inside — in minutes, no damage to locks or bodywork.' },
          { name: 'Keys broken in lock', desc: 'We extract broken key fragments from ignitions or door barrels without destroying the lock.' },
        ],
      },
      {
        type: 'services',
        heading: 'Replacement Keys',
        services: [
          { name: 'All Keys Lost', desc: 'We cut and programme a brand new key on-site — even with no working key to copy from. Vehicle is back on the road the same day.' },
          { name: 'Spare Key', desc: 'A duplicate key cut and programmed to the vehicle. Ideal as a backup or for fleet management.' },
          { name: 'Key Deletion', desc: 'Lost or stolen keys are wiped from the vehicle\'s memory so they can never start it again. Often combined with All Keys Lost.' },
        ],
      },
      {
        type: 'services',
        heading: 'Security & Lockset',
        services: [
          { name: 'Ignition Barrel Replacement', desc: 'We replace the ignition barrel when the lock is damaged or all keys are lost and a barrel replacement is needed.' },
          { name: 'Door Barrel Replacement', desc: 'We replace door lock cylinders — often needed when a key breaks inside or the barrel is worn.' },
        ],
      },
      {
        type: 'keypoints',
        heading: 'Key Types',
        points: [
          'Blade Key — traditional cut key, older vehicles, no chip',
          'Transponder Key — blade + chip inside, must be coded to vehicle immobiliser',
          'Remote Key — transponder + remote locking buttons combined',
          'Flip / Folding Key — blade folds into a remote fob housing',
          'Smart Key / Proximity Key — no blade, push-button start, must be near vehicle to start',
        ],
      },
      {
        type: 'table',
        heading: 'What the Customer Says vs What They Mean',
        rows: [
          { says: '"I\'ve lost my keys"', means: 'Could be all keys lost, or just one — always ask if they have a spare', ask: '"Do you have any other keys for the vehicle?"' },
          { says: '"Can you cut me a key?"', means: 'They want a spare — but check what they currently have', ask: '"How many keys do you currently have for the car?"' },
          { says: '"My key\'s not working"', means: 'Could be battery, could be damaged transponder, could be deprogrammed', ask: '"Does the key turn in the lock? Does the car recognise it at all?"' },
          { says: '"The key\'s snapped in the door"', means: 'Broken key extraction + possibly a new key too', ask: '"Is any part of the key still in the lock? Can you still get into the car?"' },
          { says: '"Someone\'s nicked my keys"', means: 'Security risk — they likely need key deletion + new key', ask: '"Is the car at risk? Do you want us to wipe the old key from the system?"' },
        ],
      },
      {
        type: 'break',
        heading: 'Short Break',
        duration: '5 mins',
      },
      {
        type: 'activity',
        heading: 'Scenario: What would you do?',
        instruction: 'A customer calls. They say: "I can\'t find my car keys anywhere — I\'ve looked everywhere. I don\'t have a spare." What service do they need, and what questions do you ask first?',
      },
      {
        type: 'activity',
        heading: 'Scenario: Stolen Key',
        instruction: 'A customer calls — their bag was stolen with their car keys inside. The car is parked on the street. What do they need, and in what order?',
      },
      {
        type: 'activity',
        heading: 'Scenario: Broken Key',
        instruction: 'A customer calls — they broke their key in the driver\'s door lock. The other half is still in the lock. What services might they need from us?',
      },
      {
        type: 'activity',
        heading: 'Scenario: Fleet Manager',
        instruction: 'A fleet manager calls. They have a company van — driver left the job last week and kept the key. The van still runs on the old key. What do they need?',
      },
      {
        type: 'activity',
        heading: 'Scenario: Locked Out',
        instruction: 'A customer calls — keys on the seat, car locked, running. What\'s the service? What do you need from them to book it in?',
      },
      {
        type: 'keypoints',
        heading: 'Common Mistakes',
        points: [
          'Assuming "lost keys" always means All Keys Lost — always ask about spares first',
          'Forgetting to mention key deletion when keys are stolen',
          'Calling it a "remote" when it\'s a smart key — customers notice',
          'Not asking what year / make / model — price and feasibility depend on it',
        ],
      },
    ],
    quiz: [
      {
        question: 'A customer has lost ALL their keys with no spare. What service do they need?',
        options: ['Spare Key', 'Gain Access', 'All Keys Lost', 'Key Deletion'],
        answer: 2,
      },
      {
        question: 'What should you always ask when a customer says their keys have been stolen?',
        options: ['What colour is the car?', 'Do they want key deletion to wipe the stolen key?', 'Can they get a spare from the dealer?', 'How old is the vehicle?'],
        answer: 1,
      },
      {
        question: 'A smart key / proximity key has no blade. What does the car use instead to verify it?',
        options: ['A PIN code entered by the driver', 'A radio signal — the key just needs to be near the car', 'The key must be inserted into a slot', 'Manual door lock only'],
        answer: 1,
      },
    ],
  },
];

export const categories = [...new Set(lessons.map(l => l.category))];

export const getLessonById = (id) => lessons.find(l => l.id === parseInt(id));
