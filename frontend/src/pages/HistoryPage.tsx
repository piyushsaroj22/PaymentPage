import { useEffect } from "react";

import Navbar from "../components/Navbar";
import PaymentHistoryTable from "../components/PaymentHistoryTable";

import { useAppDispatch, useAppSelector } from "../store/hooks";

import { fetchPaymentHistory } from "../features/payment/payment.thunks";
import { PiSpinnerThin } from "react-icons/pi";

const HistoryPage = () => {
  const dispatch = useAppDispatch();

  const { history, loading, error } = useAppSelector((state) => state.payment);

  useEffect(() => {
    dispatch(fetchPaymentHistory());
  }, [dispatch]);

  return (
    <>
      <Navbar title="Web Service" buttonText="Home Page" buttonLink="/" />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold">Payment History</h1>

        {loading && (
          <div className="flex justify-center items-center py-10">
            <PiSpinnerThin className="h-10 w-10 animate-spin text-black" />
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-lg text-red-600">{error}</p>
        )}

        {!loading && !error && <PaymentHistoryTable payments={history} />}
      </main>
    </>
  );
};

export default HistoryPage;
