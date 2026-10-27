import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from './Photo'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-white py-10 sm:py-14 lg:py-9 xl:py-10">
      <div className="container-x grid items-center gap-9 lg:min-h-[680px] lg:grid-cols-[.78fr_1.22fr] lg:gap-12">
        <div className="max-w-[590px] lg:pb-4">
          <div className="flex items-center gap-5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#24963d]"><span className="h-px w-14 bg-[#24963d]" /> Our causes</div>
          <h1 id="hero-title" style={{ fontFamily: 'Georgia, Times New Roman, serif' }} className="mt-8 text-5xl font-semibold leading-[.98] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl xl:text-[5.15rem]">
            Serving Humanity,<br />Creating Hope
          </h1>
          <p style={{ fontFamily: 'Georgia, Times New Roman, serif' }} className="mt-8 max-w-[540px] text-xl leading-[1.45] text-ink sm:text-2xl">
            Supporting communities through clean-up drives, education, food distribution and welfare initiatives.
          </p>
          <Link to="/contact#volunteer" className="btn mt-9 !px-8 !py-3.5 !text-lg">Get Involved <ArrowRight className="h-5 w-5" /></Link>
        </div>
        <div className="overflow-hidden rounded-[2rem] border-[3px] border-[#e9b65d] bg-white sm:rounded-[2.5rem]">
          <div className="aspect-[1.42/1] overflow-hidden rounded-[1.8rem] sm:rounded-[2.3rem]">
            <Photo src="/images/hero/hero1.jpeg" alt="Janmanav Kalyan Foundation volunteers at a clean-up drive" position="center" eager />
          </div>
        </div>
      </div>
    </section>
  )
}
