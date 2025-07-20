import './template.css';

import homepage from './homepage.js';

function navigation(){
    const buttons = document.querySelectorAll('nav button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const page = e.target.textContent.toLowerCase();

            if (page === "home"){
                homepage();
            } else if (page === "menu") {
                menupage();
            } else if (page === "about") {
                aboutpage();
            }
        });
    });
}

homepage();
navigation();