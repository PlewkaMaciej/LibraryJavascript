// let div = document.getElementById('cart_item');
// while(div.firstChild){
//     div.removeChild(div.firstChild);
// }

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
  
    