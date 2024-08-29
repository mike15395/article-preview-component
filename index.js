function updateView() {
  let isMobile = window.screen.width <= 820;
  console.log(window.screen.width, "width");
  console.log(window.screen.height, "height");
  console.log(isMobile, "is mobile");
  if (isMobile) {
    const mobileFooter = document.getElementById("mobile-footer");
    const lastTextSection = document.getElementById("last-text-section");

    const shareButtonMobile = document.getElementById("share-button-mobile");
    const shareButtonLast = document.getElementById("share-button-last");

    function viewMobileFooter() {
      console.log("view mobile footer");
      lastTextSection.style.display = "none";
      mobileFooter.style.display = "flex";
    }

    function viewLastTextSection() {
      console.log("view last text section");
      mobileFooter.style.display = "none";
      lastTextSection.style.display = "flex";
    }

    shareButtonMobile.addEventListener("click", () => viewLastTextSection());
    shareButtonLast.addEventListener("click", () => viewMobileFooter());
  }
}

window.addEventListener("resize", updateView);
