import { motion } from "framer-motion";
import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";
import Timeline from "./timeline";

export default function Events() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <h2 className="mt-3 font-serif text-3xl md:text-5xl font-bold text-primary">
            {t.eventsTitle}
          </h2>

          <p className="mt-5 text-sm md:text-base text-text-secondary">
            {t.eventsSubtitle}
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-secondary" />
        </motion.div>

        <Timeline />

      </div>
    </section>
  );
}