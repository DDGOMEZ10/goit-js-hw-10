
import axios from "axios";


axios.defaults.headers.common["x-api-key"] = "live_HuL5wNrwG68x7FLRn5nkOc4jCM2M6UnreNIQca8bXJIjoMCxbVob7o7nW8dzmm8C";

//imports from cat-api.js
import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.querySelector(".mySelect");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

breedSelect.addEventListener("change", event => {
  const breedId = event.target.value;
  loader.style.display = "block";
  error.style.display = "none";
  catInfo.style.display = "none";

  fetchCatByBreed(breedId)
  .then(data => {
    const cat = data[0];
    const breedName = cat.breeds[0].name;
    const breedDescription = cat.breeds[0].description;
    const breedTemperament = cat.breeds[0].temperament;
    const imageUrl = cat.url;

    const catNameElement = document.createElement("h2");
    catNameElement.textContent = breedName;

    const catDescriptionElement = document.createElement("p");
    catDescriptionElement.textContent = breedDescription;

    const catTemperamentElement = document.createElement("p");
    catTemperamentElement.textContent = `Temperamento: ${breedTemperament}`;

    const catImageElement = document.createElement("img");
    catImageElement.src = imageUrl;
    catImageElement.style.width = "100%"; 
catImageElement.style.height = "100%"; 
catImageElement.classList.add('gallery__image');

    catInfo.innerHTML = "";
    catInfo.appendChild(catNameElement);
    catInfo.appendChild(catDescriptionElement);
    catInfo.appendChild(catTemperamentElement);
    catInfo.appendChild(catImageElement);

    loader.style.display = "none";
    catInfo.style.display = "block";
  })
  .catch(error => {
    console.error(error);
    loader.style.display = "none";
    error.style.display = "block";
  });
});

fetchBreeds()
.then(data => {
  const select = document.querySelector(".mySelect");
  data.forEach(breed => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.text = breed.name;
    select.appendChild(option);
  });
})
.catch(error => {
  console.error(error);
  if (error && error.style) {
    error.style.display = "block";
  }
});