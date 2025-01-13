console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const loginForm = document.querySelector('.login form');
const signupForm = document.querySelector('.signup form');

// Add 'slide-up' animation on button click
loginBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(parent.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up');
        } else {
            signupBtn.parentNode.classList.add('slide-up');
            parent.classList.remove('slide-up');
        }
    });
});

signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode;
    Array.from(parent.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up');
        } else {
            loginBtn.parentNode.parentNode.classList.add('slide-up');
            parent.classList.remove('slide-up');
        }
    });
});

// Function to display a success message
function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;

    // Add message to the body
    document.body.appendChild(messageDiv);

    // Automatically remove the message after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Handle form submissions
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from actually submitting
    showMessage('Login successful!');

// Redirect to index.html after successful login
setTimeout(() => {
    window.location.href = '../index.html';
}, 3000); // Redirect after 3 seconds (to give time for the success message to show)
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from actually submitting
    showMessage('Sign-up successful!');
});
