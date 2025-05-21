import { useParams } from "react-router-dom";

export default function WifiPage() {
  const { slug } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-sky-700">WiFi Info – {slug}</h1>
      <div className="mt-4 text-lg">
        <p><strong>Network:</strong> liasapartment</p>
        <p><strong>Password:</strong> wifi password</p>
      </div>
    </div>
  );
}
