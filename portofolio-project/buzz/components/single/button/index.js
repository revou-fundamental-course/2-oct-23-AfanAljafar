import Link from "next/link";
import "./Button.css";

export default function Button({ children, type, onClickEvent, href }) {
  return (
    <button className="Button-comp" type={type} onClick={onClickEvent}>
      <Link className="button-link" href={href}>
        {children}
      </Link>
    </button>
  );
}
