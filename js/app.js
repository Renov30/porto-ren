/**
 * PORTFOLIO APPLICATION JAVASCRIPT
 * Strictly no icons, no gradients, no logo graphics
 * Pure typography and interactive editorial UX
 */

// Portfolio Projects Database (8 Featured Projects)
const projectsData = [
  {
    id: 1,
    title: "SIMRS Medika Cloud Ecosystem",
    category: "enterprise",
    categoryLabel: "Enterprise & Web App",
    year: "2024",
    image: "assets/images/project_health.jpg",
    description: "Sistem Informasi Manajemen Rumah Sakit terintegrasi berbasis cloud untuk digitalisasi rekam medis elektronik (RME), manajemen rawat jalan/inap, dan integrasi BPJS SatuSehat.",
    role: "Lead Fullstack & UI Architect",
    responsibilities: "Merancang arsitektur micro-frontend, standarisasi design system tanpa Tailwind, penataan CSS variable, dan optimasi performa query rekam medis berkecepatan sub-detik untuk 120.000+ data pasien.",
    concept: "Mengusung prinsip high-density information architecture dengan keterbacaan kontras tinggi agar paramedis dapat mengakses riwayat pasien dalam 2 kali klik tanpa beban kognitif berlebih.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Redis", "REST API", "CSS Custom Properties"],
    client: "Jaringan Rumah Sakit Swasta Nasional",
    liveDemo: "#"
  },
  {
    id: 2,
    title: "OmniBank Global Wealth Analytics",
    category: "fintech",
    categoryLabel: "FinTech & UI/UX",
    year: "2024",
    image: "assets/images/project_fintech.jpg",
    description: "Platform analitik kekayaan dan multi-asset portfolio dashboard untuk nasabah korporat dan private banking dengan visualisasi arus kas real-time.",
    role: "Senior Frontend Engineer & Design Lead",
    responsibilities: "Memimpin perancangan sistem visual dashboard monokromatis ultra-presisi, implementasi chart interaktif tanpa gradien, serta arsitektur state management untuk data streaming live.",
    concept: "Pendekatan Swiss Style typography dengan grid ketat 8-point, memprioritaskan kejernihan metrik numerik dan eksekusi transaksi yang cepat tanpa distraksi visual.",
    tech: ["React", "TypeScript", "WebSockets", "Vanilla CSS", "ChartJS Core", "Vite"],
    client: "Konsorsium Perbankan Digital Asia Tenggara",
    liveDemo: "#"
  },
  {
    id: 3,
    title: "ArchiStudio Minimalist Spatial Portfolio",
    category: "editorial",
    categoryLabel: "Editorial & Architecture",
    year: "2023",
    image: "assets/images/project_editorial.jpg",
    description: "Situs arsip digital dan kurasi arsitektur kontemporer yang menampilkan dokumentasi spasial, material bangunan, dan monografi proyek hunian modern.",
    role: "Creative Director & Web Developer",
    responsibilities: "Merancang layout editorial dinamis dengan fluid typography, struktur subgrid CSS, transisi halaman halus tanpa framework berat, dan optimasi aset visual resolusi tinggi.",
    concept: "Menghadirkan pengalaman membaca layaknya katalog cetak mewah di atas kertas bertekstur, di mana foto monokrom dan tipografi tebal menjadi elemen arsitektural di layar.",
    tech: ["HTML5 Semantic", "CSS Grid & Subgrid", "Modern Vanilla JS", "Intersection Observer"],
    client: "Biro Arsitektur Studio Ruang",
    liveDemo: "#"
  },
  {
    id: 4,
    title: "Apex Mobility Task & Asset Manager",
    category: "mobile",
    categoryLabel: "Mobile & Productivity",
    year: "2024",
    image: "assets/images/project_mobile.jpg",
    description: "Aplikasi mobile lintas platform untuk manajemen logistik proyek lapangan, pelacakan armada kendaraan, dan penjadwalan inspeksi dengan dukungan offline-first.",
    role: "Mobile UI/UX & Flutter Engineer",
    responsibilities: "Mendesain alur kerja gestur satu tangan, validasi formulir lapangan dinamis, sinkronisasi otomatis background saat kembali online, dan enkripsi data lokal.",
    concept: "Efisiensi navigasi lapangan dengan ukuran tap target minimal 48px, kontras tinggi yang jelas di bawah terik matahari, dan waktu muat instan tanpa splash screen lambat.",
    tech: ["Flutter", "Dart", "SQLite", "Firebase Cloud Sync", "Clean Architecture"],
    client: "Perusahaan Kontraktor & Logistik Nasional",
    liveDemo: "#"
  },
  {
    id: 5,
    title: "Nusantara Cloud DevOps Observability",
    category: "enterprise",
    categoryLabel: "Enterprise & Web App",
    year: "2023",
    image: "assets/images/project_fintech.jpg",
    description: "Pusat kendali infrastruktur cloud terdistribusi untuk memantau ratusan container kubernetes, metrik utilisasi server, dan sistem peringatan downtime seketika.",
    role: "DevOps & Fullstack Engineer",
    responsibilities: "Membangun antarmuka manajemen cluster server, pipeline agregasi log berkecepatan 12.000 log/detik, serta sistem role-based access control (RBAC) granular.",
    concept: "Desain terminal-inspired UI yang menggabungkan estetika hitam-putih fungsional dengan responsivitas data tinggi untuk para insinyur sistem.",
    tech: ["Go (Golang)", "Docker", "Kubernetes", "Prometheus", "Vanilla JS", "Tailscale"],
    client: "Penyedia Layanan Cloud Hosting Lokal",
    liveDemo: "#"
  },
  {
    id: 6,
    title: "Vogue Chronique Editorial Journal",
    category: "editorial",
    categoryLabel: "Editorial & Typography",
    year: "2023",
    image: "assets/images/project_editorial.jpg",
    description: "Publikasi digital independen mengenai fotografi jalanan, budaya tipografi, dan ulasan desain industri dengan tata letak artikel eksperimental.",
    role: "Lead UI Designer & Frontend Developer",
    responsibilities: "Pengembangan layout majalah modular yang adaptif terhadap berbagai rasio layar, sistem indeks artikel dengan pencarian instan, dan optimasi Core Web Vitals 100/100.",
    concept: "Kombinasi bobot huruf sans-serif masif dengan pembagian kolom editorial klasik untuk menonjolkan esensi kurasi visual hitam-putih.",
    tech: ["Vanilla JS", "CSS Modular Architecture", "Node.js SSG", "Markdown Engine"],
    client: "Kolektif Fotografi & Desain Independen",
    liveDemo: "#"
  },
  {
    id: 7,
    title: "TeleMedika Pasien Konsultasi Mobile",
    category: "mobile",
    categoryLabel: "Mobile & Healthcare",
    year: "2024",
    image: "assets/images/project_health.jpg",
    description: "Aplikasi mobile telemedicine yang menghubungkan pasien dengan dokter spesialis, penjadwalan temu poli klinik, dan resep digital terverifikasi.",
    role: "Lead Product Designer & React Native Dev",
    responsibilities: "Menyusun peta alur pengguna inklusif untuk pengguna lanjut usia, kepatuhan privasi data medis HIPAA/UU PDP, serta telekonsultasi audio-video berlatensi rendah.",
    concept: "Aksesibilitas tingkat tinggi (WCAG AAA), hierarki teks berukuran besar, navigasi terstruktur tanpa tombol tersembunyi yang membingungkan.",
    tech: ["React Native", "TypeScript", "WebRTC", "Node.js", "Express", "PostgreSQL"],
    client: "Konsorsium Klinik Swasta Jakarta",
    liveDemo: "#"
  },
  {
    id: 8,
    title: "PayFlow Realtime Payment Gateway Engine",
    category: "fintech",
    categoryLabel: "FinTech & API Suite",
    year: "2024",
    image: "assets/images/project_mobile.jpg",
    description: "Portal dokumentasi developer dan konsol pemantauan transaksi payment gateway berlisensi BI dengan verifikasi QRIS otomatis dan simulasi webhook.",
    role: "Senior Backend & Frontend Engineer",
    responsibilities: "Membangun portal merchant interaktif, sandbox testing simulator, analitik settlement harian, serta sistem notifikasi kegagalan transaksi.",
    concept: "Platform developer-first dengan kode snippet yang dapat disalin instan, tabel rekonsiliasi data yang dapat diekspor, dan desain bebas visual noise.",
    tech: ["Java Spring Boot", "Kafka", "PostgreSQL", "Next.js", "TypeScript", "Redis"],
    client: "Fintech Pembayaran Digital Indonesia",
    liveDemo: "#"
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("all");
  initProjectFilters();
  initModals();
  initContactForm();
  initMobileMenu();
  initScrollNav();
  initCvDownload();
});

// 1. Theme Switcher (Strict Solid Colors: Light / Dark)
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  
  applyTheme(savedTheme);
  
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
      showToast(`Mode tema diubah ke: ${newTheme.toUpperCase()}`);
    });
  }
}

function applyTheme(theme) {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (toggleBtn) toggleBtn.textContent = "[TEMA: GELAP]";
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (toggleBtn) toggleBtn.textContent = "[TEMA: TERANG]";
  }
}

// 2. Render Projects Grid
function renderProjects(filterCategory = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = filterCategory === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

  grid.innerHTML = "";

  filtered.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);

    const techTagsHtml = project.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="project-img-box">
        <span class="project-category-badge">${project.categoryLabel}</span>
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
      </div>
      <div class="project-content">
        <div class="project-meta-row">
          <span>Klien: ${project.client}</span>
          <span>Tahun: ${project.year}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        
        <div class="project-role-box">
          <span class="project-role-label">Peran & Tanggung Jawab:</span>
          <span class="project-role-text">${project.role}</span>
        </div>

        <div class="project-tech-stack">
          ${techTagsHtml}
          ${project.tech.length > 4 ? `<span class="tech-tag">+${project.tech.length - 4} Lainnya</span>` : ''}
        </div>

        <div class="project-actions">
          <button class="btn-project-detail" data-action="open-detail" data-id="${project.id}">
            Lihat Studi Kasus
          </button>
          <button class="btn-project-link" data-action="open-demo" data-id="${project.id}">
            Kunjungi Demo
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach click listeners to cards
  grid.querySelectorAll('[data-action="open-detail"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      openProjectModal(id);
    });
  });

  grid.querySelectorAll('[data-action="open-demo"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      const p = projectsData.find(item => item.id === id);
      showToast(`Membuka demo: ${p ? p.title : 'Proyek'}`);
    });
  });
}

// 3. Filter Buttons Handler
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// 4. Modal Handlers (Project Detail & CV)
function initModals() {
  const overlay = document.getElementById("projectModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => closeModal());
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  // Keyboard navigation: Close modal on ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("active")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById("projectModalOverlay");
  const modalBody = document.getElementById("modalDynamicContent");

  if (!overlay || !modalBody) return;

  const techBadges = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join(" ");

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-project-img">
    <div class="badge" style="margin-bottom: 0.75rem;">${project.categoryLabel}</div>
    <h2 class="modal-project-title">${project.title}</h2>
    
    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Klien / Partner</span>
        <span class="modal-meta-val">${project.client}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Tahun Rilis</span>
        <span class="modal-meta-val">${project.year}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Peran</span>
        <span class="modal-meta-val">${project.role}</span>
      </div>
    </div>

    <div class="modal-body-section">
      <h3 class="modal-section-h">Ikhtisar & Masalah yang Diselesaikan</h3>
      <p class="modal-section-p">${project.description}</p>
    </div>

    <div class="modal-body-section">
      <h3 class="modal-section-h">Peran & Tanggung Jawab Utama</h3>
      <p class="modal-section-p">${project.responsibilities}</p>
    </div>

    <div class="modal-body-section">
      <h3 class="modal-section-h">Konsep Desain & Pendekatan Teknis</h3>
      <p class="modal-section-p">${project.concept}</p>
    </div>

    <div class="modal-body-section">
      <h3 class="modal-section-h">Teknologi & Tools yang Digunakan</h3>
      <div class="project-tech-stack" style="margin-top: 0.5rem;">
        ${techBadges}
      </div>
    </div>

    <div style="margin-top: 2rem; display: flex; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
      <button class="btn-hero-solid" onclick="showToast('Tautan proyek live siap diakses.')">
        Kunjungi Sistem Live
      </button>
      <button class="btn-hero-outline" onclick="closeModal()">
        Tutup [ESC]
      </button>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("projectModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// 5. Contact Form Handler
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const subject = document.getElementById("msgSubject").value;
    const message = document.getElementById("senderMessage").value.trim();

    if (!name || !email || !message) {
      showToast("Harap lengkapi semua kolom yang wajib diisi!");
      return;
    }

    // Submit Simulation
    const submitBtn = form.querySelector(".btn-form-submit");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "MENGIRIM PESAN...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast("Pesan Anda telah berhasil terkirim. Terima kasih!");
    }, 900);
  });
}

// 6. CV Download Simulation
function initCvDownload() {
  const cvButtons = document.querySelectorAll('[data-action="download-cv"]');
  cvButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Create structured text resume content
      const resumeContent = `
============================================================
ADRIAN PRATAMA - CURRICULUM VITAE
Senior Software Engineer & Lead UI Architect
Lokasi: Jakarta, Indonesia | Email: adrian.pratama@domain.com
============================================================

RINGKASAN PROFESIONAL:
Software Engineer dan Creative Technologist berpengalaman 8+ tahun
dalam membangun sistem web enterprise skala besar, arsitektur UI presisi,
dan aplikasi berbasis cloud. Berfokus pada sistem monokromatis berkinerja tinggi,
standarisasi rekam medis (SIMRS), dan platform finansial (FinTech).

RIWAYAT PEKERJAAN:
1. Lead UI Architect & Principal Engineer — Artha Cipta Solusi (2022 - Sekarang)
   - Memimpin arsitektur sistem informasi rumah sakit (SIMRS) di 14 rumah sakit rujukan.
   - Mengurangi waktu muat dashboard klinis sebesar 64% dengan optimasi core CSS & SSR.
2. Senior Frontend & Systems Engineer — FinTech Nusantara Corp (2020 - 2022)
   - Merancang visualisasi data portofolio multi-aset dengan throughput tinggi.
3. Fullstack Web Developer — Studio Ruang Digital (2017 - 2020)
   - Mengembangkan 30+ proyek web editorial, portal interaktif, dan web arsitektur.

PENDIDIKAN & SERTIFIKASI:
- Sarjana Ilmu Komputer (S.Kom), Universitas Indonesia (IPK 3.84)
- AWS Certified Solutions Architect - Associate
- Google Cloud Certified Professional Cloud Developer
- Nielsen Norman Group UX Master Certified

KEAHLIAN UTAMA:
- Bahasa: TypeScript, JavaScript (ESNext), Go (Golang), Python, SQL, HTML5/CSS3
- Framework & Tools: React, Next.js, Node.js, Docker, Kubernetes, PostgreSQL, Redis, Figma
- Konsep: High-Contrast Editorial UI, Clean Architecture, CI/CD, Micro-frontends

============================================================
      `.trim();

      const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.setAttribute("download", "CV_Adrian_Pratama_Lead_Architect.txt");
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(url);

      showToast("CV resmi berhasil diunduh (Format CV_Adrian_Pratama.txt)!");
    });
  });
}

// 7. Navigation Scroll Highlight & Smooth Scroll
function initScrollNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

// 8. Mobile Navigation Toggle
function initMobileMenu() {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      const isOpen = navLinks.classList.contains("mobile-open");
      mobileBtn.textContent = isOpen ? "[TUTUP]" : "[MENU]";
    });

    // Close menu on link click
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        mobileBtn.textContent = "[MENU]";
      });
    });
  }
}

// 9. Toast Notification System
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
