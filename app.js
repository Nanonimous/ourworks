/* ─── Project Data ───────────────────────────────────────────
   Edit the objects below to customise your four projects.
   Each project has:
     - title        : string
     - description  : string
     - image        : path / URL to the project image
     - imageCaption : short caption shown on hover
     - link         : live project URL  (set "" to hide button)
     - youtube      : YouTube video ID  (set "" to hide button)
                      e.g. "dQw4w9WgXcQ" from youtu.be/dQw4w9WgXcQ
─────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    title: "Project Alpha",
    description:
      "A sleek productivity dashboard that centralises tasks, analytics and team collaboration into one unified interface. Built with performance and clarity in mind.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    imageCaption: "Dashboard overview — main analytics view",
    link: "https://example.com",
    youtube: "",
  },
  {
    title: "Project Beta",
    description:
      "An open-source design system that brings consistency across web products. Covers typography, colour tokens, components and accessibility patterns.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=80",
    imageCaption: "Component library — design tokens in use",
    link: "https://example.com",
    youtube: "dQw4w9WgXcQ",
  },
  {
    title: "Project Gamma",
    description:
      "A real-time collaborative canvas where distributed teams sketch, annotate and prototype ideas together — no sign-up required.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&q=80",
    imageCaption: "Live canvas — multi-user collaboration session",
    link: "",
    youtube: "dQw4w9WgXcQ",
  },
  {
    title: "Project Delta",
    description:
      "A minimal e-commerce storefront optimised for conversion. Features instant search, smooth cart animations and a streamlined checkout flow.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900&q=80",
    imageCaption: "Storefront — product listing page",
    link: "https://example.com",
    youtube: "",
  },
];

/* ─── Utilities ─────────────────────────────────────────────── */

function getYTEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

function getYTThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/* ─── SVG Icons ─────────────────────────────────────────────── */
const ICONS = {
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  zoom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>`,
};

/* ─── Render Cards ──────────────────────────────────────────── */

function renderCards() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  PROJECTS.forEach((p, i) => {
    const hasLink    = p.link    && p.link.trim()    !== "";
    const hasYT      = p.youtube && p.youtube.trim() !== "";

    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-index", i);

    card.innerHTML = `
      <div class="card-img-wrap" id="imgWrap${i}" tabindex="0" role="button" aria-label="Preview image for ${p.title}">
        <img
          src="${p.image}"
          alt="${p.title} screenshot"
          class="card-img"
          loading="lazy"
        />
        <div class="img-overlay">
          <span class="img-zoom-btn" aria-hidden="true">${ICONS.zoom}</span>
        </div>
        ${p.imageCaption ? `<span class="card-img-caption">${p.imageCaption}</span>` : ""}
      </div>

      <div class="card-body">
        <span class="card-index">Project ${String(i + 1).padStart(2, "0")}</span>
        <h2 class="card-title">${p.title}</h2>
        <p class="card-desc">${p.description}</p>

        <div class="card-actions">
          ${hasLink ? `
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="linkBtn${i}">
              ${ICONS.link} Visit Project
            </a>` : ""}

          <button class="btn btn-ghost" id="previewBtn${i}" aria-label="Preview image">
            ${ICONS.zoom} Preview Image
          </button>

          ${hasYT ? `
            <button class="yt-badge" id="ytBtn${i}" aria-label="Watch on YouTube">
              ${ICONS.play} Watch Video
            </button>` : ""}
        </div>
      </div>
    `;

    grid.appendChild(card);

    /* Image click → open image modal */
    const imgWrap  = card.querySelector(`#imgWrap${i}`);
    const prevBtn  = card.querySelector(`#previewBtn${i}`);

    function openImageModal() {
      document.getElementById("modalImage").src         = p.image;
      document.getElementById("modalImage").alt         = p.title;
      document.getElementById("modalImageCaption").textContent = p.imageCaption || p.title;
      document.getElementById("imageModal").classList.add("open");
      document.body.style.overflow = "hidden";
    }

    imgWrap.addEventListener("click", openImageModal);
    imgWrap.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openImageModal(); });
    prevBtn.addEventListener("click", openImageModal);

    /* YouTube click → open youtube modal */
    if (hasYT) {
      const ytBtn = card.querySelector(`#ytBtn${i}`);
      ytBtn.addEventListener("click", () => {
        document.getElementById("youtubeFrame").src = getYTEmbedUrl(p.youtube);
        document.getElementById("youtubeModal").classList.add("open");
        document.body.style.overflow = "hidden";
      });
    }
  });
}

/* ─── Modal Close Logic ─────────────────────────────────────── */

function closeModal(modalId, clearFrame) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (clearFrame) document.getElementById("youtubeFrame").src = "";
}

document.getElementById("closeImageModal").addEventListener("click", () => closeModal("imageModal", false));
document.getElementById("closeYoutubeModal").addEventListener("click", () => closeModal("youtubeModal", true));

document.getElementById("imageModal").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal("imageModal", false);
});
document.getElementById("youtubeModal").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal("youtubeModal", true);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal("imageModal",   false);
    closeModal("youtubeModal", true);
  }
});

/* ─── Dark Mode Toggle ──────────────────────────────────────── */

const html        = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
})();

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

/* ─── Footer year ───────────────────────────────────────────── */
document.getElementById("currentYear").textContent = new Date().getFullYear();

/* ─── Scroll-reveal (IntersectionObserver) ───────────────────── */
function initScrollReveal() {
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  cards.forEach((card, i) => {
    card.style.setProperty("--delay", `${i * 0.1}s`);
    observer.observe(card);
  });
}

/* ─── Typing effect for hero accent ─────────────────────────── */
function typeWriter(element, text, speed = 65) {
  element.textContent = "";
  element.classList.add("typing-cursor");
  let i = 0;

  function tick() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(tick, speed);
    } else {
      /* keep cursor visible a moment, then fade it out */
      setTimeout(() => element.classList.remove("typing-cursor"), 1800);
    }
  }

  /* start after hero entrance animation settles */
  setTimeout(tick, 700);
}

/* ─── Init ──────────────────────────────────────────────────── */
renderCards();
initScrollReveal();

/* Run typing effect on the .hero-accent span */
const accentEl = document.querySelector(".hero-accent");
if (accentEl) {
  const originalText = accentEl.textContent.trim();
  typeWriter(accentEl, originalText, 60);
}

