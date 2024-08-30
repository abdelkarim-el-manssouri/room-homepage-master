import desktopImageHero1 from "/public/images/desktop-image-hero-1.jpg";
import desktopImageHero2 from "/images/desktop-image-hero-2.jpg";
import desktopImageHero3 from "/images/desktop-image-hero-3.jpg";
import mobileImageHero1 from "/images/mobile-image-hero-3.jpg";
import mobileImageHero2 from "/images/mobile-image-hero-3.jpg";
import mobileImageHero3 from "/images/mobile-image-hero-3.jpg";

export const carousel = [
  {
    id: 1,
    url: desktopImageHero1,
    url2: mobileImageHero1,
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. Create a room in your 
      own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    id: 2,
    url: desktopImageHero2,
    url2: mobileImageHero2,
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    id: 3,
    url: desktopImageHero3,
    url2: mobileImageHero3,
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
  },
  // {
  //   id: 4,
  //   url: mobileImageHero1,
  // },
  // {
  //   id: 5,
  //   url: mobileImageHero2,
  // },
  // {
  //   id: 6,
  //   url: mobileImageHero3,
  // },
];

export const navLinks = [
  {
    id: 1,
    label: "home",
    link: "/",
  },
  {
    id: 2,
    label: "shop",
    link: "/shop",
  },
  {
    id: 3,
    label: "about",
    link: "/about",
  },
  {
    id: 4,
    label: "contact",
    link: "/contact",
  },
];

export const bgNames = [
  {
    id: 1,
    bgName: "hero",
  },
  {
    id: 2,
    bgName: "hero2",
  },
  {
    id: 3,
    bgName: "hero3",
  },
];
