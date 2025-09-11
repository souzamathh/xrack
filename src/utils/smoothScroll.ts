
/**
 * Smoothly scrolls to a target element with customizable behavior
 */
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Applies smooth scrolling to all anchor links in the document
 */
export const initializeSmoothScrolling = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const id = anchor.hash.slice(1);
      smoothScrollTo(id);
    }
  });
};
