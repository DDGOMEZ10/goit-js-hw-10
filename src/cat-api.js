

import Notiflix from 'notiflix';
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_HuL5wNrwG68x7FLRn5nkOc4jCM2M6UnreNIQca8bXJIjoMCxbVob7o7nW8dzmm8C";
//Functions for export
function showElement(element) {
    element.classList.remove("hidden");
    element.classList.add("visible");
  }
  
  function hideElement(element) {
    element.classList.remove("visible");
    element.classList.add("hidden");
  }

  export function fetchBreeds() {
    const select = document.querySelector(".mySelect");
    const loader = document.querySelector(".loader");
    const error = document.querySelector(".error");
    hideElement(select); // hidden the select
    showElement(loader); // show the loader
    return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => {
      showElement(select); // show the select
      hideElement(loader); // hidden the loader
      return response.data;
    })
    .catch(error => {
      console.error(error);
      const errorElement = document.querySelector(".error");
  errorElement.style.display = "none";
  
  const select = document.querySelector(".mySelect");
  select.style.display = "none";
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');

      // Show the message errorand hide the select
      error.style.display = "block";
      select.style.display = "none";
    });
}
  export function fetchCatByBreed(breedId) {
    const catInfo = document.querySelector(".cat-info");
    const loader = document.querySelector(".loader");
    const error = document.querySelector(".error");
    hideElement(error); // hidden the error  
    hideElement(catInfo); // hidden the catInfo
    showElement(loader); // show the loader
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      showElement(catInfo); // show the catInfo
      hideElement(loader); // hidden the loader
      return response.data;
    })
    .catch(error => {
      console.error(error);
      showElement(error); // show the error with visible class
      hideElement(loader); // hidden the loader 
      hideElement(catInfo); // hidden the catInfo
    });
  }
  
  

 