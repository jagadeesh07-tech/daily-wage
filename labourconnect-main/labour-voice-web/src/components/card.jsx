export default function Card({ children, className = "" }) {
  return (
    <div className={"rounded-2xl bg-white shadow-md p-6 " + className}>
      {children}
    </div>
  );
}
