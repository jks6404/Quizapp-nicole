const loginBtn = document.getElementById('login');
const signBtn = document.getElementById('signup');

document.getElementById('login').addEventListener('click', () => {
    location.href = './Login/index.html';
});

document.getElementById('signup').addEventListener('click', () => {
    location.href = './Signup/index.html';
});
