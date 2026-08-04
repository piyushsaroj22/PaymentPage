import Navbar from "../components/Navbar";
import ButtonCard from "../components/ButtonCard";

import { useAppSelector } from "../app/hooks";

const HomePage = () => {
  const { freeClicks, paidClicks } = useAppSelector((state) => state.click);

  return (
    <>
      <Navbar />

      <main className="mx-auto mt-16 max-w-6xl">
        <div className="grid grid-cols-2 gap-10">
          <ButtonCard
            title="FREE"
            count={freeClicks}
            buttonText="Free Click"
            buttonColor="bg-green-600 hover:bg-green-700"
            onClick={() => {}}
          />

          <ButtonCard
            title="PAID"
            count={paidClicks}
            buttonText="Pay & Click"
            buttonColor="bg-blue-600 hover:bg-blue-700"
            onClick={() => {}}
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
