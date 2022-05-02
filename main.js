

window.addEventListener('load', () => {
  // resposive menu to mobile
  const navbar = document.getElementById('navbar');
  const toggleNav = document.getElementById('toggle-nav');
  const closeBtn = document.getElementById('close-navbar')
  toggleNav.addEventListener('click', () => {
    navbar.classList.add('active');
  });
  closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
  
})




