export default function aboutpage() {
    const content = document.getElementById("content");
    content.innerHTML = '';

    const aboutUs = document.createElement('h1');
    aboutUs.textContent = "About Us:";

    const p1 = document.createElement('p');
    p1.textContent = "Emily's Bakeshop is a family-owned bakery nestled in Micara Estates, Tanza, Cavite.";

    const p2 = document.createElement('p');
    p2.textContent = "We specialize in baking fresh, handmade bread daily — from soft pandesal in the morning,\n" +
    "to warm loaves and pastries in the afternoon." ;

    const p3 = document.createElement('p');
    p3.textContent = "Founded with love and passion by Emily, our bakery is built on the belief that fresh bread brings people together.\n" +
    "We proudly serve our local community with heart and dedication.";

    content.appendChild(aboutUs);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
}