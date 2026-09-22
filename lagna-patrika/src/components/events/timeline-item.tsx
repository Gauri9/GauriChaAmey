import { motion } from "framer-motion";

interface TimelineItemProps {
  index: number;
  title: string;
  date: string;
  month: string;
  year: string;
  day: string;
  time: string;
  venue: string;
}

export default function TimelineItem({
  index,
  title,
  date,
  month,
  year,
  day,
  time,
  venue,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 55, rotate: index % 2 === 0 ? 2 : -2 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: "easeOut" }}
      className="relative flex gap-6"
    >
      {/* Timeline */}

      <div className="relative flex w-10 justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.18, rotate: 15 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
            delay: index * 0.08,
          }}
          className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md"
        >
          ✦
        </motion.div>
      </div>

      {/* Content */}

      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="flex-1 rounded-xl bg-surface p-6 shadow-sm transition-shadow hover:shadow-lg"
      >
        <h3 className="font-serif text-3xl text-primary">{title}</h3>

        <div className="mt-3 h-px w-14 bg-secondary" />

        <p className="mt-4 text-sm text-text-secondary">
          {day} • {date} {month} {year}
        </p>

        <p className="mt-2 text-lg text-primary">{time}</p>

        <p className="mt-1 text-sm text-text-light">{venue}</p>
      </motion.div>
    </motion.div>
  );
}
