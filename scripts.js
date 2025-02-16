// Efeito de digitação no título
const text = "Bem-vindo ao Loneless";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-effect").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// Validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
