var loginForm = document.getElementById('loginForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var mobileInput = document.getElementById('mobile');
var togglePassword = document.getElementById('togglePassword');
var errorMessage = document.getElementById('errorMessage');
var profilePicInput = document.getElementById('profilePicInput');
var profilePicPreview = document.getElementById('profilePicPreview');
// Toggle password visibility
togglePassword.addEventListener('click', function () {
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});
// Handle form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    var education = educationInput.value.trim();
    var skills = skillsInput.value.trim();
    var mobile = mobileInput.value.trim();
    if (!name || !email || !password || !mobile) {
        errorMessage.textContent = 'Please fill in all required fields.';
    }
    else {
        errorMessage.textContent = '';
        console.log('Form submitted:', { name: name, email: email, password: password, education: education, skills: skills, mobile: mobile });
        // You can add more functionality here, like sending data to a server.
    }
});
// Profile picture preview
profilePicInput.addEventListener('change', function (event) {
    var target = event.target;
    var file = target.files ? target.files[0] : null;
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            profilePicPreview.src = reader_1.result;
        };
        reader_1.readAsDataURL(file);
    }
});
