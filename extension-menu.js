// Popup script moved to external file to comply with CSP (no inline scripts)

(function () {
  // Populate popup from the extension manifest
  try {
    const m = chrome?.runtime?.getManifest ? chrome.runtime.getManifest() : null;
    if (m) {
      document.getElementById("name").textContent = m.name || "Extension";
      document.getElementById("description").textContent = m.description || "";
      document.getElementById("version").textContent = m.version || "";
    }
  } catch (e) {
    console.error("Could not read manifest", e);
  }

  // Open the GitHub repository in a new tab
  document.getElementById("github").addEventListener("click", () => {
    const url = "https://github.com/dankwx/reddit-auto-translate-off";
    if (window.chrome && chrome.tabs && chrome.tabs.create) {
      chrome.tabs.create({ url });
    } else {
      window.open(url, "_blank");
    }
  });
})();
