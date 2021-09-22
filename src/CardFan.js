import VectorFanShape from "./VectorFanShape";

export default function CardFan() {
  return (
    <div className="cardfan">
      <div>
        <VectorFanShape className="fan" color="#006D5B" />
        <VectorFanShape className="fan" color="#006D5B" />
        <VectorFanShape className="fan" color="#009B81" />
        <VectorFanShape className="fan" color="#009B81" />
        <VectorFanShape className="fan" color="#00C9A8" />
        <VectorFanShape className="fan" color="#00C9A8" />
        <VectorFanShape className="fan" color="#00F7CE" />
      </div>
    </div>
  );
}
