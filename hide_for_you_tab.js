function hideFirstTab() {
  const tabList = document.querySelector('[role="tablist"]');
  if (tabList) {
    const firstTab = tabList.querySelector('[role="presentation"]:first-child');
    if (firstTab) {
      firstTab.style.display = 'none';
      return true;
    }
  }
  return false;
}

function checkTabList() {
  if (hideFirstTab()) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(checkTabList, 1000);
