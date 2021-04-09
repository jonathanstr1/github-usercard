import axios from "axios";




/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector(".cards");

axios
.get("https://api.github.com/users/jonathanstr1")
.then((res) => {
    // console.log(res.data);
    const newCard = cardMaker(res.data);
    entryPoint.appendChild(newCard);
})
.catch((error) => {
    
    console.log(error);
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// console.log(person);
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
// console.log(followersArray);

followersArray.forEach(person => {
  axios
  .get(`https://api.github.com/users/${person}`)
  .then((res) => {
    const newCard = cardMaker(res.data);
    entryPoint.appendChild(newCard);    
  })
  .catch((error) => {
    
    console.log(error);
  
  });
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(person) {
  const profCard = document.createElement("div");
  const cardInfo = document.createElement("div");
  const image = document.createElement("img");

  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const a = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  name.classList.add("name");
  name.textContent = person["name"];
  userName.classList.add("username");
  userName.textContent = person["login"];

  profile.textContent = "Profile: ";
  a.setAttribute("href", person["html_url"]);
  a.textContent = person["html_url"];
  // console.log(person["login"]);
  location.textContent = `Location: ${person.location}`;
  followers.textContent = `Followers: ${person.followers}`
  following.textContent = `Following: ${person.following}`

  profCard.classList.add("card");
  cardInfo.classList.add("card-info");
  bio.textContent = `Bio: ${person.bio}`;

  image.setAttribute("src", person["avatar_url"])
  profCard.appendChild(image);
  profCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(a);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  return profCard;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
