import { FiX } from "react-icons/fi";
import { LuReceiptIndianRupee } from "react-icons/lu";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="border-b border-gray-200 px-8 py-6">
          <button
            onClick={onClose}
            disabled={loading}
            className="absolute right-5 top-5 rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <FiX size={20} />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
              <LuReceiptIndianRupee className="text-3xl text-blue-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">Enter Amount</h2>

              <p className="mt-1 text-sm text-gray-500">
                Enter any amount between ₹1 and ₹5000.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-8 py-8">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Amount
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-500">
                ₹
              </span>

              <input
                type="number"
                min={1}
                max={5000}
                value={amount}
                disabled={loading}
                onChange={(e) => onAmountChange(e.target.value)}
                placeholder="0"
                className="w-full rounded-2xl border border-gray-300 py-4 pl-10 pr-4 text-lg font-semibold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Minimum ₹1 • Maximum ₹5000
            </p>

            {error && (
              <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
            )}
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Selected Amount</span>

              <span className="text-2xl font-bold text-gray-900">
                ₹{amount || 0}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-200 px-8 py-6">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed"
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
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Processing..." : "Continue to Payment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountModal;
