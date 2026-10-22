/* ==========================================================================
   STRENGTH GYM - CENTRAL CONTENT FILE
   Everything marked PLACEHOLDER must be replaced with real, verified info.
   ========================================================================== */

export const site = {
  name: 'STRENGTH GYM',
  logo: '/logo/strength-gym-logo.jpg',
  tagline: 'Train harder. Get stronger. Become your best.',
  statement:
    'A strength-first training space built around discipline, coaching and steady progress.',
  // PLACEHOLDER contact details - not real.
  contact: {
    address: 'Your gym address goes here (PLACEHOLDER)',
    phone: '+00 00000 00000 (PLACEHOLDER)',
    email: 'hello@your-domain.example (PLACEHOLDER)',
    hours: [
      { days: 'Monday - Friday', time: 'Add opening hours (PLACEHOLDER)' },
      { days: 'Saturday', time: 'Add opening hours (PLACEHOLDER)' },
      { days: 'Sunday', time: 'Add opening hours (PLACEHOLDER)' },
    ],
  },
  // Leave url empty ('') to hide a social link. Only filled links are shown.
  social: [
    { id: 'instagram', label: 'Instagram', url: '' },
    { id: 'facebook', label: 'Facebook', url: '' },
    { id: 'youtube', label: 'YouTube', url: '' },
  ],
  // Set to a real endpoint (Formspree, Netlify Forms, your API...) to go live.
  // While empty the enquiry form runs in DEMO MODE and sends nothing.
  formEndpoint: '',
  // Google Maps: searches by name + area until the exact street address is set.
  // To pin the exact spot, set mapQuery to the full street address.
  mapQuery: 'Strength Gym, Mumbra, Thane, Maharashtra, India',
  mapArea: 'Mumbra, Thane, Maharashtra',
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'membership', label: 'Membership' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
];

export const images = {
  hero: '/images/hero.jpg',
  about: '/images/about.jpg',
  cta: '/images/cta.jpg',
  before: '/images/before.jpg',
  after: '/images/after.jpg',
};

export const heroHighlights = [
  { icon: 'Dumbbell', title: 'Strength training', text: 'Racks, platforms and free weights' },
  { icon: 'Users', title: 'Expert coaching', text: 'Guidance at every level' },
  { icon: 'Flame', title: 'Community built for progress', text: 'Train beside people who push' },
];

export const values = [
  { icon: 'Target', title: 'Discipline', text: 'Show up when motivation fades. The work is the routine.' },
  { icon: 'Repeat', title: 'Consistency', text: 'Small sessions repeated for months beat one heroic week.' },
  { icon: 'TrendingUp', title: 'Progress', text: 'Track it, earn it, raise the bar and go again.' },
];

// SAMPLE VALUES - replace with real, verifiable numbers or delete an item.
export const stats = [
  { value: 0, suffix: '+', label: 'Members (sample)' },
  { value: 0, suffix: '+', label: 'Coaches (sample)' },
  { value: 0, suffix: '', label: 'Weekly classes (sample)' },
  { value: 0, suffix: '+', label: 'Years open (sample)' },
];

export const programs = [
  { id: 'strength', icon: 'Dumbbell', title: 'Strength Training', image: '/images/strength.jpg',
    text: 'Squat, bench, deadlift and press with structured progression.',
    details: ['Barbell-focused blocks', 'Progressive overload planning', 'Technique coaching on the main lifts'] },
  { id: 'bodybuilding', icon: 'Medal', title: 'Bodybuilding', image: '/images/bodybuilding.jpg',
    text: 'Split routines for size, shape and symmetry.',
    details: ['Body-part split programming', 'Mind-muscle and tempo work', 'Contest-style posing guidance'] },
  { id: 'personal', icon: 'UserCheck', title: 'Personal Training', image: '/images/personal.jpg',
    text: 'One-to-one coaching built around your goals.',
    details: ['Individual assessment', 'Custom programme', 'Regular check-ins and adjustments'] },
  { id: 'fatloss', icon: 'Flame', title: 'Fat Loss & Conditioning', image: '/images/fatloss.jpg',
    text: 'Lift, move and condition to get leaner and fitter.',
    details: ['Strength plus conditioning circuits', 'Sustainable training load', 'Habit and progress tracking'] },
  { id: 'muscle', icon: 'Activity', title: 'Muscle Building', image: '/images/muscle.jpg',
    text: 'Volume, intensity and recovery planned to grow.',
    details: ['Hypertrophy-focused volume', 'Exercise selection guidance', 'Recovery planning'] },
  { id: 'functional', icon: 'Zap', title: 'Functional Fitness', image: '/images/functional.jpg',
    text: 'Strong, mobile and athletic for real life and sport.',
    details: ['Carries, sleds and kettlebells', 'Mobility and stability work', 'Full-body movement patterns'] },
];

// Configurable placeholder amenities - confirm before presenting as fact.
export const features = [
  { icon: 'Dumbbell', title: 'Strength equipment', text: 'Describe your racks, plates, platforms and machines.' },
  { icon: 'LayoutGrid', title: 'Dedicated workout zones', text: 'Describe lifting, conditioning and stretching areas.' },
  { icon: 'ClipboardList', title: 'Structured plans', text: 'Programmes with clear weekly progression.' },
  { icon: 'GraduationCap', title: 'Experienced coaching', text: 'Describe your coaches’ qualifications.' },
  { icon: 'HeartHandshake', title: 'Supportive community', text: 'Describe the culture members join.' },
  { icon: 'Sparkles', title: 'Clean, organised space', text: 'Describe your cleaning and layout standards.' },
];

// DEMONSTRATION profiles - not real employees. Replace before launch.
export const trainers = [
  { name: 'Trainer Name One', role: 'Head Strength Coach', image: '/images/trainer-1.jpg',
    specialties: ['Powerlifting', 'Technique'], bio: 'Demo profile. Replace with a real coach biography and credentials.' },
  { name: 'Trainer Name Two', role: 'Bodybuilding Coach', image: '/images/trainer-2.jpg',
    specialties: ['Hypertrophy', 'Nutrition basics'], bio: 'Demo profile. Replace with a real coach biography and credentials.' },
  { name: 'Trainer Name Three', role: 'Conditioning Coach', image: '/images/trainer-3.jpg',
    specialties: ['Fat loss', 'Functional'], bio: 'Demo profile. Replace with a real coach biography and credentials.' },
];

// PLACEHOLDER prices - set your own. Price is text so you can use any currency.
export const plans = [
  { id: 'Basic', price: '0000', period: '/month', note: 'Placeholder price',
    features: ['Gym floor access', 'Free-weight area', 'Locker access', 'Intro session'] },
  { id: 'Pro', price: '0000', period: '/month', note: 'Placeholder price', featured: true,
    features: ['Everything in Basic', 'Group strength sessions', 'Structured programme', 'Monthly progress check'] },
  { id: 'Elite', price: '0000', period: '/month', note: 'Placeholder price',
    features: ['Everything in Pro', 'Personal training sessions', 'Custom programme', 'Priority coach access'] },
];

// Gallery slots. Add photos with these filenames in public/images.
export const gallery = [
  { src: '/images/gallery-1.jpg', alt: 'Barbell loaded on a lifting platform', label: 'Platform work', span: 'tall' },
  { src: '/images/gallery-2.jpg', alt: 'Athlete performing a heavy lift', label: 'Heavy lifts', span: 'wide' },
  { src: '/images/gallery-3.jpg', alt: 'Dumbbell rack in the gym', label: 'Dumbbell row', span: '' },
  { src: '/images/gallery-4.jpg', alt: 'Conditioning session', label: 'Conditioning', span: '' },
  { src: '/images/gallery-5.jpg', alt: 'Coach guiding a client', label: 'Coaching', span: 'wide' },
  { src: '/images/gallery-6.jpg', alt: 'Chalked hands gripping a bar', label: 'Grip', span: 'tall' },
];

// DEMONSTRATION testimonials - NOT real reviews. Replace with consented, real ones.
export const testimonials = [
  { quote: 'Demo testimonial. Replace this with a real review from a member who agreed to be quoted.', name: 'Sample Member', detail: 'Demo content' },
  { quote: 'Demo testimonial. Keep them short, specific and honest.', name: 'Sample Member', detail: 'Demo content' },
  { quote: 'Demo testimonial. Add the member’s goal or timeframe if they approve it.', name: 'Sample Member', detail: 'Demo content' },
];

// GYMO CHATBOT - preset questions. Edit answers freely. `keys` are words that trigger the answer when typed.
// Answers marked CONFIRM are not verified gym facts: replace them with your real details.
export const gymo = {
  greeting: 'Hi, I am Gymo, the STRENGTH GYM assistant. Pick a question below or type your own.',
  fallback: 'I am not sure about that one yet. Please send us an enquiry and the team will reply.',
  faqs: [
    { q: 'Timing of the gym', keys: ['time', 'timing', 'hours', 'open', 'close'],
      a: 'Opening hours have not been added yet. Please check the Contact section or send an enquiry to confirm the timings.', go: 'contact', goLabel: 'Go to Contact' },
    { q: 'Membership plans', keys: ['member', 'membership', 'plan', 'price', 'fee', 'cost', 'join'],
      a: 'We offer three plans: Basic, Pro and Elite. Prices are not published yet, so send an enquiry for current fees and offers.', go: 'membership', goLabel: 'View plans' },
    { q: 'Gym location', keys: ['where', 'location', 'address', 'map', 'direction', 'mumbra', 'thane'],
      a: 'STRENGTH GYM is in Mumbra, Thane, Maharashtra. Open the map for directions.', go: 'location', goLabel: 'Open map' },
    { q: 'Weight loss program?', keys: ['weight', 'loss', 'fat', 'lean', 'slim', 'diet'],
      a: 'Yes, our Fat Loss & Conditioning program combines strength training with conditioning circuits and progress tracking.', go: 'programs', goLabel: 'See programs' },
    { q: 'Do you have CrossFit?', keys: ['crossfit', 'cross fit', 'functional', 'hiit'],
      a: 'CrossFit-style classes are not listed on our site. We do offer Functional Fitness (carries, sleds, kettlebells, mobility) and conditioning. Ask us in an enquiry about CrossFit-style sessions.', go: 'programs', goLabel: 'See programs' },
    { q: 'Personal training?', keys: ['personal', 'trainer', 'coach', 'pt'],
      a: 'Yes, Personal Training offers one-to-one coaching with an assessment, a custom programme and regular check-ins.', go: 'trainers', goLabel: 'Meet trainers' },
    { q: 'Contact the gym', keys: ['contact', 'phone', 'call', 'email', 'enquiry'],
      a: 'Use the enquiry form in the Contact section and the team will get back to you.', go: 'contact', goLabel: 'Contact us' },
  ],
};
