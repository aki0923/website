let name = document.querySelector('#name');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(name, login, password) {
    this.name = name;
    this.login = login;
    this.password = password;
}

function createID(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = name.value.trim();
    const loginUser = login.value.trim();
    const passwordUser = password.value.trim();
    const user = new User(nameUser, loginUser, passwordUser);

    if (!nameUser || !loginUser || !passwordUser) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }


    const userId = 'User' + createID(users);
users[userId] = user;

console.log(users);

alert(`${nameUser}, вы успешно прошли регистрацию!`);
window.location.href = 'index.html';

});
