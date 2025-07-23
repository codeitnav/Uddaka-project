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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy - Uddaka</h1>
          <p className="text-gray-600 mb-6">Effective Date: August 01, 2025</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              At Uddaka, your privacy matters. This Privacy Policy explains how we collect, use, and protect your personal
              data when you use our logistics and transport platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Personal Info:</strong> Name, contact number, email, address.</li>
              <li><strong>Location Data:</strong> Real-time GPS data for deliveries and pickups.</li>
              <li><strong>Payment Info:</strong> UPI or card details (securely processed by third-party gateways).</li>
              <li><strong>Usage Data:</strong> Interaction logs, device info, and preferences.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use This Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To match customers with drivers efficiently.</li>
              <li>To process payments and generate receipts.</li>
              <li>To improve and personalize your app experience.</li>
              <li>To send service updates and promotional offers.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Sharing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>With driver-partners for order fulfillment.</li>
              <li>With payment processors for transaction handling.</li>
              <li>With law enforcement or regulators when required by law.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access & Update:</strong> View or edit your personal data any time.</li>
              <li><strong>Deletion:</strong> Request account and data removal (subject to legal requirements).</li>
              <li><strong>Marketing Opt-Out:</strong> Unsubscribe from non-essential communications.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold">Uddaka</p>
              <p>📧 Email: support@uddaka.con</p>
              <p>📞 Phone: +91 93151 32367</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
