import { useParams } from "react-router-dom";

export default function EmergencyPage() {
  const { slug } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-red-700">Emergency Numbers – {slug}</h1>
      <ul className="mt-4 space-y-2">
        <li><strong>Hospital:</strong> 166 – Kontokali, Corfu</li>
        <li><strong>Fire Department:</strong> 199 – Eulias Andreadi 1</li>
        <li><strong>Police Station:</strong> 100 – Eulias Andreadi 1</li>
      </ul>
    </div>
  );
}
