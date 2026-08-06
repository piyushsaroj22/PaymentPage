import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiPhone, FiGithub, FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Web Service</h2>

            <p className="mt-4 leading-7 text-gray-600">
              We help businesses establish a strong online presence through
              modern web design and full-stack development. Our focus is on
              creating fast, responsive, SEO-friendly, and scalable websites
              that provide an exceptional user experience and drive business
              growth.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="rounded-xl border border-gray-300 p-2 transition hover:bg-white hover:shadow"
              >
                <FiGithub size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-gray-300 p-2 transition hover:bg-white hover:shadow"
              >
                <FiGlobe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 transition hover:text-black"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 transition hover:text-black"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 transition hover:text-black"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-600 transition hover:text-black"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-600 transition hover:text-black"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-blue-600" />

                <div>
                  <p className="font-medium">Email</p>

                  <p className="text-gray-600">piyushsaeoj222006@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-green-600" />

                <div>
                  <p className="font-medium">Phone</p>

                  <p className="text-gray-600">+91 89289 05076</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-red-600" />

                <div>
                  <p className="font-medium">Address</p>

                  <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Web Service. All rights reserved.
            </p>

            <p>
              Building modern web experiences with React, TypeScript & Node.js.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
