
const mainbox = document.querySelector('.main-box');
const login = document.querySelector('.login-link');
const register = document.querySelector('.reg-link');

register.addEventListener('click',()=>{
    mainbox.classList.add('active');
});
login.addEventListener('click',()=>{
    mainbox.classList.remove('active');
});