import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Gallery } from '@/components/Gallery'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Waitlist } from '@/components/Waitlist'

export default function Home() {
  return (
    <>
      <Waitlist />

      {/* Temporary contact info while Apple verifies */}
      <div className="bg-exoria-canvas-secondary py-8 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-exoria-text">
            <span className="font-semibold">Founder:</span> Ryan Pream
          </p>
          <p className="mt-2 text-lg text-exoria-text">
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:ryan@exoria.ai"
              className="text-exoria-link underline hover:text-exoria-secondary"
            >
              ryan@exoria.ai
            </a>
          </p>
        </div>
      </div>

      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />

      <Gallery />
      <Pricing />
      <Faqs />
    </>
  )
}
