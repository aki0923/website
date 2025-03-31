document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('authButton');
    const userAvatar = document.getElementById('userAvatar');
  
    // Проверка авторизации через куки
    const isLoggedIn = document.cookie.includes('authToken');
  
    // Обновить интерфейс
    if (isLoggedIn) {
      authButton.classList.add('hidden');
      userAvatar.classList.add('visible');
    } else {
      authButton.classList.remove('hidden');
      userAvatar.classList.remove('visible');
    }
  });