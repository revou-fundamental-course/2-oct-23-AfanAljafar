import Link from "next/link";
import Image from "next/image";
import "./homebutton.css";

export default function HomeButton({ children, href, type, onClickEvent }) {
  return (
    <button className="home-button" type={type} onClick={onClickEvent}>
      <Link href={href}>
        <Image
          className="home-icon"
          src="/home.png"
          width={60}
          height={30}
          alt="logo"
        />
        {children}
      </Link>
    </button>
  );
}
