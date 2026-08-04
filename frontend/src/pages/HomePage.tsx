import Navbar from "../components/Navbar";
import ButtonCard from "../components/ButtonCard";

import { useAppSelector } from "../app/hooks";

const HomePage = () => {
  const { freeClicks, paidClicks } = useAppSelector((state) => state.click);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <ButtonCard
            title="FREE"
            count={freeClicks}
            buttonText="FREE CLICK"
            buttonColor="bg-green-600 hover:bg-green-700"
            onClick={() => {}}
          />

          <ButtonCard
            title="PAID"
            count={paidClicks}
            buttonText="PAY & CLICK"
            buttonColor="bg-blue-600 hover:bg-blue-700"
            onClick={() => {}}
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
