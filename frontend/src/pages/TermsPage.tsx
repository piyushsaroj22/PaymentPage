import LegalPage from "../components/LegalPage";

const TermsPage = () => {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="Please read these Terms & Conditions carefully before using our services."
    >
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Acceptance of Terms
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            By accessing our website or purchasing any of our services, you
            agree to comply with these Terms & Conditions. If you do not agree
            with any part of these terms, please do not use our website or
            services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>

          <p className="mt-4 leading-8 text-gray-700">
            We provide professional web development services including website
            design, frontend development, backend development, full-stack web
            applications, landing pages, portfolio websites, business websites,
            maintenance, and related technical services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Payment Terms</h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
            <li>
              All payments must be made through our official payment gateway.
            </li>
            <li>Prices are displayed in Indian Rupees (INR).</li>
            <li>Work on the project begins only after payment verification.</li>
            <li>
              Invoices and payment confirmations are provided upon successful
              payment.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Payment Verification
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            After successfully completing your payment, you must send the
            payment screenshot along with the following details to our official
            support email address or WhatsApp number for verification.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-semibold text-blue-900">
              Required Information
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-blue-900">
              <li>Payment Screenshot</li>
              <li>Transaction / Payment ID</li>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Contact Number</li>
              <li>Selected Service</li>
              <li>Project Requirements (if applicable)</li>
            </ul>

            <p className="mt-5 text-sm text-blue-800">
              Your project will be processed after successful payment
              verification.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Client Responsibilities
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
            <li>Provide accurate contact information.</li>
            <li>Provide complete project requirements.</li>
            <li>Respond to communication in a timely manner.</li>
            <li>Review delivered work and provide feedback promptly.</li>
            <li>Ensure all submitted content is legal and owned by you.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Delivery Timeline
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Delivery timelines depend on the scope and complexity of the
            project. Estimated timelines will be communicated before work
            begins. Delays caused by incomplete requirements or delayed client
            responses may affect the delivery schedule.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Intellectual Property
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            Upon full payment, ownership of the completed project will be
            transferred to the client unless otherwise agreed in writing.
            Third-party libraries, frameworks, and open-source software remain
            subject to their respective licenses.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Limitation of Liability
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            We are not responsible for any indirect, incidental, or
            consequential damages resulting from the use of our services,
            website downtime, third-party service failures, or circumstances
            beyond our reasonable control.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Changes to These Terms
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            We reserve the right to modify these Terms & Conditions at any time.
            Updated versions will be published on this page and become effective
            immediately upon publication.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>

          <p className="mt-4 leading-8 text-gray-700">
            If you have any questions regarding these Terms & Conditions, please
            contact us through the details provided on our Contact Us page.
          </p>
        </div>
      </section>
    </LegalPage>
  );
};

export default TermsPage;
