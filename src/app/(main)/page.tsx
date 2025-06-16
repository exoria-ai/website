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
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />

      <Gallery />
      <Pricing />
      <Faqs />
    </>
  )
}
