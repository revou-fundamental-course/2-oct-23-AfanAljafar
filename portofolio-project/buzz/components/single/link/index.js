import Link from "next/link";
import "./Link.css";

export default function LinkComp({ children, href }) {
  return (
    <Link className="Link-comp" href={href}>
      {children}
    </Link>
  );
}
