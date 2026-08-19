import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  date: string;
  month: string;
  year: string;
  day: string;
  time: string;
  venue: string;
}

export default function TimelineItem({
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
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-6"
    >
      {/* Timeline */}

      <div className="relative flex w-10 justify-center">

        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md">
          ✦
        </div>

      </div>

      {/* Content */}

      <div className="flex-1 rounded-xl bg-surface p-6 shadow-sm">

        <h3 className="font-serif text-3xl text-primary">
          {title}
        </h3>

        <div className="mt-3 h-px w-14 bg-secondary" />

        <p className="mt-4 text-sm text-text-secondary">
          {day} • {date} {month} {year}
        </p>

        <p className="mt-2 text-lg text-primary">
          {time}
        </p>

        <p className="mt-1 text-sm text-text-light">
          {venue}
        </p>

      </div>

    </motion.div>
  );
}