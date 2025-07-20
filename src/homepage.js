export default function homepage () {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const bakery = document.createElement('h1');
    bakery.textContent = ("Welcome to Emily's Bakery");

    const address = document.createElement('h3');
    address.textContent = ("Micara Estates, Tanza, Cavite");

    const introduction = document.createElement('p');
    introduction.textContent = ("At Emily's Bakery, we take pride in baking fresh, \n" +
    "delicious bread every single day. \n" +
    "From soft pandesal in the morning to warm loaves and pastries in the afternoon, \n" +
    "our bread brings comfort and joy to the local community.")

    const visit = document.createElement('p');
    visit.textContent = ("\n\nVisit us today and taste the difference for yourself!");

    content.appendChild(bakery);
    content.appendChild(address);
    content.appendChild(introduction);
    content.appendChild(visit);
}