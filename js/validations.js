const modal = document.querySelector('.js-modal')
const headerRigister = document.querySelector('.js__header-rigister')
const modalLoginBtn = document.querySelector('.auth-form__login-btn')
const modalRigisterBtn = document.querySelector('.auth-form__rigister-btn')
const modalRigister = document.querySelector('.auth-form__rigister')
const modalLogin = document.querySelector('.auth-form__login')
const closeRigister = document.querySelector('.js-btn--nomalRigister')
const closeLogin = document.querySelector('.js-btn--nomalLogin')
const closeBtns = document.querySelectorAll('.modal-close')
const headerLogin = document.querySelector('.js__header-login')
    // Hàm hiển thị validate
function showRigister() {
    modal.classList.add('open')
    modalRigister.classList.add('active')
}

function switchRigister() {
    modalLogin.classList.remove('active')
    modalRigister.classList.add('active')

}
for (const closeBtn of closeBtns) {
    if (modalRigister) {
        closeBtn.addEventListener('click', hideRigister)
    }
    if (modalLogin) {
        closeBtn.addEventListener('click', hideLogin)

    }
}

function switchLogin() {
    modalRigister.classList.remove('active')
    modalLogin.classList.add('active')

}

function showLogin() {
    modal.classList.add('open')
    modalLogin.classList.add('active')
}
//Hàm ẩn modal Validate ( gỡ bỏ class open vào modal)

function hideRigister() {
    modal.classList.remove('open')
    modalRigister.classList.remove('active')

}

function hideLogin() {
    modal.classList.remove('open')
    modalLogin.classList.remove('active')
}

// Nghe hành vi click vào rigister và login
headerRigister.addEventListener('click', showRigister)
closeRigister.addEventListener('click', hideRigister)
closeLogin.addEventListener('click', hideLogin)
headerLogin.addEventListener('click', showLogin)
modalLoginBtn.addEventListener('click', switchLogin)
modalRigisterBtn.addEventListener('click', switchRigister)