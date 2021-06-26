var links = Array.from(document.getElementsByClassName("page-links nav-links"));
var length = links.length;

Array.from(document.getElementsByClassName("toggle-links")).forEach(
  (item, index) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.id === "prev") {
        var value = 0;

        links.forEach((item, index) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
            value = index > 0 ? (index - 1) % length : length - 1;
          }
        });

        links[value].classList.add("active");
      }

      if (e.target.id === "next") {
        var value = 0;

        links.forEach((item, index) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
            value = (index + 1) % length;
          }
        });

        links[value].classList.add("active");
      }
    });
  }
);
