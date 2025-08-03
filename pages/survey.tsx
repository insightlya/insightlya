// pages/survey.tsx
import SurveyForm from "../components/SurveyForm";

export default function SurveyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Form Survei Insightlya</h2>
        <SurveyForm />
      </div>
    </div>
  );
}
