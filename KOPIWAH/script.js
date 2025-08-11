document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const currentlyActive = document.querySelector(".faq-item.active");
      if (currentlyActive && currentlyActive !== item) {
        currentlyActive.classList.remove("active");
        currentlyActive.querySelector(".faq-answer").style.maxHeight = null;
      }

      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // Product image hover effect
  const productImage = document.querySelector(".product-image img");
  if (productImage) {
    productImage.addEventListener("mouseenter", () => {
      productImage.style.transform = "scale(1.05)";
    });
    productImage.addEventListener("mouseleave", () => {
      productImage.style.transform = "scale(1)";
    });
  }

  // Hero image 3D tilt effect
  const heroImage = document.querySelector(".hero-image img");
  if (heroImage) {
    heroImage.addEventListener("mousemove", (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      heroImage.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    heroImage.addEventListener("mouseleave", () => {
      heroImage.style.transform =
        "perspective(1000px) rotateY(-15deg) rotateX(0deg)";
    });
  }

  // Animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".why-card, .card, .testi, .step"
    );
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll(
    ".why-card, .card, .testi, .step"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Run once on load
  animateOnScroll();

  // Then on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      // Here you would typically send the email to your server
      console.log("Subscribed with email:", email);

      // Show success message
      alert("Terima kasih telah berlangganan newsletter kami!");
      emailInput.value = "";
    });
  }
});

// WhatsApp button click tracking (example)
document.querySelectorAll(".nav-btn, .btn, .float-wa").forEach((button) => {
  button.addEventListener("click", function () {
    // Here you would typically send this event to your analytics
    console.log("WhatsApp button clicked:", this.textContent.trim());
  });
});
