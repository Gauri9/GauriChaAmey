import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import TimelineItem from "./timeline-item";

export default function Timeline() {

    const { language } = useLanguage();
    const t = translations[language];
    
  return (
    <div className="relative mt-14">

      {/* Vertical Line */}

      <div className="absolute left-5 top-0 h-full w-px bg-secondary/40" />

      <div className="space-y-14">
        {t.events.map((event) => (
          <TimelineItem
            key={event.title}
            {...event}
          />
        ))}
      </div>
    </div>
  );
}