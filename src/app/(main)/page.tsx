import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { StockLogos } from '@/components/StockLogos'
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
      <CallToAction />
      <StockLogos />
      <Faqs />
    </>
  )
}
