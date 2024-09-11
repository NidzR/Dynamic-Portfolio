const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const mobileInput = document.getElementById('mobile') as HTMLInputElement;
const togglePassword = document.getElementById('togglePassword') as HTMLElement;
const errorMessage = document.getElementById('errorMessage') as HTMLElement;
const profilePicInput = document.getElementById('profilePicInput') as HTMLInputElement;
const profilePicPreview = document.getElementById('profilePicPreview') as HTMLImageElement;

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Handle form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const education = educationInput.value.trim();
  const skills = skillsInput.value.trim();
  const mobile = mobileInput.value.trim();

  if (!name || !email || !password || !mobile) {
    errorMessage.textContent = 'Please fill in all required fields.';
  } else {
    errorMessage.textContent = '';
    console.log('Form submitted:', { name, email, password, education, skills, mobile });
    // You can add more functionality here, like sending data to a server.
  }
});

// Profile picture preview
profilePicInput.addEventListener('change', (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePicPreview.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
});
