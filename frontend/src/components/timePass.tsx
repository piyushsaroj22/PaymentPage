const timePass = () => {
  return (
    <div>
      {/* ========================= HERO SECTION ========================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 backdrop-blur">
                🚀 Trusted Web Development Agency
              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
                Build a Website
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  That Actually
                </span>
                Grows Your Business
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                We create modern, responsive and lightning-fast websites that
                help businesses attract more customers and build a strong online
                presence. From design to deployment—we handle everything and
                just pay and contact us on the given email with Payment
                ScreenShot.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
                  Get Started
                </button>

                <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20">
                  View Services
                </button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Projects Completed
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">99%</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Client Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                  <p className="mt-2 text-sm text-slate-400">Support</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">Fast</h3>
                  <p className="mt-2 text-sm text-slate-400">Delivery</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                {/* Browser */}
                <div className="rounded-2xl bg-slate-900 shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-slate-800 p-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>

                    <div className="ml-4 flex-1 rounded-lg bg-slate-800 px-4 py-2 text-xs text-slate-400">
                      https://yourwebsite.com
                    </div>
                  </div>

                  <div className="space-y-6 p-6">
                    <div className="h-44 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 rounded-xl bg-slate-800"></div>
                      <div className="h-24 rounded-xl bg-slate-800"></div>
                      <div className="h-24 rounded-xl bg-slate-800"></div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-4 w-full rounded bg-slate-800"></div>
                      <div className="h-4 w-5/6 rounded bg-slate-800"></div>
                      <div className="h-4 w-4/6 rounded bg-slate-800"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -left-10 top-12 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur">
                  <div className="text-3xl">💻</div>
                  <h3 className="mt-3 font-bold">Custom Development</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    React • Node.js • Express
                  </p>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-10 right-0 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur">
                  <div className="text-3xl">🚀</div>
                  <h3 className="mt-3 font-bold">Deployment</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Domain • Hosting • SSL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= STATS + SERVICES SECTION ========================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">🎯</div>
              <h3 className="mt-5 text-4xl font-black text-blue-600">100+</h3>
              <p className="mt-2 text-gray-600">
                Successfully Completed Projects
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">⚡</div>
              <h3 className="mt-5 text-4xl font-black text-blue-600">99%</h3>
              <p className="mt-2 text-gray-600">
                Performance Optimized Websites
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">🔒</div>
              <h3 className="mt-5 text-4xl font-black text-blue-600">24/7</h3>
              <p className="mt-2 text-gray-600">Support & Maintenance</p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-5 text-4xl font-black text-blue-600">Fast</h3>
              <p className="mt-2 text-gray-600">Delivery & Deployment</p>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-28 text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-600">
              OUR SERVICES
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">
              Everything You Need
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              We provide complete web solutions from planning and design to
              development, deployment and long-term maintenance.
            </p>
          </div>

          {/* Services */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {/* Card */}
            <div className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🎨
              </div>

              <h3 className="mt-6 text-2xl font-bold">Website Design</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Beautiful UI/UX designs that are responsive, clean and modern.
                Every website is crafted for the best user experience.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Responsive Layout</li>
                <li>✔ Modern UI</li>
                <li>✔ Mobile Friendly</li>
                <li>✔ Fast Loading</li>
              </ul>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                💻
              </div>

              <h3 className="mt-6 text-2xl font-bold">Web Development</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Powerful websites using modern technologies like React, Node.js,
                Express and MongoDB.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ React</li>
                <li>✔ Node.js</li>
                <li>✔ Express</li>
                <li>✔ MongoDB</li>
              </ul>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
                🛒
              </div>

              <h3 className="mt-6 text-2xl font-bold">E-Commerce Store</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Sell products online with secure payments, admin dashboard and
                complete shopping features.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Product Management</li>
                <li>✔ Payment Gateway</li>
                <li>✔ Admin Panel</li>
                <li>✔ Secure Checkout</li>
              </ul>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                📄
              </div>

              <h3 className="mt-6 text-2xl font-bold">Landing Pages</h3>

              <p className="mt-4 leading-7 text-gray-600">
                High-converting landing pages for products, businesses and
                marketing campaigns.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Lead Generation</li>
                <li>✔ SEO Ready</li>
                <li>✔ Fast Speed</li>
                <li>✔ Conversion Focused</li>
              </ul>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl">
                ☁️
              </div>

              <h3 className="mt-6 text-2xl font-bold">Hosting & Deployment</h3>

              <p className="mt-4 leading-7 text-gray-600">
                We deploy your website securely with SSL, custom domain and
                high-performance hosting.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Domain Setup</li>
                <li>✔ SSL Certificate</li>
                <li>✔ Cloud Hosting</li>
                <li>✔ Maintenance</li>
              </ul>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
                🛠
              </div>

              <h3 className="mt-6 text-2xl font-bold">Website Maintenance</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Regular updates, bug fixing, backups, monitoring and performance
                optimization.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Bug Fixes</li>
                <li>✔ Security Updates</li>
                <li>✔ Daily Backup</li>
                <li>✔ Performance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= WHY CHOOSE US + OUR PROCESS ========================= */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        {/* Background Blur */}
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-5xl font-black">
              We Don't Just Build Websites.
            </h2>

            <h3 className="mt-3 text-5xl font-black text-blue-400">
              We Build Businesses.
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Every project is built with performance, user experience and
              business growth in mind. From idea to launch, we take care of
              everything.
            </p>
          </div>

          {/* Features */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500">
              <div className="text-5xl">⚡</div>

              <h3 className="mt-6 text-2xl font-bold">Lightning Fast</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Optimized websites with excellent loading speed and smooth user
                experience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500">
              <div className="text-5xl">📱</div>

              <h3 className="mt-6 text-2xl font-bold">Responsive Design</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Perfect experience across desktop, tablet and mobile devices.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500">
              <div className="text-5xl">🔒</div>

              <h3 className="mt-6 text-2xl font-bold">Secure</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Modern security practices with SSL, authentication and secure
                hosting.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500">
              <div className="text-5xl">🚀</div>

              <h3 className="mt-6 text-2xl font-bold">SEO Ready</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Clean code and optimized structure for better search engine
                rankings.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500">
              <div className="text-5xl">🛠</div>

              <h3 className="mt-6 text-2xl font-bold">Easy Maintenance</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Ongoing support, updates and improvements whenever you need
                them.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500">
              <div className="text-5xl">💎</div>

              <h3 className="mt-6 text-2xl font-bold">Premium Quality</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Beautiful design, clean architecture and scalable solutions for
                every business.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="mt-32 text-center">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              OUR PROCESS
            </span>

            <h2 className="mt-6 text-5xl font-black">How We Work</h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
              A simple process that keeps every project transparent, fast and
              efficient.
            </p>

            <div className="mt-20 grid gap-8 lg:grid-cols-4">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 font-bold">
                  1
                </div>

                <div className="mt-4 text-5xl">💬</div>

                <h3 className="mt-6 text-2xl font-bold">Discuss</h3>

                <p className="mt-4 text-slate-300">
                  Understand your business goals, requirements and project
                  scope.
                </p>
              </div>

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 font-bold">
                  2
                </div>

                <div className="mt-4 text-5xl">🎨</div>

                <h3 className="mt-6 text-2xl font-bold">Design</h3>

                <p className="mt-4 text-slate-300">
                  Create a modern and responsive UI focused on user experience.
                </p>
              </div>

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 font-bold">
                  3
                </div>

                <div className="mt-4 text-5xl">💻</div>

                <h3 className="mt-6 text-2xl font-bold">Develop</h3>

                <p className="mt-4 text-slate-300">
                  Build the website with clean code, high performance and
                  security.
                </p>
              </div>

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 font-bold">
                  4
                </div>

                <div className="mt-4 text-5xl">🚀</div>

                <h3 className="mt-6 text-2xl font-bold">Deploy</h3>

                <p className="mt-4 text-slate-300">
                  Launch your website with hosting, SSL and continuous support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= PAYMENT + FAQ + CTA SECTION ========================= */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Payment */}
          <div className="overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-10 text-white lg:p-14">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                  PAYMENT INSTRUCTIONS
                </span>

                <h2 className="mt-6 text-4xl font-black">
                  Complete Your Payment
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  Click the <strong>Pay & Click</strong> button below to
                  complete your payment securely. Once your payment is
                  successful, simply send us the payment screenshot for
                  verification.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold">
                      1
                    </div>

                    <div>
                      <h3 className="font-semibold">Click "Pay & Click"</h3>
                      <p className="mt-1 text-blue-100">
                        Use the payment button below this section.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold">
                      2
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Complete Razorpay Payment
                      </h3>

                      <p className="mt-1 text-blue-100">
                        Finish the payment using any available payment method.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold">
                      3
                    </div>

                    <div>
                      <h3 className="font-semibold">Send Payment Screenshot</h3>

                      <p className="mt-1 text-blue-100">
                        Email the payment screenshot with your details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="p-10 lg:p-14">
                <div className="rounded-2xl border bg-slate-50 p-8">
                  <div className="text-5xl">📧</div>

                  <h3 className="mt-6 text-3xl font-black text-slate-900">
                    Send Screenshot To
                  </h3>

                  <a
                    href="mailto:piyushsaroj222006@gmail.com"
                    className="mt-5 block break-all text-xl font-bold text-blue-600 hover:underline"
                  >
                    piyushsaroj222006@gmail.com
                  </a>

                  <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                    <h4 className="font-bold">Please Include:</h4>

                    <ul className="mt-4 space-y-3 text-slate-600">
                      <li>✔ Your Name</li>
                      <li>✔ Payment Screenshot</li>
                      <li>✔ Contact Number (Optional)</li>
                      <li>✔ Selected Service (Optional)</li>
                    </ul>
                  </div>

                  <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-5">
                    <p className="font-semibold text-amber-800">
                      ⏳ Verification usually takes only a few minutes after
                      receiving your email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24">
            <div className="text-center">
              <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-600">
                FAQ
              </span>

              <h2 className="mt-6 text-5xl font-black">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mx-auto mt-14 max-w-5xl space-y-6">
              <div className="rounded-2xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">
                  How long does website development take?
                </h3>

                <p className="mt-3 text-slate-600">
                  Most projects are completed within a few days depending on
                  complexity.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">Do you provide hosting?</h3>

                <p className="mt-3 text-slate-600">
                  Yes. We also provide hosting, deployment, domain setup and
                  SSL.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">
                  Can I request custom features?
                </h3>

                <p className="mt-3 text-slate-600">
                  Absolutely. Every website can be customized according to your
                  business requirements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-14 text-center text-white">
            <h2 className="text-5xl font-black">
              Ready To Build Your Website?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Scroll down and click the <strong>Pay & Click</strong> button to
              get started. After payment, send the screenshot to our email for
              quick verification.
            </p>

            <a
              href="mailto:piyushsaroj222006@gmail.com"
              className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-bold text-slate-900 transition hover:scale-105"
            >
              📧 Contact via Email
            </a>
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA + FOOTER SECTION ========================= */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* CTA */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl lg:p-16">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              LET'S BUILD SOMETHING AMAZING
            </span>

            <h2 className="mt-8 text-4xl font-black md:text-6xl">
              Your Next Website Starts Here.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Whether you need a personal portfolio, business website,
              e-commerce store or a completely custom web application, we can
              help you build something fast, secure and modern.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <a
                href="mailto:piyushsaroj222006@gmail.com"
                className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/20"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Feature Strip */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <div className="text-5xl">⚡</div>
              <h3 className="mt-4 text-xl font-bold">Fast Performance</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <div className="text-5xl">📱</div>
              <h3 className="mt-4 text-xl font-bold">Mobile Responsive</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <div className="text-5xl">🔒</div>
              <h3 className="mt-4 text-xl font-bold">Secure Websites</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-4 text-xl font-bold">Modern Technology</h3>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-24 border-t border-white/10 pt-12">
            <div className="grid gap-10 lg:grid-cols-3">
              {/* Brand */}
              <div>
                <h2 className="text-3xl font-black">PS Web Studio</h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Professional web design, development and hosting services for
                  businesses, startups and individuals.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-bold">Services</h3>

                <ul className="mt-5 space-y-3 text-slate-400">
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Landing Pages</li>
                  <li>E-Commerce</li>
                  <li>Hosting</li>
                  <li>Maintenance</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-bold">Contact</h3>

                <a
                  href="mailto:piyushsaroj222006@gmail.com"
                  className="mt-5 block text-blue-400 hover:underline"
                >
                  📧 piyushsaroj222006@gmail.com
                </a>

                <p className="mt-6 text-slate-400">
                  After completing the payment, please send the payment
                  screenshot to the email above for verification.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-500 md:flex-row">
              <p>© 2026 PS Web Studio. All Rights Reserved.</p>

              <p>Designed & Developed with ❤️ by PS Web Studio</p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default timePass;
