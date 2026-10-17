
<!-- Desktop Sticky Header Script -->
<script>
document.addEventListener("scroll", function () {
  const header = document.querySelector(".navStickyHeader");
  const pricing = document.querySelector("#section-pw04OJta1R");

  if (!header || !pricing) return;

  const pricingTop = pricing.getBoundingClientRect().top;

  if (pricingTop <= 80) {
    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";
  } else {
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  }
});
</script>

<!-- Mobile Sticky Header Script -->
<script>
document.addEventListener("scroll", function () {
  const header = document.querySelector(".navStickyHeaderMobile");
  const pricing = document.querySelector("#section-pw04OJta1R");

  if (!header || !pricing) return;

  const pricingTop = pricing.getBoundingClientRect().top;

  if (pricingTop <= 80) {
    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";
  } else {
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  }
});
</script>

<!-- Fade-in-up on scroll for cards Script -->
<script>
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fadeUp");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
</script>