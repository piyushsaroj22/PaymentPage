type AmountModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AmountModal = ({ isOpen, onClose }: AmountModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-96 rounded bg-white p-6">
        <h2 className="mb-4 text-2xl font-bold">Enter Amount</h2>

        <input
          type="number"
          placeholder="₹1 - ₹5000"
          className="mb-4 w-full rounded border p-3"
        />

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 rounded bg-gray-300 p-3">
            Cancel
          </button>

          <button className="flex-1 rounded bg-blue-600 p-3 text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountModal;
