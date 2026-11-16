/**
 * ============================================================================
 * FRAME - Modern Responsive Image Gallery
 * Core Application Logic & Interactions
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Gallery Dataset (20 Curated High-Definition Photographs)
     -------------------------------------------------------------------------- */
  const galleryData = [
    // --- NATURE ---
    {
      id: 1,
      title: "Alpine Mist & Solitude",
      category: "nature",
      categoryLabel: "Nature",
      location: "Dolomites, Italy",
      camera: "Sony A7R V • 24-70mm f/2.8 GM",
      date: "2024",
      description: "First morning light cutting through dense alpine fog over towering limestone pinnacles.",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
      alt: "Majestic alpine mountain peaks enveloped in morning mist and pine trees in the Dolomites",
      aspect: "landscape"
    },
    {
      id: 2,
      title: "Emerald Cascades",
      category: "nature",
      categoryLabel: "Nature",
      location: "Columbia Gorge, Oregon",
      camera: "Canon EOS R5 • 16-35mm f/2.8L",
      date: "2024",
      description: "Velvety ribbons of cold mountain water tumbling into deep moss-covered basalt canyons.",
      thumbnail: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1800&q=90",
      alt: "Lush waterfall cascading down mossy rocks into a forest pool",
      aspect: "portrait"
    },
    {
      id: 3,
      title: "Dune of the Golden Hour",
      category: "nature",
      categoryLabel: "Nature",
      location: "Namib Desert, Namibia",
      camera: "Nikon Z9 • 70-200mm f/2.8 S",
      date: "2023",
      description: "Wind-sculpted sand ridges casting razor-sharp shadows across endless glowing copper sands.",
      thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=90",
      alt: "Dramatic golden sand dunes under soft dusk desert light",
      aspect: "landscape"
    },
    {
      id: 4,
      title: "Celestial Aurora",
      category: "nature",
      categoryLabel: "Nature",
      location: "Tromsø, Arctic Norway",
      camera: "Sony A1 • 14mm f/1.8 GM",
      date: "2024",
      description: "Luminescent green solar storms dancing across the sub-zero polar sky above an icy lake.",
      thumbnail: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1800&q=90",
      alt: "Vibrant emerald green northern lights reflecting in winter arctic lake",
      aspect: "wide"
    },
    {
      id: 5,
      title: "Whispering Birch Forest",
      category: "nature",
      categoryLabel: "Nature",
      location: "Black Forest, Germany",
      camera: "Fujifilm GFX 100S • 45mm f/2.8",
      date: "2023",
      description: "Autumn canopy saturated in warm amber as gentle morning mist blankets the quiet forest path.",
      thumbnail: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=90",
      alt: "Golden autumn birch trees along a serene misty forest road",
      aspect: "portrait"
    },

    // --- ARCHITECTURE ---
    {
      id: 6,
      title: "Spiral of Pure Concrete",
      category: "architecture",
      categoryLabel: "Architecture",
      location: "Valencia, Spain",
      camera: "Leica Q2 • 28mm f/1.7 Summilux",
      date: "2024",
      description: "The seamless mathematical harmony of minimalist spiral stairs illuminated by soft skylight.",
      thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=90",
      alt: "Minimalist concrete spiral staircase viewed from directly above",
      aspect: "portrait"
    },
    {
      id: 7,
      title: "The Glass Monolith",
      category: "architecture",
      categoryLabel: "Architecture",
      location: "Frankfurt, Germany",
      camera: "Sony A7R IV • 12-24mm f/2.8 GM",
      date: "2024",
      description: "Towering financial monoliths reflecting azure skies and drifting cirrus clouds.",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
      alt: "Low-angle perspective looking up at modern glass skyscrapers",
      aspect: "portrait"
    },
    {
      id: 8,
      title: "Zenith Reflections",
      category: "architecture",
      categoryLabel: "Architecture",
      location: "London, United Kingdom",
      camera: "Canon EOS R5 • 24-105mm f/4L",
      date: "2023",
      description: "Geometric steel grids and reflective structural angles meeting modern urban light.",
      thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90",
      alt: "Geometric modern architectural construction against open sky",
      aspect: "landscape"
    },
    {
      id: 9,
      title: "Brutalist Curve",
      category: "architecture",
      categoryLabel: "Architecture",
      location: "Berlin, Germany",
      camera: "Hasselblad X2D 100C • 38mm f/2.5",
      date: "2024",
      description: "Form meets function in raw sweeping curved concrete contours and sculptural rhythm.",
      thumbnail: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=90",
      alt: "Monumental curved concrete architectural facade",
      aspect: "landscape"
    },
    {
      id: 10,
      title: "Arches of Classical Light",
      category: "architecture",
      categoryLabel: "Architecture",
      location: "Rome, Italy",
      camera: "Leica M11 • 35mm f/1.4 Summilux",
      date: "2023",
      description: "Sunlight carving timeless shadows through ancient travertine colonnades and corridors.",
      thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1800&q=90",
      alt: "Classical architectural arches illuminated by directional sunlight",
      aspect: "portrait"
    },

    // --- PORTRAITS ---
    {
      id: 11,
      title: "Gaze of the Silent City",
      category: "portraits",
      categoryLabel: "Portraits",
      location: "Studio 9, New York",
      camera: "Canon EOS R5 • 85mm f/1.2L USM",
      date: "2024",
      description: "Dramatic chiaroscuro studio lighting sculpting quiet intensity and raw contemplation.",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=90",
      alt: "Moody, high-fashion editorial portrait of a woman with dramatic lighting",
      aspect: "portrait"
    },
    {
      id: 12,
      title: "The Highland Elder",
      category: "portraits",
      categoryLabel: "Portraits",
      location: "Isle of Skye, Scotland",
      camera: "Sony A7 IV • 50mm f/1.2 GM",
      date: "2023",
      description: "Weathered lines of wisdom and an authentic, warm smile in natural diffuse northern light.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=90",
      alt: "Charismatic gentleman with warm genuine smile and textured background",
      aspect: "portrait"
    },
    {
      id: 13,
      title: "Golden Hour Reverie",
      category: "portraits",
      categoryLabel: "Portraits",
      location: "Los Angeles, California",
      camera: "Nikon Z8 • 58mm f/0.95 Noct",
      date: "2024",
      description: "Late afternoon backlight creating a shimmering halo and soft, dreamy organic bokeh.",
      thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1800&q=90",
      alt: "Golden hour natural light portrait with soft warm bokeh",
      aspect: "portrait"
    },
    {
      id: 14,
      title: "Metropolitan Soul",
      category: "portraits",
      categoryLabel: "Portraits",
      location: "SoHo, Manhattan",
      camera: "Fujifilm X100V • 23mm f/2.0",
      date: "2024",
      description: "Candid street character framed by the rhythmic architecture of cast-iron facades.",
      thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1800&q=90",
      alt: "Young man in stylish street attire with atmospheric urban background",
      aspect: "portrait"
    },
    {
      id: 15,
      title: "The Expressive Muse",
      category: "portraits",
      categoryLabel: "Portraits",
      location: "Paris, France",
      camera: "Sony A7R V • 50mm f/1.2 GM",
      date: "2023",
      description: "Subtle emotional stillness captured in minimalist, soft-box daylight ambience.",
      thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=90",
      alt: "Minimalist fashion portrait with soft studio lighting and direct gaze",
      aspect: "portrait"
    },

    // --- TRAVEL ---
    {
      id: 16,
      title: "Venetian Dawn Serenade",
      category: "travel",
      categoryLabel: "Travel",
      location: "Venice, Italy",
      camera: "Leica Q2 • 28mm f/1.7",
      date: "2024",
      description: "Gondolas bobbing gently on mist-kissed turquoise canals as Saint Mark's Campanile awakens.",
      thumbnail: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1800&q=90",
      alt: "Classic Venetian gondolas moored on the Grand Canal at misty sunrise",
      aspect: "landscape"
    },
    {
      id: 17,
      title: "Whispering Bamboo Grove",
      category: "travel",
      categoryLabel: "Travel",
      location: "Kyoto, Japan",
      camera: "Sony A7R IV • 24-70mm f/2.8 GM",
      date: "2023",
      description: "Early morning silence along the winding stone paths of timeless Arashiyama.",
      thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=90",
      alt: "Serene path winding through towering Arashiyama bamboo in Kyoto",
      aspect: "portrait"
    },
    {
      id: 18,
      title: "Oia Caldera Dream",
      category: "travel",
      categoryLabel: "Travel",
      location: "Santorini, Greece",
      camera: "Canon EOS R6 Mark II • 24-105mm",
      date: "2024",
      description: "Iconic whitewashed architecture cascading down volcanic cliffs into the azure Aegean Sea.",
      thumbnail: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=90",
      alt: "Whitewashed cliffside buildings overlooking the deep blue sea in Santorini",
      aspect: "landscape"
    },
    {
      id: 19,
      title: "The Nomad's Passage",
      category: "travel",
      categoryLabel: "Travel",
      location: "High Atlas, Morocco",
      camera: "Nikon Z7 II • 24-70mm f/4 S",
      date: "2023",
      description: "A solitary traveler standing atop mountain ridges overlooking rolling valleys of mist.",
      thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=90",
      alt: "Traveler standing atop a mountain summit looking out at clouds",
      aspect: "landscape"
    },
    {
      id: 20,
      title: "Arctic Fjord Haven",
      category: "travel",
      categoryLabel: "Travel",
      location: "Lofoten Islands, Norway",
      camera: "Sony A1 • 16-35mm f/2.8 GM",
      date: "2024",
      description: "Jagged granite peaks meeting crystal calm waters beneath dramatic arctic weather.",
      thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=90",
      alt: "Scenic open road passing through mountains and desert landscape",
      aspect: "landscape"
    }
  ];

  /* --------------------------------------------------------------------------
     2. Application State
     -------------------------------------------------------------------------- */
  const state = {
    currentCategory: "all",
    searchQuery: "",
    filteredItems: [...galleryData],
    lightboxIndex: 0,
    isLightboxOpen: false,
    isZoomed: false,
    touchStartX: 0,
    touchEndX: 0,
    touchStartY: 0,
    touchEndY: 0,
    lastTapTime: 0
  };

  /* --------------------------------------------------------------------------
     3. DOM Element Cache
     -------------------------------------------------------------------------- */
  const elements = {
    header: document.getElementById("header"),
    menuToggle: document.getElementById("menuToggle"),
    mobileNav: document.getElementById("mobileNav"),
    mobileNavClose: document.getElementById("mobileNavClose"),
    navLinks: document.querySelectorAll(".nav-link"),
    mobileExploreBtn: document.getElementById("mobileExploreBtn"),
    galleryGrid: document.getElementById("galleryGrid"),
    filterButtons: document.querySelectorAll(".filter-btn"),
    searchInput: document.getElementById("searchInput"),
    searchClear: document.getElementById("searchClear"),
    showingCount: document.getElementById("showingCount"),
    totalCount: document.getElementById("totalCount"),
    
    // Lightbox elements
    lightbox: document.getElementById("lightbox"),
    lightboxImg: document.getElementById("lightboxImg"),
    lightboxSpinner: document.getElementById("lightboxSpinner"),
    lightboxCounter: document.getElementById("lightboxCounter"),
    lightboxCategory: document.getElementById("lightboxCategory"),
    lightboxTitle: document.getElementById("lightboxTitle"),
    lightboxDesc: document.getElementById("lightboxDesc"),
    lightboxLocation: document.getElementById("lightboxLocation"),
    lightboxCamera: document.getElementById("lightboxCamera"),
    lightboxDate: document.getElementById("lightboxDate"),
    lightboxClose: document.getElementById("lightboxClose"),
    lightboxPrev: document.getElementById("lightboxPrev"),
    lightboxNext: document.getElementById("lightboxNext"),
    lightboxZoom: document.getElementById("lightboxZoom"),
    lightboxDownload: document.getElementById("lightboxDownload"),

    // Footer & Scroll elements
    currentYear: document.getElementById("currentYear"),
    backToTop: document.getElementById("backToTop")
  };

  /* --------------------------------------------------------------------------
     4. Helper Functions
     -------------------------------------------------------------------------- */

  /**
   * Safe HTML Escaping
   */
  function escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Update category badge counts in filter buttons
   */
  function updateCategoryCounts() {
    const counts = {
      all: galleryData.length,
      nature: 0,
      architecture: 0,
      portraits: 0,
      travel: 0
    };

    galleryData.forEach(item => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    elements.filterButtons.forEach(btn => {
      const cat = btn.getAttribute("data-category");
      const badge = btn.querySelector(".count-badge");
      if (badge && counts[cat] !== undefined) {
        badge.textContent = counts[cat];
      }
    });

    if (elements.totalCount) {
      elements.totalCount.textContent = galleryData.length;
    }
  }

  /* --------------------------------------------------------------------------
     5. Gallery Rendering & Filtering
     -------------------------------------------------------------------------- */

  /**
   * Filter dataset based on active category and search term
   */
  function applyFilters() {
    state.filteredItems = galleryData.filter(item => {
      const matchesCategory =
        state.currentCategory === "all" || item.category === state.currentCategory;

      const q = state.searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    renderGallery();
  }

  /**
   * Render Gallery Cards to DOM
   */
  function renderGallery() {
    if (!elements.galleryGrid) return;

    // Trigger subtle transition effect
    elements.galleryGrid.classList.add("filtering");

    setTimeout(() => {
      elements.galleryGrid.innerHTML = "";

      if (state.filteredItems.length === 0) {
        elements.galleryGrid.innerHTML = `
          <div class="empty-gallery">
            <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <h3 class="empty-title">No Photographs Found</h3>
            <p class="empty-text">No images matched your search criteria. Try a different keyword or reset filters.</p>
            <button class="btn btn-secondary" id="resetFiltersBtn">Reset All Filters</button>
          </div>
        `;

        const resetBtn = document.getElementById("resetFiltersBtn");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            state.currentCategory = "all";
            state.searchQuery = "";
            if (elements.searchInput) elements.searchInput.value = "";
            if (elements.searchClear) elements.searchClear.classList.remove("visible");
            elements.filterButtons.forEach(b => {
              b.classList.toggle("active", b.getAttribute("data-category") === "all");
            });
            applyFilters();
          });
        }
      } else {
        const fragment = document.createDocumentFragment();

        state.filteredItems.forEach((item, index) => {
          const card = document.createElement("article");
          card.className = `gallery-card aspect-${item.aspect}`;
          card.setAttribute("role", "button");
          card.setAttribute("tabindex", "0");
          card.setAttribute("aria-label", `View photograph: ${item.title}`);
          card.dataset.index = index;

          card.innerHTML = `
            <div class="card-media">
              <img 
                src="${item.thumbnail}" 
                alt="${escapeHTML(item.alt)}" 
                class="card-img" 
                loading="lazy"
                onerror="this.onerror=null; this.src='assets/images/placeholder.svg';"
              >
              <div class="card-top-badges">
                <span class="badge-cat">${escapeHTML(item.categoryLabel)}</span>
                <span class="badge-gear">${escapeHTML(item.camera)}</span>
              </div>
              <div class="card-overlay">
                <div class="card-content">
                  <h3 class="card-title">${escapeHTML(item.title)}</h3>
                  <div class="card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${escapeHTML(item.location)}</span>
                  </div>
                  <p class="card-desc">${escapeHTML(item.description)}</p>
                </div>
                <div class="card-action-hint" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
            </div>
          `;

          // Click & Keyboard listener to open lightbox
          card.addEventListener("click", () => openLightbox(index));
          card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openLightbox(index);
            }
          });

          fragment.appendChild(card);
        });

        elements.galleryGrid.appendChild(fragment);
      }

      // Update counters
      if (elements.showingCount) {
        elements.showingCount.textContent = state.filteredItems.length;
      }

      elements.galleryGrid.classList.remove("filtering");
    }, 120);
  }

  /* --------------------------------------------------------------------------
     6. Lightbox Controller
     -------------------------------------------------------------------------- */

  /**
   * Open lightbox modal with photograph at specified index
   */
  function openLightbox(index) {
    if (!state.filteredItems[index]) return;

    state.lightboxIndex = index;
    state.isLightboxOpen = true;
    state.isZoomed = false;

    updateLightboxContent();

    elements.lightbox.classList.add("active");
    elements.lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");

    // Focus close button for accessibility
    setTimeout(() => {
      if (elements.lightboxClose) elements.lightboxClose.focus();
    }, 100);

    // Preload adjacent images
    preloadAdjacent();
  }

  /**
   * Close lightbox modal
   */
  function closeLightbox() {
    if (!state.isLightboxOpen) return;

    state.isLightboxOpen = false;
    state.isZoomed = false;

    if (elements.lightboxImg) {
      elements.lightboxImg.classList.remove("zoomed");
    }

    elements.lightbox.classList.remove("active");
    elements.lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");

    // Return focus to active gallery card if available
    const activeCard = document.querySelector(`.gallery-card[data-index="${state.lightboxIndex}"]`);
    if (activeCard) {
      activeCard.focus();
    }
  }

  /**
   * Update Lightbox Image and Metadata
   */
  function updateLightboxContent() {
    const item = state.filteredItems[state.lightboxIndex];
    if (!item) return;

    // Reset zoom state
    state.isZoomed = false;
    elements.lightboxImg.classList.remove("zoomed");

    // Show loading spinner
    elements.lightboxSpinner.classList.add("visible");
    elements.lightboxImg.classList.add("loading");

    // Load full-resolution image
    const tempImg = new Image();
    tempImg.src = item.full;

    tempImg.onload = function () {
      elements.lightboxImg.src = item.full;
      elements.lightboxImg.alt = item.alt;
      elements.lightboxImg.classList.remove("loading");
      elements.lightboxSpinner.classList.remove("visible");
    };

    tempImg.onerror = function () {
      // Fallback to thumbnail or placeholder if full fails
      elements.lightboxImg.src = item.thumbnail || "assets/images/placeholder.svg";
      elements.lightboxImg.alt = item.alt;
      elements.lightboxImg.classList.remove("loading");
      elements.lightboxSpinner.classList.remove("visible");
    };

    // Update Text & Meta
    const pad = (n) => (n < 10 ? `0${n}` : n);
    elements.lightboxCounter.textContent = `${pad(state.lightboxIndex + 1)} / ${pad(state.filteredItems.length)}`;
    elements.lightboxCategory.textContent = item.categoryLabel;
    elements.lightboxTitle.textContent = item.title;
    elements.lightboxDesc.textContent = item.description;
    elements.lightboxLocation.textContent = item.location;
    elements.lightboxCamera.textContent = item.camera;
    elements.lightboxDate.textContent = item.date;

    // Update download link
    if (elements.lightboxDownload) {
      elements.lightboxDownload.href = item.full;
      elements.lightboxDownload.setAttribute("download", `${item.title.replace(/\s+/g, "_")}.jpg`);
      elements.lightboxDownload.setAttribute("target", "_blank");
    }
  }

  /**
   * Navigate to next image
   */
  function nextLightbox() {
    if (state.filteredItems.length <= 1) return;
    state.lightboxIndex = (state.lightboxIndex + 1) % state.filteredItems.length;
    updateLightboxContent();
    preloadAdjacent();
  }

  /**
   * Navigate to previous image
   */
  function prevLightbox() {
    if (state.filteredItems.length <= 1) return;
    state.lightboxIndex =
      (state.lightboxIndex - 1 + state.filteredItems.length) % state.filteredItems.length;
    updateLightboxContent();
    preloadAdjacent();
  }

  /**
   * Preload adjacent images for instantaneous transitions
   */
  function preloadAdjacent() {
    if (state.filteredItems.length <= 1) return;
    const nextIdx = (state.lightboxIndex + 1) % state.filteredItems.length;
    const prevIdx =
      (state.lightboxIndex - 1 + state.filteredItems.length) % state.filteredItems.length;

    const nextImg = new Image();
    nextImg.src = state.filteredItems[nextIdx].full;

    const prevImg = new Image();
    prevImg.src = state.filteredItems[prevIdx].full;
  }

  /**
   * Toggle Zoom on Lightbox image
   */
  function toggleZoom() {
    state.isZoomed = !state.isZoomed;
    elements.lightboxImg.classList.toggle("zoomed", state.isZoomed);
  }

  /* --------------------------------------------------------------------------
     7. Event Listeners Setup
     -------------------------------------------------------------------------- */

  function setupEventListeners() {
    // 1. Category Filter Buttons
    elements.filterButtons.forEach(btn => {
      btn.addEventListener("click", function () {
        elements.filterButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        state.currentCategory = this.getAttribute("data-category");
        applyFilters();
      });
    });

    // 2. Search Input Filtering
    if (elements.searchInput) {
      elements.searchInput.addEventListener("input", function (e) {
        state.searchQuery = e.target.value;

        if (elements.searchClear) {
          elements.searchClear.classList.toggle("visible", state.searchQuery.length > 0);
        }

        applyFilters();
      });
    }

    // 3. Clear Search Button
    if (elements.searchClear) {
      elements.searchClear.addEventListener("click", function () {
        elements.searchInput.value = "";
        state.searchQuery = "";
        elements.searchClear.classList.remove("visible");
        elements.searchInput.focus();
        applyFilters();
      });
    }

    // 4. Lightbox Nav Buttons
    if (elements.lightboxClose) {
      elements.lightboxClose.addEventListener("click", closeLightbox);
    }
    if (elements.lightboxNext) {
      elements.lightboxNext.addEventListener("click", nextLightbox);
    }
    if (elements.lightboxPrev) {
      elements.lightboxPrev.addEventListener("click", prevLightbox);
    }
    if (elements.lightboxZoom) {
      elements.lightboxZoom.addEventListener("click", toggleZoom);
    }
    if (elements.lightboxImg) {
      elements.lightboxImg.addEventListener("click", toggleZoom);
    }

    // 5. Close on backdrop click (outside image container and controls)
    if (elements.lightbox) {
      elements.lightbox.addEventListener("click", function (e) {
        // Close if click is on lightbox backdrop or stage directly
        if (
          e.target === elements.lightbox ||
          e.target.classList.contains("lightbox-stage") ||
          e.target.classList.contains("lightbox-image-container")
        ) {
          closeLightbox();
        }
      });
    }

    // 6. Keyboard Accessibility
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (state.isLightboxOpen) {
          closeLightbox();
        } else if (elements.mobileNav && elements.mobileNav.classList.contains("active")) {
          closeMobileNav();
        }
        return;
      }

      if (!state.isLightboxOpen) return;

      switch (e.key) {
        case "ArrowRight":
          nextLightbox();
          break;
        case "ArrowLeft":
          prevLightbox();
          break;
      }
    });

    // 7. Mobile Swipe Gestures & Double-Tap on Lightbox
    if (elements.lightbox) {
      elements.lightbox.addEventListener(
        "touchstart",
        function (e) {
          if (e.touches.length === 1) {
            state.touchStartX = e.touches[0].clientX;
            state.touchStartY = e.touches[0].clientY;
          }
        },
        { passive: true }
      );

      elements.lightbox.addEventListener(
        "touchend",
        function (e) {
          if (e.changedTouches.length === 1) {
            state.touchEndX = e.changedTouches[0].clientX;
            state.touchEndY = e.changedTouches[0].clientY;
            handleTouchSwipe();
          }
        },
        { passive: true }
      );
    }

    // Double tap on mobile to zoom
    if (elements.lightboxImg) {
      elements.lightboxImg.addEventListener("touchend", function (e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - state.lastTapTime;
        if (tapLength < 300 && tapLength > 0) {
          e.preventDefault();
          toggleZoom();
        }
        state.lastTapTime = currentTime;
      });
    }

    function handleTouchSwipe() {
      // If image is zoomed in, allow user to inspect without accidental swipe navigation
      if (state.isZoomed) return;

      const diffX = state.touchEndX - state.touchStartX;
      const diffY = state.touchEndY - state.touchStartY;
      const absDiffX = Math.abs(diffX);
      const absDiffY = Math.abs(diffY);
      const horizontalThreshold = 45;
      const verticalDismissThreshold = 80;

      // Vertical Swipe Down to dismiss (mobile native feel)
      if (diffY > verticalDismissThreshold && absDiffY > absDiffX * 1.5) {
        closeLightbox();
        return;
      }

      // Horizontal Swipe for previous / next
      if (absDiffX > horizontalThreshold && absDiffX > absDiffY * 1.3) {
        if (diffX < 0) {
          nextLightbox(); // Swiped left -> Next
        } else {
          prevLightbox(); // Swiped right -> Previous
        }
      }
    }

    // 8. Mobile Menu Drawer Controller
    function openMobileNav() {
      if (!elements.mobileNav || !elements.menuToggle) return;
      elements.mobileNav.classList.add("active");
      elements.menuToggle.classList.add("active");
      elements.menuToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("lightbox-open");
    }

    function closeMobileNav() {
      if (!elements.mobileNav || !elements.menuToggle) return;
      elements.mobileNav.classList.remove("active");
      elements.menuToggle.classList.remove("active");
      elements.menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("lightbox-open");
    }

    if (elements.menuToggle) {
      elements.menuToggle.addEventListener("click", function () {
        const isOpen = elements.mobileNav && elements.mobileNav.classList.contains("active");
        if (isOpen) {
          closeMobileNav();
        } else {
          openMobileNav();
        }
      });
    }

    if (elements.mobileNavClose) {
      elements.mobileNavClose.addEventListener("click", closeMobileNav);
    }

    if (elements.mobileExploreBtn) {
      elements.mobileExploreBtn.addEventListener("click", closeMobileNav);
    }

    // Close mobile nav when clicking any nav link
    elements.navLinks.forEach(link => {
      link.addEventListener("click", closeMobileNav);
    });

    // Close mobile nav on resize if expanding past mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768 && elements.mobileNav && elements.mobileNav.classList.contains("active")) {
        closeMobileNav();
      }
    });

    // 9. Sticky Header & Back to Top Scroll Behavior
    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;

      // Header blur
      if (elements.header) {
        elements.header.classList.toggle("scrolled", scrollPos > 50);
      }

      // Back to top button visibility
      if (elements.backToTop) {
        elements.backToTop.classList.toggle("visible", scrollPos > 400);
      }

      // Scroll Spy for active nav link
      updateScrollSpy();
    });

    // 10. Back to top button click
    if (elements.backToTop) {
      elements.backToTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }

    // 11. Dynamic Copyright Year
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }
  }

  /**
   * Scroll spy to highlight active nav link
   */
  function updateScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < top + height) {
        elements.navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. Initialization
     -------------------------------------------------------------------------- */
  function init() {
    updateCategoryCounts();
    renderGallery();
    setupEventListeners();
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
