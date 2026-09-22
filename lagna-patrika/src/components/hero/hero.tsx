import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { wedding } from "../../data/wedding";
import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.16,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    if (!isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [isOpen]);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background px-6 py-10 md:py-12">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed-invitation"
            initial={{ opacity: 0, scale: 0.88, rotateY: -12, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, rotateY: 90, x: 80 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}ganpati-stotra.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transformStyle: "preserve-3d",
            }}
            className="relative flex aspect-[3/4] w-full max-w-md flex-col items-center justify-end overflow-hidden rounded-xl border border-amber-200/80 p-5 text-center shadow-2xl md:max-w-lg"
          >
            <div className="pointer-events-none absolute inset-3 rounded-lg border border-amber-300/70 md:inset-5" />

            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              animate={{
                boxShadow: [
                  "0 0 8px rgba(252, 211, 77, 0.45)",
                  "0 0 24px rgba(252, 211, 77, 0.9)",
                  "0 0 8px rgba(252, 211, 77, 0.45)",
                ],
              }}
              whileHover={{
                scale: 1.06,
                y: -3,
                boxShadow: "0 0 32px rgba(252, 211, 77, 1)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-3 -translate-y-30 rounded-full bg-amber-300 px-8 py-3 text-sm font-semibold tracking-wider text-[#4A0E4E] shadow-lg"
              aria-label="Open wedding invitation"
            >
              Open Invitation
            </motion.button>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="text-lg text-amber-700"
              aria-hidden="true"
            >
              ↓
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="open-invitation"
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55 }}
            className="relative w-full max-w-lg origin-top rounded-xl bg-surface px-6 pt-20 pb-10 shadow-2xl md:max-w-3xl md:px-10 md:pt-28 md:pb-16"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}patrika-bg-3.jpg)`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Top Divider */}

            <motion.div
              variants={item}
              className="mb-10 flex items-center gap-5"
            >
              <div className="h-px flex-1 bg-amber-300" />
              <span className="text-amber-700 tracking-[0.35em] font-bold text-xs md:text-sm uppercase">
                {t.title}
              </span>
              <div className="h-px flex-1 bg-amber-300" />
            </motion.div>

            {/* Family */}

            <motion.p
              variants={item}
              className="text-center text-lg text-primary-dark"
            >
              {t.family}
            </motion.p>

            {/* Couple */}

            <motion.div variants={item} className="mt-12 text-center">
              <h1 className="font-serif text-4xl font-bold md:text-6xl tracking-[0.18em] md:tracking-[0.28em] text-primary">
                {wedding.bride.toUpperCase()}
              </h1>

              <img
                src={`${import.meta.env.BASE_URL}gatbandhan_.png`}
                className="mx-auto w-16 md:w-20 object-contain"
                alt="Gatbandhan"
              />

              <h1 className="font-serif text-4xl font-bold md:text-6xl tracking-[0.18em] md:tracking-[0.28em] text-primary">
                {wedding.groom.toUpperCase()}
              </h1>
            </motion.div>

            {/* Invitation */}

            <motion.div variants={item} className="mt-12 text-center">
              <p className="text-lg italic text-gray-600">{t.invite}</p>

              <div className="mx-auto mt-8 h-px w-28 bg-amber-400" />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: "easeOut",
                }}
                className="mt-8 font-serif text-2xl font-medium tracking-wide text-[#4A0E4E]"
              >
                {wedding.weddingDate}
              </motion.p>

              <p className="mt-2 tracking-widest uppercase text-[#4A0E4E]">
                {wedding.location}
              </p>
            </motion.div>

            {/* Bottom Divider */}

            <motion.div
              variants={item}
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
        )}
      </AnimatePresence>
    </section>
  );
}
