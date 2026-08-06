import type { RazorpaySuccessResponse } from "../types/payment.types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openRazorpayCheckout } from "../utils/razorpay";
import AmountModal from "../components/AmountModal";
import ButtonCard from "../components/ButtonCard";
import TimePass from "../components/timePass";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  createPaymentOrder,
  verifyPaymentThunk,
} from "../features/payment/payment.thunks";

import {
  fetchClicks,
  // incrementFreeClickThunk,
} from "../features/click/click.thunks";

const HomePage = () => {
  const {  paidClicks, loading } = useAppSelector(
    (state) => state.click,
  ); // TODO isme baad me freeClicks add karna hai

  // loading, error baad me yebhi add hosakta hai todo

  const [isAmountModalOpen, setIsAmountModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClicks());
  }, [dispatch]);

  // const handleFreeClick = async () => {
  //   await dispatch(incrementFreeClickThunk()).unwrap();
  // }; TODO isko baad me enabel akrna hai

  const handlePaidClick = async () => {
    const value = Number(amount);

    if (!Number.isFinite(value) || value < 1 || value > 5000) {
      setAmountError("Please enter an amount between ₹1 and ₹5000.");
      return;
    }

    try {
      const result = await dispatch(
        createPaymentOrder({
          amount: value,
        }),
      ).unwrap();

      await openRazorpayCheckout({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: result.data.amount,
        currency: result.data.currency,
        order_id: result.data.id,
        name: "Payment Page",
        description: "Paid Click",

        handler: async (response: RazorpaySuccessResponse) => {
          await dispatch(verifyPaymentThunk(response)).unwrap();

          await dispatch(fetchClicks()).unwrap();

          // setAmountError("");
          setAmount("");
          setIsAmountModalOpen(false);
        },

        modal: {
          ondismiss: () => {
            console.log("User closed payment popup.");
          },
        },

        theme: {
          color: "#2563eb",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar
        title="Web Service"
        buttonText="Payment History"
        buttonLink="/history"
      />

      {/* ============================================================================================================================ */}

      <TimePass />

      {/* =============================================================================== */}

      <main className="mx-auto max-w-[1400px] px-6 py-12">
        {/* <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-blue-600">Total Clicks</p>

            <h2 className="mt-3 text-4xl font-bold text-blue-900">
              {freeClicks + paidClicks}
            </h2>
          </div>

          <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
            <p className="text-sm font-semibold text-green-600">Free Clicks</p>

            <h2 className="mt-3 text-4xl font-bold text-green-800">
              {freeClicks}
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6">
            <p className="text-sm font-semibold text-purple-600">Paid Clicks</p>

            <h2 className="mt-3 text-4xl font-bold text-purple-800">
              {paidClicks}
            </h2>
          </div>
        </div> */}

        {/* TODO isko baad me enabal akrna hai */}

        <div className="grid gap-8 lg:grid-cols-1"> {/* TODO isko baad me 2 karna hai */}
          {/* <ButtonCard
            title="FREE"
            count={freeClicks}
            buttonText="FREE CLICK"
            buttonColor="bg-green-600 hover:bg-green-700"
            onClick={handleFreeClick}
          /> */}

          {/* TODO isko baad me enabal akrna hai */}

          <ButtonCard
            title="PAID"
            count={paidClicks}
            buttonText="CLICK TO PAY"
            buttonColor="bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsAmountModalOpen(true)}
          />
        </div>
      </main>

      <Footer />

      <AmountModal
        isOpen={isAmountModalOpen}
        amount={amount}
        loading={loading}
        error={amountError}
        onAmountChange={setAmount}
        onConfirm={handlePaidClick}
        onClose={() => {
          setAmount("");
          setAmountError("");
          setIsAmountModalOpen(false);
        }}
      />
    </>
  );
};

export default HomePage;

// 1, 2, 3, 4, 5, 6, 7 ,8, 9
