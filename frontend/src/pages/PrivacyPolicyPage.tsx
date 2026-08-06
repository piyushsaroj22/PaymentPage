import LegalPage from "../components/LegalPage";

const PrivacyPolicyPage = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information."
    >
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Information We Collect
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            When you use our website or purchase our services, we may collect
            certain information including your name, email address, phone
            number, payment details, and any information you voluntarily provide
            while communicating with us.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            How We Use Your Information
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
            <li>To provide the requested web development services.</li>
            <li>To verify and process payments securely.</li>
            <li>To communicate regarding your project.</li>
            <li>To provide customer support.</li>
            <li>To improve our services and website.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Payment Verification
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            After completing your payment, you are requested to send the payment
            screenshot along with your Name, Email Address, Contact Number,
            Transaction ID, and project details to our official support email or
            WhatsApp number. This helps us verify your payment quickly and start
            your project without unnecessary delays.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-semibold text-blue-800">Please share:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-blue-900">
              <li>Payment Screenshot</li>
              <li>Your Full Name</li>
              <li>Email Address</li>
              <li>Contact Number</li>
              <li>Transaction / Payment ID</li>
              <li>Project or Service Details</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>

          <p className="mt-4 leading-8 text-gray-700">
            We implement reasonable security measures to protect your personal
            information against unauthorized access, disclosure, or misuse.
            However, no online system can guarantee complete security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Third-Party Services
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Payments are securely processed through trusted third-party payment
            gateways. We do not store your debit card, credit card, UPI PIN, or
            banking credentials on our servers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>

          <p className="mt-4 leading-8 text-gray-700">
            If you have any questions regarding this Privacy Policy or your
            personal information, please contact us using the details provided
            on the Contact Us page.
          </p>
        </div>
      </section>
    </LegalPage>
  );
};

export default PrivacyPolicyPage;
