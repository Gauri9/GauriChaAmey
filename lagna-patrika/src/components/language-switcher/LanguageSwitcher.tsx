import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed right-6 top-6 z-50 flex gap-2 rounded-full bg-white/80 p-1 shadow-md backdrop-blur">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-4 py-2 text-sm transition ${
          language === "en"
            ? "bg-[#5b1f22] text-white"
            : "text-gray-600"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("mr")}
        className={`rounded-full px-4 py-2 text-sm transition ${
          language === "mr"
            ? "bg-[#5b1f22] text-white"
            : "text-gray-600"
        }`}
      >
        मराठी
      </button>
    </div>
  );
}