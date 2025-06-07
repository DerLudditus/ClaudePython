document.addEventListener('DOMContentLoaded', () => {
  const h2s = document.querySelectorAll('h2');
  h2s.forEach(h2 => {
    const content = h2.innerHTML;
    h2.innerHTML = `<a href="#top">${content}</a>`;
  });
});