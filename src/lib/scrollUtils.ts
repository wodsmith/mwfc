/**
 * Scrolls to an element with an offset to account for the sticky navigation
 */
export function scrollToElementWithOffset(elementId: string, offset: number = 100) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}