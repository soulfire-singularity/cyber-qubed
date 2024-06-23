$(document).ready(function() {
  AOS.init();
  
  $('form').on('submit', function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
    alert(`Thank you, ${name}! Your message has been received.`);
    // You can add additional form handling here
  });
});
