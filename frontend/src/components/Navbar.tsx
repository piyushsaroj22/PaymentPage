import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold">Payment Page</h1>

        <Link
          to="/history"
          className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-neutral-800"
        >
          Payment History
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
