import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RefundPolicyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          <p className="text-gray-600 mb-6">Effective Date: June 11, 2025</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              At Xcentic Technologies, we are committed to delivering high-quality digital services including software
              development, digital marketing, branding, and legal solutions. Due to the nature of our work, all sales
              and service agreements are final, and we maintain a strict no-refund policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. No Refunds on Services</h2>
            <p>
              Once a service has been purchased, initiated, or delivered (in whole or in part), we do not offer refunds
              under any circumstances, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Change of mind</li>
              <li>Delay in client response</li>
              <li>Business decisions</li>
              <li>Project discontinuation by the client</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Custom and Digital Work</h2>
            <p>
              Most of our services involve custom work, digital deliverables, and strategic efforts tailored
              specifically to each client&apos;s requirements. These are non-tangible and non-returnable, making them
              non-refundable once the project has begun or the scope has been agreed upon.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Advance Payments and Retainers</h2>
            <p>
              All advance payments, milestone payments, or retainers made toward any project or engagement are
              non-refundable. These payments reserve resources and time, and are allocated immediately upon
              confirmation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Exceptions (Only If Mentioned in a Written Contract)
            </h2>
            <p>
              In rare and exceptional cases where a partial refund is explicitly stated in a written agreement (signed
              by both parties), such refunds will be processed according to the terms mentioned in that contract.
            </p>
            <p>If no such clause exists in writing, this no-refund policy prevails.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cancellation Policy</h2>
            <p>You may request project cancellation at any stage; however:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Any work completed up to that point will be billed</li>
              <li>No refunds will be provided for payments already made</li>
              <li>
                All associated files and rights will remain the property of Xcentic Technologies unless otherwise agreed
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Disputes</h2>
            <p>
              If you believe there has been an error or issue in service delivery, please contact us within 7 days of
              project milestone delivery. We&apos;ll do our best to resolve concerns amicably, but this does not entitle you
              to a refund unless stated in writing.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p>For any questions related to billing, payments, or this refund policy, please contact:</p>
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
