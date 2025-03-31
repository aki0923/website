document.addEventListener('DOMContentLoaded', async () => {
    // Проверка авторизации
    if (!document.cookie.includes('authToken')) {
      window.location.href = 'login.html';
      return;
    }
  
    // Запрос данных пользователя
    try {
      const response = await fetch('http://localhost:3000/profile', {
        credentials: 'include'
      });
      
      if (response.ok) {
        const user = await response.json();
        document.getElementById('userName').textContent = user.name;
      } else {
        window.location.href = 'login.html';
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  });