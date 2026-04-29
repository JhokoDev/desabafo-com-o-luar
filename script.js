document.addEventListener("DOMContentLoaded", () => {
    const btnEntrar = document.getElementById("btn-entrar");

    if (btnEntrar) {
        btnEntrar.addEventListener("click", () => {
             // O que acontece ao clicar no botão
             // Por agora, mostra um alerta interativo
             alert("Bem-vindo ao espaço mágico: Confissões ao Luar!");
             
             // Para ir à uma próxima página, você pode usar:
             // window.location.href = "sua_outra_pagina.html";
        });
    }
});
