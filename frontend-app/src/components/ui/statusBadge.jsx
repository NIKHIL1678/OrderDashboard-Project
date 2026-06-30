export default function StatusBadge({ status }) {
  const baseStyle = "px-2 py-1 text-[10px] font-mono tracking-widest uppercase border";
  
  const styles = {
    Completed: "text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-900/50 dark:bg-emerald-950/30",
    Pending: "text-amber-700 border-amber-200 bg-amber-50 dark:text-amber-400 dark:border-amber-900/50 dark:bg-amber-950/30",
    Cancelled: "text-red-700 border-red-200 bg-red-50 dark:text-red-400 dark:border-red-900/50 dark:bg-red-950/30",
  };
  
  const currentStyle = styles[status] || "text-gray-700 border-gray-200 bg-gray-50 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-900";

  return (
    <span className={`${baseStyle} ${currentStyle}`}>
      {status}
    </span>
  );
}