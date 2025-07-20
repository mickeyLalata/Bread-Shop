import './template.css';

import homepage from './homepage.js';
import aboutpage from './about.js';
import menupage from './menu.js';

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