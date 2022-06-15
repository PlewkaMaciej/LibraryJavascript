// let div = document.getElementById('cart_item');
// while(div.firstChild){
//     div.removeChild(div.firstChild);
// }
const container = document.querySelector(".container-for-all-article");
const xArticlesToFetchInput = document.querySelector(".fetched-x-articles-input")
const searchXArticlesButton = document.querySelector("#search-button")
  import { fetchingData} from "./fetchingData.js";
  import {fetchingSingleData} from "./fetchingData.js"
  let pageNumber=15
  window.onload = function () {
      fetchingData(pageNumber)
  };
  window.addEventListener("scroll",pagination)
  function pagination  () {
      
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
  
      ) {
          pageNumber+=1
          fetchingSingleData(pageNumber)
      }
    };
  const searchXArticles = ()=>{
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    pageNumber=xArticlesToFetchInput.value
    fetchingData(pageNumber)
    xArticlesToFetchInput.value=null
  }
    searchXArticlesButton.addEventListener("click", searchXArticles);