chrome.webNavigation.onCompleted.addListener(async (details) => {
    const url = details.url;
    
    // Check against local blocklist
    chrome.storage.local.get(["blockedSites"], (result) => {
      const blockedSites = result.blockedSites || [];
      if (blockedSites.some(site => url.includes(site))) {
        chrome.scripting.executeScript({
          target: { tabId: details.tabId },
          func: () => {
            alert("⚠️ This website is blocked by your administrator.");
            window.location.replace("about:blank");
          }
        });
      } else {
        // Log the visit to backend
        fetch("http://localhost:5000/api/tracking/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url,
            timestamp: new Date().toISOString(),
          }),
        }).catch(console.error);
      }
    });
  }, { url: [{ schemes: ["http", "https"] }] });
  
