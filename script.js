// variables
const logos = document.querySelectorAll(".logo");
const buttons = document.querySelectorAll(".button");
const words = document.querySelectorAll(".words");
const images = document.querySelectorAll(".img");
const others = document.querySelectorAll(".others");
console.log(others);
// observer options
const options = {
  root: null,
  threshold: 0,
};
// Reuseable Animation Function
const animation = (entries, className) => {
  entries.forEach((entry) => {
    entry.target.classList.remove(className);
    if (entry.target.classList.contains("img"))
      entry.target.attributes[1] = entry.target.dataset.img;
    if (!entry.isIntersecting) entry.target.classList.add(className);
  });
};

// Function to loop thru array object to be observed
const arrayOfObject = (objectArray, observer) => {
  objectArray.forEach((object) => {
    observer.observe(object);
  });
};

// ALL CALL BACK FUNCTIONS
const logoCallbackFunc = (entries) => {
  animation(entries, "logo__animation");
};
const linkCallbackFunc = (entries) => {
  animation(entries, "link__animation");
};

const wordsCallbackFunc = (entries) => {
  animation(entries, "words__animation");
};

const imgCallbackFunc = (entries) => {
  animation(entries, "img__blur");
};

const othersCallbackFunc = (entries) => {
  animation(entries, "others__animation");
};

// Function to call on all arrayOfObject functions
const allArrays = () => {
  arrayOfObject(logos, logoObserver);
  arrayOfObject(buttons, linkObserver);
  arrayOfObject(words, wordsObserver);
  arrayOfObject(images, imgObserver);
  arrayOfObject(others, othersObserver);
};

// Observers
const logoObserver = new IntersectionObserver(logoCallbackFunc, options);

const linkObserver = new IntersectionObserver(linkCallbackFunc, options);

const wordsObserver = new IntersectionObserver(wordsCallbackFunc, options);

const imgObserver = new IntersectionObserver(imgCallbackFunc, options);
const othersObserver = new IntersectionObserver(othersCallbackFunc, options);
allArrays();
