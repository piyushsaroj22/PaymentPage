// import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";

// interface NavbarProps {
//   title: string;
//   buttonText: string;
//   buttonLink: string;
// }

// const Navbar = ({ title, buttonText, buttonLink }: NavbarProps) => {
//   return (
//     <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
//       <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-8">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//             {title}
//           </h1>
//         </div>

//         <Link
//           to={buttonLink}
//           className="group inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-xl"
//         >
//           {buttonText}

//           <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

//TODO

import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

interface NavbarProps {
  title: string;
  buttonText: string;
  buttonLink: string;
}

const Navbar = ({ title, buttonText, buttonLink }: NavbarProps) => {
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    // {
    //   name: "Privacy",
    //   path: "/privacy-policy",
    // },
    // {
    //   name: "Terms",
    //   path: "/terms-and-conditions",
    // },
    // {
    //   name: "Refund",
    //   path: "/refund-policy",
    // },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight">
          {title}
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Button */}
        <Link
          to={buttonLink}
          className="group inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
        >
          {buttonText}

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
