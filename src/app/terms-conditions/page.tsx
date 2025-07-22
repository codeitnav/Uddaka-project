import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsConditionsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-6">Effective Date: June 11, 2025</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              Welcome to Xcentic Technologies. These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of our
              website, products, and services (&quot;Services&quot;) operated by Xcentic Technologies, located at Aakash Vihar,
              Near SRM University, Modinagar, Ghaziabad (U.P.) – 201204 (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do
              not use our Services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Eligibility</h2>
            <p>
              To use our Services, you must be at least 18 years of age or the age of majority in your jurisdiction. By
              using our Services, you represent and warrant that you meet these requirements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate, current, and complete information</li>
              <li>Use our Services only for lawful purposes</li>
              <li>Maintain the security of your account and password</li>
              <li>Not misuse, interfere with, or disrupt the Service or servers</li>
            </ul>

            <p>Prohibited activities include (but are not limited to):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Copying or distributing any part of our Services without authorization</li>
              <li>Uploading viruses, malware, or harmful code</li>
              <li>Violating intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Services Offered</h2>
            <p>Xcentic Technologies provides digital solutions including (but not limited to):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Web and mobile app development</li>
              <li>Digital marketing and SEO services</li>
              <li>Legal documentation assistance</li>
              <li>Graphic design and branding services</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue services (in whole or in part) at any time without
              notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment & Fees</h2>
            <p>
              Certain services are provided for a fee. All pricing will be communicated in advance through written
              proposals or contracts.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payments must be made according to the agreed schedule.</li>
              <li>Failure to pay may result in service suspension or termination.</li>
              <li>We use secure third-party gateways for transactions; we do not store your payment details.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content, code, and materials provided by Xcentic Technologies are protected by copyright, trademark,
              and other applicable laws.
            </p>
            <p>
              You agree not to reproduce, duplicate, copy, sell, or exploit any part of the Services without express
              written permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Confidentiality</h2>
            <p>
              Any confidential information shared during project discussions or service delivery will be treated with
              strict confidentiality unless disclosure is required by law.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Tools & Links</h2>
            <p>
              We may use or link to third-party services. Xcentic Technologies is not responsible for the content,
              terms, or practices of those third-party websites or platforms.
            </p>
            <p>Use of such tools is subject to their individual terms and privacy policies.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our Services at any time, with or without
              cause or notice, if we believe you have violated these Terms or applicable laws.
            </p>
            <p>Upon termination:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your right to use the Service will immediately cease.</li>
              <li>Any unpaid balances remain due.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Xcentic Technologies shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of data, revenue, profits, or business opportunities</li>
              <li>Errors, delays, or interruptions beyond our reasonable control</li>
            </ul>
            <p>
              Our total liability will not exceed the amount paid by you for services rendered in the previous 3 months.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Xcentic Technologies, its directors, employees, and partners from
              any claims, liabilities, damages, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your misuse of the Services</li>
              <li>Violation of these Terms</li>
              <li>Infringement of any third-party rights</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to revise these Terms at any time. Updated versions will be posted on our website
              with the &quot;Effective Date.&quot; Continued use after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
            <p>If you have any questions about these Terms &amp; Conditions, please contact:</p>
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
