import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b px-8 py-5">
      <h1 className="text-3xl font-bold">Payment Page</h1>

      <Link
        to="/history"
        className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800"
      >
        Payment History
      </Link>
    </header>
  );
};

export default Navbar;
