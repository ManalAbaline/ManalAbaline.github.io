var mng = document.getElementsByClassName("displayManage");
var i;

for (i = 0; i < mng.length; i++) {
  mng[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}