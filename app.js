// ============================================================
//  Rebranding Checklist — Main Application (v2)
// ============================================================

(() => {
  "use strict";

  // ──────────────────────────────────────────────────────────
  //  PREDEFINED CRITERIA  (also stored in JSON for portability)
  // ──────────────────────────────────────────────────────────
  const DEFAULT_PREDEFINED_CRITERIA = [
    { id: "pc-logo",       title: "Logo replaced with new brand logo" },
    { id: "pc-favicon",    title: "Favicon updated" },
    { id: "pc-colors",     title: "Color scheme matches new brand palette" },
    { id: "pc-typography", title: "Typography matches brand guidelines" },
    { id: "pc-buttons",    title: "Buttons styled to new brand standards" },
    { id: "pc-icons",      title: "Icon set replaced with brand icons" },
    { id: "pc-images",     title: "Images / illustrations use new brand style" },
    { id: "pc-header",     title: "Header / navigation updated with new branding" },
    { id: "pc-footer",     title: "Footer updated with new brand assets" },
    { id: "pc-social",     title: "Social media links and icons updated" },
    { id: "pc-forms",      title: "Form elements styled to brand guidelines" },
    { id: "pc-loading",    title: "Loading / spinner animations use brand style" },
    { id: "pc-error",      title: "Error pages reflect new branding" },
    { id: "pc-email",      title: "Transactional email templates updated" },
    { id: "pc-meta",       title: "Meta tags and OG images updated" },
    { id: "pc-print",      title: "Print stylesheets updated" },
    { id: "pc-a11y",       title: "Color contrast meets accessibility standards" },
    { id: "pc-dark",       title: "Dark mode theme updated (if applicable)" },
    { id: "pc-motion",     title: "Animations / transitions match brand motion style" },
    { id: "pc-copy",       title: "Marketing copy reflects new brand voice" }
  ];

  // ──────────────────────────────────────────────────────────
  //  SAMPLE DATA
  // ──────────────────────────────────────────────────────────
  const SAMPLE_DATA = {
    title: "Rebranding Review Checklist",
    predefinedCriteria: DEFAULT_PREDEFINED_CRITERIA,
    topics: [
      {
        id: "proj-website", title: "Corporate Website", type: "title",
        children: [
          {
            id: "page-home", title: "Home Page", type: "title",
            children: [
              { id: "t-home-1", title: "Logo replaced with new brand logo", type: "task", checked: false },
              { id: "t-home-2", title: "Favicon updated", type: "task", checked: false },
              { id: "t-home-3", title: "Hero banner uses new brand colors", type: "task", checked: false },
              { id: "t-home-4", title: "Typography matches brand guidelines", type: "task", checked: false },
              { id: "t-home-5", title: "Call-to-action buttons use new style", type: "task", checked: false },
              { id: "t-home-6", title: "Footer updated with new brand assets", type: "task", checked: false }
            ]
          },
          {
            id: "page-about", title: "About Us Page", type: "title",
            children: [
              { id: "t-about-1", title: "Company description updated", type: "task", checked: false },
              { id: "t-about-2", title: "Team photos use new brand frame style", type: "task", checked: false },
              { id: "t-about-3", title: "Mission/Vision text reflects rebrand", type: "task", checked: false },
              { id: "t-about-4", title: "Page header uses new brand imagery", type: "task", checked: false }
            ]
          },
          {
            id: "page-contact", title: "Contact Page", type: "title",
            children: [
              { id: "t-contact-1", title: "Form styling matches brand guidelines", type: "task", checked: false },
              { id: "t-contact-2", title: "Map marker uses new brand icon", type: "task", checked: false },
              { id: "t-contact-3", title: "Social media links updated", type: "task", checked: false }
            ]
          }
        ]
      },
      {
        id: "proj-mobile", title: "Mobile App", type: "title",
        children: [
          {
            id: "page-splash", title: "Splash / Login Screen", type: "title",
            children: [
              { id: "t-splash-1", title: "Splash screen logo updated", type: "task", checked: false },
              { id: "t-splash-2", title: "Background gradient uses new palette", type: "task", checked: false },
              { id: "t-splash-3", title: "Login button styles updated", type: "task", checked: false }
            ]
          },
          {
            id: "page-dashboard", title: "Dashboard", type: "title",
            children: [
              { id: "t-dash-1", title: "Navigation bar colors updated", type: "task", checked: false },
              { id: "t-dash-2", title: "Card components use new border radius", type: "task", checked: false },
              { id: "t-dash-3", title: "Icon set replaced with brand icons", type: "task", checked: false },
              { id: "t-dash-4", title: "Chart colors match brand palette", type: "task", checked: false }
            ]
          },
          {
            id: "page-settings", title: "Settings", type: "title",
            children: [
              { id: "t-set-1", title: "Toggle/switch components restyled", type: "task", checked: false },
              { id: "t-set-2", title: "App version footer updated", type: "task", checked: false }
            ]
          }
        ]
      },
      {
        id: "proj-email", title: "Email Templates", type: "title",
        children: [
          {
            id: "email-welcome", title: "Welcome Email", type: "title",
            children: [
              { id: "t-ew-1", title: "Header logo replaced", type: "task", checked: false },
              { id: "t-ew-2", title: "Color scheme updated", type: "task", checked: false },
              { id: "t-ew-3", title: "Footer social links updated", type: "task", checked: false }
            ]
          },
          {
            id: "email-newsletter", title: "Newsletter", type: "title",
            children: [
              { id: "t-en-1", title: "Banner image uses new branding", type: "task", checked: false },
              { id: "t-en-2", title: "Button styles match brand", type: "task", checked: false },
              { id: "t-en-3", title: "Unsubscribe footer updated", type: "task", checked: false }
            ]
          }
        ]
      },
      {
        id: "proj-social", title: "Social Media Assets", type: "title",
        children: [
          { id: "t-soc-1", title: "Profile pictures updated across all platforms", type: "task", checked: false },
          { id: "t-soc-2", title: "Cover/banner images updated", type: "task", checked: false },
          { id: "t-soc-3", title: "Post templates use new brand colors", type: "task", checked: false },
          { id: "t-soc-4", title: "Story highlight covers updated", type: "task", checked: false },
          { id: "t-soc-5", title: "Bio/description text updated", type: "task", checked: false }
        ]
      }
    ]
  };

  // ──────────────────────────────────────────────────────────
  //  STATE
  // ──────────────────────────────────────────────────────────
  let data = null;
  let activeTabIdx = 0;
  let editMode = false;

  // For the criteria modal
  let criteriaTargetNode = null;   // node we're adding criteria to
  let criteriaSelection = new Set(); // selected criteria ids in modal

  // For the prompt modal
  let promptCallback = null;

  // ──────────────────────────────────────────────────────────
  //  DOM REFS
  // ──────────────────────────────────────────────────────────
  const $ = (id) => document.getElementById(id);
  const $level1Tabs     = $("level1Tabs");
  const $treeContainer  = $("treeContainer");
  const $emptyState     = $("emptyState");
  const $globalProgress = $("globalProgress");
  const $importModal    = $("importModal");
  const $fileInput      = $("fileInput");
  const $jsonTextarea   = $("jsonTextarea");
  // sample JSON refs populated in init()
  const $criteriaModal  = $("criteriaModal");
  const $criteriaList   = $("criteriaList");
  const $criteriaEmpty  = $("criteriaEmpty");
  const $criteriaCount  = $("criteriaCount");
  const $criteriaHint   = $("criteriaHint");
  const $criteriaTitle  = $("criteriaModalTitle");
  const $promptModal    = $("promptModal");
  const $promptInput    = $("promptInput");
  const $promptTitle    = $("promptTitle");

  // ──────────────────────────────────────────────────────────
  //  SVG ICONS
  // ──────────────────────────────────────────────────────────
  const ICONS = {
    check:    '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
    chevron:  '<path d="M7 10l5 5 5-5z"/>',
    add:      '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/>',
    delete:   '<path d="M6 19c0 1.1.9 2 2 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>',
    edit:     '<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>',
    preset:   '<path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>',
    folder:   '<path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z"/>',
    task:     '<path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
  };

  function icon(name, size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}">${ICONS[name]}</svg>`;
  }

  // ──────────────────────────────────────────────────────────
  //  INIT
  // ──────────────────────────────────────────────────────────
  function init() {
    // Populate sample JSON previews
    const singleProjectSample = {
      id: "proj-new-website",
      title: "New Website Redesign",
      type: "title",
      children: [
        {
          id: "page-landing", title: "Landing Page", type: "title",
          children: [
            { id: "t-land-1", title: "Logo replaced with new brand logo", type: "task", checked: false },
            { id: "t-land-2", title: "Hero banner uses new brand colors", type: "task", checked: false },
            { id: "t-land-3", title: "Typography matches brand guidelines", type: "task", checked: false }
          ]
        },
        {
          id: "page-pricing", title: "Pricing Page", type: "title",
          children: [
            { id: "t-price-1", title: "Pricing cards styled to new brand", type: "task", checked: false },
            { id: "t-price-2", title: "Comparison table follows brand guidelines", type: "task", checked: false }
          ]
        }
      ]
    };

    $("sampleJsonFull").textContent = JSON.stringify(SAMPLE_DATA, null, 2);
    $("sampleJsonProject").textContent =
      "// ── Single Project (appends to existing checklist) ──\n" +
      JSON.stringify(singleProjectSample, null, 2) +
      "\n\n// ── Multiple Projects (wrap in an array) ──\n" +
      JSON.stringify([singleProjectSample], null, 2);

    // Restore from localStorage
    const saved = localStorage.getItem("rebranding_checklist");
    if (saved) {
      try { loadData(JSON.parse(saved), true); } catch { /* ignore corrupt */ }
    }

    // Top-bar buttons
    $("btnEditMode").addEventListener("click", toggleEditMode);
    $("btnImport").addEventListener("click", openImportModal);
    $("btnExport").addEventListener("click", exportData);
    $("btnReset").addEventListener("click", resetAll);
    $("btnLoadSample").addEventListener("click", () => loadData(structuredClone(SAMPLE_DATA)));

    // Import modal
    $("btnCloseModal").addEventListener("click", closeImportModal);
    $("btnImportText").addEventListener("click", importFromText);
    $importModal.addEventListener("click", (e) => { if (e.target === $importModal) closeImportModal(); });
    $fileInput.addEventListener("change", importFromFile);
    initImportModeButtons();

    // Criteria modal
    $("btnCloseCriteria").addEventListener("click", closeCriteriaModal);
    $("btnSelectAll").addEventListener("click", criteriaSelectAll);
    $("btnDeselectAll").addEventListener("click", criteriaDeselectAll);
    $("btnAddCriteria").addEventListener("click", criteriaConfirmAdd);
    $criteriaModal.addEventListener("click", (e) => { if (e.target === $criteriaModal) closeCriteriaModal(); });

    // Prompt modal
    $("btnClosePrompt").addEventListener("click", closePromptModal);
    $("btnCancelPrompt").addEventListener("click", closePromptModal);
    $("btnConfirmPrompt").addEventListener("click", promptConfirm);
    $promptModal.addEventListener("click", (e) => { if (e.target === $promptModal) closePromptModal(); });
    $promptInput.addEventListener("keydown", (e) => { if (e.key === "Enter") promptConfirm(); });

    // Global ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeImportModal();
        closeCriteriaModal();
        closePromptModal();
      }
    });

    render();
  }

  // ──────────────────────────────────────────────────────────
  //  EDIT MODE
  // ──────────────────────────────────────────────────────────
  function toggleEditMode() {
    editMode = !editMode;
    document.body.classList.toggle("edit-mode", editMode);
    $("btnEditMode").classList.toggle("active", editMode);
    render();
  }

  // ──────────────────────────────────────────────────────────
  //  DATA LOADING
  // ──────────────────────────────────────────────────────────
  function loadData(newData, silent) {
    if (!newData || !Array.isArray(newData.topics) || newData.topics.length === 0) {
      if (!silent) alert("Invalid checklist data. Must have a 'topics' array with at least one item.");
      return;
    }
    assignIds(newData.topics);
    // Ensure predefined criteria exist
    if (!newData.predefinedCriteria || !Array.isArray(newData.predefinedCriteria)) {
      newData.predefinedCriteria = structuredClone(DEFAULT_PREDEFINED_CRITERIA);
    }
    data = newData;
    activeTabIdx = Math.min(activeTabIdx, data.topics.length - 1);
    persist();
    render();
    closeImportModal();
  }

  let _idCounter = Date.now();
  function genId() { return `id_${++_idCounter}`; }

  function assignIds(nodes) {
    for (const node of nodes) {
      if (!node.id) node.id = genId();
      if (!node.type) node.type = (node.children && node.children.length > 0) ? "title" : "task";
      if (node.type === "task" && node.checked === undefined) node.checked = false;
      if (node.children) assignIds(node.children);
    }
  }

  function persist() {
    if (data) localStorage.setItem("rebranding_checklist", JSON.stringify(data));
  }

  // ──────────────────────────────────────────────────────────
  //  FIND NODE & PARENT
  // ──────────────────────────────────────────────────────────
  function findNodeAndParent(nodeId, nodes, parent) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === nodeId) return { node: nodes[i], parent: nodes, index: i, parentNode: parent };
      if (nodes[i].children) {
        const found = findNodeAndParent(nodeId, nodes[i].children, nodes[i]);
        if (found) return found;
      }
    }
    return null;
  }

  // ──────────────────────────────────────────────────────────
  //  COUNTING
  // ──────────────────────────────────────────────────────────
  function countTasks(node) {
    if (node.type === "task") return { total: 1, done: node.checked ? 1 : 0 };
    let total = 0, done = 0;
    if (node.children) {
      for (const child of node.children) {
        const c = countTasks(child);
        total += c.total;
        done += c.done;
      }
    }
    return { total, done };
  }

  function countAll() {
    if (!data) return { total: 0, done: 0 };
    let total = 0, done = 0;
    for (const topic of data.topics) {
      const c = countTasks(topic);
      total += c.total;
      done += c.done;
    }
    return { total, done };
  }

  // ──────────────────────────────────────────────────────────
  //  COLLECT EXISTING TASK TITLES in a subtree
  // ──────────────────────────────────────────────────────────
  function collectTaskTitles(node) {
    const set = new Set();
    function walk(n) {
      if (n.type === "task") set.add(n.title.trim().toLowerCase());
      if (n.children) n.children.forEach(walk);
    }
    walk(node);
    return set;
  }

  // ──────────────────────────────────────────────────────────
  //  RENDERING
  // ──────────────────────────────────────────────────────────
  function render() {
    if (!data) {
      $emptyState.style.display = "";
      $treeContainer.style.display = "none";
      $level1Tabs.innerHTML = "";
      updateGlobalProgress();
      return;
    }
    $emptyState.style.display = "none";
    $treeContainer.style.display = "block";

    renderTabs();
    renderTree();
    updateGlobalProgress();
  }

  function renderTabs() {
    $level1Tabs.innerHTML = "";
    data.topics.forEach((topic, idx) => {
      const btn = document.createElement("button");
      btn.className = "level1-tab" + (idx === activeTabIdx ? " level1-tab--active" : "");
      btn.style.animationDelay = `${idx * .04}s`;

      const counts = countTasks(topic);
      const pct = counts.total > 0 ? Math.round((counts.done / counts.total) * 100) : 0;

      btn.innerHTML = `
        <span class="level1-tab__label">${esc(topic.title)}</span>
        <span class="level1-tab__progress">${counts.done}/${counts.total} (${pct}%)</span>
        <span class="level1-tab__edit-btns">
          <span class="btn--ghost btn--ghost-primary" data-action="rename-tab" data-idx="${idx}" title="Rename">${icon('edit', 14)}</span>
          <span class="btn--ghost btn--ghost-danger" data-action="delete-tab" data-idx="${idx}" title="Delete">${icon('delete', 14)}</span>
        </span>
      `;

      btn.addEventListener("click", (e) => {
        const action = e.target.closest("[data-action]");
        if (action) {
          e.stopPropagation();
          const act = action.dataset.action;
          const i = parseInt(action.dataset.idx);
          if (act === "rename-tab") renameTab(i);
          else if (act === "delete-tab") deleteTab(i);
          return;
        }
        activeTabIdx = idx;
        render();
      });
      $level1Tabs.appendChild(btn);
    });

    // "Add project" tab (edit mode only)
    const addBtn = document.createElement("button");
    addBtn.className = "level1-tab level1-tab--add";
    addBtn.innerHTML = `${icon('add', 14)} <span>Add Project</span>`;
    addBtn.addEventListener("click", addLevel1Topic);
    $level1Tabs.appendChild(addBtn);
  }

  function renderTree() {
    $treeContainer.innerHTML = "";
    const topic = data.topics[activeTabIdx];
    if (!topic) return;

    const ul = document.createElement("ul");
    ul.className = "tree-group tree-group--root";

    if (topic.type === "task") {
      ul.appendChild(buildTaskNode(topic));
    } else if (topic.children) {
      for (const child of topic.children) {
        ul.appendChild(buildNode(child));
      }
    }

    // Add-row at root level (edit mode)
    ul.appendChild(buildAddRow(topic));

    $treeContainer.appendChild(ul);
  }

  function buildNode(node) {
    return node.type === "task" ? buildTaskNode(node) : buildTitleNode(node);
  }

  function buildTitleNode(node) {
    const li = document.createElement("li");
    li.className = "tree-node";
    li.dataset.id = node.id;

    const counts = countTasks(node);
    const pct = counts.total > 0 ? Math.round((counts.done / counts.total) * 100) : 0;
    const allDone = counts.total > 0 && counts.done === counts.total;

    // Title bar
    const titleDiv = document.createElement("div");
    titleDiv.className = "tree-title";
    titleDiv.innerHTML = `
      <svg class="tree-title__chevron" viewBox="0 0 24 24">${ICONS.chevron}</svg>
      <span class="tree-title__label">${esc(node.title)}</span>
      <span class="tree-title__badge ${allDone ? 'tree-title__badge--done' : 'tree-title__badge--pending'}">
        ${counts.done} / ${counts.total}
      </span>
      <span class="tree-title__edit-btns">
        <span class="btn--ghost btn--ghost-primary" data-action="rename" data-id="${node.id}" title="Rename">${icon('edit', 14)}</span>
        <span class="btn--ghost btn--ghost-danger" data-action="delete" data-id="${node.id}" title="Delete">${icon('delete', 14)}</span>
      </span>
      <div class="tree-title__progress-bar">
        <div class="tree-title__progress-fill" style="width:${pct}%"></div>
      </div>
    `;

    titleDiv.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]");
      if (action) {
        e.stopPropagation();
        handleNodeAction(action.dataset.action, action.dataset.id);
        return;
      }
      li.classList.toggle("tree-node--collapsed");
    });

    li.appendChild(titleDiv);

    // Children list
    if (!node.children) node.children = [];
    const childUl = document.createElement("ul");
    childUl.className = "tree-group tree-group--nested";
    for (const child of node.children) {
      childUl.appendChild(buildNode(child));
    }
    // Add-row inside this title
    childUl.appendChild(buildAddRow(node));
    li.appendChild(childUl);

    return li;
  }

  function buildTaskNode(node) {
    const li = document.createElement("li");
    li.className = "tree-node";
    li.dataset.id = node.id;

    const taskDiv = document.createElement("div");
    taskDiv.className = "tree-task" + (node.checked ? " tree-task--checked" : "");
    taskDiv.innerHTML = `
      <div class="tree-task__checkbox">
        <svg viewBox="0 0 24 24">${ICONS.check}</svg>
      </div>
      <span class="tree-task__label">${esc(node.title)}</span>
      <span class="tree-task__edit-btns">
        <span class="btn--ghost btn--ghost-primary" data-action="rename" data-id="${node.id}" title="Rename">${icon('edit', 14)}</span>
        <span class="btn--ghost btn--ghost-danger" data-action="delete" data-id="${node.id}" title="Delete">${icon('delete', 14)}</span>
      </span>
    `;

    taskDiv.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]");
      if (action) {
        e.stopPropagation();
        handleNodeAction(action.dataset.action, action.dataset.id);
        return;
      }
      if (editMode) return; // don't toggle check in edit mode
      node.checked = !node.checked;
      // In-place update: toggle this task visually
      taskDiv.classList.toggle("tree-task--checked", node.checked);
      // Walk up the DOM updating parent title progress bars & badges
      updateAncestorProgress(li);
      // Update tab progress & global counter
      updateTabProgress();
      updateGlobalProgress();
      persist();
    });

    li.appendChild(taskDiv);
    return li;
  }

  /** Build the "+ Add" row shown at the bottom of each title's children */
  function buildAddRow(parentNode) {
    const li = document.createElement("li");
    li.className = "tree-node tree-add-row";

    // Add Sub-section
    const addTitleBtn = document.createElement("button");
    addTitleBtn.className = "tree-add-btn";
    addTitleBtn.innerHTML = `${icon('folder', 14)} Add Sub-section`;
    addTitleBtn.addEventListener("click", () => addChild(parentNode, "title"));

    // Add Task
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "tree-add-btn";
    addTaskBtn.innerHTML = `${icon('task', 14)} Add Task`;
    addTaskBtn.addEventListener("click", () => addChild(parentNode, "task"));

    // Add Predefined Criteria
    const addPredefBtn = document.createElement("button");
    addPredefBtn.className = "tree-predefined-btn";
    addPredefBtn.innerHTML = `${icon('preset', 14)} Add Predefined Criteria`;
    addPredefBtn.addEventListener("click", () => openCriteriaModal(parentNode));

    li.appendChild(addTitleBtn);
    li.appendChild(addTaskBtn);
    li.appendChild(addPredefBtn);
    return li;
  }

  function updateGlobalProgress() {
    const { total, done } = countAll();
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    $globalProgress.textContent = `${done} / ${total} tasks (${pct}%)`;
  }

  /** Update progress bars/badges for all ancestor title-nodes of a task element */
  function updateAncestorProgress(taskLi) {
    let el = taskLi.parentElement;  // the <ul> containing this <li>
    while (el) {
      const parentLi = el.closest(".tree-node[data-id]");
      if (!parentLi) break;
      const nodeId = parentLi.dataset.id;
      const found = findNodeAndParent(nodeId, data.topics, null);
      if (!found) break;
      const counts = countTasks(found.node);
      const pct = counts.total > 0 ? Math.round((counts.done / counts.total) * 100) : 0;
      const allDone = counts.total > 0 && counts.done === counts.total;
      // Update badge
      const badge = parentLi.querySelector(":scope > .tree-title > .tree-title__badge");
      if (badge) {
        badge.textContent = `${counts.done} / ${counts.total}`;
        badge.className = "tree-title__badge " + (allDone ? "tree-title__badge--done" : "tree-title__badge--pending");
      }
      // Update progress fill
      const fill = parentLi.querySelector(":scope > .tree-title .tree-title__progress-fill");
      if (fill) fill.style.width = pct + "%";
      el = parentLi.parentElement;
    }
  }

  /** Update the active tab's progress text without re-rendering tabs */
  function updateTabProgress() {
    const tabs = $level1Tabs.querySelectorAll(".level1-tab:not(.level1-tab--add)");
    data.topics.forEach((topic, idx) => {
      const tab = tabs[idx];
      if (!tab) return;
      const counts = countTasks(topic);
      const pct = counts.total > 0 ? Math.round((counts.done / counts.total) * 100) : 0;
      const progEl = tab.querySelector(".level1-tab__progress");
      if (progEl) progEl.textContent = `${counts.done}/${counts.total} (${pct}%)`;
    });
  }

  // ──────────────────────────────────────────────────────────
  //  NODE ACTIONS (edit mode)
  // ──────────────────────────────────────────────────────────
  function handleNodeAction(action, nodeId) {
    if (!editMode) return;
    if (action === "rename") renameNode(nodeId);
    else if (action === "delete") deleteNode(nodeId);
  }

  function renameNode(nodeId) {
    const found = findNodeAndParent(nodeId, data.topics, null);
    if (!found) return;
    openPromptModal("Rename", found.node.title, (newTitle) => {
      found.node.title = newTitle;
      persist();
      render();
    });
  }

  function deleteNode(nodeId) {
    const found = findNodeAndParent(nodeId, data.topics, null);
    if (!found) return;
    const taskCount = countTasks(found.node).total;
    const msg = taskCount > 0
      ? `Delete "${found.node.title}" and its ${taskCount} task(s)?`
      : `Delete "${found.node.title}"?`;
    if (!confirm(msg)) return;

    // Animate removal
    const el = document.querySelector(`[data-id="${nodeId}"]`);
    if (el) {
      el.classList.add("node-removing");
      setTimeout(() => {
        found.parent.splice(found.index, 1);
        persist();
        render();
      }, 280);
    } else {
      found.parent.splice(found.index, 1);
      persist();
      render();
    }
  }

  function addChild(parentNode, type) {
    const label = type === "title" ? "sub-section" : "task";
    openPromptModal(`Add ${label}`, "", (name) => {
      if (!parentNode.children) parentNode.children = [];
      const newNode = { id: genId(), title: name, type };
      if (type === "title") newNode.children = [];
      if (type === "task") newNode.checked = false;
      parentNode.children.push(newNode);
      // Make sure parent is a title type
      if (parentNode.type === "task") {
        parentNode.type = "title";
        delete parentNode.checked;
        if (!parentNode.children) parentNode.children = [];
      }
      persist();
      render();
    });
  }

  // ──────────────────────────────────────────────────────────
  //  TAB (LEVEL-1) EDITING
  // ──────────────────────────────────────────────────────────
  function addLevel1Topic() {
    openPromptModal("Add Project", "", (name) => {
      data.topics.push({ id: genId(), title: name, type: "title", children: [] });
      activeTabIdx = data.topics.length - 1;
      persist();
      render();
    });
  }

  function renameTab(idx) {
    const topic = data.topics[idx];
    openPromptModal("Rename Project", topic.title, (newTitle) => {
      topic.title = newTitle;
      persist();
      render();
    });
  }

  function deleteTab(idx) {
    const topic = data.topics[idx];
    const taskCount = countTasks(topic).total;
    const msg = taskCount > 0
      ? `Delete project "${topic.title}" and all its ${taskCount} task(s)?`
      : `Delete project "${topic.title}"?`;
    if (!confirm(msg)) return;
    data.topics.splice(idx, 1);
    if (data.topics.length === 0) {
      data = null;
      localStorage.removeItem("rebranding_checklist");
    } else {
      activeTabIdx = Math.min(activeTabIdx, data.topics.length - 1);
      persist();
    }
    render();
  }

  // ──────────────────────────────────────────────────────────
  //  PROMPT MODAL (rename / add)
  // ──────────────────────────────────────────────────────────
  function openPromptModal(title, defaultVal, callback) {
    $promptTitle.textContent = title;
    $promptInput.value = defaultVal;
    promptCallback = callback;
    $promptModal.classList.add("modal-overlay--visible");
    setTimeout(() => $promptInput.focus(), 100);
  }

  function closePromptModal() {
    $promptModal.classList.remove("modal-overlay--visible");
    promptCallback = null;
  }

  function promptConfirm() {
    const val = $promptInput.value.trim();
    if (!val) { $promptInput.focus(); return; }
    if (promptCallback) promptCallback(val);
    closePromptModal();
  }

  // ──────────────────────────────────────────────────────────
  //  PREDEFINED CRITERIA MODAL
  // ──────────────────────────────────────────────────────────
  function openCriteriaModal(targetNode) {
    criteriaTargetNode = targetNode;
    criteriaSelection = new Set();

    const predefined = data.predefinedCriteria || DEFAULT_PREDEFINED_CRITERIA;
    const existing = collectTaskTitles(targetNode);

    // Filter out already-present criteria
    const available = predefined.filter(c => !existing.has(c.title.trim().toLowerCase()));

    $criteriaTitle.textContent = `Add Criteria to "${targetNode.title}"`;
    $criteriaHint.textContent = available.length > 0
      ? `${predefined.length - available.length} criteria already added. Select from ${available.length} remaining:`
      : "";

    if (available.length === 0) {
      $criteriaList.style.display = "none";
      $criteriaEmpty.style.display = "";
      $("btnAddCriteria").style.display = "none";
      $("btnSelectAll").style.display = "none";
      $("btnDeselectAll").style.display = "none";
      $criteriaCount.textContent = "";
    } else {
      $criteriaList.style.display = "";
      $criteriaEmpty.style.display = "none";
      $("btnAddCriteria").style.display = "";
      $("btnSelectAll").style.display = "";
      $("btnDeselectAll").style.display = "";
      renderCriteriaList(available);
    }

    $criteriaModal.classList.add("modal-overlay--visible");
  }

  function closeCriteriaModal() {
    $criteriaModal.classList.remove("modal-overlay--visible");
    criteriaTargetNode = null;
  }

  function renderCriteriaList(available) {
    $criteriaList.innerHTML = "";
    available.forEach((c, idx) => {
      const div = document.createElement("div");
      div.className = "criteria-item" + (criteriaSelection.has(c.id) ? " criteria-item--selected" : "");
      div.style.animationDelay = `${idx * .03}s`;
      div.innerHTML = `
        <div class="criteria-item__check">
          <svg viewBox="0 0 24 24">${ICONS.check}</svg>
        </div>
        <span class="criteria-item__label">${esc(c.title)}</span>
      `;
      div.addEventListener("click", () => {
        if (criteriaSelection.has(c.id)) criteriaSelection.delete(c.id);
        else criteriaSelection.add(c.id);
        div.classList.toggle("criteria-item--selected", criteriaSelection.has(c.id));
        updateCriteriaCount(available.length);
      });
      $criteriaList.appendChild(div);
    });
    updateCriteriaCount(available.length);
  }

  function updateCriteriaCount(totalAvailable) {
    $criteriaCount.textContent = `${criteriaSelection.size} of ${totalAvailable} selected`;
  }

  function criteriaSelectAll() {
    const predefined = data.predefinedCriteria || DEFAULT_PREDEFINED_CRITERIA;
    const existing = collectTaskTitles(criteriaTargetNode);
    const available = predefined.filter(c => !existing.has(c.title.trim().toLowerCase()));
    criteriaSelection = new Set(available.map(c => c.id));
    renderCriteriaList(available);
  }

  function criteriaDeselectAll() {
    const predefined = data.predefinedCriteria || DEFAULT_PREDEFINED_CRITERIA;
    const existing = collectTaskTitles(criteriaTargetNode);
    const available = predefined.filter(c => !existing.has(c.title.trim().toLowerCase()));
    criteriaSelection = new Set();
    renderCriteriaList(available);
  }

  function criteriaConfirmAdd() {
    if (criteriaSelection.size === 0) return;
    const predefined = data.predefinedCriteria || DEFAULT_PREDEFINED_CRITERIA;
    const toAdd = predefined.filter(c => criteriaSelection.has(c.id));

    if (!criteriaTargetNode.children) criteriaTargetNode.children = [];
    // Ensure parent is a title type
    if (criteriaTargetNode.type === "task") {
      criteriaTargetNode.type = "title";
      delete criteriaTargetNode.checked;
    }

    for (const c of toAdd) {
      criteriaTargetNode.children.push({
        id: genId(),
        title: c.title,
        type: "task",
        checked: false
      });
    }

    persist();
    closeCriteriaModal();
    render();
  }

  // ──────────────────────────────────────────────────────────
  //  IMPORT / EXPORT
  // ──────────────────────────────────────────────────────────
  let importMode = "auto"; // "auto" | "full" | "project"

  const IMPORT_HINTS = {
    auto:    "Auto-detect: will replace if full checklist, or append if project(s).",
    full:    "Replaces the entire checklist with the imported data.",
    project: "Appends the project(s) to your existing checklist."
  };

  function initImportModeButtons() {
    document.querySelectorAll(".import-mode-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        importMode = btn.dataset.mode;
        document.querySelectorAll(".import-mode-btn").forEach(b => b.classList.remove("import-mode-btn--active"));
        btn.classList.add("import-mode-btn--active");
        $("importModeHint").textContent = IMPORT_HINTS[importMode];
      });
    });
  }

  function openImportModal() {
    $importModal.classList.add("modal-overlay--visible");
    $jsonTextarea.value = "";
    importMode = "auto";
    document.querySelectorAll(".import-mode-btn").forEach(b => b.classList.remove("import-mode-btn--active"));
    $("btnModeAuto").classList.add("import-mode-btn--active");
    $("importModeHint").textContent = IMPORT_HINTS.auto;
  }

  function closeImportModal() {
    $importModal.classList.remove("modal-overlay--visible");
  }

  /**
   * Smart import: detects whether JSON is a full checklist or project(s).
   * Full checklist shape:  { topics: [...], title?: "", predefinedCriteria?: [...] }
   * Single project shape:  { title: "", type: "title", children: [...] }
   * Array of projects:     [ { title, type, children }, ... ]
   */
  function handleImport(parsed) {
    const mode = importMode;

    // Normalize: wrap a single project object in an array
    let projectsArray = null;
    let isFullChecklist = false;

    if (Array.isArray(parsed)) {
      // Array of projects
      projectsArray = parsed;
    } else if (parsed && Array.isArray(parsed.topics)) {
      // Full checklist object
      isFullChecklist = true;
    } else if (parsed && parsed.title && (parsed.children || parsed.type)) {
      // Single project object
      projectsArray = [parsed];
    } else {
      alert("Unrecognized JSON structure. Expected a full checklist (with 'topics') or a project (with 'title' and 'children').");
      return;
    }

    if (mode === "full" || (mode === "auto" && isFullChecklist)) {
      // Full replacement
      loadData(parsed);
    } else if (mode === "project" || (mode === "auto" && projectsArray)) {
      // Append projects
      const projects = projectsArray || (isFullChecklist ? parsed.topics : []);
      if (!projects || projects.length === 0) {
        alert("No projects found to add.");
        return;
      }
      addProjects(projects);
    }
  }

  /** Append projects to the existing checklist (or create one if none exists) */
  function addProjects(projects) {
    assignIds(projects);
    // Ensure each has type "title"
    for (const p of projects) {
      if (!p.type) p.type = "title";
      if (!p.children) p.children = [];
    }

    if (!data) {
      // No existing checklist — create one
      data = {
        title: "Rebranding Review Checklist",
        predefinedCriteria: structuredClone(DEFAULT_PREDEFINED_CRITERIA),
        topics: []
      };
    }

    const added = [];
    for (const p of projects) {
      data.topics.push(p);
      added.push(p.title);
    }

    activeTabIdx = data.topics.length - 1; // jump to last added
    persist();
    render();
    closeImportModal();
  }

  function importFromFile() {
    const file = $fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try { handleImport(JSON.parse(e.target.result)); }
      catch (err) { alert("Invalid JSON file: " + err.message); }
    };
    reader.readAsText(file);
  }

  function importFromText() {
    const txt = $jsonTextarea.value.trim();
    if (!txt) { alert("Please paste JSON data first."); return; }
    try { handleImport(JSON.parse(txt)); }
    catch (err) { alert("Invalid JSON: " + err.message); }
  }

  function exportData() {
    if (!data) { alert("No checklist data to export."); return; }
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (data.title || "checklist").replace(/\s+/g, "_") + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function resetAll() {
    if (!data) return;
    if (!confirm("Reset all tasks to unchecked? This cannot be undone.")) return;
    resetNodes(data.topics);
    persist();
    render();
  }

  function resetNodes(nodes) {
    for (const n of nodes) {
      if (n.type === "task") n.checked = false;
      if (n.children) resetNodes(n.children);
    }
  }

  // ──────────────────────────────────────────────────────────
  //  HELPERS
  // ──────────────────────────────────────────────────────────
  function esc(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ──────────────────────────────────────────────────────────
  //  BOOT
  // ──────────────────────────────────────────────────────────
  init();
})();
