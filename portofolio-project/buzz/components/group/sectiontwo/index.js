import "./sectiontwo.css";

export default function SectionTwo({ children }) {
  return (
    <div className="backdrop-layer">
      <div className="empty-space"></div>
      <div className="section-two"></div>
      {children}
    </div>
  );
}
