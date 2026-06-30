function initializeCodeTabs() {
  document.querySelectorAll(".code-tabs").forEach(function (tabs, groupIndex) {
    if (tabs.dataset.initialized === "true") {
      return;
    }

    const tablist = tabs.querySelector(".code-tabs__tablist");
    const panels = Array.from(tabs.querySelectorAll(".code-tabs__panel"));

    if (!tablist || panels.length === 0) {
      return;
    }

    tabs.dataset.initialized = "true";

    panels.forEach(function (panel, panelIndex) {
      const label = panel.dataset.label || panel.dataset.lang || `Tab ${panelIndex + 1}`;
      const tabId = `code-tabs-${groupIndex}-tab-${panelIndex}`;
      const panelId = `code-tabs-${groupIndex}-panel-${panelIndex}`;
      const button = document.createElement("button");

      button.type = "button";
      button.className = "code-tabs__tab";
      button.id = tabId;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", panelId);
      button.textContent = label;

      panel.id = panelId;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tabId);

      button.addEventListener("click", function () {
        activateTab(panelIndex);
      });

      button.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const offset = event.key === "ArrowRight" ? 1 : -1;
          const nextIndex = (panelIndex + offset + panels.length) % panels.length;
          activateTab(nextIndex);
          tablist.querySelectorAll(".code-tabs__tab")[nextIndex].focus();
        }
      });

      tablist.appendChild(button);
    });

    function activateTab(activeIndex) {
      const buttons = tablist.querySelectorAll(".code-tabs__tab");

      panels.forEach(function (panel, index) {
        const isActive = index === activeIndex;
        panel.hidden = !isActive;
        buttons[index].classList.toggle("is-active", isActive);
        buttons[index].setAttribute("aria-selected", String(isActive));
        buttons[index].setAttribute("tabindex", isActive ? "0" : "-1");
      });
    }

    activateTab(0);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeCodeTabs);
} else {
  initializeCodeTabs();
}
