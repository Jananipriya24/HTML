document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
  
    const validateName = () => {
      const nameValue = nameInput.value.trim();
      const namePattern = /^[A-Za-z\s]+$/;
      if (nameValue === '') setInvalid(nameInput, 'Name is required');
      else if (!namePattern.test(nameValue)) setInvalid(nameInput, 'Name can only contain alphabets and spaces');
      else setValid(nameInput);
    };
  
    const validateEmail = () => {
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue === '') setInvalid(emailInput, 'Email is required');
      else if (!emailPattern.test(emailValue)) setInvalid(emailInput, 'Invalid email format');
      else setValid(emailInput);
    };
  
    const validatePassword = () => {
      const passwordValue = passwordInput.value;
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (passwordValue === '') setInvalid(passwordInput, 'Password is required');
      else if (!passwordPattern.test(passwordValue)) setInvalid(passwordInput, 'Password must contain at least 8 characters, one letter, one number, and one special character');
      else setValid(passwordInput);
    };
  
    const validateConfirmPassword = () => {
      const confirmPasswordValue = confirmPasswordInput.value;
      const passwordValue = passwordInput.value;
      if (confirmPasswordValue === '') setInvalid(confirmPasswordInput, 'Confirm Password is required');
      else if (confirmPasswordValue !== passwordValue) setInvalid(confirmPasswordInput, 'Passwords do not match');
      else setValid(confirmPasswordInput);
    };
  
    const setValid = (input) => {
      input.classList.remove('invalid');
      input.classList.add('valid');
      input.nextElementSibling.innerText = '';
    };
  
    const setInvalid = (input, message) => {
      input.classList.remove('valid');
      input.classList.add('invalid');
      input.nextElementSibling.innerText += message + ' ';
    };
  
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      validateName();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
  
      if (
        nameInput.classList.contains('valid') &&
        emailInput.classList.contains('valid') &&
        passwordInput.classList.contains('valid') &&
        confirmPasswordInput.classList.contains('valid')
      ) {
        alert('Form submitted successfully!');
      } else {
        alert('Please fill out the form correctly');
      }
    });
  });
  