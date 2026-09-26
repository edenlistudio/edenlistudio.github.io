document.querySelectorAll('.nav').forEach((nav) => {
  const button = nav.querySelector('.mobile-menu-button');
  const links = nav.querySelector('.links');
  if (!button || !links) return;

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', '開啟導覽選單');
  };

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? '關閉導覽選單' : '開啟導覽選單');
  });

  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
});

document.querySelectorAll('footer a[href="marketing.html"]').forEach((link) => {
  link.textContent = 'MARKETING PROJECT';
});
