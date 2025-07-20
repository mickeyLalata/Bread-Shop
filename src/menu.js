import pandesalImg from './asset/pandesal.jpg';
import ubeImg from './asset/ube.jpg';

export default function menupage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const breads = document.createElement('div');
    breads.classList.add("breads");

    const pandesalWrapper = document.createElement('div');
    pandesalWrapper.classList.add("pandesalWrapper");

    const pandesal = document.createElement('img');
    pandesal.src = pandesalImg;
    pandesal.alt = "Freshly Baked Pandesal";
    pandesal.classList.add('pandesal');

    const pandesalCredits = document.createElement('p');
    pandesalCredits.classList.add('credits');

    pandesalCredits.innerHTML = 'Photo by <a href="https://unsplash.com/@joyceromero" target="_blank" rel="noopener noreferrer">Joyce Romero</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>';

    const pandesalSection = document.createElement('div');
    pandesalSection.classList.add("pandesalSection");

    const pandesalh1 = document.createElement('h1');
    pandesalh1.textContent = "Pandesal"

    const pandesalp = document.createElement('p');
    pandesalp.textContent = "Pandesal is a soft, fluffy bread roll that's a staple in every Filipino breakfast table.\n" +
    "Slightly sweet with a golden crust, it's best enjoyed warm—paired with coffee, cheese, or even dipped in chocolate.\n" +
    "Baked fresh every morning at Emily's Bakeshop in Micara Estates, our pandesal brings a comforting start to your day.\n" +
    "\n\nPrice: ₱2.00 each";

    const ubeWrapper = document.createElement('div');
    ubeWrapper.classList.add("pandesalWrapper");

    const ube = document.createElement('img');
    ube.src = ubeImg;
    ube.alt = "Freshly Baked Ube Pandesal";
    ube.classList.add('pandesal');

    const ubeCredits = document.createElement('p');
    ubeCredits.classList.add('credits');

    ubeCredits.innerHTML = 'Photo by <a href="https://unsplash.com/@miggymigs" target="_blank" rel="noopener noreferrer">Miguel Lorenzo</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>';

    const ubeSection = document.createElement('div');
    ubeSection.classList.add("pandesalSection");

    const ubeh1 = document.createElement('h1');
    ubeh1.textContent = "Ube Cheese Pandesal"

    const ubep = document.createElement('p');
    ubep.textContent = "Ube Pandesal is a rich, pillowy soft bread roll infused with the vibrant flavor of purple yam.\n" + 
    "Each bite reveals a delightful surprise—a generous filling of creamy ube halaya and melted real cheese, creating the perfect balance of sweet and savory.\n" + 
    "Perfect with coffee or as a sweet afternoon treat, it's a modern twist on a beloved classic.\n" +
    "   \nPrice: ₱3.00 each";



    pandesalWrapper.appendChild(pandesal);
    pandesalWrapper.appendChild(pandesalCredits);
    pandesalSection.appendChild(pandesalh1);
    pandesalSection.appendChild(pandesalp);
    breads.appendChild(pandesalWrapper);
    breads.appendChild(pandesalSection);

    ubeWrapper.appendChild(ube);
    ubeWrapper.appendChild(ubeCredits);
    ubeSection.appendChild(ubeh1);
    ubeSection.appendChild(ubep);
    breads.appendChild(ubeWrapper);
    breads.appendChild(ubeSection);
    content.appendChild(breads);
}