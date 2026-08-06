import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalPageProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const LegalPage = ({ title, subtitle, children }: LegalPageProps) => {
  return (
    <>
      <Navbar title="Web Service" buttonText="Home" buttonLink="/" />

      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-10">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Information
          </span>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
          <div className="space-y-6 text-gray-700 leading-8">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LegalPage;
