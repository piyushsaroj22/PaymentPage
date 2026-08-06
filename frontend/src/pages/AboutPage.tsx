import LegalPage from "../components/LegalPage";

const AboutPage = () => {
  return (
    <LegalPage
      title="About Us"
      subtitle="Learn more about our company, our mission, and the services we provide."
    >
      <section className="space-y-6">
        <p>
          Welcome to <strong>Web Service</strong>. We specialize in designing,
          developing, and maintaining modern websites and web applications for
          businesses, startups, and individuals. Our goal is to provide
          high-quality digital solutions that are fast, secure, responsive, and
          easy to use.
        </p>

        <p>
          We combine modern technologies with clean design principles to create
          websites that not only look professional but also deliver excellent
          performance across all devices.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>

        <p>
          Our mission is to help businesses establish a strong online presence
          by delivering reliable, scalable, and user-friendly web solutions at
          competitive prices.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Business Website Development</li>
          <li>Landing Page Design</li>
          <li>Portfolio Websites</li>
          <li>E-Commerce Website Development</li>
          <li>Admin Dashboard Development</li>
          <li>React.js Development</li>
          <li>Node.js Backend Development</li>
          <li>REST API Development</li>
          <li>Database Design</li>
          <li>Website Maintenance & Support</li>
          <li>Performance Optimization</li>
          <li>Responsive UI Development</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Modern and responsive designs</li>
          <li>Fast and optimized websites</li>
          <li>Secure development practices</li>
          <li>Clean and maintainable code</li>
          <li>Affordable pricing</li>
          <li>Reliable customer support</li>
          <li>Scalable solutions for future growth</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>

        <p>
          We aim to become a trusted web development partner for businesses
          worldwide by consistently delivering high-quality digital products
          that help our clients grow online.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>

        <p>
          Every project we undertake is built with a focus on quality,
          performance, security, and user experience. We believe in transparent
          communication, timely delivery, and long-term client relationships.
        </p>
      </section>
    </LegalPage>
  );
};

export default AboutPage;
