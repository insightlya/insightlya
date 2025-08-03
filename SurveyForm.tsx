// components/SurveyForm.tsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function SurveyForm() {
  const [form, setForm] = useState({ name: "", age: "", feedback: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, "responses"), form);
    window.location.href = "/thanks";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Nama Anda" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
      <input type="number" name="age" placeholder="Umur" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
      <textarea name="feedback" placeholder="Pendapat Anda" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Kirim</button>
    </form>
  );
}
