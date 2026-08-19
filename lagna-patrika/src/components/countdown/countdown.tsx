import { useEffect, useState } from "react";
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

        <h2 className="font-serif font-bold text-5xl text-primary">
          Counting the Moments
        </h2>

        <p className="mt-4 text-text-secondary">
          Until we begin our forever together
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          <TimeCard value={timeLeft.days} label="Days" />

          <TimeCard value={timeLeft.hours} label="Hours" />

          <TimeCard value={timeLeft.minutes} label="Minutes" />

          <TimeCard value={timeLeft.seconds} label="Seconds" />

        </div>

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
    <div className="rounded-xl border border-border bg-surface p-5 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <h3 className="font-serif text-3xl md:text-5xl text-primary">
        {value}
      </h3>

      <p className="mt-3 uppercase tracking-[0.2em] text-text-light text-xs md:text-sm">
        {label}
      </p>

    </div>
  );
}