import { fetchingData } from "./API/fetchingData.js";
import { sortByDate } from "./sort/sortByDate.js";
import { sortByTitle } from "./sort/sortByTitle.js"; 
import { fetchingCountData } from "./API/fetchingCountOfArticles.js";
import { pagination } from "./pagination.js";
const sortByTitleButton = document.querySelector("#sort-by-title-button")
const sortByDateButton = document.querySelector("#sort-by-date-button")
const howManyArticlesFetches = document.querySelector(".howManyArticlesFetches-paragraph")
export let pageNumber = 15;
export function modifyPageNumber( value ) { pageNumber = value; }
export let isSorted = 0;
export function modifySorted( value ) { isSorted = value; }
export let isSortedByTitle = 1;
export function modifyIsSortedByTitle( value ) { isSortedByTitle = value; }
window.onload = function () {
  fetchingData(pageNumber)
 fetchingCountData(pageNumber)
  }

  const changeTheValueOfParagraph=()=>{
    howManyArticlesFetches.innerHTML="12312312312"
  }
  howManyArticlesFetches.addEventListener("change",changeTheValueOfParagraph)
sortByTitleButton.addEventListener("click", sortByTitle);
sortByDateButton.addEventListener("click", sortByDate);
window.addEventListener("scroll", pagination)

