document.addEventListener("DOMContentLoaded", () => {
  const scrollButtons = document.querySelectorAll("[data-scroll-target]");
  const scrollTopButton = document.querySelector(".scroll-top");
  const githubButton = document.querySelector("[data-open-github]");
  const topBar = document.querySelector(".top-bar");

  // Visitor counter (persisted per device via localStorage)
  const VISITOR_KEY = "vibe_landing_visitor_count";
  const visitorEl = document.getElementById("visitor-count");
  if (visitorEl) {
    let count = parseInt(localStorage.getItem(VISITOR_KEY) || "0", 10);
    count += 1;
    localStorage.setItem(VISITOR_KEY, String(count));
    visitorEl.textContent = count.toLocaleString();
  }

  // Theme switch (dark / light)
  const THEME_KEY = "vibe_landing_theme";
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  const applyTheme = (theme) => {
    html.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.classList.toggle("is-light", theme === "light");
      themeToggle.setAttribute("aria-label", theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환");
    }
  };

  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

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

