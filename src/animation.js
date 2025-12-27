// Apply animations when elements come into view
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // IntersectionObserver to handle animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log('Element:', entry.target, 'Is intersecting:', entry.isIntersecting);
        if (entry.isIntersecting) {
          // Add the animation class when the element is in view
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out');
        } else {
          // Remove the animation class when the element is out of view
          entry.target.classList.remove('animate-in');
          entry.target.classList.add('animate-out');
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Function to observe elements
  const observeElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll, .line-animate-on-scroll');
    console.log('Elements found:', elements);
    if (elements.length === 0) {
      console.warn('No elements found with animation classes.');
    } else {
      elements.forEach((el) => observer.observe(el));
    }
  };

  // Observe elements initially
  observeElements();

  // Use MutationObserver to detect DOM changes (React rendering)
  const mutationObserver = new MutationObserver(() => {
    console.log('DOM updated, checking for new elements...');
    observeElements(); // Re-observe elements after DOM updates
  });

  // Start observing the root element for changes
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });

  const lineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log('Element:', entry.target, 'Is intersecting:', entry.isIntersecting);
        if (entry.isIntersecting) {
          // Add the animation class when the element is in view
          entry.target.classList.add('line-animate-in');
        } else {
          // Remove the animation class when the element is out of view
          entry.target.classList.remove('line-animate-in');
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe all elements with the class .line-animate-on-scroll
  const lineElements = document.querySelectorAll('.line-animate-on-scroll');
  lineElements.forEach((el) => lineObserver.observe(el));
});