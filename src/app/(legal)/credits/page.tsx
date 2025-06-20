import { Container } from '@/components/Container'

export const metadata = {
  title: 'Credits - Exoria',
  description:
    'Learn how credits power your creativity on Exoria - your all-access pass to advanced AI features.',
}

export default function Credits() {
  return (
    <div className="bg-exoria-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1
              className="font-mediumtext-gray-900 font-outfit text-4xl sm:text-5xl"
              style={{ letterSpacing: 'var(--letter-spacing-heading-4xl)' }}
            >
              Credits
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              How Credits Power Your Creativity
            </p>
          </div>

          <div className="prose prose-lg prose-gray mt-16 max-w-none">
            <p className="text-lg leading-8">
              Think of credits as your all-access pass to Exoria&rsquo;s
              advanced AI toolkit. While core features are always available,
              credits unlock the full power of our most sophisticated models for
              generating breathtaking images, videos, and conversations.
            </p>
            <p>
              This system gives you the flexibility to use your favorite
              features as much as you want, whenever inspiration strikes.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              Free for Everyone
            </h2>
            <p>
              Every user gets unlimited access to our essentials, perfect for
              everyday use:
            </p>
            <ul>
              <li>
                <strong>Unlimited Chat</strong>: Enjoy endless conversations
                with any character using our speedy GPT-4.1 Nano model.
              </li>
              <li>
                <strong>Unlimited Flash Images</strong>: Generate as many images
                as you like with the Photon (Flash) model for quick, creative
                visuals.
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              Unlock Your Full Potential with Credits
            </h2>
            <p>
              When you&rsquo;re ready to take your creations to the next level,
              your monthly credits or top-up packs can be used for these premium
              actions.
            </p>
            <p>
              Compare what you can create with our Pro and Max subscription
              plans:
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Standard Chat with Voice (GPT-4.1)
                  </h3>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-500">
                    ~2.5 Credits/msg
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Pro Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~900
                    </div>
                    <div className="text-sm text-gray-600">messages</div>
                    <div className="mt-1 text-xs text-gray-400">
                      2,250 credits
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Max Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~5,000
                    </div>
                    <div className="text-sm text-gray-600">messages</div>
                    <div className="mt-1 text-xs text-gray-400">
                      12,500 credits
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Generate a &ldquo;Kontext&rdquo; Image
                  </h3>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-500">
                    ~4 Credits
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Pro Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~560
                    </div>
                    <div className="text-sm text-gray-600">images</div>
                    <div className="mt-1 text-xs text-gray-400">
                      2,250 credits
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Max Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~3,125
                    </div>
                    <div className="text-sm text-gray-600">images</div>
                    <div className="mt-1 text-xs text-gray-400">
                      12,500 credits
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Generate a &ldquo;GPT Image&rdquo; (Default)
                  </h3>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-500">
                    ~7.5 Credits
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Pro Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~300
                    </div>
                    <div className="text-sm text-gray-600">images</div>
                    <div className="mt-1 text-xs text-gray-400">
                      2,250 credits
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Max Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~1,667
                    </div>
                    <div className="text-sm text-gray-600">images</div>
                    <div className="mt-1 text-xs text-gray-400">
                      12,500 credits
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Generate a &ldquo;Luma&rdquo; Video (5s)
                  </h3>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-500">
                    ~22 Credits
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Pro Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~100
                    </div>
                    <div className="text-sm text-gray-600">videos</div>
                    <div className="mt-1 text-xs text-gray-400">
                      2,250 credits
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Max Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~568
                    </div>
                    <div className="text-sm text-gray-600">videos</div>
                    <div className="mt-1 text-xs text-gray-400">
                      12,500 credits
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Generate a &ldquo;GPT Image&rdquo; (Quality)
                  </h3>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-500">
                    ~30 Credits
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Pro Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~75
                    </div>
                    <div className="text-sm text-gray-600">images</div>
                    <div className="mt-1 text-xs text-gray-400">
                      2,250 credits
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Max Plan
                    </div>
                    <div className="mb-1 text-xl font-bold text-gray-900">
                      ~417
                    </div>
                    <div className="text-sm text-gray-600">images</div>
                    <div className="mt-1 text-xs text-gray-400">
                      12,500 credits
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-md bg-blue-50 p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Costs are estimates. Actual cost depends
                on the complexity of your request, such as image resolution,
                video length, and conversation depth. Standard Chat cost is
                based on an average message exchange with voice enabled.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              Need More Creative Power?
            </h2>
            <p>
              Pro subscribers can purchase extra credit packs at any time to
              keep the ideas flowing without interruption. Unused credits from
              these packs never expire.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
