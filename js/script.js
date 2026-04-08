window.addEventListener("DOMContentLoaded", () => {
  const tabContent = document.querySelectorAll(".info-tabcontent"),
    tabTitle = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header");

  function hideInfo(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideInfo(1);

  function showInfo(b) {
    if (tabContent[b].classList.contains("hide")) {
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}

  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tabTitle.length; i++) {
            if (target == tabTitle[i]) {
                hideInfo(0);
                showInfo(i);
                break;
            }
        }
    }
  })
});
