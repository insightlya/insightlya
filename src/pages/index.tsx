// src/pages/index.tsx
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "responses"), {
      name,
      feedback,
      createdAt: new Date(),
    });
    router.push("/thankyou");
  };

  return (
    <main>
      <h1>Insightlya Survey</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" />
        <textarea required value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Feedback" />
        <button type="submit">Kirim</button>
      </form>
    </main>
  );
}
