const startups = document.querySelector(".startups-list");
const icons = document.querySelector(".sect-four-icons");

const cardOne = document.querySelector(".card-one-deals");
const cardTwo = document.querySelector(".card-two-deals");
const cardThree = document.querySelector(".card-three-deals");

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
  "/assets/images/icon_1.png",
  "/assets/images/icon_2.png",
  "/assets/images/icon_3.png",
  "/assets/images/icon_4.png",
  "/assets/images/icon_5.png",
  "/assets/images/icon_6.png",
  "/assets/images/icon_7.png",
  "/assets/images/icon_8.png",
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
  span.classList.add("text-wrapper");

  span.appendChild(image);
  startups.appendChild(span);
});

socials.forEach((icon) => {
  const image = document.createElement("img");
  image.src = icon;

  const span = document.createElement("span");
  span.classList.add("text-wrapper");

  span.appendChild(image);

  icons.appendChild(span);
});

dealsOne.forEach((deal) => {
  const item = document.createElement("li");
  item.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black"/>
  </svg>
  ${deal}`;

  cardOne.appendChild(item);
});

dealsTwo.forEach((deal) => {
  const item = document.createElement("li");
  item.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" fill=none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black"/>
  </svg>
  ${deal}`;

  cardTwo.appendChild(item);
});

dealsThree.forEach((deal) => {
  const item = document.createElement("li");
  item.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" fill=none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black"/>
  </svg>
  ${deal}`;

  cardThree.appendChild(item);
});
