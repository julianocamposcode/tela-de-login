const email = document.querySelector('.email')
const senha = document.querySelector('.senha')


email.addEventListener('focus', () => {
  email.classList.add('focus')
})

email.addEventListener('blur', () => {
  email.classList.remove('focus')
})

senha.addEventListener('focus', () => {
  senha.classList.add('focus')
})

senha.addEventListener('blur', () => {
  senha.classList.remove('focus')
})