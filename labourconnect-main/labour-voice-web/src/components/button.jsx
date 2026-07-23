export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "px-6 py-3 rounded-xl font-medium transition " +
        "bg-[#5a9a4b] text-white hover:bg-[#4c8640] " +
        "shadow-sm hover:shadow-md " +
        className
      }
    >
      {children}
    </button>
  );
}
