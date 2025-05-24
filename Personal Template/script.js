  // Get the elements
  const menuButton = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle the mobile menu visibility when the button is clicked
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });

  
  // skill-section
  document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");

  skillFills.forEach(fill => {
    const percent = +fill.getAttribute("data-percent");
    const counter = fill.querySelector(".skill-percent");

    // Animate bar
    fill.style.width = percent + "%";

    // Animate counter
    let current = 0;
    const interval = setInterval(() => {
      if (current >= percent) {
        counter.textContent = percent + "%";
        clearInterval(interval);
      } else {
        current++;
        counter.textContent = current + "%";
      }
    }, 20);
  });
});
