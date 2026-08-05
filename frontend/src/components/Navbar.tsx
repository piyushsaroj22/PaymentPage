import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

interface NavbarProps {
  title: string;
  buttonText: string;
  buttonLink: string;
}

const Navbar = ({ title, buttonText, buttonLink }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>

        <Link
          to={buttonLink}
          className="group inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-xl"
        >
          {buttonText}

          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
