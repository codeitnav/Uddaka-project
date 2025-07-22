import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/#footer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Effective Date: June 11, 2025</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              At Xcentic Technologies, we value your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website, use our applications, or engage with our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">A. Information You Provide</h3>
            <p>We may collect the following personal data when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Register or fill out a form on our website</li>
              <li>Communicate with us via email, chat, or phone</li>
              <li>Use our services</li>
            </ul>

            <p>Collected information includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name (if applicable)</li>
              <li>Payment & Billing Information (only during transactions)</li>
              <li>Any other personal data you voluntarily provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">B. Information We Collect Automatically</h3>
            <p>When you access our website or services, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP Address</li>
              <li>Device Type and Browser</li>
              <li>Usage data (pages visited, time spent, etc.)</li>
              <li>Cookies and tracking data (see section 5)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Process transactions and send related information</li>
              <li>Send newsletters, updates, and marketing (only if opted-in)</li>
              <li>Ensure compliance with laws and legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Legal Basis for Processing</h2>
            <p>
              In accordance with the Digital Personal Data Protection Act (DPDPA), 2023, we collect and process personal
              data based on:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your consent</li>
              <li>Contractual necessity</li>
              <li>Legal obligation</li>
              <li>Legitimate interest</li>
            </ul>
            <p>You can withdraw your consent at any time by contacting us at support@xcentic.com.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Sharing Your Data</h2>
            <p>We do not sell your personal data. However, we may share data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trusted third-party service providers (hosting, analytics, payment gateways)</li>
              <li>Legal authorities when required by law</li>
              <li>In case of a merger, acquisition, or sale of assets, with notification to affected users</li>
            </ul>
            <p>All third-party processors are contractually bound to protect your data.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enable essential website functionality</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Improve user experience</li>
            </ul>
            <p>You can manage or disable cookies in your browser settings.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate or outdated information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
              <li>Lodge a complaint with the appropriate data authority</li>
            </ul>
            <p>To exercise any of these rights, email us at support@xcentic.com.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>SSL encryption</li>
              <li>Secure servers and firewalls</li>
              <li>Limited access controls</li>
            </ul>
            <p>
              Despite our efforts, no method of transmission or storage is 100% secure. We commit to notifying you
              promptly in case of any data breach.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fulfill the purpose for which it was collected</li>
              <li>Comply with legal, accounting, or regulatory obligations</li>
            </ul>
            <p>Once data is no longer needed, it is securely deleted or anonymized.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. International Transfers</h2>
            <p>If your data is transferred outside India, it will be protected using adequate safeguards such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contractual obligations on data recipients</li>
              <li>Legal compliance with international transfer standards</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under 18 years of age. We do not knowingly collect data from
              minors. If we learn that we have collected personal data from a child, we will take steps to delete it.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Links to Third-Party Sites</h2>
            <p>
              Our website may contain links to external websites. This policy does not cover third-party privacy
              practices. We recommend reviewing their policies before submitting personal information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. If significant changes are made, we will notify you via
              email or a notice on our website.
            </p>
            <p>Last updated: June 11, 2025</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or your personal data, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold">Xcentic Technologies</p>
              <p>📧 Email: support@xcentic.com</p>
              <p>📍 Address: Aakash Vihar, Near SRM University, Modinagar, Ghaziabad (U.P.) – 201204</p>
              <p>🌐 Website: www.xcentic.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
