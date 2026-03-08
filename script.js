document.addEventListener("DOMContentLoaded", () => {
  const scrollButtons = document.querySelectorAll("[data-scroll-target]");
  const scrollTopButton = document.querySelector(".scroll-top");
  const githubButton = document.querySelector("[data-open-github]");
  const topBar = document.querySelector(".top-bar");

  const smoothScrollTo = (targetSelector) => {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 72; // account for sticky header
    window.scrollTo({
      top: offset < 0 ? 0 : offset,
      behavior: "smooth",
    });
  };

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-scroll-target");
      if (targetSelector) smoothScrollTo(targetSelector);
    });
  });

  window.addEventListener("scroll", () => {
    const y = window.scrollY || window.pageYOffset;

    if (topBar) {
      topBar.classList.toggle("scrolled", y > 24);
    }

    if (!scrollTopButton) return;
    if (y > 260) {
      scrollTopButton.classList.add("visible");
    } else {
      scrollTopButton.classList.remove("visible");
    }
  });

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (githubButton) {
    githubButton.addEventListener("click", () => {
      const url = "https://github.com/junsang-dong/cloud-vibe-1007-docker";
      window.open(url, "_blank", "noopener");
    });
  }
});

