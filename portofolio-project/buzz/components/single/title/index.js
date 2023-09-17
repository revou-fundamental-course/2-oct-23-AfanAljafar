import "./Title.css";
import Image from "next/image";
export default function Title({ children }) {
  return (
    <div className="Title-comp">
      <Image src="/logo.png" width={80} height={80} alt="logo" />
      {children}
    </div>
  );
}
