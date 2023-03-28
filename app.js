const startups = document.querySelector(".startups-list");
const icons = document.querySelector(".platforms-icons");

const cardOne = document.querySelector(".personal ul");
const cardTwo = document.querySelector(".regular ul");
const cardThree = document.querySelector(".premium ul");

const images = [
  "/assets/images/1.png",
  "/assets/images/2.png",
  "/assets/images/3.png",
  "/assets/images/4.png",
  "/assets/images/5.png",
  "/assets/images/6.png",
  "/assets/images/7.png",
  "/assets/images/8.png",
  "/assets/images/9.png",
  "/assets/images/10.png",
  "/assets/images/11.png",
  "/assets/images/12.png",
  "/assets/images/13.png",
  "/assets/images/14.png",
  "/assets/images/15.png",
  "/assets/images/16.png",
];

const socials = [
  "/assets/images/icon_1.svg",
  "/assets/images/icon_2.svg",
  "/assets/images/icon_3.svg",
  "/assets/images/icon_4.svg",
  "/assets/images/icon_5.svg",
  "/assets/images/icon_6.svg",
  "/assets/images/icon_7.svg",
  "/assets/images/icon_8.svg",
];

const dealsOne = [
  "Up to 5 page each group",
  "Up to 10 group page",
  "5 Days group page saved",
];

const dealsTwo = [
  "Up to 15 page each group",
  "Download page up to 20 page",
  "Up to 10 group page",
  "15 Days group page saved",
];

const dealsThree = [
  "Unlimited group pages",
  "Unlimited download page",
  "Unlimited page each group",
  "Customize sorting group pages",
  "Customize group page name",
  "30 Days group page saved",
];

images.forEach((img) => {
  const image = document.createElement("img");
  image.src = img;

  const span = document.createElement("span");
  span.classList.add("wrapper");

  span.appendChild(image);
  startups.appendChild(span);
});

socials.forEach((icon) => {
  const image = document.createElement("img");
  image.src = icon;

  const iconContainer = document.createElement("span");
  const bg = document.createElement("div");

  iconContainer.appendChild(image);
  iconContainer.appendChild(bg);

  icons.appendChild(iconContainer);
});

dealsOne.forEach((deal) => {
  const item = document.createElement("li");
  const span = document.createElement("span");

  span.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black"/>
  </svg>
  <p>${deal}</p>`;

  item.appendChild(span);
  cardOne.appendChild(item);
});

dealsTwo.forEach((deal) => {
  const item = document.createElement("li");
  const span = document.createElement("span");

  span.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black"/>
  </svg>
  <p>${deal}</p>`;

  item.appendChild(span);
  cardTwo.appendChild(item);
});

dealsThree.forEach((deal) => {
  const item = document.createElement("li");
  const span = document.createElement("span");

  span.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black"/>
  </svg>
  <p>${deal}</p>`;

  item.appendChild(span);
  cardThree.appendChild(item);
});

gsap.registerPlugin(ScrollTrigger);
Splitting();

const heroTl = gsap.timeline({
  default: { ease: "Expo.inOut" },
});

heroTl.fromTo(
  [".logo img, .logo h4"],
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
  }
);

heroTl.fromTo(
  ".navbar li div",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
  },
  "-=0.5"
);

heroTl.fromTo(
  ".navbar .btns button",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 0.05,
  },
  "-=0.5"
);

// ScrollTrigger.create({
//   trigger: ".hero",
//   start: "bottom +=400px",
//   end: "bottom top+=200",
//   // once: true,
//   markers: true,
//   // pin: true,
//   scrub: true,
//   onEnter: () => {
//     gsap.to(".hero", {
//       y: 100,
//       ease: "none",
//     });
//   },
// });

ScrollTrigger.create({
  trigger: ".new-tabs-center",
  start: "top bottom-=180px",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".disposed-img", {
      top: 0,
      left: 0,
      right: 0,
      opacity: 0,
      stagger: 0.2,
      height: "6.15rem",
      width: "400px",
      transform: "translate(22%, 57%) rotate(0deg)",
      ease: "Expo.inOut",
    });

    gsap.to(
      ".new-tabs-center span",
      {
        y: 0,
        opacity: 1,
        ease: "Expo.inOut",
        // duration: 0.5,
      },
      "-=0.25"
    );

    gsap.to(
      ".new-tabs-center img",
      {
        transform: "scale(1)",
        ease: "Expo.inOut",
        // duration: 0.5,
      },
      "-=0.5"
    );
  },
});

ScrollTrigger.create({
  trigger: ".startups-list",
  start: "top bottom-=250px",
  once: true,
  // markers: true,
  // end: "bottom center",
  onEnter: () => {
    gsap.to(".startups-list img", {
      y: 0,
      stagger: 0.05,
      opacity: 1,
      ease: "Expo.inOut",
    });
  },
});

ScrollTrigger.create({
  trigger: ".platforms-icons",
  start: "top bottom-=200px",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".platforms-icons img", {
      y: 0,
      stagger: 0.05,
      opacity: 1,
      ease: "Expo.inOut",
    });
  },
});

const tweets = document.querySelectorAll(".tweets-shots img");

tweets.forEach((tweet) => {
  ScrollTrigger.create({
    trigger: tweet,
    start: "top bottom-=70px",
    once: true,
    // markers: true,
    onEnter: () => {
      gsap.to(tweet, {
        y: 0,
        opacity: 1,
        ease: "Expo.inOut",
      });
    },
  });
});

ScrollTrigger.create({
  trigger: ".tweets button",
  start: "top bottom-=100px",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".tweets button", {
      y: 0,
      opacity: 1,
      ease: "Expo.inOut",
      duration: 0.05,
    });
  },
});

const cards = document.querySelectorAll(".deals-card");

cards.forEach((card) => {
  const h3 = card.querySelector("h3");
  const chars = card.querySelectorAll(".char");
  ScrollTrigger.create({
    trigger: h3,
    start: "top bottom-=70px",
    once: true,
    // markers: true,
    onEnter: () => {
      gsap.to(chars, {
        y: 0,
        stagger: 0.05,
        ease: "Expo.inOut",
      });
    },
  });
});

// cards.forEach((card) => {
//   const p = card.querySelector("p");
//   const chars = card.querySelectorAll("p .char");
//   ScrollTrigger.create({
//     trigger: p,
//     start: "top bottom-=70px",
//     once: true,
//     // markers: true,
//     onEnter: () => {
//       gsap.to(chars, {
//         y: 0,
//         stagger: 0.05,
//         ease: "Expo.inOut",
//       });
//     },
//   });
// });

cards.forEach((card) => {
  const h2 = card.querySelector("h2");
  const h4 = card.querySelectorAll("h4");
  ScrollTrigger.create({
    trigger: h2,
    start: "top bottom-=200px",
    once: true,
    // markers: true,
    onEnter: () => {
      gsap.to([h2, h4], {
        y: 0,
        stagger: 0.05,
        opacity: 1,
        ease: "Expo.inOut",
      });
    },
  });
});

cards.forEach((card) => {
  const ul = card.querySelector("ul");
  const deal = card.querySelectorAll("ul li span");
  ScrollTrigger.create({
    trigger: ul,
    start: "top bottom-=200px",
    once: true,
    // markers: true,
    onEnter: () => {
      gsap.to(deal, {
        y: 0,
        stagger: 0.05,
        opacity: 1,
        ease: "Expo.inOut",
      });
    },
  });
});
