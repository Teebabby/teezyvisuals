/* =====================================================
   LIGHTBOX ELEMENTS (single image view)
===================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

/* =====================================================
   IMAGE GALLERIES (UPLOAD YOUR IMAGES HERE)
   Each category shows ALL images inside it
===================================================== */

const galleries = {
  Branding: [
    "images/branding/brand 1.jpg",
    "images/branding/brand 2.png",
    "images/branding/brand 3.png",
    "images/branding/brand 4.jpg",
  ],

  "Social Media": [
    "images/social/social 1.jpg",
    "images/social/social 2.jpg",
    "images/social/social 3.jpg",
    "images/social/social 4.jpg",
    "images/social/social 5.jpg",
    "images/social/social 6.jpg",
    "images/social/social 7.jpg",
    "images/social/social 8.jpg",
    "images/social/social 9.jpg",
    "images/social/social 10.jpg",
  ],

  Print: ["images/print/print 1.jpg", "images/print/print 2.jpg"],

  Logos: [
    "images/logos/logo 1.png",
    "images/logos/logo 2.png",
    "images/logos/logo 3.png",
  ],
};

/* =====================================================
   CATEGORY BUTTONS
===================================================== */

const categories = Object.keys(galleries);
const categoryContainer = document.getElementById("categories");
const projectContainer = document.getElementById("projects");

/* Create buttons dynamically */
categories.forEach((category) => {
  const btn = document.createElement("button");
  btn.textContent = category;

  btn.onclick = () => renderGallery(category);

  categoryContainer.appendChild(btn);
});

/* =====================================================
   RENDER GALLERY (SHOW ALL IMAGES)
===================================================== */

function renderGallery(category) {
  projectContainer.innerHTML = "";

  galleries[category].forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "gallery-img";

    // Open image in lightbox when clicked
    img.onclick = () => openLightbox(src);

    projectContainer.appendChild(img);
  });
}

/* Load Branding by default */
renderGallery("Branding");

/* =====================================================
   LIGHTBOX LOGIC
===================================================== */

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.remove("hidden");
}

lightboxClose.onclick = () => {
  lightbox.classList.add("hidden");
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
};

/* =====================================================
   THEME TOGGLE (DARK / LIGHT)
===================================================== */

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "🌞"
    : "🌙";
};

/* =====================================================
   HERO → MAIN CONTENT TRANSITION
===================================================== */

const exploreBtn = document.getElementById("exploreBtn");
const hero = document.getElementById("hero");
const mainContent = document.getElementById("mainContent");

exploreBtn.addEventListener("click", () => {
  hero.classList.add("fade-out");

  setTimeout(() => {
    hero.style.display = "none";
    mainContent.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 800);
});
