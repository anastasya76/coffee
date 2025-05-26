document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.querySelector('.menu-link');
    const signUpBtn = document.querySelector('.menu-button');
    const modal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (signInBtn) {
        signInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            showTab('login');
        });
    }
    
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            showTab('register');
        });
    }
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });
    
    function showTab(tabId) {
        
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    }
    
    const loginForm = document.querySelector('#login .auth-form');
    const registerForm = document.querySelector('#register .auth-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Login functionality would be implemented here');
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Registration functionality would be implemented here');
        });
    }
});


