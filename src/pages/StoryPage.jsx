import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { BLOOD_DONATION_IMAGE } from '../data/siteData'
import Photo from '../components/Photo'

const storyMoments = [
  {
    slug: 'blood-donation',
    image: BLOOD_DONATION_IMAGE,
    alt: 'A Foundation volunteer donating blood',
    label: 'Blood donation',
    title: 'When someone steps forward to donate.',
    text: 'A moment from a Foundation blood donation activity.',
    article: [
      'Blood donation is a practical way to support people who need blood. This photograph captures a Janmanav Kalyan Foundation member donating at a blood bank.',
      'The Foundation has reported that 11 people donated blood at one camp. Each donation is a personal act of care, made possible by people choosing to show up for others.',
      'This story shares the moment visible in the photograph. Further details about the date, location and people supported have not been confirmed.',
    ],
  },
  {
    slug: 'community-meal',
    image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp',
    alt: 'Foundation volunteers preparing food at a community activity',
    label: 'Food distribution',
    title: 'A meal shared with the community.',
    text: 'Volunteers serve a meal together at a community activity.',
    article: [
      'Preparing and sharing a meal takes a collective effort. In this photograph, Foundation volunteers are at work around a community meal.',
      'Food distribution is one of the Foundation’s community activities. Moments like this show volunteers taking part in the hands-on work of preparing food to share.',
      'No event date, location or number of people served has been confirmed for this photograph.',
    ],
  },
  {
    slug: 'community-clean-up',
    image: '/images/instagram/insta3.webp',
    alt: 'Foundation volunteers gathered for a community clean-up',
    label: 'Community action',
    title: 'A cleaner neighbourhood starts together.',
    text: 'Foundation volunteers take part in a community clean-up.',
    article: [
      'A cleaner neighbourhood is a shared responsibility. This photograph shows Foundation volunteers gathered with cleaning tools for a community clean-up activity.',
      'Taking part together turns care for a shared place into practical action. The photograph records one moment of volunteers working towards a cleaner community.',
      'Specific details about the date, location and amount of waste collected have not been confirmed.',
    ],
  },
]

export default function StoryPage() {
  const { slug } = useParams()
  const story = storyMoments.find((item) => item.slug === slug)

  if (!story) {
    return (
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Story not found</p>
          <h1 className="editorial-heading mt-3">This story isn’t available.</h1>
          <Link to="/#stories" className="text-link mt-6"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" /> Back to stories</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="section-y">
      <div className="container-x max-w-5xl">
        <Link to="/#stories" className="text-link mb-8"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" /> Back to stories</Link>
        <header className="mb-8 max-w-3xl sm:mb-10">
          <p className="eyebrow">{story.label}</p>
          <h1 className="editorial-heading mt-3 text-4xl sm:text-5xl lg:text-6xl">{story.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/65 sm:text-xl">{story.text}</p>
        </header>
        <figure className="overflow-hidden rounded-lg border border-[#d9ded8] bg-white shadow-soft">
          <div className="aspect-[4/3] max-h-[620px] sm:aspect-[16/9]">
            <Photo src={story.image} alt={story.alt} eager />
          </div>
          <figcaption className="px-4 py-3 text-sm text-ink/60 sm:px-6">{story.alt}</figcaption>
        </figure>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink/75 sm:mt-10 sm:text-lg">
          {story.article.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </article>
  )
}
