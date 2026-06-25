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
      'MEET THE TEAM — Print one question sheet per trainee before the session. They must introduce themselves before anyone will answer. Give them 10–15 mins to move around the office.',
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
    title: 'Who Are Our Clients?',
    subtitle: 'Retail, Trade, Insurance & Referral',
    category: 'Foundation',
    duration: '30 min',
    xp: 100,
    icon: '🤝',
    trainerNotes: [
      'This lesson sets the context for everything — who is actually calling us and why it matters.',
      'RETAIL: Make the point about Google Ads spend clearly — every enquiry costs us money to generate. Wasted enquiries are wasted budget.',
      'TRADE: Drop the company names — Manheim, BCA, Fix Auto, Steer, Northgate, Enterprise. These will mean something to some trainees.',
      'TRADE FLEET: The speed point is critical — if the vehicle is off the road, the client isn\'t earning. We are often time-critical for these clients.',
      'INSURANCE: Emphasise the MI reporting angle — local locksmiths can\'t provide this. That\'s part of why they use us.',
      'REFERRAL: Use the RAC example. Some referrals are fully funded, some the client pays — it varies per partnership.',
      'QUIZ: Read out each client example and let the group discuss before revealing the answer.',
    ],
    cheatSheet: [
      { label: 'Retail', value: 'wevegotthekey.co.uk / mycarkeyhero.co.uk — Google Ads driven' },
      { label: 'Trade — Auction', value: 'Manheim, BCA — vehicles in with no keys' },
      { label: 'Trade — Bodyshop', value: 'Fix Auto, Steer — insurance technical work' },
      { label: 'Trade — Fleet', value: 'Northgate, Enterprise — speed is everything' },
      { label: 'Insurance', value: 'Major insurers — one-stop shop, MI reporting' },
      { label: 'Referral', value: 'RAC etc — pass client to us, funded or client pays' },
    ],
    content: [
      {
        type: 'big-question',
        question: 'Who do you think actually calls us — and why?',
      },
      {
        type: 'services',
        heading: 'Retail',
        services: [
          { name: 'wevegotthekey.co.uk', desc: 'Our main consumer website. Customers find us when they search Google — we invest heavily in ads to appear near the top of the results.' },
          { name: 'mycarkeyhero.co.uk', desc: 'A second retail brand targeting the same audience. Two websites, double the chances of capturing the enquiry.' },
          { name: 'Price & ETA Aware', desc: 'Retail customers have usually been shopping around. They want a price and they want to know how quickly we can get there.' },
          { name: 'Often High Stress', desc: 'Many retail calls are roadside — all keys lost, stranded. They\'re not in a good place. How we handle them on the call matters.' },
        ],
      },
      {
        type: 'intro',
        text: 'Every retail enquiry costs us money to generate. Google Ads are expensive. We cannot afford to waste a single call.',
      },
      {
        type: 'services',
        heading: 'Trade — Three Types',
        services: [
          { name: 'Car Auctions', desc: 'Companies like Manheim and BCA receive vehicles with no keys — often repossessed cars. They need keys cut and programmed before the vehicle can be sold.' },
          { name: 'Bodyshops', desc: 'Fix Auto, Steer and others carry out work on behalf of insurers. They bring us in for the technical jobs — lock replacements, key programming — that they can\'t do themselves.' },
          { name: 'Fleet Management', desc: 'Northgate, Enterprise and similar companies manage thousands of vehicles across the UK. Speed is critical — a vehicle off the road is a vehicle not earning. They rely on our nationwide coverage.' },
        ],
      },
      {
        type: 'services',
        heading: 'Insurance',
        services: [
          { name: 'Major UK Insurers', desc: 'We work with some of the UK\'s biggest insurance companies. When their policyholder loses a key, they send the job to us instead of a dealer — we\'re faster and cheaper.' },
          { name: 'One-Stop Shop', desc: 'Rather than managing dozens of local locksmiths across the UK, insurers use us as a single supplier. One relationship, national coverage.' },
          { name: 'MI Reporting', desc: 'Insurers are data-heavy. They need detailed management information on every job — response times, completion rates, costs. We\'ve built our systems around this. A local locksmith can\'t provide it.' },
        ],
      },
      {
        type: 'services',
        heading: 'Referral',
        services: [
          { name: 'Partner Companies', desc: 'Some organisations — like the RAC — know their limits. When a member loses their keys, the RAC can\'t help. But instead of turning them away, they pass the client to us.' },
          { name: 'Funded or Client Pays', desc: 'Depending on the partnership, the referring company may fund all or part of the job. Other times the client pays in full. This varies — always check the job details.' },
        ],
      },
      {
        type: 'big-question',
        question: 'Why does it matter which client type you\'re dealing with?',
      },
      {
        type: 'scenario',
        quote: 'A customer calls having found us online. They\'re stuck in a supermarket car park — all keys lost, baby in the car.',
        answer: 'Retail — high stress, roadside. Speed and reassurance are everything. This is exactly the enquiry our Google Ads spend is generating.',
      },
      {
        type: 'scenario',
        quote: 'A call centre contacts us. A fleet van in Sheffield needs a spare key — driver has one key and the company wants a backup.',
        answer: 'Trade — Fleet (e.g. Northgate, Enterprise). Speed matters — vehicle downtime costs them money. Treat it as urgent.',
      },
      {
        type: 'scenario',
        quote: 'A bodyshop in Bristol calls. A Volkswagen has come in with a damaged door lock — they need us to supply, fit, and program new locks to match the existing key.',
        answer: 'Trade — Bodyshop (e.g. Fix Auto, Steer). We supply and fit the locks, then program the keys. Insurance-related job — they\'re not the end customer, handle professionally.',
      },
      {
        type: 'scenario',
        quote: 'A call is transferred to us from a breakdown company. Their member has locked their keys in the car — they can\'t help but don\'t want to leave them stranded.',
        answer: 'Referral — e.g. RAC. Check whether the job is funded by the referrer or if the customer pays. Treat the customer as retail.',
      },
      {
        type: 'scenario',
        quote: 'A job comes through from an insurer. Their policyholder needs all keys replaced. They want a completion report and cost breakdown within 24 hours.',
        answer: 'Insurance. One-stop shop job — MI reporting is required. They\'re not an ad-hoc customer, this is a managed account.',
      },
      {
        type: 'scenario',
        quote: 'An auction site calls. Six repossessed vehicles have arrived with no keys this week — can we book them all in?',
        answer: 'Trade — Auction (e.g. Manheim, BCA). Batch work, not urgent in the same way as roadside. Co-ordinate efficiently.',
      },
    ],
    quiz: [],
  },
  {
    id: 4,
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
      'GAIN ACCESS DEMO: Show the tools — long rod, airbag/wedge, picks. Demonstrate on a vehicle or door if available. Key points: no damage to bodywork or locks, faster than a dealer, fully insured.',
      'WHAT WE CAN\'T DO: Emphasise this clearly — new BMW and Merc All Keys Lost are not feasible currently. Better to flag early than fail on site.',
      'US VS DEALER: This is a key selling point. Engineers are mobile, same day, cheaper. Customers often go to the dealer first out of habit — we need trainees to confidently explain why WGTK is the better call.',
      'PRICING: Walk through Orbit briefly. Show them where pricing comes from. Reinforce: never quote without all the info — Orbit needs location, make, model, year, and service to generate an accurate price.',
      'GUARANTEE: The 12-month guarantee is a confidence tool — use it when customers hesitate on price.',
      'KEY TYPES DEMO: Pass samples around. Fixed blade — traditional cut key, older vehicles. Transponder — blade with chip inside, must be coded to the immobiliser. Remote types: Flip key (blade folds into remote fob), Fixed remote (one piece, blade + buttons), Dash insert (remote slides into a slot on the dash), Proximity/Smart key (no blade, push-button start, just needs to be near the car).',
      'STEERING LOCKS DEMO: Show the steering lock / ignition barrel housing. VAG group vehicles (VW, Audi, Seat, Skoda) are notorious for this — the electronic steering lock fails and the car won\'t start. We replace the whole barrel housing unit. Show the part and walk through what a failed one looks like vs a new one.',
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
        type: 'activity',
        heading: 'Gain Access',
        instruction: 'How do you think we open a car when the keys are locked inside?',
      },
      {
        type: 'services',
        heading: 'Key Types',
        services: [
          { name: 'Fixed Blade', desc: 'Traditional cut key — no electronics. Older vehicles only. Rare now but still out there.' },
          { name: 'Transponder', desc: 'A blade key with a chip inside. The chip must be coded to the vehicle\'s immobiliser — cutting the blade alone won\'t start the car.' },
          { name: 'Flip Key', desc: 'The blade folds into a remote fob. Press the button and the blade flips out. Very common on European vehicles.' },
          { name: 'Fixed Remote', desc: 'Blade and remote buttons in one solid unit — no folding. Cut the blade and programme the remote separately.' },
          { name: 'Dash Insert', desc: 'A slim key card or fob that slides into a slot in the dashboard. The car reads the fob and allows push-button start.' },
          { name: 'Proximity / Smart Key', desc: 'No blade at all. Just needs to be near the car — push-button start. Most modern vehicles. Also the most complex to programme.' },
        ],
      },
      {
        type: 'services',
        heading: 'Security & Lockset',
        services: [
          { name: 'Ignition Barrel Replacement', desc: 'We replace the ignition barrel when the lock is damaged or all keys are lost and a replacement is needed.' },
          { name: 'Door Barrel Replacement', desc: 'We replace door lock cylinders — often needed when a key breaks inside or the barrel is worn.' },
          { name: 'Steering Lock', desc: 'Very common on VAG group vehicles (VW, Audi, Seat, Skoda) — the electronic steering lock inside the barrel housing fails and the car won\'t start. We replace the whole unit.' },
        ],
      },
      {
        type: 'keypoints',
        heading: 'What We Can\'t Do',
        points: [
          'All Keys Lost on new BMW and Mercedes — these require dealer involvement due to security restrictions',
          'If a job isn\'t feasible, say so early — never promise something and let the engineer find out on arrival',
          'When in doubt, check before confirming — it\'s better to call back than to fail on site',
        ],
      },
      {
        type: 'two-col',
        heading: 'Us vs the Dealer',
        left: {
          label: 'The Dealer',
          points: [
            'You take the car to them',
            'Wait days — sometimes weeks',
            'Often the most expensive option',
            'Fixed location — you need recovery first',
          ],
        },
        right: {
          label: 'WGTK',
          points: [
            'We come to you — wherever you are',
            'Same day, often within hours',
            'Usually significantly cheaper',
            'No recovery needed — we work on-site',
          ],
        },
      },
      {
        type: 'keypoints',
        heading: 'How Pricing Works',
        points: [
          'Prices are generated through Orbit — our own purpose-built CRM system',
          'Orbit takes the location, make, model, year, and service — and produces the price',
          'You can\'t quote without that information — never guess or give a rough figure',
          'Price can vary by area, vehicle complexity, and service type — Orbit accounts for all of this',
        ],
      },
      {
        type: 'intro',
        text: 'Every key we supply comes with a 12-month guarantee — on parts and workmanship. Just like going to the dealer.',
      },
      {
        type: 'keypoints',
        heading: 'The 12-Month Guarantee',
        points: [
          'Covers all keys supplied and all work carried out by WGTK and our panel engineers',
          'If anything goes wrong with the key or the programming within 12 months, we fix it',
          'Use this when customers push back on price — the dealer offers the same guarantee for more money',
          'It\'s a confidence builder: we stand behind every job we do',
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
  {
    id: 5,
    title: 'Gathering the Right Info',
    subtitle: 'Ask the right questions, every time',
    category: 'Sales Skills',
    duration: '30 min',
    xp: 90,
    icon: '🎯',
    trainerNotes: [
      'This lesson directly follows Products & Services — trainees now understand what we offer, now they learn how to get the info right.',
      'Flipcards: let them suggest questions before revealing. Make it competitive.',
      'Walk through each common mistake slowly — ask them why each one matters before moving on.',
      'Phonetic alphabet: get them to practise spelling back a postcode using it before moving on.',
    ],
    cheatSheet: [
      { label: 'Key Type', value: 'How they start the car, blade or fob, flip or fixed, buttons' },
      { label: 'Spare Key', value: 'Any working key that starts the car?' },
      { label: 'Vehicle', value: 'Confirm make, model and year — not just the reg' },
      { label: 'Location', value: 'Full postcode — spell back using phonetic alphabet' },
    ],
    content: [
      {
        type: 'flipcards',
        heading: 'Getting the Key Type Right',
        instruction: 'What questions should we be asking to identify the right key type? Suggest one — trainer will flip the card.',
        cards: [
          { hint: 'Start method', answer: 'How do you start the car — turn a key or push a button?' },
          { hint: 'Blade or fob', answer: 'Is there a physical blade, or is it just a fob?' },
          { hint: 'Flip blade', answer: 'Does the blade fold out of the fob, or is it fixed?' },
          { hint: 'Buttons', answer: 'How many buttons does the key have?' },
        ],
        consequence: 'Get this wrong and the engineer turns up with the wrong parts — wasted visit, unhappy customer.',
      },
      {
        type: 'big-question',
        question: 'Does the client have any working keys?',
      },
      {
        type: 'keypoints',
        heading: 'Spare Key or No Spare?',
        points: [
          'Always ask: "Do you have any other key that starts the car?"',
          'No working key = All Keys Lost — different skillset, different price, harder job',
          'If we quote for a spare and it turns out they have no working key, we may have to re-attend or fail the job',
          'Failing a job means a refund and a wasted engineer visit — always confirm upfront',
        ],
      },
      {
        type: 'big-question',
        question: 'Have we confirmed the vehicle correctly?',
      },
      {
        type: 'keypoints',
        heading: 'Confirm Make, Model & Year',
        points: [
          'Always read the reg back and confirm the make and model out loud',
          'Customers mishear, misread, or sometimes give the wrong reg entirely',
          'Wrong vehicle info = engineer arrives with wrong key blank or can\'t do the job',
          'Ask: "Just to confirm — is that a [make] [model], roughly what year?"',
        ],
      },
      {
        type: 'big-question',
        question: 'Do we have the right location?',
      },
      {
        type: 'keypoints',
        heading: 'Confirm the Full Address',
        points: [
          'Always confirm the full postcode — not just the town',
          'Postcodes can easily be misheard: BR1 and PR1, DE1 and PE1, FY1 and SY1',
          'A wrong postcode could send the engineer miles in the wrong direction',
          'Repeat it back: "So that\'s [full postcode] — can you confirm that for me?"',
          'Use the phonetic alphabet to spell it back if there\'s any doubt',
        ],
      },
      {
        type: 'phonetic',
        heading: 'The Phonetic Alphabet',
      },
    ],
    quiz: [],
  },
  {
    id: 6,
    title: 'What Customers Say',
    subtitle: 'Matching what they say to what they need',
    category: 'Product Knowledge',
    duration: '20 min',
    xp: 90,
    icon: '💬',
    trainerNotes: [
      'This lesson directly follows Products & Services — trainees now know the services, this is about connecting customer language to the right one.',
      'Read each quote out loud. Give the group time to discuss before revealing the answer.',
      'Encourage debate — there\'s often more than one right answer depending on what follow-up questions reveal.',
      'Use the debrief to reinforce: the first thing the customer says is rarely the full picture.',
    ],
    cheatSheet: [],
    content: [
      {
        type: 'big-question',
        question: 'A customer calls. They don\'t know what they need — they just know something\'s wrong. How do we figure out the right service?',
      },
      {
        type: 'scenario',
        quote: '"I\'ve lost my keys — I can\'t find them anywhere."',
        answer: 'All Keys Lost — but ask if they have a spare first. If yes, Spare Key instead.',
      },
      {
        type: 'scenario',
        quote: '"Can you cut me a key? I just want a copy."',
        answer: 'Spare Key — confirm they have a working key to copy from.',
      },
      {
        type: 'scenario',
        quote: '"My key\'s not working — the car won\'t recognise it."',
        answer: 'Could be a dead remote battery, a damaged transponder, or a deprogrammed key. Ask: does it turn in the lock at all?',
      },
      {
        type: 'scenario',
        quote: '"Someone\'s stolen my bag — my car keys were in it."',
        answer: 'Key Deletion (urgent — wipe the stolen key) + All Keys Lost for a new key. Security is the priority.',
      },
      {
        type: 'scenario',
        quote: '"I\'ve locked my keys in the car."',
        answer: 'Gain Access — we open the vehicle damage-free. Ask where the car is and whether it\'s a keyless/push-start car.',
      },
      {
        type: 'scenario',
        quote: '"My key snapped off in the door."',
        answer: 'Broken Key Extraction — we remove the fragment. Then likely a new key cut and coded too.',
      },
      {
        type: 'scenario',
        quote: '"The car just won\'t start — the key goes in but nothing happens."',
        answer: 'Could be ignition barrel failure or steering lock fault (common on VAG group). Ask: does the steering feel locked? Any warning lights?',
      },
      {
        type: 'big-question',
        question: 'What\'s the pattern? What do you always need to ask — no matter what the customer says first?',
      },
    ],
    quiz: [],
  },
  {
    id: 7,
    title: 'Meet the Team',
    subtitle: 'Get to know the people around you',
    category: 'Foundation',
    duration: '20 min',
    xp: 60,
    icon: '🤝',
    trainerNotes: [
      'Print one question sheet per trainee before the session.',
      'Explain the rule clearly before they start: they must introduce themselves fully before anyone will answer a question.',
      'Give them 10–15 minutes to move around the office.',
      'Bring everyone back together at the end — ask: who did you speak to? Did anything surprise you?',
    ],
    cheatSheet: [],
    content: [
      {
        type: 'activity',
        heading: 'Meet the Team',
        instruction: 'You\'ll get a sheet with questions about your new colleagues. Go and find the answers — but you must introduce yourself before anyone answers anything.',
      },
    ],
    quiz: [],
  },
  {
    id: 8,
    title: 'Call Shadowing',
    subtitle: 'What a real call actually sounds like',
    category: 'Foundation',
    duration: '45 min',
    xp: 80,
    icon: '🎧',
    trainerNotes: [
      'Print one observation sheet per trainee before the session.',
      'Put the call on speaker in the room — aim for 2–3 calls of different types (simple, complicated, awkward customer).',
      'Let trainees fill in their sheet silently during the call. Don\'t talk over it.',
      'Don\'t analyse mid-call — let it play out fully, then debrief together.',
      'If a call is short or straightforward, that\'s fine — talk about what was good and what they noticed.',
      'Repeat the debrief slides for each call you listen to.',
    ],
    cheatSheet: [],
    content: [
      {
        type: 'big-question',
        question: 'What do you think a real customer call actually sounds like?',
      },
      {
        type: 'keypoints',
        heading: 'What to Listen Out For',
        points: [
          'How does the handler open the call and introduce WGTK?',
          'Which questions do they ask — and in what order?',
          'How do they handle it when the customer is unclear or gives the wrong info?',
          'When do they identify the service — and how do they explain it?',
        ],
      },
      {
        type: 'keypoints',
        heading: 'What Calls Are Really Like',
        points: [
          'Customers don\'t give information in a logical order',
          'Some calls are 2 minutes, some are 15 — you don\'t always control that',
          'Background noise, bad signal, strong accents — all real things',
          'Customers can be stressed, emotional, or in a rush — and that\'s normal',
        ],
      },
      {
        type: 'keypoints',
        heading: 'What Customers Are Like',
        points: [
          'Stressed — often stuck somewhere, late, or worried',
          'Vague — they don\'t always know the right words for what\'s wrong',
          'Impatient — they want an answer fast, not a form-filling exercise',
          'Occasionally difficult — stay calm, stay professional, move forward',
        ],
      },
      {
        type: 'activity',
        heading: 'Listen In',
        instruction: 'We\'re going to listen to live calls together in the room. Fill in your observation sheet as you listen — we\'ll go through it together after.',
      },
      {
        type: 'big-question',
        question: 'What did the handler do well?',
      },
      {
        type: 'big-question',
        question: 'Was there any information that wasn\'t gathered — or that you\'d have asked differently?',
      },
      {
        type: 'big-question',
        question: 'How did the customer sound — and how did the handler respond to that?',
      },
      {
        type: 'big-question',
        question: 'What\'s one thing you\'d take into your own calls from what you just heard?',
      },
    ],
    quiz: [],
  },
];

export const categories = [...new Set(lessons.map(l => l.category))];

export const getLessonById = (id) => lessons.find(l => l.id === parseInt(id));
