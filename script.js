const form = document.getElementById('registrationForm');
    const alertBox = document.getElementById('notificationAlert');
    const alertMessage = document.getElementById('notificationMessage');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload

      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Reset alert visibility and classes
      alertBox.classList.add('d-none');
      alertBox.className = 'alert fade show'; // Clear previous alert colors

      // Validation logic
          });

    function showNotification(message, alertType) {
      alertMessage.textContent = message;
      alertBox.classList.add(alertType);
      alertBox.classList.remove('d-none');
    }
