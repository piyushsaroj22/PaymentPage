import { useMemo, useState } from "react";
import { FiCopy, FiSearch } from "react-icons/fi";

import StatusBadge from "./StatusBadge";

import type { PaymentHistoryItem } from "../types/payment.types";

interface PaymentHistoryTableProps {
  payments: PaymentHistoryItem[];
}

const PaymentHistoryTable = ({ payments }: PaymentHistoryTableProps) => {
  const [search, setSearch] = useState("");

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const value = search.toLowerCase().trim();

      const date = new Date(payment.createdAt);

      const dateString = date.toLocaleDateString().toLowerCase();
      const timeString = date.toLocaleTimeString().toLowerCase();
      const fullDateTime = date.toLocaleString().toLowerCase();

      return (
        payment.razorpayOrderId.toLowerCase().includes(value) ||
        (payment.razorpayPaymentId || "").toLowerCase().includes(value) ||
        payment.status.toLowerCase().includes(value) ||
        payment.amount.toString().includes(value) ||
        dateString.includes(value) ||
        timeString.includes(value) ||
        fullDateTime.includes(value)
      );
    });
  }, [payments, search]);

  const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);

  const successCount = payments.filter(
    (p) => p.status.toLowerCase() === "success",
  ).length;

  const pendingCount = payments.filter(
    (p) => p.status.toLowerCase() === "created",
  ).length;

  const failedCount = payments.filter(
    (p) => p.status.toLowerCase() === "failed",
  ).length;

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  if (payments.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center shadow-sm">
        <div className="mb-4 text-6xl">💳</div>

        <h2 className="text-2xl font-bold text-gray-800">No Payment History</h2>

        <p className="mt-2 text-gray-500">
          Your payment transactions will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-5">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <p className="text-sm font-medium text-gray-500">Total Payments</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {payments.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm transition hover:shadow-md">
          <p className="text-sm font-medium text-green-700">Successful</p>

          <h2 className="mt-2 text-3xl font-bold text-green-700">
            {successCount}
          </h2>
        </div>

        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm transition hover:shadow-md">
          <p className="text-sm font-medium text-yellow-700">Pending</p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-700">
            {pendingCount}
          </h2>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm transition hover:shadow-md">
          <p className="text-sm font-medium text-red-700">Failed</p>

          <h2 className="mt-2 text-3xl font-bold text-red-700">
            {failedCount}
          </h2>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition hover:shadow-md">
          <p className="text-sm font-medium text-blue-700">Total Amount</p>

          <h2 className="mt-2 text-3xl font-bold text-blue-700">
            ₹{totalAmount}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Transaction History
          </h2>

          <p className="text-sm text-gray-500">
            View all your Razorpay transactions.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search Order ID / Payment ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-black"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Amount
                </th>

                <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Status
                </th>

                <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Order ID
                </th>

                <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Payment ID
                </th>

                <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b border-gray-100 even:bg-white odd:bg-gray-50 transition hover:bg-blue-50"
                >
                  <td className="px-8 py-5">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{payment.amount}
                    </span>
                  </td>

                  <td className="px-8 py-5">
                    <StatusBadge status={payment.status} />
                  </td>

                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <span
                        className="max-w-[220px] truncate font-mono text-sm text-gray-700"
                        title={payment.razorpayOrderId}
                      >
                        {payment.razorpayOrderId}
                      </span>

                      <button
                        onClick={() => copyText(payment.razorpayOrderId)}
                        className="rounded-md p-1 transition hover:bg-gray-200"
                      >
                        <FiCopy size={14} />
                      </button>
                    </div>
                  </td>

                  <td className="px-8 py-5">
                    {payment.razorpayPaymentId ? (
                      <div className="flex items-center gap-2">
                        <span
                          className="max-w-[220px] truncate font-mono text-sm text-gray-700"
                          title={payment.razorpayPaymentId}
                        >
                          {payment.razorpayPaymentId}
                        </span>

                        <button
                          onClick={() =>
                            copyText(payment.razorpayPaymentId as string)
                          }
                          className="rounded-md p-1 transition hover:bg-gray-200"
                        >
                          <FiCopy size={14} />
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>

                  <td className="px-8 py-5 whitespace-nowrap">
                    <div>
                      <p className="font-medium text-gray-800">
                        {new Date(payment.createdAt).toLocaleDateString()}
                      </p>

                      <p className="text-sm text-gray-500">
                        {new Date(payment.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPayments.length === 0 && (
            <div className="py-16 text-center text-gray-500">
              No matching transactions found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
