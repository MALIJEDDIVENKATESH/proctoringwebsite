var link = Array.from(document.getElementsByClassName("page-link nav-link"));
var tabs=Array.from(document.getElementsByClassName("tab-pane"));
var length = link.length;

Array.from(document.getElementsByClassName("toggle-link")).forEach(
  (item, index) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.id === "prev") {
        var value = 0;
        

        link.forEach((item, index) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
            tabs[index].classList.remove('active');
            tabs[index].classList.remove('show');
            value = index > 0 ? (index - 1) % length : length - 1;
          }
        });
        tabs[value].classList.add("active");
        tabs[value].classList.add("show");
        link[value].classList.add("active");
        
      }
      
      if (e.target.id === "next") {
        var value = 0;
        link.forEach((item, index) => {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
            tabs[index].classList.remove('active');
            tabs[index].classList.remove('show');

            value = (index + 1) % length;
          }
        });
        
        link[value].classList.add("active");
        tabs[value].classList.add("active");
        tabs[value].classList.add("show");
      }

    });
  }
);
