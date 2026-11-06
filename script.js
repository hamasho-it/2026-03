// script.js - Trashbusters Common Script
document.addEventListener("DOMContentLoaded", () => {
  // Handle image fallback to gray placeholder
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("error", () => {
      const parent = img.parentElement;
      if (parent && parent.classList.contains("img-placeholder")) {
        parent.innerHTML = `<span>${img.alt || "画像"}</span>`;
      }
    });
  });

  // Toggle buttons functionality
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.innerText === "オン") {
        btn.innerText = "オフ";
        btn.classList.remove("active");
      } else {
        btn.innerText = "オン";
        btn.classList.add("active");
      }
    });
  });
});
