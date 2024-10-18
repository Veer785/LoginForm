const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');
const signupToggle = document.querySelector('.signup-toggle');
const signinToggle = document.querySelector('.signin-toggle');
const loginHeader = document.querySelector('.login-header');
const signupHeader = document.querySelector('.signup-header');

signupToggle.addEventListener('click', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    loginHeader.classList.add('hidden');
    signupHeader.classList.remove('hidden');
});

signinToggle.addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    loginHeader.classList.remove('hidden');
    signupHeader.classList.add('hidden');
});