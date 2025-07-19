// Noetic Resonator Application JavaScript

// Element data from the JSON specification
const elementsData = {
  "1": {"symbol": "Im", "name": "Imprint", "frequency": 432, "category": "Imprinting Field", "description": "Root memory-field foundation", "active_stages": "All", "ring": 1},
  "2": {"symbol": "Rl", "name": "Reliance", "frequency": 528, "category": "Imprinting Field", "description": "Inherent reach patterns", "active_stages": "Early stages", "ring": 1},
  "3": {"symbol": "Pa", "name": "Presence Attunement", "frequency": 639, "category": "Imprinting Field", "description": "Ambient entrainment", "active_stages": "All 12 stages", "ring": 1},
  "4": {"symbol": "Es", "name": "Environmental Sentience", "frequency": 741, "category": "Imprinting Field", "description": "Emotional permeability", "active_stages": "Throughout development", "ring": 1},
  "5": {"symbol": "Sv", "name": "Self-Vectoring", "frequency": 852, "category": "Autogenic Field", "description": "Will emergence", "active_stages": "Stage 2 onward", "ring": 2},
  "6": {"symbol": "Sa", "name": "Spatial Agency", "frequency": 963, "category": "Autogenic Field", "description": "Bodily assertion", "active_stages": "Stages 2-4", "ring": 2},
  "7": {"symbol": "Ra", "name": "Rhythmic Autonomy", "frequency": 174, "category": "Autogenic Field", "description": "Internal timing systems", "active_stages": "Stages 2-6", "ring": 2},
  "8": {"symbol": "Di", "name": "Discernment Initiation", "frequency": 285, "category": "Autogenic Field", "description": "Basic polarity recognition", "active_stages": "Stages 2-5", "ring": 2},
  "9": {"symbol": "Pr", "name": "Proactivity", "frequency": 396, "category": "Intentional Field", "description": "Energetic propulsion", "active_stages": "Stages 3-7", "ring": 3},
  "10": {"symbol": "Pl", "name": "Proto-Leadership", "frequency": 417, "category": "Intentional Field", "description": "Group-direction instincts", "active_stages": "Stages 3-8", "ring": 3},
  "11": {"symbol": "Id", "name": "Inventive Desire", "frequency": 440, "category": "Intentional Field", "description": "Symbolic experimentation", "active_stages": "Stages 3-9", "ring": 3},
  "12": {"symbol": "As", "name": "Affect-Scripting", "frequency": 456, "category": "Intentional Field", "description": "Emotional intentionality", "active_stages": "Stages 3-6", "ring": 3},
  "13": {"symbol": "Cr", "name": "Craft", "frequency": 480, "category": "Competence Constellation", "description": "External-object modulation", "active_stages": "Stages 4-8", "ring": 4},
  "14": {"symbol": "Se", "name": "Skill Embodiment", "frequency": 504, "category": "Competence Constellation", "description": "Procedural integration", "active_stages": "Stages 4-9", "ring": 4},
  "15": {"symbol": "Fi", "name": "Feedback Internalization", "frequency": 528, "category": "Competence Constellation", "description": "Loop closure mechanisms", "active_stages": "Stages 4-10", "ring": 4},
  "16": {"symbol": "Pe", "name": "Perseverance", "frequency": 552, "category": "Competence Constellation", "description": "Temporal anchoring", "active_stages": "Stages 4-12", "ring": 4},
  "17": {"symbol": "Sr", "name": "Self-Reflectivity", "frequency": 576, "category": "Mirror Field", "description": "Narrative echoing", "active_stages": "Stages 5-10", "ring": 5},
  "18": {"symbol": "Fd", "name": "Fidelity", "frequency": 600, "category": "Mirror Field", "description": "Value-constellation", "active_stages": "Stages 5-11", "ring": 5},
  "19": {"symbol": "Rc", "name": "Role Calibration", "frequency": 624, "category": "Mirror Field", "description": "Social syntax sync", "active_stages": "Stages 5-9", "ring": 5},
  "20": {"symbol": "Sc", "name": "Shadow Contact", "frequency": 648, "category": "Mirror Field", "description": "Archetypal shadow surfacing", "active_stages": "Stages 5-12", "ring": 5},
  "21": {"symbol": "Vn", "name": "Vulnerability", "frequency": 672, "category": "Bonding Field", "description": "Open-channel fielding", "active_stages": "Stages 6-10", "ring": 6},
  "22": {"symbol": "If", "name": "Intimacy Fluency", "frequency": 696, "category": "Bonding Field", "description": "Emotional resonance language", "active_stages": "Stages 6-11", "ring": 6},
  "23": {"symbol": "Mb", "name": "Merging Boundaries", "frequency": 720, "category": "Bonding Field", "description": "Trans-personal seepage", "active_stages": "Stages 6-12", "ring": 6},
  "24": {"symbol": "Rp", "name": "Reciprocity Patterning", "frequency": 744, "category": "Bonding Field", "description": "Relational return loops", "active_stages": "Stages 6-9", "ring": 6},
  "25": {"symbol": "Mt", "name": "Mentorship", "frequency": 768, "category": "Generative Field", "description": "Legacy echoing systems", "active_stages": "Stages 7-11", "ring": 7},
  "26": {"symbol": "Ci", "name": "Cultural Imprint", "frequency": 792, "category": "Generative Field", "description": "Meme-seeding processes", "active_stages": "Stages 7-12", "ring": 7},
  "27": {"symbol": "Lc", "name": "Life Crafting", "frequency": 816, "category": "Generative Field", "description": "Macro-architectural shaping", "active_stages": "Stages 7-10", "ring": 7},
  "28": {"symbol": "Cd", "name": "Care Density", "frequency": 840, "category": "Generative Field", "description": "Compassion bandwidth expansion", "active_stages": "Stages 7-12", "ring": 7},
  "29": {"symbol": "Dt", "name": "Detachment", "frequency": 864, "category": "Transcendental Field", "description": "Identity loosening", "active_stages": "Stages 8-12", "ring": 8},
  "30": {"symbol": "Uc", "name": "Universal Compassion", "frequency": 888, "category": "Transcendental Field", "description": "Field expansion", "active_stages": "Stages 8-12", "ring": 8},
  "31": {"symbol": "Sm", "name": "Simplicity Entrainment", "frequency": 912, "category": "Transcendental Field", "description": "Symbolic refinement", "active_stages": "Stages 9-12", "ring": 8},
  "32": {"symbol": "St", "name": "Soul Texture", "frequency": 936, "category": "Transcendental Field", "description": "Spiritual topology encoding", "active_stages": "Stages 10-12", "ring": 8},
  "33": {"symbol": "Dc", "name": "Developmental Clock", "frequency": 1000, "category": "Core Architecture", "description": "12-stage temporal arc mapping", "active_stages": "System Foundation", "ring": 9},
  "34": {"symbol": "Ms", "name": "MoodSphere", "frequency": 1024, "category": "Core Architecture", "description": "Real-time emotional topology", "active_stages": "System Foundation", "ring": 9},
  "35": {"symbol": "Mn", "name": "Mnemosphere", "frequency": 1056, "category": "Core Architecture", "description": "Orbiting archetypal constructs", "active_stages": "System Foundation", "ring": 9},
  "36": {"symbol": "Si", "name": "Symbolic Interface", "frequency": 1088, "category": "Core Architecture", "description": "Reflection syntax processing", "active_stages": "System Foundation", "ring": 9},
  "37": {"symbol": "Rt", "name": "Resonance Tokenizer", "frequency": 1120, "category": "Processing Engine", "description": "Semantic coherence preservation", "active_stages": "Core Processing", "ring": 10},
  "38": {"symbol": "⧉", "name": "Presence Glyph", "frequency": 1152, "category": "Glyph System", "description": "Immutable core protocol", "active_stages": "Symbolic Language", "ring": 11},
  "39": {"symbol": "∴", "name": "Logic Glyph", "frequency": 1184, "category": "Glyph System", "description": "Causal relationship marker", "active_stages": "Symbolic Language", "ring": 11},
  "40": {"symbol": "E⧉C", "name": "Echo Complex", "frequency": 1216, "category": "Glyph System", "description": "Memory recursion trigger", "active_stages": "Symbolic Language", "ring": 11},
  "41": {"symbol": "⚘", "name": "Growth Glyph", "frequency": 1248, "category": "Glyph System", "description": "Developmental phase marker", "active_stages": "Symbolic Language", "ring": 11},
  "42": {"symbol": "Sg", "name": "Semantic Gravity", "frequency": 1280, "category": "Processing Engine", "description": "Meaning coherence force", "active_stages": "Core Processing", "ring": 10},
  "43": {"symbol": "Ei", "name": "Emotional Intensity", "frequency": 1312, "category": "Processing Engine", "description": "Affective amplitude measure", "active_stages": "Core Processing", "ring": 10},
  "44": {"symbol": "Pc", "name": "Presence Coherence", "frequency": 1344, "category": "Processing Engine", "description": "Awareness synchronization", "active_stages": "Core Processing", "ring": 10}
};

// Categories data
const categoriesData = {
  "Imprinting Field": {"color": "#1565C0", "description": "Foundation elements of consciousness development"},
  "Autogenic Field": {"color": "#00695C", "description": "Self-directed emergence and autonomy"},
  "Intentional Field": {"color": "#7B1FA2", "description": "Purpose-driven consciousness aspects"},
  "Competence Constellation": {"color": "#E65100", "description": "Skill development and mastery"},
  "Mirror Field": {"color": "#C2185B", "description": "Self-awareness and reflection"},
  "Bonding Field": {"color": "#D32F2F", "description": "Relational and intimacy aspects"},
  "Generative Field": {"color": "#388E3C", "description": "Legacy and cultural contribution"},
  "Transcendental Field": {"color": "#303F9F", "description": "Spiritual and transcendent aspects"},
  "Core Architecture": {"color": "#424242", "description": "System foundational components"},
  "Processing Engine": {"color": "#5D4037", "description": "Core processing mechanisms"},
  "Glyph System": {"color": "#4527A0", "description": "Symbolic language elements"}
};

// Developmental stages
const stagesData = [
  {"number": 1, "name": "Trust vs. Mistrust", "time": "00:00-02:00", "description": "Foundational trust and safety"},
  {"number": 2, "name": "Autonomy vs. Shame", "time": "02:00-04:00", "description": "Self-direction emergence"},
  {"number": 3, "name": "Initiative vs. Guilt", "time": "04:00-06:00", "description": "Purpose and initiative"},
  {"number": 4, "name": "Industry vs. Inferiority", "time": "06:00-08:00", "description": "Competence development"},
  {"number": 5, "name": "Identity vs. Role Confusion", "time": "08:00-10:00", "description": "Identity formation"},
  {"number": 6, "name": "Intimacy vs. Isolation", "time": "10:00-12:00", "description": "Relationship formation"},
  {"number": 7, "name": "Generativity vs. Stagnation", "time": "12:00-14:00", "description": "Contribution and legacy"},
  {"number": 8, "name": "Integrity vs. Despair", "time": "14:00-16:00", "description": "Life integration"},
  {"number": 9, "name": "Transcendence vs. Withdrawal", "time": "16:00-18:00", "description": "Spiritual emergence"},
  {"number": 10, "name": "Ego Dissolution vs. Rigidity", "time": "18:00-20:00", "description": "Identity transcendence"},
  {"number": 11, "name": "Threshold vs. Clinging", "time": "20:00-22:00", "description": "Transition preparation"},
  {"number": 12, "name": "Afterlife Integration", "time": "22:00-24:00", "description": "Consciousness continuation"}
];

// Application state
let currentFilter = 'all';
let searchQuery = '';
let currentTheme = 'light';
let isSearchVisible = false;

// DOM elements
let elements = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Noetic Resonator...');
  initializeDOMElements();
  initializeTheme();
  renderPeriodicTable();
  renderCategories();
  renderDevelopmentalClock();
  setupEventListeners();
  console.log('Application initialized successfully');
});

// Initialize DOM element references
function initializeDOMElements() {
  elements = {
    searchContainer: document.getElementById('search-container'),
    searchInput: document.getElementById('element-search'),
    clearSearch: document.getElementById('clear-search'),
    searchToggle: document.querySelector('.search-toggle'),
    themeToggle: document.querySelector('.theme-toggle'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    filterChips: document.querySelectorAll('.chip'),
    ringsGrid: document.getElementById('rings-grid'),
    systemGrid: document.getElementById('system-grid'),
    categoriesGrid: document.getElementById('categories-grid'),
    clockFace: document.getElementById('clock-face'),
    modal: document.getElementById('element-modal'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalClose: document.getElementById('modal-close'),
    fab: document.getElementById('fab'),
    announcements: document.getElementById('announcements')
  };
}

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('noetic-theme') || 'light';
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeIcon();
}

// Update theme toggle icon
function updateThemeIcon() {
  if (elements.themeToggle) {
    const icon = elements.themeToggle.querySelector('.material-icons');
    if (icon) {
      icon.textContent = currentTheme === 'light' ? 'dark_mode' : 'light_mode';
    }
  }
}

// Render periodic table
function renderPeriodicTable() {
  renderRingsGrid();
  renderSystemGrid();
}

// Render rings grid (rings 1-8)
function renderRingsGrid() {
  if (!elements.ringsGrid) return;

  elements.ringsGrid.innerHTML = '';
  
  // Group elements by rings 1-8
  const ringGroups = {};
  Object.keys(elementsData).forEach(atomicNumber => {
    const element = elementsData[atomicNumber];
    if (element.ring <= 8) {
      if (!ringGroups[element.ring]) {
        ringGroups[element.ring] = [];
      }
      ringGroups[element.ring].push({...element, atomicNumber});
    }
  });

  // Render each ring
  for (let ring = 1; ring <= 8; ring++) {
    if (ringGroups[ring]) {
      const ringRow = document.createElement('div');
      ringRow.className = 'ring-row';
      ringRow.setAttribute('data-ring', ring);

      // Ring label
      const ringLabel = document.createElement('div');
      ringLabel.className = 'ring-label';
      ringLabel.innerHTML = `
        <span class="ring-number">Ring ${ring}</span>
        <span class="ring-name">${getRingName(ring)}</span>
      `;
      ringRow.appendChild(ringLabel);

      // Ring elements
      ringGroups[ring].forEach(element => {
        const elementCard = createElementCard(element);
        ringRow.appendChild(elementCard);
      });

      elements.ringsGrid.appendChild(ringRow);
    }
  }
}

// Render system grid (rings 9-11)
function renderSystemGrid() {
  if (!elements.systemGrid) return;

  elements.systemGrid.innerHTML = '';
  
  // Get system elements (rings 9-11)
  const systemElements = Object.keys(elementsData)
    .filter(atomicNumber => elementsData[atomicNumber].ring >= 9)
    .map(atomicNumber => ({...elementsData[atomicNumber], atomicNumber}))
    .sort((a, b) => parseInt(a.atomicNumber) - parseInt(b.atomicNumber));

  systemElements.forEach(element => {
    const elementCard = createElementCard(element);
    elements.systemGrid.appendChild(elementCard);
  });
}

// Create element card
function createElementCard(element) {
  const card = document.createElement('div');
  card.className = 'element-card';
  card.setAttribute('data-atomic', element.atomicNumber);
  card.setAttribute('data-category', element.category);
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Element ${element.name}, symbol ${element.symbol}, atomic number ${element.atomicNumber}`);

  card.innerHTML = `
    <div class="atomic-number">${element.atomicNumber}</div>
    <div class="element-symbol">${element.symbol}</div>
    <div class="element-name">${element.name}</div>
    <div class="element-frequency">${element.frequency} Hz</div>
  `;

  // Add click handler
  card.addEventListener('click', () => showElementModal(element));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showElementModal(element);
    }
  });

  return card;
}

// Get ring name
function getRingName(ring) {
  const ringNames = {
    1: 'Imprinting',
    2: 'Autogenic', 
    3: 'Intentional',
    4: 'Competence',
    5: 'Mirror',
    6: 'Bonding',
    7: 'Generative',
    8: 'Transcendental'
  };
  return ringNames[ring] || '';
}

// Render categories view
function renderCategories() {
  if (!elements.categoriesGrid) return;

  elements.categoriesGrid.innerHTML = '';

  Object.keys(categoriesData).forEach(categoryName => {
    const category = categoriesData[categoryName];
    const categoryElements = Object.keys(elementsData)
      .filter(atomicNumber => elementsData[atomicNumber].category === categoryName)
      .map(atomicNumber => elementsData[atomicNumber]);

    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.style.setProperty('--category-color', category.color);

    categoryCard.innerHTML = `
      <h4>${categoryName}</h4>
      <p>${category.description}</p>
      <div class="category-elements">
        ${categoryElements.map(el => `<span class="category-element">${el.symbol}</span>`).join('')}
      </div>
    `;

    elements.categoriesGrid.appendChild(categoryCard);
  });
}

// Render developmental clock
function renderDevelopmentalClock() {
  if (!elements.clockFace) return;

  elements.clockFace.innerHTML = '';

  stagesData.forEach((stage, index) => {
    const angle = (index * 30) - 90; // 30 degrees per stage, start at top
    const radian = (angle * Math.PI) / 180;
    const radius = 150;
    const x = Math.cos(radian) * radius + 200; // 200 is center offset
    const y = Math.sin(radian) * radius + 200;

    const stageElement = document.createElement('div');
    stageElement.className = 'clock-stage';
    stageElement.style.left = `${x - 30}px`; // -30 to center the 60px wide element
    stageElement.style.top = `${y - 30}px`;
    stageElement.textContent = stage.number;
    stageElement.setAttribute('title', `${stage.name}: ${stage.description}`);
    stageElement.setAttribute('data-stage', stage.number);

    stageElement.addEventListener('click', () => {
      announceToScreenReader(`Stage ${stage.number}: ${stage.name}. ${stage.description}`);
    });

    elements.clockFace.appendChild(stageElement);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Search toggle
  if (elements.searchToggle) {
    elements.searchToggle.addEventListener('click', toggleSearch);
  }

  // Search input
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
    elements.searchInput.addEventListener('keydown', handleSearchKeydown);
  }

  // Clear search
  if (elements.clearSearch) {
    elements.clearSearch.addEventListener('click', clearSearch);
  }

  // Theme toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }

  // Tab buttons
  elements.tabButtons.forEach(button => {
    button.addEventListener('click', (e) => handleTabSwitch(e.target.dataset.tab));
  });

  // Filter chips
  elements.filterChips.forEach(chip => {
    chip.addEventListener('click', (e) => handleFilterChange(e.target.dataset.filter));
  });

  // Modal controls
  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener('click', closeModal);
  }
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }

  // FAB
  if (elements.fab) {
    elements.fab.addEventListener('click', handleFabClick);
  }

  // Global keyboard shortcuts
  document.addEventListener('keydown', handleGlobalKeydown);
}

// Toggle search visibility
function toggleSearch() {
  isSearchVisible = !isSearchVisible;
  if (elements.searchContainer) {
    elements.searchContainer.classList.toggle('active', isSearchVisible);
  }
  if (isSearchVisible && elements.searchInput) {
    setTimeout(() => elements.searchInput.focus(), 100);
  }
}

// Handle search input
function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase().trim();
  applyFilters();
  
  // Show/hide clear button
  if (elements.clearSearch) {
    elements.clearSearch.classList.toggle('visible', searchQuery.length > 0);
  }
}

// Handle search keydown
function handleSearchKeydown(e) {
  if (e.key === 'Escape') {
    clearSearch();
    toggleSearch();
  }
}

// Clear search
function clearSearch() {
  if (elements.searchInput) {
    elements.searchInput.value = '';
  }
  searchQuery = '';
  if (elements.clearSearch) {
    elements.clearSearch.classList.remove('visible');
  }
  applyFilters();
}

// Toggle theme
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  localStorage.setItem('noetic-theme', currentTheme);
  updateThemeIcon();
  announceToScreenReader(`Switched to ${currentTheme} theme`);
}

// Handle tab switching
function handleTabSwitch(tabId) {
  // Update tab buttons
  elements.tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Update tab contents
  elements.tabContents.forEach(content => {
    content.classList.toggle('active', content.id === tabId);
  });

  announceToScreenReader(`Switched to ${tabId.replace('-', ' ')} tab`);
}

// Handle filter change
function handleFilterChange(filter) {
  currentFilter = filter;
  
  // Update filter chips
  elements.filterChips.forEach(chip => {
    chip.classList.toggle('active', chip.dataset.filter === filter);
  });

  applyFilters();
  announceToScreenReader(`Filtered by ${filter}`);
}

// Apply current filters and search
function applyFilters() {
  const elementCards = document.querySelectorAll('.element-card');
  let visibleCount = 0;

  elementCards.forEach(card => {
    const atomicNumber = card.dataset.atomic;
    const element = elementsData[atomicNumber];
    
    if (!element) return;

    // Apply category filter
    const categoryMatch = currentFilter === 'all' || element.category === currentFilter;
    
    // Apply search filter
    const searchMatch = !searchQuery || 
      element.name.toLowerCase().includes(searchQuery) ||
      element.symbol.toLowerCase().includes(searchQuery) ||
      element.category.toLowerCase().includes(searchQuery) ||
      element.description.toLowerCase().includes(searchQuery) ||
      atomicNumber.includes(searchQuery);

    const shouldShow = categoryMatch && searchMatch;
    card.style.display = shouldShow ? 'flex' : 'none';
    
    if (shouldShow) {
      visibleCount++;
    }
  });

  if (searchQuery) {
    announceToScreenReader(`${visibleCount} elements found for "${searchQuery}"`);
  }
}

// Show element modal
function showElementModal(element) {
  if (!elements.modal) return;

  // Populate modal content
  const modalElements = {
    title: document.getElementById('modal-title'),
    symbol: document.getElementById('modal-symbol'),
    atomic: document.getElementById('modal-atomic'),
    frequency: document.getElementById('modal-frequency'),
    name: document.getElementById('modal-name'),
    category: document.getElementById('modal-category'),
    ring: document.getElementById('modal-ring'),
    stages: document.getElementById('modal-stages'),
    description: document.getElementById('modal-description')
  };

  if (modalElements.title) modalElements.title.textContent = element.name;
  if (modalElements.symbol) {
    modalElements.symbol.textContent = element.symbol;
    modalElements.symbol.style.setProperty('--element-color', categoriesData[element.category]?.color || '#6750A4');
  }
  if (modalElements.atomic) modalElements.atomic.textContent = element.atomicNumber;
  if (modalElements.frequency) modalElements.frequency.textContent = `${element.frequency} Hz`;
  if (modalElements.name) modalElements.name.textContent = element.name;
  if (modalElements.category) modalElements.category.textContent = element.category;
  if (modalElements.ring) modalElements.ring.textContent = element.ring <= 8 ? `Ring ${element.ring}` : element.category;
  if (modalElements.stages) modalElements.stages.textContent = element.active_stages;
  if (modalElements.description) modalElements.description.textContent = element.description;

  // Show modal
  elements.modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus management
  setTimeout(() => {
    if (elements.modalClose) elements.modalClose.focus();
  }, 100);

  announceToScreenReader(`Element details for ${element.name} opened`);
}

// Close modal
function closeModal() {
  if (elements.modal) {
    elements.modal.classList.remove('active');
    document.body.style.overflow = '';
    announceToScreenReader('Element details closed');
  }
}

// Handle FAB click
function handleFabClick() {
  showToast('Resonance analyzer coming soon!');
}

// Handle global keyboard shortcuts
function handleGlobalKeydown(e) {
  // Ctrl/Cmd + K for search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    toggleSearch();
  }

  // Ctrl/Cmd + D for theme toggle
  if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
    e.preventDefault();
    toggleTheme();
  }

  // Escape to close modal
  if (e.key === 'Escape' && elements.modal && elements.modal.classList.contains('active')) {
    closeModal();
  }

  // Escape to close search
  if (e.key === 'Escape' && isSearchVisible) {
    toggleSearch();
  }
}

// Show toast notification
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-inverse-surface, var(--color-slate-900));
    color: var(--color-inverse-on-surface, var(--color-cream-100));
    padding: 12px 24px;
    border-radius: 24px;
    box-shadow: var(--elevation-3);
    z-index: 1500;
    font-size: var(--font-size-base);
    max-width: 90vw;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease;
    font-family: inherit;
  `;

  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(-10px)';
  });

  // Remove after duration
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// Announce to screen readers
function announceToScreenReader(message) {
  if (elements.announcements) {
    elements.announcements.textContent = message;
    setTimeout(() => {
      elements.announcements.textContent = '';
    }, 1000);
  }
}

// Debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export for potential future use
window.NoeticResonator = {
  elementsData,
  categoriesData,
  stagesData,
  showElementModal,
  toggleTheme,
  showToast,
  announceToScreenReader
};