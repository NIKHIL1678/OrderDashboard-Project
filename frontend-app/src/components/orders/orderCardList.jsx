import StatusBadge from "../ui/statusBadge";

export default function OrderCardList({ orders }) {
  if (orders.length === 0) {
    return <div className="p-8 text-center text-gray-500 dark:text-gray-400">No orders found.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {orders.map((order) => (
        <div 
          key={order.id} 
          className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm flex flex-col gap-3"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{order.id}</div>
              <div className="font-medium text-gray-900 dark:text-white">{order.employee}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{order.role}</div>
            </div>
            <StatusBadge status={order.status} />
          </div>
          
          <div className="pt-3 mt-1 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">{order.date}</span>
            <span className="font-semibold text-gray-900 dark:text-white">{order.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
}