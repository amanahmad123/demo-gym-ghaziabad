export const site = {
  name: 'DEMO GYM',
  shortName: 'DEMO GYM',
  city: 'Ghaziabad',
  state: 'Uttar Pradesh',
  locality: 'Ghaziabad',
  phone: '+91 95288 76007',
  phoneLink: '+919528876007',
  whatsapp: '919528876007',
  email: '', // Add the gym's verified business email before launch.
  address: 'Ghaziabad, Uttar Pradesh, India', // Add the exact street address when confirmed.
  hours: 'Monday – Saturday · 5:00 AM – 10:00 PM · Sunday closed',
  owner: 'Aman Ahmad',
  instagram: '', // Add the gym's official Instagram URL when available.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=gyms+in+Ghaziabad+Uttar+Pradesh',
  canonicalBase: '', // Set this to the real production domain after deployment.
};

export const programs = [
  { n: '01', name: 'Strength & Conditioning', tag: 'BUILD YOUR BASE', desc: 'Progressive strength sessions built around proper form, smart programming and measurable progress.', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85' },
  { n: '02', name: 'Personal Training', tag: 'COACH-LED', desc: 'One-to-one coaching shaped around your goals, experience and schedule.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85' },
  { n: '03', name: 'Functional Fitness', tag: 'MOVE BETTER', desc: 'Build stamina, coordination and real-world strength with purposeful movement.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85' },
  { n: '04', name: 'Cardio & Endurance', tag: 'FIND YOUR PACE', desc: 'Improve your engine with guided conditioning and a plan you can stick to.', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85' },
  { n: '05', name: 'Mobility & Recovery', tag: 'RESET. REPEAT.', desc: 'Support your training with mobility work, stretching and recovery habits.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85' },
  { n: '06', name: 'Group Training', tag: 'BETTER TOGETHER', desc: 'High-energy coached sessions that make showing up easier and more fun.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85' }
];

// Replace sample trainer profiles with the real coaching team before publishing.
export const trainers = [
  { name: 'Alex Morgan', role: 'HEAD STRENGTH COACH', exp: '8 years experience', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=85' },
  { name: 'Jordan Lee', role: 'PERSONAL TRAINER', exp: '6 years experience', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85' },
  { name: 'Sam Rivera', role: 'CONDITIONING COACH', exp: '5 years experience', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85' }
];

// Sample prices: confirm the actual gym rates before publishing.
export const plans = [
  { name: 'Monthly', price: '₹1,999', period: '/ month', desc: 'A focused start to your training journey.', features: ['Full gym access', 'Standard equipment access', 'Fitness floor orientation', 'Locker access'] },
  { name: 'Quarterly', price: '₹4,999', period: '/ 3 months', desc: 'Build consistency and keep momentum.', features: ['Everything in Monthly', 'Goal-setting consultation', '2 group training sessions', 'Progress check-in'], popular: true },
  { name: 'Yearly', price: '₹14,999', period: '/ year', desc: 'Make training part of your lifestyle.', features: ['Everything in Quarterly', 'Priority class booking', 'Monthly progress review', 'Guest pass every quarter'] }
];

export const faqs = [
  ['I am new to the gym. Can I join?', 'Absolutely. Start with an orientation and speak with a coach about a realistic training plan.'],
  ['Can I try the gym before joining?', 'Contact our team on WhatsApp or phone to ask about a trial visit and available timings.'],
  ['Do you offer personal training?', 'Ask our team about personal training options based on your goals and availability.'],
  ['What should I bring for my first workout?', 'Comfortable workout clothes, clean training shoes, a water bottle and a positive mindset.'],
  ['Where is DEMO GYM located?', 'DEMO GYM is a sample gym website based in Ghaziabad, Uttar Pradesh. Contact owner Aman Ahmad for the exact club address and directions.'],
  ['Can I pause my membership?', 'Membership pause policies depend on the selected plan. Please confirm the current terms with our team.']
];
