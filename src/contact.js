

const ContactDiv = document.getElementById('content');
const ContactHeading = document.createElement('h3');
ContactHeading.innerHTML= "Contact Us:"

const Contacts = document.createElement('p')
Contacts.innerHTML = "Telf: 95643739\nEmail: fakeemail@gmail.es\nAddress: Calle Bermudez de Castro 45, Oviedo, 33011"

const ContactPage = () => {
ContactDiv.appendChild(ContactHeading);
ContactDiv.appendChild(Contacts);
}

export { ContactPage }


