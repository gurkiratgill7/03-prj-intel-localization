/**
 * Auto-Detect Language & Adjust Layout for RTL
 *
 * This script uses a MutationObserver to detect when an attribute on the 
 * <html> tag changes (e.g., by Google Translate). It then checks if the
 * new language is RTL and applies the dir="rtl" attribute accordingly.
 */
document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.documentElement;

  const setDirection = () => {
    const lang = htmlElement.getAttribute('lang');
    // Common RTL language codes
    const rtlLangs = ['ar', 'he', 'fa', 'ur']; 

    if (rtlLangs.includes(lang)) {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
    }
  };

  // Observe changes to the <html> element's attributes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
        setDirection();
      }
    });
  });

  observer.observe(htmlElement, { attributes: true });

  // Initial check on page load
  setDirection();
});