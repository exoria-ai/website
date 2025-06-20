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

            <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Premium Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Credit Cost
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Pro Plan
                      <br />
                      <span className="text-sm font-medium normal-case">
                        (2,250 credits)
                      </span>
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Max Plan
                      <br />
                      <span className="text-sm font-medium normal-case">
                        (12,500 credits)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      Standard Chat with Voice (GPT-4.1)
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      ~2.5 Credits/msg
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~900 messages
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~5,000 messages
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      Generate a &ldquo;Kontext&rdquo; Image
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      ~4 Credits
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~560 images
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~3,125 images
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      Generate a &ldquo;GPT Image&rdquo; (Default)
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      ~7.5 Credits
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~300 images
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~1,667 images
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      Generate a &ldquo;Luma&rdquo; Video (5s)
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      ~22 Credits
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~100 videos
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~568 videos
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      Generate a &ldquo;GPT Image&rdquo; (Quality)
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      ~30 Credits
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~75 images
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap text-gray-900">
                      ~417 images
                    </td>
                  </tr>
                </tbody>
              </table>
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
