import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";

export default function ContactPage() {
  const property = useProperty();
  if (!property || !property.owners || property.owners.length === 0) {
    return <p className="text-center text-gray-500 py-6">Loading contact info...</p>;
  }

  const owner = property.owners[0];
  console.log(owner);
  return (
    <div className="contact-page">
      {/* Header */}
      <h2 className="text-xl italic text-center">Let’s keep in touch!</h2>
      <div className="mt-4 flex justify-center">
        <img
          src={owner.photo || "/assets/images/user-image.jpeg"}
          alt={owner.name}
          className="rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Message */}
      <div className="mt-4 bg-gray-100 rounded-lg p-6 text-center">
        <p className="text-sm text-gray-700 italic">{owner.message}</p>
        <p className="mt-2 font-handwritten text-lg font-bold">{owner.name}</p>
      </div>

      {/* Contacts */}
      <div className="contact-items">
        {owner.contacts.map((contact, i) => (
          <div key={i} className="flex items-center contact-item">
            {contact.url ? (
              <a
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3 ${contact.color || ""}`}
              >
                <i className={`${contact.icon} text-xl`} />
                <p className="text-sm font-semibold">{contact.value}</p>
              </a>
            ) : (
              <>
                <i className={`${contact.icon} text-xl`} />
                <p className="text-sm">{contact.value}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
