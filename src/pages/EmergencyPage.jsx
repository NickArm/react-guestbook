import { useParams } from "react-router-dom";

export default function EmergencyPage() {
  const { slug } = useParams();

  const contacts = [
    {
      label: "Hospital",
      number: "166",
      address: "Kontokali, Corfu",
      icon: "fa-solid fa-truck-medical",
      color: "text-red-600"
    },
    {
      label: "Fire Department",
      number: "199",
      address: "Eulias Andreadi 1",
      icon: "fa-solid fa-fire-extinguisher",
      color: "text-orange-500"
    },
    {
      label: "Police Station",
      number: "100",
      address: "Eulias Andreadi 1",
      icon: "fa-solid fa-shield-halved",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-red-700 text-center mb-4">
        Emergency Numbers
      </h1>

      <div className="space-y-4">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-red-50 border border-red-100 p-4 rounded-lg shadow-sm"
          >
            <i className={`${item.icon} text-2xl ${item.color} mt-1`} />
            <div>
              <h2 className="font-semibold text-gray-800">{item.label}</h2>
              <p className="text-sm text-gray-700">
                <strong className="text-black">{item.number}</strong> – {item.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
