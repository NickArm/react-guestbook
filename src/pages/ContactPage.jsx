import { useState } from 'react';
import { useProperty } from "../context/PropertyContext";

export default function ContactPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Replace this with: const property = useProperty(); when using in your app
  const property = useProperty();
  const host = property?.host;

  if (!property || !host) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading contact info...</p>
        </div>
      </div>
    );
  }

  // Function to get background gradient based on contact type
  const getContactBg = (type, color) => {
    // If there's a custom color, use neutral background
    if (color) {
      return "from-gray-50 to-gray-100 border-gray-200";
    }
    
    const bgMap = {
      email: "from-blue-50 to-blue-100 border-blue-200",
      phone: "from-green-50 to-green-100 border-green-200",
      whatsapp: "from-green-50 to-emerald-100 border-green-200",
      viber: "from-purple-50 to-purple-100 border-purple-200",
      website: "from-gray-50 to-gray-100 border-gray-200",
      instagram: "from-pink-50 to-purple-100 border-pink-200",
      facebook: "from-blue-50 to-indigo-100 border-blue-200",
      twitter: "from-sky-50 to-blue-100 border-sky-200",
      linkedin: "from-blue-50 to-indigo-100 border-blue-200",
      location: "from-red-50 to-orange-100 border-red-200"
    };
    return bgMap[type] || "from-gray-50 to-gray-100 border-gray-200";
  };

  // Function to get contact description
  const getContactDescription = (type) => {
    const descMap = {
      email: "Send an email",
      phone: "Call directly",
      whatsapp: "Chat on WhatsApp",
      viber: "Message on Viber",
      website: "Visit website",
      instagram: "Follow on Instagram",
      facebook: "Connect on Facebook",
      twitter: "Follow on Twitter",
      linkedin: "Connect on LinkedIn",
      location: "View location"
    };
    return descMap[type] || "Contact method";
  };

  return (
    <div className="min-h-screen">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-12">

        {/* Owner Photo Section */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white p-2 rounded-full shadow-xl">
              <div className={`w-32 h-32 rounded-full overflow-hidden transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <img
                  src={host.photo || "/assets/images/user-image.jpeg"}
                  alt={host.name}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              {!imageLoaded && (
                <div className="absolute inset-2 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div className="relative mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
            <div className="absolute -top-4 left-8 w-8 h-8 bg-white transform rotate-45 border-l border-t border-blue-100"></div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💭</span>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-4">
                  "{host.message || "Please do not hesitate to contact me with any questions during your stay."}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src={host.photo || "/assets/images/user-image.jpeg"}
                      alt={host.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg font-handwritten">{host.name}</p>
                    <p className="text-sm text-gray-500">Your Host</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Items */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Get in Touch</h3>
            <p className="text-gray-600">Choose your preferred way to contact me</p>
          </div>

          {(host.contacts || []).map((contact, i) => {
            const isLink = !!contact.url;
            const description = getContactDescription(contact.type);
            
            const ContactContent = () => (
              <div className={`relative group bg-gradient-to-r bg-[#dce6e8] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1`}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <i className={`${contact.icon} text-2xl ${contact.color || 'text-gray-600'}`}></i>
                  </div>
                  
                  <div className="flex-1">
                    <p className={`font-semibold text-lg mb-1 ${contact.color || 'text-gray-800'}`}>
                      {contact.value}
                    </p>
                    <p className="text-sm text-gray-600">
                      {description}
                    </p>
                  </div>
                  
                  {isLink && (
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <span className="text-gray-600 text-sm">→</span>
                    </div>
                  )}
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );

            return isLink ? (
              <a
                key={i}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                className="block transform transition-transform duration-200 active:scale-95"
              >
                <ContactContent />
              </a>
            ) : (
              <div key={i} className="cursor-default">
                <ContactContent />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}