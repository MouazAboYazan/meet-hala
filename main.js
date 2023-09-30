
$(document).ready(function() {
  // Add click event handler to all navigation links
  $('.nav-link').click(function(e) {
    e.preventDefault(); // Prevent the default link behavior

    // Remove the 'active' class from all links
    $('.nav-link').removeClass('active');

    // Add the 'active' class to the clicked link
    $(this).addClass('active');
  });
});

