(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');
  const successAlert = document.getElementById('successAlert');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Show the success alert
        successAlert.classList.remove('d-none');

        // Optionally, you can reset the form after submission
     
        // form.reset();
        form.classList.remove('was-validated');

        // Hide the alert after 5 seconds (5000 milliseconds)
        setTimeout(() => {
          successAlert.classList.add('d-none');
          
          location.reload();
        }, 4000);
    

        // Prevent the form from submitting (optional)
        event.preventDefault();
        
      }

      form.classList.add('was-validated');
    });
  });
})();