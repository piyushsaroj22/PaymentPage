import { FiMail, FiMapPin, FiPhone, FiClock } from "react-icons/fi";

import LegalPage from "../components/LegalPage";

const ContactPage = () => {
  return (
    <LegalPage
      title="Contact Us"
      subtitle="We're here to help. Feel free to reach out to us for any questions, project inquiries, or support."
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

          <p className="mt-4 leading-8 text-gray-700">
            If you have any questions regarding our services, payments,
            technical support, or business inquiries, you can contact us using
            the information below. We aim to respond to all inquiries as quickly
            as possible.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-100 p-3">
                <FiMail className="text-xl text-blue-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Email</h3>

                <p className="mt-2 text-gray-600">
                  piyushsaroj222006@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-green-100 p-3">
                <FiPhone className="text-xl text-green-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Phone</h3>

                <p className="mt-2 text-gray-600">+91 89289 05076</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-red-100 p-3">
                <FiMapPin className="text-xl text-red-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Office Address</h3>

                <p className="mt-2 text-gray-600">
                  Mumbai,
                  <br />
                  Maharashtra,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-purple-100 p-3">
                <FiClock className="text-xl text-purple-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Business Hours</h3>

                <p className="mt-2 text-gray-600">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM (IST)
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Support</h2>

          <p className="mt-4 leading-8 text-gray-700">
            For payment-related issues, website support, technical assistance,
            or project discussions, please email us with complete details. Our
            team will review your request and respond as soon as possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">Response Time</h2>

          <p className="mt-4 leading-8 text-gray-700">
            We usually respond within <strong>24–48 business hours</strong>.
            Response times may vary during weekends or public holidays.
          </p>
        </section>
      </div>
    </LegalPage>
  );
};

export default ContactPage;
