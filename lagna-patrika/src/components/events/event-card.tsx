interface EventCardProps {
  title: string;
  date: string;
  month: string;
  year: string;
  day: string;
  time: string;
  venue: string;
}

export default function EventCard({
  title,
  date,
  month,
  year,
  day,
  time,
  venue,
}: EventCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-center">
        <p className="font-serif text-5xl text-primary">
          {date}
        </p>

        <p className="mt-1 tracking-[0.4em] text-sm text-secondary">
          {month}
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-light">
          {day} • {year}
        </p>
      </div>

      <h3 className="mt-3 font-serif text-2xl text-primary">
        {title}
      </h3>

      <div className="mt-6 space-y-2 text-sm text-text-secondary">
        <p>🕘 {time}</p>
        <p>📍 {venue}</p>
      </div>
    </div>
  );
}