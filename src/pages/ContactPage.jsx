import { useProperty } from "../context/PropertyContext";

export default function ContactPage() {
  const property = useProperty();
  const owner = property?.owner;
  console.log("Owner data:", owner);
  console.log("Property data:", property);
  if (!property || !owner) {
    return <p className="text-center text-gray-500 py-6">Loading contact info...</p>;
  }

  return (
    <div className="px-6 text-gray-800">
      {/* Header */}
      <h2 className="text-xl italic text-center mt-6">Let’s keep in touch!</h2>
      <div className="mt-4 flex justify-center">
        <img
          src={owner.photo || "/assets/images/user-image.jpeg"}
          alt={owner.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Message Box */}
      <div className="mt-4 bg-gray-100 rounded-lg p-6 text-center">
        <p className="text-sm text-gray-700 italic">
          {owner.message || "Please do not hesitate to contact me with any questions during your stay."}
        </p>
        <p className="mt-2 font-handwritten text-lg font-bold">{owner.name}</p>
      </div>

      {/* Contact Items */}
      <div className="mt-6 space-y-3">
        {(owner.contacts || []).map((contact, i) => {
          const isLink = !!contact.url;
          const baseClasses = "flex items-center gap-3";
          const colorClass = contact.color || "";

          return isLink ? (
            <a
              key={i}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className={`${baseClasses} ${colorClass} hover:opacity-80`}
            >
              <i className={`${contact.icon} text-xl`} />
              <p className="text-sm font-semibold">{contact.value}</p>
            </a>
          ) : (
            <div key={i} className={baseClasses}>
              <i className={`${contact.icon} text-xl`} />
              <p className="text-sm">{contact.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
