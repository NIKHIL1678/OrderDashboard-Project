import StatusBadge from '../ui/StatusBadge';

export default function OrderTable({ orders }) {
  // Empty State Handling
  if (!orders || orders.length === 0) {
    return (
      <div className="flex items-center justify-center p-12 border border-dashed border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950">
        <span className="text-sm font-mono text-gray-500 dark:text-gray-500 tracking-widest">
          SYS_ERR: NO_DATA_FOUND
        </span>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-xs font-mono tracking-wider text-gray-500 dark:text-gray-400 uppercase">
            <th className="px-6 py-4 font-medium">Order ID</th>
            <th className="px-6 py-4 font-medium">Employee</th>
            <th className="px-6 py-4 font-medium">Date</th>
            <th className="px-6 py-4 font-medium text-right">Amount</th>
            <th className="px-6 py-4 font-medium text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
          {orders.map((order) => (
            <tr 
              key={order.id} 
              className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
            >
              {/* ID Column */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-mono text-gray-900 dark:text-gray-100">{order.id}</span>
              </td>
              
              {/* Employee Column */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">{order.employee}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{order.role}</span>
                </div>
              </td>
              
              {/* Date Column */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-gray-600 dark:text-gray-400 font-mono text-xs">{order.date}</span>
              </td>
              
              {/* Amount Column - Right Aligned for numerical scanning */}
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <span className="font-mono font-medium text-gray-900 dark:text-gray-100">{order.amount}</span>
              </td>
              
              {/* Status Column */}
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <StatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}