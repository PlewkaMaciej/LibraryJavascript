import { fetchingData } from "./API/fetchingData.js";
import { fetchingSingleData } from "./API/fetchingData.js"
import { fetchingSingleDataSortedByDate } from "./API/fetchingDataSortedByDate.js";
import { fetchingSingleDataSortedByTitle } from "./API/fetchingDataSortedByTitle.js";
import { sortByDate } from "./sort/sortByDate.js";
import { sortByTitle } from "./sort/sortByTitle.js"; 
const sortByTitleButton = document.querySelector("#sort-by-title-button")
const sortByDateButton = document.querySelector("#sort-by-date-button")

let pageNumber = null
export let isSorted = 0;
export function modifySorted( value ) { isSorted = value; }
export let isSortedByTitle = 1;
export function modifyIsSortedByTitle( value ) { isSortedByTitle = value; }


window.onload = function () {
  fetchingData(pageNumber)
};
window.addEventListener("scroll", pagination)
function pagination() {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    if (isSorted === 0) {
      pageNumber = pageNumber + 1
      fetchingSingleData(pageNumber)
    }
    if (isSorted === 1) {
      if (isSortedByTitle === 1) {
        pageNumber = pageNumber + 1
        fetchingSingleDataSortedByTitle(pageNumber)
      }
      if (isSortedByTitle === 0) {
        pageNumber = pageNumber + 1
        fetchingSingleDataSortedByDate(pageNumber)
        console.log(pageNumber)
      }
    }

  }
};
sortByTitleButton.addEventListener("click", sortByTitle);
sortByDateButton.addEventListener("click", sortByDate);


