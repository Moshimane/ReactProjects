import "../css/style.css";
// const header = { color: "blue", fontSize: "140px" };

export default function InlineComponent() {
  return (
    <div>
      {/* <h1 style={{ color: "blue", fontSize: "140px" }}>Inline Component</h1> */}
      {/* <h1 style={header}>Inline Component</h1> */}
      <h1 className="header">Inline Component</h1>
    </div>
  );
}
