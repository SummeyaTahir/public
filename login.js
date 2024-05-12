document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const signupLink = document.querySelector('.message a');
    
    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupForm.classList.toggle('hidden');
        loginForm.classList.toggle('hidden');
    });
});
