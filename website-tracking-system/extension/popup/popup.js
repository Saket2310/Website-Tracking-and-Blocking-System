document.getElementById("blockBtn").addEventListener("click", () => {
    const url = document.getElementById("blockUrl").value.trim();
    if (url) {
      chrome.storage.local.get(["blockedSites"], (result) => {
        const blockedSites = result.blockedSites || [];
        blockedSites.push(url);
        chrome.storage.local.set({ blockedSites }, () => {
          document.getElementById("status").textContent = `Blocked: ${url}`;
          document.getElementById("blockUrl").value = "";
        });
      });
    }
  });
  
