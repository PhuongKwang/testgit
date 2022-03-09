// Open log in /log out

document.querySelector('.header-sign-up').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('open-flex');
    document.querySelector('.auth-form__sign-up').classList.add('open-block');
});

document.querySelector('.header-sign-in').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('open-flex');
    document.querySelector('.auth-form__sign-in').classList.add('open-block');
});

document.querySelector('.auth-form__sign-in .auth-form__switch-btn').addEventListener('click', function() {
    document.querySelector('.auth-form__sign-in').classList.remove('open-block');
    document.querySelector('.auth-form__sign-up').classList.add('open-block');   
})

document.querySelector('.auth-form__sign-up .auth-form__switch-btn').addEventListener('click', function() {
    document.querySelector('.auth-form__sign-up').classList.remove('open-block');
    document.querySelector('.auth-form__sign-in').classList.add('open-block');   
})

document.querySelector('.btn-back').onclick = () => {
    document.querySelector('.modal').classList.remove('open-flex');
    const authForm = document.querySelectorAll('.auth-form');
    for(let i of authForm) {
        if(i.classList.contains('open-block')){
            i.classList.remove('open-block');
        }
    }
}

document.querySelector('.modal').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('open-flex');
    const authForm = document.querySelectorAll('.auth-form');
    for(let i of authForm) {
        if(i.classList.contains('open-block')){
            i.classList.remove('open-block');
        }
    }
})

document.querySelector('.modal__container').addEventListener('click' , (e) => {
    e.stopPropagation();
})


