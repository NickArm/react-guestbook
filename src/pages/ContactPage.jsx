import { useParams } from "react-router-dom";

export default function ContactPage() {
  const { slug } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-sky-700">Contact – {slug}</h1>
      <p className="mt-4">Lia Armeni</p>
      <p>Email: lia_armeni@hotmail.com</p>
      <p>Phone: +30-6981-381259</p>
    </div>
  );
}
