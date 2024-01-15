const MenuDiv = document.getElementById('content');

const menuHeading = document.createElement('h3');
const menuItem1 = document.createElement('p');
const menuItem2 = document.createElement('p');
const menuItem3 = document.createElement('p');

menuHeading.innerHTML = "Menu";
menuItem1.innerHTML = "Ramen with egg noodles";
menuItem2.innerHTML = "Beef Chow Mein";
menuItem3.innerHTML = "Sweet and Sour Pork"

const MenuPage = () => {
    MenuDiv.appendChild(menuHeading)
    MenuDiv.appendChild(menuItem1);
    MenuDiv.appendChild(menuItem2);
    MenuDiv.appendChild(menuItem3);
}

export {MenuPage};