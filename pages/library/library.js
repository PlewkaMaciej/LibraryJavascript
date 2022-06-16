
import { singleArticle } from "./singleArticle.js";
const articlesInStorage = { ...window.localStorage };
window.onload = function () {
  Object.values(articlesInStorage).forEach((item) => {
    singleArticle(JSON.parse(item))
})
  }
  



 
