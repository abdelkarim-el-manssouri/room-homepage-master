import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { bgNames, carousel, navLinks } from "../data/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [bgImg, setBgImg] = useState("hero");

  const goToPrevious = () => {
    const isFirstSlide = imageIndex === 0;
    const newIndex = isFirstSlide ? carousel.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = imageIndex === carousel.length - 1;
    const newIndex = isLastSlide ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };

  const changeBgImageToPrev = () => {
    const isFirstSlide = bgImg === 0;
    const newIndex = isFirstSlide ? bgNames.length - 1 : bgNames - 1;
    setBgImg(newIndex);
  };

  const changeBgImageToNext = () => {
    const isLastSlide = imageIndex === bgNames.length - 1;
    const newIndex = isLastSlide ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };

  return (
    <main>
      <Container>
        <motion.div
          variants={componentWrapperVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="relative h-full grid [grid-template-areas:'hero''heroDesc'] sm:[grid-template-areas:revert] sm:grid-cols-[[hero-start]_1fr_[hero-end_heroDesc-start]_0.65fr_[heroDesc-end]]">
            <motion.div
              variants={componentWrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`${bgNames[imageIndex].bgName} [grid-area:hero] h-[40rem] relative pt-auto bg-cover bg-center bg-no-repeat w-full`}
            >
              <div className="flex justify-center sm:justify-normal sm:flex-row items-center gap-x-16 relative text-primary-100 my-16 px-12 w-full">
                <button
                  onClick={() => setOpen((pv) => !pv)}
                  className="sm:hidden absolute left-[5%]"
                >
                  <span className="sr-only">menu</span>
                  <img src="/images/icon-hamburger.svg" alt="" />
                </button>

                <Link to="/">
                  <img src="/images/logo.svg" alt="website logo" />
                </Link>
                <ul className="hidden sm:flex gap-x-14 text-[1.25rem]">
                  {navLinks.map((el) => (
                    <li
                      key={el.id}
                      className="capitalize relative hover:after:absolute hover:after:bottom-0 after:duration-300 after:bg-primary-100 after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-0.5 hover:after:w-[60%] transition duration-150 ease-in"
                    >
                      <Link to={el.link}>{el.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <AnimatePresence>
              {open && (
                <>
                  <motion.div
                    key="bgMenu"
                    variants={bgMenuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-primary-900/60 absolute inset-0"
                  />
                  <motion.div
                    key="menu"
                    variants={menuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="sm:hidden flex justify-around absolute w-full py-20 bg-white"
                  >
                    <button onClick={() => setOpen((pv) => !pv)}>
                      <span className="sr-only">close menu</span>
                      <img src="/images/icon-close.svg" alt="" />
                    </button>
                    <ul className="flex gap-x-14 text-[1.25rem] text-primary-900">
                      {navLinks.map((el, index) => (
                        <motion.li
                          variants={menuListItems}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          custom={index}
                          key={index}
                          className="capitalize relative hover:after:absolute hover:after:bottom-0 after:duration-300 after:bg-primary-900 after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-0.5 hover:after:w-[60%] transition duration-150 ease-in"
                        >
                          <a href="#">{el.label}</a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                key="hero-desc-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="grid place-content-center [grid-area:heroDesc] relative sm:h-[40rem] h-auto max-w-full px-[clamp(5rem,5rem,6rem)] py-16"
              >
                <motion.h1
                  key="hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-[2.8rem] sm:text-[4rem] leading-[3rem] font-fw-semi-bold sm:font-fw-bold text-primary-900"
                >
                  {carousel[imageIndex].title}
                </motion.h1>
                <motion.p
                  key="hero-description"
                  className="my-6 text-pretty text-[1.25rem]"
                >
                  {carousel[imageIndex].description}
                </motion.p>
                <button className="flex items-center gap-x-6 pt-4 group">
                  <span className="text-[1.1rem] tracking-[1rem] text-primary-900 uppercase group-hover:text-primary-300 transition-colors ease-in duration-150">
                    Shop now
                  </span>
                  <img
                    className="group-hover:translate-x-4 group-active:scale-75 transition ease-in group-hover:fill-primary-300"
                    src="/images/icon-arrow.svg"
                    alt=""
                  />
                </button>
                <div className="flex absolute right-0 top-[-60px] sm:left-0 sm:top-[calc(100%-60px)]">
                  <button
                    onClick={() => {
                      changeBgImageToPrev();
                      goToPrevious();
                    }}
                    className="group grid place-content-center size-24 [grid-area:prevButton] bg-primary-900 hover:bg-primary-600 transition ease-in duration-200"
                  >
                    <span className="sr-only">prev</span>
                    <img
                      className="group-hover:-translate-x-1 group-active:scale-90 transition ease-in"
                      src="/images/icon-angle-left.svg"
                      alt=""
                    />
                  </button>
                  <button
                    onClick={() => {
                      changeBgImageToNext();
                      goToNext();
                    }}
                    className="group grid place-content-center size-24 [grid-area:nextButton] bg-primary-900 hover:bg-primary-600 transition ease-in duration-200"
                  >
                    <span className="sr-only">next</span>
                    <img
                      className="group-hover:translate-x-1 group-active:scale-90 transition ease-in"
                      src="/images/icon-angle-right.svg"
                      alt=""
                    />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="grid [grid-template-areas:'img1''about''img2'] sm:[grid-template-areas:revert] sm:grid-cols-[[img1-start]_1fr_[img1-end_about-start]_1.4fr_[about-end_img2-start]_1fr_[img2-end]]">
            <div className="[grid-area:img1] h-80 [background-image:url('/images/image-about-dark.jpg')] bg-cover bg-no-repeat bg-center" />
            <div className="[grid-area:about] px-[clamp(5rem,5rem,6rem)] py-16 grid place-content-center">
              <h2 className="text-[1.4rem] font-fw-bold uppercase tracking-[.4rem] text-primary-900">
                About our furniture
              </h2>
              <p className="mt-5 text-pretty text-[1.25rem]">
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
            <div className="[grid-area:img2] h-80 [background-image:url('/images/image-about-light.jpg')] bg-cover bg-no-repeat bg-center" />
          </div>
          <div className="text-center my-20 font-bold text-xl">
            Challenge by{" "}
            <a
              className="text-primary-900 hover:text-primary-600 transition-colors ease-in"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              className="text-primary-900 hover:text-primary-600 transition-colors ease-in capitalize"
              href="https://github.com/abdelkarim-el-manssouri"
            >
              Abdelkarim el manssouri
            </a>
            .
          </div>
        </motion.div>
      </Container>
    </main>
  );
};
export default Home;

const componentWrapperVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(20px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
  },
  exit: {
    opacity: 0,
    y: 20,
    filter: "blur(20px)",
    transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
  },
};

const menuVariants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};

const bgMenuVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.4, delay: 0.5 } },
};

const menuListItems = {
  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },
  animate: (index) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.1 * index,
    },
  }),
  exit: (index) => ({
    opacity: 0,
    filter: "blur(20px)",
    transition: {
      delay: -0.1 * index,
    },
  }),
};
