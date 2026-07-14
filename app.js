/* ─── Project Data ───────────────────────────────────────────────────────────
   Each project supports:
     title         : string
     description   : string
     images        : array of { src, caption }  — first image is the cover
                     (use a single-item array for one image)
     tags          : array of { label, type }  — type: "default" | "warning"
     link          : public URL            (omit or "" to hide)
     adminLink     : admin portal URL      (omit or "" to hide)
     youtube       : YouTube video ID      (omit or "" to hide)
     notice        : { icon, text }        — info / warning notice block
     credentials   : { username, password } — shown in collapsible access panel
     confidential  : string               — note under credentials
────────────────────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    title: "Aimpluss (Gemstones E-Commerce)",
    description:
      "A specialized e-commerce platform developed for showcasing and selling gemstones through a clean, organized, and user-friendly interface. The platform includes a dedicated Admin CMS that enables administrators to manage gemstone listings, update content, upload images, organize categories, and customize website content without modifying the code.",
    images: [
      {
        src:     "images/gem - public.png",
        caption: "Gemstone collection — browse & shop interface",
      },
      {
        src:     "images/gem - admin.png",
        caption: "Admin CMS — Adding gem and website contents",
      }
    ],
    tags: [
      { label: "E-Commerce",     type: "default" },
      { label: "Admin CMS",      type: "default" },
      { label: "In Development", type: "warning" },
    ],
    status:    "prototype",
    link:      "http://67.211.219.18/",
    adminLink: "http://67.211.219.18:3001/",
    youtube:   "",
    notice: {
      icon: "⚠",
      text: "This application is currently in the development / prototype phase. Please use HTTP (http://) instead of HTTPS (https://), as SSL is not yet configured.",
    },
    credentials: { username: "Admin", password: "123" },
    confidential:
      "These credentials are provided only for development, testing, and review purposes. They will be changed before the production release.",
  },

  {
    title: "Smiling Star (Daycare & Preschool Website)",
    description:
      "A daycare and preschool management platform that provides parents with information about the school, its programs, and the admission process. Includes a dedicated Admin CMS for managing admission enquiries, student attendance, payments, and generating PDF receipts and reports.",
    images: [
      {
        src:     "images/smiling start - public.png",
        caption: "Public website — programs & admission info for parents",
      },
      {
        src:     "images/smiling start - admin.jpeg",
        caption: "Admin CMS — Dashboard & management of enquiries, attendance, and payments",
      },
      {
        src:     "images/smiling start - admin stud.jpeg",
        caption: "student management & admission enquiries",
      },
      {
        src:     "images/smiling start - admin attendence.jpeg",
        caption: "attendance management & PDF report generation",
      },
      {
        src:     "images/smiling start - admin payment.jpeg",
        caption: "payment management & PDF receipt generation",
      },
    ],
    tags: [
      { label: "Daycare & Preschool", type: "default" },
      { label: "Admin CMS",           type: "default" },
      { label: "Live",                type: "default" },
    ],
    status:    "live",
    link:      "https://smilingstarsdaycare.in/",
    adminLink: "https://admin.smilingstarsdaycare.in/",
    youtube:   "",
    notice: {
      icon: "🔒",
      text: "The Admin Portal is part of a live commercial application and is restricted to authorized personnel. Administrator credentials are confidential and are not shared publicly. Therefore, a preview image of the admin dashboard has been provided instead.",
    },
  },

  {
    title: "Shivam Nadi (Astrology Website)",
    description:
      "A platform developed for a Nadi astrologer to showcase their services, share information about Nadi Astrology, and provide visitors with details about its history, significance, and consultation process. The platform also includes a dedicated Admin CMS for managing website content and updates.",
    images: [
      {
        src:     "images/shivam nadi - public.png",
        caption: "Public website — Nadi Astrology services & consultation info",
      },
      {
        src:     "images/shivam nadi - admin.png",
        caption: "admin appointment management ",
      },
      {
        src:     "images/shivam nadi - admin gallary.png",
        caption: "admin gallery management & image uploads",
      },
  
    ],
    tags: [
      { label: "Astrology",  type: "default" },
      { label: "Admin CMS",  type: "default" },
      { label: "Live",       type: "default" },
    ],
    status:    "live",
    link:      "https://sivamnadiastrology.in/",
    adminLink: "https://admin.sivamnadiastrology.com/",
    youtube:   "",
    notice: {
      icon: "🔒",
      text: "The Admin Portal is part of a live production application and is accessible only to authorized personnel. Administrator credentials are confidential and are not shared publicly. Therefore, a preview image of the admin dashboard has been provided instead.",
    },
  },

  {
    title: "Zenotion (Learning Platform for College Curriculum)",
    description:
      "An educational resource management platform developed specifically for our college curriculum. Enables teachers to upload and organize study materials, while students can access notes and learning resources based on their syllabus. The platform supports two user roles — Teachers and Students — for an efficient and structured resource-sharing experience.",
    images: [
      {
        src:     "images/zenotion.png",
        caption: "Platform overview — study materials & resource access",
      },
    ],
    tags: [
      { label: "EdTech",        type: "default" },
      { label: "Multi-Role",    type: "default" },
      { label: "College Project", type: "default" },
    ],
    status:  "demo",
    link:    "",
    youtube: "3cw0xUy66y0",
    notice: {
      icon: "ℹ",
      text: "This project is not currently hosted. The demo video below serves as the primary reference for demonstrating the application's design, workflow, and key features. ",
    },
  },
];

/* ─── Utilities ──────────────────────────────────────────────────────────── */

function getYTEmbedUrl(id) {
  return `https://www.youtube.com/embed/${id}?autoplay=1`;
}

async function copyToClipboard(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    const original = btn.innerHTML;
    btn.innerHTML = ICONS.check + " Copied!";
    btn.classList.add("copied");
    setTimeout(() => { btn.innerHTML = original; btn.classList.remove("copied"); }, 1800);
  } catch {
    btn.textContent = "Copy failed";
  }
}

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */
const ICONS = {
  link:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  zoom:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  play:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>`,
  admin:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  key:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
  copy:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  check:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  lock:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  prev:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`,
  next:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`,
  images:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
};

/* ─── Status config ─────────────────────────────────────────────────── */
const STATUS_CONFIG = {
  live:      { label: "Live",        color: "#16a34a" },
  prototype: { label: "Prototype",   color: "#d97706" },
  demo:      { label: "Demo Only",   color: "#2563eb" },
};

/* ─── Render Cards ───────────────────────────────────────────────────────── */

function renderCards() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  PROJECTS.forEach((p, i) => {
    const hasLink   = p.link      && p.link.trim()      !== "";
    const hasAdmin  = p.adminLink && p.adminLink.trim() !== "";
    const hasYT     = p.youtube   && p.youtube.trim()   !== "";
    const hasCreds  = p.credentials && p.credentials.username;
    const hasNotice = p.notice && p.notice.text;
    const hasTags   = p.tags && p.tags.length;
    const images    = (p.images && p.images.length) ? p.images : [{ src: p.image || "", caption: p.imageCaption || "" }];
    const multiImg  = images.length > 1;

    /* ── Tags ── */
    const tagsHTML = hasTags
      ? `<div class="card-tags">${p.tags.map(t =>
          `<span class="tag tag--${t.type || "default"}">${t.label}</span>`
        ).join("")}</div>`
      : "";

    /* ── Image gallery ── */
    const statusCfg   = p.status && STATUS_CONFIG[p.status] ? STATUS_CONFIG[p.status] : null;
    const galleryHTML = `
      <div class="card-gallery" id="gallery${i}" data-active="0">
        <div class="gallery-track" id="galleryTrack${i}">
          ${images.map((img, idx) => `
            <div class="gallery-slide ${idx === 0 ? "active" : ""}" data-slide="${idx}">
              <img src="${img.src}" alt="${p.title} — image ${idx + 1}" class="card-img" loading="lazy" />
            </div>
          `).join("")}
        </div>

        <div class="img-overlay" id="imgOverlay${i}">
          <span class="img-zoom-btn" aria-hidden="true">${ICONS.zoom}</span>
        </div>

        ${images[0].caption ? `<span class="card-img-caption" id="imgCaption${i}">${images[0].caption}</span>` : ""}

        ${statusCfg ? `
          <span class="gallery-status-badge" style="--dot-color:${statusCfg.color}">
            <span class="gallery-status-dot"></span>
            ${statusCfg.label}
          </span>` : ""}

        ${multiImg ? `
          <button class="gallery-arrow gallery-prev" id="galleryPrev${i}" aria-label="Previous image">${ICONS.prev}</button>
          <button class="gallery-arrow gallery-next" id="galleryNext${i}" aria-label="Next image">${ICONS.next}</button>
          <div class="gallery-dots" id="galleryDots${i}">
            ${images.map((_, idx) => `
              <button class="gallery-dot ${idx === 0 ? "active" : ""}" data-dot="${idx}" aria-label="Image ${idx + 1}"></button>
            `).join("")}
          </div>
          <span class="gallery-count" id="galleryCount${i}">1 / ${images.length}</span>
        ` : ""}
      </div>`;

    /* ── Notice ── */
    const noticeHTML = hasNotice
      ? `<div class="card-notice">
           <span class="card-notice-icon">${p.notice.icon || "ℹ"}</span>
           <p class="card-notice-text">${p.notice.text}</p>
         </div>`
      : "";

    /* ── Credentials ── */
    const credsHTML = hasCreds
      ? `<div class="access-panel" id="accessPanel${i}">
           <button class="access-toggle" id="accessToggle${i}" aria-expanded="false">
             ${ICONS.key}
             <span>Admin Access Details</span>
             <span class="chevron-icon">${ICONS.chevron}</span>
           </button>
           <div class="access-body" id="accessBody${i}">
             <div class="cred-row">
               <span class="cred-label">Username</span>
               <div class="cred-value-wrap">
                 <span class="cred-value">${p.credentials.username}</span>
                 <button class="cred-copy-btn" id="copyUser${i}">${ICONS.copy} Copy</button>
               </div>
             </div>
             <div class="cred-row">
               <span class="cred-label">Password</span>
               <div class="cred-value-wrap">
                 <span class="cred-value">${p.credentials.password}</span>
                 <button class="cred-copy-btn" id="copyPass${i}">${ICONS.copy} Copy</button>
               </div>
             </div>
             ${p.confidential
               ? `<p class="cred-confidential">${ICONS.lock} ${p.confidential}</p>`
               : ""}
           </div>
         </div>`
      : "";

    /* ── Build card ── */
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-index", i);

    card.innerHTML = `
      ${galleryHTML}

      <div class="card-body">
        <div class="card-meta-row">
          <span class="card-index">Project ${String(i + 1).padStart(2, "0")}</span>
          ${tagsHTML}
        </div>

        <h2 class="card-title">${p.title}</h2>
        <p class="card-desc">${p.description}</p>

        ${noticeHTML}
        ${credsHTML}

        <div class="card-actions">
          ${hasLink ? `
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="linkBtn${i}">
              ${ICONS.link} Visit Project
            </a>` : ""}
          ${hasAdmin ? `
            <a href="${p.adminLink}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost" id="adminBtn${i}">
              ${ICONS.admin} Admin Portal
            </a>` : ""}
          <button class="btn btn-ghost" id="previewBtn${i}">
            ${multiImg ? ICONS.images + " View Images" : ICONS.zoom + " Preview Image"}
          </button>
          ${hasYT ? `
            <button class="yt-badge" id="ytBtn${i}">${ICONS.play} Watch Video</button>
          ` : ""}
        </div>
      </div>
    `;

    grid.appendChild(card);

    /* ── Gallery state ── */
    let activeIdx = 0;

    function goToSlide(idx) {
      const slides  = card.querySelectorAll(".gallery-slide");
      const dots    = card.querySelectorAll(".gallery-dot");
      const caption = card.querySelector(`#imgCaption${i}`);
      const count   = card.querySelector(`#galleryCount${i}`);

      slides.forEach((s, si) => s.classList.toggle("active", si === idx));
      dots.forEach((d, di)   => d.classList.toggle("active", di === idx));
      if (caption) caption.textContent = images[idx].caption || "";
      if (count)   count.textContent   = `${idx + 1} / ${images.length}`;
      activeIdx = idx;
    }

    if (multiImg) {
      card.querySelector(`#galleryPrev${i}`).addEventListener("click", e => {
        e.stopPropagation();
        goToSlide((activeIdx - 1 + images.length) % images.length);
      });
      card.querySelector(`#galleryNext${i}`).addEventListener("click", e => {
        e.stopPropagation();
        goToSlide((activeIdx + 1) % images.length);
      });
      card.querySelectorAll(".gallery-dot").forEach(dot => {
        dot.addEventListener("click", e => {
          e.stopPropagation();
          goToSlide(Number(dot.dataset.dot));
        });
      });
    }

    /* ── Image modal (with navigation) ── */
    let modalIdx = 0;

    function updateModal(idx) {
      modalIdx = idx;
      document.getElementById("modalImage").src             = images[idx].src;
      document.getElementById("modalImage").alt             = p.title;
      document.getElementById("modalImageCaption").textContent = images[idx].caption || p.title;
      const counter = document.getElementById("modalImgCounter");
      const prevBtn = document.getElementById("modalNavPrev");
      const nextBtn = document.getElementById("modalNavNext");
      if (images.length > 1) {
        counter.textContent   = `${idx + 1} / ${images.length}`;
        prevBtn.style.display = "flex";
        nextBtn.style.display = "flex";
      } else {
        counter.textContent   = "";
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      }
    }

    function openImageModal() {
      updateModal(activeIdx);
      const modal = document.getElementById("imageModal");
      modal.classList.add("open");
      modal.dataset.projectIdx = i;
      modal.dataset.modalIdx = activeIdx;
      document.body.style.overflow = "hidden";
    }

    const galleryEl = card.querySelector(`#gallery${i}`);
    const prevBtn   = card.querySelector(`#previewBtn${i}`);
    galleryEl.addEventListener("click", openImageModal);
    galleryEl.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openImageModal(); });
    prevBtn.addEventListener("click", openImageModal);

    /* ── YouTube ── */
    if (hasYT) {
      card.querySelector(`#ytBtn${i}`).addEventListener("click", () => {
        document.getElementById("youtubeFrame").src = getYTEmbedUrl(p.youtube);
        document.getElementById("youtubeModal").classList.add("open");
        document.body.style.overflow = "hidden";
      });
    }

    /* ── Credentials accordion ── */
    if (hasCreds) {
      const toggle = card.querySelector(`#accessToggle${i}`);
      const body   = card.querySelector(`#accessBody${i}`);
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        body.classList.toggle("open", !expanded);
        toggle.classList.toggle("active", !expanded);
      });
      card.querySelector(`#copyUser${i}`).addEventListener("click", function () {
        copyToClipboard(p.credentials.username, this);
      });
      card.querySelector(`#copyPass${i}`).addEventListener("click", function () {
        copyToClipboard(p.credentials.password, this);
      });
    }
  });
}

/* ─── Modal Close Logic ──────────────────────────────────────────────────── */

function closeModal(modalId, clearFrame) {
  document.getElementById(modalId).classList.remove("open");
  document.body.style.overflow = "";
  if (clearFrame) document.getElementById("youtubeFrame").src = "";
}

document.getElementById("closeImageModal").addEventListener("click",   () => closeModal("imageModal",   false));
document.getElementById("closeYoutubeModal").addEventListener("click", () => closeModal("youtubeModal", true));
document.getElementById("imageModal").addEventListener("click",   e => { if (e.target === e.currentTarget) closeModal("imageModal",   false); });
document.getElementById("youtubeModal").addEventListener("click", e => { if (e.target === e.currentTarget) closeModal("youtubeModal", true);  });

/* Modal image navigation — delegates to the active card's updateModal */
document.getElementById("modalNavPrev").addEventListener("click", () => {
  const modal  = document.getElementById("imageModal");
  const pIdx   = Number(modal.dataset.projectIdx);
  const proj   = PROJECTS[pIdx];
  const imgs   = proj.images || [{ src: proj.image, caption: proj.imageCaption }];
  const cur    = Number(modal.dataset.modalIdx || 0);
  const next   = (cur - 1 + imgs.length) % imgs.length;
  modal.dataset.modalIdx = next;
  document.getElementById("modalImage").src = imgs[next].src;
  document.getElementById("modalImageCaption").textContent = imgs[next].caption || "";
  document.getElementById("modalImgCounter").textContent   = `${next + 1} / ${imgs.length}`;
});

document.getElementById("modalNavNext").addEventListener("click", () => {
  const modal  = document.getElementById("imageModal");
  const pIdx   = Number(modal.dataset.projectIdx);
  const proj   = PROJECTS[pIdx];
  const imgs   = proj.images || [{ src: proj.image, caption: proj.imageCaption }];
  const cur    = Number(modal.dataset.modalIdx || 0);
  const next   = (cur + 1) % imgs.length;
  modal.dataset.modalIdx = next;
  document.getElementById("modalImage").src = imgs[next].src;
  document.getElementById("modalImageCaption").textContent = imgs[next].caption || "";
  document.getElementById("modalImgCounter").textContent   = `${next + 1} / ${imgs.length}`;
});

document.addEventListener("keydown", e => {
  const imgModal = document.getElementById("imageModal");
  const isImgOpen = imgModal.classList.contains("open");
  if (e.key === "Escape")     { closeModal("imageModal", false); closeModal("youtubeModal", true); }
  if (isImgOpen && e.key === "ArrowLeft")  document.getElementById("modalNavPrev").click();
  if (isImgOpen && e.key === "ArrowRight") document.getElementById("modalNavNext").click();
});

/* ─── Dark Mode Toggle ───────────────────────────────────────────────────── */

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
  setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ─── Footer year ────────────────────────────────────────────────────────── */
document.getElementById("currentYear").textContent = new Date().getFullYear();

/* ─── Scroll-reveal ──────────────────────────────────────────────────────── */
function initScrollReveal() {
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  cards.forEach((card, i) => {
    card.style.setProperty("--delay", `${i * 0.1}s`);
    observer.observe(card);
  });
}

/* ─── Typing effect ──────────────────────────────────────────────────────── */
function typeWriter(el, text, speed = 60) {
  el.textContent = "";
  el.classList.add("typing-cursor");
  let i = 0;
  const tick = () => {
    if (i < text.length) { el.textContent += text[i++]; setTimeout(tick, speed); }
    else setTimeout(() => el.classList.remove("typing-cursor"), 1800);
  };
  setTimeout(tick, 700);
}

/* ─── Init ───────────────────────────────────────────────────────────────── */
renderCards();
initScrollReveal();
