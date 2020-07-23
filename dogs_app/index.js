console.log("JavaScript loaded");

const searchParams = new URLSearchParams(window.location.search)
// search is in param because it's the value that we chose in our html input
const search = searchParams.get('search')
// console.log(search)

const baseURL = "http://localhost:3000";
let dogsURL = `${baseURL}/dogs`;
if (search) {
  // console.log(search)
  dogsURL = `${dogsURL}?search=${search}`
}
console.log(dogsURL)

const dogsSection = document.querySelector("section");

fetch(dogsURL)
  .then(parseJSON)
  .then(displayDogs);

function displayDogs(dogs) {
  dogs.forEach(showDog);
  // make a note for user. if dogs.length = 0, "No dogs match your search"
}

function showDog(dog) {
  const dogCard = document.createElement("div");
  
  const name = document.createElement("h2");
  name.textContent = dog.name; 
  
  const age = document.createElement("p");
  age.textContent = `${dog.age} years old`;

  dogCard.append(name, age);
  dogsSection.append(dogCard);
}

function parseJSON(response) {
  return response.json();
}