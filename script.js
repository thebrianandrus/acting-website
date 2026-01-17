// Simple “Open Menu / Close Menu” behavior (mobile)
(() => {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector("#nav-menu");
  
    if (!toggle || !menu) return;
  
    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.querySelector(".nav-toggle-text").textContent = open ? "Close" : "Menu";
  
      // Animate hamburger to X (optional, subtle)
      const lines = toggle.querySelector(".nav-toggle-lines");
      if (lines) {
        lines.classList.toggle("is-open", open);
        lines.style.setProperty("--open", open ? 1 : 0);
      }
    };
  
    const isOpen = () => menu.classList.contains("open");
  
    toggle.addEventListener("click", () => setOpen(!isOpen()));
  
    // Close on outside click
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (!isOpen()) return;
      if (menu.contains(target) || toggle.contains(target)) return;
      setOpen(false);
    });
  
    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen()) setOpen(false);
    });
  })();
  