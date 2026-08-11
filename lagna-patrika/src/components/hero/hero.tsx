import { motion } from "framer-motion";
import { wedding } from "../../data/wedding";
import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {

  const { language } = useLanguage();
  const t = translations[language];

    
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 py-12">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-3xl rounded-xl bg-surface px-10 py-16 shadow-2xl"
      >
        {/* Top Divider */}

        <motion.div
          //variants={item}
          className="mb-10 flex items-center gap-5"
        >
          <div className="h-px flex-1 bg-amber-300" />
          <span className="text-amber-700 tracking-[0.35em] text-sm uppercase">
            {t.title}
          </span>
          <div className="h-px flex-1 bg-amber-300" />
        </motion.div>

        {/* Family */}

        <motion.p
          //variants={item}
          className="text-center text-sm uppercase tracking-[0.3em] text-gray-500"
        >
          {t.family}
        </motion.p>

        {/* Couple */}

        <motion.div
          //variants={item}
          className="mt-12 text-center"
        >
          <h1 className="font-serif text-6xl tracking-[0.28em] text-primary">
            {wedding.bride.toUpperCase()}
          </h1>

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="my-5 text-4xl text-amber-600"
          >
            ♡
          </motion.div>

          <h1 className="font-serif text-6xl tracking-[0.28em] text-primary">
            {wedding.groom.toUpperCase()}
          </h1>
        </motion.div>

        {/* Invitation */}

        <motion.div
          //variants={item}
          className="mt-12 text-center"
        >
          <p className="text-lg italic text-gray-600">
            {t.invite}
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-amber-400" />

          <p className="mt-8 text-2xl font-medium text-gray-800">
            {wedding.weddingDate}
          </p>

          <p className="mt-2 tracking-widest uppercase text-gray-500">
            {wedding.location}
          </p>
        </motion.div>

        {/* Button */}

        <motion.div
          //variants={item}
          className="mt-14 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--color-primary-light)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-full bg-primary px-10 py-4 text-white tracking-wider shadow-lg transition-colors"
          >
            {t.explore}
          </motion.button>
        </motion.div>

        {/* Bottom Divider */}

        <motion.div
          //variants={item}
          className="mt-14 flex items-center gap-5"
        >
          <div className="h-px flex-1 bg-amber-300" />

          <motion.span
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-xl text-amber-700"
          >
            ↓
          </motion.span>

          <div className="h-px flex-1 bg-amber-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}