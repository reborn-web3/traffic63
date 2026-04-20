/* ===== traffik63 — Script ===== */

document.addEventListener("DOMContentLoaded", () => {
  // ===== HEADER SCROLL EFFECT =====
  const header = document.getElementById("header");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // ===== BURGER MENU =====
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("open");
  });

  // Close menu on link click
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("open");
    });
  });

  // ===== SMOOTH SCROLL (enhanced) =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== REVEAL ON SCROLL (Intersection Observer) =====
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ===== COUNTER ANIMATION =====
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"));
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  statNumbers.forEach((el) => counterObserver.observe(el));

  function animateCounter(element, target) {
    const duration = 2000;
    const startTime = performance.now();
    const suffix = element
      .closest(".stat-item")
      .querySelector(".stat-label")
      .textContent.includes("%")
      ? ""
      : "+";

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      element.textContent = current + (progress === 1 ? suffix : "");

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // ===== PARALLAX FOR DOODLES =====
  const doodles = document.querySelectorAll(".hero-doodle");

  window.addEventListener(
    "mousemove",
    (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      doodles.forEach((doodle, index) => {
        const speed = (index + 1) * 15;
        const rotateSpeed = (index + 1) * 3;
        doodle.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * rotateSpeed}deg)`;
      });
    },
    { passive: true },
  );

  // ===== PHONE INPUT MASK =====
  const phoneInput = document.getElementById("phone");

  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");

      if (value.length === 0) {
        e.target.value = "";
        return;
      }

      // Ensure it starts with 7
      if (value[0] === "8") value = "7" + value.slice(1);
      if (value[0] !== "7") value = "7" + value;

      let formatted = "+7";
      if (value.length > 1) formatted += " (" + value.slice(1, 4);
      if (value.length > 4) formatted += ") " + value.slice(4, 7);
      if (value.length > 7) formatted += "-" + value.slice(7, 9);
      if (value.length > 9) formatted += "-" + value.slice(9, 11);

      e.target.value = formatted;
    });
  }

  // ===== FORM SUBMISSION =====
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Animate button
      submitBtn.innerHTML = "✅ Заявка отправлена!";
      submitBtn.style.background = "#7ec8a0";
      submitBtn.style.pointerEvents = "none";

      // Reset form
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = "";
        submitBtn.style.pointerEvents = "";
      }, 3000);
    });
  }

  // ===== SVG DOODLE DECORATIONS =====
  // Add scattered doodle elements via SVG
  addDoodleDecorations();

  function addDoodleDecorations() {
    const svgDoodles = [
      // Stars
      {
        svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 2L18 12L28 15L18 18L15 28L12 18L2 15L12 12Z" stroke="#b8d4e8" stroke-width="1.5" fill="none"/></svg>`,
        positions: [
          { top: "20%", left: "5%" },
          { top: "60%", right: "3%" },
          { bottom: "15%", left: "10%" },
        ],
      },
      // Circles
      {
        svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#e8a0a0" stroke-width="1.5" stroke-dasharray="3 3"/></svg>`,
        positions: [
          { top: "35%", right: "8%" },
          { top: "75%", left: "3%" },
        ],
      },
      // Arrows
      {
        svg: `<svg width="40" height="20" viewBox="0 0 40 20" fill="none"><path d="M2 10H35M35 10L28 3M35 10L28 17" stroke="#9b8ec4" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        positions: [{ top: "45%", left: "2%" }],
      },
    ];

    svgDoodles.forEach((doodle) => {
      doodle.positions.forEach((pos) => {
        const div = document.createElement("div");
        div.className = "doodle-decoration";
        div.innerHTML = doodle.svg;
        Object.assign(div.style, pos);

        // Random subtle animation
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;
        div.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        document.body.appendChild(div);
      });
    });
  }

  // ===== CURSOR TRAIL (subtle pencil effect) =====
  let lastTrail = 0;

  document.addEventListener(
    "mousemove",
    (e) => {
      const now = Date.now();
      if (now - lastTrail < 80) return;
      lastTrail = now;

      const trail = document.createElement("div");
      trail.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 4px;
      height: 4px;
      background: var(--line-blue);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.3;
      transition: all 0.6s ease;
    `;
      document.body.appendChild(trail);

      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(0)";
      });

      setTimeout(() => trail.remove(), 600);
    },
    { passive: true },
  );
});
