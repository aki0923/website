document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include' // Важно!
      });
  
      if (response.ok) {
        alert('Регистрация успешна!');
        window.location.reload(); // Перезагрузить страницу

        window.location.href = 'index.html';
      } else {
        const error = await response.json();
        showError(error.message || 'Ошибка регистрации');
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