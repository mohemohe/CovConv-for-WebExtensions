(() => {
  chrome.contextMenus.create({
    title: "このページをこふ語に翻訳する",
    contexts: [
      "all"
    ],
    type: "normal",
    onclick: () => {
      chrome.tabs.executeScript({
        file: "covconv.js"
      });
    },
  });
})();
