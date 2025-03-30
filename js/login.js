document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  
    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
      });
  
      if (response.ok) {
        window.location.href = 'profile.html';
      } else {
        const error = await response.json();
        showError(error.message || 'Ошибка авторизации');
      }
    } catch (err) {
      showError('Сервер недоступен');
    }
  });
  
  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.color = 'red';
    errorDiv.textContent = message;
    document.querySelector('.registration').appendChild(errorDiv);
  }