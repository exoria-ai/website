import { Container } from '@/components/Container'

export const metadata = {
  title: 'Privacy Policy - Exoria',
  description:
    "Exoria's privacy policy explaining how we collect, use, and protect your information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-exoria-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1
              className="font-mediumtext-gray-900 font-outfit text-4xl sm:text-5xl"
              style={{ letterSpacing: 'var(--letter-spacing-heading-4xl)' }}
            >
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Effective Date: January 15, 2025
            </p>
          </div>

          <div className="prose prose-lg prose-gray mt-16 max-w-none">
            <p className="text-lg leading-8">
              Your privacy is important to Exoria LLC (&ldquo;Exoria,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our Exoria mobile
              application (the &ldquo;App&rdquo;) and related services
              (collectively, the &ldquo;Services&rdquo;). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the Services.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Personal Information You Provide to Us
            </h3>
            <p>
              When you register for an account or use our Services, we may
              collect the following personal information:
            </p>
            <ul>
              <li>
                <strong>Account Information</strong>: Email address, username,
                first name, last name, birth date, gender, phone number
              </li>
              <li>
                <strong>Profile Information</strong>: Profile pictures,
                character profiles, personality traits, backstories, and other
                information you provide when creating AI characters or personal
                profiles
              </li>
              <li>
                <strong>Payment Information</strong>: When you make purchases,
                payment processing is handled by third-party payment processors
                (Apple App Store, RevenueCat). We do not store credit card
                numbers or banking information
              </li>
              <li>
                <strong>Communications</strong>: Information you provide when
                contacting our support team or participating in surveys
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Information Collected Automatically
            </h3>
            <p>
              When you use our Services, we automatically collect certain
              information:
            </p>
            <ul>
              <li>
                <strong>Device Information</strong>: Device type, operating
                system version, unique device identifiers (IDFA), timezone,
                locale, and language settings
              </li>
              <li>
                <strong>Usage Data</strong>: Features used, AI models selected,
                conversation logs, voice recordings, images and videos
                generated, boards created, time spent in the app, and
                interaction patterns
              </li>
              <li>
                <strong>Location Information</strong>: General geographic
                location based on IP address (we do not collect precise GPS
                location)
              </li>
              <li>
                <strong>Analytics Data</strong>: App opens, session duration,
                crashes, performance data, and feature usage statistics
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Content You Create
            </h3>
            <ul>
              <li>
                <strong>Conversations</strong>: Text messages, voice messages,
                and conversations with AI assistants
              </li>
              <li>
                <strong>Generated Content</strong>: Images, videos, and other
                creative content you generate using our AI tools
              </li>
              <li>
                <strong>Boards and Posts</strong>: Content you create and
                organize on boards, including text, images, videos, and other
                media
              </li>
              <li>
                <strong>Voice Data</strong>: Voice recordings when using voice
                chat features or text-to-speech functionality
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              To Provide and Improve Our Services
            </h3>
            <ul>
              <li>Create and manage your account</li>
              <li>Enable AI conversations with personalized assistants</li>
              <li>Generate images, videos, and other creative content</li>
              <li>Provide voice synthesis and speech recognition features</li>
              <li>Sync your data across devices</li>
              <li>Process transactions and manage subscriptions</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              To Personalize Your Experience
            </h3>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Customize AI assistant personalities and voices</li>
              <li>Provide personalized content recommendations</li>
              <li>Maintain conversation context and memories</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              To Communicate With You
            </h3>
            <ul>
              <li>
                Send important notices about your account or changes to our
                Services
              </li>
              <li>Respond to your inquiries and support requests</li>
              <li>
                Send push notifications about group activities (with your
                permission)
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              For Safety and Security
            </h3>
            <ul>
              <li>
                Detect and prevent fraud, abuse, or violations of our Terms of
                Service
              </li>
              <li>
                Protect the rights, property, and safety of Exoria, our users,
                and others
              </li>
              <li>Enforce our Terms of Service and other policies</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              For Analytics and Research
            </h3>
            <ul>
              <li>Understand how users interact with our Services</li>
              <li>Improve our AI models and features</li>
              <li>Conduct research and analysis to enhance user experience</li>
              <li>Monitor and analyze trends and usage patterns</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              3. Legal Basis for Processing (GDPR)
            </h2>
            <p>
              If you are located in the European Economic Area (EEA), United
              Kingdom, or Switzerland, we process your personal data based on
              the following legal grounds:
            </p>
            <ul>
              <li>
                <strong>Consent</strong>: When you have given clear consent for
                specific processing activities
              </li>
              <li>
                <strong>Contract</strong>: When processing is necessary to
                provide the Services you requested
              </li>
              <li>
                <strong>Legal Obligation</strong>: When we must process data to
                comply with applicable laws
              </li>
              <li>
                <strong>Legitimate Interests</strong>: When processing is
                necessary for our legitimate business interests, such as
                improving our Services, provided these interests are not
                overridden by your rights
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              4. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following
              circumstances:
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Service Providers
            </h3>
            <p>
              We work with third-party service providers who assist us in
              operating our Services:
            </p>
            <ul>
              <li>
                <strong>Cloud Infrastructure</strong>: Supabase for database
                hosting and real-time features
              </li>
              <li>
                <strong>Authentication</strong>: Clerk for secure user
                authentication
              </li>
              <li>
                <strong>AI Services</strong>: OpenAI, Anthropic, Google, and
                other AI providers for language models and content generation
                (only conversation content necessary for processing is shared)
              </li>
              <li>
                <strong>Image/Video Generation</strong>: Fal.ai, Black Forest
                Labs, Luma AI, Ideogram, and other providers for creative
                content generation
              </li>
              <li>
                <strong>Payment Processing</strong>: Apple App Store and
                RevenueCat for subscription management
              </li>
              <li>
                <strong>Analytics</strong>: Services to help us understand app
                usage and improve performance
              </li>
              <li>
                <strong>Push Notifications</strong>: Services to deliver
                notifications to your device
              </li>
            </ul>
            <p>
              These providers are contractually obligated to protect your
              information and use it only for the services they provide to us.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Within Organizations/Groups
            </h3>
            <ul>
              <li>
                Content you create within an organization or group may be
                visible to other members based on the permissions set by the
                organization
              </li>
              <li>
                Organization administrators may have access to usage statistics
                and content created within their organization
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Legal Requirements
            </h3>
            <p>
              We may disclose your information if required to do so by law or in
              response to valid legal requests, including:
            </p>
            <ul>
              <li>Court orders or subpoenas</li>
              <li>Government investigations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>To enforce our Terms of Service</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Business Transfers
            </h3>
            <p>
              If Exoria is involved in a merger, acquisition, or sale of assets,
              your information may be transferred as part of that transaction.
              We will notify you of any such change in ownership or control.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <ul>
              <li>Encryption of data in transit using TLS/SSL</li>
              <li>Encryption of sensitive data at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Secure cloud infrastructure with regular backups</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to protect your personal
              information, we cannot guarantee its absolute security.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              provide our Services and fulfill the purposes outlined in this
              Privacy Policy. Specifically:
            </p>
            <ul>
              <li>
                <strong>Account Information</strong>: Retained as long as your
                account is active
              </li>
              <li>
                <strong>Content</strong>: User-generated content is retained
                until you delete it or your account
              </li>
              <li>
                <strong>Conversation History</strong>: Retained to maintain
                context and memories for AI assistants
              </li>
              <li>
                <strong>Analytics Data</strong>: Typically retained for 24
                months
              </li>
              <li>
                <strong>Legal Compliance</strong>: Some data may be retained
                longer if required by law
              </li>
            </ul>
            <p>
              When you delete your account, we will delete or anonymize your
              personal information within 30 days, except where retention is
              necessary for legal obligations or legitimate business purposes.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              7. Your Privacy Rights
            </h2>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Rights for All Users
            </h3>
            <p>Regardless of your location, you have the following rights:</p>
            <ul>
              <li>
                <strong>Access</strong>: Request a copy of the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction</strong>: Request correction of inaccurate or
                incomplete information
              </li>
              <li>
                <strong>Deletion</strong>: Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability</strong>: Receive your data in a structured,
                machine-readable format
              </li>
              <li>
                <strong>Opt-out</strong>: Opt out of certain communications or
                data processing activities
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Additional Rights for EEA, UK, and Swiss Residents
            </h3>
            <p>
              If you are located in the EEA, UK, or Switzerland, you also have
              the right to:
            </p>
            <ul>
              <li>
                <strong>Object</strong>: Object to processing based on
                legitimate interests
              </li>
              <li>
                <strong>Restrict</strong>: Request restriction of processing in
                certain circumstances
              </li>
              <li>
                <strong>Withdraw Consent</strong>: Withdraw consent where
                processing is based on consent
              </li>
              <li>
                <strong>Lodge a Complaint</strong>: File a complaint with your
                local data protection authority
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Additional Rights for US Residents
            </h3>
            <p>
              If you are a resident of California, Virginia, Colorado,
              Connecticut, Utah, Texas, Oregon, Nevada, Delaware, Iowa, New
              Hampshire, New Jersey, Nebraska, Tennessee, Minnesota, or Montana,
              you have additional rights under state privacy laws:
            </p>
            <ul>
              <li>
                <strong>Right to Know</strong>: Request information about the
                categories of personal information we collect and how it&rsquo;s
                used
              </li>
              <li>
                <strong>Right to Delete</strong>: Request deletion of your
                personal information
              </li>
              <li>
                <strong>Right to Opt-Out</strong>: Opt out of the
                &ldquo;sale&rdquo; of personal information (we do not sell
                personal information)
              </li>
              <li>
                <strong>Right to Non-Discrimination</strong>: Not be
                discriminated against for exercising your privacy rights
              </li>
            </ul>
            <p>
              California residents may also request information about categories
              of personal information shared with third parties for direct
              marketing purposes (we do not share information for such
              purposes).
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              How to Exercise Your Rights
            </h3>
            <p>
              To exercise any of these rights, please contact us at
              privacy@exoria.app. We will respond to your request within the
              timeframe required by applicable law (generally within 30 days).
              We may need to verify your identity before processing your
              request.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              8. Children&rsquo;s Privacy
            </h2>
            <p>
              Exoria is not intended for children under the age of 13 (or 16 in
              the EEA). We do not knowingly collect personal information from
              children under these ages. If we learn that we have collected
              personal information from a child under the applicable age without
              parental consent, we will take steps to delete that information
              promptly. If you believe we have collected information from a
              child under the applicable age, please contact us immediately.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              9. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your country of residence, including the United States
              where many of our service providers are located. These countries
              may have data protection laws that differ from the laws of your
              country.
            </p>
            <p>
              When we transfer personal data from the EEA, UK, or Switzerland to
              other countries, we implement appropriate safeguards, such as:
            </p>
            <ul>
              <li>
                Standard contractual clauses approved by the European Commission
              </li>
              <li>
                Ensuring recipients are certified under approved data protection
                frameworks
              </li>
              <li>Obtaining your explicit consent for the transfer</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              10. Third-Party Links and Services
            </h2>
            <p>
              Our Services may contain links to third-party websites or services
              that are not operated by us. We are not responsible for the
              privacy practices of these third parties. We encourage you to
              review their privacy policies before providing any personal
              information.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              11. Push Notifications
            </h2>
            <p>
              With your consent, we may send push notifications to your device
              to provide updates about group activities, new features, or other
              relevant information. You can disable push notifications at any
              time through your device settings.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              12. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any material changes by posting the new Privacy Policy in the App
              and updating the &ldquo;Effective Date&rdquo; at the top. For
              significant changes, we may also notify you via email or push
              notification.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect your information.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              13. Contact Information
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-6">
              <p className="font-semibold">Exoria LLC</p>
              <p>5900 Balcones Drive Suite 100</p>
              <p>Austin, TX 78731</p>
              <p>United States</p>
              <p className="mt-2">Email: privacy@exoria.app</p>
              <p>Support: support@exoria.app</p>
            </div>
            <p>
              For users in the European Economic Area, you may also contact your
              local data protection authority if you have concerns about our
              handling of your personal information.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              14. Accessibility
            </h2>
            <p>
              We are committed to ensuring this Privacy Policy is accessible to
              all users. If you need this policy in an alternative format,
              please contact us at accessibility@exoria.app.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">
              15. SMS Messaging and Mobile Information
            </h2>
            <p>
              When you use our social invite system, we may collect and use your
              mobile phone number to send SMS messages. We take your privacy
              seriously and handle your mobile information with the following
              practices:
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Information Collection and Use
            </h3>
            <p>
              - We collect phone numbers only when you explicitly provide them
              for our social invite system - Phone numbers are used solely to
              send invitation messages to the contacts you specify - We do not
              sell, rent, or share your mobile information with third parties
              for their marketing purposes - We may share information with
              service providers who assist us in operating our SMS services, but
              only for that limited purpose
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              SMS Consent and Opt-Out
            </h3>
            <p>
              - By providing your phone number, you consent to receive SMS
              messages from Exoria - Message and data rates may apply depending
              on your mobile carrier plan - You can opt-out of SMS messages at
              any time by replying STOP to any message - For help, reply HELP to
              any message or contact us at support@exoria.ai
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Data Security
            </h3>
            <p>
              - We implement appropriate technical and organizational measures
              to protect your mobile information - Phone numbers are encrypted
              and stored securely - We retain phone numbers only as long as
              necessary to provide our services
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
