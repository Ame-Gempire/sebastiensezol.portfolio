/* ===================================================
   Sébastien SEZOL — Portfolio — script.js
   =================================================== */

// ---------- Données des visuels ----------
// category: "print" | "web" | "draw"
const works = [
  // PRINT
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_6c094d2d5e154c9d9cf9e4404574d0b1~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_1b232bccaa3247f5956ad31d52e4e916~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_786019edb5ce4eb192ad5be2911bd608~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_32932ebce53e47f4b3fe79748d36d5c5~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_ebca745a01b64bf8976191ed50a62f9a~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_d4bf95130be4415483fe7df5e665bcaa~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_8b2bdd3ca43e46b88d1bffe2960fbbb9~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_624c41c8eeeb433caeb146af77c0fd17~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_28819cfe0f44492bae7a051c69e80c71~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_58df4544e5d44620ac04820045076ff1~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_5fffd827da8a42ea98794f8f29623046~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_e852fdfd77a74de18779e088313ed040~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_ea94b48ac883486fb3484f83d471a51a~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_5e6a53a511f84c4eb14730b17306f270~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_8c13937dd5bf47a195ee1cafd0222e5b~mv2.png" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_2f4fe083a81d452995ba98c5594c8628~mv2.jpg" },
  { cat:"print", url:"https://static.wixstatic.com/media/cc5747_d5bc73365d3a44fd9ef3272cf622fb32~mv2.jpg" },

  // WEB
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_f709dff97668442aa1958b42ab6f1a12~mv2.jpg" },
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_f33f1db5b3b24574a95accbd7841612e~mv2.jpg" },
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_2999d967fd7c4a638b7b5196057075d8~mv2.jpg" },
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_da082905749f477a85e8a65f428071a0~mv2.jpg" },
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_6409371ad9b34bcf9f74541b12e8386e~mv2.jpg" },
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_f14fdbd2108b4a908d122487c20c97a8~mv2.jpg" },
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_f0710c3bb2b54e67ab58507b19ee2f61~mv2.jpg" },
  { cat:"web", url:"https://static.wixstatic.com/media/cc5747_969134da176347288bc475c0759d6b51~mv2.png" },

  // DRAW
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_32fa1adabc67495b8abd4141ea509c69~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_5d2d8b9e6c044bdbb67eecabb10ebf08~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_b6ea407a8da54ff3b66c1efcffd98669~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_7f01f9241d134738ae1ff582ca6c8e01~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_523a341272f4459d921682771e87241f~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_f205deece4c54c4e8de47cb1f6b84b94~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_690bd12be4454d5e8af6202f4902df21~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_0f398a3475f3491d8bb3144ba33e4b2c~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_d577008855ad4f7f90e02704d9575cd4~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_d4dca75b8c9b4b2ca09ea66867bb69ae~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_24a0f599f583484394cde1127f5e9e20~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_eb65203c40fa4c6199dd508dce426363~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_31f9a0969491409983e1438fbf3d971e~mv2.jpg" },
  { cat:"draw", url:"https://static.wixstatic.com/media/cc5747_3848f7a0534649cf9999d7f3e2d27451~mv2.jpg" },
];

const projetImages = [
  "https://static.wixstatic.com/media/cc5747_93372ca3aebc4b2e829d9db6dc2948ef~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_98cfdc1a8786456b945918ea11eee124~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_30cd4f188f5a4a8082fba916ed45f22f~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_1bed5b04d7f44251ac0d30d7b15a8273~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_c1dad16991bc45bcb11477fbe1fb7d85~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_6df8d265c3c84a10bce69f8d6f35c0c2~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_84aaabe197024d898c3878820ee5b250~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_80f40bb5b1504163b92195e5441d8358~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_3d90836474da4ea3b5838d936b837994~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_0f55c59c77574ca28d5ca15a7f546d70~mv2.jpg",
  "https://static.wixstatic.com/media/cc5747_39081039f4e7475c9782e7ee0acf7e25~mv2.jpg",
];

// ---------- Rendu de la grille portfolio ----------
const grid = document.getElementById("portfolioGrid");
const labels = { print:"Print", web:"Web", draw:"Draw" };

let allImages = []; // { url, cat } dans l'ordre affiché, pour la lightbox

// Ajoute la classe "loaded" dès qu'une image finit de charger (ou immédiatement si déjà en cache)
function fadeInOnLoad(img){
  if(img.complete && img.naturalWidth > 0){
    img.classList.add("loaded");
  } else {
    img.addEventListener("load", () => img.classList.add("loaded"), { once:true });
  }
}

function renderGrid(){
  grid.innerHTML = "";
  allImages = [];
  works.forEach((w) => {
    allImages.push({ url:w.url, group:"main" });
  });
  works.forEach((w, i) => {
    const btn = document.createElement("button");
    btn.className = "tile reveal in";
    btn.dataset.cat = w.cat;
    btn.innerHTML = `<img src="${w.url}" alt="Projet ${labels[w.cat]} — ${i+1}" loading="lazy" decoding="async"><span class="tag mono">${labels[w.cat]}</span>`;
    btn.addEventListener("click", () => openLightbox(i)); // index correct, capturé pour cette image précise
    grid.appendChild(btn);
    fadeInOnLoad(btn.querySelector("img"));
  });
}
renderGrid();

// ---------- Filtres ----------
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll("#portfolioGrid .tile").forEach(tile => {
      tile.classList.toggle("hidden", f !== "all" && tile.dataset.cat !== f);
    });
  });
});

// ---------- Grille du projet phare ----------
const projetGrid = document.getElementById("projetGrid");
let projetLightboxImages = [];
projetImages.forEach((url, i) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Homo Ex Machina — planche " + (i+1);
  img.loading = "lazy";
  img.decoding = "async";
  img.addEventListener("click", () => openProjetLightbox(i));
  projetGrid.appendChild(img);
  fadeInOnLoad(img);
  projetLightboxImages.push(url);
});

// ---------- Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
let currentSet = [];
let currentIndex = 0;

function openLightbox(index){
  currentSet = allImages.map(i => i.url);
  currentIndex = index;
  showLightbox();
}
function openProjetLightbox(index){
  currentSet = projetLightboxImages;
  currentIndex = index;
  showLightbox();
}
function showLightbox(){
  lightbox.classList.add("open");
  const url = currentSet[currentIndex];
  lbImg.classList.remove("loaded");
  lbImg.onload = null;
  lbImg.src = url;

  const markLoaded = () => lbImg.classList.add("loaded");
  if(lbImg.complete && lbImg.naturalWidth > 0){
    // image déjà en cache : on force quand même un fondu visible
    requestAnimationFrame(markLoaded);
  } else {
    lbImg.onload = markLoaded;
  }
}
function closeLightbox(){
  lightbox.classList.remove("open");
  lbImg.classList.remove("loaded");
  lbImg.onload = null;
  lbImg.src = "";
}
document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
  showLightbox();
});
document.getElementById("lbNext").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentSet.length;
  showLightbox();
});
lightbox.addEventListener("click", (e) => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if(!lightbox.classList.contains("open")) return;
  if(e.key === "Escape") closeLightbox();
  if(e.key === "ArrowLeft") document.getElementById("lbPrev").click();
  if(e.key === "ArrowRight") document.getElementById("lbNext").click();
});

// ---------- Menu mobile ----------
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", false);
}));

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
