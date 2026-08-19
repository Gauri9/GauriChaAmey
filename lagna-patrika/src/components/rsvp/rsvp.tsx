import { motion } from "framer-motion";
import { wedding } from "../../data/wedding";

export default function RSVP() {
  return (
    <section className="bg-surface px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-secondary">
            We Would Love To Have You
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-5xl">
            RSVP
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-text-secondary">
            Your presence would make our celebration even more special.
            Kindly let us know if you’ll be joining us.
          </p>

          <motion.a
            href={wedding.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm tracking-wide text-white shadow-md"
          >
            RSVP Now
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}