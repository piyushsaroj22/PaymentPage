interface AmountModalProps {
  isOpen: boolean;
  amount: string;
  loading: boolean;
  error?: string | null;
  onAmountChange: (value: string) => void;
  onClose: () => void;
  onConfirm: () => void;
}

const AmountModal = ({
  isOpen,
  amount,
  loading,
  error,
  onAmountChange,
  onClose,
  onConfirm,
}: AmountModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold">Enter Amount</h2>

        <p className="mt-2 text-gray-600">
          Enter an amount between ₹1 and ₹5000.
        </p>

        <input
          type="number"
          min={1}
          max={5000}
          value={amount}
          disabled={loading}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="Enter amount"
          className="mt-5 w-full rounded-lg border p-3 outline-none focus:ring-2"
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={
              loading ||
              amount.trim() === "" ||
              Number(amount) < 1 ||
              Number(amount) > 5000
            }
            className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 hover:bg-blue-700"
          >
            {loading ? "Processing..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountModal;
