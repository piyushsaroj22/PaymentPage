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
      const query = search.toLowerCase().trim();

      if (!query) return true;

      const date = new Date(payment.createdAt);

      const dateString = date.toLocaleDateString("en-IN");
      const timeString = date.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
      });

      const fullDateTime = date.toLocaleString("en-IN");

      const monthShort = date.toLocaleString("en-US", {
        month: "short",
      });

      const monthLong = date.toLocaleString("en-US", {
        month: "long",
      });

      const year = date.getFullYear().toString();

      const day = date.getDate().toString();

      const today = new Date();

      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      const isSameDate = (a: Date, b: Date) =>
        a.getDate() === b.getDate() &&
        a.getMonth() === b.getMonth() &&
        a.getFullYear() === b.getFullYear();

      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      const isThisWeek = date >= startOfWeek && date <= endOfWeek;

      const isThisMonth =
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      if (query === "today") return isSameDate(date, today);

      if (query === "yesterday") return isSameDate(date, yesterday);

      if (query === "this week") return isThisWeek;

      if (query === "this month") return isThisMonth;

      return (
        payment.razorpayOrderId.toLowerCase().includes(query) ||
        (payment.razorpayPaymentId || "").toLowerCase().includes(query) ||
        payment.status.toLowerCase().includes(query) ||
        payment.amount.toString().includes(query) ||
        dateString.toLowerCase().includes(query) ||
        timeString.toLowerCase().includes(query) ||
        fullDateTime.toLowerCase().includes(query) ||
        monthShort.toLowerCase().includes(query) ||
        monthLong.toLowerCase().includes(query) ||
        year.includes(query) ||
        `${day} ${monthShort}`.toLowerCase().includes(query) ||
        `${day} ${monthLong}`.toLowerCase().includes(query) ||
        `${day} ${monthLong} ${year}`.toLowerCase().includes(query)
      );
    });
  }, [payments, search]);

  const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);

  const successCount = payments.filter(
    (p) => p.status.toLowerCase() === "success",
  ).length;

  const pendingCount = payments.filter(
    (p) => p.status.toLowerCase() === "pending", // TODO
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
            placeholder="Search by Order ID, Payment ID, Status, Amount, Date, Time..."
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
