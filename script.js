let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let attentionTexts = document.querySelectorAll('.attention-text')
let submitButton = document.querySelector('button[type="submit"]')

function checkPassword() {
  if (password.value !== confirmPassword.value){
    password.classList.add('incorrect');
    confirmPassword.classList.add('incorrect');

    attentionTexts.forEach(element => {
      element.style.display = 'inline-block';
    });
    
    submitButton.disabled = true;
    submitButton.style.opacity = '0.5';
    submitButton.style.cursor = 'not-allowed';
    
  } else {
    password.classList.remove('incorrect');
    confirmPassword.classList.remove('incorrect');

    attentionTexts.forEach(element => {
      element.style.display = 'none';
    });

    submitButton.disabled = false;
    submitButton.style.opacity = '1';
    submitButton.style.cursor = 'pointer';
  }
}

confirmPassword.onkeyup = () => {
  checkPassword()
}