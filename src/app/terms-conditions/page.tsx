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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions - Uddaka</h1>
          <p className="text-gray-600 mb-6">Last Updated: August 01, 2025</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              By accessing or using the Uddaka mobile app or website, you agree to these Terms &amp; Conditions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete registration information.</li>
              <li>Use the service only for lawful purposes.</li>
              <li>Treat drivers and their property with respect.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Driver-Partner Guidelines</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintain valid license, insurance, and registration.</li>
              <li>Ensure vehicle is safe, clean, and well-maintained.</li>
              <li>Comply with all traffic and safety regulations.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Booking, Cancellation & Refunds</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Booking:</strong> Charges are displayed before confirmation.</li>
              <li><strong>Cancellation:</strong></li>
              <ul className="list-disc pl-8 space-y-1">
                <li>Before driver assignment: no fee.</li>
                <li>After assignment: cancellation fee may apply (details shown at booking).</li>
              </ul>
              <li><strong>Refunds:</strong> Processed within 7 business days for eligible requests.</li>
              <li>Raise disputes within 48 hours of trip completion.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
            <p>Uddaka is a technology platform that facilitates logistics services. We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Loss, theft, or damage of goods in transit.</li>
              <li>Delays due to traffic, weather, or force majeure.</li>
              <li>Acts or omissions of driver-partners.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Account Suspension & Termination</h2>
            <p>We reserve the right to suspend or terminate accounts for the following reasons:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fraud, abuse, or violation of policies.</li>
              <li>Unsafe or unlawful behavior.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact for Support</h2>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold">Uddaka</p>
              <p>📧 Email: support@uddaka.com</p>
              <p>📞 Phone: +91 93151 32367</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
