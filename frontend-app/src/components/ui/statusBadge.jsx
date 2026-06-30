export default function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800",
    Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800",
    Cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800",
  };

  const currentStyle = styles[status] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";

  return (
    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${currentStyle}`}>
      {status}
    </span>
  );
}