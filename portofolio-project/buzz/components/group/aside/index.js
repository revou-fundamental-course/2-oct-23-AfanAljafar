import "./aside.css";

export default function Aside({ children }) {
  return (
    <div className="aside">
      <p className="p">{children}</p>
    </div>
  );
}
