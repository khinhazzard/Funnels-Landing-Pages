<script>
document.addEventListener("click", function(e) {
  if (e.target.closest(".ghl-footer-buttons")) {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }
});
</script>