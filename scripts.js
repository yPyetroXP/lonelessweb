const translations = {
    "pt": {
        "about": "Sobre",
        "features": "Recursos",
        "download": "Download",
        "contact": "Contato",
        "heroText": "O executor de Roblox mais confiável e eficiente.",
        "downloadNow": "Baixar Agora",
        "aboutText": "Loneless é um executor de scripts para Roblox que oferece suporte a uma variedade de scripts e plugins.",
        "featuresTitle1": "Leve e Rápido",
        "featuresText1": "Loneless foi projetado para ser leve e rápido, garantindo uma experiência suave.",
        "featuresTitle2": "Suporte a Múltiplos Scripts",
        "featuresText2": "Execute vários scripts simultaneamente sem problemas.",
        "featuresTitle3": "Interface Amigável",
        "featuresText3": "Interface intuitiva e fácil de usar, mesmo para iniciantes.",
        "contactTitle": "Contato",
        "contactText": "Se você tiver alguma dúvida ou precisar de suporte, entre em contato conosco.",
        "sendMessage": "Enviar Mensagem",
        "footer": "&copy; 2023 Loneless. Todos os direitos reservados."
    },
    "en": {
        "about": "About",
        "features": "Features",
        "download": "Download",
        "contact": "Contact",
        "heroText": "The most reliable and efficient Roblox executor.",
        "downloadNow": "Download Now",
        "aboutText": "Loneless is a script executor for Roblox that supports a variety of scripts and plugins.",
        "featuresTitle1": "Lightweight and Fast",
        "featuresText1": "Loneless was designed to be lightweight and fast, ensuring a smooth experience.",
        "featuresTitle2": "Multiple Script Support",
        "featuresText2": "Run multiple scripts simultaneously without problems.",
        "featuresTitle3": "User-Friendly Interface",
        "featuresText3": "Intuitive and easy-to-use interface, even for beginners.",
        "contactTitle": "Contact",
        "contactText": "If you have any questions or need support, contact us.",
        "sendMessage": "Send Message",
        "footer": "&copy; 2023 Loneless. All rights reserved."
    }
};

let currentLang = "pt"; // Define o idioma padrão

document.getElementById("language-toggle").addEventListener("click", function () {
    currentLang = currentLang === "pt" ? "en" : "pt"; // Alterna entre pt e en
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[currentLang][key];
    });

    document.getElementById("typing-effect").textContent = currentLang === "pt" ? "Bem-vindo ao Loneless" : "Welcome to Loneless";
    document.querySelector("#hero p").textContent = translations[currentLang]["heroText"];
    document.querySelector(".btn i + span").textContent = translations[currentLang]["downloadNow"];
    document.querySelector("#about p").textContent = translations[currentLang]["aboutText"];
    document.querySelectorAll(".feature h3")[0].textContent = translations[currentLang]["featuresTitle1"];
    document.querySelectorAll(".feature p")[0].textContent = translations[currentLang]["featuresText1"];
    document.querySelectorAll(".feature h3")[1].textContent = translations[currentLang]["featuresTitle2"];
    document.querySelectorAll(".feature p")[1].textContent = translations[currentLang]["featuresText2"];
    document.querySelectorAll(".feature h3")[2].textContent = translations[currentLang]["featuresTitle3"];
    document.querySelectorAll(".feature p")[2].textContent = translations[currentLang]["featuresText3"];
    document.querySelector("#contact h2").textContent = translations[currentLang]["contactTitle"];
    document.querySelector("#contact p").textContent = translations[currentLang]["contactText"];
    document.querySelector("#contact-form button").textContent = translations[currentLang]["sendMessage"];
    document.querySelector("footer p").innerHTML = translations[currentLang]["footer"];

    // Atualiza o texto do botão
    document.getElementById("language-toggle").textContent = currentLang === "pt" ? "🇺🇸 English" : "🇧🇷 Português";
}
