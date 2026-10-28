import instagramGalleryImages from 'virtual:instagram-gallery-images'

// ============================================================
//  SINGLE SOURCE OF TRUTH — edit this file to update the site.
//  Anything marked PLACEHOLDER must be replaced with verified
//  information from the NGO. Nothing here is invented fact.
// ============================================================

export const ORG = {
  name: 'Janmanav Kalyan Foundation',
  tagline: 'Serving Humanity, Creating Hope',
  hindiTagline: 'सेवा परमो धर्म:', // shown in the supplied design mockup; confirm with the NGO
  mission:
    'Working for a better tomorrow through education, healthcare, food distribution, blood donation and social welfare.',
  logo: '/images/media/jankalyan-logo.png',
}

export const MISSION_CONTENT = {
  title: 'Building a Better Future, Together',
  introduction: 'At Janmanav Kalyan Foundation, our mission is to create a society where every individual has the opportunity to live with dignity, access essential resources, and build a better future.',
  belief: 'We believe that meaningful change begins with small acts of kindness, collective responsibility, and a genuine commitment to helping others. Our aim is to support underserved communities, empower individuals, and create opportunities that bring lasting, positive change to people’s lives.',
  goals: [
    { title: 'Empowering Communities', text: 'We work towards strengthening communities by encouraging participation, promoting awareness, and supporting people in their journey towards a better life.' },
    { title: 'Creating Equal Opportunities', text: 'We believe everyone deserves a fair chance to learn, grow, and succeed, regardless of their background or circumstances.' },
    { title: 'Supporting Those in Need', text: 'We aim to reach individuals and families facing challenges by encouraging compassion, cooperation, and community support.' },
    { title: 'Inspiring Lasting Change', text: 'We strive to build a culture of kindness, social responsibility, and active participation that creates a positive impact for generations to come.' },
  ],
  commitment: 'Our mission goes beyond providing support. It is about creating hope, nurturing potential, and helping people become active participants in their own progress.',
  closing: 'Through community involvement, dedicated efforts, and the support of people who share our vision, Janmanav Kalyan Foundation aspires to contribute to a more inclusive, compassionate, and empowered society.',
  callToAction: 'Together, we can turn compassion into action and make a meaningful difference in people’s lives.',
}

export const SOCIAL = {
  instagram: 'https://www.instagram.com/janmanav_kalyan_foundation/',
  facebook: '#', // PLACEHOLDER — add official Facebook page URL
  youtube: '#', // PLACEHOLDER — add official YouTube channel URL
}

export const CONTACT = {
  address: '',
  phone: '+91 XXXXX XXXXX', // PLACEHOLDER
  email: 'info@example.org', // PLACEHOLDER
}

export const DONATION = {
  upiId: 'janmanavkalyan@sbi',
  upiQr: '/images/media/QR janamanv kalyan .jpeg',
  accountName: 'JANMANAV KALYAN FOUNDATION',
  accountNumber: '20523190247',
  ifsc: 'SBIN0000090',
  bank: 'State Bank Of India',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Causes', to: '/causes' },
  { label: 'Our Work', to: '/work' },
  { label: 'Media', to: '/media' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

// Impact numbers: leave `value: null` until verified. When a number is
// supplied the card counts up to it automatically.
export const IMPACT = [
  { icon: 'Droplet', value: 11, label: 'Blood donors at one reported camp', tone: 'leaf' },
  { icon: 'Heart', value: '5,000+', label: 'People Supported', tone: 'saffron' },
  { icon: 'Users', value: '200+', label: 'Volunteers', tone: 'leaf' },
  { icon: 'CalendarDays', value: '50+', label: 'Community Initiatives', tone: 'saffron' },
]

export const BLOOD_DONATION_IMAGE = '/images/instsgram post/655713653_18098869942784421_5885450048993260738_n..webp'

export const CAUSES = [
  { slug: 'education', icon: 'BookOpen', title: 'Education', text: 'Supporting learning opportunities for children and families.', image: '/images/about/About.png', imageAlt: 'Foundation members and volunteers at a community activity' },
  { slug: 'healthcare', icon: 'Activity', title: 'Healthcare', text: 'Community healthcare support and awareness.', image: '/images/instsgram post/656077685_18059426180691292_4985631946105061619_n..webp', imageAlt: 'Foundation members gathered outside a hospital emergency department' },
  { slug: 'food', icon: 'Soup', title: 'Food Distribution', text: 'Providing food to those in need.', image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp', imageAlt: 'Volunteers serving food at a community activity' },
  { slug: 'blood', icon: 'Droplet', title: 'Blood Donation', text: 'Organizing blood donation camps.', image: BLOOD_DONATION_IMAGE },
  { slug: 'welfare', icon: 'Users', title: 'Community Welfare', text: 'Empowering communities through collective action.', image: '/images/instsgram post/656077685_18059426180691292_4985631946105061619_n..webp' },
  { slug: 'environment', icon: 'Leaf', title: 'Environment', text: 'Supporting a cleaner and greener future.', image: '/images/causes/environment.png' },
]

export const WORK_CATEGORIES = [
  'All', 'Food Distribution', 'Blood Donation', 'Community Events',
  'Volunteer Activities', 'Education', 'Healthcare', 'Social Awareness',
]

// Images in /public/images/instsgram are discovered automatically by Vite.
// Add or remove an image file in that folder, then refresh the site.
const INSTAGRAM_GALLERY_IMAGES = instagramGalleryImages.map((image, index) => ({
  id: `instagram-folder-${index}`,
  category: 'Community Events',
  title: 'Janmanav Kalyan Foundation activity',
  date: '',
  image,
}))

// Keep every card image pointed at an existing Foundation photo. Leave dates
// blank when the activity date has not been verified.
export const WORK = [
  ...INSTAGRAM_GALLERY_IMAGES,
  { id: 'instagram-post-1', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instsgram post/625261739_18045333059713672_8242698759258600782_n..webp' },
  { id: 'instagram-post-2', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instsgram post/655450985_18155250109444012_2279890235362913082_n..webp' },
  { id: 'instagram-post-3', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instsgram post/655713653_18098869942784421_5885450048993260738_n..webp' },
  { id: 'instagram-post-4', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp' },
  { id: 'instagram-post-5', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instsgram post/656077685_18059426180691292_4985631946105061619_n..webp' },
  { id: 'instagram-post-6', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instagram/insta3.webp' },
  { id: 'instagram-post-7', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp' },
  { id: 'instagram-image-3', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instagram/insta3.webp' },
  { id: 'instagram-image-2', category: 'Community Events', title: 'Janmanav Kalyan Foundation activity', date: '', image: '/images/instagram/insta2.webp' },
  {
    id: 'instagram-c-dg5sry3rd',
    category: 'Community Events',
    title: 'View our Instagram post',
    date: '',
    instagramUrl: 'https://www.instagram.com/p/C-dG5Sry3rd/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  },
  { id: 1, category: 'Food Distribution', title: 'Community meal', date: '', image: '/images/hero/hero.jpeg', tall: true },
  { id: 2, category: 'Blood Donation', title: 'Blood donation activity', date: '', image: BLOOD_DONATION_IMAGE },
  { id: 3, category: 'Community Events', title: 'Foundation gathering', date: '', image: '/images/hero/hero01.jpeg' },
  { id: 4, category: 'Community Events', title: 'Community clean-up', date: '', image: '/images/about/About1.png' },
  { id: 5, category: 'Volunteer Activities', title: 'Volunteers at a community activity', date: '', image: '/images/instagram/insta3.webp', tall: true },
  { id: 6, category: 'Healthcare', title: 'Blood donation activity', date: '', image: BLOOD_DONATION_IMAGE },
  { id: 7, category: 'Community Events', title: 'Foundation members together', date: '', image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp' },
  { id: 8, category: 'Community Events', title: 'Community clean-up', date: '', image: '/images/instagram/insta3.webp' },
]

// Only what is visibly printed in the supplied clipping may be added.
export const MEDIA = [
  ...INSTAGRAM_GALLERY_IMAGES.map((item) => ({
    id: `media-${item.id}`,
    image: item.image,
    alt: `Janmanav Kalyan Foundation Instagram update ${item.id.replace('instagram-folder-', '')}`,
    headline: 'Foundation activity update',
  })),
  {
    id: 'clip-1',
    image: '/images/instsgram post/655450985_18155250109444012_2279890235362913082_n..webp',
    alt: 'Newspaper clipping covering a blood donation camp organised by Janmanav Kalyan Foundation',
    headline: 'जनमानव कल्याण फाउंडेशन ने लगाया रक्तदान शिविर, 11 लोगों ने किया रक्तदान', // visible in supplied clipping
  },
  {
    id: 'cause-blood-donation',
    image: '/images/causes/blooddonation.png',
    alt: 'Newspaper coverage of a Janmanav Kalyan Foundation blood donation activity',
    headline: 'Blood donation activity',
  },
  {
    id: 'cause-news-cutting-1',
    image: '/images/causes/newscuting.png',
    alt: 'Newspaper coverage of Janmanav Kalyan Foundation helping save a police officer’s life through blood donation',
    headline: 'Foundation blood-donation support',
  },
  {
    id: 'cause-news-cutting-2',
    image: '/images/causes/newscutting1.png',
    alt: 'Newspaper coverage of Janmanav Kalyan Foundation arranging blood for a woman in need',
    headline: 'Foundation emergency blood support',
  },
]

export const STORIES = [
  { id: 1, title: 'Foundation Activity', text: 'A moment from our community initiatives.', video: '/images/instagram/insta1.mp4', date: '' },
  { id: 2, title: 'Foundation Activity', text: 'A moment from our community initiatives.', video: '/images/instagram/insta2.mp4', poster: '/images/instagram/insta2.webp', date: '' },
  { id: 3, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instagram/insta3.webp', date: '' },
  { id: 4, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instagram/insta4.webp', date: '' },
  { id: 5, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instagram/insta5.webp', date: '' },
  { id: 6, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/625261739_18045333059713672_8242698759258600782_n..webp', date: '' },
  { id: 7, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/655450985_18155250109444012_2279890235362913082_n..webp', date: '' },
  { id: 8, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/655713653_18098869942784421_5885450048993260738_n..webp', date: '' },
  { id: 9, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp', date: '' },
  { id: 10, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp', date: '' },
]

export const VOLUNTEER_PHOTOS = [
  { image: '/images/about/About1.png', alt: 'Foundation members and volunteers at a community clean-up' },
  { image: '/images/hero/hero01.jpeg', alt: 'Foundation members and community volunteers gathered at an event' },
  { image: '/images/hero/hero.jpeg', alt: 'Volunteers serving a community meal' },
]

// Use only posts the NGO has permission to reuse.
export const INSTAGRAM_POSTS = [
  '/images/instagram/insta2.webp',
  '/images/instagram/insta3.webp',
  '/images/instagram/insta4.webp',
  '/images/instagram/insta5.webp',
  '/images/instsgram post/625261739_18045333059713672_8242698759258600782_n..webp',
  '/images/instsgram post/655450985_18155250109444012_2279890235362913082_n..webp',
].map((image, index) => ({
  image,
  alt: `Moment from Janmanav Kalyan Foundation's Instagram, photo ${index + 1}`,
}))
