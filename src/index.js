import { HomePage } from "./homepage";
import { homeBtn, contactBtn, menuBtn } from "./navigation";
import { ContactPage } from "./contact";
import { MenuPage } from "./menu";
import './style.css';


const clearPage = () => {
    while(MainDiv.firstChild) {
        MainDiv.removeChild(MainDiv.lastChild);
    }
    MainDiv.appendChild(homeBtn);
    MainDiv.appendChild(contactBtn);
    MainDiv.appendChild(menuBtn);
    
}

const MainDiv = document.getElementById('content');
MainDiv.appendChild(homeBtn);
MainDiv.appendChild(contactBtn);
MainDiv.appendChild(menuBtn);
HomePage();
homeBtn.addEventListener('click', () => {
    clearPage();
    HomePage();
})
contactBtn.addEventListener('click', () => {
    clearPage();
    ContactPage();
})
menuBtn.addEventListener('click', () => {
    clearPage();
    MenuPage();
})





