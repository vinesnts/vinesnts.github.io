const imagesMap = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default'
});

document.addEventListener("DOMContentLoaded", () => {
  const lazyBackgrounds = document.querySelectorAll("[data-lazy-bg]");

  const bgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const rawPath = element.dataset.lazyBg;

        const resolvedUrl = imagesMap[rawPath];
        if (resolvedUrl) {
          element.style.backgroundImage = `url('${resolvedUrl}')`;
          element.classList.add("bg-loaded");
        } else {
          console.warn(`Vite asset not found for path: ${rawPath}`);
        }

        observer.unobserve(element);
      }
    });
  }, { rootMargin: "100px" });

  lazyBackgrounds.forEach(el => bgObserver.observe(el));
});