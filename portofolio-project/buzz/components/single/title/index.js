import "./Title.css";
import Image from "next/image";
export default function Title({ children }) {
  return (
    <div className="Title-comp">
      <Image src="/logo.png" width={115} height={115} alt="logo" />
      {children}
    </div>
  );
}
