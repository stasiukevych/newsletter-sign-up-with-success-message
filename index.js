const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const confirmButton = document.querySelector('.confirm');
const subscribeButton = document.querySelector('.subscribe');
const subscriptionArticle = document.querySelector('.subscription');
const confirmationArticle = document.querySelector('.confirmation');

// disable default html validation
form.addEventListener('submit', e => {
     e.preventDefault();
});

emailInput.addEventListener('input', () => {
     console.log(emailInput.checkValidity());
     subscribeButton.disabled = !emailInput.checkValidity();
});

confirmButton.addEventListener('click', () => {
     emailInput.value = '';
     confirmationArticle.classList.toggle('visually-hidden');
     subscriptionArticle.classList.remove('visually-hidden');
});

subscribeButton.addEventListener('click', () => {
     if (emailInput.checkValidity() && confirmationArticle.classList.contains('visually-hidden')) {
          confirmationArticle.classList.remove('visually-hidden');
          subscriptionArticle.classList.toggle('visually-hidden');
     }
});