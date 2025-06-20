import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2
            className="font-outfit text-3xl font-medium text-exoria-white sm:text-4xl"
            style={{ letterSpacing: 'var(--letter-spacing-heading-3xl)' }}
          >
            Start creating today
          </h2>
          <p
            className="mt-4 text-lg text-gray-300"
            style={{ letterSpacing: 'var(--letter-spacing-body-lg)' }}
          >
            Download Exoria and get 100 free credits to start chatting with AI
            characters and creating stunning artwork. Your creative playground
            awaits.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
