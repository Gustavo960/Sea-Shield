var btn = document.getElementById("btn_vdl");

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        btn.click();
    }
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${(value || "")}${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}

function deleteAllCookies() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        deleteCookie(name);
    }
}

function checkUserId() {
    const userId = getCookie('user_id');
    const btn = document.querySelector('.Btn');
    const logButton = document.getElementById('log');
    const statusMessage = document.getElementById('statusMessage');

    if (userId) {
        console.log(`Usuário autenticado com ID: ${userId}`);
        // Alterações de estilo e HTML para usuário autenticado
        if (btn) {
            btn.style.backgroundColor = 'red'; // Cor para usuário autenticado
        }
        if (logButton) {
            logButton.innerHTML = `
                <div class="sign">
                    <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                </div>
                <div class="text">Sair</div>
            `;
            // Adiciona evento de clique para remover cookies e redirecionar
            logButton.addEventListener("click", function() {
                deleteAllCookies();
                function goBack() {
                    window.history.back();
                }
            });
        }
        statusMessage.textContent = `Bem-vindo de volta! Seu ID é ${userId}`;
        statusMessage.style.color = '#155724'; // Verde escuro
    } else {
        console.log('Usuário não autenticado');
        // Alterações para usuário não autenticado
        if (btn) {
            btn.style.backgroundColor = 'rgb(41, 41, 245)'; // Cor original para não autenticado
        }
        if (logButton) {
            logButton.innerHTML = `
                <div class="sign">
                    <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                </div>
                <div class="text">Entrar</div>
            `;
        }
        statusMessage.textContent = 'Você não está autenticado. Por favor, faça login.';
        statusMessage.style.color = '#721c24'; // Vermelho escuro
    }
}

// Executa a verificação ao carregar a página
document.addEventListener('DOMContentLoaded', checkUserId);

// Redireciona o botão ao ser clicado
document.addEventListener("DOMContentLoaded", function () {
    const meuBotao = document.getElementById("log");

    if (meuBotao) {
        meuBotao.addEventListener("click", function () {
            const userId = getCookie('user_id');
            if (!userId) {
                window.location.href = "frontend/paginas/login/entrar.html";
            }
        });
    }
});


const senhaInput = document.getElementById('senha');
const mostrarSenhaIcon = document.getElementById('mostrarSenhaIcon');

mostrarSenhaIcon.addEventListener('click', function () {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        mostrarSenhaIcon.classList.remove('fa-eye');
        mostrarSenhaIcon.classList.add('fa-eye-slash');
    } else {
        senhaInput.type = 'password';
        mostrarSenhaIcon.classList.remove('fa-eye-slash');
        mostrarSenhaIcon.classList.add('fa-eye');
    }
});

