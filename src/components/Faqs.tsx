import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do AI assistants in Exoria differ from ChatGPT?',
      answer:
        'Unlike ChatGPT, every AI assistant in Exoria has a unique personality, voice, and appearance. They remember your conversations, can be customized for specific roles, and feel like real characters you can build relationships with over time.',
    },
    {
      question: 'Can I create my own AI assistant?',
      answer:
        'Absolutely! You can create custom AI assistants with unique personalities, backstories, and expertise. Choose their appearance, voice, and traits to make the perfect companion for any task or conversation.',
    },
    {
      question: 'What AI models does Exoria use?',
      answer:
        'Exoria offers multiple AI model tiers from different providers including OpenAI, Anthropic, Google, and Grok. Choose from lightning-fast responses to advanced reasoning based on your needs.',
    },
    {
      question: 'How do voice conversations work?',
      answer:
        'Each AI assistant has their own unique voice and can have real-time conversations with you. Use push-to-talk for quick questions or continuous conversation mode for natural, flowing discussions with spatial audio.',
    },
  ],
  [
    {
      question: 'How does image generation work?',
      answer:
        'Transform ideas into stunning visuals using natural language descriptions. Choose from multiple artistic styles like photorealistic, 3D cartoon, or abstract. Edit existing images with text prompts or create videos from static images.',
    },
    {
      question: 'What are boards and how do I use them?',
      answer:
        'Boards are visual canvases where you can organize text, images, videos, and more. Drag and drop content, resize items, and share with group members. Perfect for mood boards, project planning, or creative collections.',
    },
    {
      question: 'Can I collaborate with friends on Exoria?',
      answer:
        'Yes! Create groups with friends, share custom AI assistants, and collaborate on visual boards. Control permissions and build creative worlds together. It&rsquo;s the first social AI experience.',
    },
    {
      question: 'What devices does Exoria support?',
      answer:
        'Exoria is currently optimized for iOS devices including iPhone and iPad. The app features gesture-based navigation, offline access to conversations, and responsive design for the best mobile experience.',
    },
  ],
  [
    {
      question: 'Is Exoria free to use?',
      answer:
        'Exoria offers a free tier with limited credits to get you started. Premium plans provide more credits, access to advanced AI models, and enhanced features. All new users get 100 free credits to explore the app.',
    },
    {
      question: 'How do credits work?',
      answer:
        'Credits are used for all AI-powered actions in Exoria, like generating images or using advanced chat models. Each action has a different credit cost. Your monthly plan includes credits that reset each billing cycle. Credits from add-on packs never expire.',
    },
    {
      question: 'Do credits roll over to the next month?',
      answer:
        'Credits from your monthly plan do not roll over and will reset at the start of each billing cycle. Credits purchased from a Credit Pack, however, never expire and will roll over until you use them.',
    },
    {
      question: 'Are there any plans for an Android or web version?',
      answer:
        'Yes! An Android version is in active development, and a web-based platform is on our roadmap. We want to make Exoria accessible to everyone, everywhere.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="tracking-tighttext-gray-900 text-3xl font-medium"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@exoria.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3
                      className="font-semiboldtext-gray-900 font-outfit text-lg/6"
                      style={{
                        letterSpacing: 'var(--letter-spacing-heading-lg)',
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
