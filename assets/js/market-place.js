const gridViewBtn = document.querySelector(
  ".hamburger-options ul li:first-child"
);
const listViewBtn = document.querySelector(
  ".hamburger-options ul li:last-child"
);
const equipmentGrid = document.querySelector(".equipment-grid");
const items = Array.from(equipmentGrid.children);

// Ensure items will animate smoothly
items.forEach((el) => (el.style.willChange = "transform, opacity"));

function flipAnimateTo(cols) {
  // 1) First: get first positions
  const firstRects = items.map((el) => el.getBoundingClientRect());

  // 2) Apply layout change
  equipmentGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // 3) Get last positions
  const lastRects = items.map((el) => el.getBoundingClientRect());

  // 4) Play FLIP: invert -> play
  items.forEach((el, i) => {
    const dx = firstRects[i].left - lastRects[i].left;
    const dy = firstRects[i].top - lastRects[i].top;

    // apply inverse transform so element appears in its old place
    el.style.transition = "none";
    el.style.transform = `translate(${dx}px, ${dy}px)`;

    // force reflow
    el.getBoundingClientRect();

    // animate to natural position
    requestAnimationFrame(() => {
      el.style.transition = "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "";
    });

    // cleanup after animation
    const onEnd = (e) => {
      if (e.propertyName === "transform") {
        el.style.transition = "";
        el.style.transform = "";
        el.removeEventListener("transitionend", onEnd);
      }
    };
    el.addEventListener("transitionend", onEnd);
  });
}

gridViewBtn.addEventListener("click", () => flipAnimateTo(4));
listViewBtn.addEventListener("click", () => flipAnimateTo(2));
