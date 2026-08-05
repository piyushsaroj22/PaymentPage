import type { RazorpaySuccessResponse } from "../types/payment.types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openRazorpayCheckout } from "../utils/razorpay";
import AmountModal from "../components/AmountModal";
import ButtonCard from "../components/ButtonCard";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import {
  createPaymentOrder,
  verifyPaymentThunk,
} from "../features/payment/payment.thunks";

import {
  fetchClicks,
  incrementFreeClickThunk,
} from "../features/click/click.thunks";

const HomePage = () => {
  const { freeClicks, paidClicks, loading } = useAppSelector(
    (state) => state.click,
  );

  // loading, error baad me yebhi add hosakta hai todo

  const [isAmountModalOpen, setIsAmountModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClicks());
  }, [dispatch]);

  const handleFreeClick = async () => {
    await dispatch(incrementFreeClickThunk()).unwrap();
  };

  // const { order } = useAppSelector((state) => state.payment);

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
      <Navbar />

      {/* ============================================================================================================================ */}

      {/* =============================================================================== */}

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
            onClick={() => setIsAmountModalOpen(true)}
          />
        </div>
      </main>
      <AmountModal
        isOpen={isAmountModalOpen}
        amount={amount}
        loading={loading}
        onAmountChange={setAmount}
        onClose={() => {
          setAmount("");
          setAmountError("");
          setIsAmountModalOpen(false);
        }}
        onConfirm={handlePaidClick}
        error={amountError}
      />
    </>
  );
};

export default HomePage;

// 1, 2, 3, 4, 5, 6, 7 ,8, 9
