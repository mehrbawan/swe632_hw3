document.querySelectorAll(".scroller").forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const items = Array.from(scrollerInner.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(clone);
    });
  });