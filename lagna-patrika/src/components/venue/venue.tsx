import { motion } from "framer-motion";
import { wedding } from "../../data/wedding";

export default function Venue() {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-secondary">
            Join Us
          </p>

          <h2 className="mt-3 font-serif font-bold text-3xl text-primary md:text-5xl">
            Venue
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-secondary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-border bg-surface p-7 shadow-sm md:p-10"
        >
          <h3 className="font-serif text-3xl text-primary">
            {wedding.venue.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {wedding.venue.address}
          </p>

          <p className="mt-2 text-sm text-text-light">
            {wedding.venue.city}
          </p>

          <a
            href={wedding.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-primary px-7 py-3 text-sm tracking-wide text-white transition hover:bg-primary-light"
          >
            Open in Google Maps
          </a>
        </motion.div>

      </div>
    </section>
  );
}