document.addEventListener('DOMContentLoaded', function () {
  const generateButton = document.getElementById('generate');
  const copyButton = document.getElementById('copy');

  generateButton.addEventListener('click', generatePassword);
  copyButton.addEventListener('click', copyToClipboard);
});

function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const numCount = parseInt(document.getElementById('numCount').value);
  const specialCount = parseInt(document.getElementById('specialCount').value);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specials = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let password = '';

  for (let i = 0; i < numCount; i++) {
      password += getRandomChar(numbers);
  }

  for (let i = 0; i < specialCount; i++) {
      password += getRandomChar(specials);
  }

  for (let i = 0; i < length - numCount - specialCount; i++) {
      password += getRandomChar(letters);
  }

  password = shuffleString(password);
  document.getElementById('password').value = password;
}

function getRandomChar(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

function shuffleString(string) {
  const array = string.split('');
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}

function copyToClipboard() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');
}
