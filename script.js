
const animatedElements = document.querySelectorAll(
  ".animate-section, .animate-card, .animate-hero"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedElements.forEach(element => {
  observer.observe(element);
});

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(
  (entries, skillObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;

        if (bar.classList.contains("level-85")) bar.style.width = "85%";
        if (bar.classList.contains("level-80")) bar.style.width = "80%";
        if (bar.classList.contains("level-75")) bar.style.width = "75%";
        if (bar.classList.contains("level-70")) bar.style.width = "70%";

        skillObserver.unobserve(bar);
      }
    });
  },
  {
    threshold: 0.5
  }
);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});
