const images = document.querySelectorAll("[data-src]");
const options = {
  threshold: 0.1,
};
const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add("is-visible");

      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
};
const observer = new IntersectionObserver(onEntry, options);
images.forEach((img) => observer.observe(img));
