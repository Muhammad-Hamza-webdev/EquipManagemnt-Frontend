// active tab code
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active classes
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active-tab"));

    // Add active to selected tab + content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active-tab");
  });
});
