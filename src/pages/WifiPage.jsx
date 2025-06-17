import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import { FaWifi, FaKey, FaCopy } from "react-icons/fa6";
import { useState } from "react";

export default function WifiPage() {
  const { slug } = useParams();
  const property = useProperty();
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.log('Failed to copy');
    }
  };

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading Wi-Fi info...</p>;
  }

  return (
    <div className="wifi-page px-6 py-6 text-gray-800">
      {/* Intro text */}
      <div className="text-center px-2 text-gray-800 text-xs italic mb-8">
        <p>
          Stay connected with our complimentary high-speed Wi-Fi. 
          Simply connect using the credentials below.
        </p>
      </div>

      {/* WiFi Cards */}
      <div className="space-y-4">
        {/* Network Card */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaWifi className="text-primary text-2xl text-gray-700" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide">Network Name</h3>
                <p className="text-lg font-mono">{property.wifi.network}</p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(property.wifi.network, 'network')}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              title="Copy network name"
            >
              <FaCopy className={`text-sm ${copiedField === 'network' ? 'text-green-600' : ''}`} />
            </button>
          </div>
          {copiedField === 'network' && (
            <p className="text-xs text-primary mt-1">Network name copied!</p>
          )}
        </div>

        {/* Password Card */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaKey className="text-primary text-2xl text-gray-700" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide">Password</h3>
                <p className="text-lg font-mono">{property.wifi.password}</p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(property.wifi.password, 'password')}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              title="Copy password"
            >
              <FaCopy className={`text-sm ${copiedField === 'password' ? 'text-green-600' : ''}`} />
            </button>
          </div>
          {copiedField === 'password' && (
            <p className="text-xs text-primary mt-1">Password copied!</p>
          )}
        </div>
      </div>

      {/* Connection Instructions */}
      <div className="mt-8 bg-gray-50 rounded-lg p-4 border-l-4 border-primary">
        <h3 className="font-bold text-sm mb-2 text-gray-700">How to Connect</h3>
        <ol className="text-sm text-gray-600 space-y-1">
          <li>1. Open your device's Wi-Fi settings</li>
          <li>2. Select the network name above</li>
          <li>3. Enter the password when prompted</li>
          <li>4. Enjoy fast, free internet!</li>
        </ol>
      </div>

      {/* Footer message */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 italic">
          Having trouble connecting? Please let us know and we'll be happy to help.
        </p>
      </div>
    </div>
  );
}