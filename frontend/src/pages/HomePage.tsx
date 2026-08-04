import Navbar from "../components/Navbar";
import ButtonCard from "../components/ButtonCard";

import { useAppSelector } from "../app/hooks";

import { useEffect } from "react";

import { useAppDispatch } from "../app/hooks";
import { setClicks } from "../features/click/clickSlice";

import { freeClick, getClicks } from "../services/click.service";

const HomePage = () => {
  const { freeClicks, paidClicks } = useAppSelector((state) => state.click);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadClicks = async () => {
      try {
        const data = await getClicks();

        dispatch(setClicks(data));
      } catch (error) {
        console.error(error);
      }
    };

    loadClicks();
  }, [dispatch]);

  const handleFreeClick = async () => {
    try {
      const data = await freeClick();

      dispatch(setClicks(data));
    } catch (error) {
      console.error(error);
    }
  };

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
            onClick={handleFreeClick}
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
