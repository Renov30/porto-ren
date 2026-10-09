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

// Utility: image fallback
function setImgFallback(img) {
  if (!img) return;
  img.onerror = function () {
    if (this.dataset.fallbackApplied) return;
    this.dataset.fallbackApplied = "true";
    this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'%3E%3Crect width='1200' height='675' fill='%23f2f2f2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui,sans-serif' font-size='28' fill='%23262626'%3EProject Image%3C/text%3E%3C/svg%3E";
  };
}

// Document Ready Initialization (Supports both loading and already-interactive DOM)
function initApp() {
  initTheme();
  updateFilterCounts();
  renderProjects("all");
  initProjectFilters();
  initModals();
  initContactForm();
  initRateCardForm();
  initMobileMenu();
  initScrollNav();
  initCvDownload();
  initScrollReveal();
  initHeroParallax();
  initBackToTop();
  initHeroPortraitToggle();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// 1. Theme Switcher
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

// Filter counts
function updateFilterCounts() {
  const total = projectsData.length;
  const counts = {
    all: total,
    enterprise: projectsData.filter(p => p.category === "enterprise").length,
    fintech: projectsData.filter(p => p.category === "fintech").length,
    editorial: projectsData.filter(p => p.category === "editorial").length,
    mobile: projectsData.filter(p => p.category === "mobile").length
  };
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    const f = btn.getAttribute("data-filter");
    if (f === "all") btn.textContent = `Semua Proyek (${counts.all})`;
    if (f === "enterprise") btn.textContent = `Enterprise & SIMRS (${counts.enterprise})`;
    if (f === "fintech") btn.textContent = `FinTech & UI/UX (${counts.fintech})`;
    if (f === "editorial") btn.textContent = `Editorial & Desain (${counts.editorial})`;
    if (f === "mobile") btn.textContent = `Aplikasi Mobile (${counts.mobile})`;
  });
}

// 2. Render Projects
function renderProjects(filterCategory = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  const filtered = filterCategory === "all" ? projectsData : projectsData.filter(p => p.category === filterCategory);
  grid.innerHTML = "";
  filtered.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);
    const techTagsHtml = project.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join("");
    card.innerHTML = `
      <div class="project-img-box" data-action="open-detail" data-id="${project.id}" style="cursor:pointer;">
        <span class="project-category-badge">${project.categoryLabel}</span>
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" data-fallback>
      </div>
      <div class="project-content">
        <div class="project-meta-row">
          <span>Klien: ${project.client}</span>
          <span>Tahun: ${project.year}</span>
        </div>
        <h3 class="project-title" data-action="open-detail" data-id="${project.id}" style="cursor:pointer;">${project.title}</h3>
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
          <button class="btn-project-detail" data-action="open-detail" data-id="${project.id}">Lihat Studi Kasus</button>
          <button class="btn-project-link" data-action="open-demo" data-id="${project.id}">Kunjungi Demo</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll("img[data-fallback]").forEach(setImgFallback);
  grid.querySelectorAll('[data-action="open-detail"]').forEach(el => {
    el.addEventListener("click", (e) => {
      const id = parseInt(el.getAttribute("data-id") || e.currentTarget.getAttribute("data-id"));
      openProjectModal(id);
    });
  });
  grid.querySelectorAll('[data-action="open-demo"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.getAttribute("data-id"));
      const p = projectsData.find(item => item.id === id);
      if (p && p.liveDemo && p.liveDemo !== "#") {
        window.open(p.liveDemo, "_blank", "noopener,noreferrer");
      } else {
        showToast(`Demo: ${p ? p.title : 'Proyek'} (akan segera tersedia)`);
      }
    });
  });
  if (typeof window.reobserveScrollReveal === "function") {
    window.reobserveScrollReveal();
  }
}

// 3. Filters
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

// 4. Modal
function initModals() {
  const overlay = document.getElementById("projectModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  }
  window.addEventListener("keydown", (e) => {
    const ov = document.getElementById("projectModalOverlay");
    if (e.key === "Escape" && ov && ov.classList.contains("active")) closeModal();
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
    <img src="${project.image}" alt="${project.title}" class="modal-project-img" data-fallback>
    <div class="badge" style="margin-bottom:0.75rem;">${project.categoryLabel}</div>
    <h2 class="modal-project-title">${project.title}</h2>
    <div class="modal-meta-grid">
      <div class="modal-meta-item"><span class="modal-meta-label">Klien / Partner</span><span class="modal-meta-val">${project.client}</span></div>
      <div class="modal-meta-item"><span class="modal-meta-label">Tahun Rilis</span><span class="modal-meta-val">${project.year}</span></div>
      <div class="modal-meta-item"><span class="modal-meta-label">Peran</span><span class="modal-meta-val">${project.role}</span></div>
    </div>
    <div class="modal-body-section"><h3 class="modal-section-h">Ikhtisar & Masalah yang Diselesaikan</h3><p class="modal-section-p">${project.description}</p></div>
    <div class="modal-body-section"><h3 class="modal-section-h">Peran & Tanggung Jawab Utama</h3><p class="modal-section-p">${project.responsibilities}</p></div>
    <div class="modal-body-section"><h3 class="modal-section-h">Konsep Desain & Pendekatan Teknis</h3><p class="modal-section-p">${project.concept}</p></div>
    <div class="modal-body-section"><h3 class="modal-section-h">Teknologi & Tools yang Digunakan</h3><div class="project-tech-stack" style="margin-top:0.5rem;">${techBadges}</div></div>
    <div style="margin-top:2rem;display:flex;gap:1rem;border-top:1px solid var(--border-color);padding-top:1.5rem;">
      <button class="btn-hero-solid" id="modalLiveBtn">Kunjungi Sistem Live</button>
      <button class="btn-hero-outline" onclick="closeModal()">Tutup [ESC]</button>
    </div>
  `;
  modalBody.querySelectorAll("img[data-fallback]").forEach(setImgFallback);
  const liveBtn = modalBody.querySelector("#modalLiveBtn");
  if (liveBtn) {
    liveBtn.addEventListener("click", () => {
      if (project.liveDemo && project.liveDemo !== "#") {
        window.open(project.liveDemo, "_blank", "noopener,noreferrer");
      } else {
        showToast("Tautan proyek live akan segera tersedia.");
      }
    });
  }
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

// 5. Contact Form Handler (FormSubmit AJAX -> ermiawann@gmail.com)
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const handleContactSubmit = async (e) => {
    if (e) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      if (typeof e.stopPropagation === "function") e.stopPropagation();
    }

    const nameEl = document.getElementById("senderName");
    const emailEl = document.getElementById("senderEmail");
    const subjectEl = document.getElementById("msgSubject");
    const budgetEl = document.getElementById("budgetRange");
    const messageEl = document.getElementById("senderMessage");

    const name = nameEl ? nameEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const subject = subjectEl ? subjectEl.value : "Pertanyaan Umum";
    const budget = budgetEl ? budgetEl.value : "-";
    const message = messageEl ? messageEl.value.trim() : "";

    if (!name || !email || !message) {
      showToast("Harap lengkapi semua kolom yang wajib diisi!");
      return false;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : "KIRIM PESAN SEKARANG &mdash;&gt;";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "[MENGIRIMKAN PESAN...]";
    }

    if (window.location.protocol === "file:") {
      showToast("Perhatian: Formulir online memerlukan web server (uji via localhost atau langsung di GitHub Pages).");
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/ermiawann@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _replyto: email,
          _subject: `[Portofolio] Pesan Baru dari ${name}: ${subject}`,
          "Nama Pengirim": name,
          "Email Pengirim": email,
          "Topik Kebutuhan": subject,
          "Estimasi Anggaran": budget,
          "Rincian Proyek": message,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        showToast("Pesan berhasil terkirim langsung ke email! Terima kasih.");
        form.reset();
      } else if (data.message && data.message.toLowerCase().includes("activation")) {
        showToast("Formulir butuh aktivasi: Cek email aktivasi di inbox/spam ermiawann@gmail.com.");
      } else if (data.message && data.message.toLowerCase().includes("web server")) {
        showToast("FormSubmit memerlukan web server. Uji via localhost atau langsung di GitHub Pages.");
      } else {
        showToast(data.message || "Pesan terkirim! Terima kasih.");
        form.reset();
      }
    } catch (err) {
      console.error("Gagal mengirim pesan:", err);
      showToast("Gagal mengirim pesan. Silakan hubungi langsung ke ermiawann@gmail.com");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }

    return false;
  };

  form.onsubmit = handleContactSubmit;
  form.addEventListener("submit", handleContactSubmit);
}

// 5b. Rate Card Booking Form & Package Auto-Select (FormSubmit AJAX -> ermiawann@gmail.com)
function initRateCardForm() {
  // Package Selector Auto-Select
  const packageSelect = document.getElementById("selectedPackage");
  const bookButtons = document.querySelectorAll("[data-package]");

  if (packageSelect && bookButtons.length) {
    bookButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const pkgName = btn.getAttribute("data-package");
        if (pkgName) {
          for (let i = 0; i < packageSelect.options.length; i++) {
            if (packageSelect.options[i].value.toLowerCase().includes(pkgName.toLowerCase())) {
              packageSelect.selectedIndex = i;
              break;
            }
          }
        }
      });
    });
  }

  // Booking Form Submission
  const form = document.getElementById("rateCardBookingForm");
  if (!form) return;

  const handleBookingSubmit = async (e) => {
    if (e) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      if (typeof e.stopPropagation === "function") e.stopPropagation();
    }

    const brandEl = document.getElementById("brandName");
    const emailEl = document.getElementById("brandEmail");
    const pkgEl = document.getElementById("selectedPackage");
    const targetDateEl = document.getElementById("targetDate");
    const briefEl = document.getElementById("campaignBrief");

    const brand = brandEl ? brandEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const pkg = pkgEl ? pkgEl.value : "-";
    const targetDate = (targetDateEl && targetDateEl.value.trim()) ? targetDateEl.value.trim() : "Fleksibel";
    const brief = briefEl ? briefEl.value.trim() : "";

    if (!brand || !email || !brief) {
      showToast("Harap lengkapi semua kolom yang wajib diisi!");
      return false;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : "KIRIMKAN FORMULIR PENAWARAN &mdash;&gt;";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "[MENGIRIMKAN PENAWARAN...]";
    }

    if (window.location.protocol === "file:") {
      showToast("Perhatian: Formulir online memerlukan web server (uji via localhost atau langsung di GitHub Pages).");
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/ermiawann@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: brand,
          email: email,
          _replyto: email,
          _subject: `[Rate Card] Penawaran Kolaborasi dari ${brand} (${pkg})`,
          "Nama Brand / Perusahaan": brand,
          "Email Resmi": email,
          "Pilihan Paket Promosi": pkg,
          "Target Tanggal Tayang": targetDate,
          "Brief Kampanye": brief,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        showToast("Formulir penawaran berhasil terkirim ke email! Kami akan segera menghubungi Anda.");
        form.reset();
      } else if (data.message && data.message.toLowerCase().includes("activation")) {
        showToast("Formulir butuh aktivasi: Cek email aktivasi di inbox/spam ermiawann@gmail.com.");
      } else if (data.message && data.message.toLowerCase().includes("web server")) {
        showToast("FormSubmit memerlukan web server. Uji via localhost atau langsung di GitHub Pages.");
      } else {
        showToast(data.message || "Formulir penawaran terkirim! Terima kasih.");
        form.reset();
      }
    } catch (err) {
      console.error("Gagal mengirim penawaran:", err);
      showToast("Gagal mengirim penawaran. Silakan hubungi langsung ke ermiawann@gmail.com");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }

    return false;
  };

  form.onsubmit = handleBookingSubmit;
  form.addEventListener("submit", handleBookingSubmit);
}

// Toast Notification
function showToast(msg) {
  const toast = document.getElementById("appToast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// Mobile menu, scroll nav, CV (minimal)
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("navLinks");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("mobile-open");
      if (isOpen) {
        let themeMobile = document.getElementById("mobileThemeBtn");
        if (!themeMobile) {
          themeMobile = document.createElement("button");
          themeMobile.id = "mobileThemeBtn";
          themeMobile.className = "theme-toggle-btn mobile-theme-btn";
          themeMobile.setAttribute("aria-label", "Ganti Tema Tampilan");
          const themeBtn = document.getElementById("themeToggleBtn");
          themeMobile.textContent = themeBtn ? themeBtn.textContent : ((document.documentElement.getAttribute("data-theme") === "dark") ? "[TEMA: GELAP]" : "[TEMA: TERANG]");
          themeMobile.addEventListener("click", () => {
            if (themeBtn) themeBtn.click();
            setTimeout(() => {
              const tb = document.getElementById("themeToggleBtn");
              if (tb) themeMobile.textContent = tb.textContent;
            }, 0);
          });
          nav.appendChild(themeMobile);
        } else {
          const themeBtn = document.getElementById("themeToggleBtn");
          themeMobile.textContent = themeBtn ? themeBtn.textContent : themeMobile.textContent;
        }
        let emailMobile = document.getElementById("mobileEmailLink");
        if (!emailMobile) {
          emailMobile = document.createElement("a");
          emailMobile.id = "mobileEmailLink";
          emailMobile.href = "#kontak";
          emailMobile.className = "nav-cta-btn";
          emailMobile.textContent = "ermiawann@gmail.com";
          nav.appendChild(emailMobile);
        }
      }
    });
    nav.querySelectorAll(".nav-link").forEach(a => a.addEventListener("click", () => nav.classList.remove("mobile-open")));
  }
}

function initScrollNav() {
  const nav = document.getElementById("mainNav");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    });
  }
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;
  function setActiveLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("load", setActiveLink);
  setActiveLink();
}

function initCvDownload() {
  const btn = document.getElementById("cvDownloadBtn");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("CV dalam format PDF akan segera tersedia.");
    });
  }
}

// 6. Subtle Editorial Scroll Reveal Animation
function initScrollReveal() {
  document.documentElement.classList.add("js-ready");

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-on-scroll").forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const selectors = [
    ".section-header",
    ".metric-card",
    ".about-main-text",
    ".about-philosophy-box",
    ".value-card",
    ".side-card",
    ".portfolio-filter-bar",
    ".project-card",
    ".timeline-item",
    ".skill-category-box",
    ".contact-info-panel",
    ".contact-form-panel",
    ".analytics-card",
    ".pricing-card",
    ".bundle-card",
    ".workflow-card",
    ".terms-card"
  ];

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -30px 0px",
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function observeElements() {
    document.querySelectorAll(selectors.join(", ")).forEach(el => {
      // Elements in #statistik have their own page open entrance animation
      if (el.closest("#statistik")) return;

      if (!el.classList.contains("reveal-on-scroll")) {
        el.classList.add("reveal-on-scroll");

        // Subtle stagger effect for children within lists or grids
        const parent = el.parentElement;
        if (parent && (
          parent.classList.contains("metrics-grid") ||
          parent.classList.contains("projects-grid") ||
          parent.classList.contains("timeline-list") ||
          parent.classList.contains("values-grid") ||
          parent.classList.contains("analytics-cards-grid") ||
          parent.classList.contains("pricing-grid") ||
          parent.classList.contains("workflow-grid") ||
          parent.classList.contains("terms-grid")
        )) {
          const siblingIndex = Array.from(parent.children).indexOf(el);
          if (siblingIndex > 0) {
            const delay = Math.min(siblingIndex * 0.07, 0.4).toFixed(2);
            el.style.transitionDelay = `${delay}s`;
          }
        }

        observer.observe(el);
      }
    });
  }

  observeElements();
  window.reobserveScrollReveal = observeElements;
}

// 7. Subtle Hero Parallax on Scroll
function initHeroParallax() {
  const typo = document.querySelector(".hero-typography-layer");
  const portrait = document.querySelector(".hero-portrait-wrapper");
  const heroSection = document.querySelector(".hero-section");

  if (!typo || !portrait || !heroSection) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;

  function onScroll() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight || 800;

    if (scrollY <= heroHeight + 80) {
      // Subtle editorial parallax ratio:
      // Text shifts slightly down (+0.14) giving depth, portrait shifts slightly up (-0.06)
      const textOffset = scrollY * 0.14;
      const portraitOffset = scrollY * -0.07;

      typo.style.setProperty("--parallax-text-y", `${textOffset.toFixed(1)}px`);
      portrait.style.setProperty("--parallax-portrait-y", `${portraitOffset.toFixed(1)}px`);
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  onScroll();
}

// 8. Back to Top Smooth Scrolling
function initBackToTop() {
  const backToTopButtons = document.querySelectorAll(".footer-back-to-top");
  backToTopButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
}

// 9. Hero Portrait Click Dim & Blur Toggle
function initHeroPortraitToggle() {
  const centerStage = document.querySelector(".hero-center-stage");
  const textSpans = document.querySelectorAll(".hero-title-text");
  const portraitImg = document.querySelector(".hero-portrait-img");

  if (!centerStage || !textSpans.length) return;

  // Clear entrance keyframe after finish so transitions remain 100% fluid
  if (portraitImg) {
    portraitImg.addEventListener("animationend", () => {
      portraitImg.style.animation = "none";
    }, { once: true });
  }

  function toggleDimmed(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    centerStage.classList.toggle("portrait-dimmed");
  }

  textSpans.forEach((span) => {
    span.addEventListener("click", toggleDimmed);
    span.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDimmed(e);
      }
    });
  });

  // Clicking anywhere on center stage while dimmed restores the portrait
  centerStage.addEventListener("click", (e) => {
    if (centerStage.classList.contains("portrait-dimmed")) {
      centerStage.classList.remove("portrait-dimmed");
    }
  });

  // Clicking outside center stage while dimmed also restores the portrait
  document.addEventListener("click", (e) => {
    if (!centerStage.contains(e.target) && centerStage.classList.contains("portrait-dimmed")) {
      centerStage.classList.remove("portrait-dimmed");
    }
  });
}
