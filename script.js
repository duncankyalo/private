document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 

      const target = this.dataset.target;

      pages.forEach(page => {
        page.classList.remove('active');
      });

      document.getElementById(target).classList.add('active');
    });
  });
});