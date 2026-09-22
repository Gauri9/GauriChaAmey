import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import TimelineItem from "./timeline-item";

export default function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative mt-14">
      {/* Vertical Line */}

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute left-5 top-0 h-full w-px origin-top bg-secondary/40"
      />

      <div className="space-y-14">
        {t.events.map((event, index) => (
          <TimelineItem key={event.title} index={index} {...event} />
        ))}
      </div>
    </div>
  );
}
