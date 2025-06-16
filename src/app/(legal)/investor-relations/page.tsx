import { Container } from '@/components/Container'

export const metadata = {
  title: 'Investor Relations - Exoria',
  description:
    'Investment opportunities and information for Exoria LLC, the future of social AI.',
}

export default function InvestorRelations() {
  return (
    <div className="bg-exoria-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1
              className="font-mediumtext-gray-900 font-outfit text-4xl sm:text-5xl"
              style={{ letterSpacing: 'var(--letter-spacing-heading-4xl)' }}
            >
              Investor Relations
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Join us in building the future of social AI
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Investment Opportunity */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Investment Opportunity
              </h2>
              <p className="mt-4 text-gray-600">
                Exoria LLC is a private company building the first social AI
                platform where humans and AI companions collaborate in real-time
                creative experiences. We&rsquo;re currently seeking strategic
                investment to accelerate growth and product development.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Market Opportunity
                  </h3>
                  <p className="text-sm text-gray-600">
                    The global AI market is projected to reach $1.8 trillion by
                    2030, with social AI representing a rapidly emerging
                    segment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Competitive Advantage
                  </h3>
                  <p className="text-sm text-gray-600">
                    First-mover advantage in multi-user AI collaboration with
                    proprietary spatial audio and real-time creative tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Company Information
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Entity</h3>
                  <p className="text-sm text-gray-600">
                    Exoria LLC
                    <br />
                    5900 Balcones Drive Suite 100
                    <br />
                    Austin, TX 78731
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Business Model
                  </h3>
                  <p className="text-sm text-gray-600">
                    Credit-based SaaS with freemium tiers, targeting creators,
                    educators, and enterprises.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Stage</h3>
                  <p className="text-sm text-gray-600">
                    Early-stage company with working product in TestFlight beta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-12">
            <h2 className="text-center text-2xl font-semibold text-gray-900">
              Key Highlights
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">Multi-AI</div>
                <div className="text-sm text-gray-600">
                  Platform supporting multiple AI providers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">
                  Real-time
                </div>
                <div className="text-sm text-gray-600">
                  Collaborative creation with live sync
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">Social</div>
                <div className="text-sm text-gray-600">
                  First truly social AI experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">
                  Mobile-first
                </div>
                <div className="text-sm text-gray-600">
                  Native iOS app with spatial audio
                </div>
              </div>
            </div>
          </div>

          {/* Investment Contact */}
          <div className="mt-12">
            <div className="rounded-2xl border border-gray-200 bg-exoria-white p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                Investment Inquiries
              </h2>
              <p className="mt-4 text-gray-600">
                For investment opportunities, partnership discussions, or
                detailed financial information, please contact our investment
                team.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:investment@exoria.ai"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:outline-none"
                >
                  Contact Investment Team
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">investment@exoria.ai</p>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 rounded-xl bg-gray-50 p-6">
            <h3 className="text-sm font-semibold text-gray-900">
              Investment Disclaimer
            </h3>
            <p className="mt-2 text-xs text-gray-600">
              This information is provided for informational purposes only and
              does not constitute an offer to sell or a solicitation of an offer
              to buy securities. Any investment in Exoria LLC involves
              substantial risks and potential investors should carefully
              consider all risk factors before making any investment decision.
              Past performance is not indicative of future results. Investing in
              early-stage companies involves a high degree of risk and may
              result in the loss of your entire investment.
            </p>
          </div>

          {/* Forward-Looking Statements */}
          <div className="mt-6 rounded-xl bg-gray-50 p-6">
            <h3 className="text-sm font-semibold text-gray-900">
              Forward-Looking Statements
            </h3>
            <p className="mt-2 text-xs text-gray-600">
              This page contains forward-looking statements regarding
              Exoria&rsquo;s future business prospects, market opportunities,
              and financial projections. These statements are based on current
              expectations and assumptions and are subject to substantial risks
              and uncertainties. Actual results may differ materially from those
              expressed or implied by these forward-looking statements.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
