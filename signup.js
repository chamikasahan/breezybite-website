
      function submitForm() {
        // Perform form validation here before showing the toast
        if (validateForm()) {
          // Show success toast
          var successToast = new bootstrap.Toast(
            document.getElementById("successToast")
          );
          successToast.show();

          // Show spinner during the redirect delay
          document
            .getElementById("successToast")
            .querySelector(".spinner-border")
            .classList.add("d-inline-block");

          // Redirect to the homepage after a delay (e.g., 2 seconds)
          setTimeout(function () {
            window.location.href = "index.html";
          }, 3000);

          // Prevent the form from submitting (remove this line if using AJAX)
          return false;
        }
        // If form validation fails, prevent the form from submitting
        return false;
      }

      // Your existing form validation function
      function validateForm() {
        // Add your validation logic here
        return true; // Return true if the form is valid
      }
 
