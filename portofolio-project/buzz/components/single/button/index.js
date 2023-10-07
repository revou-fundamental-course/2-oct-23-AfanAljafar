import "./Button.css";

export default function Button({ children, type, onClickEvent }) {
  return (
    <button className="Button-comp" type={type} onClick={onClickEvent}>
      {children}
    </button>
  );
}
