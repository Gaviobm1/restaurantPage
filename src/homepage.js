
import Flag from './panda.jpeg';

const MainDiv = document.getElementById('content');

const RestaurantName = document.createElement('h1');
RestaurantName.innerHTML = 'Restaurant of China';

const SubTitle = document.createElement('h2');
SubTitle.innerHTML = 'Where you\'ll eat adequately!';

const Info = document.createElement('p');
Info.innerHTML = "Came for lunch with my sister. We loved our Thai-style mains which were amazing with lots of flavour, very impressive for a vegetarian restaurant.\n\nBut the service was below average and the chips were too terrible to finish.When we arrived at 1.40, we had to wait 20 minutes while they got our table ready. OK, so we didn't have a reservation, but the restaurant was only half full. \n\nThere was no reason to make us wait at all.We ordered the chips as a side dish and they looked delicious. But, when we tasted them, they were overcooked and swimming in oil so we left most of them. We expected a lot more for $10!";

const myFlag = new Image();
myFlag.src = Flag

const HomePage = () => {
MainDiv.appendChild(RestaurantName);
MainDiv.appendChild(SubTitle);
MainDiv.appendChild(myFlag);
MainDiv.appendChild(Info);
}
    
export { HomePage }
