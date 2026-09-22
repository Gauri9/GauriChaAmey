import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wedding } from "../../data/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const weddingDate = new Date(wedding.weddingDateISO);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate.getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background px-6 py-16 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
          className="font-serif font-bold text-5xl text-primary"
        >
          Counting the Moments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 text-text-secondary"
        >
          Until we begin our forever together
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <TimeCard value={timeLeft.days} label="Days" />

          <TimeCard value={timeLeft.hours} label="Hours" />

          <TimeCard value={timeLeft.minutes} label="Minutes" />

          <TimeCard value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
}

interface TimeCardProps {
  value: number;
  label: string;
}

function TimeCard({ value, label }: TimeCardProps) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -7, transition: { duration: 0.2 } }}
      className="rounded-xl border border-border bg-surface p-5 md:p-8 shadow-sm transition-shadow hover:shadow-lg"
    >
      <AnimatePresence mode="popLayout">
        <motion.h3
          key={value}
          initial={{ opacity: 0, rotateX: -90, y: -18 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: 18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ transformOrigin: "center bottom" }}
          className="font-serif text-3xl md:text-5xl text-primary [transform-style:preserve-3d]"
        >
          {value}
        </motion.h3>
      </AnimatePresence>

      <p className="mt-3 uppercase tracking-[0.2em] text-text-light text-xs md:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
