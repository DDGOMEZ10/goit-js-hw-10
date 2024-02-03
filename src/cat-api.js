

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

      // Muestra el mensaje de error y oculta el select
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
      showElement(error); // show the error with visible classMuestra el error con la clase visible
      hideElement(loader); // hidden the loader 
      hideElement(catInfo); // hidden the catInfo
    });
  }
  
  

  /*
  export function fetchBreeds() {
    const select = document.querySelector(".breed-select");
    const loader = document.querySelector(".loader");
    hideElement(select); // Oculta el select
    showElement(loader); // Muestra el loader
    return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => {
      showElement(select); // Muestra el select
      hideElement(loader); // Oculta el loader
      return response.data;
    })
    .catch(error => {
      console.error(error);
      hideElement(loader); // Oculta el loader
    });
  }
  
  export function fetchCatByBreed(breedId) {
    const catInfo = document.querySelector(".cat-info");
    const loader = document.querySelector(".loader");
    hideElement(catInfo); // Oculta el catInfo
    showElement(loader); // Muestra el loader
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      showElement(catInfo); // Muestra el catInfo
      hideElement(loader); // Oculta el loader
      return response.data;
    })
    .catch(error => {
      console.error(error);
      hideElement(loader); // Oculta el loader
    });
  }
  




/*export function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds")
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.error(error);
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.error(error);
  });
}*/
