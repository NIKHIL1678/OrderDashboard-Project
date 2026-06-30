import StatusBadge from "../ui/statusBadge";

export default function OrderTable({ orders }) {
  if (orders.length === 0) {
    return <div className="p-8 text-center text-gray-500 dark:text-gray-400">No orders found.</div>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300">
          <tr>
            <th className="p-4 font-semibold">Order ID</th>
            <th className="p-4 font-semibold">Employee</th>
            <th className="p-4 font-semibold">Date</th>
            <th className="p-4 font-semibold">Amount</th>
            <th className="p-4 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
              <td className="p-4 font-mono font-medium text-gray-900 dark:text-gray-100">{order.id}</td>
              <td className="p-4">
                <div className="font-medium text-gray-900 dark:text-white">{order.employee}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{order.role}</div>
              </td>
              <td className="p-4 text-gray-600 dark:text-gray-400">{order.date}</td>
              <td className="p-4 font-medium text-gray-900 dark:text-gray-100">{order.amount}</td>
              <td className="p-4"><StatusBadge status={order.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}