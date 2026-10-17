<!-- Desktop Sticky Header Script -->
<script>
document.addEventListener("scroll", function () {
  const header = document.querySelector(".navStickyHeader");
  const hide = document.querySelector("#section-iwzl3HOS1D");

  if (!header || !hide) return;

  const hideTop = hide.getBoundingClientRect().top;

  if (hideTop <= 80) {
    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";
  } else {
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  }
});
</script>
