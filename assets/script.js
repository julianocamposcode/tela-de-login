const email = document.querySelector('.email')
const senha = document.querySelector('.senha')
const form = document.querySelector('form')
const submit = document.querySelector('.submit')
const loading = document.querySelector('.loading')
const checkbox = document.querySelector('.checkbox')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (verificaCampos()) {
        loading.style.display = 'block';
        submit.value = ''
        setTimeout(() => {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({ icon: "success", title: "Sucesso ao entrar" });

            loading.style.display = 'none';
            submit.value = 'ENTRAR'
            email.value = 'juliano.kamppus@gmail.com'
            senha.value = 'mfjnsdfhbshfbhsbfhb'
            checkbox.checked = false;
        }, 1000);
    }


})

senha.addEventListener('input', () => {
    verificaCampoSenha()
})

function verificaCampos() {
    const emailValido = verificaCampoEmail('');
    const senhaValida = verificaCampoSenha();
    return emailValido && senhaValida;
}

function verificaCampoEmail(palavra) {
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let mensagemErro1 = document.querySelector('.error')
    if (email.value == '' || !emailRegex.test(email.value)) {
        if (!mensagemErro1) {
            email.style.borderColor = 'red'
            let p = document.createElement('p')
            p.innerHTML = `Preencha este campo ${palavra}`
            p.classList.add('error')
            form.appendChild(p)
        }
        return false
    } else if (mensagemErro1) {
        email.style.borderColor = ''
        document.querySelector('.error').textContent = ''
    }
    return true
}

function verificaCampoSenha() {
    let mensagemErro2 = document.querySelector('.error2')
    if (senha.value == '') {
        if (!mensagemErro2) {
            senha.style.borderColor = 'red'
            let p2 = document.createElement('p')
            p2.innerHTML = 'Preencha este campo'
            p2.classList.add('error2')
            form.appendChild(p2)
        }
        return false
    } else if (mensagemErro2) {
        senha.style.borderColor = ''
        document.querySelector('.error2').textContent = ''
    }
    return true
}

email.addEventListener('focus', () => {
    email.classList.add('focus')
})

email.addEventListener('blur', () => {
    email.classList.remove('focus')
    verificaCampoEmail('corretamente')
})

senha.addEventListener('focus', () => {
    senha.classList.add('focus')

})

senha.addEventListener('blur', () => {
    senha.classList.remove('focus')
    verificaCampoSenha()
})

