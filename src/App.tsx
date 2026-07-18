import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

const services = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
  "Motion",
  "Three.js",
  "UI/UX",
  "WebGL",
  "AI Tools",
];

const rotations = [-5, 3, -2, 4, -3, 5, -4, 2, -3, 4, -2, 3];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const menuContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.14,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: {
      duration: 0.2,
    },
  },
};

type CircleArrowProps = {
  variant?: "light" | "dark";
  size?: "small" | "large";
};

function CircleArrow({
  variant = "light",
  size = "large",
}: CircleArrowProps) {
  const sizeClasses =
    size === "large"
      ? "size-11 sm:size-12 2xl:size-14"
      : "size-9 sm:size-10 2xl:size-11";

  return (
    <button
      type="button"
      aria-label="Open section"
      className={`
        ${sizeClasses}
        grid shrink-0 place-items-center rounded-full
        border transition-all duration-300
        hover:scale-105 hover:rotate-45
        active:scale-95
        ${
          variant === "dark"
            ? "border-white/20 bg-[#080A1E] text-white"
            : "border-white/70 bg-white text-[#080A1E]"
        }
      `}
    >
      <ArrowUpRight
        size={size === "large" ? 22 : 17}
        strokeWidth={1.8}
      />
    </button>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <main
      className="
        min-h-screen w-full overflow-x-hidden
        bg-[#E8EEF2]
        p-2
        sm:p-4
        lg:p-6
        2xl:p-8
      "
    >
      <section
        className="
          relative mx-auto w-full max-w-[2320px]
          overflow-hidden
          rounded-[22px]
          border border-white/70
          bg-[#F7FAFC]
          p-2
          shadow-[0_24px_80px_rgba(8,23,63,0.10)]
          sm:rounded-[30px] sm:p-4
          lg:rounded-[38px] lg:p-5
          2xl:rounded-[48px] 2xl:p-7
        "
      >
        {/* Header */}
        <header
          className="
            relative z-50
            flex h-[62px] items-center justify-between
            px-2
            sm:h-[70px] sm:px-3
            lg:h-[78px]
            2xl:h-[96px] 2xl:px-4
          "
        >
          <a
            href="#home"
            aria-label="MIBZ home"
            className="flex items-center gap-2 text-[#080A1E]"
            onClick={closeMenu}
          >
            <span
              className="
                font-kabisat
                text-[1.25rem]
                leading-none tracking-normal
                sm:text-[1.5rem]
                lg:text-[1.65rem]
                2xl:text-[2rem]
              "
            >
              MIBZ
            </span>

            <span
              className="
                size-2 rounded-full
                bg-[#2BD7F4]
                shadow-[0_0_14px_rgba(43,215,244,0.9)]
                2xl:size-2.5
              "
            />
          </a>

          {/* Desktop navigation */}
          <nav
            className="
              hidden items-center gap-1
              rounded-full
              border border-[#08173F]/10
              bg-white/80
              p-1.5
              text-sm font-medium
              shadow-[0_8px_30px_rgba(8,23,63,0.06)]
              backdrop-blur-xl
              lg:flex
              2xl:text-base
            "
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  rounded-full px-4 py-2.5
                  text-[#08173F]
                  transition-all duration-300
                  hover:bg-[#E8EEF2]
                  hover:text-[#019AED]
                  2xl:px-7 2xl:py-3
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="
                hidden rounded-full
                bg-[#080A1E]
                px-5 py-2.5
                text-sm font-medium text-white
                shadow-[0_10px_30px_rgba(8,10,30,0.18)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#019AED]
                sm:block
                lg:px-6 lg:py-3
                2xl:px-8 2xl:py-4 2xl:text-base
              "
            >
              Let&apos;s Talk
            </a>

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="
                relative grid size-10 place-items-center
                overflow-hidden rounded-full
                border border-[#08173F]/10
                bg-white text-[#08173F]
                shadow-[0_8px_24px_rgba(8,23,63,0.08)]
                transition-all duration-300
                active:scale-95
                sm:size-11
                lg:hidden
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_30%_20%,rgba(43,215,244,0.24),transparent_65%)]
                "
              />

              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <X size={21} strokeWidth={1.8} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Menu size={22} strokeWidth={1.7} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </header>

        {/* Modern mobile navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-navigation"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                fixed inset-0 z-[100]
                overflow-hidden
                bg-[#080A1E]/55
                p-2
                backdrop-blur-md
                sm:p-4
                lg:hidden
              "
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  closeMenu();
                }
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: -26,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -18,
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 27,
                }}
                className="
                  relative flex h-full w-full
                  flex-col overflow-hidden
                  rounded-[28px]
                  border border-white/20
                  bg-[#F7FAFC]
                  shadow-[0_32px_100px_rgba(8,10,30,0.45)]
                "
              >
                {/* Decorative background */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-28 -top-28
                    size-72 rounded-full
                    bg-[#2BD7F4]/20
                    blur-[80px]
                  "
                />

                <div
                  className="
                    pointer-events-none absolute
                    -bottom-32 -left-28
                    size-80 rounded-full
                    bg-[#019AED]/15
                    blur-[90px]
                  "
                />

                <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" />

                {/* Menu header */}
                <div
                  className="
                    relative z-10
                    flex h-[72px] shrink-0
                    items-center justify-between
                    border-b border-[#08173F]/10
                    px-5
                  "
                >
                  <a
                    href="#home"
                    aria-label="MIBZ home"
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-[#080A1E]"
                  >
                    <span className="font-kabisat text-[1.45rem] leading-none">
                      MIBZ
                    </span>

                    <span
                      className="
                        size-2 rounded-full
                        bg-[#2BD7F4]
                        shadow-[0_0_14px_rgba(43,215,244,0.9)]
                      "
                    />
                  </a>

                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    className="
                      grid size-11 place-items-center
                      rounded-full
                      bg-[#080A1E] text-white
                      shadow-[0_10px_25px_rgba(8,10,30,0.18)]
                      transition-transform duration-200
                      active:scale-90
                    "
                  >
                    <X size={21} strokeWidth={1.8} />
                  </button>
                </div>

                {/* Menu links */}
                <motion.nav
                  variants={menuContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="
                    relative z-10 flex flex-1
                    flex-col justify-center
                    overflow-y-auto
                    px-5 py-5
                  "
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="
                        text-[0.65rem] font-semibold
                        uppercase tracking-[0.22em]
                        text-[#019AED]
                      "
                    >
                      Navigation
                    </span>

                    <span className="h-px flex-1 bg-[#08173F]/10" />
                  </div>

                  <div className="space-y-1">
                    {navigation.map((item, index) => (
                      <motion.a
                        key={item.label}
                        variants={menuItemVariants}
                        href={item.href}
                        onClick={closeMenu}
                        className="
                          group flex min-h-[66px]
                          items-center justify-between
                          border-b border-[#08173F]/10
                          py-3 text-[#080A1E]
                        "
                      >
                        <span className="flex items-baseline gap-4">
                          <span
                            className="
                              min-w-5
                              text-[0.65rem] font-medium
                              text-[#019AED]
                            "
                          >
                            0{index + 1}
                          </span>

                          <span
                            className="
                              text-[clamp(2.1rem,10vw,3.25rem)]
                              font-medium leading-none
                              tracking-[-0.06em]
                              transition-transform duration-300
                              group-active:translate-x-2
                            "
                          >
                            {item.label}
                          </span>
                        </span>

                        <span
                          className="
                            grid size-10 shrink-0
                            place-items-center rounded-full
                            border border-[#08173F]/10
                            bg-white
                            transition-all duration-300
                            group-active:rotate-45
                            group-active:bg-[#019AED]
                            group-active:text-white
                          "
                        >
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.7}
                          />
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.nav>

                {/* Mobile contact area */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.38,
                    duration: 0.45,
                  }}
                  className="
                    relative z-10 shrink-0
                    border-t border-[#08173F]/10
                    p-4
                  "
                >
                  <a
                    href="mailto:hello@example.com"
                    className="
                      group flex items-center
                      justify-between overflow-hidden
                      rounded-[22px]
                      bg-[#080A1E]
                      p-4 text-white
                      shadow-[0_18px_40px_rgba(8,10,30,0.20)]
                    "
                  >
                    <div>
                      <span
                        className="
                          text-[0.65rem] uppercase
                          tracking-[0.18em]
                          text-[#2BD7F4]
                        "
                      >
                        Start a project
                      </span>

                      <p
                        className="
                          mt-1 text-xl font-medium
                          tracking-[-0.035em]
                        "
                      >
                        Let&apos;s build something.
                      </p>
                    </div>

                    <span
                      className="
                        grid size-11 shrink-0
                        place-items-center rounded-full
                        bg-[#019AED]
                        transition-transform duration-300
                        group-active:rotate-45
                      "
                    >
                      <ArrowUpRight size={20} />
                    </span>
                  </a>

                  <div className="mt-4 flex items-center justify-between px-1">
                    <p className="text-xs leading-5 text-[#718096]">
                      Available for projects
                      <br />
                      UAE · Remote
                    </p>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://github.com/MibinThomas"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="
                          grid size-10 place-items-center
                          rounded-full
                          border border-[#08173F]/10
                          bg-white text-[#08173F]
                          transition-colors
                          active:bg-[#E8EEF2]
                        "
                      >
                        <FaGithub size={17} />
                      </a>

                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="
                          grid size-10 place-items-center
                          rounded-full
                          border border-[#08173F]/10
                          bg-white text-[#08173F]
                          transition-colors
                          active:bg-[#E8EEF2]
                        "
                      >
                        <FaLinkedinIn size={17} />
                      </a>

                      <a
                        href="mailto:hello@example.com"
                        aria-label="Email"
                        className="
                          grid size-10 place-items-center
                          rounded-full
                          border border-[#08173F]/10
                          bg-white text-[#08173F]
                          transition-colors
                          active:bg-[#E8EEF2]
                        "
                      >
                        <Mail size={17} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive Bento Grid */}
        <div
          className="
            grid grid-cols-1 gap-2.5
            sm:gap-3
            md:grid-cols-6
            lg:gap-4
            xl:grid-cols-12
            2xl:gap-5
          "
        >
          {/* Main hero */}
          <motion.article
            id="home"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.65 }}
            className="
              group relative
              min-h-[590px]
              overflow-hidden
              rounded-[24px]
              md:col-span-6 md:min-h-[620px]
              lg:min-h-[660px] lg:rounded-[32px]
              xl:col-span-6 xl:min-h-[650px]
              2xl:min-h-[750px] 2xl:rounded-[42px]
            "
            style={{
              background:
                "radial-gradient(circle at 75% 18%, #2BD7F4 0%, #019AED 18%, transparent 43%), linear-gradient(135deg, #080A1E 0%, #08173F 35%, #083D93 67%, #019AED 100%)",
            }}
          >
            <div className="hero-grid absolute inset-0 opacity-35" />

            <div
              className="
                absolute -left-[22%] top-[16%]
                size-[65%] rounded-full
                border border-[#2BD7F4]/35
                shadow-[0_0_100px_rgba(43,215,244,0.16)]
                sm:-left-[12%] sm:size-[50%]
              "
            />

            <div
              className="
                absolute -bottom-[8%] right-[-15%]
                h-[58%] w-[75%]
                rounded-t-[50%]
                bg-[linear-gradient(180deg,#080A1E_0%,#08173F_45%,#0C63C2_100%)]
                opacity-95
                transition-transform duration-700
                group-hover:scale-[1.03]
                sm:right-[3%] sm:h-[70%] sm:w-[50%]
              "
            />

            <div
              className="
                absolute bottom-0 left-[12%]
                h-[55%] w-[22%]
                border-l border-white/20
                bg-[repeating-linear-gradient(90deg,rgba(192,224,220,0.55)_0px,rgba(192,224,220,0.55)_3px,transparent_3px,transparent_13px)]
                opacity-45
                sm:h-[67%] sm:w-[18%]
              "
            />

            <div
              className="
                absolute right-[7%] top-[10%]
                text-[6rem] font-semibold
                leading-none tracking-[-0.09em]
                text-white/[0.04]
                sm:text-[9rem]
                2xl:text-[13rem]
              "
            >
              XR
            </div>

            <div
              className="
                relative z-10
                flex min-h-[590px]
                flex-col justify-between
                p-5
                sm:min-h-[620px] sm:p-8
                lg:min-h-[660px] lg:p-10
                xl:min-h-[650px]
                2xl:min-h-[750px] 2xl:p-14
              "
            >
              <div>
                <div
                  className="
                    mb-5 inline-flex items-center gap-2
                    rounded-full
                    border border-white/15
                    bg-white/10
                    px-3 py-2
                    text-[0.65rem] font-medium
                    uppercase tracking-[0.14em]
                    text-[#C0E0DC]
                    backdrop-blur-md
                    sm:px-4 sm:text-xs
                    2xl:text-sm
                  "
                >
                  <Sparkles size={14} />
                  AI-assisted MERN developer
                </div>

                <h1
                  className="
                    max-w-[920px]
                    text-[clamp(2.65rem,12vw,4.8rem)]
                    font-medium leading-[0.88]
                    tracking-[-0.07em]
                    text-white
                    md:text-[clamp(4rem,8vw,6rem)]
                    xl:text-[clamp(4rem,5vw,7.2rem)]
                  "
                >
                  Building digital
                  <br />
                  products for the
                  <br />
                  next era.
                </h1>
              </div>

              <div
                className="
                  flex flex-col items-start gap-5
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <CircleArrow />

                <p
                  className="
                    max-w-[330px]
                    text-left text-sm
                    leading-[1.4]
                    text-[#C0E0DC]
                    sm:text-right sm:text-lg
                    lg:text-xl
                    2xl:max-w-[430px]
                    2xl:text-2xl
                  "
                >
                  Modern interfaces, intelligent workflows and immersive web
                  experiences built with design and technology.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Ideas card */}
          <motion.article
            id="about"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="
              group relative
              min-h-[570px]
              overflow-hidden
              rounded-[24px]
              bg-[#08173F]
              md:col-span-3 md:min-h-[610px]
              lg:rounded-[32px]
              xl:col-span-3 xl:min-h-[650px]
              2xl:min-h-[750px] 2xl:rounded-[42px]
            "
          >
            <div
              className="absolute inset-x-0 top-0 h-[54%]"
              style={{
                background:
                  "radial-gradient(circle at 48% 44%, #C0E0DC 0%, #2BD7F4 18%, transparent 43%), linear-gradient(145deg, #08173F 0%, #083D93 52%, #019AED 100%)",
              }}
            />

            <div
              className="
                absolute left-1/2 top-[8%]
                h-[40%] w-[58%]
                -translate-x-1/2
                rounded-t-[49%]
                border-[14px] border-b-0
                border-[#E0B36F]/65
                sm:border-[18px]
                2xl:border-[26px]
              "
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="
                absolute left-1/2 top-[38%] z-20
                size-20 -translate-x-1/2
                rounded-full
                bg-[radial-gradient(circle_at_33%_25%,#ffffff_0%,#C0E0DC_30%,#2BD7F4_70%,#019AED_100%)]
                shadow-[0_15px_50px_rgba(43,215,244,0.35)]
                sm:size-24
                2xl:size-36
              "
            />

            <div
              className="
                absolute inset-x-0 bottom-0
                h-[58%]
                rounded-t-[24px]
                border-t border-white/80
                bg-[#F7FAFC]
                p-5
                sm:p-6
                lg:rounded-t-[30px]
                2xl:rounded-t-[38px]
                2xl:p-10
              "
            >
              <div className="flex h-full flex-col justify-end">
                <span
                  className="
                    mb-3 text-[0.65rem]
                    font-semibold uppercase
                    tracking-[0.16em]
                    text-[#019AED]
                    sm:text-xs
                    2xl:text-sm
                  "
                >
                  Ideas into products
                </span>

                <h2
                  className="
                    max-w-[390px]
                    text-[clamp(2rem,8vw,3.2rem)]
                    font-medium leading-[0.95]
                    tracking-[-0.055em]
                    text-[#080A1E]
                    md:text-[clamp(2.1rem,4vw,3.4rem)]
                    xl:text-[clamp(2rem,2.5vw,4rem)]
                  "
                >
                  Turning complex ideas into clear digital experiences.
                </h2>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <p
                    className="
                      max-w-[210px]
                      text-xs leading-5
                      text-[#718096]
                      sm:text-sm
                      2xl:text-base
                      2xl:leading-6
                    "
                  >
                    Strategy, product thinking, interface design and technical
                    execution.
                  </p>

                  <CircleArrow variant="dark" size="small" />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Technology card */}
          <motion.article
            id="works"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="
              group relative
              min-h-[570px]
              overflow-hidden rounded-[24px]
              md:col-span-3 md:min-h-[610px]
              lg:rounded-[32px]
              xl:col-span-3 xl:min-h-[650px]
              2xl:min-h-[750px] 2xl:rounded-[42px]
            "
            style={{
              background:
                "radial-gradient(circle at 72% 14%, rgba(43,215,244,0.9) 0%, transparent 23%), linear-gradient(145deg, #08173F 0%, #0C63C2 48%, #019AED 100%)",
            }}
          >
            <div
              className="
                absolute -right-[20%] top-[5%]
                h-[91%] w-[84%]
                rounded-[49%]
                bg-[repeating-linear-gradient(0deg,#C0E0DC_0px,#C0E0DC_8px,#2BD7F4_8px,#2BD7F4_19px)]
                opacity-95
                transition-transform duration-700
                group-hover:-translate-y-3
              "
            />

            <div
              className="
                absolute bottom-[10%] left-[4%]
                h-[42%] w-[46%]
                rotate-[-11deg]
                rounded-[48%]
                bg-[linear-gradient(180deg,#080A1E_0%,#08173F_50%,#0C63C2_100%)]
                shadow-[0_35px_70px_rgba(8,10,30,0.38)]
              "
            />

            <div
              className="
                relative z-10 flex h-full
                min-h-[570px]
                items-end justify-between
                gap-3 p-5
                md:min-h-[610px]
                sm:p-6
                xl:min-h-[650px]
                2xl:min-h-[750px]
                2xl:p-10
              "
            >
              <div className="mb-2 max-w-[150px] sm:max-w-[180px]">
                <span
                  className="
                    text-[0.65rem]
                    uppercase tracking-[0.16em]
                    text-[#C0E0DC]
                    sm:text-xs
                    2xl:text-sm
                  "
                >
                  Technology
                </span>

                <p
                  className="
                    mt-3 text-xs leading-5
                    text-white/70
                    sm:text-sm
                    2xl:text-base
                    2xl:leading-6
                  "
                >
                  React, Node, AI integrations, 3D experiences and scalable
                  architecture.
                </p>
              </div>

              <p
                className="
                  self-center
                  text-[clamp(2.4rem,9vw,4rem)]
                  font-medium leading-[0.9]
                  tracking-[-0.06em]
                  text-white
                  md:text-[clamp(2.5rem,5vw,4.3rem)]
                  xl:text-[clamp(2.7rem,3.2vw,5.2rem)]
                "
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Code — Design — Motion
              </p>
            </div>
          </motion.article>

          {/* Frontend card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="
              relative flex min-h-[210px]
              flex-col justify-between
              overflow-hidden rounded-[22px]
              border border-[#08173F]/10
              bg-white p-5
              md:col-span-3 md:min-h-[220px]
              lg:rounded-[28px] lg:p-6
              xl:col-span-4 xl:min-h-[225px]
              2xl:min-h-[260px]
              2xl:rounded-[36px] 2xl:p-9
            "
          >
            <div className="absolute -right-14 -top-16 size-52 rounded-full bg-[#2BD7F4]/10 blur-2xl" />

            <div className="relative flex items-start justify-between">
              <span className="rounded-full border border-[#08173F]/15 px-3 py-1 text-xs text-[#08173F]">
                frontend
              </span>

              <ArrowRight
                size={19}
                strokeWidth={1.7}
                className="text-[#019AED]"
              />
            </div>

            <div
              className="
                relative flex flex-col
                items-start gap-5
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <p
                className="
                  max-w-[210px]
                  text-sm leading-5
                  text-[#718096]
                  2xl:text-base
                  2xl:leading-6
                "
              >
                Responsive, accessible and motion-rich user interfaces.
              </p>

              <strong
                className="
                  text-[clamp(3rem,13vw,4.8rem)]
                  font-medium leading-[0.82]
                  tracking-[-0.075em]
                  text-[#080A1E]
                  md:text-[clamp(3rem,6vw,5rem)]
                  xl:text-[clamp(3rem,4.5vw,6.5rem)]
                "
              >
                React
              </strong>
            </div>
          </motion.article>

          {/* Backend card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="
              relative flex min-h-[210px]
              overflow-hidden rounded-[22px]
              bg-[#08173F] p-5 text-white
              md:col-span-3 md:min-h-[220px]
              lg:rounded-[28px] lg:p-6
              xl:col-span-4 xl:min-h-[225px]
              2xl:min-h-[260px]
              2xl:rounded-[36px] 2xl:p-9
            "
          >
            <div
              className="
                absolute -bottom-[110%] left-[3%]
                h-[200%] w-[145%]
                rounded-[50%]
                bg-[linear-gradient(135deg,#0C63C2_0%,#083D93_45%,#019AED_100%)]
                opacity-90
              "
            />

            <div className="relative z-10 flex w-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs text-[#C0E0DC]">
                  backend
                </span>

                <div className="grid size-8 place-items-center rounded-full bg-white text-[#080A1E]">
                  <ArrowRight size={17} strokeWidth={1.8} />
                </div>
              </div>

              <div
                className="
                  flex flex-col items-start gap-5
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-[210px]
                    text-sm leading-5
                    text-white/70
                    2xl:text-base
                    2xl:leading-6
                  "
                >
                  Secure APIs, databases, automation and scalable server logic.
                </p>

                <strong
                  className="
                    text-[clamp(3rem,13vw,4.8rem)]
                    font-medium leading-[0.82]
                    tracking-[-0.075em]
                    md:text-[clamp(3rem,6vw,5rem)]
                    xl:text-[clamp(3rem,4.5vw,6.5rem)]
                  "
                >
                  Node
                </strong>
              </div>
            </div>
          </motion.article>

          {/* Skills card */}
          <motion.article
            id="contact"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="
              relative flex min-h-[230px]
              items-center justify-center
              overflow-hidden rounded-[22px]
              border border-[#08173F]/10
              bg-[#F7FAFC] p-4
              md:col-span-6 md:min-h-[220px]
              lg:rounded-[28px] lg:p-6
              xl:col-span-4 xl:min-h-[225px]
              2xl:min-h-[260px]
              2xl:rounded-[36px] 2xl:p-8
            "
          >
            <div
              className="
                relative flex max-w-[650px]
                flex-wrap content-center
                justify-center gap-2
                2xl:gap-3
              "
            >
              {services.map((service, index) => (
                <span
                  key={service}
                  className="
                    rounded-full
                    border border-[#08173F]/25
                    bg-white
                    px-3.5 py-2
                    text-xs font-medium
                    text-[#08173F]
                    shadow-[0_5px_16px_rgba(8,23,63,0.05)]
                    transition-colors duration-300
                    hover:border-[#019AED]
                    hover:bg-[#019AED]
                    hover:text-white
                    sm:px-4 sm:text-sm
                    2xl:px-5
                    2xl:py-2.5
                    2xl:text-base
                  "
                  style={{
                    transform: `rotate(${rotations[index]}deg)`,
                  }}
                >
                  {service}
                </span>
              ))}
            </div>

            <span
              className="
                absolute bottom-3 left-1/2
                size-3 -translate-x-1/2
                rounded-full
                bg-[#2BD7F4]
                shadow-[0_0_16px_rgba(43,215,244,0.9)]
              "
            />
          </motion.article>
        </div>
      </section>
    </main>
  );
}

export default App;