document.addEventListener('DOMContentLoaded', function() {
  const selectors = [
    'h1', 'h2', 'h3', 'p', 'img', 'section', 'div.container', '.skills-left', '.skills-right'
  ];

  
  let elementsToAnimate = [];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.closest('.reviews-section')) {
        elementsToAnimate.push(el);
      }
    });
  });

  
  elementsToAnimate.forEach((el, index) => {
    if (index % 2 === 0) {
      el.classList.add('fade-in');
    } else {
      el.classList.add('slide-in-right');
    }
  });

  
  const fadeElements = document.querySelectorAll('.fade-in');
  const slideElements = document.querySelectorAll('.slide-in-right');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);

     
        if (entry.target.classList.contains('skills-left')) {
          animateSkillBars();
        }
        
        if (entry.target.classList.contains('skills-right')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));
  slideElements.forEach(el => observer.observe(el));

  function animateSkillBars() {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      const fill = bar.getAttribute('data-fill');
      bar.style.width = fill;
      let percent = 0;
      const target = parseInt(fill);
      const percentSpan = bar.querySelector('.bar-percent');
      const interval = setInterval(() => {
        if (percent < target) {
          percent++;
          percentSpan.textContent = percent + "%";
        } else {
          percentSpan.textContent = fill;
          clearInterval(interval);
        }
      }, 18);
    });
  }

  function animateCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = 30;
      const plus = (target >= 1000 || target === 20 || target === 300) ? "+" : "";
      const interval = setInterval(() => {
        if (count < target) {
          count += Math.ceil(target / speed);
          if (count > target) count = target;
          counter.textContent = count + plus;
        } else {
          counter.textContent = target + plus;
          clearInterval(interval);
        }
      }, 18);
    });
  }
});
