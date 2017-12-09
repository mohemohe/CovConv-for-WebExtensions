(() => {
  const covconvId = "translate-covconv";

  browser.contextMenus.create({
    id: covconvId,
    title: "このページをこふ語に翻訳する"
  });

  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === covconvId) {
      browser.tabs.executeScript(tab.id, {
        file: "covconv.js"
      });
    }
  });
})();
