// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Search Button Functionality
  document.querySelector('.search-container button').addEventListener('click', function() {
    const searchText = document.querySelector('.search-container input').value.toLowerCase();
    if (searchText) {
      alert(`You searched for: "${searchText}" — feature coming soon!`);
    } else {
      alert("Please type something to search!");
    }
  });
  
  // Contact Form Validation
  const contactForm = document.querySelector('.contact-section form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent real submission for now
  
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields!");
    } else {
      alert("Thank you! Your message has been sent.");
      this.reset();
    }
  });
  
  // Order Now Button Smooth Scroll (if it's a link)
  document.querySelector('.order-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
  function toggleMenu() {
    const menu = document.getElementById('fullMenu');
    const button = document.querySelector('.see-more-btn');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
      button.textContent = 'Hide Menu';
    } else {
      menu.style.display = 'none';
      button.textContent = 'See More';
    }
  }
    