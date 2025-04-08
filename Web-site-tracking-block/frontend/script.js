document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    if (email === 'faculty@example.com' && password === 'faculty123' && role === 'faculty') {
      alert('Welcome Faculty!');
      window.location.href = 'faculty-dashboard.html';
    } else if (email === 'student@example.com' && password === 'student123' && role === 'student') {
      alert('Welcome Student!');
      window.location.href = 'student-dashboard.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  