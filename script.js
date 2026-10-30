const topbarTitle = document.querySelector(".topbar-title");
const mainTitle = document.querySelector(".sport-page-title");

if (topbarTitle && mainTitle) {

  function updateTopbarTitle() {

    const titleRect = mainTitle.getBoundingClientRect();

    if (titleRect.bottom <= 80) {
      topbarTitle.classList.add("visible");
    } else {
      topbarTitle.classList.remove("visible");
    }

  }

  window.addEventListener("scroll", updateTopbarTitle);

  window.addEventListener("resize", updateTopbarTitle);

  updateTopbarTitle();

}
