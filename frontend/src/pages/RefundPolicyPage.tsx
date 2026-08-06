import LegalPage from "../components/LegalPage";

const RefundPolicyPage = () => {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      subtitle="Please read our Refund & Cancellation Policy carefully before making any payment."
    >
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Refund Policy</h2>

          <p className="mt-4 leading-8 text-gray-700">
            Customer satisfaction is important to us. If you believe there has
            been an issue with your payment, you may request a refund subject to
            the conditions mentioned below.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Refund Eligibility
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
            <li>
              Refund requests are accepted only for successfully completed
              payments.
            </li>
            <li>
              The payment must be verified before any refund request is
              processed.
            </li>
            <li>
              A refund request must be submitted within 7 days of the payment.
            </li>
            <li>
              Each refund request is reviewed individually before approval.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Payment Verification Required
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            To request a refund, you must send the following details to our
            official support email address. Refund requests without payment
            verification may not be processed.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-semibold text-blue-900">
              Required Documents
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-blue-900">
              <li>Payment Screenshot</li>
              <li>Transaction / Payment ID</li>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Contact Number</li>
              <li>Reason for Refund Request</li>
            </ul>

            <p className="mt-5 text-sm text-blue-800">
              Refund requests will only be reviewed after successful payment
              verification.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Cancellation Policy
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Orders or services may be cancelled before work has started. Once
            the project has begun or services have been delivered, cancellation
            requests may not be accepted.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Non-Refundable Cases
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
            <li>Incorrect information provided by the customer.</li>
            <li>Change of mind after work has started.</li>
            <li>Delay caused by the customer.</li>
            <li>Services already delivered or completed.</li>
            <li>Violation of our Terms & Conditions.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Refund Processing Time
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Once the refund request has been approved after payment
            verification, the refund will normally be processed within
            <strong> 5–10 business days</strong>. The actual credit time may
            vary depending on your bank or payment provider.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Contact for Refund Requests
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Please send your refund request along with the required payment
            screenshot and transaction details to our official support email.
            Incomplete requests may take longer to process or may be rejected.
          </p>
        </div>
      </section>
    </LegalPage>
  );
};

export default RefundPolicyPage;
