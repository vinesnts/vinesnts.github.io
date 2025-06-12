export function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById('copyright-year');
  
  if (copyrightElement) {
    copyrightElement.textContent = currentYear;
  }
}